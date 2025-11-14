import PortfolioProjects from "./PortfolioProjects";
import JoinJourney from "@/components/JoinJourney";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Kakka",
  description:
    "Explore Kakka’s portfolio — a showcase of our best web projects, designs, and digital solutions crafted for clients across industries.",
};


export default function PortfolioPage() {
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
