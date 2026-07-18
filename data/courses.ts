// ==========================================================================
// Les Cours — Inspire Pilates (source unique de vérité)
// ==========================================================================

import type { Course } from "@/types";
import { images } from "@/data/images";

export const courses: Course[] = [
  {
    slug: "tapis",
    name: "Pilates sur tapis",
    tagline: "Le mouvement à l'état pur",
    shortDescription:
      "Un travail complet au sol pour renforcer, étirer et améliorer votre posture.",
    longDescription:
      "Le Pilates sur tapis (matwork) est la base de la méthode. Sans appareil, le travail repose sur le poids du corps et la précision du mouvement. On y développe la conscience du centre, la respiration et un gainage profond qui soutient toute la pratique.",
    benefits: [
      "Renforcement du centre (core) en profondeur",
      "Meilleure posture et alignement",
      "Mobilité et fluidité du mouvement",
      "Contrôle et respiration",
    ],
    highlights: [
      {
        title: "Le travail du centre",
        text: "Chaque exercice part du centre du corps pour stabiliser et protéger le dos.",
      },
      {
        title: "Posture & contrôle",
        text: "Des mouvements lents et précis qui rééduquent la posture au quotidien.",
      },
      {
        title: "Pour qui ?",
        text: "Accessible à toutes et tous, y compris pour une première approche du Pilates.",
      },
    ],
    level: "Adaptable selon le niveau",
    duration: "Séance d'environ 55 min", // durée configurable
    image: images.courseTapis.src,
    imageAlt: images.courseTapis.alt,
  },
  {
    slug: "springboard",
    name: "Springboard",
    tagline: "Ressorts, assistance et résistance",
    shortDescription:
      "Résistance et assistance pour développer force, contrôle et fluidité.",
    longDescription:
      "Le Springboard est un panneau mural équipé de ressorts. Ils offrent tantôt de l'assistance, tantôt de la résistance, pour accompagner ou intensifier le mouvement. C'est un excellent outil pour affiner le contrôle et travailler avec précision, debout comme au sol.",
    benefits: [
      "Renforcement progressif grâce aux ressorts",
      "Assistance pour bien apprendre les mouvements",
      "Résistance pour développer la force",
      "Travail de précision et de coordination",
    ],
    highlights: [
      {
        title: "Le principe des ressorts",
        text: "Les ressorts modulent l'effort : ils aident le débutant et défient le pratiquant confirmé.",
      },
      {
        title: "Assistance & résistance",
        text: "Un même exercice peut être facilité ou intensifié selon l'accroche choisie.",
      },
      {
        title: "Précision",
        text: "Le retour des ressorts affine la conscience du mouvement et l'alignement.",
      },
    ],
    level: "Adaptable selon le niveau",
    duration: "Séance d'environ 55 min", // durée configurable
    image: images.courseSpringboard.src,
    imageAlt: images.courseSpringboard.alt,
  },
  {
    slug: "reformer",
    name: "Reformer",
    tagline: "Le grand classique du Pilates",
    shortDescription:
      "Un entraînement précis et efficace pour sculpter, tonifier et rééquilibrer.",
    longDescription:
      "Le Reformer est l'appareil emblématique du Pilates : un chariot coulissant monté sur ressorts. Il permet un travail global du corps, en résistance comme en étirement, avec un accompagnement précis. Chaque séance conjugue force, mobilité et contrôle dans un mouvement fluide.",
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
    level: "Adaptable selon le niveau",
    duration: "Séance d'environ 55 min", // durée configurable
    image: images.courseReformer.src,
    imageAlt: images.courseReformer.alt,
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
