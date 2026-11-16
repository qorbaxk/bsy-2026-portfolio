'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { SectionNav } from '@/features/section-nav'
import { Icon } from '@/shared/ui'
import type { NavItem } from '@/shared/types/navigation'

/**
 * @alias 모바일 메뉴 속성
 * @description 좁은 화면에서 쓰는 펼침 메뉴의 속성.
 */
export interface MobileMenuProps {
  items: readonly NavItem[]
  basePath: string
}

/**
 * @alias 모바일 메뉴
 * @description 햄버거 버튼으로 여닫는 내비게이션 패널. aria-expanded로 상태를 알리고, Esc를 누르면 닫히며 포커스가 버튼으로 돌아온다.
 */
export function MobileMenu({ items, basePath }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-lg text-ink-muted transition-colors duration-200 hover:bg-surface-muted hover:text-ink"
      >
        <Icon name={open ? 'close' : 'menu'} />
      </button>

      {open ? (
        <div id={panelId} className="absolute inset-x-0 top-full border-b border-line bg-canvas px-5 py-3 shadow-lg">
          <SectionNav
            items={items}
            basePath={basePath}
            ariaLabel="모바일 섹션 이동"
            orientation="vertical"
            onNavigate={() => setOpen(false)}
          />
        </div>
      ) : null}
    </div>
  )
}
