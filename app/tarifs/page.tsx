import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { IconCheck } from "@/components/ui/icons";
import { FinalCta } from "@/components/sections/FinalCta";
import { pricingPlans, pricePerSession, pricingInfo } from "@/data/pricing";
import { formatPrice, cn } from "@/lib/utils";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Formule découverte et cartes de 5 à 30 cours pour le Pilates à Vertou. Des tarifs clairs, valables sur le tapis, le Springboard et le Reformer.",
  alternates: { canonical: "/tarifs" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs"
        title={
          <>
            Des formules simples, à votre <span className="italic">rythme.</span>
          </>
        }
        intro="Commencez par la formule découverte, puis choisissez la carte adaptée à votre pratique. Aucun engagement mensuel."
        image={images.studio}
        size="md"
      />

      <Section spacing="lg" className="bg-cream">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <Reveal
                key={plan.id}
                delay={i * 80}
                as="article"
                className={cn(plan.featured && "md:col-span-2 lg:col-span-1")}
              >
                <div
                  className="flex h-full flex-col rounded-2xl border border-umber/12 bg-offwhite p-8 transition-shadow duration-500 hover:shadow-md"
                >
                  {plan.featured && (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-umber px-3 py-1 text-[0.6rem] uppercase tracking-widest text-cream">
                      Idéale pour débuter
                    </span>
                  )}
                  <h2 className="font-serif text-2xl text-umber">{plan.name}</h2>
                  <p className="mt-1 text-sm text-ink/60">{plan.validity}</p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-serif text-4xl text-wood">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-sm text-ink/50">
                      / {plan.sessions} cours
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink/50">
                    soit environ {formatPrice(pricePerSession(plan))} par cours
                  </p>

                  {plan.description && (
                    <p className="mt-4 text-sm text-ink/70">{plan.description}</p>
                  )}

                  <div className="mt-auto pt-8">
                    <ReserveButton
                      variant={plan.featured ? "primary" : "secondary"}
                      size="md"
                      className="w-full"
                      label={plan.featured ? "Choisir cette formule" : "Réserver"}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Fonctionnement des cartes */}
      <Section spacing="md" className="bg-offwhite">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Comment ça marche"
                title="Le fonctionnement des cartes"
              />
              <ul className="mt-8 space-y-3">
                {pricingInfo.howItWorks.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/75">
                    <IconCheck className="mt-1 h-4 w-4 shrink-0 text-clay" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink/60">{pricingInfo.validityNote}</p>
            </div>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-umber/12 bg-cream p-8">
                <h3 className="font-serif text-xl text-umber">
                  Réservation &amp; annulation
                </h3>
                <p className="mt-4 text-sm text-ink/70">
                  La réservation d&apos;un cours est obligatoire pour garantir
                  votre place, le nombre de participant·es étant limité.
                </p>
                <p className="mt-4 text-sm text-ink/70">
                  {pricingInfo.cancellation.text}
                </p>
                {pricingInfo.cancellation.provisional && (
                  <p className="mt-3 text-xs italic text-clay/80">
                    Conditions provisoires — à valider par le studio.
                  </p>
                )}
                <div className="mt-8">
                  <ReserveButton />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <FinalCta
        title={
          <>
            Prêt·e à commencer&nbsp;? <span className="italic">Réservez votre place.</span>
          </>
        }
      />
    </>
  );
}
