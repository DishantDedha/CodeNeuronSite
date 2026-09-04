'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { contact } from '@/lib/content'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (submitted) {
    return (
      <div className="py-12 flex flex-col items-start">
        <div className="w-8 h-8 rounded-full bg-[#4F46E5]/10 flex items-center justify-center mb-6">
          <div className="w-4 h-4 rounded-full bg-[#4F46E5]" />
        </div>
        <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.02em] mb-3">
          Got it. We&apos;ll be in touch.
        </h2>
        <p className="text-[#475569] dark:text-[#94A3B8] leading-relaxed">
          Expect a reply within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] dark:text-[#475569]"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-white dark:bg-[#0D0D0D] border border-[#E5E7EB] dark:border-[#1F2937] rounded-md px-4 py-3 text-sm text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] dark:placeholder:text-[#475569] focus:outline-none focus:border-[#4F46E5] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] dark:text-[#475569]"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="bg-white dark:bg-[#0D0D0D] border border-[#E5E7EB] dark:border-[#1F2937] rounded-md px-4 py-3 text-sm text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] dark:placeholder:text-[#475569] focus:outline-none focus:border-[#4F46E5] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="company"
          className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] dark:text-[#475569]"
        >
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Optional"
          className="bg-white dark:bg-[#0D0D0D] border border-[#E5E7EB] dark:border-[#1F2937] rounded-md px-4 py-3 text-sm text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] dark:placeholder:text-[#475569] focus:outline-none focus:border-[#4F46E5] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="projectType"
          className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] dark:text-[#475569]"
        >
          What are you building? *
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          value={formData.projectType}
          onChange={handleChange}
          className="bg-white dark:bg-[#0D0D0D] border border-[#E5E7EB] dark:border-[#1F2937] rounded-md px-4 py-3 text-sm text-[#0F172A] dark:text-[#F8FAFC] focus:outline-none focus:border-[#4F46E5] transition-colors appearance-none"
        >
          <option value="">Select one...</option>
          {contact.projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] dark:text-[#475569]"
        >
          Tell us about it *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="What are you trying to build? What's the deadline? What's been tried already?"
          className="bg-white dark:bg-[#0D0D0D] border border-[#E5E7EB] dark:border-[#1F2937] rounded-md px-4 py-3 text-sm text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] dark:placeholder:text-[#475569] focus:outline-none focus:border-[#4F46E5] transition-colors resize-none leading-relaxed"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors self-stretch sm:self-start"
      >
        Send it
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform duration-200"
        />
      </button>
    </form>
  )
}
