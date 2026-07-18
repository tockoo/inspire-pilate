// ==========================================================================
// Témoignages — Inspire Pilates
// --------------------------------------------------------------------------
// ⚠️ IMPORTANT : aucun faux avis ni fausse citation réaliste.
//    Les entrées ci-dessous sont des PLACEHOLDERS explicites, à remplacer par
//    de vrais avis (idéalement connectés aux avis Google en phase 2).
//
// `testimonialsConfig.source` documente l'origine prévue des avis.
// Le composant Testimonials affiche un état "placeholder" tant que
// `usePlaceholders` est true.
// ==========================================================================

import type { Testimonial } from "@/types";

export const testimonialsConfig = {
  usePlaceholders: false, // Vrais avis Google intégrés ci-dessous
  source: "google",
  googleReviewsUrl: "https://www.google.com/search?q=inspire+pilates+vertou",
};

// Emplacements réservés — ne contiennent PAS de faux témoignages.
export const testimonialPlaceholders: Testimonial[] = [
  {
    id: "ph1",
    quote: "Emplacement réservé pour un premier avis vérifié.",
    author: "Avis à venir",
    rating: 5,
  },
  {
    id: "ph2",
    quote: "Emplacement réservé pour un deuxième avis vérifié.",
    author: "Avis à venir",
    rating: 5,
  },
  {
    id: "ph3",
    quote: "Emplacement réservé pour un troisième avis vérifié.",
    author: "Avis à venir",
    rating: 5,
  },
];

// Avis Google réels — Inspire Pilates Vertou.
export const realTestimonials: Testimonial[] = [
  {
    id: "google-charlotte-beaudouin",
    quote:
      "Je recommande vivement les cours de Dolores. Sa maîtrise technique du Pilates Reformer est évidente ; elle est extrêmement attentive aux alignements et prend le temps de corriger individuellement chaque posture tout au long de la séance.",
    author: "Charlotte Beaudouin",
    rating: 5,
  },
  {
    id: "google-lea-nicolas",
    quote:
      "Dolorès nous accompagne avec sourire, douceur et pédagogie, tout en s'adaptant au niveau de chacun. Encourageante et attentive au positionnement, elle a su me faire progresser en quelques séances. Je vous recommande vivement ses services !",
    author: "Léa Nicolas",
    rating: 5,
  },
  {
    id: "google-claire-marcais",
    quote:
      "Dolores est la meilleure professeure de pilates !! Solaire et toujours à l'écoute. Hâte de pouvoir venir m'entraîner dans son magnifique studio à l'automne prochain !",
    author: "Claire Marçais",
    rating: 5,
  },
];

export function getTestimonials(): Testimonial[] {
  if (!testimonialsConfig.usePlaceholders && realTestimonials.length > 0) {
    return realTestimonials;
  }
  return testimonialPlaceholders;
}
