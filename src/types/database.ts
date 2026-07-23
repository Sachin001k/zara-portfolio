export type BlogStatus = "draft" | "published";

export type BlogRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content_html: string;
  cover_image_url: string | null;
  status: BlogStatus;
  author_id: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type BlogInsert = {
  title: string;
  slug: string;
  excerpt?: string | null;
  content_html?: string;
  cover_image_url?: string | null;
  status?: BlogStatus;
  author_id?: string | null;
  published_at?: string | null;
};

export type BlogUpdate = Partial<BlogInsert>;

export type ProfileRow = {
  id: string;
  email: string | null;
  role: "admin";
  display_name: string | null;
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      blogs: {
        Row: BlogRow;
        Insert: BlogInsert;
        Update: BlogUpdate;
      };
      profiles: {
        Row: ProfileRow;
        Insert: Partial<ProfileRow> & { id: string };
        Update: Partial<ProfileRow>;
      };
    };
  };
};
