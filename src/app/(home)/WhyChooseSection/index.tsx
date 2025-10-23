"use client";

import { Users, Star, Gauge } from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6 text-[#4758E0]" />,
    title: "Expert Team",
    description: "Seasoned professionals with decades of combined experience",
  },
  {
    icon: <Star className="w-6 h-6 text-[#28A745]" />,
    title: "Proven Result",
    description: "Track record of delivering measurable business growth",
  },
  {
    icon: <Gauge className="w-6 h-6 text-[#4758E0]" />,
    title: "Fast Delivery",
    description: "Agile methodology ensures rapid, iterative development",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#131927] mb-10 text-left">
        Why Choose Kakka?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 p-6 border border-[#E0E0E0] rounded-2xl hover:shadow-[0_8px_20px_rgba(71,88,224,0.08)] hover:border-[#4758E0]/30 transition-all duration-300"
          >
            <div>{feature.icon}</div>
            <h3 className="text-lg font-semibold text-[#131927]">
              {feature.title}
            </h3>
            <p className="text-sm text-[#394050] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
