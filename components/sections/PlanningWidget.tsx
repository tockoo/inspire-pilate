"use client";

import { useEffect, useRef } from "react";

const WIDGET_SRC = "https://moncompte.inspirepilates.fr/widget-seances.js";

/**
 * Widget de réservation « Séances » (hébergé sur le sous-domaine espace client).
 *
 * On (ré)injecte le script à CHAQUE montage de la page. En navigation interne
 * Next.js, `next/script` ne ré-exécute pas le script au retour sur la page, ce
 * qui laissait le conteneur vide. Le widget se ré-initialise seul (il vérifie
 * `document.readyState` et rappelle `demarrer()`), donc ré-injecter suffit.
 */
export function PlanningWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      // Nettoyage pour repartir sur une base propre au prochain montage.
      if (containerRef.current) containerRef.current.innerHTML = "";
      document.getElementById("ip-styles")?.remove();
    };
  }, []);

  return (
    <div
      id="inspire-seances"
      ref={containerRef}
      className="mx-auto mt-12 max-w-3xl"
    />
  );
}
