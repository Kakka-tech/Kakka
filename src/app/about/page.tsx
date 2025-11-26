import AboutSection from "./AboutSection";
import CoreValues from "./CoreValues";
import OurTeam from "./OurTeam";
import JoinJourney from "@/components/JoinJourney";
import JourneyContent from "@/components/Journey/JourneyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kakka — Creative Digital Agency in Nigeria",
  description:
    "Discover Kakka’s mission, team, and values. We help businesses grow with modern web design, branding, and digital solutions.",
  keywords: [
    "Kakka",
    "Digital agency Nigeria",
    "Web design agency",
    "Branding agency",
    "Creative agency",
    "Website developers Nigeria",
    "About Kakka",
  ],
  alternates: {
    canonical: "https://kakkatech.com/about",
  },
  openGraph: {
    title: "About Kakka — Your Creative Digital Partner",
    description:
      "Learn about Kakka’s story, team, and mission. We help businesses grow with modern digital solutions.",
    url: "https://kakkatech.com/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Kakka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kakka — Creative Digital Agency",
    description:
      "Meet the team and mission behind Kakka, your modern digital partner for web design, branding, and growth.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Kakka",
            url: "https://kakkatech.com/about",
            logo: "https://kakkatech.com/logo.png",
            description:
              "Kakka — Creative digital solutions for modern businesses, specializing in web design, branding, and digital strategy.",
            sameAs: [
              "https://www.facebook.com/kakka.tech",
              "https://twitter.com/kakka.tech",
              "https://www.linkedin.com/company/kakkatechnologies",
              "https://instagram.com/kakka.tech",
            ],
          }),
        }}
      />

      <main>
        <AboutSection />
        <CoreValues />
        <OurTeam />
        <JourneyContent />
        <JoinJourney
          title="Join Our Journey"
          description="Transform your business with cutting-edge digital solutions that drive real results. We don't just build websites—we architect experiences that convert, engage, and scale."
          buttonText="Start your project"
        />
      </main>
    </>
  );
}
