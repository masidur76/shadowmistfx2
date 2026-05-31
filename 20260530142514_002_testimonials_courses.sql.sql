/*
  # Add Testimonials and Courses Tables

  1. New Tables
    - `testimonials` - Client testimonials and reviews
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `role` (text)
      - `content` (text, not null)
      - `rating` (integer, default 5)
      - `is_approved` (boolean, default false)
      - `sort_order` (integer, default 0)
      - `created_at` (timestamp)

    - `courses` - Online courses and educational content
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `description` (text)
      - `category` (text)
      - `duration_hours` (decimal)
      - `price` (decimal)
      - `is_coming_soon` (boolean, default true)
      - `is_published` (boolean, default false)
      - `includes` (jsonb array)
      - `sort_order` (integer, default 0)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for approved testimonials and published courses
*/

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text DEFAULT 'Client',
  content text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_approved boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  category text DEFAULT '',
  duration_hours decimal(4,1),
  price decimal(10,2),
  is_coming_soon boolean DEFAULT true,
  is_published boolean DEFAULT false,
  includes jsonb DEFAULT '[]'::jsonb,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Testimonials Policies
CREATE POLICY "Public can view approved testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (is_approved = true);

-- Courses Policies
CREATE POLICY "Public can view published or coming soon courses"
  ON courses FOR SELECT
  TO public
  USING (is_published = true OR is_coming_soon = true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved);
CREATE INDEX IF NOT EXISTS idx_courses_published ON courses(is_published);
CREATE INDEX IF NOT EXISTS idx_courses_coming_soon ON courses(is_coming_soon);
