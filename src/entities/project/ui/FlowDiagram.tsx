import { Icon } from '@/shared/ui'
import type { FlowNode } from '../model/types'

/**
 * @alias 처리 흐름 다이어그램
 * @description 파이프라인 단계를 순서 있는 목록으로 그린다. 데스크톱은 가로, 모바일은 세로로 배치하고 화살표는 장식으로 처리한다.
 */
export function FlowDiagram({ nodes }: { nodes: readonly FlowNode[] }) {
  return (
    <ol aria-label="처리 흐름" className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
      {nodes.map((node, index) => (
        <li key={`${node.label}-${index}`} className="flex flex-col items-center gap-2 md:min-w-0 md:flex-1 md:flex-row">
          <div className="w-full rounded-xl border border-line bg-surface-muted px-4 py-3 text-center md:h-full md:flex-1">
            <p className="text-sm font-semibold text-ink">{node.label}</p>
            {node.caption ? <p className="mt-1 text-xs leading-relaxed text-ink-muted">{node.caption}</p> : null}
          </div>
          {index < nodes.length - 1 ? (
            <>
              <Icon name="arrowDown" size={16} className="shrink-0 text-accent md:hidden" />
              <Icon name="arrowRight" size={16} className="hidden shrink-0 text-accent md:block" />
            </>
          ) : null}
        </li>
      ))}
    </ol>
  )
}
