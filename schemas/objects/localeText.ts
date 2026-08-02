import { defineType, defineField } from "sanity";

// Zweisprachiges, mehrzeiliges Textfeld — z. B. für kurze Beschreibungen.
export default defineType({
  name: "localeText",
  title: "Text mehrzeilig (DE/EN)",
  type: "object",
  fields: [
    defineField({
      name: "de",
      title: "Deutsch",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "en",
      title: "English",
      type: "text",
      rows: 4,
    }),
  ],
});
