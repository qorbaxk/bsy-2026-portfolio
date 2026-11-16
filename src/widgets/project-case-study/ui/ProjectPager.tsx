import Link from 'next/link'
import { cn } from '@/shared/lib/cn'
import { getAdjacentProjects, type Project } from '@/entities/project'
import { Container, Icon } from '@/shared/ui'

/** 이전·다음 이동 카드 한 칸. */
function PagerLink({ project, direction }: { project: Project; direction: 'previous' | 'next' }) {
  const isNext = direction === 'next'

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        'group flex min-h-24 cursor-pointer flex-col justify-center rounded-2xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent',
        isNext ? 'text-right' : 'text-left',
      )}
    >
      <span className={cn('inline-flex items-center gap-1.5 font-display text-xs text-ink-muted', isNext ? 'justify-end' : 'justify-start')}>
        {isNext ? null : <Icon name="arrowLeft" size={14} />}
        {isNext ? '다음 프로젝트' : '이전 프로젝트'}
        {isNext ? <Icon name="arrowRight" size={14} /> : null}
      </span>
      <span className="mt-1 text-lg font-bold text-ink transition-colors duration-200 group-hover:text-accent">
        {project.title}
      </span>
    </Link>
  )
}

/**
 * @alias 프로젝트 이전·다음 이동
 * @description 상세 페이지 하단에서 다른 프로젝트로 바로 넘어가도록 이전·다음 카드를 보여준다. 본문과 무관한 보조 영역이라 Suspense로 감싸 늦게 스트리밍해도 SEO에 영향이 없다.
 */
export async function ProjectPager({ slug }: { slug: string }) {
  const adjacent = await getAdjacentProjects(slug)
  if (!adjacent) return null

  return (
    <nav aria-label="다른 프로젝트" className="border-t border-line py-12">
      <Container className="grid gap-4 sm:grid-cols-2">
        <PagerLink project={adjacent.previous} direction="previous" />
        <PagerLink project={adjacent.next} direction="next" />
      </Container>
    </nav>
  )
}
