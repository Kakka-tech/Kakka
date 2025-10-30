'use client'

import React, { useState } from 'react'
import Button from '@/components/Button'
import ContactInput from './ContactInput'
import ContactTextArea from './ContactTextArea'
import ContactSelect from './ContactSelect'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    companyName: '',
    service: '',
    budget: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Form submitted! (Check console for data)')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-6 flex-1 w-full mt-10 lg:mt-0'
    >
      <ContactInput
        label='First Name'
        name='firstName'
        placeholder='First Name'
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <ContactInput
        label='Email Address'
        name='email'
        type='email'
        placeholder='Kakka@gmail.com'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <ContactInput
        label='Company Name'
        name='companyName'
        placeholder='Your Company'
        value={formData.companyName}
        onChange={handleChange}
      />
      <ContactSelect
        label='Service Interested In'
        name='service'
        value={formData.service}
        onChange={handleChange}
      >
        <option value='' disabled>
          Select a Service
        </option>
        <option value='web-development'>Web Development</option>
        <option value='ui-ux-design'>UI/UX Design</option>
        <option value='digital-marketing'>Digital Marketing</option>
        <option value='consulting'>Consulting</option>
      </ContactSelect>
      <ContactTextArea
        label='Project Budget'
        name='budget'
        placeholder='Tell us about your project'
        value={formData.budget}
        onChange={handleChange}
        rows={4}
      />
      <div>
        <Button
          type='submit'
          variant='primary'
          size='md'
          className='w-full !rounded-lg !py-3.5 !text-base'
        >
          Send Message
        </Button>
      </div>
    </form>
  )
}
