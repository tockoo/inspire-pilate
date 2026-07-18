import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Logo({
  className,
  tone = "dark",
  showMark = true,
  compact = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  showMark?: boolean;
  compact?: boolean;
}) {
  const color = tone === "light" ? "text-cream" : "text-umber";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — accueil`}
      className={cn(
        "group inline-flex items-center",
        compact ? "gap-2" : "gap-3",
        color,
        className
      )}
    >
      {showMark && (
        <Image
          src="/images/logo.svg"
          alt=""
          width={compact ? 28 : 40}
          height={compact ? 28 : 40}
          className={cn(
            "shrink-0",
            tone === "light" && "invert"
          )}
          aria-hidden="true"
        />
      )}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif italic tracking-tight",
            compact ? "text-xl" : "text-2xl"
          )}
        >
          Inspire
        </span>
        <span
          className={cn(
            "font-sans uppercase opacity-80",
            compact
              ? "text-[0.45rem] tracking-[0.35em]"
              : "text-[0.6rem] tracking-[0.4em]"
          )}
        >
          Pilates
        </span>
      </span>
    </Link>
  );
}
