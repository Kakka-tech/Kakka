import PortfolioProjects from "./PortfolioProjects";
import JoinJourney from "@/components/JoinJourney";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Kakka Digital Agency",
  description:
    "Explore Kakka’s portfolio — a showcase of our best web projects, designs, and digital solutions crafted for clients across industries in Nigeria.",
  keywords: [
    "Kakka portfolio",
    "Web design portfolio Nigeria",
    "Digital agency projects",
    "Branding projects",
    "Creative agency work",
  ],
  alternates: {
    canonical: "https://kakkatech.com/portfolio",
  },
  openGraph: {
    title: "Portfolio — Kakka Digital Agency",
    description:
      "View Kakka's portfolio of web design, branding, and digital projects for businesses across multiple industries.",
    url: "https://kakkatech.com/portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kakka Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Kakka Digital Agency",
    description:
      "Explore our portfolio showcasing Kakka’s creative digital solutions and web projects for clients worldwide.",
    images: ["/og-image.png"],
  },
};

export default function PortfolioPage() {
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
            logo: "https://kakkatech.com/favicon.ppng",
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
        <PortfolioProjects />
      </section>

      <section className="mt-16 md:mt-20">
        <JoinJourney
          title="Ready to Start Your Business?"
          description="Let's discuss how we can help you achieve your business goals with a custom digital solution."
          buttonText="Get in Touch"
        />
      </section>
    </main>
  );
}
