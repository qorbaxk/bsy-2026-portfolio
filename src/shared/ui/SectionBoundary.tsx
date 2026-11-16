import { Suspense, type ReactNode } from 'react'
import { ErrorBoundary } from './ErrorBoundary'

/**
 * @alias 섹션 경계 속성
 * @description 섹션 단위 에러·로딩 경계의 속성.
 */
export interface SectionBoundaryProps {
  children: ReactNode
  /** 섹션 DOM id */
  id: string
  /** 오류 안내에 쓰일 섹션 이름 */
  label: string
  /**
   * 비동기 데이터 대기 중 보여줄 자리표시자.
   * 지정하면 Suspense가 적용되어 내용이 스트리밍으로 늦게 도착한다. SEO에 중요한 본문에는 지정하지 않는다.
   */
  fallback?: ReactNode
}

/**
 * @alias 섹션 경계
 * @description 섹션을 ErrorBoundary로 격리해 한 곳의 오류가 페이지 전체로 번지지 않게 한다. fallback을 주면 Suspense로 로딩 상태까지 처리한다.
 */
export function SectionBoundary({ children, id, label, fallback }: SectionBoundaryProps) {
  return (
    <ErrorBoundary label={label} sectionId={id}>
      {fallback ? <Suspense fallback={fallback}>{children}</Suspense> : children}
    </ErrorBoundary>
  )
}
