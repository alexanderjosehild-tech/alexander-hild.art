import { defineType, defineField } from "sanity";

// Zweisprachiger Rich-Text — für längere, formatierte Inhalte
// (Artist Statement, Über mich).
export default defineType({
  name: "localePortableText",
  title: "Rich Text (DE/EN)",
  type: "object",
  fields: [
    defineField({
      name: "de",
      title: "Deutsch",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "en",
      title: "English",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
