import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  IconMapPin,
  IconPhone,
  IconInstagram,
  IconClock,
} from "@/components/ui/icons";
import {
  siteConfig,
  directionsUrl,
  mapsEmbedUrl,
} from "@/config/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Inspire Pilates à Vertou : adresse, téléphone, Instagram et formulaire de contact. Studio de Pilates au sud de Nantes.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { contact, social, hours } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de votre <span className="italic">pratique.</span>
          </>
        }
        intro="Une question, une envie de commencer ? Écrivez-nous ou passez nous voir à Vertou."
        image={images.reception}
        size="md"
      />

      <Section spacing="lg" className="bg-cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Coordonnées */}
            <Reveal>
              <h2 className="font-serif text-2xl text-umber">Nous joindre</h2>
              <ul className="mt-6 space-y-5">
                <ContactRow
                  icon={<IconMapPin className="h-5 w-5" />}
                  label="Adresse"
                >
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-umber underline-offset-4 hover:underline"
                  >
                    {contact.address.street}, {contact.address.postalCode}{" "}
                    {contact.address.city}
                  </a>
                </ContactRow>
                <ContactRow icon={<IconPhone className="h-5 w-5" />} label="Téléphone">
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="text-umber underline-offset-4 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </ContactRow>
                <ContactRow
                  icon={<IconInstagram className="h-5 w-5" />}
                  label="Instagram"
                >
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-umber underline-offset-4 hover:underline"
                  >
                    {social.instagramHandle}
                  </a>
                </ContactRow>
                <ContactRow icon={<IconClock className="h-5 w-5" />} label="Horaires">
                  <span className="block text-umber">
                    {hours.schedule.map((d) => (
                      <span key={d.day} className="block">
                        <span className="text-ink/55">{d.day}</span> · {d.slots.join(" / ")}
                      </span>
                    ))}
                    <span className="mt-1 block text-sm text-ink/50">{hours.note}</span>
                  </span>
                </ContactRow>
              </ul>

              <div className="mt-8 overflow-hidden rounded-2xl border border-umber/12">
                <iframe
                  title={`Carte — ${siteConfig.name}`}
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full"
                />
              </div>
              <p className="mt-4 text-sm text-ink/60">
                Accès&nbsp;: stationnement à proximité. Le studio se trouve à
                Vertou, au sud de Nantes.
              </p>
            </Reveal>

            {/* Formulaire */}
            <Reveal delay={120}>
              <div className="relative rounded-2xl border border-umber/12 bg-offwhite p-6 md:p-8">
                <h2 className="font-serif text-2xl text-umber">
                  Envoyez-nous un message
                </h2>
                <p className="mt-2 text-sm text-ink/60">
                  Les champs marqués d&apos;un astérisque (*) sont obligatoires.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-beige/70 text-wood">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-clay">{label}</p>
        <div className="text-lg">{children}</div>
      </div>
    </li>
  );
}
