// ==========================================================================
// Références d'images centralisées — Inspire Pilates
// --------------------------------------------------------------------------
// Toutes les images sont servies depuis /public/images/.
// Un chemin "src" du type "/images/xxx.jpg" correspond au fichier
// physique "public/images/xxx.jpg".
//
// 👉 Fichiers à déposer dans public/images/ :
//    hero-studio.jpg, studio-intro.jpg, studio-hero.jpg, reception.jpg,
//    cours-tapis.jpg, cours-springboard.jpg, cours-reformer.jpg,
//    retraite-hero.jpg, retraite-card.jpg, cta-final.jpg,
//    galerie-1.jpg … galerie-6.jpg,
//    retraite-galerie-1.jpg … retraite-galerie-4.jpg
//
// Pour changer une image : dépose le fichier puis, si besoin, adapte le
// chemin "src" et le texte alternatif "alt" ci-dessous.
// ==========================================================================

type Img = {
  src: string;
  alt: string;
  /** Emplacement local recommandé pour la vraie photo */
  localPath?: string;
};

export const images = {
  // --- Logo (placeholder texte tant que le vrai logo n'est pas fourni) ---
  logo: {
    // Le logo est rendu en typographie (composant Logo) tant que le SVG/PNG
    // réel n'est pas déposé dans /public/images/logo.svg
    localPath: "/images/logo.svg",
  },

  hero: {
    src: "/images/hero-studio.jpg",
    alt: "Studio de Pilates lumineux avec appareils Reformer alignés",
  } satisfies Img,

  professeurPilate: {
    src: "/images/professeur-pilate.jpg",
    alt: "Professeur de Pilates en action",
  } satisfies Img,
  
  studio: {
    src: "/images/studio.jpg",
    alt: "Studio de Pilates",
  } satisfies Img,
  
  
  studioIntro: {
    src: "/images/studio-intro.jpg",
    alt: "Espace de pratique baigné de lumière naturelle",
  } satisfies Img,

  studioHero: {
    src: "/images/studio-hero.jpg",
    alt: "Intérieur chaleureux du studio Inspire Pilates",
  } satisfies Img,

  reception: {
    src: "/images/reception.jpg",
    alt: "Accueil du studio aux tons naturels et bois clair",
  } satisfies Img,

  courseTapis: {
    src: "/images/cours-tapis.jpg",
    alt: "Pratique de Pilates sur tapis",
  } satisfies Img,

  courseSpringboard: {
    src: "/images/cours-springboard.jpg",
    alt: "Travail sur Springboard avec ressorts muraux",
  } satisfies Img,

  courseReformer: {
    src: "/images/cours-reformer.jpg",
    alt: "Séance de Pilates sur Reformer",
  } satisfies Img,

  retreatHero: {
    src: "/images/retraite-hero.jpg",
    alt: "Villa côtière apaisante pour une retraite bien-être",
  } satisfies Img,

  retreatCard: {
    src: "/images/retraite-card.jpg",
    alt: "Coucher de soleil sur la côte, ambiance retraite",
  } satisfies Img,

  ctaFinal: {
    src: "/images/cta-final.jpg",
    alt: "Détail apaisant d'un espace de bien-être",
  } satisfies Img,

  // --- Galerie du studio (mosaïque éditoriale) ---
  // Dépose les fichiers /public/images/galerie-1.jpg … galerie-6.jpg
  gallery: [
    {
      src: "/images/galerie-1.jpg",
      alt: "Vue d'ensemble du studio avec Reformers",
      orientation: "landscape",
    },
    {
      src: "/images/galerie-2.jpg",
      alt: "Détail d'un appareil de Pilates",
      orientation: "portrait",
    },
    {
      src: "/images/galerie-3.jpg",
      alt: "Lumière naturelle traversant les rideaux",
      orientation: "portrait",
    },
    {
      src: "/images/galerie-4.jpg",
      alt: "Espace tapis pour la pratique au sol",
      orientation: "landscape",
    },
    {
      src: "/images/galerie-5.jpg",
      alt: "Ambiance chaleureuse et matériaux naturels",
      orientation: "landscape",
    },
    {
      src: "/images/galerie-6.jpg",
      alt: "Détail décoratif aux tons sable",
      orientation: "portrait",
    },
  ],

  // --- Galerie retraite ---
  // Emplacements réservés (placeholder: true) : la section "En images" de
  // /retraite affiche des tuiles « Photo à venir » pour visualiser la mise en
  // page, sans image cassée. Dès que les vraies photos sont disponibles :
  // déposer les fichiers dans /public/images/, renseigner "src" et retirer
  // "placeholder" sur chaque entrée.
  retreatGallery: [
    { src: "/images/retraite-hero.jpg", alt: "Entrée exterieur de la villa alizée au soleil", orientation: "landscape"},
    { src: "/images/retraite-galerie-2.jpg", alt: "tapis de yoga sur la plage au coucher du soleil", orientation: "portrait"},
    { src: "/images/retraite-galerie-3.jpg", alt: "intérieur de la villa", orientation: "portrait"},
    { src: "/images/retraite-galerie-4.jpg", alt: "numéro de la villa alizée", orientation: "portrait"},
  ],

  // --- Galerie hébergement (Villa Alizée) ---
  // Emplacements réservés : à remplacer par les vraies photos de la villa.
  retreatVilla: [
    { src: "/images/villa-alizee-1.jpg", alt: "Exterieur de la Villa Alizée", orientation: "landscape" },
    { src: "/images/villa-alizee-2.jpg", alt: "Cuisine ouverte de la Villa Alizée", orientation: "portrait"},
    { src: "/images/villa-alizee-3.jpg", alt: "salon de la Villa Alizée", orientation: "portrait" },
  ],
} as const;
