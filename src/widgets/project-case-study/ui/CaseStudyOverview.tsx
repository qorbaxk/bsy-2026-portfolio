import { MetricStat, type Project } from '@/entities/project'
import { getHeadingId } from '@/shared/lib/dom-id'

/** 개요 섹션의 DOM id. 목차와 aria-labelledby가 공유한다. */
export const OVERVIEW_SECTION_ID = 'overview'

/**
 * @alias 케이스 스터디 개요
 * @description 핵심 기여, 대표 수치, 담당 업무, 성과를 한 화면에서 훑어볼 수 있게 정리한 요약 영역.
 */
export function CaseStudyOverview({ project }: { project: Project }) {
  const { contributions, metrics, responsibilities, outcome } = project
  const headingId = getHeadingId(OVERVIEW_SECTION_ID)

  return (
    <section id={OVERVIEW_SECTION_ID} aria-labelledby={headingId} className="scroll-mt-24">
      <h2 id={headingId} className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        한눈에 보기
      </h2>

      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {contributions.map((item, index) => (
          <li key={item.title} className="rounded-xl border border-line bg-surface p-5">
            <span aria-hidden="true" className="font-display text-xs font-medium text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-2 font-semibold text-ink">{item.title}</p>
            {item.description ? <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</p> : null}
          </li>
        ))}
      </ul>

      {metrics.length > 0 ? (
        <dl className="mt-6 grid gap-6 rounded-xl border border-line bg-surface p-6 sm:grid-cols-2">
          {metrics.map((metric) => (
            <MetricStat key={metric.label} {...metric} />
          ))}
        </dl>
      ) : null}

      <div className="mt-10">
        <h3 className="label">담당 업무</h3>
        <ul className="mt-4 space-y-2.5">
          {responsibilities.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-ink">
              <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 rounded-xl border border-accent/40 bg-accent-soft p-5 leading-relaxed font-medium text-ink sm:p-6">
        <span className="mb-1 block label">성과</span>
        {outcome}
      </p>
    </section>
  )
}
