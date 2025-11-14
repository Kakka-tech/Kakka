"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Armstrong Will",
    role: "CEO, Techflow",
    quote:
      "KAKKA transformed our vision into reality. Their expertise and dedication are unmatched.",
    image: "/images/avatars/micheal.jpg",
  },
  {
    name: "David Babatunde",
    role: "Founder, Growthlab",
    quote:
      "Working with KAKKA transformed our online presence completely.",
    image: "/images/avatars/babatunde.jpg",
  },
  {
    name: "Steven Strange",
    role: "CEO, Techflow",
    quote:
      "From branding to final launch, KAKKA guided us with expertise and clarity.",
    image: "/images/avatars/stephen.jpg",
  },
];


export default function TestimonialsSection() {
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
      className="py-16 px-6 md:px-12 max-w-6xl mx-auto overflow-hidden"
    >
      <h2
        className={`text-3xl font-bold text-[#131927] mb-10 text-left transition-all duration-700 ${
          inView ? "animate-fade-up" : "opacity-0 translate-y-6"
        }`}
      >
        Clients Testimonial
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 border border-[#E0E0E0] rounded-2xl bg-white transition-all duration-700 hover:shadow-[0_8px_20px_rgba(71,88,224,0.08)]
              ${
                inView
                  ? `fade-up-delay-${index + 1}`
                  : "opacity-0 translate-y-6"
              }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="object-cover w-full h-full pointer-events-none"
                />
              </div>

              <div>
                <h3 className="font-semibold text-[#131927]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#394050]">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-[#394050] text-sm leading-relaxed">
              “{testimonial.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
