import { cn } from '@/shared/lib/cn'
import type { CasePoint } from '../model/types'

/**
 * @alias 접근 항목 목록 속성
 * @description 기술적 결정 항목 목록의 속성.
 */
export interface PointListProps {
  points: readonly CasePoint[]
  /** list: 카드 그리드, steps: 번호가 붙은 순차 단계 */
  variant: 'list' | 'steps'
}

/**
 * @alias 접근 항목 목록
 * @description 결정 항목을 카드 그리드 또는 번호 단계로 보여준다. 순서가 의미 있으면 ol, 아니면 ul로 렌더링해 의미를 보존한다.
 */
export function PointList({ points, variant }: PointListProps) {
  if (variant === 'steps') {
    return (
      <ol className="space-y-3">
        {points.map((point, index) => (
          <li key={point.title} className="flex gap-4 rounded-xl border border-line bg-surface-muted p-4 sm:p-5">
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-soft font-display text-xs font-semibold text-accent"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <h5 className="font-semibold text-ink">{point.title}</h5>
              <p className="mt-1 leading-relaxed text-ink-muted">{point.description}</p>
            </div>
          </li>
        ))}
      </ol>
    )
  }

  return (
    <ul className={cn('grid gap-3', points.length > 1 && 'sm:grid-cols-2')}>
      {points.map((point) => (
        <li key={point.title} className="rounded-xl border border-line bg-surface-muted p-4 sm:p-5">
          <h5 className="font-semibold text-ink">{point.title}</h5>
          <p className="mt-1 leading-relaxed text-ink-muted">{point.description}</p>
        </li>
      ))}
    </ul>
  )
}
