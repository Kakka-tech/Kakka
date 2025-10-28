"use client";

import React from "react";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    year: "2024",
    description: "Establish core team and build initial client portfolio",
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    year: "2025",
    description: "Scale operations and expand service offerings",
  },
  {
    phase: "Phase 3",
    title: "Innovation",
    year: "2026",
    description: "Launch proprietary tools and platforms",
  },
  {
    phase: "Phase 4",
    title: "Global Reach",
    year: "2027",
    description: "Launch proprietary tools and platforms",
  },
  {
    phase: "Phase 5",
    title: "Industry Leader",
    year: "2028",
    description: "Become the go-to agency for enterprise solutions",
  },
];

export default function LongTermVision() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Long-Term Vision</h2>
          <p className="text-gray-500 mt-2">
            Our roadmap to becoming the industry&apos;s most trusted growth
            partner
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((item, index) => (
            <article
              key={index}
              className="border border-gray-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div
                className="
                  inline-block px-3 py-1 text-sm font-normal rounded-full mb-3
                  text-[#4758E0]
                  bg-[#EDEFFE]
                  shadow-[0px_13px_32px_0px_#C8CEFC80]
                "
              >
                {item.phase}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>

              <p className="text-[#43B75D] font-bold mb-2">{item.year}</p>

              <p className="text-gray-500 text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
