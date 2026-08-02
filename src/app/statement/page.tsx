import type { Metadata } from "next";
import RevealText from "@/components/RevealText";

export const metadata: Metadata = {
  title: "Artist Statement",
  description:
    "Das Artist Statement von Alexander Hild — Gedanken zu Stille, Raum und Malerei.",
};

export default function StatementPage() {
  return (
    <div className="pb-28 pt-32 md:pb-40 md:pt-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <RevealText>
          <p className="text-[0.8rem] uppercase tracking-widest2 text-stone">
            Artist Statement
          </p>
          <h1 className="mt-4 font-display text-display-2 font-light">
            Über die Stille im Bild
          </h1>
        </RevealText>

        <RevealText delay={0.15}>
          <div className="mt-14 space-y-7 font-display text-xl font-light italic leading-relaxed text-ink/90 dark:text-cloud/90 md:text-2xl">
            <p>
              Ich male, um einen Zustand vor der Sprache zu erreichen — eine
              Fläche, die noch nichts behauptet.
            </p>
          </div>
        </RevealText>

        <RevealText delay={0.25}>
          <div className="mt-10 space-y-6 text-[1.05rem] leading-relaxed text-ink/80 dark:text-cloud/80">
            <p>
              Jedes Bild beginnt mit einer Entscheidung, etwas wegzulassen.
              Farbe wird geschichtet, wieder abgetragen, erneut aufgebaut,
              bis eine Ruhe entsteht, die nicht mit Leere zu verwechseln ist.
              Was bleibt, soll spürbar, aber nicht erklärbar sein.
            </p>
            <p>
              Meine Arbeiten entstehen in langsamen Serien. Jede Serie ist ein
              Versuch, denselben Gedanken aus einem anderen Winkel zu
              betrachten — Threshold fragt nach dem Moment des Übergangs,
              Still Water nach dem, was unter einer ruhigen Oberfläche
              bleibt, Interior Weather nach dem Klima eines Innenraums.
            </p>
            <p>
              Ich verstehe Malerei als eine Form der Aufmerksamkeit. Nicht
              als Ausdruck eines Gefühls, sondern als eine Methode, langsam
              genug zu schauen, um zu sehen, was tatsächlich da ist. Die
              Betrachterin oder der Betrachter ist eingeladen, dasselbe zu
              tun: langsamer zu werden, bevor sie oder er urteilt.
            </p>
            <p>
              Am Ende interessiert mich nicht, was ein Bild darstellt,
              sondern was es in einem Raum, in einer Sekunde der Stille,
              möglich macht.
            </p>
          </div>
        </RevealText>

        <RevealText delay={0.3}>
          <p className="mt-14 border-t border-ink/10 pt-6 text-sm text-stone dark:border-cloud/10">
            Alexander Hild, 2025
          </p>
        </RevealText>
      </div>
    </div>
  );
}
