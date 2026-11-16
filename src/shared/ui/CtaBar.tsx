import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { PixelArrow } from './icons/PixelArrow'

/**
 * @alias CTA 바 속성
 * @description 좌측 안내 문구와 우측 행동 버튼이 한 줄로 이어진 막대형 링크의 속성.
 */
export interface CtaBarProps {
  href: string
  /** 우측에 크게 보이는 행동 문구 */
  children: ReactNode
  /** 좌측에 흐리게 보이는 안내 문구 */
  hint?: ReactNode
  className?: string
}

/**
 * @alias CTA 바
 * @description 점선 테두리 안에 안내 문구와 행동 문구를 나란히 두고, 마우스를 올리면 색이 반전되는 막대형 링크. 내부 경로·앵커·메일·외부 주소를 모두 처리한다.
 */
export function CtaBar({ href, children, hint, className }: CtaBarProps) {
  const isInternal = href.startsWith('/') || href.startsWith('#')
  const isExternal = href.startsWith('http')

  const inner = (
    <>
      {hint ? <span className="hidden flex-1 items-center justify-center px-6 text-center text-sm text-ink-muted transition-colors duration-200 group-hover:text-canvas md:flex">{hint}</span> : null}
      <span className="flex min-h-14 flex-1 items-center justify-between gap-4 px-5 font-display text-base font-semibold normal-case md:justify-center md:px-6">
        <span className="md:flex-1 md:text-center">{children}</span>
        <PixelArrow size={18} className="shrink-0" />
      </span>
    </>
  )

  const classes = cn(
    'guide-bleed group flex cursor-pointer items-stretch border-y border-dashed border-guide text-ink transition-colors duration-200 hover:bg-ink hover:text-canvas',
    className,
  )

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {inner}
      {isExternal ? <span className="sr-only">(새 창에서 열림)</span> : null}
    </a>
  )
}
