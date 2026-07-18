// ==========================================================================
// Utilitaires génériques
// ==========================================================================

/**
 * Concatène des classes conditionnelles (petite alternative à clsx, sans dépendance).
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Formate un prix en euros (format français). */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  }).format(value);
}
