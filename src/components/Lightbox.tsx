"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useCallback } from "react";
import type { Artwork } from "@/lib/artworks";

export default function Lightbox({
  artworks,
  activeIndex,
  onClose,
  onNavigate,
}: {
  artworks: Artwork[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const isOpen = activeIndex !== null;
  const work = isOpen ? artworks[activeIndex] : null;

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % artworks.length);
  }, [activeIndex, artworks.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + artworks.length) % artworks.length);
  }, [activeIndex, artworks.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {isOpen && work && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-night/97 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Vollbildansicht: ${work.title}`}
        >
          <div className="flex items-center justify-between px-6 py-5 md:px-10">
            <span className="font-body text-xs uppercase tracking-widest2 text-cloud/60">
              {String(activeIndex! + 1).padStart(2, "0")} /{" "}
              {String(artworks.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Vollbildansicht schließen"
              className="font-body text-xs uppercase tracking-widest2 text-cloud/80 hover:text-cloud"
            >
              Schließen ✕
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-4">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Vorheriges Werk"
              className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center text-cloud/60 hover:text-cloud md:left-6"
            >
              ←
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={work.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full max-h-[75vh] w-full max-w-5xl"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={goNext}
              aria-label="Nächstes Werk"
              className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center text-cloud/60 hover:text-cloud md:right-6"
            >
              →
            </button>
          </div>

          <div className="border-t border-cloud/10 px-6 py-6 text-center md:px-10">
            <p className="font-display text-xl italic text-cloud">
              {work.title}
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest2 text-cloud/50">
              {work.medium} — {work.dimensions} — {work.year}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
