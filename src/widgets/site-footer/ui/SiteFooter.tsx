import Link from 'next/link'
import { SITE } from '@/shared/config/site'
import { Container, GuideColumns, PixelArrow } from '@/shared/ui'

/**
 * @alias 사이트 푸터
 * @description 검은(반전) 배경의 하단 영역. 워드마크, 저작권 표기, 맨 위로 이동 링크를 담는다.
 */
export function SiteFooter() {
  return (
    <footer className="inverse relative isolate border-t border-dashed border-guide py-10">
      <GuideColumns variant="edges" />
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="display-latin text-lg" aria-label={SITE.nameEn}>
          BSY
        </p>
        <p className="text-sm text-ink-muted">© 2026 {SITE.name}. Built with Next.js &amp; Tailwind CSS.</p>
        <Link
          href="#"
          className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-medium text-ink transition-opacity duration-200 hover:opacity-70"
        >
          맨 위로
          <PixelArrow size={14} className="-rotate-90" />
        </Link>
      </Container>
    </footer>
  )
}
