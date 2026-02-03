import type { Component } from 'svelte';
import type { Project, ProjectMetadata } from './types';

interface MarkdownModule {
  default: Component;
  metadata: ProjectMetadata;
}

export interface ProjectWithComponent extends Project {
  component: Component;
}

const projectModules = import.meta.glob<MarkdownModule>('/src/content/projects/*.md');

function getSlugFromPath(path: string): string {
  const filename = path.split('/').pop() || '';
  return filename.replace('.md', '');
}

async function loadProject(path: string, loader: () => Promise<MarkdownModule>): Promise<Project> {
  const module = await loader();
  const slug = getSlugFromPath(path);

  return {
    slug,
    title: module.metadata.title,
    description: module.metadata.description,
    url: module.metadata.url,
    demo: module.metadata.demo,
    order: module.metadata.order,
    content: ''
  };
}

async function loadProjectWithComponent(path: string, loader: () => Promise<MarkdownModule>): Promise<ProjectWithComponent> {
  const module = await loader();
  const slug = getSlugFromPath(path);

  return {
    slug,
    title: module.metadata.title,
    description: module.metadata.description,
    url: module.metadata.url,
    demo: module.metadata.demo,
    order: module.metadata.order,
    content: '',
    component: module.default
  };
}

/**
 * Get all projects sorted by order (ascending)
 */
export async function getProjects(): Promise<Project[]> {
  const paths = Object.keys(projectModules);

  if (paths.length === 0) {
    return [];
  }

  const projects = await Promise.all(
    Object.entries(projectModules).map(([path, loader]) => loadProject(path, loader))
  );

  return projects.sort((a, b) => a.order - b.order);
}

/**
 * Get a single project by slug
 */
export async function getProject(slug: string): Promise<Project | null> {
  const path = `/src/content/projects/${slug}.md`;
  const loader = projectModules[path];

  if (!loader) {
    return null;
  }

  return loadProject(path, loader);
}

/**
 * Get a single project by slug with its rendered component
 */
export async function getProjectWithComponent(slug: string): Promise<ProjectWithComponent | null> {
  const path = `/src/content/projects/${slug}.md`;
  const loader = projectModules[path];

  if (!loader) {
    return null;
  }

  return loadProjectWithComponent(path, loader);
}
