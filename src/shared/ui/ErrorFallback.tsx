'use client'

import { useRouter } from 'next/navigation'
import { startTransition } from 'react'
import { getHeadingId } from '../lib/dom-id'
import { Container } from './Container'
import { Icon } from './icons/Icon'

/**
 * @alias 오류 대체 화면 속성
 * @description 오류 발생 시 보여줄 안내 화면의 속성.
 */
export interface ErrorFallbackProps {
  /** 실패한 영역 이름. 안내 문구에 쓰인다 */
  label?: string
  /** 상태 초기화 콜백. 서버 데이터를 다시 불러온 뒤 호출된다 */
  onRetry: () => void
  /** 섹션 단위 오류일 때 앵커 이동이 유지되도록 지정하는 섹션 id */
  sectionId?: string
}

/**
 * @alias 오류 대체 화면
 * @description 오류를 사용자에게 알리고 "다시 시도"로 서버 데이터를 새로 받아 복구하도록 돕는다.
 */
export function ErrorFallback({ label = '화면', onRetry, sectionId }: ErrorFallbackProps) {
  const router = useRouter()

  const handleRetry = () => {
    startTransition(() => {
      router.refresh()
      onRetry()
    })
  }

  const body = (
    <div role="alert" className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-8">
      <Icon name="alert" size={24} className="text-accent" />
      <div>
        <h2 id={sectionId ? getHeadingId(sectionId) : undefined} className="text-lg font-semibold text-ink">
          {label} 영역을 불러오지 못했어요
        </h2>
        <p className="mt-1 text-ink-muted">일시적인 문제일 수 있어요. 잠시 후 다시 시도해 주세요.</p>
      </div>
      <button
        type="button"
        onClick={handleRetry}
        className="inline-flex min-h-11 cursor-pointer items-center rounded-lg bg-accent px-5 text-sm font-semibold text-accent-contrast transition-opacity duration-200 hover:opacity-90"
      >
        다시 시도
      </button>
    </div>
  )

  if (!sectionId) return body

  return (
    <section id={sectionId} aria-labelledby={getHeadingId(sectionId)} className="scroll-mt-16 border-t border-line py-20">
      <Container>{body}</Container>
    </section>
  )
}
