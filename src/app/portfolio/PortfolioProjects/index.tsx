"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const portfolioData = [
  {
    category: "Web Application",
    title: "Monssel - Fintech Platform",
    description:
      "A comprehensive financial management platform with real-time analytics and automated reporting for better decision-making.",
    metric: "300% User Growth",
    image: "/images/monssel.png",
    url: "https://monssel.vercel.app",
  },
  {
    category: "Portfolio Website",
    title: "DJ Blaack - Musician Portfolio",
    description:
      "A modern portfolio website for a professional musician with integrated music player and event calendar.",
    metric: "10k+ Page Views",
    image: "/images/dj-blaack.png",
    url: "https://dj-blaack.vercel.app/",
  },
  {
    category: "AI-Powered Platform",
    title: "Personal Learning Platform",
    description:
      "An AI-powered personalised learning platform that adapts content difficulty, sequence, and assessments in real-time based on individual learner profiles.",
    metric: "5k+ Learners Enrolled",
    image: "/images/personal-learning.png",
    url: "https://plpac-adaptive-learning.vercel.app/",
  },
  {
    category: "SaaS",
    title: "SpendWise - Budget Management",
    description:
      "A user-friendly budget management tool that helps individuals and businesses track expenses, set financial goals, and gain insights into spending habits.",
    metric: "10k+ Active Users",
    image: "/images/spendwise.png",
    url: "https://spendwise-beige-five.vercel.app/",
  },
];

const TOTAL = portfolioData.length;

export default function PortfolioProjects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startAutoplay = () => {
    clearAutoplay();
    intervalRef.current = setInterval(() => {
      if (document.visibilityState === "visible") {
        setCurrent((c) => (c + 1) % TOTAL);
      }
    }, 3000);
  };

  useEffect(() => {
    startAutoplay();
    return clearAutoplay;
  }, []); // eslint-disable-line

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

  const goTo = (idx: number) => {
    setCurrent(((idx % TOTAL) + TOTAL) % TOTAL);
    startAutoplay();
  };

  const dragStartX = useRef(0);
  const dragX = useRef(0);
  const wasDrag = useRef(false);
  const currentRef = useRef(0);
  currentRef.current = current;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    dragX.current = 0;
    wasDrag.current = false;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons === 0) return;
    dragX.current = e.clientX - dragStartX.current;
    if (Math.abs(dragX.current) > 8) wasDrag.current = true;
  };

  const onPointerUp = () => {
    if (wasDrag.current) {
      if (dragX.current < -50) goTo(currentRef.current + 1);
      else if (dragX.current > 50) goTo(currentRef.current - 1);
    }
    dragX.current = 0;
    wasDrag.current = false;
  };

  const handleCardClick = (idx: number) => {
    if (wasDrag.current) return;
    const offset = getOffset(idx);
    if (offset === 0) {
      window.open(portfolioData[idx].url, "_blank", "noopener,noreferrer");
    } else {
      goTo(idx);
    }
  };

  const getOffset = (idx: number) => {
    let d = idx - current;
    if (d > TOTAL / 2) d -= TOTAL;
    if (d < -TOTAL / 2) d += TOTAL;
    return d;
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#4758E0] text-white"
      style={{ overflow: "hidden" }}
    >
      <style>{`
        @keyframes pfShimmer {
          0%   { transform: translateX(-130%) skewX(-12deg); }
          100% { transform: translateX(230%) skewX(-12deg); }
        }
        .pf-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 50%, transparent);
          animation: pfShimmer 1s ease forwards;
          pointer-events: none;
          z-index: 30;
          border-radius: inherit;
        }
        @keyframes pfFloat {
          0%, 100% { margin-top: 0px; }
          50%       { margin-top: -9px; }
        }
        .pf-float { animation: pfFloat 4s ease-in-out infinite; }
      `}</style>

      {/* Header */}
      <div
        className={`max-w-6xl mx-auto px-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-blue-200 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block opacity-60" />
              Our portfolio
            </span>
            <h2
              className="text-[34px] font-bold leading-tight tracking-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Our Portfolio
            </h2>
            <p className="text-blue-100 mt-2 max-w-md text-[15px] leading-relaxed">
              Explore our collection of successful projects that showcase our
              expertise in delivering high-quality digital solutions.
            </p>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => goTo(current - 1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => goTo(current + 1)}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3l5 5-5 5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="text-[13px] text-blue-200 ml-1 tabular-nums">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(TOTAL).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* 3D Carousel */}
      <div
        className="relative select-none"
        style={{
          height: 500,
          perspective: "1400px",
          perspectiveOrigin: "50% 40%",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {portfolioData.map((item, idx) => {
          const offset = getOffset(idx);
          const isActive = offset === 0;
          const abs = Math.abs(offset);
          const isVisible = abs <= 1;

          const rotateY = offset * -44;
          const translateX = offset * 46;
          const translateZ = isActive ? 90 : -110 - abs * 30;
          const scale = isActive ? 1 : 0.8;
          const opacity =
            isActive ? 1
            : abs === 1 ? 0.5
            : 0;
          const zIndex = isActive ? 10 : 4 - abs;

          return (
            <div
              key={idx}
              onClick={() => handleCardClick(idx)}
              className={`absolute top-0 left-1/2 rounded-2xl overflow-hidden ${
                isActive ? "pf-shimmer pf-float" : ""
              }`}
              style={{
                width: 500,
                height: 460,
                marginLeft: -250,
                transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                transformStyle: "preserve-3d",
                opacity,
                zIndex,
                transition:
                  "transform 0.52s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
                pointerEvents: isVisible ? "auto" : "none",
                boxShadow:
                  isActive ?
                    "0 40px 80px rgba(0,0,0,0.45), 0 8px 32px rgba(71,88,224,0.5)"
                  : "0 8px 24px rgba(0,0,0,0.2)",
                willChange: "transform, opacity",
                cursor: isActive ? "pointer" : "default",
                background: "white",
              }}
            >
              {/* Image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ height: 240 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  draggable={false}
                  style={{
                    transition: "transform 0.6s ease",
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                    pointerEvents: "none",
                  }}
                  priority={idx === 0}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-14"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(255,255,255,0.5), transparent)",
                  }}
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#4758E0] text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide">
                  {item.category}
                </span>
                {/* External link — active only */}
                {isActive && (
                  <span className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path
                        d="M2 11L11 2M11 2H6M11 2v5"
                        stroke="#131927"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-2 text-[#131927]">
                <h3
                  className="text-[18px] font-bold tracking-tight truncate"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-[#394050] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span
                    className="w-2 h-2 rounded-full bg-[#43B75D] shrink-0"
                    style={{ boxShadow: "0 0 8px rgba(67,183,93,0.7)" }}
                  />
                  <p className="text-[13px] font-semibold text-[#43B75D]">
                    {item.metric}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="max-w-6xl mx-auto px-8 mt-8">
        <div className="flex justify-center gap-2 mb-10">
          {portfolioData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Portfolio item ${idx + 1}`}
              style={{
                width: current === idx ? 28 : 6,
                height: 6,
                borderRadius: 99,
                background:
                  current === idx ? "white" : "rgba(255,255,255,0.32)",
                transition:
                  "width 0.35s cubic-bezier(0.22,1,0.36,1), background 0.3s ease",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
