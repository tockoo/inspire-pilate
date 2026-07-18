import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans tracking-wide transition-all duration-500 ease-soft disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-umber text-cream hover:bg-wood shadow-sm hover:shadow-md",
  secondary:
    "border border-umber/40 text-umber hover:border-umber hover:bg-umber/5",
  ghost: "text-umber hover:text-wood underline-offset-4 hover:underline",
  light:
    "border border-cream/70 text-cream hover:bg-cream hover:text-umber backdrop-blur-sm",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs uppercase tracking-widest",
  md: "px-6 py-3 text-sm uppercase tracking-widest",
  lg: "px-8 py-4 text-sm uppercase tracking-widest",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    const isExternal = external ?? /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
