import Image from "next/image";
import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { retreat, retreatStatusLabels } from "@/data/retreat";

/**
 * Bloc actualité / retraite premium.
 * Facilement modifiable via data/retreat.ts pour présenter un autre événement.
 */
export function RetreatHighlight() {
  return (
    <Section spacing="md" className="bg-cream">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[320px] md:min-h-[460px]">
                <Image
                  src={retreat.image}
                  alt={retreat.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-cream/90 px-4 py-1.5 text-xs uppercase tracking-widest text-umber backdrop-blur-sm">
                    En ce moment chez Inspire
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="flex flex-col justify-center bg-beige/60 p-8 md:p-12">
                <p className="eyebrow mb-3">
                  Retraite · {retreatStatusLabels[retreat.status]}
                </p>
                <h2 className="font-serif text-3xl leading-tight text-umber md:text-4xl">
                  {retreat.title}
                </h2>
                <p className="mt-4 text-ink/70">{retreat.intro}</p>
                <p className="mt-4 text-sm uppercase tracking-widest text-clay">
                  {retreat.dates}
                </p>
                <div className="mt-8">
                  <Button href="/retraite" variant="primary">
                    Découvrir la retraite
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
