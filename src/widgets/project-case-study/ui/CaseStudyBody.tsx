import { HighlightArticle, type Project } from '@/entities/project'
import { getHeadingId } from '@/shared/lib/dom-id'

/** 본문 섹션의 DOM id. */
export const BODY_SECTION_ID = 'case-study'

/**
 * @alias 케이스 스터디 본문
 * @description 프로젝트의 기술적 하이라이트를 순서대로 나열한다. 각 항목은 배경, 접근, 트레이드오프, 결과 구조를 따른다.
 */
export function CaseStudyBody({ project }: { project: Project }) {
  return (
    <section id={BODY_SECTION_ID} aria-labelledby={getHeadingId(BODY_SECTION_ID)} className="scroll-mt-24">
      <h2 id={getHeadingId(BODY_SECTION_ID)} className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        기술적 고민과 해결
      </h2>
      <div className="mt-6 space-y-6">
        {project.highlights.map((highlight, index) => (
          <HighlightArticle key={highlight.id} highlight={highlight} index={index + 1} />
        ))}
      </div>
    </section>
  )
}
