import WhatWeOffer from "./WhatWeOffer";
import ServicesOverview from "./ServicesOverview";
import JoinJourney from "@/components/JoinJourney";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service | Kakka",
  description:
    "Explore the premium digital services offered by Kakka — Web Development, UI/UX Design, Branding, and Growth Strategy built for modern businesses.",
};

export default function HomePage() {
  return (
    <div>
      <WhatWeOffer />
      <ServicesOverview />
      <JoinJourney
        title="Need a Custom Solution?"
        description="Every business is unique. Let's discuss your specific needs and create a tailored solution that drives results."
        buttonText="Schedule a consultation"
      />
    </div>
  );
}
