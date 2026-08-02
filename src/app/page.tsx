import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import RevealText from "@/components/RevealText";
import { artworks } from "@/lib/artworks";

export default function HomePage() {
  const featured = artworks.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Intro statement strip */}
      <section className="mx-auto max-w-8xl px-6 py-28 md:px-10 md:py-40">
        <RevealText>
          <p className="max-w-3xl font-display text-display-3 font-light leading-snug">
            Hilds Arbeiten untersuchen den Moment, in dem Farbe zu Raum wird —
            Flächen, die zwischen Stille und Spannung changieren, entstanden
            in einem fortlaufenden Dialog mit Licht und Material.
          </p>
        </RevealText>
        <RevealText delay={0.15}>
          <Link
            href="/statement"
            className="mt-8 inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-widest2 text-stone hover:text-ink dark:hover:text-cloud"
          >
            Artist Statement lesen
            <span className="h-px w-8 bg-current" />
          </Link>
        </RevealText>
      </section>

      {/* Featured works grid */}
      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-8xl">
          <RevealText>
            <div className="mb-10 flex items-end justify-between border-b border-ink/10 pb-6 dark:border-cloud/10">
              <h2 className="font-display text-display-3 font-light">
                Ausgewählte Werke
              </h2>
              <Link
                href="/gallery"
                className="hidden text-[0.8rem] uppercase tracking-widest2 text-stone hover:text-ink dark:hover:text-cloud md:inline"
              >
                Gesamte Galerie
              </Link>
            </div>
          </RevealText>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {featured.map((work, i) => (
              <RevealText key={work.id} delay={i * 0.08}>
                <Link
                  href={`/gallery/${work.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-cloud dark:bg-ink/40">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(min-width: 768px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-gallery group-hover:scale-[1.03]"
                    />
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
                    <span className="font-body text-xs text-stone">
                      {work.id}
                    </span>
                  </div>
                </Link>
              </RevealText>
            ))}
          </div>

          <RevealText>
            <Link
              href="/gallery"
              className="mt-14 inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-widest2 md:hidden"
            >
              Gesamte Galerie ansehen
              <span className="h-px w-8 bg-current" />
            </Link>
          </RevealText>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-ink/[0.06] px-6 py-28 dark:border-cloud/[0.08] md:px-10 md:py-40">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 md:grid-cols-12">
          <RevealText className="md:col-span-4">
            <p className="text-[0.8rem] uppercase tracking-widest2 text-stone">
              Über den Künstler
            </p>
          </RevealText>
          <RevealText delay={0.1} className="md:col-span-8">
            <p className="font-display text-display-3 font-light leading-snug">
              Geboren in Deutschland, lebt und arbeitet Alexander Hild
              zwischen Berlin und der Küste — eine Praxis geprägt von
              Reduktion, Geduld und dem langsamen Rhythmus des Ateliers.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-widest2 text-stone hover:text-ink dark:hover:text-cloud"
            >
              Biografie & Ausstellungen
              <span className="h-px w-8 bg-current" />
            </Link>
          </RevealText>
        </div>
      </section>
    </>
  );
}
