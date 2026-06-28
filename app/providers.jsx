'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

function EasterEgg() {
  useEffect(() => {
    console.log(
      '%c\n  ╔══════════════════════════════════╗\n  ║  Built by Codeneuron             ║\n  ║  We write code worth reading.    ║\n  ║                                  ║\n  ║  hello@codeneuron.dev            ║\n  ╚══════════════════════════════════╝\n',
      'color: #4F46E5; font-family: monospace;'
    )
  }, [])

  return null
}

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
      <EasterEgg />
      {children}
    </ThemeProvider>
  )
}
