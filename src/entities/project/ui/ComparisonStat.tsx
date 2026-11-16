import { Icon } from '@/shared/ui'
import type { CaseComparison } from '../model/types'

/**
 * @alias 전후 비교 표시
 * @description 개선 전 값과 후 값을 화살표로 대비한다. 스크린리더에는 "전 → 후" 문장으로 읽힌다.
 */
export function ComparisonStat({ label, before, after, caption }: CaseComparison) {
  return (
    <figure className="rounded-xl border border-line bg-surface-muted p-5 sm:p-6">
      <figcaption className="text-sm text-ink-muted">{label}</figcaption>
      <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="text-xl font-semibold text-ink-muted line-through decoration-1 sm:text-2xl">
          <span className="sr-only">개선 전 </span>
          {before}
        </span>
        <Icon name="arrowRight" size={20} className="text-accent" />
        <span className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
          <span className="sr-only">개선 후 </span>
          {after}
        </span>
      </p>
      {caption ? <p className="mt-2 text-xs leading-relaxed text-ink-muted">{caption}</p> : null}
    </figure>
  )
}
