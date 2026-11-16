'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/cn'
import { Icon } from './icons/Icon'

/**
 * @alias 일시정지 가능한 영상 속성
 * @description 자동 재생 반복 영상의 속성.
 */
export interface PausableVideoProps {
  src: string
  poster: string
  /** 영상 내용 설명(스크린리더용) */
  label: string
  width: number
  height: number
  className?: string
}

/**
 * @alias 일시정지 가능한 영상
 * @description 화면에 보일 때만 자동 재생하고, 사용자가 언제든 멈출 수 있다. 모션 감소 설정이면 처음부터 멈춘 상태로 시작한다(WCAG 2.2.2).
 */
export function PausableVideo({ src, poster, label, width, height, className }: PausableVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  /** 사용자가 직접 고른 상태. null이면 모션 감소 설정을 따른다 */
  const [userChoice, setUserChoice] = useState<'play' | 'pause' | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const shouldPlay = userChoice ? userChoice === 'play' : !reducedMotion

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (!shouldPlay) {
      video.pause()
      return
    }

    // 화면 밖에서는 재생하지 않아 CPU와 배터리를 아낀다.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) void video.play().catch(() => undefined)
        else video.pause()
      },
      { threshold: 0.4 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [shouldPlay])

  return (
    <div className={cn('relative', className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={width}
        height={height}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        className="h-auto w-full"
      />
      <button
        type="button"
        onClick={() => setUserChoice(shouldPlay ? 'pause' : 'play')}
        aria-label={shouldPlay ? '영상 일시정지' : '영상 재생'}
        className="absolute right-3 bottom-3 inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-canvas/90 text-ink shadow-md backdrop-blur transition-colors duration-200 hover:text-accent"
      >
        <Icon name={shouldPlay ? 'pause' : 'play'} size={18} />
      </button>
    </div>
  )
}
