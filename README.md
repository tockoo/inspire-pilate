# Inspire Pilates — Site vitrine

Site vitrine premium pour **Inspire Pilates**, studio de Pilates à Vertou (sud de Nantes).
Construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.

Direction artistique naturelle et éditoriale : palette crème / beige / brun chaud,
typographies serif (Cormorant Garamond) + sans (Jost), animations douces au défilement.

---

## Démarrage rapide

```bash
npm install
cp .env.example .env.local   # renseigner les variables (facultatif en dev)
npm run dev                  # http://localhost:3000
```

Autres commandes :

```bash
npm run build   # build de production
npm run start   # lancer le build de production
npm run lint    # linter Next.js / ESLint
```

---

## Structure du projet

```
app/                     Routes (App Router)
  page.tsx               Accueil
  le-studio/             Le Studio
  les-cours/             Les Cours (tapis, Springboard, Reformer)
  tarifs/                Tarifs (cartes + formule découverte)
  retraite/              Retraite (page immersive)
  faq/                   FAQ
  contact/               Contact (formulaire + carte)
  api/contact/route.ts   Envoi d'e-mail serveur (Resend)
  reservation|connexion|inscription|mon-compte|admin/   Routes Phase 2 (non indexées)
  mentions-legales|politique-de-confidentialite|cgv/     Pages légales (à compléter)
  sitemap.ts, robots.ts, opengraph-image.tsx             SEO

components/
  layout/                Header, Footer
  sections/              Sections de page (Hero, StudioIntro, ...)
  ui/                    Primitives (Button, Section, Reveal, Gallery, ...)
  forms/                 ContactForm
  seo/                   Données structurées (JSON-LD)

config/site.ts           ⭐ Configuration centrale (contact, réservation, nav, SEO)
data/                    Contenus éditables (cours, tarifs, faq, retraite, avis, images)
types/                   Types partagés
lib/                     Utilitaires (cn, formatPrice, réservation, schéma contact)
```

---

## Où modifier le contenu

Tout le contenu est **centralisé** et éditable sans toucher aux composants :

| Élément | Fichier |
| --- | --- |
| Coordonnées, réseaux, horaires, SEO | `config/site.ts` |
| Destination du bouton « Réserver » | `config/site.ts` → `reservation` |
| Navigation (header/footer/légal) | `config/site.ts` |
| Cours | `data/courses.ts` |
| Tarifs & conditions | `data/pricing.ts` |
| FAQ | `data/faq.ts` |
| Retraite (statut, programme, dates) | `data/retreat.ts` |
| Témoignages | `data/testimonials.ts` |
| Images (placeholders) | `data/images.ts` |

### Bouton « Réserver un cours » (Phase 1 → Phase 2)

La destination est définie à **un seul endroit** : `reservation` dans `config/site.ts`.
Options : `whatsapp` (par défaut), `instagram`, `url` (lien externe), `contact`
(formulaire interne) ou `internal` (route `/reservation` en Phase 2).
Aucun composant n'a besoin d'être modifié pour changer la cible.

---

## Images & logo (placeholders)

Les images sont des **placeholders Unsplash** en attendant les vraies photos.
Pour passer en production :

1. Déposer les photos dans `public/images/` (voir `localPath` dans `data/images.ts`).
2. Remplacer chaque `src` par le chemin local (ex. `/images/hero-studio.jpg`).
3. Déposer le vrai logo dans `public/images/logo.svg` et adapter `components/ui/Logo.tsx`
   (actuellement rendu en typographie).

Le domaine `images.unsplash.com` est autorisé dans `next.config.mjs` (à retirer une
fois les images locales en place).

---

## Formulaire de contact (Resend)

- Route serveur : `app/api/contact/route.ts` — la clé API reste **strictement côté serveur**.
- Variables (`.env.local`) : `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`.
- **Sans clé configurée**, le formulaire fonctionne en *mode démo* (message loggué, pas d'envoi),
  ce qui permet de tester l'UX sans secret.
- Validation partagée client/serveur via **Zod** (`lib/contact-schema.ts`) + honeypot anti-spam.

---

## SEO

- Métadonnées par page + `metadataBase` (`config/site.ts` → `url`).
- `sitemap.xml` et `robots.txt` générés (routes Phase 2 exclues / non indexées).
- Données structurées `SportsActivityLocation` (JSON-LD) pour le référencement local.
- Image Open Graph générée dynamiquement (`app/opengraph-image.tsx`).

---

## À compléter avant mise en ligne

- [ ] Vraies **photographies** du studio et **logo** officiel.
- [ ] **Mentions légales**, **politique de confidentialité**, **CGV** (champs `[À COMPLÉTER]`).
- [ ] E-mail de contact réel et **coordonnées** définitives.
- [ ] **Horaires** exacts et **conditions d'annulation** (marquées « provisoire »).
- [ ] Contenu **retraite** (dates, lieu, programme) — actuellement « provisoire ».
- [ ] Vrais **témoignages** (placeholders désactivables dans `data/testimonials.ts`).
- [ ] Configurer les variables **Resend** en production.

---

## Phase 2 (préparée, non active)

Routes déjà présentes et non indexées : `/reservation`, `/connexion`, `/inscription`,
`/mon-compte`, `/admin`. Elles affichent un écran « Bientôt disponible » et serviront de
base à la réservation en ligne, l'espace cliente et le back-office.
