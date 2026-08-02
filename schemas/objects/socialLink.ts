import { defineType, defineField } from "sanity";

export default defineType({
  name: "socialLink",
  title: "Social-Media-Link",
  type: "object",
  fields: [
    defineField({
      name: "platform",
      title: "Plattform",
      type: "string",
      options: {
        list: [
          { title: "Instagram", value: "instagram" },
          { title: "Facebook", value: "facebook" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Pinterest", value: "pinterest" },
          { title: "Sonstige", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "label",
      title: "Anzeigename (optional)",
      type: "string",
      description: "Wird verwendet, wenn Plattform = Sonstige.",
    }),
  ],
  preview: {
    select: { title: "platform", subtitle: "url" },
  },
});
