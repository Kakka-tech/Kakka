"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function GrowthPartnerSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technology.",
      icon: "/icons/webdev.png",
    },
    {
      title: "UI/UX Designer",
      description:
        "Beautiful, intuitive interfaces that users love and convert.",
      icon: "/icons/uiux.png",
    },
    {
      title: "Growth Strategy",
      description:
        "Data-driven strategies that scale your business exponentially.",
      icon: "/icons/growth.png",
    },
    {
      title: "Performance",
      description:
        "Lightning-fast solutions optimized for maximum impact.",
      icon: "/icons/performance.png",
    },
  ];

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
    <section
      ref={sectionRef}
      className="w-full px-[127px] py-20 flex flex-col gap-10 max-md:px-6"
    >
      <div>
        <h2 className="text-[28px] font-bold text-[#131927] font-[Manrope]">
          Your Growth Partner
        </h2>
        <p className="mt-2 text-[15px] text-[#394050] max-w-2xl">
          We combine strategic thinking with technical excellence to deliver
          solutions that don’t just meet expectations—they exceed them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-3xl p-2 flex justify-center items-center transition-all duration-500
              ${inView ? (idx < 2 ? "animate-slide-left" : "animate-slide-right") : "opacity-0 translate-y-6"} 
              ${inView ? `fade-delay-${idx + 1}` : ""}`}
          >
            <div
              className="relative rounded-2xl p-10 flex flex-col justify-end h-[400px] w-full 
                         overflow-hidden border-none
                         bg-[linear-gradient(167deg,rgba(239,239,239,0)_32.05%,#DFE4FA_93.44%)]
                         backdrop-blur-md 
                         hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] 
                         transition-all duration-300"
            >
              <div className="absolute inset-0 pointer-events-none" />

              <div className="flex justify-center mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={220}
                  height={220}
                  className="object-contain pointer-events-none"
                />
              </div>

              <h3 className="font-semibold text-[#131927] text-[18px]">
                {service.title}
              </h3>
              <p className="text-[15px] text-[#394050] mt-1 leading-relaxed max-w-[90%]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
