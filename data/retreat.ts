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

  title: "Week-end Pilates, Yoga & Surf",
  subtitle: "Pilates, Yoga & Surf",
  location: "Saint-Jean-de-Monts, Vendée",
  dates: "Du 11 au 13 septembre 2026",
  duration: "3 jours – 2 nuits",
  price: "À partir de 490 €/personne",
  status: "inscriptions-ouvertes",

  intro:
    "Venez vous déposer à nos côtés pour une parenthèse de bien-être entre océan, nature et mouvement.",
  philosophy:
    "Pendant 3 jours et 2 nuits, laissez-vous porter par un programme alliant Pilates, yoga, surf, spirothérapie, relaxation et moments de partage, dans un cadre ressourçant à Saint-Jean-de-Monts.",

  // Animatrices du week-end (photos à fournir → placeholder en attendant).
  hosts: [
    {
      name: "Sophie Lenoir",
      role: "Yoga",
      image: "/images/sophie-lenoir.jpg",
      imageAlt: "Sophie Lenoir, professeure de yoga",
      bio: "Sophie guide les séances de yoga postural et respiratoire du week-end, pour délier le corps et apaiser le mental.",
      
    },
    {
      name: "Dolorès Cabardis",
      role: "Pilates · Inspire Pilates",
      image: "/images/dolores-cabardis.jpg",
      imageAlt: "Dolorès Cabardis, professeure de Pilates",
      bio: "Dolorès guide les séances de Pilates avec écoute et bienveillance, pour vous aider à vous reconnecter à votre corps, gagner en force et retrouver un équilibre durable.",
      
    },
  ],

  // Activités incluses dans le week-end.
  program: [
    "1 cours de yoga postural",
    "1 cours de yoga respiratoire",
    "1 cours de Pilates",
    "1 cours de spirothérapie",
    "1h30 de surf encadré par Mojo Surf",
    "Drainage lymphatique du visage",
    "Location de vélos",
    "Tirages d'oracles et cercle d'intention",
    "1 formule brunch à volonté au restaurant Bec à Vin",
  ],

  practicalInfo: [
    "L'arrivée à la maison est prévue vers 17h00 le vendredi 11 septembre, et le départ vers 14h00 le dimanche 13 septembre.",
    "Nombre minimum de participants pour que la retraite soit maintenue : 6.",
  ],

  accommodation: {
    name: "Villa Alizée",
    text: [
      "Villa Alizée de 175 m² de plain-pied, à 600 m de la mer au cœur de la pinède montoise : 4 chambres, 1 salle de bain, 1 salle d'eau et 2 WC.",
      "Déposez vos valises dans cette maison bord de mer propice à la déconnexion.",
    ],
    instagram: "https://www.instagram.com/villa_alizee_/",
    gallery: [...images.retreatVilla],
  },

  rooms: [
    {
      name: "Chambre luxe",
      description: "Lit double (160 cm) et salle de bain privative.",
      prices: [
        { label: "Solo", price: "750 €/pers." },
        { label: "Duo", price: "590 €/pers." },
      ],
    },
    {
      name: "Chambre premium",
      description: "Lit double (140 cm) et salle de bain partagée.",
      prices: [
        { label: "Solo", price: "690 €/pers." },
        { label: "Duo", price: "550 €/pers." },
      ],
    },
    {
      name: "Chambre confort",
      description: "2 lits simples et une salle de bain partagée.",
      prices: [{ label: "Lit simple", price: "490 €/pers." }],
    },
  ],
  roomsNote:
    "Les chambres luxe et premium peuvent être réservées pour une seule personne, ou pour deux si vous venez accompagné·e.",

  included: [
    "L'hébergement à la Villa Alizée",
    "Toutes les pratiques du week-end",
    "Tous les repas",
  ],

  notIncluded: ["Le transport jusqu'à Saint-Jean-de-Monts"],

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
        "Sophie Lenoir pour le yoga et Dolorès Cabardis pour le Pilates (Inspire Pilates), accompagnées de l'équipe Mojo Surf pour la session de surf.",
    },
    {
      id: "r-hebergement",
      question: "Où loge-t-on ?",
      answer:
        "À la Villa Alizée, une maison de 175 m² de plain-pied à 600 m de la plage, au cœur de la pinède montoise, propice à la déconnexion.",
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
