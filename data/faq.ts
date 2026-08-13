// ==========================================================================
// FAQ — Inspire Pilates (source unique de vérité)
// ⚠️ Les réponses marquées `provisional: true` restent à valider par le studio.
// ==========================================================================

import type { FaqItem } from "@/types";

export const faqItems: FaqItem[] = [
  {
    id: "pratique",
    question: "Faut-il avoir déjà pratiqué le Pilates ?",
    answer:
      "Non, aucun prérequis n'est nécessaire. Les cours sont adaptés à tous les niveaux. Venez comme vous êtes !",
  },
  {
    id: "tenue",
    question: "Quelle tenue prévoir ?",
    answer:
      "Une tenue souple et confortable dans laquelle vous vous sentez à l'aise pour bouger. Chez Inspire Pilates, nous privilégions une pratique du Pilates pieds nus.",
  },
  {
    id: "choix-cours",
    question: "Comment choisir son cours ?",
    answer:
      "Le Tapis Springboard et le Reformer offrent chacun un accompagnement précieux pour développer les principes de contrôle, de précision et de fluidité. La résistance des ressorts accompagne le corps et enrichit la pratique.\n\nComplémentaires, ils invitent chacun·e à explorer le mouvement autrement. L’idéal ? Les découvrir tous !",
  },
  {
    id: "carte-fonctionnement",
    question: "Comment fonctionne ma carte de cours ?",
    answer:
      "Une carte correspond à un nombre de cours prépayés, utilisables sur Tapis Springboard ou Reformer.\n\nUne fois votre carte achetée, vous accédez au planning en ligne et pouvez réserver librement les créneaux de votre choix. Un crédit est décompté à chaque réservation.",
  },
  {
    id: "validite",
    question: "Combien de temps une carte est-elle valable ?",
    answer:
      "La validité dépend de la formule (de 1 à 12 mois). Les durées précises sont indiquées sur la page Tarifs.",
    provisional: true,
  },
  {
    id: "reserver",
    question: "Comment réserver un cours ?",
    answer:
      "La plateforme de réservation en ligne sera disponible dans les prochains jours.\n\nVous pourrez ainsi accéder à votre compte client, consulter le planning et réserver librement les créneaux de votre choix chaque semaine.",
  },
  {
    id: "annulation",
    question: "Que se passe-t-il en cas d'annulation ?",
    answer:
      "Toute annulation effectuée plus de 24 heures avant le début du cours permet de récupérer automatiquement le crédit sur votre carte.\n\nEn revanche, pour toute annulation effectuée moins de 24 heures à l’avance, le crédit est définitivement décompté et ne pourra pas être recrédité.",
  },
  {
    id: "lieu",
    question: "Où se trouve le studio ?",
    answer:
      "Le studio est situé Chemin Victor Forquenot, 44120 Vertou, à deux pas de la gare de Vertou, facilement accessible depuis la route de Clisson.\n\nLe chemin Victor Forquenot étant piétonnier, vous pouvez stationner gratuitement sur le parking de la gare, à seulement 2 minutes à pied du studio.\n\nLes vélos peuvent également être stationnés à l’entrée du studio.\n\nUn lien d’itinéraire est disponible sur notre page Contact.",
  },
  {
    id: "materiel",
    question: "Faut-il apporter du matériel ?",
    answer:
      "Non, tout le matériel nécessaire à votre pratique est mis à votre disposition au studio.\n\nDes espaces sont également prévus pour vous changer avant ou après le cours. Pensez simplement à apporter une tenue confortable et, si vous le souhaitez, une gourde.",
  },
];
