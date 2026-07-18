import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Ratio d'aspect via classes Tailwind, ex: "aspect-[4/5]" */
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: boolean;
  /** Léger zoom au survol pour l'aspect éditorial */
  hoverZoom?: boolean;
};

/**
 * Image optimisée (next/image) avec cadrage responsive.
 * Utilise le remplissage (fill) : le conteneur définit le ratio.
 */
export function Figure({
  src,
  alt,
  className,
  imgClassName,
  aspect = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  rounded = true,
  hoverZoom = false,
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-sand",
        rounded && "rounded-2xl",
        aspect,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover transition-transform duration-[1200ms] ease-soft",
          hoverZoom && "group-hover:scale-105",
          imgClassName
        )}
      />
    </div>
  );
}
