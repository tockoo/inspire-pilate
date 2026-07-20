import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Gallery } from "@/components/ui/Gallery";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { IconCheck, IconMapPin } from "@/components/ui/icons";
import { retreat, retreatStatusLabels } from "@/data/retreat";

export const metadata: Metadata = {
  title: "Retraite",
  description:
    "Week-end Yoga, Surf & Pilates du 11 au 13 septembre 2026 à Saint-Jean-de-Monts (Vendée). Yoga, Pilates sur la plage, surf encadré et détente pour se ressourcer, à partir de 550 €/personne.",
  alternates: { canonical: "/retraite" },
};

const ctaLabels: Record<typeof retreat.status, string> = {
  "inscriptions-ouvertes": "M'inscrire à la retraite",
  "bientot-disponible": "Être informée en priorité",
  complet: "Rejoindre la liste d'attente",
  "liste-attente": "Rejoindre la liste d'attente",
};

export default function RetreatPage() {
  return (
    <>
      <PageHero
        eyebrow={`Retraite · ${retreatStatusLabels[retreat.status]}`}
        title={retreat.title}
        intro={retreat.intro}
        image={{ src: retreat.image, alt: retreat.imageAlt }}
        size="full"
        align="center"
      />

      {retreat.provisional && (
        <div className="bg-beige/60">
          <div className="container-wide py-3 text-center text-xs italic text-wood">
            Informations provisoires — dates, lieu et programme à confirmer par le studio.
          </div>
        </div>
      )}

      {/* Philosophie */}
      <Section spacing="lg" className="bg-cream">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">L&apos;expérience</p>
            <h2 className="text-3xl leading-tight text-balance md:text-4xl">
              Ralentir, respirer, se <span className="italic">retrouver.</span>
            </h2>
            <p className="prose-soft mt-6 text-lg">{retreat.philosophy}</p>
          </Reveal>

          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-beige/70 px-4 py-2 text-sm text-wood">
              <IconMapPin className="h-4 w-4" /> {retreat.location}
            </span>
            <span className="rounded-full bg-beige/70 px-4 py-2 text-sm text-wood">
              {retreat.dates}
            </span>
            {retreat.price && (
              <span className="rounded-full bg-clay/15 px-4 py-2 text-sm font-medium text-wood">
                {retreat.price}
              </span>
            )}
          </div>
        </Container>
      </Section>

      {/* Programme */}
      <Section spacing="md" className="bg-offwhite">
        <Container>
          <SectionHeading eyebrow="Le programme" title="Un rythme doux, jour après jour" />
          <ol className="mt-10 space-y-4">
            {retreat.program.map((step, i) => (
              <Reveal key={step.day} delay={i * 70} as="li">
                <div className="flex flex-col gap-2 rounded-2xl border border-umber/12 bg-cream p-6 sm:flex-row sm:items-center sm:gap-6">
                  <span className="font-serif text-lg text-clay sm:w-24 sm:shrink-0">
                    {step.day}
                  </span>
                  <span className="text-ink/75">{step.text}</span>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Inclus + Pour qui */}
      <Section spacing="md" className="bg-cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h3 className="font-serif text-2xl text-umber">Ce qui est inclus</h3>
              <ul className="mt-6 space-y-3">
                {retreat.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/75">
                    <IconCheck className="mt-1 h-4 w-4 shrink-0 text-clay" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="font-serif text-2xl text-umber">À qui s&apos;adresse la retraite</h3>
              <ul className="mt-6 space-y-3">
                {retreat.audience.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/75">
                    <IconCheck className="mt-1 h-4 w-4 shrink-0 text-clay" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Galerie — tuiles « Photo à venir » tant que les vraies photos ne sont
          pas fournies (retreatGallery dans data/images.ts), pour visualiser la
          mise en page sans image cassée. Masquée seulement si le tableau est vide. */}
      {retreat.gallery.length > 0 && (
        <Section spacing="md" className="bg-offwhite">
          <Container>
            <SectionHeading eyebrow="En images" title="Un avant-goût de l'expérience" />
            <div className="mt-10">
              <Gallery images={retreat.gallery} />
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ retraite */}
      <Section spacing="md" className="bg-cream">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Questions fréquentes" title="La retraite en pratique" />
            <div className="mt-10">
              <Accordion items={retreat.faq} />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="md" className="bg-umber text-cream">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              Envie de vivre cette parenthèse&nbsp;?
            </h2>
            <p className="mt-4 text-cream/80">
              Contactez-nous pour recevoir toutes les informations et réserver
              votre place dès l&apos;ouverture des inscriptions.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="light" size="lg">
                {ctaLabels[retreat.status]}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
