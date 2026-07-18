import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/ComingSoon";

// Route réservée à la Phase 2 (réservation en ligne). Non indexée.
export const metadata: Metadata = {
  title: "Réservation",
  robots: { index: false, follow: false },
};

export default function ReservationPage() {
  return (
    <ComingSoon
      title="Réservation en ligne"
      text="Le système de réservation en ligne arrive bientôt. En attendant, contactez-nous directement pour réserver votre cours."
    />
  );
}
