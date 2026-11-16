'use client'

import Link from 'next/link'
import { cn } from '@/shared/lib/cn'
import { useActiveSection } from '@/shared/lib/hooks/useActiveSection'
import type { NavItem } from '@/shared/types/navigation'

/**
 * @alias 섹션 내비게이션 속성
 * @description 스크롤 위치를 추적하는 앵커 메뉴의 속성.
 */
export interface SectionNavProps {
  items: readonly NavItem[]
  /** 스크린리더용 내비게이션 이름 */
  ariaLabel: string
  /** 링크 앞에 붙는 경로. 홈이면 빈 문자열, 다른 페이지에서는 "/" */
  basePath?: string
  /** 가로(헤더) 또는 세로(목차) 배치 */
  orientation?: 'horizontal' | 'vertical'
  /** 링크를 눌렀을 때 호출되는 콜백 (모바일 메뉴 닫기 등) */
  onNavigate?: () => void
}

/**
 * @alias 섹션 내비게이션
 * @description 현재 보고 있는 섹션을 aria-current로 표시하는 앵커 링크 목록. 마우스 없이 Tab과 Enter만으로 모든 섹션에 이동할 수 있다.
 */
export function SectionNav({
  items,
  ariaLabel,
  basePath = '',
  orientation = 'horizontal',
  onNavigate,
}: SectionNavProps) {
  const activeId = useActiveSection(items.map((item) => item.id))

  return (
    <nav aria-label={ariaLabel}>
      <ul className={cn('flex gap-1', orientation === 'vertical' ? 'flex-col' : 'flex-row items-center')}>
        {items.map((item) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id}>
              <Link
                href={`${basePath}#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={onNavigate}
                className={cn(
                  'inline-flex min-h-11 cursor-pointer items-center rounded-lg px-3 py-2 text-sm leading-snug font-medium transition-colors duration-200',
                  orientation === 'vertical' && 'w-full',
                  isActive ? 'bg-accent-soft text-accent' : 'text-ink-muted hover:bg-surface-muted hover:text-ink',
                )}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
