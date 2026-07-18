import type { Metadata } from "next";
import { LegalPage, LegalSection, ToFill } from "@/components/sections/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <p className="text-sm italic text-clay">
        ⚠️ Modèle à compléter avec les informations réelles du studio. Les champs
        entre crochets doivent être renseignés.
      </p>

      <LegalSection heading="Éditeur du site">
        <p>Raison sociale : <ToFill>Raison sociale</ToFill></p>
        <p>Statut juridique : <ToFill>Statut juridique</ToFill></p>
        <p>SIRET : <ToFill>Numéro SIRET</ToFill></p>
        <p>Adresse : {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}</p>
        <p>Téléphone : {siteConfig.contact.phone}</p>
        <p>E-mail : <ToFill>Adresse e-mail de contact</ToFill></p>
        <p>Responsable de la publication : <ToFill>Nom du responsable</ToFill></p>
      </LegalSection>

      <LegalSection heading="Hébergeur">
        <p>Hébergeur : <ToFill>Nom de l&apos;hébergeur (ex : Vercel Inc.)</ToFill></p>
        <p>Adresse : <ToFill>Adresse de l&apos;hébergeur</ToFill></p>
      </LegalSection>

      <LegalSection heading="Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus (textes, images, logo) présents sur ce
          site est protégé. Toute reproduction sans autorisation est interdite.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
