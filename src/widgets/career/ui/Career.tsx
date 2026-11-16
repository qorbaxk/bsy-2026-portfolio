import { formatPeriod, formatTenure, OngoingTenure, type CareerHistory } from '@/entities/career'
import { Section, SectionHeading } from '@/shared/ui'

/**
 * @alias 경력 섹션
 * @description 경력을 점선으로 구분된 행(왼쪽 회사·기간, 오른쪽 담당 업무)으로 보여주고, 아래에 학력·자격증을 둔다.
 */
export function Career({ history }: { history: CareerHistory }) {
  const { experiences, education, certifications } = history

  return (
    <Section id="career">
      <SectionHeading sectionId="career" index={4} label="Career" title="Experience" description="경력과 학력, 자격 사항입니다." />

      <ol className="mt-16">
        {experiences.map((experience) => (
          <li
            key={experience.company}
            className="guide-bleed grid gap-x-5 gap-y-6 border-t border-dashed border-guide py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]"
          >
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{experience.company}</h3>
              <p className="mt-2 text-ink-muted">{experience.role}</p>
              <p className="mt-1 text-sm text-ink-muted">
                {formatPeriod(experience.startedAt, experience.endedAt)} ·{' '}
                {experience.endedAt ? (
                  formatTenure(experience.startedAt, experience.endedAt)
                ) : (
                  <OngoingTenure startedAt={experience.startedAt} initialText={formatTenure(experience.startedAt)} />
                )}
              </p>
            </div>
            <ul className="space-y-2.5 text-ink">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="mt-[0.7em] size-1 shrink-0 bg-ink" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="guide-bleed grid gap-x-5 gap-y-10 border-t border-dashed border-guide py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
        <h3 className="font-latin text-2xl font-extrabold tracking-tight text-ink">Education &amp; Certificates</h3>
        <div className="grid gap-10 sm:grid-cols-2">
          <section aria-labelledby="education-heading">
            <h4 id="education-heading" className="label">
              학력
            </h4>
            <ul className="mt-3 space-y-3">
              {education.map((item) => (
                <li key={item.school}>
                  <p className="font-semibold text-ink">{item.school}</p>
                  <p className="text-sm text-ink-muted">
                    {item.major} · {item.period} · {item.status}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="certification-heading">
            <h4 id="certification-heading" className="label">
              자격증
            </h4>
            <ul className="mt-3 space-y-3">
              {certifications.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold text-ink">{item.name}</span>
                  <span className="text-sm text-ink-muted tabular-nums">{item.acquiredAt}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Section>
  )
}
