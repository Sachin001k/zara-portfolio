import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Feather } from "lucide-react";
import MarqueeText from "@/components/MarqueeText";
import { fetchPublishedBlogs } from "@/lib/blogs";
import type { BlogRow } from "@/types/database";
import { format } from "date-fns";

const MusingsPage = () => {
  const [posts, setPosts] = useState<BlogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchPublishedBlogs()
      .then((data) => {
        if (!cancelled) setPosts(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Could not load posts.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="page-scroll relative min-h-screen">
      <div className="absolute inset-0 grid-paper-bg" />
      <div className="relative z-10">
        <MarqueeText text="MUSINGS · MUSIC · WELLNESS · MATCHA · AND ALL THAT FALLS BETWEEN" />

        <div className="px-4 sm:px-6 md:px-10 pb-16 pt-4">
          <div className="mx-auto w-full max-w-6xl">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <p className="text-xs font-light text-coral uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <Feather size={12} /> Blog
              </p>
              <h1 className="text-3xl md:text-4xl font-extralight text-foreground tracking-tight">
                Musings
              </h1>
              <p className="mt-3 text-sm font-light text-muted-foreground leading-relaxed max-w-lg">
                A blog on music, wellness, matcha and all that falls between.
              </p>
            </motion.header>

            {loading && (
              <p className="text-sm font-light text-muted-foreground">Loading musings…</p>
            )}
            {error && (
              <p className="text-sm font-light text-coral">{error}</p>
            )}
            {!loading && !error && posts.length === 0 && (
              <p className="text-sm font-light text-muted-foreground">
                No posts yet — check back soon.
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card overflow-hidden h-full flex flex-col"
                  style={{
                    boxShadow:
                      "0 8px 32px hsl(var(--shadow-color) / 0.06), inset 0 1px 0 hsl(var(--cream) / 0.5)",
                  }}
                >
                  <Link to={`/musings/${post.slug}`} className="block group flex flex-col h-full">
                    <div className="aspect-[4/3] overflow-hidden border-b border-border/20 bg-muted/20 shrink-0">
                      {post.cover_image_url ? (
                        <img
                          src={post.cover_image_url}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-olive/10 via-blush/10 to-muted/30" />
                      )}
                    </div>
                    <div className="p-4 space-y-1.5 flex-1 flex flex-col">
                      {post.published_at && (
                        <p className="text-[10px] font-light text-muted-foreground flex items-center gap-1.5">
                          <Calendar size={11} className="text-olive shrink-0" />
                          {format(new Date(post.published_at), "MMM d, yyyy")}
                        </p>
                      )}
                      <h2 className="text-base font-light text-foreground group-hover:text-coral transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-xs font-light text-muted-foreground leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="inline-block text-[11px] font-light text-olive pt-2 mt-auto">
                        Read more →
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusingsPage;
