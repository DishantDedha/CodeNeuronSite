import Link from 'next/link'
import { about } from '@/lib/content'

export const metadata = {
  title: 'About — Codeneuron',
  description: 'Who we are and how we think about software.',
}

export default function AboutPage() {
  return (
    <div className="pt-[68px] min-h-screen bg-[#FAFAF9] dark:bg-[#0A0A0A]">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pt-20 pb-16">
        <p className="text-xs font-mono uppercase tracking-widest text-[#4F46E5] mb-4">About</p>
        <h1
          className="font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.04em] leading-[1.04] whitespace-pre-line max-w-[680px]"
          style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
        >
          {about.heading}
        </h1>
        <p className="mt-4 text-[#475569] dark:text-[#94A3B8] text-lg">{about.sub}</p>
      </div>

      {/* Story */}
      <div className="border-t border-[#E5E7EB] dark:border-[#1F2937]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#94A3B8] dark:text-[#475569]">
              Our story
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {about.story.map((para, i) => (
              <p key={i} className="text-[#475569] dark:text-[#94A3B8] leading-[1.75] text-base">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="border-t border-[#E5E7EB] dark:border-[#1F2937] bg-[#F4F3F1] dark:bg-[#0D0D0D]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-20">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#94A3B8] dark:text-[#475569] mb-14">
            What we believe
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
            {about.principles.map((p, i) => (
              <div key={i} className="border-t border-[#E5E7EB] dark:border-[#1F2937] pt-6">
                <h3 className="text-base font-medium text-[#0F172A] dark:text-[#F8FAFC] mb-2 tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-[1.7]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-[#E5E7EB] dark:border-[#1F2937]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-lg font-medium text-[#0F172A] dark:text-[#F8FAFC]">
            Sounds like a fit?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors shrink-0"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </div>
  )
}
