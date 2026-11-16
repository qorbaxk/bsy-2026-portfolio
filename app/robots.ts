import type { MetadataRoute } from 'next'
import { SITE } from '@/shared/config/site'

/** 정적 내보내기(output: 'export') 빌드에서 메타데이터 라우트를 빌드 시점에 한 번만 만들도록 고정한다. */
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.url}/sitemap.xml`,
  }
}
