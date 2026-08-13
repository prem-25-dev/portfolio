# My Portfolio

This is my personal site — [premsankar.dev](https://premsankar.dev).

I built it to have one place that shows who I am, what I've shipped, and what I'm thinking about. No templates, no drag-and-drop builder — I wrote every page myself.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling (no component library)
- **MDX** for blog posts
- **Supabase** for blog likes and comments
- Deployed on **Vercel**

Dark, minimal, text-first. That's the whole design brief.

## Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm start
```

## How the folders are laid out

```
app/           → every page lives here (Next.js App Router)
components/    → the reusable React pieces (Nav, Footer, Hero, etc.)
content/blog/  → my blog posts, written as .mdx files
contexts/      → React context (language switcher)
data/          → my project list as typed TS objects
lib/           → helpers (blog reader, Supabase client, translations)
public/        → my photos + logo
styles/        → global CSS and design tokens
```

## Adding a new blog post

1. Drop a new `.mdx` file into `content/blog/`.
2. Add frontmatter at the top:

```mdx
---
title: "The title"
date: "August 2026"
description: "One-line summary shown on the blog index."
slug: "the-url-slug"
---

Post body here...
```

3. That's it — it shows up on `/blog` and at `/blog/<slug>` automatically. Newest post first.

## Adding a new project

Open `data/projects.ts` and add a new object to the array. It appears on `/work` and gets its own case-study page at `/work/<slug>` on its own. Set `featured: true` if I want it on the home page (I keep that to 3).

## Swapping photos

Just replace the files in `public/`:

- `photo.jpg` — my main portrait (home + about)
- `speech.jpg` — second photo on the about page

Same filenames, no code changes needed.

## Deploy

Every push to `master` deploys to production on Vercel automatically. Nothing to configure.

## The look

- **Colors:** near-black `#0B0809` background, warm off-white `#F0EDE8` text, one red accent `#E5484D`.
- **Fonts:** Sora (display), Inter (body), JetBrains Mono (tags), Instrument Serif (italic accents) — loaded via `next/font`.
- **Signature bit:** every section opens with a red `[ LABEL ]` eyebrow and a hairline rule.
- **Motion:** headline line-reveal, staggered fade-ups on scroll, a custom red cursor that turns into a "that's me" label over my photos. Everything respects `prefers-reduced-motion`.

---

Built by me. If you want to talk, I'm on [Instagram](https://www.instagram.com/premsankar.dev) and [LinkedIn](https://www.linkedin.com/in/premsankar25).
