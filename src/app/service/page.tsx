import WhatWeOffer from "./WhatWeOffer";
import ServicesOverview from "./ServicesOverview";
import JoinJourney from "@/components/JoinJourney";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Kakka Digital Agency",
  description:
    "Explore the premium digital services offered by Kakka — Web Development, UI/UX Design, Branding, and Growth Strategy built for modern businesses in Nigeria.",
  keywords: [
    "Kakka services",
    "Digital agency services",
    "Web development Nigeria",
    "UI/UX design agency",
    "Branding services",
    "Growth strategy solutions",
  ],
  alternates: {
    canonical: "https://kakkatech.com/services",
  },
  openGraph: {
    title: "Services — Kakka Digital Agency",
    description:
      "Discover Kakka's digital services: Web Development, UI/UX Design, Branding, and Growth Strategy designed to help businesses thrive.",
    url: "https://kakkatech.com/services",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kakka Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Kakka Digital Agency",
    description:
      "Explore Kakka’s premium services, including Web Development, UI/UX Design, Branding, and Growth Strategy for modern businesses.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Kakka Technologies",
            url: "https://kakkatech.com",
            logo: "https://kakkatech.com/favicon.png",
            sameAs: [
              "https://www.facebook.com/kakka.tech",
              "https://twitter.com/kakka.tech",
              "https://www.linkedin.com/company/kakka-technologies",
              "https://instagram.com/kakka.tech",
            ],
          }),
        }}
      />

      <section>
        <WhatWeOffer />
      </section>

      <section className="mt-16 md:mt-20">
        <ServicesOverview />
      </section>

      <section className="mt-16 md:mt-20">
        <JoinJourney
          title="Need a Custom Solution?"
          description="Every business is unique. Let's discuss your specific needs and create a tailored solution that drives results."
          buttonText="Schedule a consultation"
        />
      </section>
    </main>
  );
}
