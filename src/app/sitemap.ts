import type { MetadataRoute } from "next";
import { artworks } from "@/lib/artworks";

const siteUrl = "https://alexanderhild.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/gallery",
    "/about",
    "/statement",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const workRoutes = artworks.map((work) => ({
    url: `${siteUrl}/gallery/${work.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes];
}
