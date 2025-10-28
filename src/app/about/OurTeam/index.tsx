"use client";

import React from "react";

const teamMembers = [
  { name: "Emmanuel Samaila", role: "CEO Founder" },
  { name: "Emmanuel Samaila", role: "CEO Founder" },
  { name: "Emmanuel Samaila", role: "CEO Founder" },
  { name: "Emmanuel Samaila", role: "CEO Founder" },
];

export default function OurTeam() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-left">
        <h2 className="text-3xl font-bold text-[#131927] mb-2">
          Meet Our Team
        </h2>
        <p className="text-[#394050] mb-10">
          The brilliant minds behind Kakka&apos;s success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col group cursor-pointer"
            >
              <div
                className="
                  w-[240px] h-[245px] rounded-xl bg-[#D9D9D9]
                  transition-all duration-300
                  group-hover:scale-105 group-hover:shadow-x my-3
                "
              ></div>
              <h3 className="mt-3 text-left font-semibold text-[#131927] group-hover:text-[#4758E0] transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-[#394050] text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
