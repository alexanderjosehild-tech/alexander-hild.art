import type { SchemaTypeDefinition } from "sanity";

// Objects (wiederverwendbare Bausteine)
import localeString from "./objects/localeString";
import localeText from "./objects/localeText";
import localePortableText from "./objects/localePortableText";
import seoFields from "./objects/seoFields";
import heroSlide from "./objects/heroSlide";
import socialLink from "./objects/socialLink";

// Documents (Content-Typen)
import homepage from "./documents/homepage";
import artwork from "./documents/artwork";
import exhibition from "./documents/exhibition";
import about from "./documents/about";
import statement from "./documents/statement";
import contact from "./documents/contact";
import siteSettings from "./documents/siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Objects
  localeString,
  localeText,
  localePortableText,
  seoFields,
  heroSlide,
  socialLink,
  // Documents
  homepage,
  artwork,
  exhibition,
  about,
  statement,
  contact,
  siteSettings,
];

// Namen der Singleton-Dokumente (nur ein Eintrag pro Typ).
export const singletonTypes = new Set([
  "homepage",
  "about",
  "statement",
  "contact",
  "siteSettings",
]);
