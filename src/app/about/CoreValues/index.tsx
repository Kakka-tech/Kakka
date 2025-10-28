"use client";

import { Lightbulb, Target, Star, Users } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-6 h-6 text-[#4758E0]" />,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions",
  },
  {
    icon: <Target className="w-6 h-6 text-[#4758E0]" />,
    title: "Dedication",
    description: "Committed to your success every step of the way",
  },
  {
    icon: <Star className="w-6 h-6 text-[#4758E0]" />,
    title: "Excellence",
    description: "Delivering quality that exceeds expectations",
  },
  {
    icon: <Users className="w-6 h-6 text-[#4758E0]" />,
    title: "Collaboration",
    description: "Building partnerships that last",
  },
];

export default function CoreValues() {
  return (
    <section className="max-w-6xl text-left mx-auto px-6 mt-20">
      <h2 className="text-[2.5rem] font-bold text-[#131927] mb-3">
        Core Values
      </h2>
      <p className="text-[#394050] text-left text-lg max-w-2xl mb-12">
        To empower businesses with innovative digital solutions that drive
        sustainable growth and create meaningful connections with their
        audiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="border border-[#E0E0E0] rounded-xl p-6 text-left hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
          >
            <div className="mb-4">{value.icon}</div>
            <h3 className="font-semibold text-lg text-[#131927] mb-2">
              {value.title}
            </h3>
            <p className="text-[#555] text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
