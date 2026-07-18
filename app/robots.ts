import type { MetadataRoute } from "next";
import { siteConfig, isIndexable } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url.replace(/\/$/, "");

  // Tant que le site n'est pas lancé (SITE_INDEXABLE != "true"), on bloque
  // tout le crawl. ⚠️ robots.txt n'est PAS une protection d'accès : il empêche
  // seulement l'indexation par les robots respectueux (le noindex meta et,
  // en Phase 2, l'auth serveur restent les vraies barrières).
  if (!isIndexable) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Routes Phase 2 non indexées (écrans "bientôt disponible").
      disallow: ["/reservation", "/connexion", "/inscription", "/mon-compte", "/admin", "/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
