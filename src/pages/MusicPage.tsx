import { useState } from "react";
import { motion } from "framer-motion";
import {
  Piano,
  Mic2,
  Award,
  Users,
  FlaskConical,
  Sparkles,
  Music2,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { siteContact } from "@/lib/site";
import GooglePhotosVideo from "@/components/GooglePhotosVideo";
import InlineVideo from "@/components/InlineVideo";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useYouTubeStats } from "@/hooks/useYouTubeStats";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@ZaraPereira-k3b";
// "Zara | If I Ain't Got You (ASB Winter Concert - Choir | Live Performance Dec2025)"
const FEATURED_VIDEO_ID = "5lQOUcgSLpc";

const AMIS_WEBSITE_URL = "https://amis-online.org/";
const AMIS_LIVE_STREAM_2026_URL = "https://www.youtube.com/live/m6mxKxBDjhE?si=A5QWkmIzVHXab1MD";
// Choir participation photos, in order: school choir (black), STOP GAPS (colourful), then AMIS.
const SCHOOL_CHOIR_PHOTOS = ["46", "47", "48", "50"].map((id) => ({
  src: `/media/choir-story/photo-${id}.jpg`,
  alt: "Zara performing with the school choir",
}));
const STOP_GAPS_PHOTOS = ["05", "10", "06", "11"].map((id) => ({
  src: `/media/choir-story/photo-${id}.jpg`,
  alt: "Zara performing with the STOP GAPS choir",
}));

// Photos from the AMIS honour choir album (https://photos.app.goo.gl/cSKMyhnuLNrVE8Fm9).
const AMIS_HONOUR_CHOIR_PHOTOS = [
  { src: "/media/amis-honour-choir/honour-choir-1.jpg", alt: "Zara at the AMIS Jeju 2026 mural" },
  { src: "/media/amis-honour-choir/honour-choir-2.jpg", alt: "AMIS honour choir on stage" },
  { src: "/media/amis-honour-choir/honour-choir-3.jpg", alt: "AMIS honour choir singers in concert" },
  { src: "/media/amis-honour-choir/honour-choir-4.jpg", alt: "AMIS Asian HS Honor Choir Gala Concert 2026" },
  { src: "/media/amis-honour-choir/honour-choir-5.jpg", alt: "AMIS gala concert performance" },
  { src: "/media/amis-honour-choir/honour-choir-6.jpg", alt: "AMIS honour choir singers close-up" },
  { src: "/media/amis-honour-choir/honour-choir-7.jpg", alt: "AMIS honour choir at Korea International School, Jeju" },
  { src: "/media/amis-honour-choir/honour-choir-8.jpg", alt: "AMIS honour choir full stage view" },
];
const CHOIR_STORY_ALBUM_URL = "https://photos.app.goo.gl/ygnEk2r1XqfezfNE7";
// Pool of media from the choir story album above; a random selection is shown on each visit.
const CHOIR_STORY_PHOTO_POOL = [
  "12", "13", "14", "15", "16", "17", "18", "20", "21", "22", "23", "26", "27", "32", "33", "34", "35", "36", "39", "49"
].map((id) => ({ src: `/media/choir-story/photo-${id}.jpg`, alt: "A moment from Zara's choir story" }));
const CHOIR_STORY_VIDEO_POOL = ["02", "09", "19", "25", "29", "30", "38", "44"].map((id) => ({
  src: `/media/choir-story/video-${id}.mp4`,
  poster: `/media/choir-story/video-${id}.jpg`,
}));

// Photos from the "Zara singing" album (ZARA_SINGING_ALBUM_URL); a random 8 are shown on each visit.
const ZARA_SINGING_PHOTO_POOL = ["01", "11", "12", "13", "16", "18", "20", "25", "27", "29", "30"].map(
  (id) => ({ src: `/media/zara-singing/photo-${id}.jpg`, alt: "Zara's music through the years" }),
);

const pickRandom = <T,>(items: T[], count: number) =>
  [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, count)
    .map(({ item }) => item);

