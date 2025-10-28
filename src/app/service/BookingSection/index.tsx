"use client";

export default function BookingSection() {
  const handleBook = () => {
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131927] mb-4">
        Book a Discovery Call
      </h2>

      <p className="text-[#555] max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-10">
        Ready to bring your project to life? Schedule a free consultation with
        our team to discuss your goals, challenges, and how we can help you grow.
      </p>

      <button
        onClick={handleBook}
        className="bg-[#131927] text-white text-sm sm:text-base font-medium px-8 py-4 rounded-lg hover:bg-[#1e2635] transition-all shadow-md hover:shadow-lg"
      >
        Schedule a Call
      </button>
    </section>
  );
}
