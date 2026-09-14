/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

// ==========================================================================
// Content-Security-Policy
// --------------------------------------------------------------------------
// Adaptée à l'intégration Google Maps (iframe) et prête pour les futures
// intégrations de la Phase 2 (Stripe, Supabase).
//
// ⚠️ En Next.js 14 (App Router) sans middleware, les scripts/styles injectés
// par le framework imposent 'unsafe-inline'. Le durcissement par nonce est
// prévu en Phase 2, où le middleware Supabase rendra l'approche naturelle.
// 'unsafe-eval' n'est activé qu'en développement (React Fast Refresh).
// ==========================================================================
// En développement, l'admin TinaCMS est servi par Vite sur http://localhost:4001
// (module scripts + HMR websocket). On l'autorise UNIQUEMENT en dev — la CSP de
// production reste stricte ('self').
const tinaDev = isDev ? " http://localhost:4001" : "";

// Widget de réservation « Séances » (page /planning), hébergé sur le
// sous-domaine espace client. Autorisé en prod ET en dev.
const widget = "https://moncompte.inspirepilates.fr";

// Vercel Web Analytics — charge son script depuis va.vercel-scripts.com
// (requis par une CSP stricte, cf. doc Vercel).
const analytics = "https://va.vercel-scripts.com";

// Barre de commentaires Vercel (vercel.live) — injectée UNIQUEMENT sur les
// déploiements de preview. On l'autorise seulement là (la prod reste stricte).
const vercelLive =
  process.env.VERCEL_ENV === "preview" ? " https://vercel.live" : "";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  `img-src 'self' data: blob: ${widget}${isDev ? " http://localhost:4001 https:" : ""}`,
  `font-src 'self' data:${tinaDev}`,
  `style-src 'self' 'unsafe-inline' ${widget}`,
  `script-src 'self' 'unsafe-inline' ${widget} ${analytics}${vercelLive}${isDev ? " 'unsafe-eval'" : ""}${tinaDev}`,
  // En dev, l'admin Tina contacte ses services externes + HMR websocket
  // (ws://localhost:3000) → on autorise https/ws en dev seulement.
  `connect-src 'self' ${widget} ${analytics}${vercelLive}${isDev ? " http://localhost:4001 https: ws: wss:" : ""}`,
  // Carte Google Maps (embed) + widget de réservation (iframe éventuelle).
  `frame-src https://www.google.com https://maps.google.com ${widget}${vercelLive}`,
  // upgrade-insecure-requests uniquement en prod (inutile/gênant en http local).
  isDev ? null : "upgrade-insecure-requests",
]
  .filter(Boolean)
  .join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  reactStrictMode: true,
  // Toutes les images sont locales (/public/images). Aucune source distante :
  // le bloc images.remotePatterns (unsplash) a été retiré (audit — item 5).
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
