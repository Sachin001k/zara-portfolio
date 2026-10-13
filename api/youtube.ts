// Vercel serverless function: live YouTube channel + video stats.
// Requires the YOUTUBE_API_KEY env var (YouTube Data API v3) in Vercel project settings.
// GET /api/youtube?ids=VIDEO_ID,VIDEO_ID

const CHANNEL_HANDLE = "@ZaraPereira-k3b";
const API = "https://www.googleapis.com/youtube/v3";

export async function GET(request: Request) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) {
    return Response.json({ error: "YOUTUBE_API_KEY not configured" }, { status: 500 });
  }

  const ids = (new URL(request.url).searchParams.get("ids") ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter((id) => /^[\w-]{11}$/.test(id))
    .slice(0, 50);

  try {
    const channelReq = fetch(
      `${API}/channels?part=statistics&forHandle=${encodeURIComponent(CHANNEL_HANDLE)}&key=${key}`,
    ).then((r) => r.json());
    const videosReq = ids.length
      ? fetch(`${API}/videos?part=statistics&id=${ids.join(",")}&key=${key}`).then((r) => r.json())
      : Promise.resolve({ items: [] });

    const [channel, videos] = await Promise.all([channelReq, videosReq]);
    const stats = channel.items?.[0]?.statistics;
    if (!stats) throw new Error("Channel not found");

    const views: Record<string, number> = {};
    for (const item of videos.items ?? []) {
      views[item.id] = Number(item.statistics?.viewCount ?? 0);
    }

    return Response.json(
      {
        subscribers: stats.hiddenSubscriberCount ? null : Number(stats.subscriberCount),
        videos: Number(stats.videoCount),
        views,
      },
      // Cache at the edge for 1 hour so we stay well inside the API quota.
      { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } },
    );
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 502 });
  }
}
