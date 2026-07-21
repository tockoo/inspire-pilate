import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Gallery } from "@/components/ui/Gallery";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import {
  IconCheck,
  IconMapPin,
  IconClock,
  IconInstagram,
  IconImage,
} from "@/components/ui/icons";
import { retreat, retreatStatusLabels } from "@/data/retreat";

export const metadata: Metadata = {
  title: "Retraite",
  description:
    "Week-end Pilates, Yoga & Surf du 11 au 13 septembre 2026 à Saint-Jean-de-Monts (Vendée). Pilates, yoga, surf encadré, brunchs et détente à la Villa Alizée, à partir de 450 €/personne.",
  alternates: { canonical: "/retraite" },
};

const ctaLabels: Record<typeof retreat.status, string> = {
  "inscriptions-ouvertes": "M'inscrire à la retraite",
  "bientot-disponible": "Être informée en priorité",
  complet: "Rejoindre la liste d'attente",
  "liste-attente": "Rejoindre la liste d'attente",
};

function Badge({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className={
        accent
          ? "inline-flex items-center gap-2 rounded-full bg-clay/15 px-4 py-2 text-sm font-medium text-wood"
          : "inline-flex items-center gap-2 rounded-full bg-beige/70 px-4 py-2 text-sm text-wood"
      }
    >
      {children}
    </span>
  );
}

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
            Informations provisoires — à confirmer par le studio.
          </div>
        </div>
      )}

      {/* Repères clés + philosophie */}
      <Section spacing="md" className="bg-cream">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge>
              <IconMapPin className="h-4 w-4" /> {retreat.location}
            </Badge>
            <Badge>{retreat.dates}</Badge>
            {retreat.duration && <Badge>{retreat.duration}</Badge>}
            {retreat.price && <Badge accent>{retreat.price}</Badge>}
          </div>
          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="prose-soft text-lg">{retreat.philosophy}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Au programme */}
      <Section spacing="md" className="bg-offwhite">
        <Container>
          <SectionHeading eyebrow="Au programme" title="Trois jours pour se ressourcer" />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {retreat.program.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-umber/12 bg-cream px-5 py-3 text-ink/80"
              >
                <IconCheck className="mt-1 h-4 w-4 shrink-0 text-clay" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Les intervenantes */}
      <Section spacing="md" className="bg-cream">
        <Container>
          <SectionHeading eyebrow="Les intervenantes" title="Encadrée par deux passionnées" />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {retreat.hosts.map((host, i) => (
              <Reveal key={host.name} delay={i * 100} as="article">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-2xl border border-umber/10 bg-sand sm:w-40">
                    {host.image ? (
                      <Image
                        src={host.image}
                        alt={host.imageAlt ?? host.name}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 text-center text-umber/40">
                        <IconImage className="h-6 w-6" />
                        <span className="text-[10px] uppercase tracking-[0.18em]">
                          Photo à venir
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-umber">{host.name}</h3>
                    <p className="eyebrow mt-1">{host.role}</p>
                    {host.bio && <p className="prose-soft mt-3 text-sm">{host.bio}</p>}
                    {host.instagram && (
                      <a
                        href={host.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-clay hover:text-wood"
                      >
                        <IconInstagram className="h-4 w-4" /> Instagram
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* L'hébergement */}
      <Section spacing="md" className="bg-offwhite">
        <Container>
          <SectionHeading eyebrow="L'hébergement" title={retreat.accommodation.name} />
          <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="prose-soft space-y-4">
                {retreat.accommodation.text.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {retreat.accommodation.instagram && (
                <a
                  href={retreat.accommodation.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-clay hover:text-wood"
                >
                  <IconInstagram className="h-4 w-4" /> @villa_alizee_
                </a>
              )}
            </Reveal>
            {retreat.accommodation.gallery.length > 0 && (
              <Reveal delay={120}>
                <Gallery images={retreat.accommodation.gallery} />
              </Reveal>
            )}
          </div>
        </Container>
      </Section>

      {/* Les chambres & tarifs */}
      <Section spacing="md" className="bg-cream">
        <Container>
          <SectionHeading
            eyebrow="Les chambres & tarifs"
            title="Choisissez votre formule"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {retreat.rooms.map((room) => (
              <Reveal key={room.name} as="article">
                <div className="flex h-full flex-col rounded-2xl border border-umber/12 bg-offwhite p-7">
                  <h3 className="font-serif text-xl text-umber">{room.name}</h3>
                  <p className="mt-2 text-sm text-ink/70">{room.description}</p>
                  <ul className="mt-auto space-y-1.5 pt-5">
                    {room.prices.map((p) => (
                      <li
                        key={p.label}
                        className="flex items-baseline justify-between border-t border-umber/10 pt-2 text-sm"
                      >
                        <span className="text-ink/60">{p.label}</span>
                        <span className="font-serif text-lg text-umber">{p.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          {retreat.roomsNote && (
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm italic text-ink/60">
              {retreat.roomsNote}
            </p>
          )}
        </Container>
      </Section>

      {/* Inclus / Non inclus */}
      <Section spacing="md" className="bg-offwhite">
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
              <h3 className="font-serif text-2xl text-umber">Non inclus</h3>
              <ul className="mt-6 space-y-3">
                {retreat.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/60">
                    <span className="mt-1 text-clay">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Infos pratiques + à qui s'adresse */}
      <Section spacing="md" className="bg-cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h3 className="font-serif text-2xl text-umber">Infos pratiques</h3>
              <ul className="mt-6 space-y-3">
                {retreat.practicalInfo.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/75">
                    <IconClock className="mt-1 h-4 w-4 shrink-0 text-clay" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="font-serif text-2xl text-umber">
                À qui s&apos;adresse la retraite
              </h3>
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

      {/* En images */}
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

      {/* FAQ */}
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
              Prête à vivre cette parenthèse&nbsp;?
            </h2>
            <p className="mt-4 text-cream/80">
              Écrivez-nous pour recevoir toutes les informations et réserver votre place.
              Places limitées.
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
