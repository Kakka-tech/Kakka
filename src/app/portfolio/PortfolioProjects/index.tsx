"use client";

import Image from "next/image";
import SectionIntro from "@/components/SectionInfoProps";
import { useEffect, useRef, useState } from "react";

interface PortfolioItem {
  category: string;
  title: string;
  description: string;
  metric: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    category: "Web Application",
    title: "Fintech Platform",
    description:
      "A comprehensive financial management platform with real-time analytics and automated reporting for better decision-making.",
    metric: "300% User Growth",
    image: "/images/FintechPlatform.png",
  },
  {
    category: "E-Commerce",
    title: "Lux Commerce – Premium Storefront",
    description:
      "An advanced e-commerce platform designed for luxury brands, integrating seamless payment systems and personalized shopping experiences.",
    metric: "2M+ Revenue Generated",
    image: "/images/LuxCommerce.png",
  },
  {
    category: "Health Care",
    title: "Health Portal Tele Medicine",
    description:
      "A secure telemedicine platform enabling real-time consultations, patient management, and data-driven healthcare insights.",
    metric: "50k Patients Onboarded",
    image: "/images/HealthPortal.png",
  },
];

export default function PortfolioProjects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-6xl mx-auto px-6">
      <SectionIntro
        title="Our Portfolio"
        subtitle="Explore our collection of successful projects that showcase our expertise in delivering high-quality digital solutions that drive real business results."
      />

      <div className="grid md:grid-cols-3 gap-8 py-20">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden
              ${inView ? `animate-slide-up fade-delay-${index + 1}` : "opacity-0 translate-y-6"}`}
          >
            <div className="relative w-full h-52">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-left">
              <p className="text-sm text-[#43b75d] font-semibold mb-1">
                {item.category}
              </p>
              <h3 className="text-lg font-semibold text-[#131927] mb-2 truncate">
                {item.title}
              </h3>
              <p className="text-[#131927] text-sm leading-relaxed mb-3">
                {item.description}
              </p>
              <p className="text-[#43b75d] font-semibold text-sm">{item.metric}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
