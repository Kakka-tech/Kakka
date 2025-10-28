import PortfolioProjects from "./PortfolioProjects";
import JoinJourney from "@/components/JoinJourney";

export default function HomePage() {
  return (
    <div>
      <PortfolioProjects />
      <JoinJourney
              title="Ready to Start Your Business?"
              description="Let's discuss how we can help you achieve your business goals with a custom digital solution."
              buttonText="Get in Touch"
            />
    </div>
  );
}
