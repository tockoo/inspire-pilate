import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ReserveButton } from "@/components/ui/ReserveButton";

/**
 * Écran "Phase 2" réutilisable pour les routes réservées
 * (réservation, connexion, inscription, mon-compte, admin).
 * Ces routes existent dans l'architecture mais ne sont pas encore actives.
 */
export function ComingSoon({
  eyebrow = "Bientôt disponible",
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text: string;
}) {
  return (
    <Section spacing="lg" className="min-h-[70vh] bg-cream pt-40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="font-serif text-4xl text-umber md:text-5xl">{title}</h1>
          <p className="prose-soft mt-6 text-lg">{text}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ReserveButton />
            <Button href="/" variant="secondary">
              Retour à l&apos;accueil
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
