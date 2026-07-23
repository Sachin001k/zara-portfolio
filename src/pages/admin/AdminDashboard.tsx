import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { LogOut, Pencil, Plus, Trash2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { deleteBlog, fetchAllBlogsAdmin } from "@/lib/blogs";
import type { BlogRow } from "@/types/database";

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [posts, setPosts] = useState<BlogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllBlogsAdmin();
      setPosts(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Could not load posts.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const onDelete = async (id: string, title: string) => {
    if (!confirm(`Delete “${title}”? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      await deleteBlog(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Delete failed.";
      alert(message);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 grid-paper-bg" />
      <div className="relative z-10 px-6 py-10">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-extralight text-foreground">Musings admin</h1>
              <p className="text-xs font-light text-muted-foreground mt-1">
                Signed in as {user?.email}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to="/musings"
                className="px-4 py-2 rounded-full border border-border/40 text-xs font-light hover:bg-muted/40"
              >
                View public blog
              </Link>
              <Link
                to="/admin/posts/new"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-olive text-primary-foreground text-xs font-light hover:bg-olive-dark"
              >
                <Plus size={14} /> New post
              </Link>
              <button
                type="button"
                onClick={() => signOut()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/40 text-xs font-light hover:bg-muted/40"
              >
                <LogOut size={14} /> Sign out
              </button>
            </div>
          </div>

          {loading && (
            <p className="text-sm font-light text-muted-foreground">Loading posts…</p>
          )}
          {error && <p className="text-sm font-light text-coral">{error}</p>}

          {!loading && posts.length === 0 && !error && (
            <p className="text-sm font-light text-muted-foreground">
              No posts yet. Create your first musing.
            </p>
          )}

          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="glass-card p-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        post.status === "published"
                          ? "bg-olive/15 text-olive-dark"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {post.status}
                    </span>
                    <span className="text-[10px] font-light text-muted-foreground">
                      Updated {format(new Date(post.updated_at), "MMM d, yyyy")}
                    </span>
                  </div>
                  <h2 className="text-sm font-light text-foreground truncate">{post.title}</h2>
                  <p className="text-[11px] font-light text-muted-foreground truncate">
                    /musings/{post.slug}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    to={`/admin/posts/${post.id}/edit`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-border/40 text-[11px] font-light hover:bg-muted/40"
                  >
                    <Pencil size={12} /> Edit
                  </Link>
                  <button
                    type="button"
                    disabled={deletingId === post.id}
                    onClick={() => onDelete(post.id, post.title)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-coral/30 text-[11px] font-light text-coral hover:bg-coral/10 disabled:opacity-50"
                  >
                    <Trash2 size={12} />
                    {deletingId === post.id ? "…" : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
