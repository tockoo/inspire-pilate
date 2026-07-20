// ==========================================================================
// Retraite — Inspire Pilates
// Week-end Yoga, Surf & Pilates (11–13 septembre 2026, Saint-Jean-de-Monts).
// Contenu issu du studio (partenaires : YODEGA, Mojo Surf, Villa Alizée,
// Le Bec à Vin). Le déroulé vendredi/samedi/dimanche est indicatif.
// ==========================================================================

import type { Retreat } from "@/types";
import { images } from "@/data/images";

export const retreat: Retreat = {
  provisional: false,

  title: "Week-end Yoga, Surf & Pilates",
  location: "Saint-Jean-de-Monts, Vendée",
  dates: "Du 11 au 13 septembre 2026",
  price: "À partir de 550 €/personne",
  status: "inscriptions-ouvertes",

  intro:
    "Trois jours pour se déposer, entre yoga, Pilates, surf et nature — à deux pas de l'océan, au cœur de la pinède vendéenne.",
  philosophy:
    "Loin du quotidien, ce week-end invite à ralentir et à se reconnecter à soi. Yoga au réveil, Pilates les pieds dans le sable, surf, balades à vélo et brunchs préparés avec soin : une parenthèse pensée pour vous ressourcer, en petit comité et en pleine nature.",

  // Déroulé indicatif du week-end (à ajuster selon l'organisation finale).
  program: [
    {
      day: "Vendredi",
      text: "Arrivée à la Villa Alizée, installation et première séance douce pour se poser.",
    },
    {
      day: "Samedi",
      text: "Yoga postural et respiratoire au réveil, Pilates sur la plage, 1h30 de surf encadré et balade à vélo entre terre et mer — ponctués de brunchs et de recettes healthy.",
    },
    {
      day: "Dimanche",
      text: "Séance matinale face à l'océan, dernier moment de partage et départ en douceur.",
    },
  ],

  included: [
    "Hébergement à la Villa Alizée, à 600 m de la plage, au cœur de la pinède",
    "Yoga postural et respiratoire avec Sophie (YODEGA)",
    "Pilates sur la plage avec Dolorès (Inspire Pilates)",
    "1h30 de surf encadré par Mojo Surf",
    "Balades à vélo entre terre et mer",
    "Brunch au Bec à Vin et recettes healthy tout le week-end",
  ],

  audience: [
    "Celles qui souhaitent une vraie parenthèse ressourçante, entre mer et pinède",
    "Débutantes comme pratiquantes régulières : yoga, Pilates et surf accessibles à tous les niveaux",
    "Envie de mouvement, de nature et de convivialité",
  ],

  image: images.retreatHero.src,
  imageAlt: images.retreatHero.alt,

  gallery: [...images.retreatGallery],

  faq: [
    {
      id: "r-niveau",
      question: "Faut-il déjà pratiquer le yoga, le Pilates ou le surf ?",
      answer:
        "Non. Les séances sont adaptées à tous les niveaux, et le surf est encadré par des professionnels de Mojo Surf : débutantes bienvenues.",
    },
    {
      id: "r-encadrement",
      question: "Qui encadre le week-end ?",
      answer:
        "Dolorès pour le Pilates (Inspire Pilates) et Sophie pour le yoga (YODEGA), accompagnées de l'équipe Mojo Surf pour la session de surf.",
    },
    {
      id: "r-hebergement",
      question: "Où loge-t-on ?",
      answer:
        "À la Villa Alizée, une maison bord de mer à 600 m de la plage, au cœur de la pinède, propice à la déconnexion.",
    },
    {
      id: "r-prevoir",
      question: "Que faut-il prévoir ?",
      answer:
        "Une tenue confortable pour bouger, un maillot de bain et de quoi profiter du temps libre. La liste détaillée vous sera transmise à l'inscription.",
      provisional: true,
    },
    {
      id: "r-inscription",
      question: "Comment s'inscrire ?",
      answer:
        "Écrivez-nous à contact@inspirepilates.fr : nous vous transmettons toutes les informations et les modalités de réservation.",
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
