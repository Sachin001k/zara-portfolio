# Musings / Blog migrations

Run these SQL files **in order** in the SQL Editor of your project dashboard
(or via the CLI if you use linked projects):

1. `001_create_profiles.sql`
2. `002_create_blogs.sql`
3. `003_blog_covers_storage.sql`

Then create an admin user under Authentication → Users (invite / add user).
A `profiles` row with `role = 'admin'` is created automatically by trigger.

Env (already in `.env`):

```
VITE_SUPABASE_URL=https://tahbrpcthynlwdmctnqw.supabase.co
VITE_SUPABASE_ANON_KEY=...
```

App routes:

- Public: `/musings`, `/musings/:slug`
- Admin: `/admin/login`, `/admin`, `/admin/posts/new`, `/admin/posts/:id/edit`
