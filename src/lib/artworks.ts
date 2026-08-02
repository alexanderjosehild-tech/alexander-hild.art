export type Artwork = {
  id: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  series?: string;
};

// Ersetze `image` mit echten Pfaden, z. B. "/images/works/01.jpg"
// Lege deine Bilddateien einfach in /public/images/works/ ab.
export const artworks: Artwork[] = [
  {
    id: "01",
    title: "Untitled (Threshold)",
    year: "2024",
    medium: "Öl und Pigment auf Leinwand",
    dimensions: "210 × 160 cm",
    image: "/images/works/01.jpg",
    series: "Threshold",
  },
  {
    id: "02",
    title: "Still Water I",
    year: "2024",
    medium: "Acryl auf Leinwand",
    dimensions: "180 × 140 cm",
    image: "/images/works/02.jpg",
    series: "Still Water",
  },
  {
    id: "03",
    title: "Interior Weather",
    year: "2023",
    medium: "Mischtechnik auf Holz",
    dimensions: "120 × 90 cm",
    image: "/images/works/03.jpg",
  },
  {
    id: "04",
    title: "Still Water II",
    year: "2023",
    medium: "Acryl auf Leinwand",
    dimensions: "180 × 140 cm",
    image: "/images/works/04.jpg",
    series: "Still Water",
  },
  {
    id: "05",
    title: "Untitled (Threshold II)",
    year: "2023",
    medium: "Öl und Pigment auf Leinwand",
    dimensions: "210 × 160 cm",
    image: "/images/works/05.jpg",
    series: "Threshold",
  },
  {
    id: "06",
    title: "Quiet Structure",
    year: "2022",
    medium: "Pigment auf Papier",
    dimensions: "100 × 70 cm",
    image: "/images/works/06.jpg",
  },
  {
    id: "07",
    title: "Interior Weather II",
    year: "2022",
    medium: "Mischtechnik auf Holz",
    dimensions: "120 × 90 cm",
    image: "/images/works/07.jpg",
  },
  {
    id: "08",
    title: "Still Water III",
    year: "2022",
    medium: "Acryl auf Leinwand",
    dimensions: "180 × 140 cm",
    image: "/images/works/08.jpg",
    series: "Still Water",
  },
];

export const heroWorks = artworks.slice(0, 3);
