import type { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/fetch";
import { siteSettingsQuery } from "@/sanity/queries";
import { pickLocale } from "@/i18n/config";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const settings = await sanityFetch<any>({ query: siteSettingsQuery });
  const name = pickLocale(settings?.siteTitle, "de") || "Alexander Hild";

  return {
    name,
    short_name: name.split(" ")[0],
    start_url: "/de",
    display: "standalone",
    background_color: "#FAFAF8",
    theme_color: "#131310",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
