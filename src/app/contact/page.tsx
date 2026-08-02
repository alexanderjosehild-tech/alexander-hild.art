import type { Metadata } from "next";
import RevealText from "@/components/RevealText";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Alexander Hild für Ausstellungsanfragen, Ankäufe oder Presseanfragen.",
};

export default function ContactPage() {
  return (
    <div className="pb-28 pt-32 md:pb-40 md:pt-36">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <RevealText>
              <h1 className="font-display text-display-2 font-light">
                Kontakt
              </h1>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
                Für Ausstellungsanfragen, Ankäufe, Presse oder allgemeine
                Fragen erreichen Sie das Atelier über das nebenstehende
                Formular oder direkt per E-Mail.
              </p>
            </RevealText>

            <RevealText delay={0.15}>
              <dl className="mt-14 space-y-6 border-t border-ink/10 pt-8 text-sm dark:border-cloud/10">
                <div>
                  <dt className="text-[0.75rem] uppercase tracking-widest2 text-stone">
                    E-Mail
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:studio@alexanderhild.com"
                      className="hover:text-patina"
                    >
                      studio@alexanderhild.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.75rem] uppercase tracking-widest2 text-stone">
                    Atelier
                  </dt>
                  <dd className="mt-1">Berlin, Deutschland</dd>
                </div>
                <div>
                  <dt className="text-[0.75rem] uppercase tracking-widest2 text-stone">
                    Vertretung
                  </dt>
                  <dd className="mt-1">Galerie Nord, Berlin</dd>
                </div>
              </dl>
            </RevealText>
          </div>

          <RevealText delay={0.1} className="md:col-span-7">
            <ContactForm />
          </RevealText>
        </div>
      </div>
    </div>
  );
}
