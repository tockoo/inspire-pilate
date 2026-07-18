// ==========================================================================
// Retraite — Inspire Pilates
// ⚠️ Contenu en grande partie PLACEHOLDER : dates, lieu et programme exacts
//    doivent être fournis par le studio. Modifiez uniquement ce fichier.
// ==========================================================================

import type { Retreat } from "@/types";
import { images } from "@/data/images";

export const retreat: Retreat = {
  provisional: true, // Passer à false une fois les informations validées

  title: "Retraite bien-être à l'île de Ré (c'est un exemple)",
  location: "Île de Ré - lieu exact à confirmer", // À CONFIRMER
  dates: "Septembre 2026 (dates à confirmer)", // À CONFIRMER
  status: "bientot-disponible", // "inscriptions-ouvertes" | "bientot-disponible" | "complet" | "liste-attente"

  intro:
    "Un séjour ressourçant entre Pilates, nature et moments de détente pour vous recentrer et retrouver votre énergie.",
  philosophy:
    "Loin du quotidien, cette retraite invite à ralentir. Le mouvement y devient une manière de se reconnecter à soi, dans un cadre naturel et apaisant. Chaque journée mêle pratique douce, respiration, temps libre et convivialité.",

  // Programme configurable — structure d'exemple à ajuster
  program: [
    { day: "Jour 1", text: "Arrivée, installation et première séance douce en fin de journée." },
    { day: "Jour 2", text: "Pilates au réveil, temps libre, atelier respiration et mobilité." },
    { day: "Jour 3", text: "Séance matinale, balade nature et pratique en extérieur." },
    { day: "Jour 4", text: "Reformer / tapis, moment de détente et soirée conviviale." },
    { day: "Jour 5", text: "Séance de clôture, échanges et départ en douceur." },
  ],

  included: [
    "Hébergement pour la durée du séjour",
    "Séances de Pilates quotidiennes",
    "Ateliers respiration et mobilité",
    "Temps libre et moments de détente",
    // ⚠️ Détails (repas, transport, etc.) à confirmer par le studio
  ],

  audience: [
    "Toutes celles qui souhaitent s'accorder une parenthèse bien-être",
    "Débutantes comme pratiquantes régulières",
    "Envie de mouvement, de nature et de calme",
  ],

  image: images.retreatHero.src,
  imageAlt: images.retreatHero.alt,

  gallery: [...images.retreatGallery],

  faq: [
    {
      id: "r1",
      question: "Faut-il déjà pratiquer le Pilates ?",
      answer:
        "Non. La retraite est ouverte à tous les niveaux, les séances sont adaptées à chacune.",
      provisional: true,
    },
    {
      id: "r2",
      question: "Comment s'inscrire ?",
      answer:
        "Les modalités d'inscription seront communiquées prochainement. Contactez le studio pour être informée en priorité.",
      provisional: true,
    },
    {
      id: "r3",
      question: "Que faut-il prévoir ?",
      answer:
        "Une tenue confortable et de quoi profiter du temps libre. La liste détaillée sera transmise avant le séjour.",
      provisional: true,
    },
  ],
};

// Libellés d'affichage des statuts
export const retreatStatusLabels: Record<Retreat["status"], string> = {
  "inscriptions-ouvertes": "Inscriptions ouvertes",
  "bientot-disponible": "Bientôt disponible",
  complet: "Complet",
  "liste-attente": "Liste d'attente",
};
