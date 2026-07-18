import { Section, Container } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Rating } from "@/components/ui/Rating";
import { getTestimonials, testimonialsConfig } from "@/data/testimonials";

/**
 * Section témoignages.
 * Affiche des emplacements placeholder tant que de vrais avis ne sont pas fournis.
 * Prête à être connectée aux avis Google en phase 2.
 */
export function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <Section spacing="lg" className="bg-cream">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Elles nous inspirent"
          title={
            <>
              Vos mots, notre plus belle <span className="italic">motivation.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 100} as="article">
              <figure className="flex h-full flex-col rounded-2xl border border-umber/12 bg-offwhite p-7">
                <Rating value={t.rating} className="mb-4" />
                <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-umber/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-widest text-clay">
                  {t.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {testimonialsConfig.usePlaceholders && (
          <p className="mt-8 text-center text-xs italic text-clay/70">
            Emplacements réservés — les avis vérifiés (Google) seront affichés ici.
          </p>
        )}
      </Container>
    </Section>
  );
}
