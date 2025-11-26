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
      <h1 className="sr-only">
        Kakka — Website Design, Branding & Digital Growth Agency in Nigeria
      </h1>

      <HeroSection />
      <GrowthPartnerSection />
      <FeaturedProjects />
      <WhyChooseSection />
      <TestimonialsSection />
      <JoinJourney />
    </div>
  );
}


