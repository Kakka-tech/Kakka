import JoinJourney from "@/components/JoinJourney";
import SectionIntro from "@/components/SectionInfoProps";
import JourneyContent from "@/components/Journey/JourneyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Journey | Kakka",
  description:
    "Explore Kakka’s journey — how we started, what drives us, and the milestones that shaped our growth as a modern digital agency.",
};

export default function JourneyPage() {
  return (
    <>
      <SectionIntro
        title="Our Growth Journey"
        subtitle="A transparent roadmap of our ambitious vision to become the world's leading digital growth agency. Follow our journey from foundation to industry leadership"
        className="mb-16 md:mb-20 max-w-5xl mx-auto"
      />

      <JourneyContent />

      <JoinJourney
        title="Join Us on This Journey"
        description="Whether you're a client, partner, or future team member—there's a place for you in our growth story."
        buttonText="Start a Project"
        className="mt-16 md:mt-20"
      />
    </>
  );
}
