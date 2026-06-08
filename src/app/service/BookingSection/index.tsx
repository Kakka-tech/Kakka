"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "48h", label: "Average Response" },
  { value: "100%", label: "Free Consultation" },
  { value: "30min", label: "Discovery Call" },
];

export default function BookingSection() {
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
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleBook = () => {
    window.open(
      "https://calendly.com/kakka-tech-co/30min",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 py-24 md:px-25 overflow-hidden"
    >
      <style>{`
        @keyframes bk-float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-14px) rotate(6deg); }
        }
        @keyframes bk-float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(-5deg); }
        }
        @keyframes bk-float-3 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes bk-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bk-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }
        @keyframes bk-dash {
          from { stroke-dashoffset: 200; }
          to   { stroke-dashoffset: 0; }
        }
        .bk-float-1 { animation: bk-float-1 5s ease-in-out infinite; }
        .bk-float-2 { animation: bk-float-2 4s ease-in-out infinite 0.8s; }
        .bk-float-3 { animation: bk-float-3 6s ease-in-out infinite 0.4s; }
        .bk-spin    { animation: bk-spin-slow 12s linear infinite; transform-origin: center; }
        .bk-pulse   { animation: bk-pulse 2.5s ease-in-out infinite; }
        .bk-dash    { stroke-dasharray: 200; animation: bk-dash 1.4s ease-out both; }
      `}</style>

      <div
        className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          background:
            "linear-gradient(135deg, #131927 0%, #1e2a45 50%, #2d1f5e 100%)",
          boxShadow:
            "0 40px 80px rgba(19,25,39,0.25), 0 8px 32px rgba(71,88,224,0.15)",
        }}
      >
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #4758E0, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #D946EF, transparent 70%)",
          }}
        />

        <div className="absolute top-10 right-16 opacity-20 bk-float-1 pointer-events-none hidden md:block">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect
              x="4"
              y="4"
              width="40"
              height="40"
              rx="10"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="6 3"
            />
          </svg>
        </div>
        <div className="absolute bottom-16 right-32 opacity-15 bk-float-2 pointer-events-none hidden md:block">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle
              cx="18"
              cy="18"
              r="14"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-10 bk-spin pointer-events-none hidden lg:block">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle
              cx="60"
              cy="60"
              r="55"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="8 6"
            />
            <circle
              cx="60"
              cy="60"
              r="40"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="5 5"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 px-10 py-16 md:px-16 md:py-20">
          <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center justify-center lg:justify-start gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-blue-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block bk-pulse" />
              Free consultation
            </span>

            <h2
              className="text-[36px] md:text-[44px] font-bold text-white leading-[1.1] tracking-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Let&apos;s Build
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #818CF8, #D946EF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Something Great
              </span>
            </h2>

            <p className="text-[15px] text-blue-100/80 leading-relaxed max-w-md mx-auto lg:mx-0">
              Ready to bring your project to life? Schedule a free 30-min
              consultation with our team to discuss your goals, challenges, and
              how we can help you grow.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-8 mt-2">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center lg:items-start gap-0.5"
                >
                  <span
                    className="text-[22px] font-bold text-white leading-none"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[11px] text-blue-300/80 font-medium tracking-wide">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex flex-col items-center gap-6 shrink-0 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div
              className="w-28 h-28 rounded-3xl flex items-center justify-center bk-float-3"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <style>{`
                  @keyframes cal-tick { from { stroke-dashoffset: 30; } to { stroke-dashoffset: 0; } }
                  .cal-check { stroke-dasharray: 30; animation: cal-tick 0.6s 0.8s ease-out both; }
                `}</style>
                <rect
                  x="6"
                  y="10"
                  width="44"
                  height="38"
                  rx="7"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <line
                  x1="6"
                  y1="20"
                  x2="50"
                  y2="20"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.4"
                />
                <line
                  x1="18"
                  y1="6"
                  x2="18"
                  y2="16"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <line
                  x1="38"
                  y1="6"
                  x2="38"
                  y2="16"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <circle cx="28" cy="34" r="8" fill="#4758E0" opacity="0.85" />
                <polyline
                  points="24,34 27,37 33,31"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className="cal-check"
                />
              </svg>
            </div>

            <button
              onClick={handleBook}
              className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-[15px] text-[#131927] overflow-hidden transition-all duration-300 hover:scale-105 active:scale-100"
              style={{
                background: "white",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(71,88,224,0.2)",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(71,88,224,0.08), transparent)",
                }}
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform duration-300 group-hover:rotate-12"
              >
                <rect
                  x="2"
                  y="3"
                  width="16"
                  height="14"
                  rx="3"
                  stroke="#4758E0"
                  strokeWidth="1.8"
                  fill="none"
                />
                <line
                  x1="2"
                  y1="8"
                  x2="18"
                  y2="8"
                  stroke="#4758E0"
                  strokeWidth="1.5"
                />
                <line
                  x1="6.5"
                  y1="1.5"
                  x2="6.5"
                  y2="6"
                  stroke="#4758E0"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1="13.5"
                  y1="1.5"
                  x2="13.5"
                  y2="6"
                  stroke="#4758E0"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="13" r="2.5" fill="#4758E0" opacity="0.8" />
              </svg>
              <span style={{ fontFamily: "Manrope, sans-serif" }}>
                Book a Discovery Call
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 5l4 3-4 3"
                  stroke="#131927"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <p className="text-[12px] text-blue-300/60 text-center">
              No commitment. 100% free. 30 minutes.
            </p>
          </div>
        </div>

        <div
          className="relative z-10 flex flex-wrap items-center justify-center gap-6 px-10 py-5 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {[
            "No credit card required",
            "Response within 24 hours",
            "Flexible scheduling",
          ].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-[12px] text-blue-200/60 font-medium"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="6"
                  stroke="#4758E0"
                  strokeWidth="1.2"
                  fill="#4758E020"
                />
                <path
                  d="M4.5 7l2 2 3-3"
                  stroke="#818CF8"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
