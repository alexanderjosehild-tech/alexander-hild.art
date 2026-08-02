import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import {
  HomeIcon,
  ImagesIcon,
  CalendarIcon,
  UserIcon,
  EditIcon,
  EnvelopeIcon,
  CogIcon,
} from "@sanity/icons";

// Zeigt Singleton-Dokumente direkt als Formular an (kein Klick auf eine
// Liste nötig) und blendet "Neu erstellen" / "Löschen" für sie aus,
// da pro Typ nur genau ein Dokument existieren soll.
const singleton = (S: any, typeName: string, title: string, icon: any) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(typeName).documentId(typeName));

export const deskStructure: StructureResolver = (S, context) => {
  return S.list()
    .title("Inhalt")
    .items([
      singleton(S, "homepage", "Startseite", HomeIcon),
      S.divider(),

      // Kunstwerke: eigene, per Drag & Drop sortierbare Liste.
      orderableDocumentListDeskItem({
        type: "artwork",
        title: "Kunstwerke",
        icon: ImagesIcon,
        S,
        context,
      }),

      // Ausstellungen: ebenfalls sortierbar.
      orderableDocumentListDeskItem({
        type: "exhibition",
        title: "Ausstellungen",
        icon: CalendarIcon,
        S,
        context,
      }),
      S.divider(),

      singleton(S, "about", "Über mich", UserIcon),
      singleton(S, "statement", "Künstlerstatement", EditIcon),
      singleton(S, "contact", "Kontakt", EnvelopeIcon),
      S.divider(),

      singleton(S, "siteSettings", "SEO & Website-Einstellungen", CogIcon),
    ]);
};
