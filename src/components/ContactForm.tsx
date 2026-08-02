"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      // honeypot field — bots fill this, humans don't see it
      company: (form.elements.namedItem("company") as HTMLInputElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Senden fehlgeschlagen.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Etwas ist schiefgelaufen."
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-ink/10 px-6 py-10 text-center dark:border-cloud/10"
      >
        <p className="font-display text-2xl italic">Vielen Dank.</p>
        <p className="mt-3 text-sm text-stone">
          Ihre Nachricht wurde übermittelt. Wir melden uns in Kürze bei
          Ihnen.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {/* Honeypot - hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Firma</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Field label="Name" name="name" type="text" required />
        <Field label="E-Mail" name="email" type="email" required />
      </div>

      <Field label="Betreff" name="subject" type="text" />

      <div>
        <label
          htmlFor="message"
          className="block text-[0.75rem] uppercase tracking-widest2 text-stone"
        >
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-3 w-full resize-none border-0 border-b border-ink/20 bg-transparent py-2 font-body text-base focus:border-patina focus:outline-none focus:ring-0 dark:border-cloud/20"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-widest2 disabled:opacity-50"
      >
        {status === "loading" ? "Wird gesendet…" : "Nachricht senden"}
        <span className="h-px w-8 bg-current transition-all duration-500 ease-gallery group-hover:w-14" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[0.75rem] uppercase tracking-widest2 text-stone"
      >
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-0 border-b border-ink/20 bg-transparent py-2 font-body text-base focus:border-patina focus:outline-none focus:ring-0 dark:border-cloud/20"
      />
    </div>
  );
}
