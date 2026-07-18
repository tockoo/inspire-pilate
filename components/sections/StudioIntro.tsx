import { Section, Container } from "@/components/ui/Section";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";

const pillars = [
  { title: "Renforcement en profondeur", text: "Un travail du centre qui soutient tout le corps." },
  { title: "Posture & alignement", text: "Des mouvements précis pour se tenir mieux au quotidien." },
  { title: "Mobilité & fluidité", text: "Gagner en amplitude et en aisance dans le geste." },
  { title: "Bien-être durable", text: "Une pratique douce, progressive et régulière." },
];

/**
 * Présentation éditoriale du studio : texte + piliers + grande photo.
 */
export function StudioIntro() {
  return (
    <Section spacing="lg" className="bg-cream">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Colonne texte */}
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Inspire Pilates</p>
              <h2 className="text-3xl leading-tight text-balance md:text-4xl lg:text-[2.75rem]">
                Le Pilates, pour renforcer{" "}
                <span className="italic">corps &amp; esprit.</span>
              </h2>
              <div className="prose-soft mt-6 space-y-4">
                <p>
                  Chez Inspire Pilates, nous cultivons un mouvement conscient et
                  précis, dans un cadre apaisant et raffiné. Notre approche allie
                  renforcement, mobilité et équilibre pour vous aider à vous
                  sentir forte, alignée et sereine au quotidien.
                </p>
                <p>
                  Un lieu intimiste dédié au mouvement, à la force et à la
                  mobilité, avec un accompagnement adapté à chaque niveau.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/le-studio" variant="secondary">
                  En savoir plus sur le studio
                </Button>
              </div>
            </Reveal>

            {/* Piliers */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} as="div">
                  <div className="border-t border-umber/15 pt-4">
                    <h3 className="font-serif text-base text-umber">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Colonne image */}
          <Reveal delay={120}>
            <Figure
              src={images.professeurPilate.src}
              alt={images.professeurPilate.alt}
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="shadow-xl shadow-umber/10"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
