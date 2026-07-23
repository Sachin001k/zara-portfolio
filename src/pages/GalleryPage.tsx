import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Mic2, GraduationCap, Users, Microscope } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    category: "Performance",
    title: "Solo Recital — Dubai Opera",
    year: "2023",
    description: "An evening of original compositions and classical interpretations at the Dubai Opera House.",
  },
  {
    id: 2,
    category: "Education",
    title: "Workshop — St. Mary's School",
    year: "2024",
    description: "Interactive music therapy workshop introducing students to the healing power of rhythm.",
  },
  {
    id: 3,
    category: "Community",
    title: "Wellness Fest",
    year: "2024",
    description: "Community wellness festival featuring live musical performances and guided listening sessions.",
  },
  {
    id: 4,
    category: "Research",
    title: "CREST Gold Award Presentation",
    year: "2023",
    description: "Presenting research findings on music's cognitive benefits at the annual CREST ceremony.",
  },
  {
    id: 5,
    category: "Performance",
    title: "AMIS International Choir",
    year: "2022",
    description: "International choir performance representing the region at the AMIS festival.",
  },
  {
    id: 6,
    category: "Education",
    title: "Trinity College Certification",
    year: "2021",
    description: "Receiving Trinity College London Grade 8 distinction in Voice.",
  },
  {
    id: 7,
    category: "Community",
    title: "Music for All — Outreach Program",
    year: "2024",
    description: "Bringing instruments and music education to underprivileged communities across Dubai.",
  },
  {
    id: 8,
    category: "Performance",
    title: "Ensemble Night",
    year: "2023",
    description: "Chamber music ensemble performance featuring collaborative pieces with local musicians.",
  },
  {
    id: 9,
    category: "Research",
    title: "Nordoff Robbins Symposium",
    year: "2024",
    description: "Presenting music therapy case studies at the Nordoff Robbins annual symposium.",
  },
];

const categoryColors: Record<string, string> = {
  Performance: "hsl(var(--coral))",
  Education: "hsl(var(--olive))",
  Community: "hsl(210 40% 60%)",
  Research: "hsl(25 50% 65%)",
};

const CategoryIcon = ({ category, size = 32 }: { category: string; size?: number }) => {
  const cls = `text-muted-foreground/30`;
  const sw = 0.9;
  switch (category) {
    case "Performance": return <Mic2 size={size} strokeWidth={sw} className={cls} />;
    case "Education":   return <GraduationCap size={size} strokeWidth={sw} className={cls} />;
    case "Community":   return <Users size={size} strokeWidth={sw} className={cls} />;
    case "Research":    return <Microscope size={size} strokeWidth={sw} className={cls} />;
    default:            return <Camera size={size} strokeWidth={sw} className={cls} />;
  }
};

const categories = ["All", "Performance", "Education", "Community", "Research"];

const GalleryCard = ({
  item,
  index,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  index: number;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.08 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -6, scale: 1.02 }}
    onClick={onClick}
    className="cursor-pointer"
    style={{ perspective: "1000px" }}
  >
    <div
      className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden transition-all duration-300"
      style={{
        boxShadow:
          "0 6px 24px -6px hsl(var(--shadow-color) / 0.1), 0 14px 0 -8px hsl(var(--card)), inset 0 1px 0 hsl(var(--cream) / 0.5)",
      }}
    >
      {/* Image placeholder */}
      <div
        className="w-full h-44 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(var(--muted) / 0.4), hsl(var(--muted) / 0.15))`,
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, ${categoryColors[item.category]} 0%, transparent 60%)`,
          }}
        />
        <div className="flex flex-col items-center gap-2 z-10">
          <CategoryIcon category={item.category} size={36} />
          <span className="text-[10px] text-muted-foreground/40 font-light tracking-wider uppercase">
            {item.category}
          </span>
        </div>
        {/* Category pill */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide text-white"
          style={{ background: categoryColors[item.category], opacity: 0.85 }}
        >
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 border-t border-border/15">
        <span
          className="text-[10px] uppercase tracking-widest font-medium"
          style={{ color: categoryColors[item.category] }}
        >
          {item.year}
        </span>
        <h3 className="text-sm font-light text-foreground mt-1 leading-snug">{item.title}</h3>
        <p className="text-xs text-muted-foreground font-light mt-2 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  </motion.div>
);

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <div className="page-scroll relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 grid-paper-bg" />
      <div
        className="glow-orb"
        style={{
          width: 320,
          height: 320,
          top: "8%",
          right: "4%",
          background: "radial-gradient(circle, hsl(210 40% 70% / 0.12), transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 220,
          height: 220,
          bottom: "12%",
          left: "6%",
          background: "radial-gradient(circle, hsl(var(--coral) / 0.08), transparent 70%)",
          animationDelay: "2s",
        }}
      />

      {/* Wave top */}
      <svg
        className="absolute top-0 left-0 w-full h-[160px] z-[1]"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-20,0 C100,50 250,25 400,45 C550,65 700,20 850,40 C1000,60 1150,15 1300,35 C1380,42 1420,32 1460,38"
          stroke="hsl(var(--blush))"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M-20,0 C80,60 230,35 380,55 C530,75 680,30 830,50 C980,70 1130,25 1280,45 C1370,52 1420,42 1460,48"
          stroke="hsl(210 40% 70%)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />
      </svg>

      <div className="relative z-10 px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Camera size={28} strokeWidth={1.2} className="text-muted-foreground/60" />
              <h1
                className="text-4xl md:text-6xl font-light text-foreground"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
              >
                Gallery
              </h1>
            </div>
            <motion.p
              className="text-base italic text-muted-foreground font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Moments captured along the journey
            </motion.p>
            <motion.div
              className="w-24 h-px mx-auto mt-4"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(210 40% 70% / 0.5), transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 justify-center mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-light tracking-wide transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border/40 hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={i}
                  onClick={() => setSelected(item)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "hsl(var(--background) / 0.85)", backdropFilter: "blur(12px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="bg-card/90 border border-border/30 rounded-2xl overflow-hidden max-w-lg w-full"
              style={{
                boxShadow: "0 24px 80px hsl(var(--shadow-color) / 0.15), inset 0 1px 0 hsl(var(--cream) / 0.4)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image area */}
              <div
                className="w-full h-56 flex items-center justify-center relative"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--muted) / 0.5), hsl(var(--muted) / 0.2))`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(circle at 40% 50%, ${categoryColors[selected.category]} 0%, transparent 65%)`,
                  }}
                />
                <CategoryIcon category={selected.category} size={52} />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white"
                  style={{ background: categoryColors[selected.category] }}
                >
                  {selected.category}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
                >
                  <X size={14} className="text-foreground" />
                </button>
              </div>
              {/* Details */}
              <div className="p-6">
                <span
                  className="text-[10px] uppercase tracking-widest font-medium"
                  style={{ color: categoryColors[selected.category] }}
                >
                  {selected.year}
                </span>
                <h2 className="text-xl font-light text-foreground mt-1 mb-3">{selected.title}</h2>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
