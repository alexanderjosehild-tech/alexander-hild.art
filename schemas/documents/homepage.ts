import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";

// Singleton: Es gibt nur ein Homepage-Dokument.
export default defineType({
  name: "homepage",
  title: "Startseite",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "localeString",
      description: "Großer Titel im Hero-Bereich (z. B. der Künstlername).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Untertitel",
      type: "localeText",
      description: "Kurzer, einleitender Satz unter dem Titel.",
    }),
    defineField({
      name: "heroSlides",
      title: "Hero-Slideshow",
      description:
        "Mehrere Bilder für die automatisch wechselnde Startseiten-Ansicht. " +
        "Reihenfolge per Drag & Drop (Ziehpunkt links am Eintrag) änderbar.",
      type: "array",
      of: [{ type: "heroSlide" }],
      validation: (Rule) => Rule.min(1).error("Mindestens ein Slide wird benötigt."),
    }),
    defineField({
      name: "introText",
      title: "Einleitungstext (unter dem Hero)",
      type: "localeText",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seoFields",
    }),
  ],
  preview: {
    select: { title: "title.de", media: "heroSlides.0.image" },
    prepare({ title, media }) {
      return { title: title || "Startseite", subtitle: "Singleton", media };
    },
  },
});
