"use client";

import React from "react";
import Button from "../Button";

interface JoinJourneyProps {
  /** Section heading */
  title?: string;
  /** Supporting description text */
  description?: string;
  /** Button text */
  buttonText?: string;
  /** Optional click handler for the button */
  onButtonClick?: () => void;
  /** Optional className override for custom layouts */
  className?: string;
}

export default function JoinJourney({
  title = "Join Our Journey",
  description = "Transform your business with cutting-edge digital solutions that drive real results. We don't just build websites—we architect experiences that convert, engage, and scale.",
  buttonText = "Start your project",
  className = "",
}: JoinJourneyProps) {
  return (
    <section
      className={`w-full flex justify-center py-20 lg:px-20 md:px-15 px-6 bg-transparent ${className}`}
    >
      <div
        className="w-full max-w-[1350px] bg-gradient-to-r from-[#4758E0] to-[#27307A]
                   rounded-[20px] text-center text-white flex flex-col items-center
                   justify-center gap-4 px-10 py-14 shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          {title}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed">
          {description}
        </p>

        <Button
          onClick={() =>
            window.open("https://calendly.com/kakka-tech-co/30min", "_blank")
          }
          className="mt-4 px-6 py-3 text-sm sm:text-base font-medium bg-[#4758E0] text-white
    shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 rounded-full"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
