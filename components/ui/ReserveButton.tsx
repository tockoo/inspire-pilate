import { Button } from "@/components/ui/Button";
import { reservationCta } from "@/config/site";
import { getReservationHref, isExternalReservation } from "@/lib/reservation";

type Props = {
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
};

/**
 * Bouton de réservation centralisé.
 * La destination provient de `config/site.ts` (facilement remplaçable en phase 2).
 */
export function ReserveButton({
  variant = "primary",
  size = "md",
  className,
  label,
}: Props) {
  return (
    <Button
      href={getReservationHref()}
      external={isExternalReservation()}
      variant={variant}
      size={size}
      className={className}
    >
      {label ?? reservationCta.label}
    </Button>
  );
}
