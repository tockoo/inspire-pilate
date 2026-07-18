"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Délai en ms avant l'animation (effet d'apparition en cascade) */
  delay?: number;
  as?: "div" | "li" | "article" | "section";
};

/**
 * Révèle son contenu en fondu-montant lors de l'entrée dans le viewport.
 * Respecte prefers-reduced-motion (via CSS global) et se dégrade proprement.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-1000 ease-soft motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      {children}
    </Tag>
  );
}
