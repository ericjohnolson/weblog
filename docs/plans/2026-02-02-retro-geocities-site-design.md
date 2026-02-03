# Retro GeoCities Personal Website Design

## Overview

A personal website combining 1995 GeoCities visual aesthetic with modern static site tooling. The site features a blog with markdown content, project showcase, and the iconic hand-drawn GeoCities navigation icons sitting above clean, readable content.

## Goals

- Authentic GeoCities header navigation using hand-drawn icons from the reference image
- Clean, readable typography for actual content consumption
- Static site with no database - all content in markdown
- Simple deployment via Vercel

## Tech Stack

| Component | Choice |
|-----------|--------|
| Framework | SvelteKit |
| Adapter | `@sveltejs/adapter-static` |
| Markdown | `mdsvex` |
| Language | TypeScript (lib only) |
| Package Manager | Bun |
| Deployment | Vercel |

## Project Structure

```
src/
├── routes/
│   ├── +page.svelte              # Homepage
│   ├── +page.server.ts           # Load recent posts, featured, tags
│   ├── +layout.svelte            # Global layout with GeoCities header
│   ├── about/+page.svelte
│   ├── archive/
│   │   ├── +page.svelte          # All posts list
│   │   └── +page.server.ts
│   ├── projects/
│   │   ├── +page.svelte          # Project list
│   │   ├── +page.server.ts
│   │   └── [slug]/
│   │       ├── +page.svelte      # Individual project
│   │       └── +page.server.ts
│   ├── contact/+page.svelte
│   ├── posts/
│   │   └── [slug]/
│   │       ├── +page.svelte      # Individual post
│   │       └── +page.server.ts
│   └── tags/
│       └── [tag]/
│           ├── +page.svelte      # Posts by tag
│           └── +page.server.ts
├── lib/
│   ├── posts.ts                  # Load/parse blog posts
│   ├── projects.ts               # Load/parse projects
│   └── types.ts                  # TypeScript interfaces
└── content/
    ├── posts/                    # Blog post markdown files
    │   └── 2024-01-15-example-post.md
    └── projects/                 # Project markdown files
        └── example-project.md

static/
├── icons/                        # GeoCities navigation icons
│   ├── home.gif
│   ├── about.gif
│   ├── archive.gif
│   ├── projects.gif
│   └── contact.gif
└── images/                       # Site images

docs/
└── plans/                        # Design documents
```

## Content Models

### Blog Post Frontmatter

```markdown
---
title: "Post Title Here"
date: 2024-01-15
tags: ["javascript", "web", "sveltekit"]
featured: true
description: "A brief description for list views and SEO"
---

Markdown content here...
```

### Project Frontmatter

```markdown
---
title: "Project Name"
description: "Short tagline for the list view"
url: "https://github.com/username/project"
demo: "https://project-demo.dev"
order: 1
---

Longer project description or case study content...
```

### TypeScript Interfaces

```typescript
// src/lib/types.ts

export interface Post {
  slug: string;
  title: string;
  date: Date;
  tags: string[];
  featured: boolean;
  description: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  url: string;
  demo?: string;
  order: number;
  content: string;
}
```

## Page Layouts

### Homepage

```
┌─────────────────────────────────────────────────────┐
│  [Home] [?] [List] [Enter] [Mail]  ← GeoCities icons│
│   Home  About Archive Projects Contact              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  RECENT POSTS              │  FEATURED             │
│                            │                       │
│  ┌────────────────────┐    │  • Featured Post 1    │
│  │ Jan 15, 2024       │    │  • Featured Post 2    │
│  │ Post Title         │    │  • Featured Post 3    │
│  │ Description text   │    │                       │
│  │ [tag1] [tag2]      │    │  ─────────────────    │
│  └────────────────────┘    │                       │
│                            │  TAGS                 │
│  ┌────────────────────┐    │  javascript           │
│  │ Jan 10, 2024       │    │  sveltekit            │
│  │ Another Post       │    │  web                  │
│  │ Description...     │    │  nostalgia            │
│  │ [tag3]             │    │                       │
│  └────────────────────┘    │                       │
│                            │                       │
├─────────────────────────────────────────────────────┤
│  © 2024 · [Home] [About] [Archive] [Projects]       │
└─────────────────────────────────────────────────────┘
```

### Individual Post View

```
┌─────────────────────────────────────────────────────┐
│  [Home] [?] [List] [Enter] [Mail]  ← GeoCities icons│
├─────────────────────────────────────────────────────┤
│                                                     │
│  January 15, 2024                                   │
│                                                     │
│  POST TITLE HERE                                    │
│  ═══════════════                                    │
│                                                     │
│  Full markdown content rendered here with clean     │
│  typography. Supports code blocks, images, links,   │
│  and all standard markdown features.                │
│                                                     │
│  ```javascript                                      │
│  // Code blocks with syntax highlighting            │
│  const hello = "world";                             │
│  ```                                                │
│                                                     │
│  ─────────────────────────────────────────────      │
│                                                     │
│  Tags: [javascript] [sveltekit] [web]               │
│                                                     │
│  ← Back to Archive                                  │
│                                                     │
├─────────────────────────────────────────────────────┤
│  © 2024 · [footer links]                            │
└─────────────────────────────────────────────────────┘
```

- Full-width content (no sidebar) for comfortable reading
- Tags link to `/tags/[tag]` pages
- Simple back navigation to archive

## Routes Summary

| Route | Purpose |
|-------|---------|
| `/` | Homepage with recent posts, featured sidebar, tags list |
| `/about` | Static about page |
| `/archive` | All posts in reverse chronological order |
| `/projects` | Project list from markdown frontmatter |
| `/projects/[slug]` | Individual project detail page |
| `/contact` | Contact information page |
| `/posts/[slug]` | Individual blog post |
| `/tags/[tag]` | All posts filtered by tag |

## Visual Design

### GeoCities Header

- Recreate navigation using hand-drawn icons from `geocities-1995.png` reference
- 5 navigation items mapped to site sections:
  - Home icon → `/`
  - Question mark (?) → `/about`
  - List icon → `/archive`
  - Enter icon → `/projects`
  - Mail icon → `/contact`
- Icons retain authentic 90s aesthetic

### Typography & Colors

| Element | Style |
|---------|-------|
| Body text | Clean sans-serif, ~18px, good line-height |
| Headings | Can incorporate retro touches |
| Links | Classic blue `#0000EE`, underlined |
| Visited links | Purple `#551A8B` |
| Background | Off-white or light gray (not pure white) |
| Borders | Subtle beveled/etched style where appropriate |

### Retro Elements

- GeoCities icon navigation header
- Bracketed link style in footer: `[Home] [About] [Archive]`
- Classic blue underlined hyperlinks
- Period-appropriate border styling
- No tiled backgrounds or blinking text (readability preserved)

## Build & Deployment

### Development

```bash
bun install
bun run dev
```

### Production Build

```bash
bun run build
bun run preview  # Test static build locally
```

### Deployment

- Connect GitHub repo to Vercel
- Vercel auto-detects SvelteKit and builds on push
- Static files served from Vercel's edge network

## Configuration Files

### svelte.config.js

- Configure `@sveltejs/adapter-static`
- Configure `mdsvex` for markdown processing
- Set up content paths

### vite.config.ts

- Standard SvelteKit Vite configuration

### vercel.json (if needed)

- Usually not required for static SvelteKit sites

## Future Considerations (Not in Scope)

- RSS feed generation
- Search functionality
- Analytics
- Comments system
- Dark mode (would break retro aesthetic anyway)

These are explicitly out of scope for initial implementation.
