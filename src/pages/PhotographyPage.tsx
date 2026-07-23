import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, MapPin, Sun, Leaf, Binoculars, Plane } from "lucide-react";

type Category = "All" | "Wildlife" | "Journeys" | "Botanicals" | "Sunsets";

const photos: {
  id: number;
  category: Exclude<Category, "All">;
  title: string;
  location: string;
  caption: string;
  image: string;
  alt: string;
}[] = [
  {
    id: 1,
    category: "Wildlife",
    title: "Tiger Close-Up",
    location: "Kabini, India",
    caption: "A tiger moving through dry forest with that unmistakable stare of pure focus.",
    image: "/photography/tiger-closeup.webp",
    alt: "Tiger standing in a forest clearing beside a large tree trunk.",
  },
  {
    id: 2,
    category: "Wildlife",
    title: "Safari Jeep",
    location: "Forest Track",
    caption: "A safari vehicle parked deep in the woods, waiting for the next sighting.",
    image: "/photography/safari-jeep.webp",
    alt: "A safari jeep parked on a dirt path in a forest.",
  },
  {
    id: 4,
    category: "Wildlife",
    title: "Tiger by the Tree",
    location: "Kabini, India",
    caption: "A tiger stretching into a tree trunk, all muscle and motion.",
    image: "/photography/tiger-on-tree.webp",
    alt: "A tiger bracing itself against a tree trunk in a forest.",
  },
  {
    id: 5,
    category: "Sunsets",
    title: "City Sunset",
    location: "Mumbai, India",
    caption: "A warm pink-orange sky falling over the skyline at dusk.",
    image: "/photography/city-sunset.webp",
    alt: "A city skyline silhouetted against a pink and orange sunset.",
  },
  {
    id: 6,
    category: "Journeys",
    title: "Sake Barrel Wall",
    location: "Tokyo, Japan",
    caption: "A long wall of ceremonial barrels catching afternoon light near the trees.",
    image: "/photography/sake-barrel-wall.webp",
    alt: "A long wall stacked with sake barrels beside a pathway and trees.",
  },
  {
    id: 7,
    category: "Journeys",
    title: "Cherry Blossom Street",
    location: "Tokyo, Japan",
    caption: "Spring in full bloom, with people pausing beneath a cherry tree canopy.",
    image: "/photography/cherry-blossom-street.webp",
    alt: "A pink cherry blossom tree on a city street with people standing nearby.",
  },
  {
    id: 10,
    category: "Botanicals",
    title: "Flower Market Bouquet",
    location: "Flower Market",
    caption: "Fresh blooms gathered into a generous basket of saturated colour.",
    image: "/photography/flower-market-bouquet.webp",
    alt: "A basket filled with bright flowers at a market stall.",
  },
  {
    id: 14,
    category: "Botanicals",
    title: "Orchid Macro",
    location: "Garden Walk",
    caption: "An intimate close-up of an orchid-like bloom against dark bark.",
    image: "/photography/orchid-macro.webp",
    alt: "A soft-focus flower hanging in front of a tree trunk.",
  },
  {
    id: 15,
    category: "Botanicals",
    title: "Plumeria Bloom",
    location: "Tropical Garden",
    caption: "Plumeria petals glowing in pink, orange, and gold.",
    image: "/photography/plumeria-bloom.webp",
    alt: "A cluster of vibrant plumeria flowers in pink and orange tones.",
  },
  {
    id: 16,
    category: "Botanicals",
    title: "Red Poppies",
    location: "Garden Border",
    caption: "Red poppies rising through green stems in sharp midday light.",
    image: "/photography/red-poppy-field.webp",
    alt: "Red poppies and green seed pods in a sunlit garden.",
  },
  {
    id: 17,
    category: "Botanicals",
    title: "Lavender Macro",
    location: "Herb Garden",
    caption: "Tiny purple blossoms with a visitor resting at the centre.",
    image: "/photography/lavender-macro.webp",
    alt: "A close-up of purple lavender flowers with a small insect on them.",
  },
  {
    id: 18,
    category: "Botanicals",
    title: "Allium Garden",
    location: "Botanical Garden",
    caption: "A sculptural field of allium blooms with soft green stems behind them.",
    image: "/photography/allium-garden.webp",
    alt: "A garden of round purple and white allium flowers on long stems.",
  },
];

const categoryMeta: Record<
  Exclude<Category, "All">,
  { icon: React.ReactNode; accent: string }
