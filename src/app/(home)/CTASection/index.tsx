"use client";

export default function CTASection() {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-center text-white bg-[url('/images/cta-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[#43B75D] opacity-70"></div>

      <div className="relative z-10 px-6">
        <h2 className="text-3xl font-semibold mb-3">
          Ready to Build Your Growth Engine
        </h2>
        <p className="text-sm md:text-base">
          Let’s create something extraordinary together. Get in touch today
        </p>
      </div>
    </section>
  );
}
