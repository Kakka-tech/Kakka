"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Odinaka Ezurike",
    role: "Founder",
    image: "/images/odinaka.jpg",
    bio: "Visionary leader driving innovation and strategy at Kakka Tech.",
    socials: {
      linkedin: "https://www.linkedin.com/in/odi-ezurike-569a21352/",
      twitter: "https://x.com/oddyezu",
    },
  },
  {
    name: "Emmanuel Samalia",
    role: "Co-Founder",
    image: "/images/emmanuel.png",
    bio: "Technical architect turning bold ideas into world-class products.",
    socials: {
      linkedin: "https://www.linkedin.com/in/emmanuel-samaila-435629320/",
      twitter: "https://x.com/meemmanue1?s=11",
    },
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
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6 md:px-10 lg:px-31.75 bg-white overflow-hidden"
    >
      <style>{`
        @keyframes tm-up {
          from { opacity: 0; transform: translateY(44px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tm-card { opacity: 0; }
        .tm-card.visible { animation: tm-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }

        .tm-img-wrap::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: inherit;
          background: linear-gradient(135deg, #4758E0, #a5b4fc, #4758E0);
          background-size: 200% 200%;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
          animation: border-spin 3s linear infinite paused;
        }
        .tm-card:hover .tm-img-wrap::before {
          opacity: 1;
          animation-play-state: running;
        }
        @keyframes border-spin {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .tm-img-inner {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .tm-card:hover .tm-img-inner { transform: scale(1.05); }

        .tm-overlay {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .tm-card:hover .tm-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .tm-social {
          transform: translateY(10px);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .tm-card:hover .tm-social {
          transform: translateY(0);
          opacity: 1;
        }
        .tm-social:nth-child(2) { transition-delay: 0.05s; }

        .tm-tag {
          background: linear-gradient(90deg, #4758E0, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes tm-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        .tm-card:hover .tm-avatar-float {
          animation: tm-float 3s ease-in-out infinite;
        }
      `}</style>

      <div
        className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#4758E0] mb-3">
          <span className="w-5 h-px bg-[#4758E0] inline-block" />
          The people behind it
        </span>
        <h2
          className="text-[32px] md:text-[40px] font-bold text-[#131927] leading-tight"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Meet Our Team
        </h2>
        <p className="mt-3 text-[15px] text-[#394050] max-w-md leading-relaxed">
          The brilliant minds building Kakka&apos;s vision from the ground up.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-start gap-10 md:gap-20">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className={`tm-card group cursor-default flex flex-col items-center w-full sm:w-75 ${inView ? "visible" : ""}`}
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className="tm-avatar-float w-full">
              <div
                className="tm-img-wrap relative w-full aspect-4/5 rounded-2xl overflow-hidden"
                style={{ zIndex: 1 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{ zIndex: 0 }}
                />
                <div
                  className="tm-img-inner absolute inset-0 rounded-2xl overflow-hidden"
                  style={{ zIndex: 1 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top pointer-events-none"
                  />
                </div>

                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,15,40,0.7) 0%, transparent 55%)",
                    zIndex: 2,
                  }}
                />

                <div className="tm-overlay absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="text-white/80 text-[13px] leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={member.socials.linkedin}
                      className="tm-social w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" fill="white" />
                      </svg>
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="tm-social w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="Twitter / X"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-5 px-1">
              <div className="flex items-center justify-between">
                <h3
                  className="font-bold text-[#131927] text-[18px]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {member.name}
                </h3>
                <span
                  className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full"
                  style={{ background: "#EEF0FC", color: "#4758E0" }}
                >
                  {member.role}
                </span>
              </div>
              <div
                className="mt-2 h-px w-full"
                style={{
                  background: "linear-gradient(90deg, #4758E020, transparent)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
