// Canonical site URL. Set NEXT_PUBLIC_SITE_URL in Vercel once a custom domain is live;
// until then Vercel's production URL is used, so canonical links never point at a preview deploy.
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercelProd) return `https://${vercelProd}`
  return 'https://code-neuron-site.vercel.app'
}

export const site = {
  url: resolveSiteUrl(),
  name: 'Codeneuron',
  title: 'Codeneuron — Web, Mobile & AI Software Development',
  description:
    'Codeneuron is a senior software development studio. We build production-grade web apps, mobile apps, AI integrations and backends for companies that need it done right.',
  email: 'hello@codeneuron.dev',
  locale: 'en_US',
  keywords: [
    'software development company',
    'web app development',
    'mobile app development',
    'React Native development',
    'Next.js development',
    'AI integration',
    'backend and API development',
    'custom software',
    'MVP development',
  ],
  sameAs: [
    'https://github.com/codeneuron',
    'https://linkedin.com/company/codeneuron',
    'https://x.com/codeneuron',
  ],
}

// The root opengraph-image route. Pages that set their own openGraph/twitter objects replace the
// inherited ones wholesale, so the image has to be listed again here.
const shareImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Codeneuron — production-grade web, mobile and AI software',
}

// Per-page metadata helper: sets title, description, canonical URL and matching Open Graph tags.
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type: 'website',
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${site.name}`,
      description,
      images: [shareImage.url],
    },
  }
}
