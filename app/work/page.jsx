import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { work, ctaStrip } from '@/lib/content'

function WorkCard({ item }) {
  return (
    <article className="flex flex-col lg:flex-row border border-[#E5E7EB] dark:border-[#1F2937] rounded-xl overflow-hidden bg-white dark:bg-[#0D0D0D]">
      <div
        className="h-48 lg:h-auto lg:w-72 shrink-0 flex items-center justify-center"
        style={{ backgroundColor: item.accent }}
        aria-hidden="true"
      >
        <span
          className="font-semibold tracking-[-0.04em] select-none"
          style={{ fontSize: 'clamp(40px, 12vw, 72px)', color: 'rgba(255,255,255,0.08)' }}
        >
          {item.name}
        </span>
      </div>
      <div className="flex-1 p-5 sm:p-8 lg:p-10 min-w-0">
        <div className="flex flex-wrap gap-2 mb-5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-[#E5E7EB] dark:border-[#1F2937] text-[#475569] dark:text-[#94A3B8]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.02em] mb-3">
          {item.name}
        </h2>
        <p className="text-sm font-medium text-[#4F46E5] mb-3">{item.outcome}</p>
        <p className="text-[#475569] dark:text-[#94A3B8] leading-relaxed">{item.description}</p>
      </div>
    </article>
  )
}

export const metadata = {
  title: 'Work — Codeneuron',
  description: 'Selected projects from the Codeneuron team.',
}

export default function WorkPage() {
  return (
    <div className="pt-[68px] min-h-screen bg-[#FAFAF9] dark:bg-[#0A0A0A]">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-[#E5E7EB] dark:border-[#1F2937]">
        <p className="text-xs font-mono uppercase tracking-widest text-[#4F46E5] mb-4">Portfolio</p>
        <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] max-w-[640px]">
          Things we&apos;ve built.
        </h1>
        <p className="mt-4 text-[#475569] dark:text-[#94A3B8] max-w-[480px] leading-relaxed">
          A sample of what we&apos;ve shipped. Every project started with a messy brief and ended with
          something that actually runs.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 flex flex-col gap-6">
        {work.items.map((item) => (
          <WorkCard key={item.name} item={item} />
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 border-t border-[#E5E7EB] dark:border-[#1F2937]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-medium text-[#0F172A] dark:text-[#F8FAFC] mb-1">
              Want to add your project to this list?
            </p>
            <p className="text-sm text-[#475569] dark:text-[#94A3B8]">
              We&apos;re selective. That&apos;s the point.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors shrink-0"
          >
            Start a project <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
