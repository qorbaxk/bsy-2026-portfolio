import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/cn'

/** 버튼 변형별 클래스. */
const VARIANT_CLASSES = {
  primary: 'bg-ink text-canvas hover:opacity-80',
  secondary: 'border border-ink/30 bg-transparent text-ink hover:bg-ink hover:text-canvas',
  ghost: 'text-ink-muted hover:text-ink',
} as const

/**
 * @alias 링크 버튼 속성
 * @description 버튼 모양의 링크 속성. 외부 주소(http, mailto)는 일반 앵커로, 내부 경로는 next/link로 렌더링한다.
 */
export interface ButtonLinkProps extends Omit<ComponentPropsWithoutRef<'a'>, 'href'> {
  href: string
  /** 시각 변형. 기본 primary */
  variant?: keyof typeof VARIANT_CLASSES
}

/** 내부 경로 여부(사이트 내 이동)를 판단한다. */
function isInternal(href: string): boolean {
  return href.startsWith('/') || href.startsWith('#')
}

/**
 * @alias 링크 버튼
 * @description 페이지 이동용 링크를 버튼 모양으로 보여준다. 키보드 포커스 링과 hover 전환이 공통 적용된다.
 */
export function ButtonLink({ href, variant = 'primary', className, children, ...props }: ButtonLinkProps) {
  const classes = cn(
    'inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold transition-colors duration-200',
    VARIANT_CLASSES[variant],
    className,
  )

  if (isInternal(href)) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
      {external ? <span className="sr-only">(새 창에서 열림)</span> : null}
    </a>
  )
}
