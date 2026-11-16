import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { getTitleFontClass } from '../lib/title-font'
import { getHeadingId } from '../lib/dom-id'

/**
 * @alias 섹션 제목 속성
 * @description 섹션 제목 블록의 속성.
 */
export interface SectionHeadingProps {
  /** 소속 섹션 id. 제목 id 생성에 쓰인다 */
  sectionId: string
  /** 섹션 순번 (1부터) */
  index: number
  /** 순번 옆에 붙는 영문 라벨 (예: "Featured work") */
  label: string
  /** 광폭 디스플레이 서체로 크게 보이는 제목. 영문 글자만 있으면 Syne, 그 외에는 Paperlogy */
  title: string
  /** 제목 아래 한글 설명 */
  description?: ReactNode
  /** 제목 태그 수준. 기본 h2 */
  as?: 'h1' | 'h2'
  /** 가운데 정렬 여부. 기본 true */
  centered?: boolean
  className?: string
}

/**
 * @alias 섹션 제목
 * @description "// 1 LABEL" 표식, 광폭 헤비 제목, 설명으로 이루어진 섹션 머리말. 모든 섹션이 같은 위계를 유지한다.
 */
export function SectionHeading({
  sectionId,
  index,
  label,
  title,
  description,
  as: Tag = 'h2',
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn(centered ? 'mx-auto text-center' : 'text-left', 'max-w-3xl', className)}>
      <p className="label">
        <span aria-hidden="true" className="mr-2 text-ink-soft">
          {'//'}
        </span>
        <span className="mr-2">{index}</span>
        {label}
      </p>
      <Tag
        id={getHeadingId(sectionId)}
        lang={getTitleFontClass(title) === 'font-latin' ? 'en' : undefined}
        className={cn(
          getTitleFontClass(title) === 'font-latin' ? 'display-latin' : 'display',
          'mt-8 text-[clamp(2rem,6.2vw,4.25rem)] text-balance text-ink',
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-muted sm:text-xl">{description}</p>
      ) : null}
    </header>
  )
}
