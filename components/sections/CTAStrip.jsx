'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ctaStrip } from '@/lib/content'

export default function CTAStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <section className="py-16 sm:py-24 lg:py-36 bg-[#FAFAF9] dark:bg-[#0A0A0A]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.21, 0.45, 0.27, 0.9] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 lg:gap-20"
        >
          {/* Heading + sub */}
          <div className="flex-1 max-w-[560px] min-w-0">
            <h2
              className="font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.035em] leading-[1.1] sm:leading-[1.06] mb-4"
              style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.625rem)' }}
            >
              {ctaStrip.question}
            </h2>
            <p className="text-[#475569] dark:text-[#94A3B8] text-base">
              {ctaStrip.sub}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors"
            >
              {ctaStrip.cta}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <a
              href={`mailto:${ctaStrip.email}`}
              className="text-sm font-mono text-[#475569] dark:text-[#94A3B8] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] transition-colors break-all sm:break-normal"
            >
              {ctaStrip.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
