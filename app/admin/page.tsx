import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/ComingSoon";

// Route réservée à la Phase 2 (back-office administratrice). Non indexée.
export const metadata: Metadata = {
  title: "Administration",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <ComingSoon
      eyebrow="Réservé — Phase 2"
      title="Espace administration"
      text="Le back-office (gestion des séances, des inscrites et pointage) sera développé lors de la seconde phase."
    />
  );
}
