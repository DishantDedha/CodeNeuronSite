import Link from 'next/link'
import { footerContent } from '@/lib/content'
import Logo from './Logo'

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialIconMap = {
  'GitHub': GithubIcon,
  'LinkedIn': LinkedinIcon,
  'X / Twitter': XIcon,
}

export default function Footer() {
  const socials = footerContent.columns
    .find((c) => c.heading === 'Connect')
    ?.links.filter((l) => l.href.startsWith('http')) ?? []

  return (
    <footer className="border-t border-[#E5E7EB] dark:border-[#1F2937] bg-[#FAFAF9] dark:bg-[#0A0A0A]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand column */}
          <div className="sm:col-span-2">
            <Link href="/" aria-label="Codeneuron home">
              <Logo
                width={148}
                height={37}
                className="hover:opacity-70 transition-opacity duration-200"
              />
            </Link>
            <p className="mt-4 text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed max-w-[280px]">
              {footerContent.tagline}
            </p>
            <div className="flex items-center gap-1 mt-6">
              {socials.map((link) => {
                const Icon = socialIconMap[link.label]
                return Icon ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#94A3B8] dark:text-[#475569] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
                    aria-label={link.label}
                  >
                    <Icon />
                  </a>
                ) : null
              })}
            </div>
          </div>

          {/* Nav columns */}
          {footerContent.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] dark:text-[#475569] mb-5">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
                      {...(link.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-8 border-t border-[#E5E7EB] dark:border-[#1F2937]">
          <p className="text-xs font-mono text-[#94A3B8] dark:text-[#475569]">
            {footerContent.copyright}
          </p>
          <p className="text-xs font-mono text-[#D1D5DB] dark:text-[#2a2a2a]">
            {footerContent.legal}
          </p>
        </div>
      </div>
    </footer>
  )
}
