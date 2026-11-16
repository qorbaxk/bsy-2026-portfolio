import type { MetadataRoute } from 'next'
import { getProjectSlugs } from '@/entities/project'
import { SITE } from '@/shared/config/site'

/** 정적 내보내기(output: 'export') 빌드에서 메타데이터 라우트를 빌드 시점에 한 번만 만들도록 고정한다. */
export const dynamic = 'force-static'

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
