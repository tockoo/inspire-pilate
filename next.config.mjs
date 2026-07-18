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
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "connect-src 'self'",
  // Carte Google Maps (embed). www.google.com peut rediriger vers maps.google.com.
  "frame-src https://www.google.com https://maps.google.com",
  "upgrade-insecure-requests",
].join("; ");

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
