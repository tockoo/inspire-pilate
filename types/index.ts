// ==========================================================================
// Types partagés — Inspire Pilates
// ==========================================================================

export type NavLink = {
  label: string;
  href: string;
};

export type CourseSlug = "tapis-springboard" | "reformer";

/** Un niveau précis d'une discipline (ex: « Reformer Niveau 1 »). */
export type CourseLevel = {
  name: string;
  tagline: string;
  description: string;
  capacity: number;
  /** true = mention « Accessible à tous ». */
  accessible?: boolean;
  /** Mention d'ouverture différée (ex: « Ouverture janvier 2027 »). */
  comingSoon?: string;
  /** Photo du niveau. Absente tant que le studio n'a pas fourni le visuel
   *  (affiche alors une tuile « Photo à venir »). */
  image?: string;
  imageAlt?: string;
};

export type Course = {
  slug: CourseSlug;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  /** Détails structurés affichés sur la page Les Cours */
  highlights: { title: string; text: string }[];
  level: string;
  duration: string;
  image: string;
  imageAlt: string;
  /** Déclinaisons par niveau (affichées en détail sur la page Les Cours). */
  levels: CourseLevel[];
};

export type PricingPlan = {
  id: string;
  name: string;
  sessions: number;
  price: number;
  validity: string;
  /** Prix moyen par cours, calculé automatiquement si non fourni */
  featured?: boolean;
  description?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  /** Attribution volontairement générique tant que les vrais avis ne sont pas fournis */
  author: string;
  rating: number;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  /** true tant que la réponse n'est pas validée définitivement par le studio */
  provisional?: boolean;
};

export type RetreatStatus =
  | "inscriptions-ouvertes"
  | "bientot-disponible"
  | "complet"
  | "liste-attente";

/** Animateur·rice de la retraite (photo optionnelle → placeholder). */
export type RetreatHost = {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  imageAlt?: string;
  instagram?: string;
};

/** Type de chambre avec ses tarifs (solo / duo). */
export type RetreatRoom = {
  name: string;
  description: string;
  prices: { label: string; price: string }[];
};

export type Retreat = {
  title: string;
  /** Sous-titre / accroche (ex: "Pilates, Yoga & Surf"). */
  subtitle?: string;
  location: string;
  /** Mention libre configurable (ex: "Du 11 au 13 septembre 2026"). */
  dates: string;
  /** Durée (ex: "3 jours – 2 nuits"). Optionnel. */
  duration?: string;
  /** Tarif d'appel affiché (ex: "À partir de 490 €/personne"). Optionnel. */
  price?: string;
  status: RetreatStatus;
  intro: string;
  philosophy: string;
  /** Animatrices de la retraite. */
  hosts: RetreatHost[];
  /** Liste des activités / pratiques du séjour. */
  program: string[];
  /** Informations pratiques (arrivée, départ, minimum de participants…). */
  practicalInfo: string[];
  /** Hébergement : description + galerie photos dédiée. */
  accommodation: {
    name: string;
    text: string[];
    instagram?: string;
    gallery: GalleryImage[];
  };
  /** Types de chambres et leurs tarifs. */
  rooms: RetreatRoom[];
  /** Note complémentaire sur les chambres (astérisque). */
  roomsNote?: string;
  included: string[];
  notIncluded: string[];
  audience: string[];
  image: string;
  imageAlt: string;
  gallery: GalleryImage[];
  faq: FaqItem[];
  /** true = contenu placeholder à valider */
  provisional: boolean;
};

export type GalleryImage = {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
  /** true = emplacement réservé (aucune photo encore) : affiché en tuile
   *  « Photo à venir » pour laisser la cliente se projeter sur la mise en page. */
  placeholder?: boolean;
};
