"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-14" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"}
      className="group relative flex h-8 w-14 items-center rounded-full border border-ink/15 dark:border-cloud/15 px-1 transition-colors"
    >
      <span
        className={`absolute h-6 w-6 rounded-full bg-ink transition-transform duration-300 ease-gallery dark:bg-cloud ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
      <span className="sr-only">Farbmodus umschalten</span>
    </button>
  );
}
