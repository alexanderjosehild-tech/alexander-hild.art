import { defineType, defineField } from "sanity";

// Zweisprachiges Textfeld (einzeilig) — z. B. für Titel.
export default defineType({
  name: "localeString",
  title: "Text (DE/EN)",
  type: "object",
  fieldsets: [
    { name: "translations", title: "Übersetzungen", options: { columns: 2 } },
  ],
  fields: [
    defineField({
      name: "de",
      title: "Deutsch",
      type: "string",
      fieldset: "translations",
    }),
    defineField({
      name: "en",
      title: "English",
      type: "string",
      fieldset: "translations",
    }),
  ],
});
