"use client";

import SectionIntro from "@/components/SectionInfoProps";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 text-center">
      <SectionIntro
        title="About Kakka"
        subtitle="We're not just another agency. We're your growth partner, committed to transforming ambitious visions into market-leading digital experiences."
      />

      <div className="mt-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        <div className="flex-1 text-left">
          <h3 className="text-2xl sm:text-3xl md:text-[2.5rem] font-semibold text-[#131927] mb-3">
            Our Story
          </h3>

          <p className="text-[#394050] text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Founded in 2025, KAKKA emerged from a simple belief: businesses
            deserve digital solutions that don’t just look good—they perform
            exceptionally.
          </p>

          <p className="text-[#394050] text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Our team of seasoned developers, designers, and strategists came
            together with a shared mission: to build growth engines that
            transform businesses and make lasting impact.
          </p>

          <p className="text-[#394050] text-sm sm:text-base md:text-lg leading-relaxed">
            Today, we’re proud to partner with innovative companies across
            industries, helping them achieve measurable growth through
            cutting-edge digital solutions.
          </p>
        </div>

        <div className="flex-1">
          <Image
            src="/images/OurStory.jpg"
            alt="Our story image"
            width={500}
            height={500}
            className="w-full h-[220px] sm:h-[260px] lg:h-[340px] object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="text-left max-w-2xl px-4 sm:px-8 md:px-12">
          <h3 className="text-2xl sm:text-3xl md:text-[2.5rem] font-semibold text-[#131927] mb-3">
            Our Mission
          </h3>

          <p className="text-[#394050] text-sm sm:text-base md:text-lg leading-relaxed">
            To empower businesses with innovative digital solutions that drive
            sustainable growth and create meaningful connections with their
            audiences.
          </p>
        </div>
      </div>
    </section>
  );
}
