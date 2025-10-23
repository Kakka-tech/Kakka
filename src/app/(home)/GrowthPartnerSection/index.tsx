"use client";

import { Code, Layout, TrendingUp, Gauge } from "lucide-react";

export default function GrowthPartnerSection() {
  const services = [
    {
      icon: <Code className="h-[25.33px] w-[25.33px] text-indigo-500 mb-4" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technology.",
    },
    {
      icon: <Layout className="h-[25.33px] w-[25.33px] text-indigo-500 mb-4" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that users love and convert.",
    },
    {
      icon: <TrendingUp className="h-[25.33px] w-[25.33px] text-indigo-500 mb-4" />,
      title: "Growth Strategy",
      description:
        "Data-driven strategies that scale your business exponentially.",
    },
    {
      icon: <Gauge className="h-[25.33px] w-[25.33px] text-indigo-500 mb-4" />,
      title: "Performance",
      description:
        "Lightning-fast solutions optimized for maximum impact.",
    },
  ];

  return (
    <section className="py-16 bg-white text-[#131927]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Growth Partner</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We combine strategic thinking with technical excellence to deliver
          solutions that don’t just meet expectations—they exceed them.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 text-left"
            >
              <div className="flex flex-col">
                <div className="mb-0">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-[#131927] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
