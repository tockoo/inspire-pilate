import type { Metadata } from "next";
import { LegalPage, LegalSection, ToFill } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cgv" },
};

export default function CgvPage() {
  return (
    <LegalPage title="Conditions générales de vente">
      <p className="text-sm italic text-clay">
        ⚠️ Modèle à compléter et à valider juridiquement. Les conditions
        définitives (achat, annulation, remboursement) doivent être confirmées
        par le studio.
      </p>

      <LegalSection heading="Objet">
        <p>
          Les présentes conditions régissent la vente des cartes de cours et des
          prestations proposées par <ToFill>Raison sociale</ToFill>.
        </p>
      </LegalSection>

      <LegalSection heading="Formules et tarifs">
        <p>
          Les tarifs en vigueur sont indiqués sur la page Tarifs. Les crédits sont
          valables selon la durée propre à chaque carte.
        </p>
      </LegalSection>

      <LegalSection heading="Réservation et annulation">
        <p>
          La réservation est obligatoire. Les conditions d&apos;annulation sont
          les suivantes&nbsp;: <ToFill>Politique d&apos;annulation à définir</ToFill>.
        </p>
      </LegalSection>

      <LegalSection heading="Paiement">
        <p>
          Les modalités de paiement (sur place, en ligne) seront précisées&nbsp;:
          <ToFill>Modalités de paiement à définir</ToFill>. Le paiement en ligne
          sécurisé sera intégré lors d&apos;une prochaine phase.
        </p>
      </LegalSection>

      <LegalSection heading="Remboursement">
        <p>Conditions de remboursement : <ToFill>À définir</ToFill>.</p>
      </LegalSection>
    </LegalPage>
  );
}
