import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artworks } from "@/lib/artworks";

export function generateStaticParams() {
  return artworks.map((work) => ({ id: work.id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const work = artworks.find((w) => w.id === params.id);
  if (!work) return {};
  return {
    title: work.title,
    description: `${work.title}, ${work.medium}, ${work.dimensions}, ${work.year} — von Alexander Hild.`,
    openGraph: {
      images: [{ url: work.image }],
    },
  };
}

export default function WorkPage({ params }: { params: { id: string } }) {
  const index = artworks.findIndex((w) => w.id === params.id);
  if (index === -1) notFound();
  const work = artworks[index];
  const next = artworks[(index + 1) % artworks.length];

  return (
    <div className="pb-28 pt-32 md:pb-40 md:pt-36">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <Link
          href="/gallery"
          className="mb-10 inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-widest2 text-stone hover:text-ink dark:hover:text-cloud"
        >
          <span aria-hidden>←</span> Zurück zur Galerie
        </Link>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-cloud dark:bg-ink/40 md:col-span-8">
            <Image
              src={work.image}
              alt={work.title}
              fill
              sizes="(min-width: 768px) 65vw, 90vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest2 text-stone">
              {work.id} / {String(artworks.length).padStart(2, "0")}
            </p>
            <h1 className="mt-3 font-display text-display-3 italic font-light">
              {work.title}
            </h1>
            {work.series && (
              <p className="mt-2 text-sm text-stone">
                Serie: {work.series}
              </p>
            )}
            <dl className="mt-8 space-y-3 border-t border-ink/10 pt-6 text-sm dark:border-cloud/10">
              <div className="flex justify-between gap-4">
                <dt className="text-stone">Technik</dt>
                <dd className="text-right">{work.medium}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone">Maße</dt>
                <dd className="text-right">{work.dimensions}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone">Jahr</dt>
                <dd className="text-right">{work.year}</dd>
              </div>
            </dl>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-widest2 hover:opacity-60"
            >
              Anfrage zu diesem Werk
              <span className="h-px w-8 bg-current" />
            </Link>
          </div>
        </div>

        <div className="mt-24 border-t border-ink/10 pt-8 dark:border-cloud/10">
          <Link
            href={`/gallery/${next.id}`}
            className="group flex items-baseline justify-between"
          >
            <span className="text-xs uppercase tracking-widest2 text-stone">
              Nächstes Werk
            </span>
            <span className="font-display text-2xl italic transition-transform duration-300 group-hover:translate-x-1">
              {next.title} →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
