'use client'

import { Icon } from '@/shared/ui'
import { useTheme } from '../model/useTheme'

/**
 * @alias 테마 전환 버튼
 * @description 라이트/다크 모드를 전환한다. 아이콘은 CSS로 전환해 하이드레이션 전에도 올바르게 보이고, 접근 가능한 이름은 현재 상태를 반영한다.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-lg text-ink-muted transition-colors duration-200 hover:bg-surface-muted hover:text-ink"
    >
      <Icon name="moon" className="dark:hidden" />
      <Icon name="sun" className="hidden dark:block" />
    </button>
  )
}
