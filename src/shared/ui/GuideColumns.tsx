import { cn } from '../lib/cn'

/**
 * @alias 가이드 구성
 * @description 세로 점선의 개수. edges는 양끝 2줄, halves는 양끝과 가운데 3줄, quarters는 4칸을 나누는 5줄이다. 모바일(md 미만)에서는 한 단계 줄어든다.
 */
export type GuideVariant = 'edges' | 'halves' | 'quarters'

/** 양끝 선을 제외한 안쪽 선의 위치와, 선이 보이는 화면 조건. */
const INNER_LINES: Record<GuideVariant, readonly { position: string; visibility: string }[]> = {
  edges: [],
  halves: [{ position: 'left-1/2', visibility: 'hidden md:block' }],
  quarters: [
    { position: 'left-1/4', visibility: 'hidden md:block' },
    { position: 'left-1/2', visibility: '' },
    { position: 'left-3/4', visibility: 'hidden md:block' },
  ],
}

/** 점선 한 줄의 공통 모양. */
const LINE_CLASS = 'absolute inset-y-0 w-0 border-dashed border-guide'

/**
 * @alias 가이드 세로선
 * @description 섹션 뒤에 깔리는 점선 세로 가이드. 가장 아래층(-z-10)에 그려져 이미지와 카드가 항상 선을 가린다. 선 영역은 콘텐츠 영역보다 양옆으로 10px 넓어서, 20px 간격의 카드 사이 틈 중앙을 선이 지난다. 부모는 relative isolate여야 한다.
 */
export function GuideColumns({ variant = 'edges' }: { variant?: GuideVariant }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="mx-auto h-full w-full max-w-7xl px-2.5 sm:px-[22px] lg:px-[30px]">
        <div className="relative h-full">
          <span className={cn(LINE_CLASS, 'left-0 border-l')} />
          {INNER_LINES[variant].map((line) => (
            <span key={line.position} className={cn(LINE_CLASS, 'border-l', line.position, line.visibility)} />
          ))}
          <span className={cn(LINE_CLASS, 'right-0 border-r')} />
        </div>
      </div>
    </div>
  )
}
