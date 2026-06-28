'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { manifesto } from '@/lib/content'

export default function Manifesto() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section className="py-28 lg:py-36 bg-[#0F172A] dark:bg-[#030303] overflow-hidden relative">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <blockquote>
            <p
              className="font-semibold text-[#F8FAFC] leading-[1.1] tracking-[-0.03em] whitespace-pre-line max-w-[780px]"
              style={{ fontSize: 'clamp(32px, 4.5vw, 62px)' }}
            >
              {manifesto.statement}
            </p>
            <footer className="mt-8">
              <cite className="not-italic text-xs font-mono text-[#475569]">
                {manifesto.attribution}
              </cite>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
