'use client'

import { useEffect, useState } from 'react'

/** 화면 상단 35% ~ 하단 55%를 제외한 영역을 "현재 읽는 위치"로 간주하는 기본 마진. */
const DEFAULT_ROOT_MARGIN = '-35% 0px -55% 0px'

/**
 * @alias 현재 섹션 추적 훅
 * @description IntersectionObserver로 스크롤 중 화면에 위치한 섹션 id를 반환한다. 스크롤 이벤트를 쓰지 않아 INP에 영향이 없다.
 * @param ids 추적할 섹션 id 목록
 * @param rootMargin 관찰 영역을 조정하는 마진 문자열
 * @returns 현재 활성 섹션 id (없으면 null)
 */
export function useActiveSection(
  ids: readonly string[],
  rootMargin: string = DEFAULT_ROOT_MARGIN,
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)
  const idsKey = ids.join('|')

  useEffect(() => {
    const targets = idsKey
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [idsKey, rootMargin])

  return activeId
}
