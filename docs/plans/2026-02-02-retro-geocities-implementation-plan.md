# Retro GeoCities Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Tasks are tracked in `bd` - use `bd ready` to find available work.

**Goal:** Build a personal website with 1995 GeoCities aesthetic using SvelteKit static site generation.

**Architecture:** SvelteKit with static adapter, mdsvex for markdown processing, TypeScript for lib code. Two-column homepage layout with recent posts and featured sidebar. GeoCities-style icon navigation header.

**Tech Stack:** SvelteKit, TypeScript, mdsvex, Bun, Vercel

---

## Execution Strategy

This plan is structured for **parallel subagent execution**. Tasks are tracked in `bd` with dependencies.

### Parallelization Layers

```
Layer 0 (Start Here)
└── ericolsondev-62f.1: Initialize SvelteKit project

Layer 1 (4 parallel tasks after setup)
├── ericolsondev-62f.2: TypeScript types
├── ericolsondev-62f.5: CSS styling
├── ericolsondev-62f.6: Navigation icons
└── ericolsondev-62f.8: Footer component

Layer 2 (3 parallel tasks)
├── ericolsondev-62f.3: posts.ts (needs types)
├── ericolsondev-62f.4: projects.ts (needs types)
└── ericolsondev-62f.7: Header component (needs icons)

Layer 3
└── ericolsondev-62f.9: Global layout (needs header, footer, CSS)

Layer 4 (8 parallel page tasks)
├── ericolsondev-62f.10: Homepage (needs layout + posts.ts)
├── ericolsondev-62f.11: About page (needs layout)
├── ericolsondev-62f.12: Archive page (needs layout + posts.ts)
├── ericolsondev-62f.13: Projects list (needs layout + projects.ts)
├── ericolsondev-62f.14: Project detail (needs layout + projects.ts)
├── ericolsondev-62f.15: Contact page (needs layout)
├── ericolsondev-62f.16: Post page (needs layout + posts.ts)
└── ericolsondev-62f.17: Tag page (needs layout + posts.ts)

Layer 5 (2 parallel tasks)
├── ericolsondev-62f.18: Sample blog post
└── ericolsondev-62f.19: Sample project

Layer 6
└── ericolsondev-62f.20: Vercel deployment
```

---

## Task Details

### Layer 0: Project Setup

#### Task ericolsondev-62f.1: Initialize SvelteKit project

**Files:**
- Create: `svelte.config.js`
- Create: `vite.config.ts`
- Modify: `src/app.d.ts`

**Steps:**

1. Initialize SvelteKit project
```bash
bun create svelte@latest . --template=skeleton --typescript --no-add-ons
```

2. Install dependencies
```bash
bun add -d @sveltejs/adapter-static mdsvex
```

3. Configure svelte.config.js
```javascript
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    })
  }
};

export default config;
```

4. Create directory structure
```bash
mkdir -p src/lib/components src/content/posts src/content/projects static/icons
```

5. Verify dev server
```bash
bun run dev
```

---

### Layer 1: Foundation (Parallel)

#### Task ericolsondev-62f.2: TypeScript type definitions

**Files:**
- Create: `src/lib/types.ts`

```typescript
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

export interface PostMetadata {
  title: string;
  date: string;
  tags: string[];
  featured?: boolean;
  description: string;
}

export interface ProjectMetadata {
  title: string;
  description: string;
  url: string;
  demo?: string;
  order: number;
}
```

#### Task ericolsondev-62f.5: CSS styling

**Files:**
- Create: `src/app.css`

See design doc for full CSS. Key elements:
- CSS variables for retro colors
- Clean sans-serif typography
- Classic blue underlined links
- Two-column layout utilities
- Retro border utilities

#### Task ericolsondev-62f.6: Navigation icons

**Files:**
- Create: `static/icons/home.png`
- Create: `static/icons/about.png`
- Create: `static/icons/archive.png`
- Create: `static/icons/projects.png`
- Create: `static/icons/contact.png`

Extract or recreate hand-drawn icons from `geocities-1995.png` reference.

#### Task ericolsondev-62f.8: Footer component

**Files:**
- Create: `src/lib/components/Footer.svelte`

```svelte
<footer>
  <p>&copy; {new Date().getFullYear()} Eric Olson</p>
  <nav>
    [<a href="/">Home</a>]
    [<a href="/about">About</a>]
    [<a href="/archive">Archive</a>]
    [<a href="/projects">Projects</a>]
    [<a href="/contact">Contact</a>]
  </nav>
</footer>

<style>
  footer {
    border-top: 2px solid #000;
    padding: 1rem;
    text-align: center;
    margin-top: 2rem;
  }
  nav a {
    margin: 0 0.25rem;
  }
</style>
```

---

### Layer 2: Content Infrastructure (Parallel)

#### Task ericolsondev-62f.3: posts.ts

**Files:**
- Create: `src/lib/posts.ts`

Implement:
- `getPosts()`: all posts sorted by date desc
- `getPost(slug)`: single post
- `getFeaturedPosts()`: posts where featured === true
- `getAllTags()`: unique tags array

#### Task ericolsondev-62f.4: projects.ts

**Files:**
- Create: `src/lib/projects.ts`

Implement:
- `getProjects()`: all projects sorted by order
- `getProject(slug)`: single project

#### Task ericolsondev-62f.7: Header component

**Files:**
- Create: `src/lib/components/Header.svelte`

Display 5 navigation icons linking to respective routes.

---

### Layer 3: Layout

#### Task ericolsondev-62f.9: Global layout

**Files:**
- Create: `src/routes/+layout.svelte`

Import Header, Footer, app.css. Render header, slot, footer.

---

### Layer 4: Pages (Parallel)

8 page tasks - see bd for full descriptions:
- Homepage with two-column layout
- About (static)
- Archive (all posts)
- Projects list
- Project detail
- Contact (static)
- Blog post page
- Tag page

---

### Layer 5: Content (Parallel)

#### Task ericolsondev-62f.18: Sample blog post

**Files:**
- Create: `src/content/posts/2026-02-02-hello-world.md`

#### Task ericolsondev-62f.19: Sample project

**Files:**
- Create: `src/content/projects/sample-project.md`

---

### Layer 6: Deployment

#### Task ericolsondev-62f.20: Vercel deployment

Verify build works:
```bash
bun run build
bun run preview
```

---

## Commands Reference

```bash
# Find available work
bd ready

# Claim a task
bd update <id> --status=in_progress

# Complete a task
bd close <id>

# See dependency graph
bd graph ericolsondev-62f

# Sync to JSONL
bd sync --flush-only
```
