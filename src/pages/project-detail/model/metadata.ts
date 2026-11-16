import type { Metadata } from 'next'
import { getProjectBySlug } from '@/entities/project'

/**
 * @alias 프로젝트 메타데이터 생성
 * @description 슬러그에 해당하는 프로젝트의 제목·설명·canonical·OG 정보를 만든다. 없는 슬러그는 빈 객체를 반환한다.
 */
export async function generateProjectMetadata(slug: string): Promise<Metadata> {
  const project = await getProjectBySlug(slug)
  if (!project) return {}

  const path = `/projects/${project.slug}`
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      url: path,
      title: `${project.title} | 백승연`,
      description: project.summary,
      images: ['/opengraph-image'],
    },
    twitter: { card: 'summary_large_image', title: `${project.title} | 백승연`, description: project.summary, images: ['/opengraph-image'] },
  }
}
