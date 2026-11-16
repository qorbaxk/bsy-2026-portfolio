'use client'

import { useSyncExternalStore } from 'react'
import { formatTenure, type YearMonth } from '../lib/tenure'

/** 구독할 외부 저장소가 없으므로(현재 시각은 읽기만 한다) 아무 일도 하지 않는 구독 함수. */
function subscribe(): () => void {
  return () => undefined
}

/**
 * @alias 재직 중 근속 기간 속성
 * @description 현재 재직 중인 회사의 근속 기간 표시 속성.
 */
export interface OngoingTenureProps {
  startedAt: YearMonth
  /** 서버가 렌더링한 문구. 하이드레이션 중에는 이 값을 써서 HTML과 일치시킨다 */
  initialText: string
}

/**
 * @alias 재직 중 근속 기간
 * @description 서버 HTML에는 빌드·재생성 시점의 값을 담고, 브라우저에서는 방문한 날짜 기준으로 다시 계산해 보여준다. 정적 호스팅이라 재배포가 늦어져도 항상 오늘 기준이 된다.
 */
export function OngoingTenure({ startedAt, initialText }: OngoingTenureProps) {
  const text = useSyncExternalStore(
    subscribe,
    () => formatTenure(startedAt),
    () => initialText,
  )

  return <span>{text}</span>
}
