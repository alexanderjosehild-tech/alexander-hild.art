import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/[0.06] dark:border-cloud/[0.08]">
      <div className="mx-auto flex max-w-8xl flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-2xl">Alexander Hild</p>
          <p className="mt-2 max-w-sm text-sm text-stone">
            Atelier für zeitgenössische Malerei. Ausstellungen weltweit.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 text-[0.8rem] uppercase tracking-widest2 text-stone">
          <Link href="/gallery" className="hover:text-ink dark:hover:text-cloud">
            Werke
          </Link>
          <Link href="/about" className="hover:text-ink dark:hover:text-cloud">
            Über den Künstler
          </Link>
          <Link href="/contact" className="hover:text-ink dark:hover:text-cloud">
            Kontakt
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink dark:hover:text-cloud"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-8xl border-t border-ink/[0.06] px-6 py-6 text-xs text-stone dark:border-cloud/[0.08] md:px-10">
        © {year} Alexander Hild. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
