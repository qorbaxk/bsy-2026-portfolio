import type { ProjectMetric } from '../model/types'

/**
 * @alias 핵심 수치 표시
 * @description 값, 라벨, 기준 설명을 한 덩어리로 보여준다. 값은 크게, 설명은 작게 위계를 둔다.
 */
export function MetricStat({ value, label, caption }: ProjectMetric) {
  return (
    <div>
      <dt className="text-sm text-ink-muted">{label}</dt>
      <dd className="mt-1">
        <span className="block text-2xl font-bold tracking-tight text-ink tabular-nums">{value}</span>
        {caption ? <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">{caption}</span> : null}
      </dd>
    </div>
  )
}
