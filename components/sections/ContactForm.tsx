'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-msv-dark-2 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-msv-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-msv-dark-2 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-msv-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-msv-dark-2 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-msv-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-msv-dark-2 mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-msv-blue focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-msv-dark-2 mb-2">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-msv-blue focus:border-transparent"
        >
          <option value="">Select a service...</option>
          <option value="exploration">Exploration & Geological Services</option>
          <option value="resource">Resource & Reserve Development</option>
          <option value="epcm">Project Delivery (EPCM)</option>
          <option value="operational">Operational Readiness & Support</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-msv-dark-2 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-msv-blue focus:border-transparent"
        />
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
