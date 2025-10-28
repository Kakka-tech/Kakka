"use client";

import { Code2, Palette, LineChart, Megaphone, Database, Shield } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-[#4758E0]" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technology stacks.",
    items: [
      "Responsive Design",
      "Progressive Web App",
      "E-Commerce Solution",
      "Content Management Systems",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: <Palette className="w-6 h-6 text-[#4758E0]" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience.",
    items: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design Systems",
      "Mobile App Design",
      "Brand Identity",
    ],
  },
  {
    icon: <LineChart className="w-6 h-6 text-[#4758E0]" />,
    title: "Growth Strategy",
    description: "Data-driven strategies to scale your business and maximize ROI.",
    items: [
      "Market Analysis",
      "Conversion Optimization",
      "Analytics & Reporting",
      "A/B Testing",
      "Customer Journey Mapping",
      "Growth Hacking",
    ],
  },
  {
    icon: <Megaphone className="w-6 h-6 text-[#4758E0]" />,
    title: "Digital Marketing",
    description: "Comprehensive marketing solutions to reach and engage your target audience.",
    items: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Management",
      "Email Campaigns",
      "PPC Advertising",
      "Influencer Marketing",
    ],
  },
  {
    icon: <Database className="w-6 h-6 text-[#4758E0]" />,
    title: "Backend Development",
    description: "Robust, scalable backend systems that power your applications.",
    items: [
      "Database Design",
      "API Development",
      "Cloud Infrastructure",
      "Microservices",
      "Server Optimization",
      "Data Migration",
    ],
  },
  {
    icon: <Shield className="w-6 h-6 text-[#4758E0]" />,
    title: "Security & Compliance",
    description: "Enterprise-grade security measures to protect your digital assets.",
    items: [
      "Security Audits",
      "Penetration Testing",
      "GDPR Compliance",
      "Data Encryption",
      "Access Control",
      "Disaster Recovery",
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white"
          >
            <div className="mb-4 flex items-center gap-2">
              {service.icon}
              <h3 className="text-xl font-semibold text-[#131927]">{service.title}</h3>
            </div>
            <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-4">
              {service.description}
            </p>
            <ul className="list-disc list-inside text-[#394050] text-sm sm:text-base space-y-1">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
