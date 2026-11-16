import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/cn'

/**
 * @alias 스켈레톤
 * @description 로딩 중 자리를 잡아 레이아웃 이동(CLS)을 막는 회색 블록. 모션 감소 설정에서는 애니메이션을 끈다.
 */
export function Skeleton({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      aria-hidden="true"
      className={cn('animate-pulse rounded-lg bg-surface-muted motion-reduce:animate-none', className)}
      {...props}
    />
  )
}
