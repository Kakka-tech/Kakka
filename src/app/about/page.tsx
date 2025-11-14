import AboutSection from "./AboutSection";
import CoreValues from "./CoreValues";
import OurTeam from "./OurTeam";
import JoinJourney from "@/components/JoinJourney";
import JourneyContent from "@/components/Journey/JourneyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kakka",
  description: "Learn more about the team and mission behind Kakka.",
};

export default function HomePage() {
  return (
    <div>
      <AboutSection />
      <CoreValues />
      <OurTeam />
      <JourneyContent />
      <JoinJourney
        title="Join Our Journey"
        description="Transform your business with cutting-edge digital solutions that drive real results. We don't just build websites—we architect experiences that convert, engage, and scale."
        buttonText="Start your project"
      />
    </div>
  );
}
