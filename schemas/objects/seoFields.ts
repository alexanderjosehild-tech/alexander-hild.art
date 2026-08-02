import { defineType, defineField } from "sanity";

// Wiederverwendbare SEO-Felder — global (Website-Einstellungen) und
// pro Kunstwerk als Override nutzbar.
export default defineType({
  name: "seoFields",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta-Titel",
      type: "localeString",
      description: "Falls leer, wird der normale Titel der Seite verwendet.",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta-Beschreibung",
      type: "localeText",
      description: "Für Suchmaschinen, ca. 150–160 Zeichen empfohlen.",
    }),
    defineField({
      name: "ogImage",
      title: "Open-Graph-Bild",
      type: "image",
      description: "Vorschaubild für Social Media (empfohlen: 1200×630px).",
      options: { hotspot: true },
    }),
  ],
  options: { collapsible: true, collapsed: true },
});
