"use client";

import Image from "next/image";
import Button from "@/components/Button";

export default function FeaturedProjects() {
  const projects = [
    {
      imageSrc: "/images/FintechPlatform.png",
      category: "Web Application",
      title: "Fintech Platform",
      description:
        "A comprehensive financial management platform with real-time analytics and automated reporting for businesses.",
      stat: "300% User Growth",
      statColor: "text-[#43B75D]",
    },
    {
      imageSrc: "/images/LuxCommerce.png",
      category: "E-Commerce",
      title: "Lux Commerce - Premium Retail",
      description:
        "A comprehensive financial management platform with real-time analytics and automated reporting for e-commerce stores.",
      stat: "2M+ Revenue Generated",
      statColor: "text-[#43B75D]",
    },
    {
      imageSrc: "/images/HealthPortal.png",
      category: "Health Care",
      title: "Health Portal Tele Medicine",
      description:
        "A comprehensive financial management platform with real-time analytics and automated reporting for healthcare providers.",
      stat: "50k Patients onboarded",
      statColor: "text-[#43B75D]",
    },
  ];

  return (
    <section className="py-16 bg-[#4758E0] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-blue-100 mb-12 max-w-xl">
          See how we’ve helped businesses transform their digital presence and
          achieve remarkable growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white text-[#131927] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>

              <div className="p-5">
                <p className="text-base font-semibold text-[#43B75D] mb-2 tracking-wide">
                  {project.category}
                </p>

                <h3 className="text-lg font-semibold mb-2 truncate">
                  {project.title}
                </h3>

                <p className="text-[#131927] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className={`text-sm font-semibold ${project.statColor}`}>
                  {project.stat}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-12">
          <Button
            className="bg-transparent border border-white text-[#0B2EFF] font-semibold px-6 py-3 hover:bg-blue-50 hover:text-black transition-colors"
            onClick={() =>
              window.open("https://calendly.com/kakka-tech-co/30min", "_blank")
            }
          >
            Start your project
          </Button>
        </div>
      </div>
    </section>
  );
}
