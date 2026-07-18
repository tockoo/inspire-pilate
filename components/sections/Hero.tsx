import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { images } from "@/data/images";

/**
 * Hero plein écran immersif : grande photographie dominante + texte superposé.
 * (S'inspire de la direction artistique validée.)
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Photographie de fond */}
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover animate-slowZoom"
      />
      {/* Overlay subtil pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/40" />

      <div className="container-wide relative z-10 pb-16 pt-32 md:pb-24">
        <div className="max-w-2xl animate-fadeUp">
          <p className="eyebrow mb-5 text-cream/80">
            Studio de Pilates · Vertou
          </p>
          <h1 className="font-serif text-4xl leading-[1.05] text-cream text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Un espace dédié à votre{" "}
            <span className="italic">équilibre</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-cream/85 md:text-lg">
            Cours collectifs sur tapis, Springboard et Reformer, dans un lieu
            intimiste et chaleureux à Vertou.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ReserveButton size="lg" />
            <Button href="/le-studio" variant="light" size="lg">
              Découvrir le studio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
