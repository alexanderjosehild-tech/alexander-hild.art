import { client } from "./client";

/**
 * Zentraler Server-seitiger Sanity-Fetch-Helfer.
 * Nutzt Next.js' Fetch-Cache mit Revalidierung, damit neue Inhalte im
 * Studio innerhalb von 60 Sekunden live erscheinen, ohne bei jedem
 * Seitenaufruf neu von Sanity zu laden.
 *
 * Hinweis: Diese Datei wird ausschließlich aus Server Components
 * (page.tsx / layout.tsx ohne "use client") importiert, daher ist
 * kein zusätzliches "server-only"-Paket nötig.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: { revalidate: 60, tags },
  });
}
