import Link from "next/link";
import { Section, Container } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/ui/icons";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";

/**
 * Aperçu des trois univers de cours.
 * Composition éditoriale avec rythme (offsets verticaux) plutôt que 3 cartes identiques.
 */
export function CoursesOverview() {
  return (
    <Section spacing="lg" className="bg-offwhite">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Nos cours"
          title={
            <>
              Trois approches, un même objectif&nbsp;:{" "}
              <span className="italic">votre équilibre.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {courses.map((course, i) => (
            <Reveal
              key={course.slug}
              delay={i * 120}
              as="article"
              className={cn(
                "group flex flex-col",
                // Décalage vertical pour un rythme éditorial (desktop)
                i === 1 && "md:mt-12"
              )}
            >
              <Link href={`/les-cours#${course.slug}`} className="block">
                <Figure
                  src={course.image}
                  alt={course.imageAlt}
                  aspect={i === 1 ? "aspect-[3/4]" : "aspect-[4/5]"}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  hoverZoom
                />
              </Link>
              <div className="mt-5">
                <p className="eyebrow mb-2">{course.tagline}</p>
                <h3 className="font-serif text-2xl text-umber">{course.name}</h3>
                <p className="mt-2 text-sm text-ink/70">
                  {course.shortDescription}
                </p>
                <ul className="mt-4 space-y-1">
                  {course.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="text-sm text-ink/60">
                      — {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/les-cours#${course.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-clay transition-colors hover:text-wood"
                >
                  Découvrir
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/les-cours" variant="secondary" size="md">
            Voir les cours
          </Button>
        </div>
      </Container>
    </Section>
  );
}
