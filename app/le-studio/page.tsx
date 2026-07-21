import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
// Ré-importer Gallery et Button en réactivant la section « Galerie » ci-dessous.
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { FinalCta } from "@/components/sections/FinalCta";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Le Studio",
  description:
    "Découvrez Inspire Pilates à Vertou : un studio intimiste et chaleureux baigné de lumière naturelle, dédié au mouvement, à la force et à la mobilité.",
  alternates: { canonical: "/le-studio" },
};

const spaces = [
  {
    title: "L'espace tapis",
    text: "Une salle épurée et lumineuse pour la pratique au sol, propice à la concentration et à la respiration.",
  },
  {
    title: "L'espace appareils",
    text: "Reformers et Springboard installés dans un cadre soigné, pour un travail précis et accompagné.",
  },
  {
    title: "L'accueil",
    text: "Un lieu chaleureux, pensé dans des matériaux naturels, pour se poser avant et après la séance.",
  },
];

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Le Studio"
        title={
          <>
            Un lieu intimiste, pensé pour le <span className="italic">mouvement.</span>
          </>
        }
        intro="À Vertou, Inspire Pilates cultive une atmosphère calme et chaleureuse, où chaque détail invite à ralentir."
        image={images.studioHero}
        size="lg"
      />

      {/* Philosophie / intention */}
      <Section spacing="lg" className="bg-cream">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-4">Notre philosophie</p>
              <h2 className="text-3xl leading-tight text-balance md:text-4xl">
                Le bien-être naît d&apos;un mouvement <span className="italic">conscient.</span>
              </h2>
              <div className="prose-soft mt-6 space-y-4">
                <p>
                  Inspire Pilates est né d&apos;une envie simple&nbsp;: offrir un
                  espace où l&apos;on prend soin de soi, loin de l&apos;agitation.
                  Ici, le Pilates se pratique avec attention, précision et douceur.
                </p>
                <p>
                  Nous croyons qu&apos;une pratique régulière, adaptée à chacune,
                  transforme durablement la posture, la force et la sérénité au
                  quotidien. L&apos;accompagnement se veut bienveillant et
                  progressif, quel que soit votre point de départ.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Figure
                src={images.reception.src}
                alt={images.reception.alt}
                aspect="aspect-[4/5]"
                className="shadow-xl shadow-umber/10"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Environnement / lumière */}
      <Section spacing="md" className="bg-offwhite">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <Figure
                src={images.studioIntro.src}
                alt={images.studioIntro.alt}
                aspect="aspect-[3/2]"
                className="shadow-lg shadow-umber/10"
              />
            </Reveal>
            <Reveal delay={120} className="order-1 lg:order-2">
              <p className="eyebrow mb-4">L&apos;environnement</p>
              <h2 className="text-3xl leading-tight text-balance md:text-4xl">
                Lumière naturelle et matériaux <span className="italic">bruts.</span>
              </h2>
              <p className="prose-soft mt-6">
                Le studio privilégie les tons naturels, le bois et la lumière du
                jour. Un cadre apaisant, pensé pour que le corps se détende et que
                l&apos;esprit se recentre dès l&apos;entrée.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* La professeure */}
      <Section spacing="lg" className="bg-cream">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Figure
                src={images.professeurPilate.src}
                alt="Dolorès, professeure de Pilates au studio Inspire Pilates"
                aspect="aspect-[4/5]"
                className="shadow-xl shadow-umber/10"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow mb-4">La professeure</p>
              <h2 className="text-3xl leading-tight text-balance md:text-4xl">
                Dolorès, <span className="italic">professeure de Pilates.</span>
              </h2>
              <div className="prose-soft mt-6 space-y-4">
                <p>
                  Danseuse depuis toujours, le mouvement a toujours fait partie de ma
                  vie. C&apos;est en traversant la maternité et une période personnelle
                  plus difficile que le Pilates est devenu bien plus qu&apos;une
                  pratique&nbsp;: une véritable reconnexion à mon corps : plus
                  consciente, plus forte, plus alignée.
                </p>
                <p>
                  C&apos;est cette expérience que je transmets aujourd&apos;hui à
                  Vertou&nbsp;: un mouvement juste et bienveillant, à l&apos;écoute de
                  chacune, où l&apos;on prend soin de soi en profondeur et à son rythme.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Les espaces */}
      <Section spacing="md" className="bg-cream">
        <Container>
          <SectionHeading
            eyebrow="Les espaces"
            title="Des lieux pensés pour chaque pratique"
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {spaces.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} as="article">
                <div className="h-full rounded-2xl border border-umber/12 bg-offwhite p-7">
                  <h3 className="font-serif text-xl text-umber">{s.title}</h3>
                  <p className="mt-3 text-sm text-ink/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Galerie 
      <Section spacing="md" className="bg-offwhite">
        <Container>
          <SectionHeading
            eyebrow="Galerie"
            title="Un aperçu du studio"
            intro="Photographies à remplacer par les véritables images du studio."
          />
          <div className="mt-10">
            <Gallery images={images.gallery} />
          </div>
          <div className="mt-10">
            <Button href="/les-cours" variant="secondary">
              Découvrir les cours
            </Button>
          </div>
        </Container>
      </Section> */}

      <PracticalInfo withHeading />
      <FinalCta />
    </>
  );
}
