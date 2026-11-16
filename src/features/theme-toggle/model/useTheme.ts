'use client'

import { useCallback, useSyncExternalStore } from 'react'
import { THEME_CHANGE_EVENT, THEME_STORAGE_KEY, type Theme } from './theme'

/** 테마 변경(같은 탭 이벤트, 다른 탭 storage 이벤트)을 구독한다. */
function subscribe(onChange: () => void): () => void {
  window.addEventListener(THEME_CHANGE_EVENT, onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange)
    window.removeEventListener('storage', onChange)
  }
}

/** 현재 html에 적용된 테마를 읽는다. */
function getSnapshot(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/** 서버 렌더링 시에는 알 수 없으므로 light로 가정한다(실제 화면은 초기화 스크립트가 맞춘다). */
function getServerSnapshot(): Theme {
  return 'light'
}

/**
 * @alias 테마 훅
 * @description 현재 테마와 전환 함수를 제공한다. 상태의 원천은 html 클래스이며, localStorage에 선택을 저장한다.
 * @returns 현재 테마와 토글 함수
 */
export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggleTheme = useCallback(() => {
    const next: Theme = getSnapshot() === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // 저장소 접근이 막힌 환경(사생활 보호 모드 등)에서는 현재 세션에만 적용한다.
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
  }, [])

  return { theme, toggleTheme }
}
