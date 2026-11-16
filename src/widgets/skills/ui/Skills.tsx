import type { SkillGroup } from '@/entities/skill'
import { Badge, Section, SectionHeading } from '@/shared/ui'

/**
 * @alias 기술 스택 섹션
 * @description 기술 그룹을 점선으로 구분된 행으로 나열한다. 번호, 그룹 이름과 설명, 기술 배지가 한 행에 놓인다.
 */
export function Skills({ groups }: { groups: readonly SkillGroup[] }) {
  return (
    <Section id="skills">
      <SectionHeading
        sectionId="skills"
        index={2}
        label="Skills"
        title="Tech stack"
        description="React 기반 화면 설계와 렌더링 개선이 주력이고, 원인이 데이터나 운영에 있을 때는 API와 배치까지 직접 구현합니다."
      />

      <ul className="mt-16">
        {groups.map((group, index) => (
          <li
            key={group.id}
            className="guide-bleed grid gap-x-5 gap-y-5 border-t border-dashed border-guide py-8 last:border-b md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.6fr)] md:py-10"
          >
            <span aria-hidden="true" className="font-display text-sm font-bold text-ink-soft">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{group.title}</h3>
              {group.description ? <p className="mt-2 leading-relaxed text-ink-muted">{group.description}</p> : null}
            </div>
            <ul aria-label={`${group.title} 기술`} className="flex flex-wrap content-start gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge tone={group.primary ? 'accent' : 'neutral'}>{item}</Badge>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
