import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/config/site";

// Route serveur pour le formulaire de contact.
// La clé Resend reste STRICTEMENT côté serveur (jamais exposée au navigateur).

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Champs invalides.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Anti-spam : si le honeypot est rempli, on ignore silencieusement.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  // En développement sans clé configurée : on loggue et on renvoie OK
  // afin que le formulaire reste testable sans secret.
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY absente — message non envoyé (mode démo) :",
      { ...data, message: data.message.slice(0, 80) + "…" }
    );
    return NextResponse.json({ ok: true, demo: true });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `${siteConfig.name} <${fromEmail}>`,
      to: [toEmail],
      reply_to: data.email,
      subject: `[Contact site] ${data.subject}`,
      text: [
        `Nom : ${data.firstName} ${data.lastName}`,
        `E-mail : ${data.email}`,
        `Téléphone : ${data.phone || "—"}`,
        "",
        data.message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Échec de l'envoi Resend :", err);
    return NextResponse.json(
      { error: "L'envoi a échoué. Merci de réessayer plus tard." },
      { status: 502 }
    );
  }
}
