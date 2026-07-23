import { api } from "@/lib/api";
import type { BlogInsert, BlogRow, BlogUpdate } from "@/types/database";

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120) || `post-${Date.now()}`;
}

/** Soft email check — allows short domains like a@g.c */
export function isLooseEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function fetchPublishedBlogs(): Promise<BlogRow[]> {
  const { data, error } = await api
    .from("blogs")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function fetchPublishedBlogBySlug(slug: string): Promise<BlogRow | null> {
  const { data, error } = await api
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function fetchAllBlogsAdmin(): Promise<BlogRow[]> {
  const { data, error } = await api
    .from("blogs")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function fetchBlogById(id: string): Promise<BlogRow | null> {
  const { data, error } = await api.from("blogs").select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data;
}

export async function createBlog(input: BlogInsert): Promise<BlogRow> {
  const { data, error } = await api.from("blogs").insert(input).select("*").single();
  if (error) throw error;
  return data;
}

export async function updateBlog(id: string, input: BlogUpdate): Promise<BlogRow> {
  const { data, error } = await api.from("blogs").update(input).eq("id", id).select("*").single();
  if (error) throw error;
  return data;
}

export async function deleteBlog(id: string): Promise<void> {
  const { error } = await api.from("blogs").delete().eq("id", id);
  if (error) throw error;
}

export async function uploadCoverImage(file: File, userId: string): Promise<string> {
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${userId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await api.storage.from("blog-covers").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;

  const { data } = api.storage.from("blog-covers").getPublicUrl(path);
  return data.publicUrl;
}
