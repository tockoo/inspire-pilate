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
    email: "contact@inspirepilates.fr",
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

  // --- Horaires du studio ---
  hours: {
    label: "Lundi, mardi, jeudi et vendredi",
    note: "Sur réservation",
    schedule: [
      { day: "Lundi", slots: ["9h00 – 14h00"] },
      { day: "Mardi", slots: ["9h00 – 14h00", "17h00 – 20h30"] },
      { day: "Jeudi", slots: ["9h00 – 14h00", "17h30 – 20h00"] },
      { day: "Vendredi", slots: ["9h00 – 14h00"] },
    ],
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
// INDEXATION PAR LES MOTEURS DE RECHERCHE
// --------------------------------------------------------------------------
// Désactivée par défaut tant que le site n'est pas officiellement lancé
// (domaine final non figé + pages légales à compléter). La préprod reste
// ainsi en `noindex` et ne pollue pas l'index Google.
// 👉 Le jour du lancement : définir SITE_INDEXABLE=true en production
//    (et renseigner NEXT_PUBLIC_SITE_URL avec le domaine officiel).
// ==========================================================================
export const isIndexable = process.env.SITE_INDEXABLE === "true";

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
  // Phase 1 : le bouton « Réserver » pointe vers WhatsApp. Le jour du
  // déploiement de la réservation en ligne (Phase 2), basculer `type` sur
  // "internal" avec href "/reservation".
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
