'use client'

import React, { useEffect, useRef, useState } from 'react'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    year: '2024',
    description: 'Establish core team and build initial client portfolio',
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    year: '2025',
    description: 'Scale operations and expand service offerings',
  },
  {
    phase: 'Phase 3',
    title: 'Innovation',
    year: '2026',
    description: 'Launch proprietary tools and platforms',
  },
  {
    phase: 'Phase 4',
    title: 'Global Reach',
    year: '2027',
    description: 'Expand globally and target new markets',
  },
  {
    phase: 'Phase 5',
    title: 'Industry Leader',
    year: '2028',
    description: 'Become the go-to agency for enterprise solutions',
  },
]

export default function JourneyContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 }
    )

    const currentContainer = containerRef.current
    if (currentContainer) {
      currentContainer.querySelectorAll('.phase-card').forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [visibleIndexes])

  return (
    <section className="max-w-5xl mx-auto px-6">
      <div ref={containerRef} className="flex flex-col gap-6 md:gap-11">
        {phases.map((item, index) => (
          <article
            key={index}
            data-index={index}
            className={`phase-card border border-[#9EA2AE] rounded-[20px] p-6 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 translate-y-6 ${
              visibleIndexes.includes(index) ? `slide-up delay-${index + 1}` : ''
            }`}
          >
            <div className="inline-block px-3 py-1.5 text-base font-normal rounded-[20px] text-[#4758E0] bg-[#EDEFFE] shadow-[0_13px_32px_0_rgba(200,206,252,0.50)]">
              {item.phase}
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold text-[#131927] -mt-1">
              {item.title}
            </h3>

            <p className="text-lg font-bold text-[#43B75D] -mt-2">{item.year}</p>

            <p className="text-lg text-[#394050] leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
