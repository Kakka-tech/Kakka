"use client";

import React, { useEffect, useRef, useState } from "react";

const phases = [
  {
    phase: "Phase 01",
    year: "2024",
    title: "Foundation",
    description:
      "Establish core team and build initial client portfolio with a focus on quality over quantity.",
    status: "Done",
    progress: 100,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="10"
          width="4"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="8"
          y="6"
          width="4"
          height="12"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="2"
          width="4"
          height="16"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    phase: "Phase 02",
    year: "2025",
    title: "Expansion",
    description:
      "Scale operations, grow the team, and expand our range of service offerings.",
    status: "Done",
    progress: 100,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 13l4-4 3 3 4-5 3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 7h3v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    phase: "Phase 03",
    year: "2026",
    title: "Innovation",
    description:
      "Launch proprietary tools and platforms that set new industry standards.",
    status: "In Progress",
    progress: 60,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polygon
          points="10,2 12.5,7.5 18,8 14,12 15,18 10,15 5,18 6,12 2,8 7.5,7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    phase: "Phase 04",
    year: "2027",
    title: "Global Reach",
    description:
      "Expand into international markets and build a global network of partnerships.",
    status: "Upcoming",
    progress: 0,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle
          cx="10"
          cy="10"
          r="7.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <ellipse
          cx="10"
          cy="10"
          rx="3.5"
          ry="7.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="2.5"
          y1="10"
          x2="17.5"
          y2="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    phase: "Phase 05",
    year: "2028",
    title: "Industry Leader",
    description:
      "Become the go-to agency for enterprise solutions and digital transformation.",
    status: "Upcoming",
    progress: 0,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2l2 5h5l-4 3 1.5 5L10 12l-4.5 3L7 10 3 7h5z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const statusConfig: Record<
  string,
  { label: string; color: string; bg: string; dot: string }
> = {
  Done: { label: "✓ Done", color: "#16a34a", bg: "#f0fdf4", dot: "#22c55e" },
  "In Progress": {
    label: "● In Progress",
    color: "#4758E0",
    bg: "#EEF0FC",
    dot: "#4758E0",
  },
  Upcoming: {
    label: "Upcoming",
    color: "#94a3b8",
    bg: "#f8fafc",
    dot: "#cbd5e1",
  },
};

const completedCount = phases.filter((p) => p.status === "Done").length;
const inProgressCount = phases.filter((p) => p.status === "In Progress").length;
const overallProgress = Math.round(
  phases.reduce((acc, p) => acc + p.progress, 0) / phases.length,
);

export default function JourneyContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [cardVisible, setCardVisible] = useState<boolean[]>(
    new Array(phases.length).fill(false),
  );

  useEffect(() => {
    const sObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          sObs.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) sObs.observe(sectionRef.current);
    return () => sObs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    phases.forEach((_, i) => {
      setTimeout(() => {
        setCardVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 120);
    });
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-10 lg:px-31.75 py-20"
    >
      <style>{`
        @keyframes jc-up {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .jc-card { opacity: 0; }
        .jc-card.visible { animation: jc-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards; }
        .jc-card:hover { transform: translateY(-3px); }
        .jc-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .jc-card:hover { box-shadow: 0 12px 40px rgba(71,88,224,0.1); }

        @keyframes prog-fill {
          from { width: 0%; }
        }
        .prog-bar { animation: prog-fill 1s 0.3s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes tick-pop {
          0%   { transform: scale(0); opacity: 0; }
          70%  { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        .tick { animation: tick-pop 0.4s 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }

        .year-ghost {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 72px;
          font-weight: 900;
          color: #4758E0;
          opacity: 0.05;
          pointer-events: none;
          line-height: 1;
          font-family: Manrope, sans-serif;
          letter-spacing: -2px;
        }
      `}</style>

      <div
        className={`mb-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#4758E0] mb-3">
          <span className="w-5 h-px bg-[#4758E0] inline-block" />
          Where we&apos;re headed
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2
              className="text-[32px] md:text-[40px] font-bold text-[#131927] leading-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Long-Term Vision
            </h2>
            <p className="mt-2 text-[15px] text-[#394050]">
              Our roadmap to becoming the industry&apos;s most trusted growth
              partner
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="text-[12px] text-[#394050]">Overall</span>
            <div className="w-32 h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
              <div
                className="prog-bar h-full rounded-full"
                style={{
                  width: `${overallProgress}%`,
                  background: "linear-gradient(90deg,#4758E0,#818cf8)",
                }}
              />
            </div>
            <span className="text-[12px] font-semibold text-[#4758E0]">
              {overallProgress}%
            </span>
          </div>
        </div>
      </div>

      <div
        className={`mb-10 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="relative flex items-center py-6">
          <div className="absolute left-0 right-0 h-px bg-[#e2e8f0]" />
          <div
            className="absolute left-0 h-px"
            style={{
              width: `${((completedCount + inProgressCount * 0.6) / phases.length) * 100}%`,
              background: "linear-gradient(90deg,#4758E0,#818cf8)",
            }}
          />
          {phases.map((p, i) => {
            const pct = (i / (phases.length - 1)) * 100;
            const isDone = p.status === "Done";
            const isIP = p.status === "In Progress";
            return (
              <div
                key={i}
                className="absolute flex flex-col items-center gap-1"
                style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
              >
                <div
                  className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
                  style={{
                    background:
                      isDone ? "#4758E0"
                      : isIP ? "#fff"
                      : "#fff",
                    borderColor: isDone || isIP ? "#4758E0" : "#cbd5e1",
                    boxShadow: isIP ? "0 0 0 3px #4758E020" : "none",
                  }}
                >
                  {isDone && (
                    <svg
                      className="tick"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <path
                        d="M1.5 4l2 2 3-3"
                        stroke="white"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {isIP && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4758E0]" />
                  )}
                </div>
                <span className="text-[10px] font-semibold text-[#94a3b8] mt-0.5 whitespace-nowrap">
                  {p.year}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {phases.map((item, idx) => {
          const st = statusConfig[item.status];
          const isActive = item.status === "In Progress";
          return (
            <div
              key={idx}
              className={`jc-card ${cardVisible[idx] ? "visible" : ""} ${idx === 4 ? "sm:col-span-1" : ""}`}
            >
              <div
                className="relative rounded-2xl p-6 overflow-hidden h-full flex flex-col justify-between gap-4"
                style={{
                  background: isActive ? "#fff" : "#fafbff",
                  border: `1px solid ${isActive ? "#4758E0" : "#e8eaf6"}`,
                  boxShadow:
                    isActive ? "0 4px 24px rgba(71,88,224,0.12)" : "none",
                }}
              >
                <span className="year-ghost">{item.year}</span>

                <div className="flex items-start justify-between gap-2 relative z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: isActive ? "#EEF0FC" : "#f1f3fb",
                      color: isActive ? "#4758E0" : "#94a3b8",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: st.bg, color: st.color }}
                  >
                    {st.label}
                  </span>
                </div>

                <div className="relative z-10">
                  <p
                    className="text-[11px] font-bold tracking-[0.12em] uppercase mb-1"
                    style={{ color: "#4758E0", opacity: 0.6 }}
                  >
                    {item.phase} · {item.year}
                  </p>
                  <h3
                    className="text-[22px] font-bold text-[#131927] leading-tight mb-2"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#394050] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.status !== "Upcoming" && (
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-medium text-[#94a3b8]">
                        Progress
                      </span>
                      <span
                        className="text-[11px] font-bold"
                        style={{ color: "#4758E0" }}
                      >
                        {item.progress}%
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-[#e8eaf6] overflow-hidden">
                      {cardVisible[idx] && (
                        <div
                          className="prog-bar h-full rounded-full"
                          style={{
                            width: `${item.progress}%`,
                            background:
                              "linear-gradient(90deg,#4758E0,#818cf8)",
                          }}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
