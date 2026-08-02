import type { Metadata } from "next";
import Image from "next/image";
import RevealText from "@/components/RevealText";

export const metadata: Metadata = {
  title: "Über den Künstler",
  description:
    "Biografie, Ausbildung und Ausstellungshistorie des zeitgenössischen Künstlers Alexander Hild.",
};

const exhibitions = [
  { year: "2025", title: "Still Water — Einzelausstellung", place: "Galerie Nord, Berlin" },
  { year: "2024", title: "Interior Weather — Gruppenausstellung", place: "Kunstverein Hamburg" },
  { year: "2023", title: "Threshold — Einzelausstellung", place: "Studio 12, Zürich" },
  { year: "2022", title: "Neue Positionen — Gruppenausstellung", place: "Kunsthalle Leipzig" },
  { year: "2021", title: "Diplomausstellung", place: "Kunstakademie Düsseldorf" },
];

export default function AboutPage() {
  return (
    <div className="pb-28 pt-32 md:pb-40 md:pt-36">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <RevealText className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-cloud dark:bg-ink/40">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait von Alexander Hild im Atelier"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </RevealText>

          <div className="md:col-span-7">
            <RevealText>
              <h1 className="font-display text-display-2 font-light">
                Über den Künstler
              </h1>
            </RevealText>

            <RevealText delay={0.1}>
              <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/85 dark:text-cloud/85">
                <p>
                  Alexander Hild, geboren 1986, studierte Freie Kunst an der
                  Kunstakademie Düsseldorf und schloss sein Studium als
                  Meisterschüler ab. Seine Praxis kreist um die Frage, wie
                  viel Reduktion ein Bild tragen kann, bevor es zur Stille
                  wird.
                </p>
                <p>
                  Er arbeitet in mehrjährigen Serien — Threshold, Still Water,
                  Interior Weather — deren Titel Zustände beschreiben statt
                  Motive. Es geht um Übergänge: zwischen Fläche und Tiefe,
                  Kontrolle und Zufall, Farbe und Licht.
                </p>
                <p>
                  Hild lebt und arbeitet zwischen Berlin und der
                  norddeutschen Küste. Seine Arbeiten befinden sich in
                  privaten Sammlungen in Europa und Nordamerika.
                </p>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <div className="mt-14 border-t border-ink/10 pt-8 dark:border-cloud/10">
                <p className="text-[0.8rem] uppercase tracking-widest2 text-stone">
                  Ausstellungen (Auswahl)
                </p>
                <ul className="mt-6 space-y-4">
                  {exhibitions.map((ex) => (
                    <li
                      key={ex.year + ex.title}
                      className="flex flex-col gap-1 border-b border-ink/[0.06] pb-4 dark:border-cloud/[0.08] sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <span className="font-display text-lg italic">
                        {ex.title}
                      </span>
                      <span className="shrink-0 text-sm text-stone">
                        {ex.place} — {ex.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </div>
  );
}
