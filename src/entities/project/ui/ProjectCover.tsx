import Image from 'next/image'
import { cn } from '@/shared/lib/cn'
import type { Project } from '../model/types'

/**
 * @alias 프로젝트 커버 속성
 * @description 프로젝트 대표 화면 타일의 속성.
 */
export interface ProjectCoverProps {
  project: Project
  /** next/image가 화면 폭별로 알맞은 크기를 고르는 데 쓰는 sizes 값 */
  sizes: string
  /** 첫 화면(LCP 후보)에 보이는 타일이면 true. 지연 로딩 대신 높은 우선순위로 미리 받는다 */
  preload?: boolean
  className?: string
}

/**
 * @alias 프로젝트 커버
 * @description 타일을 서비스 화면으로 빈틈없이 채운다(object-cover). 화면 비율이 타일과 다르면 왼쪽 위를 기준으로 잘라 사이드바와 제목이 보이게 한다. 이미지가 없는 프로젝트는 점 격자 패턴으로 대신해 카드 높이를 맞춘다.
 */
export function ProjectCover({ project, sizes, preload = false, className }: ProjectCoverProps) {
  const { cover } = project

  return (
    <div className={cn('relative aspect-[4/3] overflow-hidden rounded-md bg-surface-muted', className)}>
      {cover ? (
        <Image
          src={cover.src}
          alt=""
          fill
          sizes={sizes}
          preload={preload}
          fetchPriority={preload ? 'high' : undefined}
          className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(var(--guide)_1px,transparent_1px)] bg-[size:20px_20px]"
        />
      )}
    </div>
  )
}
