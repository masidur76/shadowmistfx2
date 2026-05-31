# ShadowMist.FX Deployment Guide

This guide will walk you through deploying the ShadowMist.FX creator portfolio to GitHub and Vercel.

---

## Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface

1. Go to [github.com/new](https://github.com/new)
2. Fill in the repository details:
   - **Repository name**: `shadowmist-fx` (or your preferred name)
   - **Description**: `Personal creator portfolio - ShadowMist.FX`
   - **Visibility**: Public or Private (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
3. Click "Create repository"

### Option B: Using GitHub CLI (if available)

```bash
gh repo create shadowmist-fx --public --description "Personal creator portfolio - ShadowMist.FX"
```

---

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you push instructions. Use these commands:

```bash
# If you created the repo via web interface, add the remote:
git remote add origin https://github.com/YOUR_USERNAME/shadowmist-fx.git

# Push to GitHub:
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

### Authentication Options

#### Option 1: Personal Access Token (PAT)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use token as password when prompted:
   ```
   git push -u origin main
   # Username: YOUR_GITHUB_USERNAME
   # Password: YOUR_PERSONAL_ACCESS_TOKEN
   ```

#### Option 2: SSH Key

```bash
# Use SSH URL instead:
git remote set-url origin git@github.com:YOUR_USERNAME/shadowmist-fx.git
git push -u origin main
```

#### Option 3: GitHub CLI

```bash
# Authenticate first:
gh auth login

# Then push:
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Website (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your GitHub repository:
   - Select `shadowmist-fx` from your repositories
   - Click "Import"
5. Configure the project:
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `dist` (should auto-detect)
6. Add environment variables:
   - Click "Environment Variables"
   - Add these variables (from your `.env` file):
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_ANON_KEY`
     - `VITE_SUPABASE_SERVICE_ROLE_KEY` (optional)
7. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI:
npm i -g vercel

# Login to Vercel:
vercel login

# Deploy:
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: shadowmist-fx
# - Directory: ./
# - Override settings? No
```

---

## Step 4: Configure Custom Domain (Optional)

If you want to use a custom domain like `shadowmist.fx`:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain:
   - Enter: `shadowmist.fx` (or your domain)
   - Click "Add"
4. Configure DNS:
   - Add A record pointing to Vercel's IP: `76.76.21.21`
   - Add CNAME record: `www` → `cname.vercel-dns.com`
5. Wait for DNS propagation (5-30 minutes)
6. Enable HTTPS (automatic)

---

## Environment Variables

These variables are needed for the Supabase connection:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

**Important**: Get these values from your Supabase project dashboard:

1. Go to [supabase.com](https://supabase.com)
2. Select your project
3. Click "Settings" → "API"
4. Copy:
   - Project URL → `VITE_SUPABASE_URL`
   - anon public key → `VITE_SUPABASE_ANON_KEY`
   - service_role key → `VITE_SUPABASE_SERVICE_ROLE_KEY` (optional, for admin operations)

---

## Automatic Deployments

Once connected to Vercel:

- **Production**: Automatically deploys when you push to `main` branch
- **Preview**: Creates preview deployments for pull requests

---

## Build Configuration

The project is pre-configured for Vercel deployment:

- **Build tool**: Vite
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18.x (specified in `package.json`)

---

## Troubleshooting

### Common Issues

#### Build fails with "VITE_SUPABASE_URL is not defined"
- Ensure environment variables are added in Vercel dashboard
- Variables must be prefixed with `VITE_` for client-side access

#### 404 errors on page refresh
- Vercel auto-configures SPA routing for Vite projects
- If issues persist, add a `vercel.json` file:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### CSS not loading
- Ensure `index.css` is imported in `main.tsx`
- Check that Tailwind is properly configured

---

## Quick Commands Reference

```bash
# Local development:
npm run dev

# Build for production:
npm run build

# Preview production build:
npm run preview

# Push to GitHub:
git add .
git commit -m "Your message"
git push origin main

# Deploy to Vercel:
vercel --prod
```

---

## Project Structure

```
shadowmist-fx/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── Navbar.tsx
│   │   └── ui/
│   │       ├── Avatar.tsx
│   │       ├── Button.tsx
│   │       ├── FAQItem.tsx
│   │       ├── ProductCard.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── StatsCard.tsx
│   │       └── TestimonialCard.tsx
│   ├── lib/
│   │   └── supabase.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── ContentHub.tsx
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   └── Store.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .gitignore
├── DEPLOYMENT.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Support

If you encounter any issues:

1. Check the [Vercel Documentation](https://vercel.com/docs)
2. Check the [Vite Documentation](https://vitejs.dev)
3. Check the [Supabase Documentation](https://supabase.com/docs)

Good luck with your deployment! 🚀
