// ==========================================================================
// Tarifs — Inspire Pilates (source unique de vérité)
// Modifiez uniquement ce fichier pour mettre à jour les formules partout.
// ==========================================================================

import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "decouverte",
    name: "Formule découverte",
    sessions: 3,
    price: 60,
    validity: "Validité 1 mois",
  },
  {
    id: "carte-5",
    name: "Carte 5 cours",
    sessions: 5,
    price: 150,
    validity: "Validité 2 mois",
  },
  {
    id: "carte-10",
    name: "Carte 10 cours",
    sessions: 10,
    price: 280,
    validity: "Validité 4 mois",
  },
  {
    id: "carte-20",
    name: "Carte 20 cours",
    sessions: 20,
    price: 500,
    validity: "Validité 8 mois",
  },
  {
    id: "carte-30",
    name: "Carte 30 cours",
    sessions: 30,
    price: 690,
    validity: "Validité 12 mois",
  },
];

/** Prix moyen par cours, arrondi à l'euro le plus proche. */
export function pricePerSession(plan: PricingPlan): number {
  return Math.round(plan.price / plan.sessions);
}

// --- Informations sur le fonctionnement des cartes ---
// ⚠️ Contenu provisoire à valider par le studio (notamment l'annulation).
export const pricingInfo = {
  howItWorks: [
    "Chaque carte donne accès aux cours sur tapis, Springboard et Reformer.",
    "Les crédits sont décomptés à chaque cours réservé et honoré.",
    "La réservation d'un cours est obligatoire pour garantir votre place.",
  ],
  validityNote:
    "La durée de validité court à partir du premier cours réservé. Passé ce délai, les crédits non utilisés expirent.",
  cancellation: {
    provisional: true,
    text: "Toute annulation doit être signalée au moins 24 h avant le cours pour être recréditée. Passé ce délai, le cours est décompté. (Conditions provisoires — à valider par le studio.)",
  },
};
