"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya Patel",
    role: "VP of Product, NovaBrand",
    quote:
      "The team at KAKKA brought a level of craft and performance optimization we'd never experienced before. Our site speed improved dramatically and user engagement soared.",
    image: "/images/avatars/micheal.jpg",
    score: 98,
    scoreLabel: "Performance Score",
    stars: 5,
  },
  {
    name: "Armstrong Will",
    role: "CEO, Techflow",
    quote:
      "KAKKA transformed our vision into reality. Their expertise and dedication are unmatched. We went from zero digital presence to a fully scalable platform in weeks.",
    image: "/images/avatars/micheal.jpg",
    score: 95,
    scoreLabel: "Client Satisfaction",
    stars: 5,
  },
  {
    name: "David Babatunde",
    role: "Founder, Growthlab",
    quote:
      "Working with KAKKA transformed our online presence completely. The attention to detail in both design and development exceeded every expectation we had.",
    image: "/images/avatars/babatunde.jpg",
    score: 97,
    scoreLabel: "Growth Score",
    stars: 5,
  },
  {
    name: "Steven Strange",
    role: "CTO, NexaCorp",
    quote:
      "From branding to final launch, KAKKA guided us with expertise and clarity. Their process is tight, their communication is excellent, and results speak for themselves.",
    image: "/images/avatars/stephen.jpg",
    score: 96,
    scoreLabel: "Delivery Score",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={i < count ? "#F59E0B" : "#E5E7EB"}
        >
          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.08L8 10.5l-3.71 1.95L5 8.42 2 5.5l4.15-.75L8 1z" />
        </svg>
      ))}
    </div>
  );
}

function ScoreBadge({ score, label }: { score: number; label: string }) {
  return (
    <div className="inline-flex flex-col items-center justify-center px-5 py-3 rounded-xl bg-[#ECEFFE] border border-[#C7CEFA] min-w-25">
      <span className="text-[22px] font-bold text-[#4758E0] leading-none">
        {score}/100
      </span>
      <span className="text-[11px] text-[#394050] mt-1 font-medium">
        {label}
      </span>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent((idx + total) % total);
        setAnimating(false);
      }, 220);
    },
    [animating, total],
  );

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const t = testimonials[current];

  const escapeQuotes = (s: string) => s.replace(/"/g, '&quot;');
  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 md:px-12 max-w-5xl mx-auto overflow-hidden"
    >
      <div
        className={`text-center mb-14 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2
          className="text-[34px] font-bold text-[#131927] tracking-tight"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          What Our Clients Say
        </h2>
        <p className="mt-3 text-[15px] text-[#394050] max-w-md mx-auto leading-relaxed">
          Real results from real partnerships. Hear how we&apos;ve helped businesses
          achieve extraordinary growth.
        </p>
      </div>

      <div
        className={`transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div
          className="relative rounded-3xl border border-[#E8EAF0] bg-white px-8 py-10 md:px-12 md:py-12"
          style={{ boxShadow: "0 4px 40px rgba(71,88,224,0.06)" }}
        >
          <svg
            className="absolute top-8 right-10 opacity-[0.07]"
            width="72"
            height="60"
            viewBox="0 0 72 60"
            fill="#4758E0"
          >
            <path d="M0 60V36C0 16.118 12.706 4.235 38.118 0L42 7.059C29.647 9.882 23.294 16.941 22.588 28.235H36V60H0ZM36 60V36C36 16.118 48.706 4.235 74.118 0L78 7.059C65.647 9.882 59.294 16.941 58.588 28.235H72V60H36Z" />
          </svg>

          <div
            className={`transition-all duration-220 ${
              animating ?
                "opacity-0 translate-x-2"
              : "opacity-100 translate-x-0"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
              <div className="flex flex-col gap-4 shrink-0">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#E8EAF0] shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full pointer-events-none"
                  />
                </div>

                <div>
                  <p
                    className="font-bold text-[#131927] text-[15px]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[13px] text-[#394050] mt-0.5">{t.role}</p>
                </div>

                <StarRating count={t.stars} />

                <ScoreBadge score={t.score} label={t.scoreLabel} />
              </div>

              <div className="flex items-center flex-1 min-h-40">
                <p
                  className="text-[18px] md:text-[20px] text-[#131927] leading-[1.65] font-medium"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${escapeQuotes(t.quote)}&rdquo;` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex items-center justify-between mt-8 transition-all duration-700 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: current === idx ? 28 : 8,
                height: 8,
                background: current === idx ? "#4758E0" : "#D1D5DB",
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-[#E0E3F0] flex items-center justify-center hover:bg-[#F5F6FF] hover:border-[#4758E0] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8l5 5"
                stroke="#131927"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-[#E0E3F0] flex items-center justify-center hover:bg-[#F5F6FF] hover:border-[#4758E0] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 3l5 5-5 5"
                stroke="#131927"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
