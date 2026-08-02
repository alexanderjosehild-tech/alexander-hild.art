import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[0.8rem] uppercase tracking-widest2 text-stone">
        404
      </p>
      <h1 className="mt-4 font-display text-display-3 font-light italic">
        Diese Seite existiert nicht.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-widest2 hover:opacity-60"
      >
        Zurück zur Startseite
        <span className="h-px w-8 bg-current" />
      </Link>
    </div>
  );
}
