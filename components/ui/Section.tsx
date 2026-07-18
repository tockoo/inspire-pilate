import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Espacement vertical */
  spacing?: "sm" | "md" | "lg";
  id?: string;
  as?: "section" | "div" | "article" | "footer";
};

const spacings = {
  sm: "py-14 md:py-20",
  md: "py-20 md:py-28",
  lg: "py-24 md:py-36",
};

export function Section({
  children,
  className,
  spacing = "md",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn(spacings[spacing], className)}>
      {children}
    </Tag>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("container-wide", className)}>{children}</div>;
}
