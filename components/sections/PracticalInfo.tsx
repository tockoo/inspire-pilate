import { Section, Container } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  IconMapPin,
  IconPhone,
  IconInstagram,
  IconClock,
} from "@/components/ui/icons";
import { siteConfig, directionsUrl, mapsEmbedUrl } from "@/config/site";

/**
 * Informations pratiques : adresse, téléphone, Instagram, horaires + carte.
 * Réutilisable (accueil et contact).
 */
export function PracticalInfo({ withHeading = true }: { withHeading?: boolean }) {
  const { contact, social, hours } = siteConfig;

  const items = [
    {
      icon: <IconMapPin className="h-5 w-5" />,
      label: "Adresse",
      value: `${contact.address.street}, ${contact.address.postalCode} ${contact.address.city}`,
      href: directionsUrl,
      external: true,
    },
    {
      icon: <IconPhone className="h-5 w-5" />,
      label: "Téléphone",
      value: contact.phone,
      href: `tel:${contact.phoneRaw}`,
    },
    {
      icon: <IconInstagram className="h-5 w-5" />,
      label: "Instagram",
      value: social.instagramHandle,
      href: social.instagram,
      external: true,
    },
    {
      icon: <IconClock className="h-5 w-5" />,
      label: "Horaires",
      value: hours.note,
      schedule: hours.schedule,
    },
  ];

  return (
    <Section spacing="lg" className="bg-offwhite">
      <Container>
        {withHeading && (
          <SectionHeading
            eyebrow="Informations pratiques"
            title="Venez nous rendre visite"
            intro="Le studio se situe à Vertou, au sud de Nantes, dans un cadre calme et accueillant."
          />
        )}

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-beige/70 text-wood">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-clay">
                      {item.label}
                    </p>
                    {item.schedule ? (
                      <>
                        <ul className="mt-0.5 space-y-0.5">
                          {item.schedule.map((d) => (
                            <li key={d.day} className="text-umber">
                              <span className="text-ink/55">{d.day}</span> ·{" "}
                              {d.slots.join(" / ")}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-1 text-xs text-ink/50">{item.value}</p>
                      </>
                    ) : item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-lg text-umber underline-offset-4 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg text-umber">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={directionsUrl} external variant="secondary">
                Obtenir un itinéraire
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-umber/12 shadow-sm">
              <iframe
                title={`Carte — ${siteConfig.name}`}
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full md:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