const ZARA_SINGING_ALBUM_URL =
  "https://photos.google.com/share/AF1QipNy3AZzH-UFUpPX3yLdBnJveOJug01CcPgwg3hx6knM92byDSiVAnm7Z8biZIobcA?x=106694151&obfsgid=117410301389813695342&key=NWVfNHM1Z0lTMmJXTXp0eUU0SHhBVDVudWVnb05B";

// Fallback numbers, shown only if the live /api/youtube lookup fails.
const FALLBACK_SUBSCRIBERS = 39;
const FALLBACK_VIDEO_COUNT = 9;

const recentVideos = [
  {
    title: "If I Ain't Got You - Zara | Live at Cafe Concert 2025",
    views: "521 views",
    duration: "3:39",
    url: "https://www.youtube.com/watch?v=fw6jvI9JViQ",
  },
  {
    title: "The Girl From Ipanema - Zara (Live at Jammies 2026)",
    views: "23 views",
    duration: "3:40",
    url: "https://www.youtube.com/watch?v=xh-vilAHwvY",
  },
  {
    title: "Roxanne - Live at American School of Bombay (Nov 2025)",
    views: "35 views",
    duration: "1:54",
    url: "https://www.youtube.com/watch?v=PvKfBlC-9Kw",
  },
];

const formatCount = (count: number, noun: string) =>
  `${count.toLocaleString()} ${noun}${count === 1 ? "" : "s"}`;

const videoIdFromUrl = (url: string) => new URL(url).searchParams.get("v") ?? "";

const journeyMilestones: {
  icon: LucideIcon;
  label: string;
  date: string;
  description: string;
}[] = [
  {
    icon: Sparkles,
    label: "Since the age of 5",
    date: "2014 – Present",
    description:
      "Early piano lessons, discovering a love for singing, and finding joy in every note.",
  },
  {
    icon: Mic2,
    label: "Performance Highlights",
    date: "2016 – 2020",
    description:
      "Solo recitals, ensemble concerts, and recorded performances showcasing musical growth.",
  },
  {
    icon: Award,
    label: "AMIS & Trinity Grades",
    date: "2020 – 2023",
    description:
      "AMIS Choir international performances and Trinity College London certifications in voice and theory.",
  },
  {
    icon: FlaskConical,
    label: "Research & Awards",
    date: "2023 – 2024",
    description:
      "CREST Gold Award research and music therapy publications advancing the field.",
  },
  {
    icon: Users,
    label: "Community Impact",
    date: "2024 – Present",
    description:
      "Music wellness workshops and community outreach programs bringing music to all.",
  },
  {
    icon: Music2,
    label: "Future Projects",
    date: "2025 – Beyond",
    description:
      "More musical explorations, collaborations, and creative ventures on the horizon.",
  },
];

const YouTubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
      fill="#FF0000"
    />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 2.5l8 4.5-8 4.5V2.5z" fill="currentColor" />
  </svg>
);

