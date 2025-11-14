import HeroSection from "./HeroSection";
import GrowthPartnerSection from "./GrowthPartnerSection";
import FeaturedProjects from "./FeaturedProjects";
import WhyChooseSection from "./WhyChooseSection";
import TestimonialsSection from "./Testimonials";
import JoinJourney from "@/components/JoinJourney";
import Loader from "@/components/ui/loader";

export default function HomePage() {
  return (
    <div>
      <Loader />
      <HeroSection />
      <GrowthPartnerSection />
      <FeaturedProjects />
      <WhyChooseSection />
      <TestimonialsSection />
      <JoinJourney />

    </div>
  );
}

