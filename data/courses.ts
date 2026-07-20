// ==========================================================================
// Les Cours — Inspire Pilates (source unique de vérité)
// Le studio propose 2 disciplines : Pilates sur tapis & Springboard, et
// Pilates Reformer. (Les « niveaux » — Fondation/Progression, Niveau 1/2 —
// sont gérés dans le planning de réservation, pas sur cette page vitrine.)
// ==========================================================================

import type { Course } from "@/types";
import { images } from "@/data/images";

export const courses: Course[] = [
  {
    slug: "tapis-springboard",
    name: "Pilates sur tapis & Springboard",
    tagline: "Fondations & ressorts",
    shortDescription:
      "Un travail au sol complet, enrichi par les ressorts muraux du Springboard, pour renforcer, mobiliser et gagner en contrôle.",
    longDescription:
      "Le Pilates sur tapis est la base de la méthode : sans appareil, le travail repose sur le poids du corps et la précision du mouvement. On y développe la conscience du centre, la respiration et un gainage profond. Le Springboard, panneau mural équipé de ressorts, vient enrichir cette pratique — tantôt en assistance pour bien apprendre les mouvements, tantôt en résistance pour gagner en force. Une même séance conjugue ainsi travail au sol et accompagnement précis, allongée comme debout.",
    benefits: [
      "Renforcement du centre (core) en profondeur",
      "Meilleure posture et alignement",
      "Ressorts : assistance ou résistance modulables",
      "Mobilité, contrôle et respiration",
    ],
    highlights: [
      {
        title: "Le travail du centre",
        text: "Chaque exercice part du centre du corps pour stabiliser et protéger le dos.",
      },
      {
        title: "Le principe des ressorts",
        text: "Le Springboard aide la débutante et défie la pratiquante confirmée.",
      },
      {
        title: "Pour qui ?",
        text: "Accessible à toutes, des fondations jusqu'à la progression.",
      },
    ],
    level: "Fondation & Progression, adaptable",
    duration: "Séance d'environ 55 min", // durée configurable
    image: images.courseSpringboard.src,
    imageAlt: images.courseSpringboard.alt,
  },
  {
    slug: "reformer",
    name: "Pilates Reformer",
    tagline: "Le grand classique du Pilates",
    shortDescription:
      "L'appareil emblématique du Pilates : un chariot coulissant sur ressorts pour un travail global, précis et accompagné.",
    longDescription:
      "Le Reformer est l'appareil emblématique du Pilates : un chariot coulissant monté sur ressorts. Il permet un travail global du corps, en résistance comme en étirement, avec un accompagnement précis. Chaque séance conjugue force, mobilité et contrôle dans un mouvement fluide, adapté à votre niveau.",
    benefits: [
      "Travail global du corps",
      "Résistance ajustable via les ressorts",
      "Mobilité et amplitude",
      "Contrôle et accompagnement personnalisé",
    ],
    highlights: [
      {
        title: "Fonctionnement",
        text: "Le chariot glisse sur des rails ; les ressorts créent une résistance modulable.",
      },
      {
        title: "Travail global",
        text: "On sollicite l'ensemble de la chaîne musculaire dans des mouvements fluides.",
      },
      {
        title: "Accompagnement",
        text: "Les réglages s'adaptent à chacune pour une pratique sûre et progressive.",
      },
    ],
    level: "Niveaux 1, 2 et mixte",
    duration: "Séance d'environ 55 min", // durée configurable
    image: images.courseReformer.src,
    imageAlt: images.courseReformer.alt,
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
