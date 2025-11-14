"use client";

import React from "react";
import Button from "../Button";

interface JoinJourneyProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function JoinJourney({
  title = "Ready to Build Your Growth Engine",
  description = "Let's create something extraordinary together",
  buttonText = "Get In Touch",
  className = "",
}: JoinJourneyProps) {
  return (
    <section className={`w-full flex justify-center py-20 lg:px-16 px-6 md:px-10 ${className}`}>
      <div className="w-full max-w-[1350px] relative rounded-[20px] overflow-hidden join-journey-bg">
        <div className="absolute inset-0 bg-[#4758E0]/80"></div>
        <div className="relative z-10 text-white text-center px-6 py-20 flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
          <Button
            onClick={() =>
              window.open("https://calendly.com/kakka-tech-co/30min", "_blank")
            }
            className="mt-4 px-6 py-3 text-sm sm:text-base font-medium"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
