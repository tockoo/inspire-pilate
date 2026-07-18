import { Hero } from "@/components/sections/Hero";
import { StudioIntro } from "@/components/sections/StudioIntro";
import { CoursesOverview } from "@/components/sections/CoursesOverview";
import { RetreatHighlight } from "@/components/sections/RetreatHighlight";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StudioIntro />
      <CoursesOverview />
      <RetreatHighlight />
      <PricingPreview />
      <Testimonials />
      <PracticalInfo />
      <FinalCta />
    </>
  );
}
