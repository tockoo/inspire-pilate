import type { MetadataRoute } from "next";
import { siteConfig, mainNav } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  // Pages publiques indexables. On EXCLUT :
  //  - les routes Phase 2 (non indexées) ;
  //  - les pages légales (mentions, confidentialité, CGV) qui sont en `noindex`
  //    → les lister ici serait contradictoire.
  const publicPaths = mainNav.map((n) => n.href);

  // Pas de `lastModified` : sans vraie date de modification par page, un
  // `new Date()` renverrait une fraîcheur factice à chaque build. On l'omet
  // (Google s'appuie alors sur ses propres signaux). À réactiver avec de
  // vraies dates si un suivi de mise à jour est mis en place.
  return publicPaths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
