import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { IconCheck, IconClock } from "@/components/ui/icons";
import { FinalCta } from "@/components/sections/FinalCta";
import { courses } from "@/data/courses";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Les Cours",
  description:
    "Pilates sur tapis, Springboard et Reformer à Vertou. Découvrez chaque pratique, ses bénéfices et son fonctionnement. Cours adaptables selon le niveau.",
  alternates: { canonical: "/les-cours" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Les Cours"
        title={
          <>
            Trois pratiques, une même <span className="italic">exigence de justesse.</span>
          </>
        }
        intro="Tapis, Springboard et Reformer : trois manières complémentaires de renforcer le corps, gagner en mobilité et affiner le contrôle."
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
                  <h2 className="text-3xl leading-tight md:text-4xl">
                    {course.name}
                  </h2>
                  <p className="prose-soft mt-5">{course.longDescription}</p>

                  {/* Bénéfices */}
                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {course.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink/75">
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Détails structurés */}
                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {course.highlights.map((h) => (
                      <div key={h.title} className="border-t border-umber/15 pt-3">
                        <p className="font-serif text-base text-umber">{h.title}</p>
                        <p className="mt-1 text-xs text-ink/60">{h.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Niveau + durée + CTA */}
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/70">
                    <span className="rounded-full bg-beige/70 px-3 py-1 text-xs uppercase tracking-widest text-wood">
                      {course.level}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <IconClock className="h-4 w-4 text-clay" />
                      {course.duration}
                    </span>
                  </div>
                  <div className="mt-6">
                    <ReserveButton />
                  </div>
                </Reveal>
              </div>
            </Container>
          </Section>
        );
      })}

      <FinalCta
        title={
          <>
            Pas sûre du cours à choisir&nbsp;? <span className="italic">Parlons-en.</span>
          </>
        }
        text="Contactez-nous : nous vous orienterons vers la pratique la plus adaptée à vos envies et à votre niveau."
      />
    </>
  );
}
