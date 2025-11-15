"use client";

import Image from "next/image";
import React from "react";

type CardItem = {
  title: string;
  description: string;
  icon: string;
};

export default function WhyChooseKakka() {
  const items: CardItem[] = [
    {
      title: "Fast Delivery",
      description: "Agile methodology ensures rapid, iterative development",
      icon: "/icons/fastdelivery.png",
    },
    {
      title: "Expert Team",
      description: "Seasoned professionals with decades of combined experience",
      icon: "/icons/expertteam.png",
    },
    {
      title: "Proven Result",
      description: "Track record of delivering measurable business growth",
      icon: "/icons/provenresult.png",
    },
  ];

  return (
    <section className="w-full px-[100px] py-20 max-lg:px-16 max-md:px-10 max-sm:px-6">
      <h2 className="text-[28px] font-bold text-[#131927] font-[Manrope] mb-10 max-md:text-[24px] text-center md:text-left">
        Why Choose Kakka?
      </h2>

      <div className="flex flex-col items-center gap-10">
        <div className="w-full max-w-[400px] max-md:max-w-[350px] max-sm:max-w-[300px]">
          <Card item={items[0]} large />
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-10 md:gap-16 lg:gap-[20rem] w-full flex-wrap">
          <div className="flex-1 min-w-[250px] max-w-[387px]">
            <Card item={items[1]} />
          </div>
          <div className="flex-1 min-w-[250px] max-w-[387px]">
            <Card item={items[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item, large }: { item: CardItem; large?: boolean }) {
  return (
    <div
      className="
        rounded-[20px]
        border-[12px] 
        border-white 
        p-[28px] 
        flex flex-col 
        items-center 
        gap-8
        bg-[linear-gradient(206deg,#EFEFEF_28.45%,#DFE4FA_83.74%)]
        shadow-sm
        w-full
      "
    >
      <Image
        src={item.icon}
        alt={item.title}
        width={large ? 260 : 180}
        height={large ? 260 : 180}
        className="
          object-contain 
          pointer-events-none
          max-lg:w-[75%]   
          max-md:w-[70%]
          max-sm:w-[60%] 
        "
      />

      <div className="text-center">
        <h3 className="font-semibold text-[#131927] text-[17px] max-md:text-[16px] max-sm:text-[15px]">
          {item.title}
        </h3>
        <p className="text-[14px] text-[#394050] mt-1 leading-relaxed max-w-[240px] mx-auto max-md:text-[13px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}
