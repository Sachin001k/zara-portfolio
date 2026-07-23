import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuillEditor from "@/components/blog/QuillEditor";
import { useAuth } from "@/contexts/AuthContext";
import {
  createBlog,
  fetchBlogById,
  slugify,
  updateBlog,
  uploadCoverImage,
} from "@/lib/blogs";
import type { BlogStatus } from "@/types/database";

const AdminPostEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [status, setStatus] = useState<BlogStatus>("draft");
  const [coverUrl, setCoverUrl] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isNew || !id) return;
    let cancelled = false;
    fetchBlogById(id)
      .then((post) => {
        if (cancelled) return;
        if (!post) {
          setError("Post not found.");
          return;
        }
        setTitle(post.title);
        setSlug(post.slug);
        setExcerpt(post.excerpt ?? "");
        setContentHtml(post.content_html);
        setStatus(post.status);
        setCoverUrl(post.cover_image_url ?? "");
        setSlugTouched(true);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Could not load post.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [id, isNew]);

  const onTitleChange = (value: string) => {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  };

  const onCoverFile = async (file: File | null) => {
    if (!file || !user) return;
    setUploading(true);
    setError(null);
    try {
      const url = await uploadCoverImage(file, user.id);
      setCoverUrl(url);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Cover upload failed.";
      setError(message);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedTitle = title.trim();
    const trimmedSlug = (slug.trim() || slugify(trimmedTitle)).toLowerCase();
    if (!trimmedTitle) {
      setError("Title is required.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        title: trimmedTitle,
        slug: trimmedSlug,
        excerpt: excerpt.trim() || null,
        content_html: contentHtml,
        cover_image_url: coverUrl.trim() || null,
        status,
        author_id: user?.id ?? null,
      };

      if (isNew) {
        const created = await createBlog({
          ...payload,
          published_at: status === "published" ? new Date().toISOString() : null,
        });
        navigate(`/admin/posts/${created.id}/edit`, { replace: true });
      } else if (id) {
        await updateBlog(id, payload);
        navigate("/admin");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Save failed.";
      setError(message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm font-light text-muted-foreground">
        Loading editor…
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 grid-paper-bg" />
      <div className="relative z-10 px-6 py-10">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl font-extralight text-foreground">
              {isNew ? "New musing" : "Edit musing"}
            </h1>
            <Link
              to="/admin"
              className="text-xs font-light text-muted-foreground hover:text-foreground"
            >
              ← Back to list
            </Link>
          </div>

          <form onSubmit={onSubmit} className="space-y-5" noValidate>
            <label className="block space-y-1.5">
              <span className="text-[11px] font-light text-muted-foreground uppercase tracking-wider">
                Title
              </span>
              <input
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
                className="w-full rounded-xl border border-border/40 bg-background/80 px-4 py-2.5 text-sm font-light focus:outline-none focus:ring-2 focus:ring-olive/30"
                placeholder="Post title"
                required
              />
            </label>

            <label className="block space-y-1.5">
              <span className="text-[11px] font-light text-muted-foreground uppercase tracking-wider">
                URL slug
              </span>
              <input
                value={slug}
                onChange={(e) => {
                  setSlugTouched(true);
                  setSlug(e.target.value);
                }}
                className="w-full rounded-xl border border-border/40 bg-background/80 px-4 py-2.5 text-sm font-light focus:outline-none focus:ring-2 focus:ring-olive/30"
                placeholder="my-post-title"
              />
            </label>

            <label className="block space-y-1.5">
              <span className="text-[11px] font-light text-muted-foreground uppercase tracking-wider">
                Excerpt
              </span>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                className="w-full resize-none rounded-xl border border-border/40 bg-background/80 px-4 py-2.5 text-sm font-light focus:outline-none focus:ring-2 focus:ring-olive/30"
                placeholder="Short preview text"
              />
            </label>

            <div className="space-y-1.5">
              <span className="text-[11px] font-light text-muted-foreground uppercase tracking-wider">
                Cover image
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onCoverFile(e.target.files?.[0] ?? null)}
                className="block w-full text-xs font-light"
              />
              {uploading && (
                <p className="text-[11px] font-light text-muted-foreground">Uploading…</p>
              )}
              {coverUrl && (
                <img
                  src={coverUrl}
                  alt=""
                  className="mt-2 max-h-40 rounded-xl border border-border/30 object-cover"
                />
              )}
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-light text-muted-foreground uppercase tracking-wider">
                Body
              </span>
              <QuillEditor value={contentHtml} onChange={setContentHtml} />
            </div>

            <label className="block space-y-1.5">
              <span className="text-[11px] font-light text-muted-foreground uppercase tracking-wider">
                Status
              </span>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as BlogStatus)}
                className="w-full rounded-xl border border-border/40 bg-background/80 px-4 py-2.5 text-sm font-light focus:outline-none focus:ring-2 focus:ring-olive/30"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </label>

            {error && <p className="text-xs font-light text-coral">{error}</p>}

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center rounded-full bg-olive px-8 py-3 text-sm font-light text-primary-foreground hover:bg-olive-dark disabled:opacity-60"
            >
              {saving ? "Saving…" : isNew ? "Create post" : "Save changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPostEditor;
