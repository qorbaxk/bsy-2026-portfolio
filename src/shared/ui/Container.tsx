import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/cn'

/**
 * @alias 컨테이너 속성
 * @description 최대 폭과 좌우 여백을 통일하는 레이아웃 래퍼의 속성.
 */
export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  /** 렌더링할 태그. 기본 div */
  as?: 'div' | 'header' | 'footer' | 'nav' | 'main'
}

/**
 * @alias 컨테이너
 * @description 모든 섹션이 같은 가로 폭(max-w-7xl)과 반응형 좌우 여백을 갖도록 맞춘다.
 */
export function Container({ as: Tag = 'div', className, ...props }: ContainerProps) {
  return <Tag className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10', className)} {...props} />
}
