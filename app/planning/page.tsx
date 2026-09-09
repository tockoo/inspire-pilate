import type { Metadata } from "next";

import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { reservation } from "@/config/site";
import { getReservationHref, isExternalReservation } from "@/lib/reservation";

export const metadata: Metadata = {
  title: "Planning",
  description:
    "Le planning des cours d'Inspire Pilates à Vertou — horaires et réservation.",
  alternates: { canonical: "/planning" },
};

export default function PlanningPage() {
  return (
    <Section spacing="lg" className="bg-cream pt-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4">Planning</p>
          <h1 className="font-serif text-4xl text-umber md:text-5xl">
            Nos <span className="italic">créneaux</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">
            Retrouvez ici l&apos;ensemble des cours et de leurs horaires. La
            réservation en ligne du planning arrive très prochainement.
          </p>
        </div>

        {/* ================================================================
            EMPLACEMENT DU WIDGET PLANNING
            Le widget JavaScript (planning / réservation) sera intégré ici.
            Remplacer le bloc « placeholder » ci-dessous par le widget fourni.
            ================================================================ */}
        <div
          id="planning-widget"
          className="mx-auto mt-12 max-w-3xl"
          aria-live="polite"
        >
          {/* --- Placeholder temporaire (à retirer une fois le widget branché) --- */}
          <div className="rounded-2xl border border-dashed border-umber/25 bg-offwhite px-6 py-16 text-center">
            <p className="font-serif text-2xl text-umber">
              Planning bientôt disponible
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink/60">
              Le calendrier des cours sera affiché ici sous peu. En attendant,
              vous pouvez nous contacter pour réserver votre place.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href={getReservationHref()}
                external={isExternalReservation()}
                variant="primary"
                size="md"
              >
                {reservation.type === "whatsapp"
                  ? "Réserver via WhatsApp"
                  : "Réserver un cours"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
