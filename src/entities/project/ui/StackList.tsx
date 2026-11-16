import { Badge } from '@/shared/ui'

/**
 * @alias 기술 스택 목록 속성
 * @description 기술 스택 배지 목록의 속성.
 */
export interface StackListProps {
  items: readonly string[]
  /** 표시할 최대 개수. 초과분은 "+N"으로 요약한다 */
  limit?: number
  /** 스크린리더용 목록 이름 */
  label?: string
}

/**
 * @alias 기술 스택 목록
 * @description 기술 스택을 배지로 나열한다. limit을 넘으면 나머지 개수만 요약해 카드 높이를 지킨다.
 */
export function StackList({ items, limit, label = '사용 기술' }: StackListProps) {
  const visible = limit ? items.slice(0, limit) : items
  const hidden = items.length - visible.length

  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {visible.map((item) => (
        <li key={item}>
          <Badge>{item}</Badge>
        </li>
      ))}
      {hidden > 0 ? (
        <li>
          <Badge tone="accent">+{hidden}</Badge>
        </li>
      ) : null}
    </ul>
  )
}
