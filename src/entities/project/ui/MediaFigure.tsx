import Image from 'next/image'
import { PausableVideo } from '@/shared/ui'
import type { CaseMedia } from '../model/types'

/**
 * @alias 화면 자료 표시
 * @description 서비스 화면 이미지 또는 영상을 캡션과 함께 보여준다. 이미지는 AVIF/WebP로 변환되고 지연 로딩되며, 영상은 사용자가 멈출 수 있다.
 */
export function MediaFigure({ media }: { media: CaseMedia }) {
  const isPortrait = media.height > media.width

  return (
    <figure className={isPortrait ? 'mx-auto max-w-xs' : undefined}>
      <div className="overflow-hidden rounded-xl border border-line bg-surface-muted">
        {media.type === 'image' ? (
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            sizes={isPortrait ? '320px' : '(min-width: 1024px) 800px, 100vw'}
            className="h-auto w-full"
          />
        ) : (
          <PausableVideo src={media.src} poster={media.poster} label={media.alt} width={media.width} height={media.height} />
        )}
      </div>
      <figcaption className="mt-2 text-sm leading-relaxed text-ink-muted">{media.caption}</figcaption>
    </figure>
  )
}
