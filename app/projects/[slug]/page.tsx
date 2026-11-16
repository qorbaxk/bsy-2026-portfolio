import type { Metadata } from 'next'
import { getProjectSlugs } from '@/entities/project'
import { generateProjectMetadata, ProjectDetailPage } from '@/pages/project-detail'

interface PageProps {
  params: Promise<{ slug: string }>
}

/** 빌드 시점에 모든 프로젝트 상세 페이지를 정적으로 생성하고, 그 외 경로는 404로 처리한다. */
export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  return generateProjectMetadata(slug)
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  return <ProjectDetailPage slug={slug} />
}
