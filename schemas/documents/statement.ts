import { defineType, defineField } from "sanity";
import { EditIcon } from "@sanity/icons";

// Singleton
export default defineType({
  name: "statement",
  title: "Künstlerstatement",
  type: "document",
  icon: EditIcon,
  fields: [
    defineField({
      name: "title",
      title: "Seitentitel",
      type: "localeString",
      initialValue: { de: "Artist Statement", en: "Artist Statement" },
    }),
    defineField({
      name: "intro",
      title: "Einleitender Satz (größer dargestellt)",
      type: "localeText",
    }),
    defineField({
      name: "body",
      title: "Statement-Text",
      type: "localePortableText",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seoFields",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Künstlerstatement", subtitle: "Singleton" };
    },
  },
});
