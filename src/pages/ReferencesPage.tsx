import { useState } from "react";
import { motion } from "framer-motion";
import { User, Music2, FileText, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import MarqueeText from "@/components/MarqueeText";
import InlineVideo from "@/components/InlineVideo";

// Written references. Cards with a `doc` open the original letter from Google Drive in a pop-up.
type ReferenceDoc = { id: string; kind: "file" | "document" };

const drivePreviewUrl = (doc: ReferenceDoc) =>
  doc.kind === "document"
    ? `https://docs.google.com/document/d/${doc.id}/preview`
    : `https://drive.google.com/file/d/${doc.id}/preview`;

const driveViewUrl = (doc: ReferenceDoc) =>
  doc.kind === "document"
    ? `https://docs.google.com/document/d/${doc.id}/view`
    : `https://drive.google.com/file/d/${doc.id}/view`;

type Reference = {
  name: string;
  role: string;
  context: string;
  doc?: ReferenceDoc;
};

const references: Reference[] = [
  {
    name: "Sara D'Souza",
    role: "Music Therapist",
    context: "Supervised Zara's internship (Aug 2024 – Mar 2025), observing and co-leading private music therapy sessions.",
  },
  {
    name: "Priyanka Seth Pandit",
    role: "Founder & Director, The Musicircle · Music Educator & Music Therapist",
    context:
      "Mentored Zara during her placement at the Jai Vakeel Foundation (September 2024), where Zara progressed from shadowing music therapy sessions to independently leading Music Connect activities with children aged 11–14.",
    doc: { id: "1SQqYXwgltzSUuBeJZM15bJXk-EUv-S3G", kind: "file" },
  },
  {
    name: "Zachary Kandler, MA, MT-BC, LCAT",
    role: "Managing Director, Nordoff-Robbins Center for Music Therapy, NYU Steinhardt",
    context:
      "Has known Zara since her online Nordoff-Robbins course in summer 2025 and the July 2026 undergraduate summer course, where she was the only in-person high school participant.",
    doc: { id: "11ZQDETdpcZOeU8LGIl4KaMvIyZAjFOYW", kind: "file" },
  },
  {
    name: "Akosua Bonsu",
    role: "Former Course Director, Fitzwilliam College, University of Cambridge",
    context:
      "Directed the summer Psychology course where Zara graduated top of her class and received the “Student of the Course” award.",
    doc: { id: "1h2FrVo8qG8-CLaK6KNDVHa79EEfySHV2", kind: "file" },
  },
  {
    name: "Daniel Mujuru",
    role: "Team Leader, Marsh and Willow Dementia Centre · Croydon Council",
    context:
      "Hosted Zara’s Music Connect sessions (June – July 2026), where she led sing-alongs and music-and-movement activities for people living with dementia.",
    doc: { id: "1QufmKtuy0SUxnJVjUtuNEDUXhbDCjbx6", kind: "file" },
  },
  {
    name: "Sophie French, MT-BC",
    role: "Board-Certified Music Therapist · Activities Coordinator, Sage Eldercare, Summit, NJ",
    context:
      "Supervised Zara’s visits to Sage Eldercare’s adult medical day programme (July 6 – 17), where she led melody, rhythm and movement sessions and assisted with songwriting and sing-alongs.",
    doc: { id: "1O9ZZ0JzuRYo4w4r03_YXvjUZSsEzHnKf", kind: "file" },
  },
  {
    name: "Christine Coppola, CTRS, CDP",
    role: "Activity Manager, Sage Eldercare Spend-A-Day, Summit, NJ",
    context:
      "Oversaw Zara’s work in the Spend-A-Day programme, where she developed and implemented a music programme tailored to older adults.",
    doc: { id: "1Zkz6MHGuKYhs_1w_GGnAod5Z2CqIWCg8", kind: "file" },
  },
  {
    name: "Tatum D’Souza",
    role: "Founder & Vocal Coach, The Vocal Studio",
    context:
      "Has mentored Zara as a vocal student since 2022, through graded examinations, annual recitals and concerts supporting NGOs.",
    doc: { id: "10AHYC3Kl0mup3xCiIpugw-dJMAEDEB9VLCttupEQDxQ", kind: "document" },
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
  const [openRef, setOpenRef] = useState<Reference | null>(null);

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
                >
                  <button
                    type="button"
                    disabled={!ref.doc}
                    onClick={() => ref.doc && setOpenRef(ref)}
                    className={`glass-card w-full p-5 flex items-start gap-4 text-left transition-all ${
                      ref.doc ? "cursor-pointer hover:-translate-y-0.5 hover:border-coral/40 group" : "cursor-default"
                    }`}
                    style={{
                      boxShadow:
                        "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                    }}
                    aria-label={ref.doc ? `Read reference letter from ${ref.name}` : undefined}
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
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-normal text-foreground">{ref.name}</h3>
                      <p className="text-[10px] font-light text-coral uppercase tracking-[0.15em] mt-0.5">
                        {ref.role}
                      </p>
                      <p className="text-xs font-light text-muted-foreground leading-relaxed mt-2">
                        {ref.context}
                      </p>
                      {ref.doc && (
                        <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-light text-olive underline decoration-olive/40 underline-offset-2 group-hover:decoration-olive">
                          <FileText size={12} /> Read reference letter
                        </span>
                      )}
                    </div>
                  </button>
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
      <Dialog open={openRef !== null} onOpenChange={(open) => !open && setOpenRef(null)}>
        <DialogContent className="max-w-5xl p-3 bg-card border-border/30">
          <DialogTitle className="text-sm font-light text-foreground pr-8">
            {openRef ? `Reference letter — ${openRef.name}` : ""}
          </DialogTitle>
          {openRef?.doc && (
            <>
              <iframe
                src={drivePreviewUrl(openRef.doc)}
                title={`Reference letter from ${openRef.name}`}
                className="w-full h-[75vh] rounded-lg border border-border/30 bg-background"
              />
              <a
                href={driveViewUrl(openRef.doc)}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-1.5 text-xs font-light text-olive hover:text-olive-dark transition-colors"
              >
                Open in Google Drive <ExternalLink size={12} />
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReferencesPage;
