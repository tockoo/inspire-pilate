import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/sections/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updatedAt="9 septembre 2026">
      <LegalSection heading="Éditeur du site">
        <p>Le site inspirepilates.fr est édité par :</p>
        <p>
          <strong>INSPIRE PILATES</strong>, société à responsabilité limitée (SARL).
          <br />
          Siège social : Chemin Victor Forquenot, 472 route de Clisson, 44120 Vertou.
          <br />
          Immatriculée au Registre du commerce et des sociétés de Nantes sous le
          numéro <strong>103&nbsp;566&nbsp;774</strong>.
          <br />
          SIRET : <strong>103&nbsp;566&nbsp;774&nbsp;00016</strong>.
          <br />
          Code APE/NAF : 8551Z — Enseignement de disciplines sportives et d&apos;activités
          de loisirs.
        </p>
        <p>
          Téléphone : {siteConfig.contact.phone}
          <br />
          E-mail : {siteConfig.contact.email}
        </p>
      </LegalSection>

      <LegalSection heading="Direction de la publication">
        <p>
          Directrice de la publication : <strong>Dolorès Cabardis</strong>, gérante.
        </p>
      </LegalSection>

      <LegalSection heading="Hébergement">
        <p>
          Le site est hébergé par <strong>Vercel Inc.</strong>
          <br />
          340 S Lemon Avenue, #4133, Walnut, CA 91789, États-Unis.
          <br />
          Site : vercel.com
        </p>
        <p>
          La gestion du nom de domaine et la diffusion réseau (DNS/CDN) sont assurées
          par <strong>Cloudflare, Inc.</strong>, 101 Townsend Street, San Francisco,
          CA 94107, États-Unis.
        </p>
      </LegalSection>

      <LegalSection heading="Conception et réalisation">
        <p>
          Le site inspirepilates.fr a été conçu et développé en interne par{" "}
          <strong>Mickael Tocko</strong>.
        </p>
        <p>
          Portfolio :{" "}
          <a
            href="https://kael-sable.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay underline underline-offset-4 hover:text-wood"
          >
            kael-sable.vercel.app
          </a>
          <br />
          Contact :{" "}
          <a
            href="mailto:kael.macchiatto@gmail.com"
            className="text-clay underline underline-offset-4 hover:text-wood"
          >
            kael.macchiatto@gmail.com
          </a>
        </p>
      </LegalSection>

      <LegalSection heading="Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images,
          photographies, logo, identité visuelle) est protégé par le droit de la
          propriété intellectuelle. Toute reproduction, représentation ou diffusion,
          totale ou partielle, sans l&apos;autorisation écrite préalable d&apos;Inspire
          Pilates, est interdite.
        </p>
      </LegalSection>

      <LegalSection heading="Données personnelles">
        <p>
          Le traitement des données personnelles collectées via ce site est décrit
          dans notre{" "}
          <a
            href="/politique-de-confidentialite"
            className="text-clay underline underline-offset-4 hover:text-wood"
          >
            politique de confidentialité
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Pour toute question relative au site, vous pouvez nous écrire à{" "}
          <strong>{siteConfig.contact.email}</strong>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
