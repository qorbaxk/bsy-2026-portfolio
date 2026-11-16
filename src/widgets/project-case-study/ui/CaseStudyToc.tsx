import { SectionNav } from '@/features/section-nav'
import type { Project } from '@/entities/project'
import type { NavItem } from '@/shared/types/navigation'
import { OVERVIEW_SECTION_ID } from './CaseStudyOverview'

/**
 * @alias 케이스 스터디 목차
 * @description 개요와 각 하이라이트로 이동하는 고정 목차. 스크롤 위치에 따라 현재 항목이 강조된다.
 */
export function CaseStudyToc({ project }: { project: Project }) {
  const items: NavItem[] = [
    { id: OVERVIEW_SECTION_ID, label: '한눈에 보기' },
    ...project.highlights.map((highlight, index) => ({
      id: highlight.id,
      label: `${String(index + 1).padStart(2, '0')} ${highlight.title}`,
    })),
  ]

  return (
    <div>
      <p className="mb-2 px-3 label">목차</p>
      <SectionNav items={items} ariaLabel={`${project.shortTitle} 목차`} orientation="vertical" basePath="" />
    </div>
  )
}
