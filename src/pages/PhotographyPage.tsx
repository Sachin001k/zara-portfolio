import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, ArrowRight } from "lucide-react";
import PhotographyBackdrop from "@/components/PhotographyBackdrop";
import { categories, categoryMeta, collectionSlug, photosIn } from "@/data/photography";

const PhotographyPage = () => (
  <div className="page-scroll relative min-h-screen">
    <PhotographyBackdrop />

    <div className="relative z-10 px-6 py-12">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
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
              background: "linear-gradient(90deg, transparent, hsl(35 55% 55% / 0.5), transparent)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </motion.div>

        {/* Collection cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => {
            const meta = categoryMeta[cat];
            const Icon = meta.icon;
            const count = photosIn(cat).length;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to={`/photography/${collectionSlug(cat)}`}
                  className="group flex h-full flex-col bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-3"
                  style={{
                    boxShadow:
                      "0 8px 28px -8px hsl(var(--shadow-color) / 0.14), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                  }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <img
                      src={meta.cover}
                      alt={`${cat} collection cover`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      decoding="async"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white"
                        style={{ background: meta.accent }}
                      >
                        <Icon size={12} strokeWidth={1.6} />
                      </span>
                      <h2
                        className="text-xl font-light text-foreground"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
                      >
                        {cat}
                      </h2>
                    </div>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">
                      {meta.blurb}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70">
                      <span>
                        {count} {count === 1 ? "photo" : "photos"}
                      </span>
                      <span className="flex items-center gap-1 text-foreground/70 group-hover:text-foreground transition-colors">
                        View
                        <ArrowRight
                          size={11}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

export default PhotographyPage;
