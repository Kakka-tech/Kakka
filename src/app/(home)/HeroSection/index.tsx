"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative w-full max-w-[1169px] h-auto mx-auto flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-[url('/images/HeroBG.png')] bg-cover bg-center bg-no-repeat px-4 lg:h-[365px]">
      <div className="text-center max-w-[600px] mx-auto">
        <span className="text-xs sm:text-sm text-[#4758E0] bg-[#edeffe] px-4 py-1 rounded-full mb-4 inline-block shadow-[0_2px_6px_0_#edeffe]">
          Welcome to the future
        </span>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-[#111] mb-3">
          Beyond Websites <br className="hidden sm:block" /> We Build Growth
          Engines
        </h1>

        <p className="text-[#555] text-sm sm:text-base max-w-[500px] mx-auto mb-6 px-2">
          Transform your business with cutting-edge digital solutions that drive
          real results. We don’t just build websites—we architect experiences
          that convert, engage, and scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            size="md"
            className="w-full sm:w-auto shadow-[0_18px_22px_0_rgba(200,206,252,0.2)] transition-all duration-300"
            onClick={() =>
              window.open("https://calendly.com/kakka-tech-co/30min", "_blank")
            }
          >
            Start your project
          </Button>

          <Button
            variant="outline"
            size="md"
            className="w-full sm:w-auto border border-[#131927] text-[#131927] hover:bg-[#131927] hover:text-white hover:shadow-md transition-all duration-300"
            onClick={() => router.push("/portfolio")}
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
