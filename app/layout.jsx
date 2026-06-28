import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Codeneuron — Software Built to Last',
  description:
    'We build production-grade web, mobile, and AI products for companies that need it done right.',
  openGraph: {
    title: 'Codeneuron — Software Built to Last',
    description: 'Production-grade web, mobile, and AI development.',
    siteName: 'Codeneuron',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
