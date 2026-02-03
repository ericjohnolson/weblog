import type { Post, PostMetadata } from './types';

interface MarkdownModule {
  default: unknown;
  metadata: PostMetadata;
}

const postModules = import.meta.glob<MarkdownModule>('/src/content/posts/*.md');

function getSlugFromPath(path: string): string {
  const filename = path.split('/').pop() || '';
  return filename.replace('.md', '');
}

async function loadPost(path: string, loader: () => Promise<MarkdownModule>): Promise<Post> {
  const module = await loader();
  const slug = getSlugFromPath(path);

  return {
    slug,
    title: module.metadata.title,
    date: new Date(module.metadata.date),
    tags: module.metadata.tags || [],
    featured: module.metadata.featured ?? false,
    description: module.metadata.description,
    content: ''
  };
}

export async function getPosts(): Promise<Post[]> {
  const paths = Object.keys(postModules);

  if (paths.length === 0) {
    return [];
  }

  const posts = await Promise.all(
    Object.entries(postModules).map(([path, loader]) => loadPost(path, loader))
  );

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getPost(slug: string): Promise<Post | null> {
  const path = `/src/content/posts/${slug}.md`;
  const loader = postModules[path];

  if (!loader) {
    return null;
  }

  return loadPost(path, loader);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.featured);
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getPosts();
  const tagSet = new Set<string>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }

  return Array.from(tagSet).sort();
}
