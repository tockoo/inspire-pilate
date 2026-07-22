import Image from "next/image";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";

type Props = {
  title?: React.ReactNode;
  text?: string;
  image?: { src: string; alt: string };
};

/**
 * Section CTA finale immersive.
 */
export function FinalCta({
  title = (
    <>
      Offrez-vous une parenthèse <span className="italic">pour vous.</span>
    </>
  ),
  text = "Découvrez le studio, réservez un premier cours ou contactez-nous : nous serons ravi·es de vous accueillir.",
  image = images.ctaFinal,
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[60vh] items-center py-28 md:py-40">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="container-wide relative z-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl leading-tight text-cream text-balance md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-cream/85">{text}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ReserveButton size="lg" />
              <Button href="/contact" variant="light" size="lg">
                Nous contacter
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
