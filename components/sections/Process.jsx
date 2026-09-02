'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { process } from '@/lib/content'

function ProcessStep({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
      className="flex flex-col sm:flex-row sm:gap-10 py-11 border-t border-[#E5E7EB] dark:border-[#1F2937]"
    >
      {/* Number */}
      <div className="shrink-0 mb-4 sm:mb-0 w-[100px]">
        <span
          className="font-mono font-semibold leading-none select-none text-[#E5E7EB] dark:text-[#1a1a1a]"
          style={{ fontSize: 'clamp(64px, 6vw, 88px)' }}
          aria-hidden="true"
        >
          {step.num}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 sm:pt-3">
        <h3 className="text-xl lg:text-2xl font-medium text-[#0F172A] dark:text-[#F8FAFC] mb-3 tracking-[-0.02em]">
          {step.title}
        </h3>
        <p className="text-[#475569] dark:text-[#94A3B8] leading-[1.75] text-sm lg:text-base max-w-[520px]">
          {step.body}
        </p>
      </div>
    </motion.div>
  )
}

export default function Process() {
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, margin: '-60px 0px' })

  return (
    <section className="py-16 sm:py-24 lg:py-36 bg-[#FAFAF9] dark:bg-[#0A0A0A]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
          className="mb-2"
        >
          <h2 className="text-[2rem] sm:text-4xl lg:text-[52px] font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.03em] leading-tight">
            {process.heading}
          </h2>
        </motion.div>

        <div>
          {process.steps.map((step, i) => (
            <ProcessStep key={step.num} step={step} index={i} />
          ))}
          <div className="border-t border-[#E5E7EB] dark:border-[#1F2937]" />
        </div>
      </div>
    </section>
  )
}
