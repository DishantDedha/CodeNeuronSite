'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { nav } from '@/lib/content'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#FAFAF9]/85 dark:bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#E5E7EB] dark:border-[#1F2937]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Codeneuron home">
            <Logo width={148} height={37} />
          </Link>

          {/* Nav — desktop */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm transition-colors',
                  pathname === link.href
                    ? 'text-[#0F172A] dark:text-[#F8FAFC] font-medium'
                    : 'text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: toggle + CTA */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href={nav.cta.href}
              className="hidden md:inline-flex items-center text-sm font-medium bg-[#0F172A] dark:bg-[#F8FAFC] text-[#F8FAFC] dark:text-[#0F172A] px-4 py-2 rounded-md hover:opacity-80 transition-opacity ml-2"
            >
              {nav.cta.label}
            </Link>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="block w-5 h-px bg-current mb-[5px]" />
              <span className="block w-5 h-px bg-current mb-[5px]" />
              <span className="block w-3.5 h-px bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#FAFAF9] dark:bg-[#0D0D0D] border-l border-[#E5E7EB] dark:border-[#1F2937] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between px-6 h-[68px] border-b border-[#E5E7EB] dark:border-[#1F2937]">
                <Logo width={130} height={33} />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col px-6 pt-8 gap-1 flex-1" aria-label="Mobile navigation">
                {nav.links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 text-lg font-medium text-[#0F172A] dark:text-[#F8FAFC] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] transition-colors border-b border-[#F1F0EE] dark:border-[#1a1a1a]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="px-6 pb-8">
                <Link
                  href={nav.cta.href}
                  className="flex items-center justify-center w-full py-3 bg-[#4F46E5] text-white rounded-md text-sm font-medium hover:bg-[#4338CA] transition-colors"
                >
                  {nav.cta.label}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
