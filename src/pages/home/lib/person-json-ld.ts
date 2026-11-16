import type { Profile } from '@/entities/profile'
import { SITE } from '@/shared/config/site'

/**
 * @alias 인물 구조화 데이터 생성
 * @description 검색엔진이 사이트 주인을 인물(Person)로 이해하도록 schema.org JSON-LD 객체를 만든다.
 */
export function buildPersonJsonLd(profile: Profile): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    alternateName: profile.nameEn,
    jobTitle: profile.role,
    url: SITE.url,
    email: `mailto:${profile.email}`,
    sameAs: [profile.github],
    worksFor: { '@type': 'Organization', name: profile.companies[0] },
    knowsAbout: ['React', 'TypeScript', 'Next.js', 'Frontend Development'],
  }
}
