"use client";

const testimonials = [
  {
    name: "Sara Johnson",
    role: "CEO, Techflow",
    quote:
      "KAKKA transformed our vision into reality. Their expertise and dedication are unmatched.",
  },
  {
    name: "Miles Morales",
    role: "Founder, Growthlab",
    quote:
      "Working with KAKKA transformed our online presence completely.",
  },
  {
    name: "Steven Strange",
    role: "CEO, Techflow",
    quote:
      "From branding to final launch, KAKKA guided us with expertise and clarity.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#131927] mb-10 text-left">
        Clients Testimonial
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 border border-[#E0E0E0] rounded-2xl bg-white hover:shadow-[0_8px_20px_rgba(71,88,224,0.08)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E5E7EB]" />
              <div>
                <h3 className="font-semibold text-[#131927]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#394050]">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-[#394050] text-sm leading-relaxed">
              “{testimonial.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
