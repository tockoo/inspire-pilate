"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import { ReserveButton } from "@/components/ui/ReserveButton";
import { IconMenu, IconClose } from "@/components/ui/icons";
import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Header transparent sur le haut de page, opaque au scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile lors d'un changement de page (ajustement d'état
  // pendant le rendu — pattern React recommandé, évite un effet + re-rendu).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Bloque le scroll du body quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  // Sur la home, l'en-tête est transparent tant qu'on n'a pas scrollé.
  const transparent = isHome && !scrolled && !open;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft",
        transparent
          ? "bg-transparent py-2.5"
          : "bg-cream/90 py-2 shadow-[0_1px_0_rgba(92,70,50,0.08)] backdrop-blur-md"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <Logo tone={transparent ? "light" : "dark"} compact />

        {/* Navigation desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-5 lg:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative text-[0.65rem] uppercase tracking-[0.2em] transition-colors duration-300",
                "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-current after:transition-all after:duration-300",
                isActive(item.href) ? "after:w-full" : "after:w-0 hover:after:w-full",
                transparent
                  ? "text-cream/90 hover:text-cream"
                  : "text-umber/80 hover:text-umber"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ReserveButton
              size="sm"
              variant={transparent ? "light" : "primary"}
              className="px-3.5 py-1.5 text-[0.6rem]"
            />
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              transparent ? "text-cream" : "text-umber"
            )}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>

      {/* Panneau mobile plein écran — hors du header pour éviter le containing block créé par backdrop-blur */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col overflow-y-auto bg-cream px-6 pt-24 pb-10 transition-all duration-500 ease-soft lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <nav aria-label="Navigation mobile" className="flex flex-col gap-1">
          {mainNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={cn(
                "border-b border-umber/10 py-4 font-serif text-2xl transition-colors",
                isActive(item.href) ? "text-wood" : "text-umber"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8">
          <ReserveButton size="lg" className="w-full" />
        </div>
      </div>
    </>
  );
}
