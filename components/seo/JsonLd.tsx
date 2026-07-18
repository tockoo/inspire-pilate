import { siteConfig } from "@/config/site";

/**
 * Données structurées Schema.org — SportsActivityLocation / LocalBusiness.
 * Aide le référencement local (Pilates Vertou, etc.).
 */
export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneRaw,
    image: `${siteConfig.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      postalCode: siteConfig.contact.address.postalCode,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    sameAs: [siteConfig.social.instagram],
    areaServed: ["Vertou", "Nantes Sud"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
