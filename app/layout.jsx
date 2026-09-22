import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { site } from '@/lib/site'
import { work } from '@/lib/content'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    title: site.title,
    description: site.description,
    url: '/',
    siteName: site.name,
    locale: site.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  formatDetection: { email: false, telephone: false, address: false },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF9' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
}

// Structured data so search engines understand who we are and what we've built.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      email: site.email,
      description: site.description,
      sameAs: site.sameAs,
      knowsAbout: ['Web development', 'Mobile app development', 'AI integration', 'Backend development', 'Systems design'],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#service`,
      name: site.name,
      url: site.url,
      email: site.email,
      provider: { '@id': `${site.url}/#organization` },
      areaServed: 'Worldwide',
      serviceType: ['Web application development', 'Mobile app development', 'AI integration', 'API and backend development'],
    },
    {
      '@type': 'ItemList',
      '@id': `${site.url}/work#projects`,
      name: 'Selected work',
      itemListElement: work.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: item.name,
          description: item.description,
          creator: { '@id': `${site.url}/#organization` },
          keywords: item.tags.join(', '),
        },
      })),
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
