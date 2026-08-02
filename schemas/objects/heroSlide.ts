import { defineType, defineField } from "sanity";

// Einzelnes Bild der Startseiten-Slideshow. Die Reihenfolge der
// Slides wird direkt durch die Position im Array bestimmt — im
// Studio per Drag & Drop änderbar.
export default defineType({
  name: "heroSlide",
  title: "Slide",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt-Text (Bildbeschreibung)",
      type: "localeString",
      description: "Wichtig für Barrierefreiheit und SEO.",
    }),
  ],
  preview: {
    select: { media: "image", alt: "alt.de" },
    prepare({ media, alt }) {
      return { title: alt || "Slide", media };
    },
  },
});
