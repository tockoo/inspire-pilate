import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Routes Phase 2 non indexées.
      disallow: ["/reservation", "/connexion", "/inscription", "/mon-compte", "/admin", "/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
