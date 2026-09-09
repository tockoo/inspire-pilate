import { Section, Container } from "@/components/ui/Section";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";

const intro = [
  "J'ai créé Inspire Pilates avec l'envie de proposer bien plus qu'un cours de Pilates. Parce que je crois que l'on ne choisit pas seulement un endroit pour ce qu'on y fait, mais aussi pour ce que l'on y ressent. Comme lorsque l'on pousse la porte d'un restaurant que l'on aime : on vient pour la cuisine, bien sûr, mais aussi pour l'atmosphère, la décoration, l'accueil, le service et le plaisir d'y être.",
  "J'ai cette même ambition pour Inspire Pilates. Que la qualité de l'enseignement soit au rendez-vous, mais aussi que l'on ait plaisir à franchir la porte, à retrouver un lieu que l'on connaît, à être accueilli, à prendre le temps. Que chaque séance soit une parenthèse, une expérience qui commence dès l'arrivée au studio et se prolonge bien après le dernier mouvement.",
];

/**
 * Présentation éditoriale du studio par sa fondatrice : texte + grande photo.
 */
export function StudioIntro() {
  return (
    <Section spacing="lg" className="bg-cream">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Colonne texte */}
          <div>
            <Reveal>
              <p className="eyebrow mb-4">La fondatrice</p>
              <h2 className="text-3xl leading-tight text-balance md:text-4xl lg:text-[2.75rem]">
                Dolorès Cabardis
              </h2>
              <p className="mt-2 font-serif text-lg italic text-clay">
                Fondatrice &amp; professeure de Pilates
              </p>
              <div className="prose-soft mt-6 space-y-4">
                {intro.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/a-propos" variant="secondary">
                  Lire son parcours
                </Button>
              </div>
            </Reveal>
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
