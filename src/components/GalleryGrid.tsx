"use client";

import Image from "next/image";
import { useState } from "react";
import RevealText from "./RevealText";
import Lightbox from "./Lightbox";
import type { Artwork } from "@/lib/artworks";

export default function GalleryGrid({ artworks }: { artworks: Artwork[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-12">
          {artworks.map((work, i) => (
            <RevealText
              key={work.id}
              delay={(i % 4) * 0.06}
              className="md:col-span-6"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group block w-full text-left"
                aria-label={`${work.title} in Vollbildansicht öffnen`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-cloud dark:bg-ink/40">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-gallery group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-500 group-hover:bg-ink/10 group-hover:opacity-100">
                    <span className="text-[0.7rem] uppercase tracking-widest2 text-cloud mix-blend-difference">
                      Vollbild ansehen
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-display text-lg italic">
                      {work.title}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest2 text-stone">
                      {work.medium}, {work.year}
                    </p>
                  </div>
                  <span className="shrink-0 font-body text-xs text-stone">
                    {work.id}
                  </span>
                </div>
              </button>
            </RevealText>
          ))}
        </div>
      </div>

      <Lightbox
        artworks={artworks}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
