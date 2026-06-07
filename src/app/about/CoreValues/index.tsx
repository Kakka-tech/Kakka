"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    title: "Innovation",
    description:
      "Pushing boundaries with cutting-edge solutions that keep you ahead of the curve.",
    accent: "#4758E0",
    light: "#EEF0FC",
    icon: (color: string) => (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="26"
          cy="20"
          r="10"
          stroke={color}
          strokeWidth="2"
          fill="none"
          className="icon-bulb-circle"
        />
        <path
          d="M20 30c0 3 1.5 5 3 6h6c1.5-1 3-3 3-6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <line
          x1="23"
          y1="36"
          x2="29"
          y2="36"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="39"
          x2="28"
          y2="39"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="7"
          x2="26"
          y2="4"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          className="icon-ray"
        />
        <line
          x1="35.5"
          y1="10.5"
          x2="37.6"
          y2="8.4"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          className="icon-ray"
        />
        <line
          x1="39"
          y1="20"
          x2="42"
          y2="20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          className="icon-ray"
        />
        <line
          x1="16.5"
          y1="10.5"
          x2="14.4"
          y2="8.4"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          className="icon-ray"
        />
        <line
          x1="13"
          y1="20"
          x2="10"
          y2="20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          className="icon-ray"
        />
      </svg>
    ),
  },
  {
    title: "Dedication",
    description:
      "Committed to your success every step of the way, from brief to launch and beyond.",
    accent: "#3B82F6",
    light: "#EFF6FF",
    icon: (color: string) => (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 44S10 34 10 22a10 10 0 0 1 16-8 10 10 0 0 1 16 8c0 12-16 22-16 22z"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
          className="icon-heart"
        />
        <path
          d="M20 22a6 6 0 0 1 6-4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "Delivering quality that exceeds expectations — every detail, every time.",
    accent: "#8B5CF6",
    light: "#F3F0FF",
    icon: (color: string) => (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="26,6 31,19 45,19 34,28 38,42 26,33 14,42 18,28 7,19 21,19"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
          className="icon-star"
        />
        <polygon
          points="26,13 29,21 38,21 31,26 33,35 26,30 19,35 21,26 14,21 23,21"
          stroke={color}
          strokeWidth="1"
          fill={`${color}20`}
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description:
      "Building partnerships built on trust, transparency, and shared ambition.",
    accent: "#06B6D4",
    light: "#ECFEFF",
    icon: (color: string) => (
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="16"
          cy="20"
          r="6"
          stroke={color}
          strokeWidth="2"
          fill="none"
          className="icon-person-l"
        />
        <circle
          cx="36"
          cy="20"
          r="6"
          stroke={color}
          strokeWidth="2"
          fill="none"
          className="icon-person-r"
        />
        <path
          d="M4 42c0-7 5-11 12-11s12 4 12 11"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="icon-person-l"
        />
        <path
          d="M24 42c0-7 5-11 12-11s12 4 12 11"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="icon-person-r"
        />
        <line
          x1="22"
          y1="26"
          x2="30"
          y2="26"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>
    ),
  },
];

export default function CoreValuesSection() {
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
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-10 lg:px-31.75 py-20"
    >
      <style>{`
        @keyframes cv-up {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cv-card { opacity: 0; }
        .cv-card.visible { animation: cv-up 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }

        /* bulb rays spin slowly on hover */
        .cv-card:hover .icon-ray {
          transform-origin: 26px 20px;
          animation: ray-spin 3s linear infinite;
        }
        @keyframes ray-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* heart pulse on hover */
        .cv-card:hover .icon-heart {
          animation: heart-pulse 0.6s ease-in-out infinite alternate;
          transform-origin: 26px 26px;
        }
        @keyframes heart-pulse {
          from { transform: scale(1); }
          to   { transform: scale(1.1); }
        }

        /* star spin on hover */
        .cv-card:hover .icon-star {
          animation: star-spin 1.2s cubic-bezier(0.22,1,0.36,1) forwards;
          transform-origin: 26px 26px;
        }
        @keyframes star-spin {
          0%   { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(180deg) scale(1.15); }
          100% { transform: rotate(360deg) scale(1); }
        }

        /* people slide apart on hover */
        .cv-card:hover .icon-person-l {
          animation: person-left 0.35s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .cv-card:hover .icon-person-r {
          animation: person-right 0.35s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes person-left  { to { transform: translateX(-4px); } }
        @keyframes person-right { to { transform: translateX(4px); } }

        /* icon container bounce on hover */
        .cv-icon-wrap {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .cv-card:hover .cv-icon-wrap {
          transform: scale(1.1) translateY(-4px);
        }

        /* number pill slides in on hover */
        .cv-pill {
          opacity: 0;
          transform: translateY(5px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .cv-card:hover .cv-pill {
          opacity: 1;
          transform: translateY(0);
        }

        /* accent bar grows on hover */
        .cv-bar {
          transition: width 0.35s cubic-bezier(0.22,1,0.36,1);
          width: 2rem;
        }
        .cv-card:hover .cv-bar { width: 4rem; }

        /* card lift */
        .cv-inner {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease;
        }
        .cv-card:hover .cv-inner {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.1);
        }
      `}</style>

      <div
        className={`mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#4758E0] mb-3">
          <span className="w-5 h-px bg-[#4758E0] inline-block" />
          What we stand for
        </span>
        <h2
          className="text-[32px] md:text-[40px] font-bold text-[#131927] leading-tight"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Core Values
        </h2>
        <p className="mt-3 text-[15px] text-[#394050] max-w-lg leading-relaxed">
          We empower businesses with innovative digital solutions that drive
          sustainable growth and meaningful connections.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {values.map((value, idx) => (
          <div
            key={idx}
            className={`cv-card ${inView ? "visible" : ""}`}
            style={{ animationDelay: `${idx * 0.12}s` }}
          >
            <div
              className="cv-inner relative rounded-2xl overflow-hidden h-90 flex flex-col justify-between p-8 group cursor-default"
              style={{
                background: value.light,
                border: `1px solid ${value.accent}20`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 75% 20%, ${value.accent}1A 0%, transparent 60%)`,
                }}
              />

              <div className="flex items-start justify-between">
                <div
                  className="cv-icon-wrap w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: `${value.accent}14` }}
                >
                  {value.icon(value.accent)}
                </div>

                <span
                  className="cv-pill text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full"
                  style={{
                    background: `${value.accent}18`,
                    color: value.accent,
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <div
                  className="cv-bar h-0.5 mb-4 rounded-full"
                  style={{ background: value.accent }}
                />
                <h3
                  className="font-bold text-[#131927] text-[21px] mb-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-[14px] text-[#394050] leading-relaxed max-w-[90%]">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
