import { IconStar } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function Rating({ value = 5, className }: { value?: number; className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-1 text-clay", className)}
      role="img"
      aria-label={`${value} étoiles sur 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar
          key={i}
          className={cn("h-3.5 w-3.5", i < value ? "opacity-100" : "opacity-25")}
        />
      ))}
    </div>
  );
}
