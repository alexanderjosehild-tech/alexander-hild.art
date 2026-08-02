import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alexander Hild — Zeitgenössische Kunst",
    short_name: "A. Hild",
    description: "Werke, Ausstellungen und Artist Statement.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF8",
    theme_color: "#131310",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
