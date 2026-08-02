import { defineType, defineField } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export default defineType({
  name: "artwork",
  title: "Kunstwerk",
  type: "document",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      description: "Wird automatisch aus dem deutschen Titel erzeugt.",
      options: {
        source: "title.de",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Beschreibung",
      type: "localeText",
    }),
    defineField({
      name: "material",
      title: "Material",
      type: "string",
      description: "z. B. „Beton, Acryl, Glasgranulat“.",
    }),
    defineField({
      name: "dimensions",
      title: "Maße",
      type: "string",
      description: "z. B. „26,5 × 18,5 × 3 cm“.",
    }),
    defineField({
      name: "year",
      title: "Jahr",
      type: "string",
    }),
    defineField({
      name: "series",
      title: "Serie",
      type: "string",
      description: "Optional — Name der Werkserie.",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Verfügbar", value: "available" },
          { title: "Verkauft", value: "sold" },
          { title: "Privatbesitz", value: "private" },
        ],
        layout: "radio",
      },
      initialValue: "available",
    }),
    defineField({
      name: "coverImage",
      title: "Coverbild",
      description: "Wird in Galerie-Übersicht und Startseite gezeigt.",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Weitere Bilder",
      description: "Zusätzliche Ansichten für die Vollbild-Galerie des Werks.",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt-Text",
              type: "string",
            },
          ],
        },
      ],
      options: { layout: "grid" },
    }),
    defineField({
      name: "orderRank",
      title: "Reihenfolge",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seoFields",
    }),
  ],
  orderings: [
    {
      title: "Manuelle Reihenfolge",
      name: "orderRank",
      by: [{ field: "orderRank", direction: "asc" }],
    },
    {
      title: "Jahr, neueste zuerst",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title.de",
      subtitle: "year",
      media: "coverImage",
      status: "status",
    },
    prepare({ title, subtitle, media, status }) {
      const statusLabel =
        status === "sold" ? "Verkauft" : status === "private" ? "Privatbesitz" : "Verfügbar";
      return {
        title,
        subtitle: `${subtitle || ""} — ${statusLabel}`,
        media,
      };
    },
  },
});
