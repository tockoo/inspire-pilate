"use client";

import { usePathname } from "next/navigation";

import { ReserveButton } from "@/components/ui/ReserveButton";

/**
 * Bandeau CTA du footer (« Envie de commencer ? »).
 * Masqué sur /planning : on y est déjà, le bouton pointerait sur la même page.
 */
export function FooterCta() {
  const pathname = usePathname();
  if (pathname === "/planning") return null;

  return (
    <div className="border-b border-cream/10">
      <div className="container-wide flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <p className="max-w-md font-serif text-2xl leading-tight text-cream md:text-3xl">
          Envie de commencer&nbsp;? Réservez votre premier cours.
        </p>
        <ReserveButton variant="light" size="md" />
      </div>
    </div>
  );
}
