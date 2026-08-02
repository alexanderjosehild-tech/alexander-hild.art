"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/gallery", label: "Werke" },
  { href: "/about", label: "Über" },
  { href: "/statement", label: "Statement" },
  { href: "/contact", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink/[0.06] bg-paper/80 backdrop-blur-md dark:border-cloud/[0.08] dark:bg-night/80">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="font-display text-lg tracking-tight md:text-xl"
          onClick={() => setOpen(false)}
        >
          Alexander Hild
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-[0.8rem] uppercase tracking-widest2 transition-opacity hover:opacity-60 ${
                pathname === link.href ? "opacity-100" : "opacity-70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 dark:bg-cloud ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 dark:bg-cloud ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-ink/[0.06] transition-[max-height] duration-500 ease-gallery dark:border-cloud/[0.08] md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-2xl"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
