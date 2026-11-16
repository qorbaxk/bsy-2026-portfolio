import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/cn'

/** 배지 톤별 클래스. */
const TONE_CLASSES = {
  neutral: 'border-line bg-surface text-ink-muted',
  accent: 'border-transparent bg-ink text-canvas',
} as const

/**
 * @alias 배지 속성
 * @description 기술 스택·상태 표시용 작은 라벨의 속성.
 */
export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  /** 색상 톤. 기본 neutral */
  tone?: keyof typeof TONE_CLASSES
}

/**
 * @alias 배지
 * @description 기술 스택이나 상태를 짧게 표시하는 알약 모양 라벨.
 */
export function Badge({ tone = 'neutral', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border px-3 py-1.5 text-[13px] leading-none font-medium',
        TONE_CLASSES[tone],
        className,
      )}
      {...props}
    />
  )
}
