import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/entities/project'
import { CaseStudyBody, CaseStudyHeader, CaseStudyOverview, CaseStudyToc, ProjectPager } from '@/widgets/project-case-study'
import { SiteFooter } from '@/widgets/site-footer'
import { SiteHeader } from '@/widgets/site-header'
import { Container, GuideBand, JsonLd, SectionBoundary, Skeleton } from '@/shared/ui'
import { buildProjectJsonLd } from '../lib/project-json-ld'

/**
 * @alias 프로젝트 상세 페이지
 * @description 프로젝트 하나의 케이스 스터디. 데스크톱에서는 좌측 고정 목차와 본문의 2단 구성, 모바일에서는 단일 열로 표시한다.
 */
export async function ProjectDetailPage({ slug }: { slug: string }) {
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <>
      <JsonLd data={buildProjectJsonLd(project)} />
      <SiteHeader sectionBasePath="/" />
      <main id="main-content">
        <CaseStudyHeader project={project} />
        {/* 점선 가이드(4칸)와 같은 4열 그리드: 목차는 1열, 본문은 2번째 선에서 시작해 5번째 선에서 끝나는 3열 */}
        <GuideBand guides="quarters">
        <Container className="grid gap-x-5 pb-24 lg:grid-cols-4">
          <aside className="hidden pr-3 lg:block">
            <div className="sticky top-24">
              <CaseStudyToc project={project} />
            </div>
          </aside>
          <div className="min-w-0 space-y-16 lg:col-span-3">
            <CaseStudyOverview project={project} />
            <CaseStudyBody project={project} />
          </div>
        </Container>
        </GuideBand>
        <SectionBoundary id="more-projects" label="다른 프로젝트" fallback={<Skeleton className="mx-auto my-12 h-32 w-full max-w-6xl" />}>
          <ProjectPager slug={project.slug} />
        </SectionBoundary>
      </main>
      <SiteFooter />
    </>
  )
}
