import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales de vente et d'utilisation",
  description:
    "Conditions générales de vente et d'utilisation du studio Inspire Pilates, Vertou.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cgv" },
};

export default function CgvPage() {
  return (
    <LegalPage
      title="Conditions générales de vente et d'utilisation"
      updatedAt="2 septembre 2026"
    >
      {/* Identité */}
      <div className="rounded-r-lg border-l-2 border-clay bg-sand/40 px-5 py-4 text-sm leading-relaxed text-ink/80">
        <strong className="text-umber">INSPIRE PILATES</strong>, société à
        responsabilité limitée
        <br />
        Chemin Victor Forquenot, 472 route de Clisson — 44120 Vertou
        <br />
        SIRET <strong className="text-umber">103 566 774 00016</strong>
        <br />
        Contact : <strong className="text-umber">contact@inspirepilates.fr</strong>{" "}
        · Site : inspirepilates.fr
      </div>

      <LegalSection heading="1. Objet">
        <p>
          Les présentes conditions régissent la vente de formules de crédits et
          l&apos;utilisation de l&apos;espace membre en ligne d&apos;Inspire Pilates.
        </p>
        <p>
          Le studio se réserve le droit de les modifier ; la version applicable est
          celle en vigueur à la date de la commande.
        </p>
      </LegalSection>

      <LegalSection heading="2. Les prestations">
        <p>
          Le studio propose des séances de Pilates encadrées, en cours collectifs à
          effectif limité. Les séances se réservent à l&apos;unité, en réglant avec
          les <strong>crédits</strong> d&apos;une formule achetée au préalable.
        </p>
        <p>
          Une séance consomme le nombre de crédits indiqué sur sa fiche au moment de
          la réservation. Sauf mention contraire, une séance vaut un crédit.
        </p>
      </LegalSection>

      <LegalSection heading="3. Formules et tarifs">
        <p>Prix en euros, toutes taxes comprises, TVA au taux de 20 %.</p>
        <div className="overflow-x-auto rounded-lg border border-umber/12">
          <table className="w-full min-w-[26rem] border-collapse text-sm">
            <thead>
              <tr className="bg-sand/50 text-left text-[0.62rem] uppercase tracking-wider text-clay">
                <th className="px-3 py-2 font-medium">Formule</th>
                <th className="px-3 py-2 text-right font-medium">Séances</th>
                <th className="px-3 py-2 text-right font-medium">Prix TTC</th>
                <th className="px-3 py-2 text-right font-medium">Validité</th>
              </tr>
            </thead>
            <tbody className="text-ink/80">
              {[
                ["Découverte", "3", "60 €", "30 jours"],
                ["Carte 5", "5", "150 €", "60 jours"],
                ["Carte 10", "10", "280 €", "120 jours"],
                ["Carte 20", "20", "500 €", "240 jours"],
                ["Carte 30", "30", "690 €", "365 jours"],
              ].map(([formule, seances, prix, validite]) => (
                <tr key={formule} className="border-t border-umber/10">
                  <td className="px-3 py-2">{formule}</td>
                  <td className="px-3 py-2 text-right tabular-nums">{seances}</td>
                  <td className="px-3 py-2 text-right tabular-nums">{prix}</td>
                  <td className="px-3 py-2 text-right tabular-nums">{validite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Les tarifs peuvent évoluer. Le prix applicable est celui affiché au moment
          de la commande ; une évolution ultérieure est sans effet sur les crédits
          déjà acquis.
        </p>
      </LegalSection>

      <LegalSection heading="4. Commande et paiement">
        <p>
          Les achats en ligne sont réglés comptant, via notre prestataire de paiement{" "}
          <strong>Stripe</strong>. Le studio n&apos;a jamais connaissance des données
          de votre carte.
        </p>
        <p>
          Les crédits sont portés sur votre carte de membre dès l&apos;encaissement
          confirmé. Une facture est mise à votre disposition dans votre espace membre.
        </p>
        <p>
          Un règlement effectué directement au studio — espèces, chèque, virement,
          chèques-vacances — est saisi par le studio et produit les mêmes effets.
        </p>
      </LegalSection>

      <LegalSection heading="5. Les crédits">
        <p className="text-xs uppercase tracking-wider text-clay">Nature</p>
        <p>
          Les crédits sont des unités de réservation nominatives, attachées à votre
          carte de membre. Ils ne sont{" "}
          <strong>
            ni cessibles, ni échangeables, ni remboursables en numéraire
          </strong>
          .
        </p>
        <p className="text-xs uppercase tracking-wider text-clay">Validité</p>
        <p>
          Chaque formule est valable pendant la durée indiquée dans le tableau des
          formules et tarifs, à compter de la date de son achat :
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Formule Découverte : 30 jours</li>
          <li>Carte 5 : 60 jours</li>
          <li>Carte 10 : 120 jours</li>
          <li>Carte 20 : 240 jours</li>
          <li>Carte 30 : 365 jours</li>
        </ul>
        <p>
          La durée de validité est propre à chaque formule et n&apos;est pas prolongée
          par l&apos;achat ultérieur d&apos;une autre formule.
        </p>
        <p>
          À l&apos;expiration de la période de validité, les crédits restant sur la
          formule concernée sont automatiquement perdus, sans remboursement,
          contrepartie ni prorogation.
        </p>
        <p className="text-xs uppercase tracking-wider text-clay">
          Formule Découverte
        </p>
        <p>
          La formule Découverte est réservée aux personnes n&apos;ayant jamais
          bénéficié de cette formule auprès d&apos;Inspire Pilates.
        </p>
        <p>
          Elle ne peut être achetée et utilisée qu&apos;une seule fois par adhérente.
          Une même personne ne peut donc pas souscrire une nouvelle formule Découverte,
          y compris en utilisant une autre adresse email ou en créant un nouveau compte
          membre.
        </p>
        <p>La formule Découverte est personnelle, nominative et non cessible.</p>
      </LegalSection>

      <LegalSection heading="6. Réservation d'une séance">
        <p>Les crédits sont débités à la réservation.</p>
        <p>
          La réservation en ligne ferme <strong>une heure avant le début</strong> de
          la séance. Au-delà, seule l&apos;équipe du studio peut enregistrer une
          présence.
        </p>
      </LegalSection>

      <LegalSection heading="7. Annulation par l'adhérente">
        <p>L&apos;annulation se fait depuis l&apos;espace membre. Deux situations :</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Au moins 24 heures avant</strong> le début de la séance : le
            crédit est restitué immédiatement sur votre carte.
          </li>
          <li>
            <strong>Moins de 24 heures avant</strong> : la séance est due, le crédit
            reste consommé.
          </li>
        </ul>
        <div className="border-l-2 border-wood bg-beige/40 px-4 py-3 text-sm">
          <strong className="text-wood">Séance déplacée par le studio.</strong> Si
          l&apos;horaire d&apos;une séance déjà réservée est modifié, vous serez
          contactée pour être invitée à confirmer ou infirmer votre présence.
        </div>
        <p>
          Une séance offerte, ou réglée sans consommation de crédit, ne donne lieu à
          aucune restitution : ce qui n&apos;a pas été prélevé ne peut être rendu.
        </p>
      </LegalSection>

      <LegalSection heading="8. Liste d'attente">
        <p>
          Lorsqu&apos;une séance est complète, vous pouvez rejoindre sa liste
          d&apos;attente. Les crédits correspondants sont alors{" "}
          <strong>immobilisés</strong> sur votre carte : ils ne sont pas consommés,
          mais ne peuvent servir à une autre réservation tant que vous êtes en file.
        </p>
        <p>
          Dès qu&apos;une place se libère, la première personne de la file en est
          informée et son{" "}
          <strong>
            inscription devient automatique à l&apos;issue d&apos;un délai de 12 heures
          </strong>
          , sauf retrait de sa part avant ce terme. Il n&apos;y a donc rien à
          accepter : c&apos;est le silence qui vaut inscription.
        </p>
        <p>
          <strong>24 heures avant la séance</strong>, la liste se ferme. Les personnes
          encore en attente en sont informées et les crédits immobilisés leur sont
          intégralement restitués.
        </p>
        <p>
          Vous pouvez vous retirer d&apos;une liste d&apos;attente à tout moment ; les
          crédits immobilisés sont rendus aussitôt.
        </p>
      </LegalSection>

      <LegalSection heading="9. Annulation par le studio">
        <p>
          Le studio peut annuler une séance, notamment en cas d&apos;indisponibilité
          de l&apos;enseignante, d&apos;effectif insuffisant ou de force majeure. Les
          adhérentes inscrites en sont informées et{" "}
          <strong>les crédits leur sont intégralement restitués</strong>, sans
          condition de délai.
        </p>
      </LegalSection>

      <LegalSection heading="10. Droit de rétractation">
        <p>
          Conformément à l&apos;article <strong>L.&nbsp;221-28, 12°</strong> du code de
          la consommation, le droit de rétractation ne s&apos;applique pas aux
          prestations de services de loisirs fournies à une date ou selon une
          périodicité déterminée. Les réservations de séances en sont donc exclues.
        </p>
        <p>
          Pour l&apos;achat d&apos;une formule non entamée, le studio accorde néanmoins
          un délai de <strong>7 jours</strong> pour demander son annulation et son
          remboursement, à condition qu&apos;aucune séance n&apos;ait été réservée avec
          ces crédits.
        </p>
      </LegalSection>

      <LegalSection heading="11. Compte et accès en ligne">
        <p>
          L&apos;accès à l&apos;espace membre suppose la création d&apos;un compte avec
          une adresse email valide, que vous confirmez. Vous êtes responsable de la
          confidentialité de votre mot de passe et des opérations effectuées depuis
          votre compte.
        </p>
        <p>
          Une même adresse email ne peut être rattachée qu&apos;à une seule carte de
          membre. Le studio peut suspendre un accès en cas d&apos;usage frauduleux.
        </p>
      </LegalSection>

      <LegalSection heading="12. Santé et responsabilité">
        <p>
          Vous déclarez être en état de pratiquer le Pilates et n&apos;avoir
          connaissance d&apos;aucune contre-indication médicale. En cas de doute, de
          grossesse, de blessure ou d&apos;antécédent médical, il vous appartient de
          consulter un professionnel de santé et d&apos;en informer l&apos;enseignante
          avant la séance.
        </p>
        <p>
          Le studio décline toute responsabilité en cas de dommage résultant d&apos;une
          information de santé non communiquée, du non-respect des consignes de
          l&apos;enseignante, ou d&apos;objets personnels laissés dans les locaux.
        </p>
      </LegalSection>

      <LegalSection heading="13. Données personnelles">
        <p>
          Les données recueillies — identité, coordonnées, historique de réservations
          et de paiements — sont nécessaires à la gestion de votre compte et à
          l&apos;exécution des prestations. Elles sont conservées pendant la durée de
          la relation commerciale, puis selon les délais légaux applicables en matière
          comptable.
        </p>
        <p>
          Elles sont hébergées dans l&apos;Union européenne et traitées par nos
          prestataires techniques : Cloudflare (hébergement), Supabase (comptes et mots
          de passe), Stripe (paiements), Resend (envoi des emails). Elles ne sont ni
          vendues, ni cédées.
        </p>
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, d&apos;opposition et de portabilité, exerçable à{" "}
          <strong>contact@mrautomate.fr</strong>. Vous pouvez introduire une
          réclamation auprès de la CNIL.
        </p>
      </LegalSection>

      <LegalSection heading="14. Réclamations">
        <p>
          Toute réclamation peut être adressée à{" "}
          <strong>contact@inspirepilates.fr</strong>.
        </p>
        <p>
          L&apos;agence Mr Automate (mrautomate.fr) a conçu cette application. Vous
          pouvez la contacter à <strong>inspirepilates@mrautomate.fr</strong> en cas de
          bug ou de demande d&apos;information de nature informatique.
        </p>
      </LegalSection>

      <LegalSection heading="15. Droit applicable">
        <p>
          Les présentes conditions sont soumises au droit français. En cas de litige,
          une solution amiable sera recherchée avant toute action judiciaire.
        </p>
      </LegalSection>

      <p className="border-t border-umber/10 pt-6 text-center text-sm text-ink/50">
        Inspire Pilates · Chemin Victor Forquenot, 472 route de Clisson, 44120 Vertou
        <br />
        contact@inspirepilates.fr
      </p>
    </LegalPage>
  );
}
