import type { Metadata } from "next";

import { Section, Container } from "@/components/ui/Section";
import { PlanningWidget } from "@/components/sections/PlanningWidget";

export const metadata: Metadata = {
  title: "Planning",
  description:
    "Le planning des cours d'Inspire Pilates à Vertou — horaires et réservation en ligne.",
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
            Retrouvez ici l&apos;ensemble des cours et de leurs horaires, et
            réservez votre place en quelques clics.
          </p>
        </div>

        {/* Widget de réservation « Séances » (sous-domaine espace client). */}
        <PlanningWidget />
      </Container>
    </Section>
  );
}
