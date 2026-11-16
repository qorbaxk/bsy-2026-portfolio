import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/shared/lib/cn'

/**
 * @alias 케이스 라벨
 * @description 케이스 스터디 블록(배경·접근·트레이드오프·결과)을 구분하는 작은 모노스페이스 제목.
 */
export function CaseLabel({ className, ...props }: ComponentPropsWithoutRef<'h4'>) {
  return <h4 className={cn('label', className)} {...props} />
}
