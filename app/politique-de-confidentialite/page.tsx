import type { Metadata } from "next";
import { LegalPage, LegalSection, ToFill } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p className="text-sm italic text-clay">
        ⚠️ Modèle à compléter et à valider juridiquement avant publication.
      </p>

      <LegalSection heading="Données collectées">
        <p>
          Via le formulaire de contact, nous collectons&nbsp;: prénom, nom,
          e-mail, téléphone (facultatif) et message. Ces données servent
          uniquement à répondre à votre demande.
        </p>
      </LegalSection>

      <LegalSection heading="Finalité et base légale">
        <p>
          Les données sont traitées sur la base de votre consentement et ne sont
          jamais cédées à des tiers à des fins commerciales.
        </p>
      </LegalSection>

      <LegalSection heading="Durée de conservation">
        <p>Durée de conservation : <ToFill>Durée à définir (ex : 12 mois)</ToFill></p>
      </LegalSection>

      <LegalSection heading="Vos droits">
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification et de suppression de vos données. Pour l&apos;exercer,
          écrivez à <ToFill>Adresse e-mail dédiée</ToFill>.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          Ce site n&apos;utilise pas de cookies de suivi publicitaire. En cas
          d&apos;ajout d&apos;outils de mesure d&apos;audience, une bannière de
          consentement sera mise en place. <ToFill>À adapter selon les outils utilisés</ToFill>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
