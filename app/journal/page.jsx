import Link from 'next/link'

export const metadata = {
  title: 'Journal — Codeneuron',
  description: 'Writing on software, architecture, and building things well.',
}

export default function JournalPage() {
  return (
    <div className="pt-[68px] min-h-screen bg-[#FAFAF9] dark:bg-[#0A0A0A]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pt-20 pb-40">
        <p className="text-xs font-mono uppercase tracking-widest text-[#4F46E5] mb-4">Journal</p>
        <h1 className="text-[clamp(40px,5vw,72px)] font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] max-w-[560px] mb-6">
          Writing is coming.
        </h1>
        <p className="text-[#475569] dark:text-[#94A3B8] leading-relaxed max-w-[440px] mb-10">
          We&apos;re working on a few pieces about system design, AI integration patterns, and hard lessons
          from production. No newsletters. No fluff. Check back soon.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] border border-[#E5E7EB] dark:border-[#1F2937] px-5 py-2.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          Get notified when we publish
        </Link>
      </div>
    </div>
  )
}
