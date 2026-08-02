import { defineType, defineField } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

// Singleton
export default defineType({
  name: "contact",
  title: "Kontakt",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "email",
      title: "E-Mail",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: "email",
          invert: false,
        }),
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram-URL",
      type: "url",
    }),
    defineField({
      name: "socialLinks",
      title: "Weitere Social-Media-Links",
      type: "array",
      of: [{ type: "socialLink" }],
    }),
    defineField({
      name: "studioLocation",
      title: "Atelier-Ort",
      type: "string",
      description: "z. B. „Berlin, Deutschland“.",
    }),
    defineField({
      name: "representation",
      title: "Galerie-Vertretung",
      type: "string",
    }),
    defineField({
      name: "introText",
      title: "Einleitungstext auf der Kontaktseite",
      type: "localeText",
    }),
  ],
  preview: {
    select: { subtitle: "email" },
    prepare({ subtitle }) {
      return { title: "Kontakt", subtitle: subtitle || "Singleton" };
    },
  },
});
