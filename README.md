# D PREMSANKAR — Portfolio

Personal portfolio website for D Premsankar — Full-Stack Developer & Founder of [Ikaruz](https://ikaruz.in).

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. No component libraries. Dark, minimal, text-forward.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Project structure

```
app/            → pages (App Router)
components/     → Nav, Footer, ProjectRow, Timeline, custom cursor, etc.
content/blog/   → blog posts as MDX files
data/projects.ts→ all project/case-study data as typed objects
public/         → photos (photo.jpg, speech.jpg)
styles/         → global CSS, design tokens, cursor + animation styles
```

## Add a new blog post

1. Create a new file in `content/blog/`, e.g. `my-new-post.mdx`
2. Add frontmatter at the top:

```mdx
---
title: "My New Post"
date: "August 2026"
description: "One-liner shown on the blog index."
slug: "my-new-post"
---

Your post content in Markdown/MDX...
```

3. That's it. The post appears automatically on `/blog` and at `/blog/my-new-post`. Posts are sorted newest-first by date.

## Add a new project

Add an object to the array in `data/projects.ts`. It automatically appears on `/work` and gets its own case-study page at `/work/<slug>`. Set `featured: true` to show it on the landing page (keep it to 3).

## Swap photos

Replace the files in `public/`:

- `public/photo.jpg` — main profile photo (hero + about page). Displayed at 3:4 portrait ratio, so any orientation works — it's cropped with `object-cover`.
- `public/speech.jpg` — secondary photo on the about page.

Keep the same filenames and nothing else needs to change.

## Fill in placeholders

One contact link is a placeholder:

- Twitter/X link is `#` — add your handle when you have one (in `app/page.tsx` and `app/contact/page.tsx`)

Also update `metadataBase` in `app/layout.tsx` to your real domain before deploying (currently `https://premsankar.dev`).

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects Next.js — no config needed. Hit **Deploy**.
4. Add your custom domain under Project → Settings → Domains

Every push to `main` redeploys automatically. All pages are statically generated (SSG).

## Design system

- **Colors:** near-black background `#0B0809`, warm off-white text `#F0EDE8`, single red accent `#E5484D`. Tokens live as CSS variables in `styles/globals.css`.
- **Fonts:** Sora (display), Inter (body), JetBrains Mono (tags/code), Instrument Serif (italic hero accent) — loaded via `next/font`.
- **Signature element:** every section opens with a red `[ LABEL ]` eyebrow + hairline rule.
- **Motion:** hero headline line-reveal, staggered fade-up, IntersectionObserver scroll reveals, custom red cursor (desktop only) that turns into a "that's me" label over photos (`data-cursor-text` attribute). All animation is disabled when `prefers-reduced-motion` is set.
