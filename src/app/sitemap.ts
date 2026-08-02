import type { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/fetch";
import { artworkSlugsQuery, siteSettingsQuery } from "@/sanity/queries";
import { locales } from "@/i18n/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [settings, slugs] = await Promise.all([
    sanityFetch<any>({ query: siteSettingsQuery }),
    sanityFetch<string[]>({ query: artworkSlugsQuery }),
  ]);

  const siteUrl = settings?.siteUrl || "https://alexanderhild.com";

  const staticRoutes = ["", "/gallery", "/exhibitions", "/about", "/statement", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${siteUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }
    for (const slug of slugs || []) {
      entries.push({
        url: `${siteUrl}/${locale}/gallery/${slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
