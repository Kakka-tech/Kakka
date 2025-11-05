'use client'

import React, { useState } from 'react'
import Button from '@/components/Button'
import ContactInput from './ContactInput'
import ContactTextArea from './ContactTextArea'
import ContactSelect from './ContactSelect'
import { submitContactForm } from '@/lib/api'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    companyName: '',
    service: '',
    budget: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await submitContactForm(formData)

      if (response.error) {
        setSubmitStatus({
          type: 'error',
          message: response.error.message,
        })
      } else {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        })
        // Reset form on success
        setFormData({
          firstName: '',
          email: '',
          companyName: '',
          service: '',
          budget: '',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
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
        required
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

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div>
        <Button
          type='submit'
          variant='primary'
          size='md'
          className='w-full !rounded-lg !py-3.5 !text-base'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  )
}
