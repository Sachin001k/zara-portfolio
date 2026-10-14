import { useState } from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy, Mic2, Medal, Users, FileImage, type LucideIcon } from "lucide-react";
import MarqueeText from "@/components/MarqueeText";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type CertificateImage = { src: string; title: string; detail: string };

const img = (file: string, title: string, detail: string): CertificateImage => ({
  src: `/media/certificates/${file}.jpg`,
  title,
  detail,
});

type Certificate = {
  icon: LucideIcon;
  title: string;
  issuer: string;
  date: string;
  description: string;
  /** Clickable certificate links (each opens its photo), optionally split into labelled groups. */
  groups?: { label?: string; images: CertificateImage[] }[];
  note?: string;
};

// Placeholder dates/details below are drawn from other pages on the site (Resume, Music, Music Connect).
const certificates: Certificate[] = [
  {
    icon: Medal,
    title: "Academic & Mission Awards",
    issuer: "American School of Bombay",
    date: "2020 – 2025",
    description: "School awards recognising academic excellence, the arts and the ASB mission.",
    groups: [
      {
        label: "ASB Mission Awards",
        images: [
          img("asb-mission-continuous-inquiry-2023-24", "Continuous Inquiry", "ASB Mission Award · 2023-24"),
          img("asb-mission-enhancing-lives-2022-23", "Enhancing the Lives of Others", "ASB Mission Award · 2022-23"),
          img("asb-mission-enhancing-lives-2023-24", "Enhancing the Lives of Others", "ASB Mission Award · 2023-24"),
          img("asb-mission-enhancing-lives-2024-25", "Enhancing the Lives of Others", "ASB Mission Award · 2024-25"),
        ],
      },
      {
        label: "Academic Excellence",
        images: [
          img("asb-physics-2023-24", "Physics", "Certificate of Excellence · 2023-24"),
          img("asb-biology-2024-25", "Biology 10", "Certificate of Excellence · 2024-25"),
          img("asb-english-2023-24", "English", "Certificate of Excellence · 2023-24"),
          img("asb-english-2024-25", "English 10", "Certificate of Excellence · 2024-25"),
          img("asb-mathematics-2021-22", "Mathematics", "Certificate of Achievement · 2021-22"),
        ],
      },
      {
        label: "Arts",
        images: [
          img("asb-choir-2021-22", "Choir", "Certificate of Achievement · 2021-22"),
          img("asb-choir-2023-24", "Choir", "Certificate of Excellence · 2023-24"),
          img("asb-theatre-2020-21", "Theatre", "Certificate of Achievement · 2020-21"),
        ],
      },
    ],
    note: "Also awarded the ASB Mission Award for Courage & Optimism.",
  },
  {
    icon: GraduationCap,
    title: "Trinity College London — Grade 7 Voice",
    issuer: "Trinity College London",
    date: "2020 – 2023",
    description: "Graded examination in music performance and theory, achieved with distinction.",
    groups: [
      {
        images: [
          img("trinity-grade1-piano", "Grade 1 Piano", "With Distinction · November 2018"),
          img("trinity-grade5-vocals", "Grade 5 Vocals (Rock & Pop)", "With Merit · July 2024"),
        ],
      },
    ],
  },
  {
    icon: Users,
    title: "Leadership & Community Service",
    issuer: "ASB Model United Nations · The Vocal Studio & Mann",
    date: "2023 – 2025",
    description: "Recognition for Model UN participation and music-based community service.",
    groups: [
      {
        images: [
          img("asbmun-2024", "ASBMUN XII — Delegate", "Model United Nations · April 2024"),
          img("asbmun-2025", "ASBMUN XIII Conference", "Model United Nations · April 2025"),
          img(
            "vocal-studio-mann-2023",
            "Cause It's Christmas — Mann NGO",
            "5 hours of community service · December 2023",
          ),
        ],
      },
    ],
  },
  {
    icon: Trophy,
    title: "CREST Gold Award",
    issuer: "British Science Association",
    date: "2023 – 2024",
    description:
      "Independent research project in music and wellness, awarded CREST Gold for exceptional scientific inquiry.",
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

const cardShadow = {
  boxShadow: "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
};

const CardHeader = ({ cert }: { cert: Certificate }) => {
  const Icon = cert.icon;
  return (
    <div className="space-y-2">
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
          <h3 className="text-sm md:text-base font-normal text-foreground leading-snug">{cert.title}</h3>
          <p className="text-[10px] md:text-[11px] font-light text-muted-foreground">{cert.issuer}</p>
        </div>
      </div>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-light">{cert.date}</p>
      <p className="text-xs font-light text-muted-foreground leading-relaxed">{cert.description}</p>
    </div>
  );
};

const CertificatesAwardsPage = () => {
  const [enlarged, setEnlarged] = useState<CertificateImage | null>(null);

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
          <div className="container mx-auto max-w-4xl">
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

            {/* Cards with certificate photos */}
            <div className="space-y-6">
              {certificates
                .filter((c) => c.groups)
                .map((cert, i) => (
                  <motion.section
                    key={cert.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="glass-card p-5 md:p-7 space-y-5"
                    style={cardShadow}
                  >
                    <CardHeader cert={cert} />
                    {cert.groups!.map((group, gi) => (
                      <div key={group.label ?? gi}>
                        {group.label && (
                          <p className="text-[10px] uppercase tracking-[0.18em] text-coral font-light mb-3">
                            {group.label}
                          </p>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                          {group.images.map((image) => (
                            <button
                              key={image.src}
                              type="button"
                              onClick={() => setEnlarged(image)}
                              className="group flex items-start gap-2.5 rounded-xl border border-border/30 bg-background/50 px-3 py-2.5 text-left transition-colors hover:border-olive/50 hover:bg-olive/10"
                              aria-label={`View certificate: ${image.title}, ${image.detail}`}
                            >
                              <FileImage
                                size={14}
                                strokeWidth={1.5}
                                className="mt-0.5 shrink-0 text-olive"
                              />
                              <span className="min-w-0">
                                <span className="block text-xs font-normal text-foreground leading-snug underline decoration-olive/40 underline-offset-2 group-hover:decoration-olive">
                                  {image.title}
                                </span>
                                <span className="block text-[10px] font-light text-muted-foreground mt-0.5">
                                  {image.detail}
                                </span>
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    {cert.note && (
                      <p className="text-xs font-light italic text-muted-foreground">{cert.note}</p>
                    )}
                  </motion.section>
                ))}
            </div>

            {/* Text-only cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {certificates
                .filter((c) => !c.groups)
                .map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="glass-card p-5"
                    style={cardShadow}
                  >
                    <CardHeader cert={cert} />
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={enlarged !== null} onOpenChange={(open) => !open && setEnlarged(null)}>
        <DialogContent className="max-w-3xl p-3 bg-card border-border/30">
          <DialogTitle className="text-sm font-light text-foreground pr-8">{enlarged ? `${enlarged.title} — ${enlarged.detail}` : ""}</DialogTitle>
          {enlarged && (
            <img
              src={enlarged.src}
              alt={`${enlarged.title} certificate`}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CertificatesAwardsPage;
