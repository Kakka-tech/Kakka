'use client'

import React from 'react'

interface ContactTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

export default function ContactTextArea({
  label,
  name,
  ...props
}: ContactTextAreaProps) {
  return (
    <div className='flex flex-col gap-1.5 w-full'>
      <label
        htmlFor={name}
        className='text-base font-medium text-[#131927] leading-tight'
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className='w-full px-5 py-3 text-base text-[#394050] bg-white border border-[rgba(57,64,80,0.50)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4758E0] placeholder:text-gray-400'
        {...props}
      />
    </div>
  )
}
