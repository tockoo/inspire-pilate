import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { IconCheck, IconImage } from "@/components/ui/icons";
import { FinalCta } from "@/components/sections/FinalCta";
import { courses } from "@/data/courses";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Les Cours",
  description:
    "Pilates sur tapis avec Springboard et Pilates Reformer à Vertou. Le détail de chaque cours, par niveau (Fondation, Progression, Reformer Niveau 1, 1/2, 2, 3) et son fonctionnement.",
  alternates: { canonical: "/les-cours" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Les Cours"
        title={
          <>
            Deux pratiques, une même <span className="italic">exigence de justesse.</span>
          </>
        }
        intro="Pilates sur tapis avec Springboard et Pilates Reformer : deux disciplines complémentaires, déclinées par niveau pour accompagner chacun·e, des fondations au répertoire avancé."
        image={images.courseReformer}
        size="lg"
      />

      {courses.map((course, i) => {
        const reversed = i % 2 === 1;
        return (
          <Section
            key={course.slug}
            id={course.slug}
            spacing="lg"
            className={cn(i % 2 === 0 ? "bg-cream" : "bg-offwhite", "scroll-mt-24")}
          >
            <Container>
              {/* Présentation de la discipline */}
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal className={cn(reversed && "lg:order-2")}>
                  <Figure
                    src={course.image}
                    alt={course.imageAlt}
                    aspect="aspect-[4/5]"
                    className="shadow-xl shadow-umber/10"
                  />
                </Reveal>

                <Reveal delay={120} className={cn(reversed && "lg:order-1")}>
                  <p className="eyebrow mb-3">{course.tagline}</p>
                  <h2 className="text-3xl leading-tight md:text-4xl">{course.name}</h2>
                  <p className="prose-soft mt-5">{course.longDescription}</p>

                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {course.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink/75">
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {/* Les niveaux de la discipline */}
              {course.levels.length > 0 && (
                <div className="mt-16">
                  <p className="eyebrow mb-6 text-center">
                    Les cours {course.name.replace("Pilates ", "")}
                  </p>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {course.levels.map((lvl) => (
                      <Reveal key={lvl.name} as="article">
                        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-umber/12 bg-offwhite">
                          <div className="relative h-[340px] w-full overflow-hidden bg-sand md:h-[400px]">
                            {lvl.image ? (
                              <Image
                                src={lvl.image}
                                alt={lvl.imageAlt ?? lvl.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-[center_30%]"
                              />
                            ) : (
                              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-umber/40">
                                <IconImage className="h-7 w-7" />
                                <span className="text-[11px] uppercase tracking-[0.18em]">
                                  Photo à venir
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-1 flex-col p-7">
                            <div className="flex items-start justify-between gap-3">
                              <h3 className="font-serif text-xl text-umber">{lvl.name}</h3>
                              <span className="shrink-0 rounded-full bg-umber px-3 py-1 text-[0.65rem] uppercase tracking-widest text-cream">
                                {lvl.capacity} places
                              </span>
                            </div>
                            <p className="eyebrow mt-2 text-clay">{lvl.tagline}</p>
                            <p className="mt-3 text-sm leading-relaxed text-ink/70">
                              {lvl.description}
                            </p>
                            {(lvl.accessible || lvl.comingSoon) && (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {lvl.accessible && (
                                  <span className="rounded-full bg-beige/70 px-3 py-1 text-xs uppercase tracking-widest text-wood">
                                    Accessible à tou·te·s
                                  </span>
                                )}
                                {lvl.comingSoon && (
                                  <span className="rounded-full border border-clay/40 px-3 py-1 text-xs uppercase tracking-widest text-clay">
                                    {lvl.comingSoon}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 flex justify-center">
                <ReserveButton />
              </div>
            </Container>
          </Section>
        );
      })}

      <FinalCta
        title={
          <>
            Pas sûr·e du cours à choisir&nbsp;? <span className="italic">Parlons-en.</span>
          </>
        }
        text="Contactez-nous : nous vous orienterons vers la pratique et le niveau les plus adaptés à vos envies."
      />
    </>
  );
}
