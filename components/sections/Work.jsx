'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { work } from '@/lib/content'

function WorkCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.21, 0.45, 0.27, 0.9] }}
    >
      <Link
        href="/work"
        className="group flex flex-col lg:flex-row border border-[#E5E7EB] dark:border-[#1F2937] rounded-xl overflow-hidden hover:border-[#4F46E5]/40 dark:hover:border-[#4F46E5]/30 transition-all duration-300 bg-white dark:bg-[#0D0D0D]"
      >
        {/* Visual block */}
        <div
          className="h-44 lg:h-auto lg:w-56 xl:w-64 shrink-0 flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: item.accent }}
        >
          <span
            className="font-semibold tracking-[-0.04em] select-none"
            style={{ fontSize: 'clamp(48px, 5vw, 72px)', color: 'rgba(255,255,255,0.08)' }}
          >
            {item.name}
          </span>
          {/* Accent overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.18) 0%, transparent 70%)' }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 sm:p-7 lg:p-8 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl lg:text-2xl font-medium text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.02em]">
                {item.name}
              </h3>
              <ArrowUpRight
                size={17}
                className="text-[#94A3B8] group-hover:text-[#4F46E5] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1 shrink-0"
              />
            </div>
            <p className="text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] mb-2">
              {item.outcome}
            </p>
            <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
              {item.description}
            </p>
          </div>
          <div className="flex gap-2 mt-5 flex-wrap">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-[#E5E7EB] dark:border-[#1F2937] text-[#475569] dark:text-[#94A3B8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Work() {
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, margin: '-60px 0px' })

  return (
    <section className="py-16 sm:py-24 lg:py-36 bg-[#F4F3F1] dark:bg-[#0D0D0D]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
          className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-[2rem] sm:text-4xl lg:text-[52px] font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.03em] leading-tight mb-2">
              {work.heading}
            </h2>
            <p className="text-sm text-[#94A3B8] dark:text-[#475569]">{work.sub}</p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-[#475569] dark:text-[#94A3B8] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] transition-colors shrink-0"
          >
            View all <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="flex flex-col gap-4">
          {work.items.map((item, i) => (
            <WorkCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
