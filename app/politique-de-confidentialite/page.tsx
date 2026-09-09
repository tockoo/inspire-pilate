import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/sections/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      updatedAt="9 septembre 2026"
    >
      <LegalSection heading="Responsable du traitement">
        <p>
          Le responsable du traitement des données est{" "}
          <strong>INSPIRE PILATES</strong> (SARL), dont le siège est situé Chemin
          Victor Forquenot, 472 route de Clisson, 44120 Vertou, représentée par sa
          gérante Dolorès Cabardis. Contact : <strong>{siteConfig.contact.email}</strong>.
        </p>
      </LegalSection>

      <LegalSection heading="Données collectées">
        <p>
          Via le formulaire de contact du site, nous collectons&nbsp;: prénom, nom,
          adresse e-mail, téléphone (facultatif) et le contenu de votre message.
        </p>
        <p>
          L&apos;ouverture prochaine d&apos;un espace membre (réservation en ligne)
          entraînera la collecte de données de compte (identifiants, historique de
          réservations et de paiements) ; cette politique sera mise à jour en
          conséquence à son lancement.
        </p>
      </LegalSection>

      <LegalSection heading="Finalités et base légale">
        <p>
          Les données du formulaire sont traitées dans le seul but de répondre à votre
          demande, sur la base de votre consentement. Elles ne sont jamais vendues ni
          cédées à des tiers à des fins commerciales.
        </p>
      </LegalSection>

      <LegalSection heading="Destinataires et sous-traitants">
        <p>
          Vos données sont accessibles à l&apos;équipe du studio et à nos prestataires
          techniques, qui n&apos;interviennent que pour notre compte&nbsp;:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Vercel Inc.</strong> — hébergement du site.
          </li>
          <li>
            <strong>Cloudflare, Inc.</strong> — nom de domaine, diffusion réseau (DNS/CDN).
          </li>
          <li>
            <strong>Resend</strong> — acheminement des e-mails du formulaire de contact.
          </li>
          <li>
            <strong>OVH</strong> — hébergement de la messagerie {siteConfig.contact.email}.
          </li>
        </ul>
        <p>
          Le futur espace membre s&apos;appuiera en complément sur{" "}
          <strong>Supabase</strong> (gestion des comptes) et <strong>Stripe</strong>{" "}
          (paiements). Le studio n&apos;a jamais connaissance des données de votre carte
          bancaire.
        </p>
      </LegalSection>

      <LegalSection heading="Durée de conservation">
        <p>
          Les messages reçus via le formulaire de contact sont conservés jusqu&apos;à
          3&nbsp;ans après le dernier échange, puis supprimés. Les données liées à un
          compte membre et aux obligations comptables sont conservées pendant la durée
          de la relation, puis selon les délais légaux applicables.
        </p>
      </LegalSection>

      <LegalSection heading="Vos droits">
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement, d&apos;opposition et de portabilité de vos
          données. Pour l&apos;exercer, écrivez à{" "}
          <strong>{siteConfig.contact.email}</strong>.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la CNIL
          (www.cnil.fr).
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          Ce site n&apos;utilise pas de cookies de suivi ni de traceurs publicitaires.
          Si un outil de mesure d&apos;audience était ajouté à l&apos;avenir, une
          information — et, le cas échéant, une demande de consentement — serait mise
          en place.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Pour toute question relative à vos données personnelles, contactez-nous à{" "}
          <strong>{siteConfig.contact.email}</strong>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
