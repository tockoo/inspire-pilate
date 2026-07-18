import Link from "next/link";

import { Logo } from "@/components/ui/Logo";
import { ReserveButton } from "@/components/ui/ReserveButton";
import {
  IconPhone,
  IconMapPin,
  IconInstagram,
  IconArrowUpRight,
} from "@/components/ui/icons";
import {
  siteConfig,
  footerNav,
  legalNav,
  directionsUrl,
} from "@/config/site";

export function Footer() {
  const { contact, social, hours } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-umber text-cream/85">
      {/* Bandeau CTA */}
      <div className="border-b border-cream/10">
        <div className="container-wide flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <p className="max-w-md font-serif text-2xl leading-tight text-cream md:text-3xl">
            Envie de commencer&nbsp;? Réservez votre premier cours.
          </p>
          <ReserveButton variant="light" size="md" />
        </div>
      </div>

      <div className="container-wide grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Marque */}
        <div className="space-y-4">
          <Logo tone="light" />
          <p className="text-sm text-cream/70">
            Studio de Pilates à Vertou. Un espace intimiste pour renforcer le
            corps, améliorer la mobilité et retrouver son équilibre.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-cream text-sm uppercase tracking-widest">
            Nous trouver
          </h3>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-2 text-sm text-cream/75 hover:text-cream"
          >
            <IconMapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {contact.address.street}
              <br />
              {contact.address.postalCode} {contact.address.city}
            </span>
          </a>
          <a
            href={`tel:${contact.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-cream/75 hover:text-cream"
          >
            <IconPhone className="h-4 w-4" />
            {contact.phone}
          </a>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-cream/75 hover:text-cream"
          >
            <IconInstagram className="h-4 w-4" />
            {social.instagramHandle}
          </a>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigation du pied de page" className="space-y-3">
          <h3 className="text-cream text-sm uppercase tracking-widest">
            Navigation
          </h3>
          <ul className="space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-cream/75 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Horaires */}
        <div className="space-y-3">
          <h3 className="text-cream text-sm uppercase tracking-widest">
            Horaires
          </h3>
          <p className="text-sm text-cream/75">{hours.label}</p>
          <p className="text-sm text-cream/75">{hours.note}</p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-cream underline-offset-4 hover:underline"
          >
            Itinéraire <IconArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-cream/10">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream/60 md:flex-row">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
