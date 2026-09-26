import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy, Mic2, type LucideIcon } from "lucide-react";
import MarqueeText from "@/components/MarqueeText";

// Placeholder dates/details below are drawn from other pages on the site (Resume, Music, Music Connect).
// Confirm exact dates and add certificate images/PDFs when available.
const certificates: {
  icon: LucideIcon;
  title: string;
  issuer: string;
  date: string;
  description: string;
}[] = [
  {
    icon: Trophy,
    title: "CREST Gold Award",
    issuer: "British Science Association",
    date: "2023 – 2024",
    description:
      "Independent research project in music and wellness, awarded CREST Gold for exceptional scientific inquiry.",
  },
  {
    icon: GraduationCap,
    title: "Trinity College London — Grade 7 Voice",
    issuer: "Trinity College London",
    date: "2020 – 2023",
    description: "Graded examination in music performance and theory, achieved with distinction.",
  },
  {
    icon: Mic2,
    title: "AMIS Choir Certification",
    issuer: "Association for Music in International Schools",
    date: "2020 – Present",
    description: "International choir performances and honor ensemble participation with AMIS.",
  },
  {
    icon: Award,
    title: "Nordoff-Robbins Specialist Training",
    issuer: "Nordoff-Robbins Centre for Music Therapy",
    date: "2024 – 2025",
    description:
      "Specialist training in music-for-wellness practice, observing experienced practitioners in clinical settings.",
  },
  {
    icon: GraduationCap,
    title: "Music Therapy Coursework",
    issuer: "Berklee College of Music",
    date: "2024 – 2025",
    description: "Online coursework deepening understanding of music therapy principles and practice.",
  },
];

const CertificatesAwardsPage = () => {
  return (
    <div className="page-scroll relative min-h-screen">
      <div className="absolute inset-0 grid-paper-bg" />
      <div
        className="glow-orb"
        style={{
          width: 280,
          height: 280,
          top: "8%",
          right: "10%",
          background: "radial-gradient(circle, hsl(var(--olive) / 0.1), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <MarqueeText text="CERTIFICATES · AWARDS · GRADES · RECOGNITION" />

        <div className="px-6 pb-12">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              className="mb-10 text-center"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-light text-coral uppercase tracking-[0.2em] mb-1">Zara's</p>
              <h1 className="text-3xl md:text-4xl font-extralight text-foreground tracking-tight">
                Certificates &amp; Awards
              </h1>
              <motion.div
                className="w-16 h-px mt-3 mx-auto"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--coral) / 0.5), transparent)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="glass-card p-5 space-y-3"
                    style={{
                      boxShadow:
                        "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-primary-foreground shrink-0"
                        style={{
                          background: "linear-gradient(135deg, hsl(var(--olive)), hsl(var(--olive-dark)))",
                          boxShadow: "0 2px 8px hsl(var(--olive) / 0.3)",
                        }}
                      >
                        <Icon size={16} strokeWidth={1.4} />
                      </span>
                      <div>
                        <h3 className="text-sm font-normal text-foreground leading-snug">{cert.title}</h3>
                        <p className="text-[10px] font-light text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-light">
                      {cert.date}
                    </p>
                    <p className="text-xs font-light text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesAwardsPage;
