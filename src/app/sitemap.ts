import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

export const dynamic = "force-static";

const SITE_URL = "https://waikikiexperience.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = new Date(POSTS[0].date);

  return [
    {
      url: SITE_URL,
      lastModified: latestPost,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/book-a-table`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latestPost,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...POSTS.map((post) => ({
      url: `${SITE_URL}${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
