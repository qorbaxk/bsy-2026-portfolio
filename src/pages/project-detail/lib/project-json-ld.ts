import type { Project } from '@/entities/project'
import { SITE } from '@/shared/config/site'

/**
 * @alias 프로젝트 구조화 데이터 생성
 * @description 프로젝트 상세 페이지를 작성자가 명시된 창작물(CreativeWork)로 설명하는 schema.org JSON-LD 객체를 만든다.
 */
export function buildProjectJsonLd(project: Project): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    url: `${SITE.url}/projects/${project.slug}`,
    author: { '@type': 'Person', name: SITE.name, url: SITE.url },
    keywords: project.stack.join(', '),
    inLanguage: 'ko-KR',
  }
}
