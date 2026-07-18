"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/types";
import { IconClose, IconImage } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/**
 * Galerie éditoriale en mosaïque (alternance portrait/paysage) + lightbox.
 */
export function Gallery({ images }: { images: readonly GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {images.map((img, i) => {
          // Mise en page mosaïque partagée (tuile image ou placeholder).
          const shapeClasses = cn(
            img.orientation === "portrait" ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]",
            // Variation éditoriale : la première image occupe plus de place
            i === 0 && "col-span-2 md:col-span-2 md:row-span-2 md:aspect-auto"
          );

          // Emplacement réservé (aucune photo encore) : tuile « Photo à venir »,
          // non cliquable, pour laisser la cliente se projeter sur la composition.
          if (img.placeholder || !img.src) {
            return (
              <div
                key={`placeholder-${i}`}
                className={cn(
                  "relative overflow-hidden rounded-xl border border-umber/10 bg-sand",
                  shapeClasses
                )}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-umber/40">
                  <IconImage className="h-7 w-7" />
                  <span className="text-[11px] uppercase tracking-[0.18em]">Photo à venir</span>
                </div>
              </div>
            );
          }

          return (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-sand focus-visible:outline-offset-4",
                shapeClasses
              )}
              aria-label={`Agrandir : ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-105"
              />
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 animate-fadeIn"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Fermer"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
          >
            <IconClose className="h-6 w-6" />
          </button>
          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
