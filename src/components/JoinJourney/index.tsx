"use client";

import React, { useEffect, useRef } from "react";
import Button from "../Button";

interface JoinJourneyProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export default function JoinJourney({
  title = "Ready to Build Your Growth Engine",
  description = "Let's create something extraordinary together",
  buttonText = "Get In Touch",
  className = "",
}: JoinJourneyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0,
      h = 0;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < 38; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.8 + 0.4,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      className={`w-full flex justify-center py-20 lg:px-16 px-6 md:px-10 ${className}`}
    >
      <style>{`
        @keyframes jj-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes jj-glow-pulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%       { opacity: 0.8;  transform: scale(1.06); }
        }
        @keyframes jj-shimmer-badge {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .jj-card { animation: jj-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .jj-title { animation: jj-fade-up 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both; }
        .jj-desc  { animation: jj-fade-up 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both; }
        .jj-cta   { animation: jj-fade-up 0.7s 0.3s cubic-bezier(0.22,1,0.36,1) both; }
        .jj-orb   { animation: jj-glow-pulse 5s ease-in-out infinite; }
        .jj-badge {
          background: linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.22) 40%, rgba(255,255,255,0.08) 80%);
          background-size: 200% auto;
          animation: jj-shimmer-badge 3s linear infinite;
        }
      `}</style>

      <div
        className="jj-card w-full max-w-337.5 relative rounded-[28px] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #3141cc 0%, #4758E0 45%, #5c6af0 100%)",
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        />

        <div
          className="jj-orb absolute -top-32 -left-32 w-120 h-120 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(120,140,255,0.35) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="jj-orb absolute -bottom-40 -right-20 w-130 h-130 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(80,100,255,0.3) 0%, transparent 70%)",
            pointerEvents: "none",
            animationDelay: "2.5s",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 40px)",
            pointerEvents: "none",
          }}
        />

        <div className="relative z-10 text-white text-center px-6 py-24 flex flex-col items-center gap-6">
          <div className="jj-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-[11px] font-semibold tracking-[0.16em] uppercase text-white/75 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
            Let&apos;s work together
          </div>

          <h2
            className="jj-title text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-3xl"
            style={{
              fontFamily: "Manrope, sans-serif",
              textShadow: "0 2px 40px rgba(0,0,0,0.18)",
            }}
          >
            {title}
          </h2>

          <p className="jj-desc text-[15px] sm:text-base md:text-lg max-w-xl leading-relaxed text-blue-100/90">
            {description}
          </p>

          <div className="jj-cta mt-2 flex flex-col sm:flex-row items-center gap-4">
            <Button
              onClick={() =>
                window.open(
                  "https://calendly.com/kakka-tech-co/30min",
                  "_blank",
                )
              }
              className="px-8 py-3.5 text-sm sm:text-base font-semibold rounded-xl shadow-lg"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
            >
              {buttonText}
            </Button>
            <a
              href="mailto:hello@kakkatech.co"
              className="text-sm text-white/70 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white/60"
            >
              Or send us an email
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8 opacity-60">
            {["Fast delivery", "Dedicated support", "Proven results"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[12px] font-medium tracking-wide text-white/80"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle
                      cx="7"
                      cy="7"
                      r="6.5"
                      stroke="rgba(255,255,255,0.5)"
                    />
                    <path
                      d="M4 7l2 2 4-4"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
