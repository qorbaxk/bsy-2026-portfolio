import type { CaseTradeoff } from '../model/types'

/**
 * @alias 트레이드오프 패널
 * @description 선택으로 얻은 것과 감수한 것을 좌우로 나란히 보여준다. 모바일에서는 세로로 쌓인다.
 */
export function TradeoffPanel({ gain, cost }: CaseTradeoff) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-accent/40 bg-accent-soft p-4 sm:p-5">
        <dt className="font-display text-xs font-medium text-accent">얻은 것</dt>
        <dd className="mt-2 leading-relaxed text-ink">{gain}</dd>
      </div>
      <div className="rounded-xl border border-line bg-surface-muted p-4 sm:p-5">
        <dt className="font-display text-xs font-medium text-ink-muted">감수한 것</dt>
        <dd className="mt-2 leading-relaxed text-ink">{cost}</dd>
      </div>
    </dl>
  )
}
