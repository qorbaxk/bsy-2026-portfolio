'use client'

import type { ComponentPropsWithoutRef } from 'react'

type ScrollToTopButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'type' | 'onClick'>

/**
 * @alias 맨 위로 버튼
 * @description 누르면 현재 페이지의 맨 위로 스크롤하는 버튼. 어떤 라우트에서도 동작하며, 스크롤 방식(부드럽게/즉시)은 CSS의 scroll-behavior와 prefers-reduced-motion 설정을 따른다.
 */
export function ScrollToTopButton({ children, ...props }: ScrollToTopButtonProps) {
  return (
    <button type="button" onClick={() => window.scrollTo({ top: 0 })} {...props}>
      {children}
    </button>
  )
}
