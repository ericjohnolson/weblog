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
