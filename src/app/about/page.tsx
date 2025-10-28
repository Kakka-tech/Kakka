import AboutSection from "./AboutSection";
import CoreValues from "./CoreValues";
import OurTeam from "./OurTeam";
import LongTermVision from "./LongTermVision";
import JoinJourney from "@/components/JoinJourney";

export default function HomePage() {
  return (
    <div>
      <AboutSection />
      <CoreValues />
      <OurTeam />
      <LongTermVision />
      <JoinJourney
        title="Join Our Journey"
        description="Transform your business with cutting-edge digital solutions that drive real results. We don't just build websites—we architect experiences that convert, engage, and scale."
        buttonText="Start your project"
      />
    </div>
  );
}
