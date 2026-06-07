"use client";

import { useEffect, useRef, useState } from "react";

const WebDevIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>{`
      @keyframes blink-cursor {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }
      @keyframes type-line {
        from { width: 0; }
        to { width: 100%; }
      }
      .cursor { animation: blink-cursor 1s infinite; }
      .bracket-left { animation: bracket-pulse 2s ease-in-out infinite; }
      .bracket-right { animation: bracket-pulse 2s ease-in-out infinite 0.2s; }
      @keyframes bracket-pulse {
        0%, 100% { transform: translateX(0); opacity: 1; }
        50% { transform: translateX(-1.5px); opacity: 0.6; }
      }
    `}</style>
    <rect
      x="4"
      y="8"
      width="40"
      height="28"
      rx="5"
      stroke="#4F46E5"
      strokeWidth="2"
      fill="none"
    />
    <line x1="4" y1="16" x2="44" y2="16" stroke="#4F46E5" strokeWidth="1.5" />
    <circle cx="10" cy="12" r="1.5" fill="#4F46E5" opacity="0.4" />
    <circle cx="15" cy="12" r="1.5" fill="#4F46E5" opacity="0.4" />
    <circle cx="20" cy="12" r="1.5" fill="#4F46E5" opacity="0.4" />
    <text
      x="9"
      y="28"
      fontSize="9"
      fill="#4F46E5"
      fontFamily="monospace"
      fontWeight="700"
    >
      <tspan className="bracket-left">&lt;</tspan>
      <tspan opacity="0.8">/</tspan>
      <tspan className="bracket-right">&gt;</tspan>
    </text>
    <line
      x1="22"
      y1="23"
      x2="38"
      y2="23"
      stroke="#4F46E5"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.35"
    />
    <line
      x1="22"
      y1="27"
      x2="34"
      y2="27"
      stroke="#4F46E5"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.25"
    />
    <rect
      x="35"
      y="25"
      width="1.5"
      height="8"
      rx="0.75"
      fill="#4F46E5"
      className="cursor"
    />
    <line
      x1="16"
      y1="40"
      x2="32"
      y2="40"
      stroke="#4F46E5"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line x1="24" y1="36" x2="24" y2="40" stroke="#4F46E5" strokeWidth="2" />
  </svg>
);

const UIUXIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>{`
      @keyframes orbit-dot {
        from { transform: rotate(0deg) translateX(14px) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(14px) rotate(-360deg); }
      }
      @keyframes orbit-dot-rev {
        from { transform: rotate(0deg) translateX(10px) rotate(0deg); }
        to   { transform: rotate(-360deg) translateX(10px) rotate(360deg); }
      }
      @keyframes ping-ring {
        0%, 100% { r: 6; opacity: 0.12; }
        50% { r: 10; opacity: 0.22; }
      }
      .orbit1 { transform-origin: 24px 24px; animation: orbit-dot 3s linear infinite; }
      .orbit2 { transform-origin: 24px 24px; animation: orbit-dot-rev 4.5s linear infinite; }
      .ping { animation: ping-ring 2.5s ease-in-out infinite; }
    `}</style>
    <circle
      cx="24"
      cy="24"
      r="14"
      stroke="#D946EF"
      strokeWidth="1.5"
      strokeDasharray="4 3"
      opacity="0.4"
    />
    <circle
      cx="24"
      cy="24"
      r="8"
      stroke="#D946EF"
      strokeWidth="1.5"
      opacity="0.2"
    />
    <circle cx="24" cy="24" className="ping" r="6" fill="#D946EF" />
    <circle cx="24" cy="24" r="4" fill="#D946EF" opacity="0.18" />
    <circle cx="24" cy="24" r="2.5" fill="#D946EF" />
    <g className="orbit1">
      <circle cx="24" cy="10" r="3" fill="#D946EF" opacity="0.8" />
    </g>
    <g className="orbit2">
      <circle cx="24" cy="14" r="2" fill="#A855F7" opacity="0.7" />
    </g>
    <line
      x1="10"
      y1="24"
      x2="38"
      y2="24"
      stroke="#D946EF"
      strokeWidth="1"
      opacity="0.2"
    />
    <line
      x1="24"
      y1="10"
      x2="24"
      y2="38"
      stroke="#D946EF"
      strokeWidth="1"
      opacity="0.2"
    />
  </svg>
);

const GrowthIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>{`
      @keyframes rise-bar-1 { from { height: 0; y: 36; } to { height: 8; y: 28; } }
      @keyframes rise-bar-2 { from { height: 0; y: 36; } to { height: 14; y: 22; } }
      @keyframes rise-bar-3 { from { height: 0; y: 36; } to { height: 20; y: 16; } }
      @keyframes rise-bar-4 { from { height: 0; y: 36; } to { height: 26; y: 10; } }
      @keyframes draw-line { from { stroke-dashoffset: 120; } to { stroke-dashoffset: 0; } }
      @keyframes pop-dot { from { r: 0; } to { r: 2.5; } }
      .bar1 { animation: rise-bar-1 0.6s 0.1s ease-out both; }
      .bar2 { animation: rise-bar-2 0.6s 0.25s ease-out both; }
      .bar3 { animation: rise-bar-3 0.6s 0.4s ease-out both; }
      .bar4 { animation: rise-bar-4 0.6s 0.55s ease-out both; }
      .trend { stroke-dasharray: 120; animation: draw-line 1.2s 0.3s ease-out both; }
      .dot1 { animation: pop-dot 0.3s 0.7s ease-out both; }
      .dot2 { animation: pop-dot 0.3s 0.9s ease-out both; }
      .dot3 { animation: pop-dot 0.3s 1.1s ease-out both; }
    `}</style>
    <line
      x1="8"
      y1="36"
      x2="42"
      y2="36"
      stroke="#10B981"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.3"
    />
    <rect
      x="9"
      y="28"
      width="6"
      height="8"
      rx="1.5"
      fill="#10B981"
      opacity="0.2"
      className="bar1"
    />
    <rect
      x="18"
      y="22"
      width="6"
      height="14"
      rx="1.5"
      fill="#10B981"
      opacity="0.3"
      className="bar2"
    />
    <rect
      x="27"
      y="16"
      width="6"
      height="20"
      rx="1.5"
      fill="#10B981"
      opacity="0.4"
      className="bar3"
    />
    <rect
      x="36"
      y="10"
      width="6"
      height="26"
      rx="1.5"
      fill="#10B981"
      opacity="0.55"
      className="bar4"
    />
    <polyline
      points="12,29 21,21 30,15 39,9"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      className="trend"
    />
    <circle cx="12" cy="29" r="2.5" fill="#10B981" className="dot1" />
    <circle cx="21" cy="21" r="2.5" fill="#10B981" className="dot2" />
    <circle cx="30" cy="15" r="2.5" fill="#10B981" className="dot3" />
    <circle cx="39" cy="9" r="3.5" fill="#10B981" />
    <path
      d="M37 9 L39 7 L41 9"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const PerformanceIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>{`
      @keyframes spin-outer { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes spin-inner { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      @keyframes sweep-needle { 0% { transform: rotate(-60deg); } 60% { transform: rotate(50deg); } 100% { transform: rotate(30deg); } }
      @keyframes flash-bolt { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      .outer-ring { transform-origin: 24px 24px; animation: spin-outer 6s linear infinite; }
      .inner-ring { transform-origin: 24px 24px; animation: spin-inner 4s linear infinite; }
      .needle { transform-origin: 24px 28px; animation: sweep-needle 1.8s 0.3s ease-out both; }
      .bolt { animation: flash-bolt 1.5s ease-in-out infinite; }
    `}</style>
    <circle
      cx="24"
      cy="24"
      r="18"
      stroke="#F59E0B"
      strokeWidth="1.5"
      opacity="0.15"
    />
    <circle
      cx="24"
      cy="24"
      r="14"
      stroke="#F59E0B"
      strokeWidth="1.5"
      strokeDasharray="6 4"
      opacity="0.3"
      className="outer-ring"
    />
    <circle
      cx="24"
      cy="24"
      r="9"
      stroke="#F59E0B"
      strokeWidth="1"
      strokeDasharray="3 3"
      opacity="0.4"
      className="inner-ring"
    />
    <path
      d="M24 10 A14 14 0 0 1 38 24"
      stroke="#F59E0B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="24" r="3.5" fill="#F59E0B" />
    <circle cx="24" cy="24" r="1.5" fill="white" opacity="0.8" />
    <line
      x1="24"
      y1="24"
      x2="24"
      y2="12"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
      className="needle"
    />
    <path
      d="M22 21 L20 28 L24 25 L28 28 L26 21 Z"
      fill="#F59E0B"
      opacity="0.8"
      className="bolt"
    />
  </svg>
);

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technology.",
    icon: <WebDevIcon />,
    accent: "#4F46E5",
    tag: "Full-stack",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love and convert.",
    icon: <UIUXIcon />,
    accent: "#D946EF",
    tag: "Pixel-perfect",
  },
  {
    number: "03",
    title: "Growth Strategy",
    description:
      "Data-driven strategies that scale your business exponentially.",
    icon: <GrowthIcon />,
    accent: "#10B981",
    tag: "ROI-focused",
  },
  {
    number: "04",
    title: "Performance",
    description: "Lightning-fast solutions optimized for maximum impact.",
    icon: <PerformanceIcon />,
    accent: "#F59E0B",
    tag: "Optimized",
  },
];

export default function GrowthPartnerSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(services.length).fill(false),
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[idx] = true;
                return next;
              });
            }, idx * 100);
            obs.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-31.75 py-20 flex flex-col gap-14 max-md:px-6"
    >
      <div className="flex flex-col gap-3">
        <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#394050] opacity-70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] inline-block" />
          What we do
        </span>
        <h2
          className="text-[36px] font-bold text-[#131927] leading-[1.1] tracking-tight max-w-sm"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Your Growth
          <br />
          Partner
        </h2>
        <p className="text-[15px] text-[#394050] max-w-xl leading-relaxed">
          We combine strategic thinking with technical excellence to deliver
          solutions that don&apos;t just meet expectations—they exceed them.
        </p>
      </div>

      <div className="flex flex-col">
        {services.map((service, idx) => (
          <div
            key={idx}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            className={`
              group flex items-start gap-8 py-8 border-b border-[#E8EAF0]
              transition-all duration-500 ease-out
              ${visibleItems[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              ${idx === 0 ? "border-t border-[#E8EAF0]" : ""}
            `}
          >
            <span
              className="text-[11px] font-bold tracking-widest text-[#B0B5C3] mt-1 min-w-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {service.number}
            </span>

            <div
              className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{ background: `${service.accent}12` }}
            >
              {service.icon}
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <h3
                className="text-[18px] font-bold text-[#131927] tracking-tight"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-[14px] text-[#394050] leading-relaxed max-w-sm">
                {service.description}
              </p>
            </div>

            <span
              className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mt-1 self-start shrink-0"
              style={{
                color: service.accent,
                background: `${service.accent}12`,
              }}
            >
              {service.tag}
            </span>

            <span className="hidden md:flex items-center self-center opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 text-[#B0B5C3] shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 9h12M10 5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
