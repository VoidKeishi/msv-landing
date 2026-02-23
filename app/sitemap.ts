import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dma-msv.com'

  const routes = [
    { path: '', changeFrequency: 'monthly' as const, priority: 1 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/team', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/projects', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'yearly' as const, priority: 0.6 },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        en: `${baseUrl}${route.path}`,
        vi: `${baseUrl}/vi${route.path}`,
      },
    },
  }))
}
