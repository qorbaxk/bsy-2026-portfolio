import { hospitalReservation } from './data/hospital-reservation'
import { marketInsight } from './data/market-insight'
import { pds } from './data/pds'
import { sellfitAi } from './data/sellfit-ai'
import type { FeaturedMetric, Project, ProjectSlug } from '../model/types'

/** order 오름차순으로 정렬된 전체 프로젝트. */
const PROJECTS: readonly Project[] = [marketInsight, sellfitAi, pds, hospitalReservation].toSorted((a, b) => a.order - b.order)

/**
 * @alias 프로젝트 목록 조회
 * @description 표시 순서대로 정렬된 전체 프로젝트를 반환한다. 데이터 출처(CMS·API)가 바뀌어도 호출부는 그대로 두도록 비동기로 둔다.
 */
export async function getProjects(): Promise<readonly Project[]> {
  return PROJECTS
}

/**
 * @alias 프로젝트 단건 조회
 * @description 슬러그로 프로젝트를 찾는다. 없으면 undefined.
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return PROJECTS.find((project) => project.slug === slug)
}

/**
 * @alias 프로젝트 슬러그 목록 조회
 * @description 정적 경로 생성(generateStaticParams)과 사이트맵에 쓰이는 슬러그 목록을 반환한다.
 */
export async function getProjectSlugs(): Promise<readonly ProjectSlug[]> {
  return PROJECTS.map((project) => project.slug)
}

/**
 * @alias 이전·다음 프로젝트 조회
 * @description 상세 페이지 하단 이동 링크용으로, 목록 끝에서는 반대편으로 순환하는 이전·다음 프로젝트를 반환한다.
 */
export async function getAdjacentProjects(
  slug: string,
): Promise<{ previous: Project; next: Project } | undefined> {
  const index = PROJECTS.findIndex((project) => project.slug === slug)
  if (index === -1) return undefined

  const previous = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(index + 1) % PROJECTS.length]
  return previous && next ? { previous, next } : undefined
}

/**
 * @alias 대표 수치 조회
 * @description featured로 표시된 핵심 수치를 출처 프로젝트 이름과 함께 반환한다. 히어로 영역에서 중복 입력 없이 재사용한다.
 */
export async function getFeaturedMetrics(): Promise<readonly FeaturedMetric[]> {
  return PROJECTS.flatMap((project) =>
    project.metrics
      .filter((metric) => metric.featured)
      .map((metric) => ({ ...metric, projectTitle: project.shortTitle })),
  )
}
