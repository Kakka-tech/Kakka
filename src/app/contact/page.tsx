import SectionIntro from "@/components/SectionInfoProps";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Contact Kakka — Digital Agency in Nigeria",
  description:
    "Get in touch with Kakka Technologies. Let's discuss your project and explore how we can help transform your business with innovative web design, branding, and digital solutions.",
  keywords: [
    "Kakka contact",
    "Digital agency Nigeria",
    "Web design inquiry",
    "Branding agency Nigeria",
    "Creative agency contact",
  ],
  alternates: {
    canonical: "https://kakkatech.com/contact",
  },
  openGraph: {
    title: "Contact Kakka — Creative Digital Solutions",
    description:
      "Reach out to Kakka Technologies for your web design, branding, and digital marketing projects.",
    url: "https://kakkatech.com/contact",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Kakka Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kakka — Creative Digital Agency",
    description:
      "Get in touch with Kakka Technologies to discuss your project and explore how we can help grow your business digitally.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="relative py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Kakka",
            url: "https://kakkatech.com",
            logo: "https://kakkatech.com/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+2347030085246",
                contactType: "customer support",
                email: "kakka.tech.co@gmail.com",
              },
            ],
            sameAs: [
              "https://www.facebook.com/kakka.tech",
              "https://twitter.com/kakka.tech",
              "https://www.linkedin.com/company/kakka-technologies",
              "https://instagram.com/kakka.tech",
            ],
          }),
        }}
      />

      <SectionIntro
        title="Get in Touch"
        subtitle="Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals."
        className="mb-16 md:mb-20 max-w-5xl mx-auto"
      />

      <main className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="flex-1 w-full lg:max-w-md">
            <section aria-labelledby="contact-info" className="mb-10">
              <h2
                id="contact-info"
                className="text-3xl md:text-4xl font-bold text-[#131927]"
              >
                Let&apos;s Talk
              </h2>
              <p className="text-lg text-[#394050] leading-relaxed mt-2">
                Whether you have a detailed project plan or just an idea, we&apos;re here to help bring your vision to life. Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </section>

            <section aria-labelledby="contact-details" className="flex flex-col gap-8">
              <h3 id="contact-details" className="sr-only">
                Contact Details
              </h3>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#E3F5E7]">
                  <Mail size={24} className="text-[#43B75D]" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#131927]">Email Us</h4>
                  <a
                    href="mailto:kakka.tech.co@gmail.com"
                    className="text-base text-[#4D5461] hover:underline"
                  >
                    contact@kakkatech.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#EDEFFE]">
                  <Phone size={24} className="text-[#4758E0]" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#131927]">Call Us</h4>
                  <span className="text-base text-[#4D5461]">
                    +(234) 703 008 5246
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#E3F5E7]">
                  <MapPin size={24} className="text-[#43B75D]" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#131927]">Remote First</h4>
                  <p className="text-base text-[#4D5461]">Working with clients worldwide</p>
                </div>
              </div>
            </section>
          </div>

          <ContactForm />
        </div>
      </main>

      <a
        href="https://wa.me/2348054666781"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 animate-bounce-huge bounce-delay-3"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={32} className="text-white" />
      </a>
    </div>
  );
}
