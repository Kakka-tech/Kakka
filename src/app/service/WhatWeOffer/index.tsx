"use client";

import { useRef, useState } from "react";
import SectionIntro from "@/components/SectionInfoProps";
import { Expand } from "lucide-react";

export default function WhatWeOffer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const smallVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const handleExpand = () => {
    if (smallVideoRef.current) smallVideoRef.current.pause();
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    if (smallVideoRef.current) smallVideoRef.current.play();
  };

  return (
    <section className="max-w-6xl mx-auto px-6">
      <SectionIntro
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored to your unique business needs. We combine strategy, design, and technology to deliver exceptional results."
        className="mb-20 fade-up"
      />

      <div className="flex flex-col md:flex-row items-center gap-10 transition-all duration-500">
        <div className="flex-1 text-left fade-up delay-3">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#131927] mb-4">
            What We Offer
          </h3>

          <p className="text-[#394050] text-sm sm:text-base leading-relaxed mb-4">
            At KAKKA, we provide more than just digital services—we deliver
            transformation. Our offerings are built to empower brands with the
            tools, strategies, and experiences they need to thrive in the modern
            digital landscape.
          </p>

          <p className="text-[#394050] text-sm sm:text-base leading-relaxed mb-4">
            From stunning web design and seamless development to data-driven
            marketing and brand strategy, every solution is crafted to achieve
            real, measurable impact.
          </p>

          <p className="text-[#394050] text-sm sm:text-base leading-relaxed">
            Whether you are a startup seeking a strong online foundation or an
            established business aiming to scale, we combine creativity,
            technology, and strategy to bring your vision to life and position
            your brand for lasting success.
          </p>
        </div>

        <div className="flex-1 w-full fade-up delay-1">
          <div
            className="w-full h-[220px] md:h-[260px] relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer group"
            onClick={handleExpand}
          >
            <video
              ref={smallVideoRef}
              src="/videos/offer.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
              <div className="w-16 h-16 bg-[#131927] rounded-full flex items-center justify-center">
                <Expand className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-black/60 transition-all duration-300"
          onClick={handleClose}
        >
          <div
            className="relative w-[95%] max-w-[1000px] aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src="/videos/offer.mp4"
              controls
              autoPlay
              playsInline
              controlsList="nodownload"
              className="w-full h-full object-cover rounded-2xl"
            />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white/80 text-black px-3 py-1.5 rounded-full text-sm font-medium shadow-md hover:bg-white transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
