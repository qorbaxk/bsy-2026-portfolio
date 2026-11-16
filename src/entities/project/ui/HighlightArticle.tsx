import { getHeadingId } from '@/shared/lib/dom-id'
import type { CaseHighlight } from '../model/types'
import { CaseLabel } from './CaseLabel'
import { ComparisonStat } from './ComparisonStat'
import { FlowDiagram } from './FlowDiagram'
import { MediaFigure } from './MediaFigure'
import { PointList } from './PointList'
import { TradeoffPanel } from './TradeoffPanel'

/**
 * @alias 케이스 스터디 항목 속성
 * @description 하나의 기술적 문제를 설명하는 아티클의 속성.
 */
export interface HighlightArticleProps {
  highlight: CaseHighlight
  /** 프로젝트 내 순번(1부터) */
  index: number
}

/**
 * @alias 케이스 스터디 항목
 * @description 배경 → 접근 → 흐름 → 트레이드오프 → 결과 순서로 한 문제를 설명한다. 데이터에 있는 블록만 렌더링한다.
 */
export function HighlightArticle({ highlight, index }: HighlightArticleProps) {
  const { id, category, title, lead, media, problem, points, pointsStyle, flow, tradeoff, comparison, outcome, note } = highlight
  const headingId = getHeadingId(id)

  return (
    <article
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 rounded-2xl border border-line bg-surface p-6 sm:p-10"
    >
      <header>
        <p className="label">
          {String(index).padStart(2, '0')} · {category}
        </p>
        <h3 id={headingId} className="mt-3 text-2xl font-bold tracking-tight text-balance text-ink sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-lg leading-relaxed text-ink-muted">{lead}</p>
      </header>

      {media?.length ? (
        <div className="mt-8 space-y-6">
          {media.map((item) => (
            <MediaFigure key={item.src} media={item} />
          ))}
        </div>
      ) : null}

      <div className="mt-8 space-y-8">
        {problem ? (
          <div>
            <CaseLabel>배경</CaseLabel>
            <p className="mt-3 border-l-2 border-line pl-4 leading-relaxed text-ink">{problem}</p>
          </div>
        ) : null}

        <div>
          <CaseLabel>접근</CaseLabel>
          <div className="mt-3">
            <PointList points={points} variant={pointsStyle} />
          </div>
        </div>

        {flow ? (
          <div>
            <CaseLabel>흐름</CaseLabel>
            <div className="mt-3">
              <FlowDiagram nodes={flow} />
            </div>
          </div>
        ) : null}

        {tradeoff ? (
          <div>
            <CaseLabel>트레이드오프</CaseLabel>
            <div className="mt-3">
              <TradeoffPanel {...tradeoff} />
            </div>
          </div>
        ) : null}

        {comparison || outcome ? (
          <div>
            <CaseLabel>결과</CaseLabel>
            <div className="mt-3 space-y-3">
              {comparison ? <ComparisonStat {...comparison} /> : null}
              {outcome ? <p className="leading-relaxed font-medium text-ink">{outcome}</p> : null}
            </div>
          </div>
        ) : null}

        {note ? (
          <p className="rounded-xl bg-surface-muted p-4 text-sm leading-relaxed text-ink-muted">
            <strong className="font-semibold text-ink">{note.label}</strong>
            <span aria-hidden="true"> · </span>
            <span className="sr-only">: </span>
            {note.text}
          </p>
        ) : null}
      </div>
    </article>
  )
}
