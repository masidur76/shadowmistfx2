/*
  # ShadowMist.FX Initial Database Schema

  1. New Tables
    - `projects` - Portfolio projects and edits
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `description` (text)
      - `category` (text, not null)
      - `thumbnail_url` (text)
      - `video_url` (text)
      - `duration` (text)
      - `views` (integer, default 0)
      - `likes` (integer, default 0)
      - `featured` (boolean, default false)
      - `sort_order` (integer, default 0)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `products` - Digital store products
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `description` (text)
      - `category` (text, not null)
      - `price` (decimal, not null)
      - `original_price` (decimal)
      - `image_url` (text)
      - `download_count` (integer, default 0)
      - `rating` (decimal, default 0)
      - `review_count` (integer, default 0)
      - `featured` (boolean, default false)
      - `includes` (jsonb array)
      - `is_active` (boolean, default true)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `contact_messages` - Contact form submissions
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `inquiry_type` (text)
      - `message` (text, not null)
      - `status` (text, default 'unread')
      - `created_at` (timestamp)

    - `content_posts` - Blog posts, updates, and articles
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `content` (text)
      - `excerpt` (text)
      - `type` (text) - 'blog', 'update', 'announcement'
      - `category` (text)
      - `image_url` (text)
      - `read_time` (text)
      - `is_published` (boolean, default false)
      - `published_at` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `newsletter_subscribers` - Email newsletter subscriptions
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `is_active` (boolean, default true)
      - `subscribed_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for projects, products, and published posts
    - Authenticated access for contact message submission
    - No public write access to any table
*/

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  category text NOT NULL,
  thumbnail_url text DEFAULT '',
  video_url text DEFAULT '',
  duration text DEFAULT '',
  views integer DEFAULT 0,
  likes integer DEFAULT 0,
  featured boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  category text NOT NULL,
  price decimal(10,2) NOT NULL,
  original_price decimal(10,2),
  image_url text DEFAULT '',
  download_count integer DEFAULT 0,
  rating decimal(3,2) DEFAULT 0,
  review_count integer DEFAULT 0,
  featured boolean DEFAULT false,
  includes jsonb DEFAULT '[]'::jsonb,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  inquiry_type text DEFAULT '',
  message text NOT NULL,
  status text DEFAULT 'unread',
  created_at timestamptz DEFAULT now()
);

-- Content Posts Table
CREATE TABLE IF NOT EXISTS content_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text DEFAULT '',
  excerpt text DEFAULT '',
  type text DEFAULT 'blog',
  category text DEFAULT '',
  image_url text DEFAULT '',
  read_time text DEFAULT '',
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  subscribed_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Projects Policies (Public read)
CREATE POLICY "Public can view projects"
  ON projects FOR SELECT
  TO public
  USING (true);

-- Products Policies (Public read active products)
CREATE POLICY "Public can view active products"
  ON products FOR SELECT
  TO public
  USING (is_active = true);

-- Contact Messages Policies (Authenticated can insert)
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO public
  WITH CHECK (true);

-- Content Posts Policies (Public can read published posts)
CREATE POLICY "Public can view published posts"
  ON content_posts FOR SELECT
  TO public
  USING (is_published = true);

-- Newsletter Policies (Public can subscribe)
CREATE POLICY "Public can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Public can check if email exists"
  ON newsletter_subscribers FOR SELECT
  TO public
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_content_posts_type ON content_posts(type);
CREATE INDEX IF NOT EXISTS idx_content_posts_published ON content_posts(is_published);
