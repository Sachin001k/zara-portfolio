-- Migration: 003_blog_covers_storage.sql
-- Optional public bucket for Musings cover images

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-covers',
  'blog-covers',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- Public read
CREATE POLICY "blog_covers_public_read"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'blog-covers');

-- Admin upload
CREATE POLICY "blog_covers_admin_insert"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'blog-covers'
    AND public.is_blog_admin()
  );

-- Admin update
CREATE POLICY "blog_covers_admin_update"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'blog-covers'
    AND public.is_blog_admin()
  )
  WITH CHECK (
    bucket_id = 'blog-covers'
    AND public.is_blog_admin()
  );

-- Admin delete
CREATE POLICY "blog_covers_admin_delete"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'blog-covers'
    AND public.is_blog_admin()
  );
