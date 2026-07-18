import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  image: { src: string; alt: string };
  /** Hauteur du hero */
  size?: "md" | "lg" | "full";
  align?: "left" | "center";
};

/**
 * Hero plein largeur réutilisable pour les pages intérieures.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  size = "md",
  align = "left",
}: Props) {
  const heights = {
    md: "min-h-[52vh] py-28",
    lg: "min-h-[70vh] py-32",
    full: "min-h-[90vh] py-32",
  };

  return (
    <section className={cn("relative flex items-end overflow-hidden", heights[size])}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover animate-slowZoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/35" />
      <div className="container-wide relative z-10">
        <div
          className={cn(
            "max-w-2xl animate-fadeUp",
            align === "center" && "mx-auto text-center"
          )}
        >
          {eyebrow && <p className="eyebrow mb-4 text-cream/80">{eyebrow}</p>}
          <h1 className="font-serif text-4xl leading-[1.08] text-cream text-balance md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p
              className={cn(
                "mt-5 max-w-xl text-base text-cream/85 md:text-lg",
                align === "center" && "mx-auto"
              )}
            >
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
