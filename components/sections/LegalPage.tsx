import { Section, Container } from "@/components/ui/Section";

/**
 * Gabarit pour les pages légales.
 * Les champs entre crochets [À COMPLÉTER] doivent être renseignés par le studio.
 */
export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt?: string;
  children: React.ReactNode;
}) {
  return (
    <Section spacing="lg" className="bg-cream pt-40">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl text-umber md:text-5xl">{title}</h1>
          {updatedAt && (
            <p className="mt-3 text-sm text-ink/50">Dernière mise à jour : {updatedAt}</p>
          )}
          <div className="legal-prose mt-10 space-y-8">{children}</div>
        </div>
      </Container>
    </Section>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-xl text-umber md:text-2xl">{heading}</h2>
      <div className="mt-3 space-y-3 text-ink/75 leading-relaxed">{children}</div>
    </section>
  );
}

/** Marqueur visuel pour un champ à compléter par le studio. */
export function ToFill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-beige/70 px-1.5 py-0.5 text-sm text-wood">
      [{children}]
    </span>
  );
}