const MusicPage = () => {
  const [enlargedPhoto, setEnlargedPhoto] = useState<{ src: string; alt: string } | null>(null);
  const [choirStoryPhotos] = useState(() => pickRandom(CHOIR_STORY_PHOTO_POOL, 8));
  const [choirStoryVideos] = useState(() => pickRandom(CHOIR_STORY_VIDEO_POOL, 4));
  const [singingPhotos] = useState(() => pickRandom(ZARA_SINGING_PHOTO_POOL, 8));
  const { data: youtubeStats } = useYouTubeStats(recentVideos.map((v) => videoIdFromUrl(v.url)));
  const subscriberCount = youtubeStats?.subscribers ?? FALLBACK_SUBSCRIBERS;
  const videoCount = youtubeStats?.videos ?? FALLBACK_VIDEO_COUNT;
  const liveViews = (video: (typeof recentVideos)[number]) => {
    const count = youtubeStats?.views[videoIdFromUrl(video.url)];
    return count === undefined ? video.views : formatCount(count, "view");
  };
  return (
    <div className="page-scroll relative min-h-screen">
      <div className="absolute inset-0 grid-paper-bg" />
      <div
        className="glow-orb"
        style={{
          width: 320,
          height: 320,
          top: "6%",
          right: "4%",
          background: "radial-gradient(circle, hsl(var(--coral) / 0.1), transparent 70%)",
        }}
      />

      <div className="relative z-10 px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1
              className="text-4xl md:text-6xl font-light text-foreground"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
            >
              Music
            </h1>
          </motion.div>

          {/* ── YouTube Channel (prominent) ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-5">
              <YouTubeIcon size={22} />
              <h2 className="text-xl md:text-2xl font-light text-foreground tracking-wide">
                YouTube Channel
              </h2>
            </div>

            <div
              className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  "0 12px 40px -10px hsl(var(--shadow-color) / 0.12), inset 0 1px 0 hsl(var(--cream) / 0.5)",
              }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-red-600 to-red-500" />

              <div className="aspect-video w-full bg-muted/20">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
                  title="Featured performance — Zara Pereira"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="flex items-center gap-3 flex-1">
                    <img
                      src={siteContact.profileImage}
                      alt="Zara Pereira"
                      className="w-14 h-14 rounded-full object-cover object-top border border-border/30"
                    />
                    <div>
                      <p className="text-base font-light text-foreground">Zara Pereira</p>
                      <p className="text-xs text-muted-foreground font-light">@ZaraPereira-k3b</p>
                      <div className="flex gap-4 mt-1">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                          {formatCount(subscriberCount, "subscriber")}
                        </span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                          {formatCount(videoCount, "video")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-white text-sm font-light shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #FF0000, #cc0000)",
                      boxShadow: "0 4px 14px rgba(255,0,0,0.25)",
                    }}
                  >
                    <YouTubeIcon size={18} />
                    Subscribe on YouTube
                  </motion.a>
                </div>

                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 max-w-2xl">
                  Live performances, vocal covers, and musical moments from recitals and school events
                  in {siteContact.location.split(",")[0]}.
                </p>

                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-light mb-3">
                  Recent Videos
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {recentVideos.map((video) => (
                    <a
                      key={video.url}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 p-3 rounded-xl border border-border/20 hover:bg-muted/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center shrink-0 text-muted-foreground/50 group-hover:text-muted-foreground/80">
                        <PlayIcon />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-foreground font-light leading-snug line-clamp-2">
                          {video.title}
                        </p>
                        <p className="text-[10px] text-muted-foreground/60 font-light mt-1">
                          {liveViews(video)}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── AMIS Choir ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-5">
              <Award size={20} strokeWidth={1.4} className="text-olive" />
              <h2 className="text-xl md:text-2xl font-light text-foreground tracking-wide">
                Choir participation
              </h2>
            </div>

            <div
              className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-6 md:p-8"
              style={{
                boxShadow:
                  "0 12px 40px -10px hsl(var(--shadow-color) / 0.12), inset 0 1px 0 hsl(var(--cream) / 0.5)",
              }}
            >
              <div className="space-y-3 text-sm text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl">
                <p>
                  Zara has performed in multiple choirs, both at school and in selective-entry honour
                  choirs. She was selected at 8 to compete in the prestigious STOP GAPS choir in
                  Mumbai, and performed at the NCPA. She has been selected to participate in the AMIS
                  honour choir for 3 consecutive years.
                </p>
                <p>
                  <a
                    href={AMIS_WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive underline underline-offset-2 hover:text-olive-dark transition-colors"
                  >
                    AMIS
                  </a>{" "}
                  — the Association for Music in International Schools — is an international choir
                  and honor ensemble programme bringing together student musicians from schools
                  around the world for festivals, workshops, and live performances.
                </p>
              </div>

              {[
                { title: "School choir", photos: SCHOOL_CHOIR_PHOTOS },
                { title: "STOP GAPS choir", photos: STOP_GAPS_PHOTOS },
                { title: "AMIS honour choir", photos: AMIS_HONOUR_CHOIR_PHOTOS },
              ].map((group) => (
                <div key={group.title} className="mb-6">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70 font-light mb-3">
                    {group.title}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {group.photos.map((photo) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => setEnlargedPhoto(photo)}
                        className="group aspect-square rounded-xl overflow-hidden border border-border/20"
                        aria-label={`Enlarge photo: ${photo.alt}`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="max-w-md mb-6">
                <GooglePhotosVideo
                  href={AMIS_LIVE_STREAM_2026_URL}
                  label="Watch the 2026 AMIS live stream"
                  poster="https://i.ytimg.com/vi/m6mxKxBDjhE/hqdefault.jpg"
                  showLabel={false}
                />
                <p className="text-xs font-light text-muted-foreground mt-2">
                  Watch the 2026 AMIS live stream
                </p>
              </div>

              <a
                href={AMIS_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-light text-olive hover:text-olive-dark transition-colors"
              >
                Learn more about AMIS <ExternalLink size={12} />
              </a>
            </div>
          </motion.section>

          {/* ── Zara's Choir Story ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-5">
              <Users size={20} strokeWidth={1.4} className="text-olive" />
              <h2 className="text-xl md:text-2xl font-light text-foreground tracking-wide">
                Zara&rsquo;s Choir Story
              </h2>
            </div>

            <div
              className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-6 md:p-8"
              style={{
                boxShadow:
                  "0 12px 40px -10px hsl(var(--shadow-color) / 0.12), inset 0 1px 0 hsl(var(--cream) / 0.5)",
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {choirStoryPhotos.map((photo) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setEnlargedPhoto(photo)}
                    className="group aspect-square rounded-xl overflow-hidden border border-border/20"
                    aria-label={`Enlarge photo: ${photo.alt}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {choirStoryVideos.map((video) => (
                  <InlineVideo key={video.src} src={video.src} poster={video.poster} />
                ))}
              </div>

              <a
                href={CHOIR_STORY_ALBUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-light text-olive hover:text-olive-dark transition-colors"
              >
                Link to choir story <ExternalLink size={12} />
              </a>
            </div>
          </motion.section>

          {/* ── Musical Journey (reduced prominence) ── */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="opacity-80"
          >
            <div className="mb-5">
              <h2 className="text-base md:text-lg font-light text-muted-foreground tracking-wide">
                Musical Journey
              </h2>
              <div
                className="w-12 h-px mt-2"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--muted-foreground) / 0.3), transparent)",
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {journeyMilestones.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="p-4 rounded-xl border border-border/20 bg-card/40"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-muted/30 flex items-center justify-center text-muted-foreground/60">
                        <Icon size={15} strokeWidth={1.4} />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70 font-light">
                        {step.date}
                      </span>
                    </div>
                    <h3 className="text-sm font-light text-foreground mb-1">{step.label}</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-light mt-8 mb-3">
              Music, Through the Years
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {singingPhotos.map((photo) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setEnlargedPhoto(photo)}
                  className="group aspect-square rounded-xl overflow-hidden border border-border/20"
                  aria-label={`Enlarge photo: ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </button>
              ))}
            </div>

            <a
              href={ZARA_SINGING_ALBUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-light text-olive hover:text-olive-dark transition-colors"
            >
              Music through the years – Zara singing <ExternalLink size={12} />
            </a>
          </motion.section>
        </div>
      </div>

      <Dialog open={enlargedPhoto !== null} onOpenChange={(open) => !open && setEnlargedPhoto(null)}>
        <DialogContent className="max-w-4xl p-2 bg-card border-border/30">
          <DialogTitle className="sr-only">{enlargedPhoto?.alt ?? "Choir photo"}</DialogTitle>
          {enlargedPhoto && (
            <img
              src={enlargedPhoto.src}
              alt={enlargedPhoto.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MusicPage;
