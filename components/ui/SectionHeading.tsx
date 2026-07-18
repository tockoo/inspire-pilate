import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
};

/**
 * En-tête de section éditoriale : suréminence + titre serif + intro.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  tone = "dark",
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-4",
            tone === "light" && "text-cream/70"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-balance",
          tone === "light" && "text-cream"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed text-pretty",
            tone === "light" ? "text-cream/80" : "text-ink/70"
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
