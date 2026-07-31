import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  const locales = routing.locales;
  const now = new Date();
  const posts = getAllPosts();

  const staticPaths = ["", "/erp", "/crm", "/blog"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${site}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path === "/blog" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/blog" ? 0.7 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site}/${l}${path}`])
        ),
      },
    }))
  );

  const postEntries: MetadataRoute.Sitemap = posts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${site}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site}/${l}/blog/${post.slug}`])
        ),
      },
    }))
  );

  return [...staticEntries, ...postEntries];
}
