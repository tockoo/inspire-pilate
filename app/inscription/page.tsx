import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/ComingSoon";

// Route réservée à la Phase 2 (création de compte). Non indexée.
export const metadata: Metadata = {
  title: "Inscription",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <ComingSoon
      title="Créer un compte"
      text="La création de compte sera bientôt possible pour gérer vos réservations et vos cartes."
    />
  );
}
