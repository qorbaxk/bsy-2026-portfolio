import { cn } from '@/shared/lib/cn'

/**
 * @alias 준비 중 프로젝트 카드 속성
 * @description 준비 중 프로젝트 카드의 속성.
 */
export interface ProjectComingSoonCardProps {
  className?: string
}

/**
 * @alias 준비 중 프로젝트 카드
 * @description 프로젝트 수가 홀수일 때 2열 그리드의 빈 칸을 채우는 자리표시 카드. ProjectCard와 같은 타일 비율과 텍스트 구성을 써서 행 높이를 맞춘다. 목록이 최신순이라 순번은 붙이지 않는다. 링크가 아니고 장식 용도라 스크린 리더에서는 숨긴다.
 */
export function ProjectComingSoonCard({ className }: ProjectComingSoonCardProps) {
  return (
    <article aria-hidden="true" className={cn('flex h-full flex-col', className)}>
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md bg-surface-muted">
        <div className="absolute inset-0 bg-[radial-gradient(var(--guide)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <span className="relative rounded-full border border-line bg-canvas px-4 py-1.5 font-display text-sm font-bold tracking-tight text-ink-muted">
          Coming soon
        </span>
      </div>

      <div className="px-1 pt-5 pb-2">
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold tracking-tight text-ink-soft sm:text-2xl">Next project</h3>
          <p className="mt-2 leading-relaxed text-ink-muted">다음 프로젝트를 준비하고 있습니다.</p>
        </div>
      </div>
    </article>
  )
}
