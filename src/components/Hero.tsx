"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { heroWorks } from "@/lib/artworks";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroWorks.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const active = heroWorks[index];

  return (
    <section className="relative flex h-[100svh] w-full items-end overflow-hidden bg-ink">
      {/* Cross-fading background works */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={active.image}
              alt={active.title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-70"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />
      </div>

      {/* Wall text */}
      <div className="relative z-10 mx-auto flex w-full max-w-8xl flex-col gap-10 px-6 pb-16 pt-40 md:px-10 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-display text-display-1 text-cloud"
        >
          Alexander
          <br />
          <span className="italic font-light">Hild</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col gap-6 border-t border-cloud/20 pt-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md font-body text-sm leading-relaxed text-cloud/80">
            Malerei zwischen Stille und Struktur. Aktuelle Arbeiten und
            Ausstellungen des zeitgenössischen Künstlers.
          </p>
          <Link
            href="/gallery"
            className="group inline-flex w-fit items-center gap-3 text-[0.8rem] uppercase tracking-widest2 text-cloud"
          >
            Werke betrachten
            <span className="inline-block h-px w-8 bg-cloud transition-all duration-500 ease-gallery group-hover:w-14" />
          </Link>
        </motion.div>
      </div>

      {/* Index indicator */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 text-cloud/70 md:bottom-10 md:right-10">
        <span className="font-body text-xs tracking-widest2">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-6 bg-cloud/40" />
        <span className="font-body text-xs tracking-widest2">
          {String(heroWorks.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
