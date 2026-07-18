import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { faqItems } from "@/data/faq";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur le Pilates à Vertou : niveau requis, tenue, différences entre tapis, Springboard et Reformer, cartes, réservation et annulation.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Vos questions, nos <span className="italic">réponses.</span>
          </>
        }
        intro="Tout ce qu'il faut savoir avant de venir pratiquer chez Inspire Pilates."
        image={images.reception}
        size="md"
      />

      <Section spacing="lg" className="bg-cream">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Accordion items={faqItems} />

            <div className="mt-12 rounded-2xl border border-umber/12 bg-offwhite p-8 text-center">
              <h2 className="font-serif text-2xl text-umber">
                Une autre question&nbsp;?
              </h2>
              <p className="mt-3 text-ink/70">
                Écrivez-nous ou réservez directement votre premier cours.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <ReserveButton />
                <Button href="/contact" variant="secondary">
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
