import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { fetchPublishedBlogBySlug } from "@/lib/blogs";
import type { BlogRow } from "@/types/database";
import { format } from "date-fns";

const MusingPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setLoading(true);
    fetchPublishedBlogBySlug(slug)
      .then((data) => {
        if (!cancelled) {
          if (!data) setError("This post could not be found.");
          else setPost(data);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Could not load this post.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <div className="page-scroll relative min-h-screen">
      <div className="absolute inset-0 grid-paper-bg" />
      <div className="relative z-10 px-4 sm:px-6 md:px-10 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <Link
            to="/musings"
            className="inline-flex items-center gap-1.5 text-xs font-light text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft size={12} /> Back to Musings
          </Link>

          {loading && (
            <p className="text-sm font-light text-muted-foreground">Loading…</p>
          )}
          {error && <p className="text-sm font-light text-coral">{error}</p>}

          {post && (
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {post.cover_image_url && (
                <div className="mb-8 overflow-hidden rounded-2xl border border-border/25 aspect-[16/9]">
                  <img
                    src={post.cover_image_url}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              {post.published_at && (
                <p className="text-[11px] font-light text-muted-foreground flex items-center gap-1.5 mb-3">
                  <Calendar size={12} className="text-olive" />
                  {format(new Date(post.published_at), "MMMM d, yyyy")}
                </p>
              )}
              <h1 className="text-3xl md:text-4xl font-extralight text-foreground tracking-tight mb-4">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-base font-light text-muted-foreground mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
              <div
                className="prose prose-sm max-w-none font-light text-foreground/90
                  prose-headings:font-light prose-a:text-coral
                  prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: post.content_html }}
              />
            </motion.article>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusingPostPage;
