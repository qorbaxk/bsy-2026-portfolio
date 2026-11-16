import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/cn'
import { getHeadingId } from '../lib/dom-id'
import { Container } from './Container'
import { GuideColumns, type GuideVariant } from './GuideColumns'

/**
 * @alias 섹션 속성
 * @description 페이지 섹션 래퍼의 속성. id는 앵커 이동과 제목 연결(aria-labelledby)에 함께 쓰인다.
 */
export interface SectionProps extends Omit<ComponentPropsWithoutRef<'section'>, 'id'> {
  /** 섹션 DOM id. 헤더 앵커 및 제목 id의 기준 */
  id: string
  /** 이 섹션에 그릴 세로 가이드 구성. 기본은 양끝 2줄 */
  guides?: GuideVariant
}

/**
 * @alias 섹션
 * @description 위아래 여백, 점선 구분선, 앵커 스크롤 오프셋을 통일한 시맨틱 섹션. 제목과 aria-labelledby로 연결된다.
 */
export function Section({ id, guides = 'edges', className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={getHeadingId(id)}
      className={cn('relative isolate scroll-mt-16 border-t border-dashed border-guide py-20 sm:py-28 lg:py-32', className)}
      {...props}
    >
      <GuideColumns variant={guides} />
      <Container>{children}</Container>
    </section>
  )
}
