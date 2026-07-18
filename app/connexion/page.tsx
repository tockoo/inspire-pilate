import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/ComingSoon";

// Route réservée à la Phase 2 (espace cliente). Non indexée.
export const metadata: Metadata = {
  title: "Connexion",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <ComingSoon
      title="Espace cliente"
      text="Votre espace personnel (réservations, crédits, historique) sera disponible dans une prochaine étape."
    />
  );
}
