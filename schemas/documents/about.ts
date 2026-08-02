import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

// Singleton
export default defineType({
  name: "about",
  title: "Über mich",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      title: "Seitentitel",
      type: "localeString",
      initialValue: { de: "Über den Künstler", en: "About the Artist" },
    }),
    defineField({
      name: "portrait",
      title: "Porträtbild",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Biografie",
      type: "localePortableText",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seoFields",
    }),
  ],
  preview: {
    select: { media: "portrait" },
    prepare({ media }) {
      return { title: "Über mich", subtitle: "Singleton", media };
    },
  },
});
