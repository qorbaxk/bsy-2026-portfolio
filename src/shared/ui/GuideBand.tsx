import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/cn'
import { GuideColumns, type GuideVariant } from './GuideColumns'

/**
 * @alias 가이드 띠 속성
 * @description 자기 구간에만 세로 가이드를 그리는 래퍼의 속성.
 */
export interface GuideBandProps extends ComponentPropsWithoutRef<'div'> {
  /** 이 구간에 그릴 세로선 구성 */
  guides?: GuideVariant
}

/**
 * @alias 가이드 띠
 * @description 한 구간(예: 히어로 윗부분, 통계 카드 행)에만 세로 점선을 깔아 주는 래퍼. 구간마다 선 개수를 다르게 하는 레퍼런스의 구성을 따른다.
 */
export function GuideBand({ guides = 'edges', className, children, ...props }: GuideBandProps) {
  return (
    <div className={cn('relative isolate', className)} {...props}>
      <GuideColumns variant={guides} />
      {children}
    </div>
  )
}
