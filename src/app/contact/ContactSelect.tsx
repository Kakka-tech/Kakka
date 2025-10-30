'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface ContactSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
}

export default function ContactSelect({
  label,
  name,
  children,
  ...props
}: ContactSelectProps) {
  return (
    <div className='flex flex-col gap-1.5 w-full'>
      <label
        htmlFor={name}
        className='text-base font-medium text-[#131927] leading-tight'
      >
        {label}
      </label>
      <div className='relative'>
        <select
          id={name}
          name={name}
          className='w-full px-5 py-3 text-base text-[#394050] bg-white border border-[rgba(57,64,80,0.50)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4758E0] appearance-none'
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          size={20}
          className='absolute right-4 top-1/2 -translate-y-1/2 text-[#394050] pointer-events-none'
        />
      </div>
    </div>
  )
}
