'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { hero } from '@/lib/content'
import { fadeUp, stagger } from '@/lib/motion'
import NodeNetwork from '@/components/primitives/NodeNetwork'

function PrimaryCTA({ label, href }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-md text-sm font-medium text-white transition-all duration-200"
      style={{
        background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, #6366F1 0%, #4F46E5 55%)`,
      }}
    >
      <span className="relative z-10">{label}</span>
      <ArrowRight
        size={14}
        className="relative z-10 group-hover:translate-x-1 transition-transform duration-200"
      />
    </Link>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[68px]">
      {/* Background grid — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(79,70,229,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 w-full py-16 sm:py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start w-full min-w-0"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-mono uppercase tracking-widest text-[#4F46E5] mb-5 sm:mb-6"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.25rem,8vw,6.25rem)] font-semibold leading-[1.05] sm:leading-[1.02] tracking-[-0.04em] text-[#0F172A] dark:text-[#F8FAFC] mb-6 sm:mb-7"
            >
              {hero.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base lg:text-[17px] text-[#475569] dark:text-[#94A3B8] leading-[1.7] mb-8 sm:mb-10 max-w-[400px]"
            >
              {hero.sub}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <PrimaryCTA label={hero.primaryCTA.label} href={hero.primaryCTA.href} />
              <Link
                href={hero.secondaryCTA.href}
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-md text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] border border-[#E5E7EB] dark:border-[#1F2937] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {hero.secondaryCTA.label}
              </Link>
            </motion.div>

            {/* Subtle stat row */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-[#E5E7EB] dark:border-[#1F2937] w-full"
            >
              {[
                { value: '40+', label: 'Products shipped' },
                { value: '11wk', label: 'Avg 0→1 time' },
                { value: '100%', label: 'Senior team' },
              ].map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <div className="text-lg sm:text-xl font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.02em]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#94A3B8] mt-0.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Node network */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="hidden lg:block relative h-[520px]"
            aria-hidden="true"
          >
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] h-[360px] rounded-full border border-[#E5E7EB]/40 dark:border-[#1F2937]/60" />
              <div className="absolute w-[240px] h-[240px] rounded-full border border-[#4F46E5]/10" />
            </div>
            <NodeNetwork className="absolute inset-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
