import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

// Singleton: globale SEO- und Website-Grundeinstellungen.
export default defineType({
  name: "siteSettings",
  title: "SEO & Website-Einstellungen",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "siteTitle",
      title: "Website-Name",
      type: "localeString",
      description: "z. B. „Alexander Hild — Zeitgenössische Kunst“.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaTitle",
      title: "Standard Meta-Titel",
      type: "localeString",
    }),
    defineField({
      name: "metaDescription",
      title: "Standard Meta-Beschreibung",
      type: "localeText",
    }),
    defineField({
      name: "ogImage",
      title: "Standard Open-Graph-Bild",
      type: "image",
      description: "Wird verwendet, wenn eine Seite kein eigenes OG-Bild hat.",
      options: { hotspot: true },
    }),
    defineField({
      name: "siteUrl",
      title: "Domain (für Sitemap & SEO)",
      type: "url",
      description: "z. B. https://alexanderhild.com",
    }),
  ],
  preview: {
    prepare() {
      return { title: "SEO & Website-Einstellungen", subtitle: "Singleton" };
    },
  },
});
