import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { pricingPlans } from "@/data/pricing";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * Aperçu des tarifs (résumé des formules).
 * Pas de planning hebdomadaire en phase 1.
 */
export function PricingPreview() {
  return (
    <Section spacing="lg" className="bg-offwhite">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow mb-4">Tarifs &amp; réservation</p>
            <h2 className="text-3xl leading-tight text-balance md:text-4xl">
              Des formules adaptées à vos envies et à votre{" "}
              <span className="italic">rythme.</span>
            </h2>
            <p className="prose-soft mt-6">
              Commencez par la formule découverte, puis choisissez la carte qui
              vous convient. Les crédits sont valables sur l&apos;ensemble des
              cours&nbsp;: tapis, Springboard et Reformer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ReserveButton />
              <Button href="/tarifs" variant="secondary">
                Voir tous les tarifs
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <ul className="divide-y divide-umber/12 border-y border-umber/12">
              {pricingPlans.map((plan) => (
                <li
                  key={plan.id}
                  className={cn(
                    "flex items-center justify-between gap-4 py-5",
                    plan.featured && "-mx-4 rounded-xl bg-beige/50 px-4"
                  )}
                >
                  <div>
                    <p className="font-serif text-lg text-umber">
                      {plan.name}
                      {plan.featured && (
                        <span className="ml-3 align-middle text-[0.6rem] uppercase tracking-widest text-clay">
                          À découvrir
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-ink/60">
                      {plan.sessions} cours · {plan.validity}
                    </p>
                  </div>
                  <p className="shrink-0 font-serif text-xl text-wood">
                    {formatPrice(plan.price)}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
