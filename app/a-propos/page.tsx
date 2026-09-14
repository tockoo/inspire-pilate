import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Dolorès Cabardis, fondatrice et professeure d'Inspire Pilates à Vertou : son parcours, sa vision du Pilates et ses formations.",
  alternates: { canonical: "/a-propos" },
};

const vision = [
  "Parce que je crois que l'on ne choisit pas seulement un endroit pour ce qu'on y fait, mais aussi pour ce que l'on y ressent. Comme lorsque l'on pousse la porte d'un restaurant que l'on aime : on vient pour la cuisine, bien sûr, mais aussi pour l'atmosphère, la décoration, l'accueil, le service et le plaisir d'y être.",
  "J'ai cette même ambition pour Inspire Pilates. Que la qualité de l'enseignement soit au rendez-vous, mais aussi que l'on ait plaisir à franchir la porte, à retrouver un lieu que l'on connaît, à être accueilli, à prendre le temps. Que chaque séance soit une parenthèse, une expérience qui commence dès l'arrivée au studio et se prolonge bien après le dernier mouvement.",
];

const parcours = [
  "Avant Inspire Pilates, il y a dix années passées dans le commerce, comme responsable commerciale pour des marques alimentaires et cosmétiques bio. Une expérience qui m'a appris le goût du contact, de l'écoute, de la relation de proximité et surtout l'importance de créer une vraie relation de confiance.",
  "Puis est venue l'envie d'entreprendre. L'envie de créer quelque chose qui ait du sens et qui rassemble plusieurs de mes convictions : le sport-santé, le bien-être, la proximité et le commerce local.",
  "Cette envie d'entreprendre est aussi une histoire familiale. Fille d'un épicier ambulant qui a sillonné pendant près de vingt ans les routes de Loire-Atlantique et de Vendée, j'ai grandi dans le commerce. J'en ai gardé le goût du lien, du contact et de l'échange. Je revendique aujourd'hui une véritable âme de commerçante : celle qui aime connaître ses clients, les accueillir, les retrouver et faire d'un lieu bien plus qu'un simple point de passage.",
  "Avec Inspire Pilates, j'ai choisi de faire évoluer cette histoire vers un univers qui me ressemble aujourd'hui davantage : celui du mouvement, de la santé et du bien-être.",
];

const piliers = [
  {
    title: "Plus qu'un cours, une expérience",
    paras: [
      "J'ai imaginé Inspire Pilates comme un lieu chaleureux, intimiste et profondément humain, où chaque détail compte. Un lieu où l'on vient pour la qualité de l'enseignement, mais aussi pour l'atmosphère, les détails, l'accueil et cette sensation de s'offrir un vrai moment pour soi.",
    ],
  },
  {
    title: "Une vision du Pilates avant tout humaine",
    paras: [
      "Fondatrice et unique professeure du studio, je souhaite placer l'humain au cœur du projet.",
      "Pour moi, le Pilates est un formidable outil de sport-santé et de renforcement musculaire, mais il est aussi une manière d'apprendre à mieux connaître son corps, à l'écouter et à en prendre soin durablement.",
      "Ici, pas de recherche de performance à tout prix. Je souhaite proposer une pratique précise, progressive et accessible, dans laquelle chaque personne peut évoluer à son rythme et selon son propre corps.",
    ],
  },
];

const formations = [
  "Titulaire du CQP ALS AGEE depuis juillet 2026, je suis également formée au Pilates niveau 2 au Centre Pilates Nantes, sur tapis, Reformer et Cadillac.",
  "Et parce que je considère que l'apprentissage d'une professeure ne s'arrête jamais, je poursuis mon parcours auprès d'Élodie Scullino, fondatrice de la méthode des 5 Sens, à Paris. Continuer à apprendre, à évoluer et à rester curieuse, pour accompagner au mieux les corps qui me sont confiés et rester, moi aussi, dans le mouvement d'une vie qui change à mille à l'heure.",
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Dolorès Cabardis, <span className="italic">fondatrice.</span>
          </>
        }
        intro="Fondatrice et professeure de Pilates, j'ai créé Inspire Pilates avec l'envie de proposer bien plus qu'un cours de Pilates."
        image={images.professeurPilate}
        size="lg"
      />

      {/* Son parcours */}
      <Section spacing="lg" className="bg-cream">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">Son parcours</p>
              <h2 className="text-3xl leading-tight text-balance md:text-4xl">
                Une âme de <span className="italic">commerçante.</span>
              </h2>
              <div className="prose-soft mt-6 space-y-4">
                {parcours.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Figure
                src={images.dolores.src}
                alt={images.dolores.alt}
                aspect="aspect-[4/5]"
                className="shadow-xl shadow-umber/10"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Sa vision — bloc resserré, sous le parcours */}
      <Section spacing="md" className="bg-offwhite">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <Reveal>
              <p className="eyebrow mb-4">Sa vision</p>
              <h2 className="text-2xl leading-tight text-balance md:text-3xl">
                Un lieu que l&apos;on choisit aussi pour ce que l&apos;on y{" "}
                <span className="italic">ressent.</span>
              </h2>
              <div className="prose-soft mt-6 space-y-4">
                {vision.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Piliers */}
      <Section spacing="md" className="bg-cream">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {piliers.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} as="article">
                <div className="flex h-full flex-col rounded-2xl border border-umber/12 bg-offwhite p-8">
                  <h3 className="font-serif text-2xl text-umber">{p.title}</h3>
                  <div className="prose-soft mt-4 space-y-3 text-sm">
                    {p.paras.map((para) => (
                      <p key={para.slice(0, 24)}>{para}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Formation */}
      <Section spacing="md" className="bg-offwhite">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Formation"
              title="Un apprentissage qui ne s'arrête jamais"
            />
            <div className="prose-soft mt-8 space-y-4">
              {formations.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
