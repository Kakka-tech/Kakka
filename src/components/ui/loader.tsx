"use client";

import { useEffect, useState } from "react";

interface LoaderProps {
  onDone?: () => void;
}

export default function Loader({ onDone }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] =
    useState<"loading" | "curtain" | "done">("loading");
  const [text, setText] = useState("Hello");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage("curtain"), 400);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let newText = "Hello";
    if (progress >= 40 && progress < 90) newText = "We Are";
    if (progress >= 90) newText = "Your Solution";

    if (newText !== text) {
      setFade(false);
      setTimeout(() => {
        setText(newText);
        setFade(true);
      }, 250);
    }
  }, [progress, text]);

  useEffect(() => {
    if (stage === "curtain") {
      const timer = setTimeout(() => {
        setStage("done");
        if (onDone) onDone();
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [stage, onDone]);

  if (stage === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden ${
        stage === "loading" ? "bg-black" : "bg-transparent"
      } transition-colors duration-700`}
    >
      {stage === "loading" && (
        <>
          <div className={`loader-progress progress-${progress}`} />

          <h1
            className="
              absolute 
              font-extrabold 
              text-white/10 
              leading-none 
              select-none 
              z-10
              text-[clamp(4rem,30vw,22rem)]
            "
          >
            {progress}%
          </h1>

          <div
            className={`text-center relative z-20 text-white transition-all duration-500 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <h2
              className="
                font-bold 
                text-[clamp(1.5rem,6vw,4rem)]
              "
            >
              {text}
            </h2>
          </div>
        </>
      )}

      {stage === "curtain" && (
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-[#272727]/50 backdrop-blur-md border-r border-white/10 animate-curtainLeftOpen"></div>
          <div className="w-1/2 bg-[#272727]/50 backdrop-blur-md border-l border-white/10 animate-curtainRightOpen"></div>
        </div>
      )}
    </div>
  );
}
