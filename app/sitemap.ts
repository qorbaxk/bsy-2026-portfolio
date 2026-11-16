import type { MetadataRoute } from 'next'
import { getProjectSlugs } from '@/entities/project'
import { SITE } from '@/shared/config/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getProjectSlugs()
  return [
    { url: SITE.url, changeFrequency: 'monthly', priority: 1 },
    ...slugs.map((slug) => ({
      url: `${SITE.url}/projects/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
