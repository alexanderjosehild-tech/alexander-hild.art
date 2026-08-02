import type { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/fetch";
import { siteSettingsQuery } from "@/sanity/queries";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await sanityFetch<any>({ query: siteSettingsQuery });
  const siteUrl = settings?.siteUrl || "https://alexanderhild.com";

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/studio" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
