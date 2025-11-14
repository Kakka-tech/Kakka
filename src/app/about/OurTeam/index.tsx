"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Odinaka Ezurike",
    role: "Founder",
    image: "/images/odinaka.jpg",
  },
  {
    name: "Emmanuel Samalia",
    role: "Co Founder",
    image: "/images/emmanuel.png",
  },
  {
    name: "David Emmanuel",
    role: "Co Founder",
    image: "/images/david.jpg",
  },
];

export default function OurTeam() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

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
      className="py-16 bg-white w-full px-[127px] flex flex-col gap-10 max-md:px-6"
    >
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-[#131927] mb-2 font-[Manrope]">
          Meet Our Team
        </h2>
        <p className="text-[#394050] mb-10">
          The brilliant minds behind Kakka&apos;s success
        </p>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-[220px] group cursor-pointer
                transition-all duration-500
                ${
                  inView
                    ? `opacity-100 translate-y-0 fade-delay-${index + 1}`
                    : "opacity-0 translate-y-6"
                }`}
            >
              <div className="w-[220px] h-[220px] overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={220}
                  height={220}
                  className="object-cover w-full h-full pointer-events-none"
                />
              </div>

              <div className="w-full mt-3 text-left">
                <h3 className="font-semibold text-[#131927] group-hover:text-[#4758E0] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#394050] text-sm -mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
