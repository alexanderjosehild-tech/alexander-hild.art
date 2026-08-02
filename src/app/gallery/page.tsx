import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import RevealText from "@/components/RevealText";
import { artworks } from "@/lib/artworks";

export const metadata: Metadata = {
  title: "Werke",
  description:
    "Übersicht der Werke von Alexander Hild — Malerei zwischen Stille und Struktur.",
};

export default function GalleryPage() {
  return (
    <div className="pb-28 pt-40 md:pb-40 md:pt-48">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <RevealText>
          <h1 className="font-display text-display-2 font-light">Werke</h1>
          <p className="mt-4 max-w-lg text-sm text-stone">
            Eine Auswahl aktueller und früherer Arbeiten. Bild anklicken für
            die Vollbildansicht.
          </p>
        </RevealText>
      </div>
      <div className="h-16 md:h-24" />
      <GalleryGrid artworks={artworks} />
    </div>
  );
}
