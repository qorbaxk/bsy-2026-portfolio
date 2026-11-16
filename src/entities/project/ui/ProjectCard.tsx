import Link from 'next/link'
import { cn } from '@/shared/lib/cn'
import { getTitleFontClass } from '@/shared/lib/title-font'
import type { Project } from '../model/types'
import { ProjectCover } from './ProjectCover'

/**
 * @alias 프로젝트 카드 속성
 * @description 프로젝트 목록 카드의 속성.
 */
export interface ProjectCardProps {
  project: Project
}

/**
 * @alias 프로젝트 카드
 * @description 대표 화면 타일 아래에 제목, 한 줄 소개, 소속·기간을 적은 카드. 제목 링크가 카드 전체를 덮어 클릭 영역이 넓고, 키보드 탭 정지점은 하나만 생긴다.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, order, title, headline, company, period } = project

  return (
    <article className="group relative flex h-full flex-col has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent">
      <ProjectCover project={project} sizes="(min-width: 1280px) 600px, (min-width: 768px) 45vw, 100vw" />

      <div className="flex items-start justify-between gap-6 px-1 pt-5 pb-2">
        <div className="min-w-0">
          <h3 className={cn(getTitleFontClass(title), 'text-xl font-bold tracking-tight text-ink sm:text-2xl')}>
            <Link
              href={`/projects/${slug}`}
              className="cursor-pointer outline-none after:absolute after:inset-0 after:content-['']"
            >
              {title}
            </Link>
          </h3>
          <p className="mt-2 leading-relaxed text-ink-muted">{headline}</p>
          <p className="mt-3 text-sm text-ink-muted">
            {company} · {period}
          </p>
        </div>
        <span aria-hidden="true" className="font-display text-sm font-bold text-ink-soft transition-colors duration-200 group-hover:text-ink">
          {String(order).padStart(2, '0')}
        </span>
      </div>
    </article>
  )
}
