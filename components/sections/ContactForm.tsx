'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

const WEB3FORMS_ACCESS_KEY = '85999e51-00ef-42bd-9eea-ae615eb25e42'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData(form)
      formData.append('access_key', WEB3FORMS_ACCESS_KEY)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="subject" value="New Contact Form Submission - MSV Website" />

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-msv-dark-2 mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isSubmitting}
          placeholder="Your full name"
          className="w-full px-4 py-3 border border-msv-light-2/50 rounded-xl focus:ring-2 focus:ring-msv-blue focus:border-transparent transition-all disabled:bg-msv-light-2/20 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-msv-dark-2 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isSubmitting}
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 border border-msv-light-2/50 rounded-xl focus:ring-2 focus:ring-msv-blue focus:border-transparent transition-all disabled:bg-msv-light-2/20 disabled:cursor-not-allowed"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-msv-dark-2 mb-2">
          Service Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          disabled={isSubmitting}
          defaultValue=""
          className="w-full px-4 py-3 border border-msv-light-2/50 rounded-xl focus:ring-2 focus:ring-msv-blue focus:border-transparent transition-all disabled:bg-msv-light-2/20 disabled:cursor-not-allowed appearance-none bg-white"
        >
          <option value="" disabled>Select a service...</option>
          <option value="Exploration & Geological Services">Exploration & Geological Services</option>
          <option value="Resource & Reserve Development">Resource & Reserve Development</option>
          <option value="Project Delivery (EPCM)">Project Delivery (EPCM)</option>
          <option value="Operational Readiness & Support">Operational Readiness & Support</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-msv-dark-2 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={isSubmitting}
          rows={5}
          placeholder="Tell us about your project or inquiry..."
          className="w-full px-4 py-3 border border-msv-light-2/50 rounded-xl focus:ring-2 focus:ring-msv-blue focus:border-transparent transition-all resize-none disabled:bg-msv-light-2/20 disabled:cursor-not-allowed"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="flex items-center gap-3 p-4 bg-msv-mint/10 border border-msv-mint/30 rounded-xl text-msv-green">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">Thank you! Your message has been sent. We&apos;ll get back to you within 24-48 hours.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full py-4"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
