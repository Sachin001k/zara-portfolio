import { motion } from "framer-motion";
import {
  Piano,
  Mic2,
  Award,
  Users,
  FlaskConical,
  Sparkles,
  Music2,
  type LucideIcon,
} from "lucide-react";
import { siteContact } from "@/lib/site";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@ZaraPereira-k3b";
const FEATURED_VIDEO_ID = "fw6jvI9JViQ";

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

const journeyMilestones: {
  icon: LucideIcon;
  label: string;
  date: string;
  description: string;
}[] = [
  {
    icon: Sparkles,
    label: "Since Childhood",
    date: "2010 – 2016",
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
                          34 subscribers
                        </span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                          6 videos
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
                          {video.views}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
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
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
