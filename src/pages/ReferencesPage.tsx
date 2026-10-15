import { motion } from "framer-motion";
import { User, Music2 } from "lucide-react";
import MarqueeText from "@/components/MarqueeText";
import InlineVideo from "@/components/InlineVideo";

// Placeholder list — names/roles pulled from Zara's existing session history on this site.
// Add remaining references and contact details when available.
const references: {
  name: string;
  role: string;
  context: string;
}[] = [
  {
    name: "Sara D'Souza",
    role: "Music Therapist",
    context: "Supervised Zara's internship (Aug 2024 – Mar 2025), observing and co-leading private music therapy sessions.",
  },
  {
    name: "Priyanka Pandit",
    role: "The Music Circle",
    context: "Supervises Zara's ongoing work leading Music Connect activities and observing practice (Sept 2025 – present).",
  },
];

// Video references from https://photos.app.goo.gl/6ii82H1RmkQJVKb98
// Ordered along Zara's musical journey, from her first teachers to her current coach.
const musicReferenceVideos: {
  file: number;
  name: string;
  role: string;
  tag: string;
}[] = [
  { file: 3, name: "Marie-Fleur", role: "Zara’s first piano teacher", tag: "Piano" },
  { file: 4, name: "Angela Mei Lee", role: "Zara’s first music teacher at ASB", tag: "Music · ASB" },
  { file: 2, name: "Jane Rinard", role: "Zara’s first choir teacher at ASB", tag: "Choir · ASB" },
  { file: 1, name: "Svea Suresh", role: "Zara’s current vocal coach", tag: "Vocals · Current" },
];

const ReferencesPage = () => {
  return (
    <div className="page-scroll relative min-h-screen">
      <div className="absolute inset-0 grid-paper-bg" />
      <div
        className="glow-orb"
        style={{
          width: 260,
          height: 260,
          top: "10%",
          left: "8%",
          background: "radial-gradient(circle, hsl(var(--coral) / 0.08), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <MarqueeText text="REFERENCES · SUPERVISORS · MENTORS" />

        <div className="px-6 pb-12">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              className="mb-10 text-center"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-light text-coral uppercase tracking-[0.2em] mb-1">Zara's</p>
              <h1 className="text-3xl md:text-4xl font-extralight text-foreground tracking-tight">
                References
              </h1>
              <motion.div
                className="w-16 h-px mt-3 mx-auto"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--coral) / 0.5), transparent)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </motion.div>

            <div className="space-y-4">
              {references.map((ref, i) => (
                <motion.div
                  key={ref.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card p-5 flex items-start gap-4"
                  style={{
                    boxShadow:
                      "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                  }}
                >
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground shrink-0"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--coral)), hsl(var(--brown-red)))",
                      boxShadow: "0 2px 8px hsl(var(--coral) / 0.3)",
                    }}
                  >
                    <User size={16} strokeWidth={1.4} />
                  </span>
                  <div>
                    <h3 className="text-sm font-normal text-foreground">{ref.name}</h3>
                    <p className="text-[10px] font-light text-coral uppercase tracking-[0.15em] mt-0.5">
                      {ref.role}
                    </p>
                    <p className="text-xs font-light text-muted-foreground leading-relaxed mt-2">
                      {ref.context}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.section
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <Music2 size={18} strokeWidth={1.4} className="text-coral" />
                <h2 className="text-lg md:text-xl font-light text-foreground tracking-wide">
                  Music Reference
                </h2>
              </div>
              <p className="text-xs font-light text-muted-foreground leading-relaxed mb-4">
                Video references from the music teachers who have guided Zara, from her first piano
                lessons to her current vocal training.
              </p>
              <div
                className="glass-card p-4 md:p-5 grid grid-cols-1 sm:grid-cols-2 gap-5"
                style={{
                  boxShadow:
                    "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                }}
              >
                {musicReferenceVideos.map((ref) => (
                  <figure key={ref.file} className="space-y-2.5">
                    <InlineVideo
                      src={`/media/music-reference/reference-${ref.file}.mp4`}
                      poster={`/media/music-reference/reference-${ref.file}.jpg`}
                      title={`Video reference from ${ref.name}, ${ref.role}`}
                    />
                    <figcaption className="flex items-start justify-between gap-3 px-0.5">
                      <div>
                        <p className="text-sm font-normal text-foreground leading-snug">{ref.name}</p>
                        <p className="text-xs font-light text-muted-foreground mt-0.5">{ref.role}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-coral/15 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.12em] text-coral">
                        {ref.tag}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </motion.section>

            <p className="text-xs font-light text-muted-foreground text-center mt-8">
              Contact details available on request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;
