"use client";

import React from "react";

interface SectionIntroProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function SectionIntro({
  title = "About Kakka",
  subtitle = "We’re not just another agency. We’re your growth partner, committed to transforming ambitious visions into market-leading digital experiences.",
  className = "",
}: SectionIntroProps) {
  return (
    <div className={`px-6 text-center ${className}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131927] mb-4">
        {title}
      </h2>

      <p className="text-[#555] max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