> = {
  Wildlife: {
    icon: <Binoculars size={14} strokeWidth={1.4} />,
    accent: "hsl(35 65% 52%)",
  },
  Journeys: {
    icon: <Plane size={14} strokeWidth={1.4} />,
    accent: "hsl(210 28% 46%)",
  },
  Botanicals: {
    icon: <Leaf size={14} strokeWidth={1.4} />,
    accent: "hsl(140 35% 48%)",
  },
  Sunsets: {
    icon: <Sun size={14} strokeWidth={1.4} />,
    accent: "hsl(var(--coral))",
  },
};

const categories: Category[] = ["All", "Wildlife", "Journeys", "Botanicals", "Sunsets"];

const PhotoCard = ({
  photo,
  index,
  onClick,
}: {
  photo: (typeof photos)[0];
  index: number;
  onClick: () => void;
}) => {
  const meta = categoryMeta[photo.category];
  return (
    <motion.div
      key={photo.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: 0.06 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div
        className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 6px 24px -6px hsl(var(--shadow-color) / 0.1), inset 0 1px 0 hsl(var(--cream) / 0.5)",
        }}
      >
        {/* Photo */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: index % 3 === 1 ? "200px" : "160px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, hsl(var(--background) / 0.04), hsl(var(--muted) / 0.18))",
            }}
          />
          <img
            src={photo.image}
            alt={photo.alt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-transparent" />
          {/* Category badge */}
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[10px] font-medium"
            style={{ background: meta.accent, opacity: 0.9 }}
          >
            {meta.icon}
            {photo.category}
          </div>
          {/* Gradient overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card/40 to-transparent" />
        </div>

        {/* Card content */}
        <div className="p-4">
          <h3 className="text-sm font-light text-foreground leading-snug mb-1">{photo.title}</h3>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground/70 font-light mb-2">
            <MapPin size={9} />
            {photo.location}
          </div>
          <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">
            {photo.caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const PhotographyPage = () => {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <div className="page-scroll relative min-h-screen">
      <div className="absolute inset-0 grid-paper-bg" />
      <div
        className="glow-orb"
        style={{
          width: 300,
          height: 300,
          top: "8%",
          right: "4%",
          background: "radial-gradient(circle, hsl(35 60% 55% / 0.1), transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 240,
          height: 240,
          bottom: "15%",
          left: "5%",
          background: "radial-gradient(circle, hsl(140 35% 50% / 0.08), transparent 70%)",
          animationDelay: "2.5s",
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
          stroke="hsl(35 50% 65%)"
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
                Photography
              </h1>
            </div>
            <motion.p
              className="text-base italic text-muted-foreground font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Wildlife · Journeys · Botanicals · Sunsets
            </motion.p>
            <motion.div
              className="w-24 h-px mx-auto mt-4"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(35 55% 55% / 0.5), transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          {/* Category filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-2 justify-center mb-10"
          >
            {categories.map((cat) => {
              const isActive = active === cat;
              const meta = cat !== "All" ? categoryMeta[cat] : null;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-light tracking-wide transition-all duration-200 border ${
                    isActive
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border/40 hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {meta && <span className={isActive ? "" : "opacity-60"}>{meta.icon}</span>}
                  {cat}
                </button>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col items-center gap-4 mb-10"
          >
            <p className="text-center text-[11px] text-muted-foreground/60 font-light">
              12 curated images — wildlife, sunsets, journeys & botanicals
            </p>
            <a
              href="https://photos.app.goo.gl/zcyrGj6CiSX62qot5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border/40 text-xs font-light text-foreground hover:bg-muted/50 transition-colors"
            >
              <Leaf size={12} className="text-olive" />
              View full Botanicals album
            </a>
          </motion.div>

          {/* Masonry-style grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, i) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  index={i}
                  onClick={() => setSelected(photo)}
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
            style={{
              background: "hsl(var(--background) / 0.9)",
              backdropFilter: "blur(16px)",
            }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.88, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="bg-card/90 border border-border/30 rounded-2xl overflow-hidden max-w-lg w-full"
              style={{
                boxShadow:
                  "0 24px 80px hsl(var(--shadow-color) / 0.18), inset 0 1px 0 hsl(var(--cream) / 0.4)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Large photo area */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.alt}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
                >
                  <X size={14} className="text-foreground" />
                </button>
                {/* Category badge */}
                <div
                  className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[10px] font-medium"
                  style={{ background: categoryMeta[selected.category].accent }}
                >
                  {categoryMeta[selected.category].icon}
                  {selected.category}
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h2 className="text-xl font-light text-foreground mb-1">{selected.title}</h2>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70 font-light mb-4">
                  <MapPin size={11} />
                  {selected.location}
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {selected.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotographyPage;
