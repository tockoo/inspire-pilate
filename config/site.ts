// ==========================================================================
// Configuration centralisée du site — Inspire Pilates
// Modifiez ici toutes les informations globales (contact, réservation, SEO).
// Ces valeurs ne doivent JAMAIS être codées en dur dans les composants.
// ==========================================================================

import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Inspire Pilates",
  shortName: "Inspire",
  tagline: "Studio de Pilates à Vertou",
  description:
    "Un espace intimiste pour renforcer le corps, améliorer la mobilité et retrouver son équilibre. Cours de Pilates sur tapis, Springboard et Reformer à Vertou, au sud de Nantes.",

  // URL publique (utilisée pour le SEO, le sitemap et l'Open Graph)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.inspirepilates.fr",

  // --- Coordonnées ---
  contact: {
    phone: "06 75 01 14 14",
    // Format international pour les liens tel: et WhatsApp
    phoneRaw: "+33675011414",
    email: "contact@inspirepilates.fr", // À CONFIRMER par le studio
    address: {
      street: "Chemin Victor Forquenot",
      postalCode: "44120",
      city: "Vertou",
      country: "France",
    },
  },

  // --- Réseaux sociaux ---
  social: {
    instagram: "https://www.instagram.com/inspirepilates_vertou/",
    instagramHandle: "@inspirepilates_vertou",
  },

  // --- Horaires (configurable — à confirmer par le studio) ---
  hours: {
    label: "Du lundi au samedi",
    note: "Sur réservation",
  },

  // --- Géolocalisation pour Google Maps / données structurées ---
  geo: {
    // Coordonnées approximatives de Vertou — à affiner avec l'adresse exacte
    latitude: 47.1697,
    longitude: -1.4694,
    // Lien "Itinéraire" et embed carte basés sur l'adresse
    mapsQuery: "Chemin Victor Forquenot, 44120 Vertou",
  },
} as const;

// ==========================================================================
// DESTINATION DE RÉSERVATION — POINT UNIQUE DE CONFIGURATION (PHASE 1)
// --------------------------------------------------------------------------
// En phase 1, le bouton "Réserver un cours" pointe vers une destination
// externe temporaire. En phase 2, il suffira de basculer `type` sur
// "internal" (route /reservation) sans toucher aux composants.
// ==========================================================================

type ReservationTarget =
  | { type: "internal"; href: string } // Phase 2 : route interne /reservation
  | { type: "url"; href: string } // Lien de réservation externe
  | { type: "whatsapp"; href: string }
  | { type: "instagram"; href: string }
  | { type: "contact"; href: string }; // Formulaire de contact interne

export const reservation: ReservationTarget = {
  // 🔧 Phase 1 : par défaut, redirige vers le formulaire de contact interne.
  // Remplacez par WhatsApp / Instagram / URL externe selon les besoins.
  type: "whatsapp",
  href: `https://wa.me/${siteConfig.contact.phoneRaw.replace("+", "")}?text=${encodeURIComponent(
    "Bonjour Inspire Pilates, je souhaite réserver un cours."
  )}`,
};

export const reservationCta = {
  label: "Réserver un cours",
  target: reservation,
} as const;

// Lien "Itinéraire" (Google Maps directions)
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  siteConfig.geo.mapsQuery
)}`;

// Embed Google Maps (carte). Remplaçable par une clé Maps Embed API si besoin.
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.geo.mapsQuery
)}&output=embed`;

// --- Navigation principale (Phase 1) ---
export const mainNav: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Le Studio", href: "/le-studio" },
  { label: "Les Cours", href: "/les-cours" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Retraite", href: "/retraite" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// --- Navigation du footer ---
export const footerNav: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Le Studio", href: "/le-studio" },
  { label: "Les Cours", href: "/les-cours" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Retraite", href: "/retraite" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "CGV", href: "/cgv" },
];

// --- Routes réservées à la Phase 2 (non affichées dans la navigation) ---
export const phase2Routes = {
  reservation: "/reservation",
  connexion: "/connexion",
  inscription: "/inscription",
  monCompte: "/mon-compte",
  admin: "/admin",
} as const;
