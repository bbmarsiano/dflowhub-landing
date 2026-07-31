import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogProduct = "erp" | "crm" | "general";

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  product: BlogProduct;
  keywords: string[];
  coverImage: string;
  slug: string;
}

export interface BlogPost extends BlogFrontmatter {
  content: string;
  readingMinutes: number;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const WORDS_PER_MINUTE = 200;

function readingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

function parsePost(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;

  if (!fm.title || !fm.description || !fm.date || !fm.product || !fm.slug) {
    throw new Error(`Invalid frontmatter in ${filename}`);
  }
  if (!["erp", "crm", "general"].includes(fm.product)) {
    throw new Error(`Invalid product "${fm.product}" in ${filename}`);
  }

  return {
    title: fm.title,
    description: fm.description,
    date: fm.date,
    product: fm.product,
    keywords: Array.isArray(fm.keywords) ? fm.keywords : [],
    coverImage: fm.coverImage || "/logo.png",
    slug: fm.slug,
    content,
    readingMinutes: readingMinutes(content),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(parsePost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
