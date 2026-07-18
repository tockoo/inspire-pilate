import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section spacing="lg" className="min-h-[70vh] bg-cream pt-40">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-4">Erreur 404</p>
          <h1 className="font-serif text-4xl text-umber md:text-5xl">
            Cette page semble introuvable.
          </h1>
          <p className="prose-soft mt-6">
            Le lien a peut-être changé. Revenez à l&apos;accueil pour retrouver
            votre chemin.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/" variant="primary">
              Retour à l&apos;accueil
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
