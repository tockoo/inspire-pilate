import { Section, Container } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Rating } from "@/components/ui/Rating";
import { getTestimonials } from "@/data/testimonials";
import { getGoogleReviews } from "@/lib/google-reviews";

// Lien "tous les avis" — recherche du studio sur Google Maps.
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Inspire+Pilates+Vertou";

/**
 * Section avis / témoignages.
 * Tente d'abord de récupérer les avis Google en direct (API Places, côté
 * serveur, mis en cache). Si la clé n'est pas configurée ou en cas d'erreur,
 * bascule sur les avis de repli définis dans data/testimonials.ts.
 */
export async function Testimonials() {
  const live = await getGoogleReviews();

  const items =
    live && live.reviews.length > 0
      ? live.reviews.map((r) => ({
          id: r.id,
          quote: r.quote,
          author: r.author,
          rating: r.rating,
        }))
      : getTestimonials();

  const ratingLabel =
    live != null
      ? live.rating.toLocaleString("fr-FR", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })
      : null;

  return (
    <Section spacing="lg" className="bg-cream">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Vos mots nous inspirent"
          title={
            <>
              Votre confiance, notre plus belle<span className="italic">motivation.</span>
            </>
          }
        />

        {live && (
          <div className="mt-6 flex flex-col items-center gap-2">
            <Rating value={Math.round(live.rating)} />
            <p className="text-sm text-ink/70">
              <span className="font-medium text-umber">{ratingLabel}</span> ·{" "}
              {live.total} avis Google
            </p>
          </div>
        )}

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
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

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest text-clay underline underline-offset-4 hover:text-wood"
          >
            Voir tous les avis sur Google
          </a>
        </div>
      </Container>
    </Section>
  );
}
