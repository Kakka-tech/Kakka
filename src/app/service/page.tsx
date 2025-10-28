import WhatWeOffer from "./WhatWeOffer";
import ServicesOverview from "./ServicesOverview";
import JoinJourney from "@/components/JoinJourney";

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
