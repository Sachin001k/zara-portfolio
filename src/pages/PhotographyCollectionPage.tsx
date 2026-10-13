import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { X, MapPin, ArrowLeft } from "lucide-react";
import PhotographyBackdrop from "@/components/PhotographyBackdrop";
import { categoryFromSlug, categoryMeta, photosIn, type Photo } from "@/data/photography";

const PhotoCard = ({
  photo,
  index,
  onClick,
}: {
  photo: Photo;
  index: number;
  onClick: () => void;
}) => (
  <motion.button
    type="button"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.06 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -6 }}
    onClick={onClick}
    className="group flex h-full flex-col text-left bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-3"
    style={{
      boxShadow:
        "0 6px 24px -6px hsl(var(--shadow-color) / 0.1), inset 0 1px 0 hsl(var(--cream) / 0.5)",
    }}
  >
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
      <img
        src={photo.image}
        alt={photo.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="px-2 pt-4 pb-2">
      <h3 className="text-sm font-light text-foreground leading-snug mb-1">{photo.title}</h3>
      <div className="flex items-center gap-1 text-[10px] text-muted-foreground/70 font-light mb-2">
        <MapPin size={9} />
        {photo.location}
      </div>
      <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">
        {photo.caption}
      </p>
    </div>
  </motion.button>
);

const PhotographyCollectionPage = () => {
  const { collection } = useParams();
  const category = categoryFromSlug(collection);
  const [selected, setSelected] = useState<Photo | null>(null);

  if (!category) return <Navigate to="/photography" replace />;

  const meta = categoryMeta[category];
  const Icon = meta.icon;
  const items = photosIn(category);

  return (
    <div className="page-scroll relative min-h-screen">
      <PhotographyBackdrop />

      <div className="relative z-10 px-6 py-12">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/photography"
            className="inline-flex items-center gap-1.5 text-xs font-light text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={13} /> All collections
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white"
                style={{ background: meta.accent }}
              >
                <Icon size={16} strokeWidth={1.5} />
              </span>
              <h1
                className="text-4xl md:text-6xl font-light text-foreground"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
              >
                {category}
              </h1>
            </div>
            <p className="text-base italic text-muted-foreground font-light tracking-wide">
              {meta.blurb}
            </p>
            <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60 font-light mt-3">
              {items.length} {items.length === 1 ? "photo" : "photos"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((photo, i) => (
              <PhotoCard key={photo.id} photo={photo} index={i} onClick={() => setSelected(photo)} />
            ))}
          </div>
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
              className="bg-card/90 border border-border/30 rounded-2xl overflow-hidden max-w-lg w-full p-3"
              style={{
                boxShadow:
                  "0 24px 80px hsl(var(--shadow-color) / 0.18), inset 0 1px 0 hsl(var(--cream) / 0.4)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={selected.image}
                  alt={selected.alt}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/70 hover:bg-background/90 flex items-center justify-center transition-colors"
                >
                  <X size={14} className="text-foreground" />
                </button>
              </div>

              <div className="px-3 pt-5 pb-3">
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

export default PhotographyCollectionPage;
