import { motion } from "framer-motion";
import { User } from "lucide-react";
import MarqueeText from "@/components/MarqueeText";

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
