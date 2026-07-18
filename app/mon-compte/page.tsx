import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/ComingSoon";

// Route réservée à la Phase 2 (espace personnel). Non indexée.
export const metadata: Metadata = {
  title: "Mon compte",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return (
    <ComingSoon
      title="Mon compte"
      text="Retrouvez ici vos réservations, votre solde de crédits et votre historique dès la mise en ligne de l'espace cliente."
    />
  );
}
