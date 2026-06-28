'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { capabilities } from '@/lib/content'

function CapabilityItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.05 * (index % 3), ease: [0.21, 0.45, 0.27, 0.9] }}
      className="py-10 border-t border-[#E5E7EB] dark:border-[#1F2937]"
    >
      <div className="flex flex-col md:flex-row md:items-start md:gap-12 gap-6">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[17px] font-medium text-[#0F172A] dark:text-[#F8FAFC] mb-3 tracking-[-0.01em]">
            {item.title}
          </h3>
          <p className="text-[#475569] dark:text-[#94A3B8] leading-[1.7] text-sm mb-4">
            {item.description}
          </p>
          <p className="text-[11px] font-mono text-[#94A3B8] dark:text-[#3a3a3a] leading-relaxed">
            {item.tech}
          </p>
        </div>

        {/* Code snippet */}
        <div className="md:w-[260px] shrink-0">
          <div className="rounded-lg overflow-hidden bg-[#0F172A] dark:bg-[#111111] border border-[#1F2937]/60">
            <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-[#1F2937]/80">
              <span className="w-2 h-2 rounded-full bg-[#FF5F57]/60" />
              <span className="w-2 h-2 rounded-full bg-[#FEBC2E]/60" />
              <span className="w-2 h-2 rounded-full bg-[#28C840]/60" />
            </div>
            <pre className="p-4 text-[11px] font-mono text-[#7DD3FC] leading-[1.6] overflow-x-auto whitespace-pre">
              {item.snippet}
            </pre>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Capabilities() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px 0px' })

  return (
    <section className="py-28 lg:py-36 bg-[#FAFAF9] dark:bg-[#0A0A0A]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
          {/* Sticky heading */}
          <div className="relative">
            <motion.div
              ref={headingRef}
              initial={{ opacity: 0, y: 16 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
              className="lg:sticky lg:top-28"
            >
              <h2 className="text-4xl lg:text-[52px] font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] mb-4">
                {capabilities.heading}
              </h2>
              <p className="text-sm text-[#94A3B8] dark:text-[#475569]">
                {capabilities.sub}
              </p>
            </motion.div>
          </div>

          {/* List */}
          <div>
            {capabilities.items.map((item, i) => (
              <CapabilityItem key={item.title} item={item} index={i} />
            ))}
            <div className="border-t border-[#E5E7EB] dark:border-[#1F2937]" />
          </div>
        </div>
      </div>
    </section>
  )
}
