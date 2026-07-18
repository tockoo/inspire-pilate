import type { MetadataRoute } from "next";
import { siteConfig, mainNav, legalNav } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  // Pages publiques indexables (exclut les routes Phase 2, non indexées).
  const publicPaths = [...mainNav.map((n) => n.href), ...legalNav.map((n) => n.href)];

  return publicPaths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
