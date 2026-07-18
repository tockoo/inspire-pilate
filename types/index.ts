// ==========================================================================
// Types partagés — Inspire Pilates
// ==========================================================================

export type NavLink = {
  label: string;
  href: string;
};

export type CourseSlug = "tapis" | "springboard" | "reformer";

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

export type Retreat = {
  title: string;
  location: string;
  /** Mention libre configurable (ex: "26 – 30 juin 2025") — placeholder tant que non confirmé */
  dates: string;
  status: RetreatStatus;
  intro: string;
  philosophy: string;
  program: { day: string; text: string }[];
  included: string[];
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
