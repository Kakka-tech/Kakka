"use client";

import React, { useEffect, useRef, useState } from "react";
const FastDeliveryIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes rocket-fly {
        0%   { transform: translate(0px, 0px); }
        25%  { transform: translate(2px, -3px); }
        50%  { transform: translate(0px, -1px); }
        75%  { transform: translate(-2px, -3px); }
        100% { transform: translate(0px, 0px); }
      }
      @keyframes flame-flicker {
        0%, 100% { transform: scaleY(1); opacity: 1; }
        50%       { transform: scaleY(0.7); opacity: 0.7; }
      }
      @keyframes trail-dash {
        from { stroke-dashoffset: 40; }
        to   { stroke-dashoffset: 0; }
      }
      @keyframes spark {
        0%   { opacity: 1; transform: translate(0,0) scale(1); }
        100% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0); }
      }
      .rocket-body { animation: rocket-fly 2.4s ease-in-out infinite; transform-origin: 40px 40px; }
      .flame       { animation: flame-flicker 0.4s ease-in-out infinite; transform-origin: 40px 55px; }
      .trail       { stroke-dasharray: 40; animation: trail-dash 1s ease-out infinite; }
      .spark1 { --tx: -8px; --ty: 10px; animation: spark 0.8s 0.1s ease-out infinite; }
      .spark2 { --tx: 8px;  --ty: 12px; animation: spark 0.8s 0.3s ease-out infinite; }
      .spark3 { --tx: -4px; --ty: 14px; animation: spark 0.8s 0.5s ease-out infinite; }
    `}</style>
    <line x1="28" y1="52" x2="10" y2="64" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" opacity="0.25" className="trail"/>
    <line x1="25" y1="58" x2="12" y2="70" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" className="trail"/>
    <g className="rocket-body">
      <path d="M40 18 C33 26 30 35 30 44 L40 50 L50 44 C50 35 47 26 40 18Z" fill="#4F46E5"/>
      <path d="M40 18 C37 22 36 26 36 30 L40 32 L44 30 C44 26 43 22 40 18Z" fill="#818CF8"/>
      <path d="M30 44 L22 52 L30 50 Z" fill="#6366F1"/>
      <path d="M50 44 L58 52 L50 50 Z" fill="#6366F1"/>
      <circle cx="40" cy="38" r="4" fill="white" opacity="0.9"/>
      <circle cx="40" cy="38" r="2.5" fill="#C7D2FE"/>
      <g className="flame">
        <ellipse cx="40" cy="54" rx="5" ry="7" fill="#F59E0B" opacity="0.9"/>
        <ellipse cx="40" cy="55" rx="3" ry="4" fill="#FDE68A"/>
      </g>
      <circle cx="40" cy="60" r="1.5" fill="#F59E0B" className="spark1"/>
      <circle cx="40" cy="60" r="1.5" fill="#FDE68A" className="spark2"/>
      <circle cx="40" cy="60" r="1"   fill="#F59E0B" className="spark3"/>
    </g>
  </svg>
);

const ExpertTeamIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes float-person {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-3px); }
      }
      @keyframes pulse-ring-team {
        0%   { r: 10; opacity: 0.15; }
        100% { r: 16; opacity: 0; }
      }
      @keyframes connect-line {
        0%, 100% { opacity: 0.3; }
        50%       { opacity: 0.7; }
      }
      @keyframes star-spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      .p1 { animation: float-person 2.8s ease-in-out infinite; transform-origin: 20px 40px; }
      .p2 { animation: float-person 2.8s 0.6s ease-in-out infinite; transform-origin: 40px 36px; }
      .p3 { animation: float-person 2.8s 1.2s ease-in-out infinite; transform-origin: 60px 40px; }
      .ring { animation: pulse-ring-team 2s ease-out infinite; transform-origin: 40px 36px; }
      .conn { animation: connect-line 2s ease-in-out infinite; }
      .star { animation: star-spin 4s linear infinite; transform-origin: 40px 14px; }
    `}</style>
    <line x1="20" y1="38" x2="40" y2="34" stroke="#10B981" strokeWidth="1.5" opacity="0.3" className="conn"/>
    <line x1="60" y1="38" x2="40" y2="34" stroke="#10B981" strokeWidth="1.5" opacity="0.3" className="conn" style={{animationDelay:"0.4s"}}/>
    <circle cx="40" cy="36" r="10" fill="none" stroke="#10B981" strokeWidth="1.5" className="ring"/>
    <g className="p1">
      <circle cx="20" cy="28" r="7" fill="#D1FAE5"/>
      <circle cx="20" cy="28" r="4.5" fill="#10B981"/>
      <path d="M10 50 Q10 42 20 42 Q30 42 30 50" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5"/>
    </g>
    <g className="p3">
      <circle cx="60" cy="28" r="7" fill="#D1FAE5"/>
      <circle cx="60" cy="28" r="4.5" fill="#10B981"/>
      <path d="M50 50 Q50 42 60 42 Q70 42 70 50" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5"/>
    </g>
    <g className="p2">
      <circle cx="40" cy="24" r="9" fill="#6EE7B7"/>
      <circle cx="40" cy="24" r="6" fill="#059669"/>
      <path d="M27 50 Q27 40 40 40 Q53 40 53 50" fill="#6EE7B7" stroke="#059669" strokeWidth="1.5"/>
      <g className="star">
        <path d="M40 10 L41.2 13.5 L45 13.5 L42 15.8 L43.2 19.3 L40 17 L36.8 19.3 L38 15.8 L35 13.5 L38.8 13.5 Z" fill="#F59E0B"/>
      </g>
    </g>
  </svg>
);

const ProvenResultIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes count-up-bar {
        from { transform: scaleY(0); }
        to   { transform: scaleY(1); }
      }
      @keyframes draw-check {
        from { stroke-dashoffset: 40; }
        to   { stroke-dashoffset: 0; }
      }
      @keyframes pop-badge {
        0%   { transform: scale(0); opacity: 0; }
        70%  { transform: scale(1.15); }
        100% { transform: scale(1); opacity: 1; }
      }
      @keyframes float-bar {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(-2px); }
      }
      .bar1 { transform-origin: 22px 58px; animation: count-up-bar 0.6s 0.1s ease-out both, float-bar 3s 1s ease-in-out infinite; }
      .bar2 { transform-origin: 34px 58px; animation: count-up-bar 0.6s 0.25s ease-out both, float-bar 3s 1.2s ease-in-out infinite; }
      .bar3 { transform-origin: 46px 58px; animation: count-up-bar 0.6s 0.4s ease-out both, float-bar 3s 1.4s ease-in-out infinite; }
      .bar4 { transform-origin: 58px 58px; animation: count-up-bar 0.6s 0.55s ease-out both, float-bar 3s 1.6s ease-in-out infinite; }
      .check { stroke-dasharray: 40; animation: draw-check 0.5s 1s ease-out both; }
      .badge { animation: pop-badge 0.5s 1.2s ease-out both; transform-origin: 56px 24px; }
      .trend-line { stroke-dasharray: 80; stroke-dashoffset: 80; animation: draw-check 1s 0.4s ease-out both; }
    `}</style>
    <line x1="14" y1="58" x2="68" y2="58" stroke="#D946EF" strokeWidth="1.5" opacity="0.3"/>
    <rect x="16" y="44" width="12" height="14" rx="3" fill="#F0ABFC" className="bar1"/>
    <rect x="28" y="36" width="12" height="22" rx="3" fill="#E879F9" className="bar2"/>
    <rect x="40" y="28" width="12" height="30" rx="3" fill="#D946EF" className="bar3"/>
    <rect x="52" y="18" width="12" height="40" rx="3" fill="#A21CAF" className="bar4"/>
    <polyline points="22,45 34,37 46,29 58,19" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="trend-line"/>
    <circle cx="22" cy="45" r="2.5" fill="#D946EF" opacity="0.7"/>
    <circle cx="34" cy="37" r="2.5" fill="#D946EF" opacity="0.7"/>
    <circle cx="46" cy="29" r="2.5" fill="#D946EF" opacity="0.7"/>
    <circle cx="58" cy="19" r="3.5" fill="#D946EF"/>
    <g className="badge">
      <circle cx="56" cy="24" r="10" fill="#D946EF"/>
      <polyline points="51,24 55,28 62,20" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="check"/>
    </g>
  </svg>
);

type Item = {
  title: string;
  description: string;
  detail: string;
  accent: string;
  bg: string;
  tagBg: string;
  tagText: string;
  tag: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    title: "Fast Delivery",
    description:
      "Agile methodology ensures rapid, iterative development cycles so your product ships on time, every time.",
    detail: "2–4 week sprints",
    accent: "#4F46E5",
    bg: "#EEF2FF",
    tagBg: "#EEF2FF",
    tagText: "#4338CA",
    tag: "Agile Process",
    icon: <FastDeliveryIcon size={72} />,
  },
  {
    title: "Expert Team",
    description:
      "Seasoned professionals with deep expertise across design, engineering, and growth strategy.",
    detail: "Cross-functional squad",
    accent: "#10B981",
    bg: "#ECFDF5",
    tagBg: "#ECFDF5",
    tagText: "#065F46",
    tag: "Top 1% Talent",
    icon: <ExpertTeamIcon size={72} />,
  },
  {
    title: "Proven Results",
    description:
      "A consistent track record of delivering measurable business growth for every client we partner with.",
    detail: "300%+ avg. growth",
    accent: "#D946EF",
    bg: "#FDF4FF",
    tagBg: "#FDF4FF",
    tagText: "#A21CAF",
    tag: "Data-backed",
    icon: <ProvenResultIcon size={72} />,
  },
];

export default function WhyChooseKakka() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(new Array(items.length).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, idx) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(
              () =>
                setVisible((prev) => {
                  const next = [...prev];
                  next[idx] = true;
                  return next;
                }),
              idx * 120
            );
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="w-full px-25 py-24 max-lg:px-16 max-md:px-10 max-sm:px-6 bg-white">
      <div className="mb-14">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#394050] opacity-60 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#131927] inline-block" />
          Our edge
        </span>
        <h2
          className="text-[34px] font-bold text-[#131927] leading-tight tracking-tight"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Why Choose
          <br />
          <span style={{ color: "#4758E0" }}>Kakka?</span>
        </h2>
        <p className="mt-3 text-[15px] text-[#394050] max-w-md leading-relaxed">
          Three pillars that set us apart and keep clients coming back.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => { refs.current[idx] = el; }}
            className="group relative rounded-3xl overflow-hidden transition-all duration-500 ease-out"
            style={{
              opacity: visible[idx] ? 1 : 0,
              transform: visible[idx] ? "translateY(0)" : "translateY(28px)",
              transitionDelay: `${idx * 80}ms`,
            }}
          >
            <div
              className="absolute inset-0 rounded-3xl transition-opacity duration-300"
              style={{ background: item.bg }}
            />

            <div
              className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: item.accent }}
            />

            <div className="relative z-10 p-8 flex flex-col gap-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{ background: "white", boxShadow: `0 4px 20px ${item.accent}20` }}
              >
                {item.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-[19px] font-bold text-[#131927] tracking-tight"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#394050] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/6">
                <span
                  className="text-[12px] font-bold tracking-wide"
                  style={{ color: item.accent }}
                >
                  {item.detail}
                </span>
                <span
                  className="text-[11px] font-semibold px-3 py-1 rounded-full"
                  style={{ color: item.tagText, background: "white" }}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}