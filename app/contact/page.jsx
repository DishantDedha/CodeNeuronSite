import { contact } from '@/lib/content'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact — Codeneuron',
  description: 'Start a conversation with the Codeneuron team.',
}

export default function ContactPage() {
  return (
    <div className="pt-[68px] min-h-screen bg-[#FAFAF9] dark:bg-[#0A0A0A]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#4F46E5] mb-4">Contact</p>
            <h1
              className="font-semibold text-[#0F172A] dark:text-[#F8FAFC] tracking-[-0.04em] leading-[1.04] mb-6"
              style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
            >
              {contact.heading}
            </h1>
            <p className="text-[#475569] dark:text-[#94A3B8] leading-relaxed mb-10">
              {contact.sub}
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] dark:text-[#475569] mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-mono text-[#0F172A] dark:text-[#F8FAFC] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] dark:text-[#475569] mb-2">
                  Response time
                </p>
                <p className="text-sm text-[#475569] dark:text-[#94A3B8]">
                  Within one business day.
                </p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] dark:text-[#475569] mb-2">
                  Availability
                </p>
                <p className="text-sm text-[#475569] dark:text-[#94A3B8]">
                  Currently taking on new projects for Q3 2026.
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
