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
    name: "Pilates sur tapis avec Springboard",
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
    levels: [
      {
        name: "Tapis Springboard Fondation",
        image: "/images/cours-tapis-fondation.jpg",
        imageAlt: "Cours Pilates tapis et Springboard Fondation",
        tagline: "Construire des bases solides grâce à la résistance des ressorts",
        description:
          "Ce cours allie le travail au sol et l'utilisation du Springboard afin de découvrir ou d'approfondir les principes fondamentaux de la méthode Pilates. La résistance des ressorts offre un accompagnement précieux pour développer la posture, la mobilité, le renforcement profond et la conscience corporelle.",
        capacity: 8,
        accessible: true,
      },
      {
        name: "Tapis Springboard Progression",
        image: "/images/cours-tapis-progression.jpg",
        imageAlt: "Cours Pilates tapis et Springboard progression",
        tagline: "Approfondir sa pratique et enrichir son mouvement",
        description:
          "Destiné aux pratiquantes ayant acquis les bases, ce cours propose un travail plus complet mêlant stabilité, mobilité, coordination et renforcement. L'utilisation du Springboard permet d'explorer une grande variété d'exercices tout en développant davantage de fluidité, de contrôle et d'endurance.",
        capacity: 8,
      },
    ],
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
    levels: [
      {
        name: "Reformer Niveau 1",
        image: "/images/cours-reformer-niveau1.jpg",
        imageAlt: "Cours reformer niveau 1",
        tagline: "Découvrir les fondamentaux du Pilates sur Reformer",
        description:
          "Ce cours s'adresse aux débutantes ainsi qu'aux personnes souhaitant consolider leurs bases. Vous y développerez la respiration, l'alignement, le contrôle du centre et la compréhension des principes fondamentaux de la méthode Pilates. Le rythme est progressif et les exercices sont expliqués avec précision, pour acquérir les bons repères et pratiquer en toute confiance.",
        capacity: 6,
        accessible: true,
      },
      {
        name: "Reformer Niveau 1/2",
        image: "/images/cours-reformer-niveau1-2.jpg",
        imageAlt: "Cours reformer niveau 1/2",
        tagline: "Approfondir les fondamentaux et gagner en fluidité",
        description:
          "Destiné aux pratiquantes ayant déjà une première expérience du Reformer, ce cours permet de renforcer les acquis tout en explorant des enchaînements plus fluides et des variations d'exercices. L'accent est mis sur la qualité du mouvement, la coordination et le renforcement global du corps.",
        capacity: 6,
      },
      {
        name: "Reformer Niveau 2",
        image: "/images/cours-reformer-niveau2.jpg",
        imageAlt: "Cours reformer niveau 2",
        tagline: "Développer force, contrôle et endurance",
        description:
          "Ce cours s'adresse aux pratiquantes maîtrisant les bases de la méthode sur Reformer. Les exercices sont plus exigeants et les transitions plus dynamiques. Le travail de stabilité, de mobilité et de coordination est approfondi afin de développer un corps fort, équilibré et fonctionnel.",
        capacity: 6,
      },
      {
        name: "Reformer Niveau 3",
        image: "/images/cours-reformer-niveau3.jpg",
        imageAlt: "Cours reformer niveau 3",
        tagline: "Explorer toute la richesse du répertoire avancé",
        description:
          "Réservé aux pratiquantes expérimentées, ce cours propose un travail plus complexe et technique. Les exercices avancés du répertoire Pilates demandent une excellente maîtrise des fondamentaux, de la précision, du contrôle et de la fluidité. Le rythme est soutenu et les défis physiques plus importants.",
        capacity: 6,
        comingSoon: "Ouverture janvier 2027",
      },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
