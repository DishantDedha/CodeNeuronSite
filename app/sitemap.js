import { site } from '@/lib/site'

const routes = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/work', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/journal', changeFrequency: 'weekly', priority: 0.5 },
]

export default function sitemap() {
  const lastModified = new Date()
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${site.url}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
