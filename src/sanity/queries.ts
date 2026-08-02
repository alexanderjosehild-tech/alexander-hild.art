import { groq } from "next-sanity";

// Gemeinsames Bild-Fragment inkl. Metadaten für next/image (Blur-Platzhalter,
// korrektes Seitenverhältnis ohne Layout-Shift).
const imageFragment = /* groq */ `
  asset->{
    _id,
    url,
    metadata { lqip, dimensions { width, height } }
  },
  hotspot,
  alt
`;

export const homepageQuery = groq`
  *[_type == "homepage"][0]{
    title,
    subtitle,
    introText,
    heroSlides[]{
      alt,
      image{ ${imageFragment} }
    },
    seo
  }
`;

export const artworksQuery = groq`
  *[_type == "artwork"] | order(orderRank asc){
    _id,
    title,
    "slug": slug.current,
    description,
    material,
    dimensions,
    year,
    series,
    status,
    coverImage{ ${imageFragment} }
  }
`;

export const artworkBySlugQuery = groq`
  *[_type == "artwork" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    description,
    material,
    dimensions,
    year,
    series,
    status,
    coverImage{ ${imageFragment} },
    images[]{ ${imageFragment} },
    seo
  }
`;

export const artworkSlugsQuery = groq`
  *[_type == "artwork" && defined(slug.current)][].slug.current
`;

export const nextArtworkSlugQuery = groq`
  *[_type == "artwork"] | order(orderRank asc){ "slug": slug.current }
`;

export const exhibitionsQuery = groq`
  *[_type == "exhibition"] | order(orderRank asc){
    _id,
    title,
    "slug": slug.current,
    location,
    startDate,
    endDate,
    description,
    images[]{ ${imageFragment} }
  }
`;

export const aboutQuery = groq`
  *[_type == "about"][0]{
    title,
    portrait{ ${imageFragment} },
    bio,
    seo
  }
`;

export const statementQuery = groq`
  *[_type == "statement"][0]{
    title,
    intro,
    body,
    seo
  }
`;

export const contactQuery = groq`
  *[_type == "contact"][0]{
    email,
    phone,
    instagram,
    socialLinks,
    studioLocation,
    representation,
    introText
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteTitle,
    metaTitle,
    metaDescription,
    ogImage{ ${imageFragment} },
    siteUrl
  }
`;
