'use client'

import { useEffect } from 'react'
import { Container, ErrorFallback } from '@/shared/ui'

/**
 * @alias 오류 페이지 속성
 * @description Next.js error.tsx가 전달하는 속성.
 */
export interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

/**
 * @alias 오류 페이지
 * @description 라우트 단위 오류를 잡아 안내하고, 다시 시도를 누르면 서버 데이터를 새로 받아 복구한다.
 */
export function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('[ErrorPage]', error)
  }, [error])

  return (
    <main id="main-content">
      <Container className="py-32">
        <ErrorFallback label="페이지" onRetry={reset} />
      </Container>
    </main>
  )
}
