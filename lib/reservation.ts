// ==========================================================================
// Résolution de la destination de réservation (Phase 1 -> Phase 2)
// Toute la logique du CTA "Réserver un cours" passe par ici.
// ==========================================================================

import { reservation } from "@/config/site";

/** URL de destination du CTA de réservation. */
export function getReservationHref(): string {
  return reservation.href;
}

/**
 * Détermine si le lien de réservation est externe (nouvel onglet)
 * ou interne (navigation Next.js).
 */
export function isExternalReservation(): boolean {
  return reservation.type !== "internal" && reservation.type !== "contact";
}
