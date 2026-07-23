import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Music, Music2 } from "lucide-react";
import timelineChildhood from "@/assets/timeline-childhood.png";
import timelinePerformance from "@/assets/timeline-performance.png";
import timelineAmis from "@/assets/timeline-amis.png";
import timelineResearch from "@/assets/timeline-research.png";
import timelineCommunity from "@/assets/timeline-community.png";
import timelineFuture from "@/assets/timeline-future.png";

const timelineSteps = [
  {
    image: timelineChildhood,
    label: "Since Childhood",
    date: "2010 – 2016",
    description: "Growing up immersed in music — early piano lessons, discovering a love for singing, and finding joy in every note.",
  },
  {
    image: timelinePerformance,
    label: "Performance Highlights",
    date: "2016 – 2020",
    description: "Solo recitals, ensemble concerts, and recorded performances showcasing years of musical growth.",
  },
  {
    image: timelineAmis,
    label: "AMIS & Trinity Grades",
    date: "2020 – 2023",
    description: "AMIS Choir international performances and Trinity College London graded certifications in voice and theory.",
  },
];

const bottomRow = [
  {
    image: timelineFuture,
    label: "Future Projects",
    date: "2025 – Beyond",
    description: "More musical explorations, collaborations, and creative ventures on the horizon.",
  },
  {
    image: timelineCommunity,
    label: "Community Impact",
    date: "2024 – Present",
    description: "Music wellness workshops and community outreach programs bringing music to all.",
  },
  {
    image: timelineResearch,
    label: "Research & Awards",
    date: "2023 – 2024",
    description: "CREST Gold Award research and music therapy publications advancing the field.",
  },
];

const ArrowRight = () => (
  <motion.svg
    width="60" height="24" viewBox="0 0 60 24" fill="none"
    className="text-coral/30"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.6 }}
  >
    <path d="M0 12h50m0 0l-8-8m8 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </motion.svg>
);

const ArrowDown = () => (
  <motion.svg
    width="24" height="60" viewBox="0 0 24 60" fill="none"
    className="text-coral/30"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.0 }}
  >
    <path d="M12 0v50m0 0l-8-8m8 8l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </motion.svg>
);

const ArrowLeft = () => (
  <motion.svg
    width="60" height="24" viewBox="0 0 60 24" fill="none"
    className="text-coral/30"
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.2 }}
  >
    <path d="M60 12H10m0 0l8-8M10 12l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </motion.svg>
);

const TimelineCard = ({ step, index }: { step: { image: string; label: string; date: string; description: string }; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotateX: 12 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ delay: 0.15 + index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -10, scale: 1.04 }}
    className="w-[220px] flex-shrink-0"
    style={{ perspective: "1000px" }}
  >
    <div
      className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden transition-all duration-300"
      style={{
        boxShadow:
          "0 8px 30px -8px hsl(var(--shadow-color) / 0.1), 0 16px 0 -10px hsl(var(--card)), 0 20px 0 -12px hsl(var(--muted)), inset 0 1px 0 hsl(var(--cream) / 0.5)",
      }}
    >
      {/* Image */}
      <div className="w-full h-36 bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent z-[1]" />
        <img src={step.image} alt={step.label} className="w-full h-full object-contain p-3 relative z-[2]" />
      </div>
      {/* Content */}
      <div className="p-4 border-t border-border/15">
        <span className="text-[10px] uppercase tracking-widest text-gradient-coral font-medium"
          style={{ background: "linear-gradient(135deg, hsl(var(--coral)), hsl(var(--brown-red)))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          {step.date}
        </span>
        <h3 className="text-sm font-light text-foreground mt-1 leading-snug">{step.label}</h3>
        <p className="text-xs text-muted-foreground font-light mt-2 leading-relaxed">{step.description}</p>
      </div>
    </div>
  </motion.div>
);

const ArtsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-scroll relative min-h-screen">
      {/* Grid paper background */}
      <div className="absolute inset-0 grid-paper-bg" />

      {/* Gradient orbs */}
      <div
        className="glow-orb"
        style={{ width: 280, height: 280, top: "10%", right: "5%", background: "radial-gradient(circle, hsl(var(--olive) / 0.12), transparent 70%)" }}
      />
      <div
        className="glow-orb"
        style={{ width: 220, height: 220, bottom: "15%", left: "8%", background: "radial-gradient(circle, hsl(var(--coral) / 0.08), transparent 70%)", animationDelay: "2s" }}
      />

      {/* Wave decorations */}
      <svg className="absolute top-0 left-0 w-full h-[160px] z-[1]" viewBox="0 0 1440 160" preserveAspectRatio="none" fill="none">
        <path d="M-20,0 C100,50 250,25 400,45 C550,65 700,20 850,40 C1000,60 1150,15 1300,35 C1380,42 1420,32 1460,38" stroke="hsl(var(--blush))" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M-20,0 C80,60 230,35 380,55 C530,75 680,30 830,50 C980,70 1130,25 1280,45 C1370,52 1420,42 1460,48" stroke="hsl(210 40% 70%)" strokeWidth="1.5" fill="none" opacity="0.2" />
      </svg>

      <svg className="absolute bottom-0 right-0 w-[500px] h-[200px] z-[1]" viewBox="0 0 500 200" preserveAspectRatio="none" fill="none">
        <path d="M500,200 C430,160 360,180 290,150 C220,120 150,160 80,130 C40,110 10,140 -20,125" stroke="hsl(210 40% 70%)" strokeWidth="2" fill="none" opacity="0.25" />
        <path d="M500,185 C420,150 340,170 260,140 C180,110 100,150 30,120 C5,110 -10,130 -20,118" stroke="hsl(var(--blush))" strokeWidth="2" fill="none" opacity="0.3" />
      </svg>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none z-[3]"
          style={{
            width: 3 + Math.random() * 5,
            height: 3 + Math.random() * 5,
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            background: i % 2 === 0 ? "hsl(var(--coral) / 0.2)" : "hsl(var(--olive) / 0.15)",
          }}
          animate={{
            y: [0, -25 - Math.random() * 30, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      <div className="relative z-10 px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <h1
              className="text-4xl md:text-6xl font-light text-foreground mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
            >
              Arts Journey
            </h1>
            <motion.p
              className="text-base italic text-muted-foreground font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              A musical timeline
            </motion.p>
            <motion.div
              className="w-24 h-px mx-auto mt-4"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--coral) / 0.4), transparent)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          {/* Timeline Flow */}
          <div className="flex flex-col items-center gap-4">
            {/* Top Row */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <TimelineCard step={timelineSteps[0]} index={0} />
              <ArrowRight />
              <TimelineCard step={timelineSteps[1]} index={1} />
              <ArrowRight />
              <TimelineCard step={timelineSteps[2]} index={2} />
            </div>

            {/* Down arrow */}
            <motion.div className="self-end mr-[100px]">
              <ArrowDown />
            </motion.div>

            {/* Bottom Row — reversed */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <TimelineCard step={bottomRow[0]} index={5} />
              <ArrowLeft />
              <TimelineCard step={bottomRow[1]} index={4} />
              <ArrowLeft />
              <TimelineCard step={bottomRow[2]} index={3} />
            </div>
          </div>

          {/* Floating music note icons */}
          <motion.div
            className="absolute top-[15%] left-[8%] text-coral/20 z-[3] pointer-events-none"
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Music size={22} strokeWidth={1} />
          </motion.div>
          <motion.div
            className="absolute top-[12%] left-[12%] text-coral/12 z-[3] pointer-events-none"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
          >
            <Music2 size={16} strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArtsPage;
