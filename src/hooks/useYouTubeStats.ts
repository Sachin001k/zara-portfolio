import { useQuery } from "@tanstack/react-query";

export type YouTubeStats = {
  subscribers: number | null;
  videos: number;
  views: Record<string, number>;
};

export function useYouTubeStats(videoIds: string[]) {
  return useQuery<YouTubeStats>({
    queryKey: ["youtube-stats", videoIds],
    queryFn: async () => {
      const res = await fetch(`/api/youtube?ids=${videoIds.join(",")}`);
      if (!res.ok) throw new Error(`YouTube stats request failed: ${res.status}`);
      return res.json();
    },
    staleTime: 60 * 60 * 1000,
    retry: false,
  });
}
