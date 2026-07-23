-- Migration: 002_create_blogs.sql
-- Musings blog posts

CREATE TABLE IF NOT EXISTS public.blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL,
  excerpt text,
  content_html text NOT NULL DEFAULT '',
  cover_image_url text,
  status text NOT NULL DEFAULT 'draft',
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT blogs_status_check CHECK (status IN ('draft', 'published')),
  CONSTRAINT blogs_slug_unique UNIQUE (slug)
);

CREATE INDEX IF NOT EXISTS blogs_status_published_at_idx
  ON public.blogs (status, published_at DESC);

CREATE INDEX IF NOT EXISTS blogs_author_id_idx
  ON public.blogs (author_id);

CREATE INDEX IF NOT EXISTS blogs_slug_idx
  ON public.blogs (slug);

-- Keep updated_at fresh
CREATE OR REPLACE FUNCTION public.set_blogs_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS blogs_set_updated_at ON public.blogs;
CREATE TRIGGER blogs_set_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.set_blogs_updated_at();

-- Set published_at when status becomes published
CREATE OR REPLACE FUNCTION public.set_blogs_published_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.status = 'published' AND (OLD.status IS DISTINCT FROM 'published' OR NEW.published_at IS NULL) THEN
    NEW.published_at = COALESCE(NEW.published_at, now());
  END IF;
  IF NEW.status = 'draft' THEN
    -- keep published_at history; do not clear
    NULL;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS blogs_set_published_at ON public.blogs;
CREATE TRIGGER blogs_set_published_at
  BEFORE INSERT OR UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.set_blogs_published_at();

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Anyone can read published posts
CREATE POLICY "blogs_public_read_published"
  ON public.blogs
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

-- Admins can read all posts (drafts + published)
CREATE POLICY "blogs_admin_read_all"
  ON public.blogs
  FOR SELECT
  TO authenticated
  USING (public.is_blog_admin());

-- Admins can insert
CREATE POLICY "blogs_admin_insert"
  ON public.blogs
  FOR INSERT
  TO authenticated
  WITH CHECK (public.is_blog_admin());

-- Admins can update
CREATE POLICY "blogs_admin_update"
  ON public.blogs
  FOR UPDATE
  TO authenticated
  USING (public.is_blog_admin())
  WITH CHECK (public.is_blog_admin());

-- Admins can delete
CREATE POLICY "blogs_admin_delete"
  ON public.blogs
  FOR DELETE
  TO authenticated
  USING (public.is_blog_admin());

GRANT SELECT ON public.blogs TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.blogs TO authenticated;
