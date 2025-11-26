import JoinJourney from "@/components/JoinJourney";
import SectionIntro from "@/components/SectionInfoProps";
import JourneyContent from "@/components/Journey/JourneyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Journey — Kakka Digital Agency",
  description:
    "Explore Kakka’s journey — how we started, what drives us, and the milestones that shaped our growth as a modern digital agency in Nigeria.",
  keywords: [
    "Kakka journey",
    "Digital agency Nigeria",
    "Web design agency history",
    "Creative agency growth",
    "Kakka milestones",
  ],
  alternates: {
    canonical: "https://kakkatech.com/journey",
  },
  openGraph: {
    title: "Our Journey — Kakka Digital Agency",
    description:
      "Follow Kakka's story from foundation to becoming a modern digital agency. Learn about our milestones, values, and team.",
    url: "https://kakkatech.com/journey",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kakka Journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Journey — Kakka Digital Agency",
    description:
      "Discover Kakka’s growth story, milestones, and vision for delivering innovative digital solutions.",
    images: ["/og-image.jpg"],
  },
};

export default function JourneyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Kakka",
            url: "https://kakkatech.com",
            logo: "https://kakkatech.com/logo.png",
            description:
              "Kakka — Creative digital solutions for modern businesses, specializing in web design, branding, and digital strategy.",
            sameAs: [
              "https://www.facebook.com/kakka.tech",
              "https://twitter.com/kakka.tech",
              "https://www.linkedin.com/company/kakka-technologies",
              "https://instagram.com/kakka.tech",
            ],
          }),
        }}
      />

      <main>
        <SectionIntro
          title="Our Growth Journey"
          subtitle="A transparent roadmap of our ambitious vision to become the world's leading digital growth agency. Follow our journey from foundation to industry leadership."
          className="mb-16 md:mb-20 max-w-5xl mx-auto"
        />

        <JourneyContent />

        <JoinJourney
          title="Join Us on This Journey"
          description="Whether you're a client, partner, or future team member—there's a place for you in our growth story."
          buttonText="Start a Project"
          className="mt-16 md:mt-20"
        />
      </main>
    </>
  );
}
