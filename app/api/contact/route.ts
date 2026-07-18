import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/config/site";

// Route serveur pour le formulaire de contact.
// La clé Resend reste STRICTEMENT côté serveur (jamais exposée au navigateur).

const isDev = process.env.NODE_ENV !== "production";

// --- Contrôle d'origine (anti-CSRF) --------------------------------------
// On vérifie que la requête provient bien de notre propre site (même hôte),
// quelle que soit l'URL de déploiement (préprod vercel.app ou domaine final).
function isSameOrigin(request: Request): boolean {
  const host = request.headers.get("host");
  if (!host) return false;

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      return new URL(origin).host === host;
    } catch {
      return false;
    }
  }

  // Certaines requêtes same-origin n'envoient pas d'Origin : on tente le Referer.
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      return new URL(referer).host === host;
    } catch {
      return false;
    }
  }

  // Ni Origin ni Referer (typique d'un client non-navigateur) : refus.
  return false;
}

// --- Rate limiting en mémoire (best-effort) ------------------------------
// Fenêtre fixe par IP. ⚠️ En environnement serverless (Vercel), la mémoire est
// par instance et se réinitialise au cold start : c'est une atténuation, pas
// une garantie. Phase 2 : passer à un store durable (ex. Upstash Redis).
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 };
const hits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function rateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();

  // Purge opportuniste des entrées expirées pour borner la mémoire.
  if (hits.size > 5000) {
    for (const [key, value] of hits) {
      if (now > value.resetAt) hits.delete(key);
    }
  }

  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT.windowMs });
    return { ok: true };
  }
  if (entry.count >= RATE_LIMIT.max) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count += 1;
  return { ok: true };
}

export async function POST(request: Request) {
  // 1) Contrôle d'origine (anti-CSRF).
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Origine non autorisée." }, { status: 403 });
  }

  // 2) Garde de taille (défense en profondeur avant de lire le corps).
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 100_000) {
    return NextResponse.json({ error: "Requête trop volumineuse." }, { status: 413 });
  }

  // 3) Rate limiting par IP.
  const rl = rateLimit(getClientIp(request));
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Trop de tentatives. Merci de réessayer plus tard." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter ?? 600) } }
    );
  }

  // 4) Lecture + validation du corps.
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

  // 5) Anti-spam : si le honeypot est rempli, on ignore silencieusement
  //    (on renvoie OK pour ne pas informer le bot).
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  // 6) Clé Resend absente.
  if (!apiKey) {
    if (isDev) {
      // En développement uniquement : mode démo (message loggué, pas d'envoi)
      // pour tester l'UX sans secret.
      console.warn(
        "[contact] RESEND_API_KEY absente — message non envoyé (mode démo dev) :",
        { ...data, message: data.message.slice(0, 80) + "…" }
      );
      return NextResponse.json({ ok: true, demo: true });
    }
    // En production : NE JAMAIS renvoyer un faux succès. On signale l'erreur.
    console.error(
      "[contact] RESEND_API_KEY absente en PRODUCTION — message NON envoyé. Configurer la variable d'environnement."
    );
    return NextResponse.json(
      {
        error:
          "Le service de messagerie est momentanément indisponible. Merci de nous contacter par téléphone.",
      },
      { status: 503 }
    );
  }

  // 7) Envoi via Resend.
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
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

    if (error) {
      console.error("[contact] Resend a retourné une erreur :", error);
      return NextResponse.json(
        { error: "L'envoi a échoué. Merci de réessayer plus tard." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Échec de l'envoi Resend :", err);
    return NextResponse.json(
      { error: "L'envoi a échoué. Merci de réessayer plus tard." },
      { status: 502 }
    );
  }
}
