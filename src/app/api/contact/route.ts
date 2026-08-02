import { NextResponse } from "next/server";

// Einfache In-Memory-Rate-Begrenzung (pro Serverless-Instanz).
// Für produktiven Schutz gegen Spam empfiehlt sich zusätzlich ein Dienst
// wie Vercel's eigenes Rate Limiting oder ein E-Mail-Provider mit Captcha.
const submissions = new Map<string, number>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isRateLimited(ip: string) {
  const now = Date.now();
  const last = submissions.get(ip) ?? 0;
  if (now - last < WINDOW_MS / MAX_PER_WINDOW) return true;
  submissions.set(ip, now);
  return false;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, company } = body;

    // Honeypot: Bots füllen dieses versteckte Feld aus.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
        { status: 429 }
      );
    }

    // TODO: Hier einen E-Mail-Versand-Provider anbinden, z. B. Resend:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Website <kontakt@alexanderhild.com>",
    //   to: "alexander@alexanderhild.com",
    //   replyTo: email,
    //   subject: `Neue Anfrage: ${subject || "Ohne Betreff"}`,
    //   text: `Von: ${name} <${email}>\n\n${message}`,
    // });
    //
    // Denken Sie daran, RESEND_API_KEY als Environment Variable in
    // Vercel unter Project Settings → Environment Variables zu hinterlegen.

    console.log("Neue Kontaktanfrage:", { name, email, subject, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Serverfehler. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
