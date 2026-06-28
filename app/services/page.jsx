import Link from 'next/link'
import { capabilities, ctaStrip } from '@/lib/content'

function ServiceItem({ item, index }) {
  return (
    <div className="py-10 border-t border-[#E5E7EB] dark:border-[#1F2937]">
      <div className="flex flex-col lg:flex-row lg:gap-16 gap-6">
        <div className="flex-1">
          <span className="text-xs font-mono text-[#94A3B8] dark:text-[#475569] mb-3 block">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="text-xl lg:text-2xl font-medium text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.02em] mb-4">
            {item.title}
          </h2>
          <p className="text-[#475569] dark:text-[#94A3B8] leading-[1.75] mb-5">
            {item.description}
          </p>
          <p className="text-xs font-mono text-[#94A3B8] dark:text-[#3a3a3a]">{item.tech}</p>
        </div>
        <div className="lg:w-[280px] shrink-0">
          <div className="rounded-lg overflow-hidden bg-[#0F172A] dark:bg-[#111111] border border-[#1F2937]/60">
            <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-[#1F2937]/80">
              <span className="w-2 h-2 rounded-full bg-[#FF5F57]/60" />
              <span className="w-2 h-2 rounded-full bg-[#FEBC2E]/60" />
              <span className="w-2 h-2 rounded-full bg-[#28C840]/60" />
            </div>
            <pre className="p-4 text-[11px] font-mono text-[#7DD3FC] leading-[1.65] overflow-x-auto whitespace-pre">
              {item.snippet}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Services — Codeneuron',
  description: 'What we build and how we work.',
}

export default function ServicesPage() {
  return (
    <div className="pt-[68px] min-h-screen bg-[#FAFAF9] dark:bg-[#0A0A0A]">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pt-20 pb-16 border-b border-[#E5E7EB] dark:border-[#1F2937]">
        <p className="text-xs font-mono uppercase tracking-widest text-[#4F46E5] mb-4">Capabilities</p>
        <h1 className="text-[clamp(40px,5vw,72px)] font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] max-w-[680px]">
          What we build.
        </h1>
        <p className="mt-4 text-[#475569] dark:text-[#94A3B8] max-w-[480px] leading-relaxed">
          We don&apos;t do everything. We do these things well, for clients who want them done correctly
          the first time.
        </p>
      </div>

      {/* Services list */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pb-20">
        {capabilities.items.map((item, i) => (
          <ServiceItem key={item.title} item={item} index={i} />
        ))}
        <div className="border-t border-[#E5E7EB] dark:border-[#1F2937]" />
      </div>

      {/* CTA */}
      <div className="bg-[#F4F3F1] dark:bg-[#0D0D0D] py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.02em] mb-2">
              Not sure what you need?
            </h2>
            <p className="text-[#475569] dark:text-[#94A3B8]">
              Tell us about the problem. We&apos;ll figure out the right approach together.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0F172A] dark:bg-[#F8FAFC] text-white dark:text-[#0F172A] px-6 py-3 rounded-md text-sm font-medium hover:opacity-80 transition-opacity shrink-0"
          >
            {ctaStrip.cta}
          </Link>
        </div>
      </div>
    </div>
  )
}
