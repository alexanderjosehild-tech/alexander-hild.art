import { defineType, defineField } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export default defineType({
  name: "exhibition",
  title: "Ausstellung",
  type: "document",
  icon: CalendarIcon,
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
      options: { source: "title.de", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Ort",
      type: "string",
      description: "z. B. „Galerie Nord, Berlin“.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Datum (Beginn)",
      type: "date",
      options: { dateFormat: "DD.MM.YYYY" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "Datum (Ende)",
      type: "date",
      options: { dateFormat: "DD.MM.YYYY" },
      description: "Optional — bei einmaligen Terminen leer lassen.",
    }),
    defineField({
      name: "description",
      title: "Beschreibung",
      type: "localeText",
    }),
    defineField({
      name: "images",
      title: "Bilder",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt-Text", type: "string" }],
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
  ],
  orderings: [
    {
      title: "Manuelle Reihenfolge",
      name: "orderRank",
      by: [{ field: "orderRank", direction: "asc" }],
    },
    {
      title: "Datum, neueste zuerst",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title.de", subtitle: "location", media: "images.0" },
  },
});
