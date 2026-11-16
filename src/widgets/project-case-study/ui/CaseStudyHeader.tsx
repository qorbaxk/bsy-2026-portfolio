import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/shared/lib/cn'
import { getTitleFontClass } from '@/shared/lib/title-font'
import { StackList, type Project } from '@/entities/project'
import { ButtonLink, Container, GuideBand, Icon } from '@/shared/ui'

/**
 * @alias 케이스 스터디 머리말
 * @description 프로젝트 제목, 한 줄 소개, 기술 스택, 서비스 링크(있을 때만), 대표 화면을 보여주는 상세 페이지 상단. 대표 이미지는 next/image로 AVIF/WebP 변환과 반응형 크기를 적용한다.
 */
export function CaseStudyHeader({ project }: { project: Project }) {
  const { order, title, headline, company, period, stack, links, cover } = project

  return (
    <GuideBand guides="quarters">
    <Container as="div" className="pt-10 pb-12 sm:pt-14 sm:pb-16">
      <Link
        href="/#projects"
        className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-accent"
      >
        <Icon name="arrowLeft" size={16} />
        전체 프로젝트
      </Link>

      <p className="mt-6 label">
        {String(order).padStart(2, '0')} · {company} · {period}
      </p>
      <h1 className={cn(getTitleFontClass(title), 'mt-4 text-4xl font-extrabold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl')}>{title}</h1>
      <p className="mt-6 max-w-3xl text-xl leading-relaxed text-pretty text-ink-muted sm:text-2xl">{headline}</p>
      <div className="mt-8">
        <StackList items={stack} />
      </div>

      {links?.length ? (
        <ul className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <ButtonLink href={link.href} variant="secondary">
                {link.label}
                <Icon name="arrowRight" size={16} />
              </ButtonLink>
            </li>
          ))}
        </ul>
      ) : null}

      {cover ? (
        <figure className={cn('mt-12', cover.height > cover.width && 'mx-auto max-w-xs')}>
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            sizes={cover.height > cover.width ? '320px' : '(min-width: 1152px) 1072px, 100vw'}
            preload
            fetchPriority="high"
            className="h-auto w-full rounded-2xl border border-line"
          />
        </figure>
      ) : null}
    </Container>
    </GuideBand>
  )
}
