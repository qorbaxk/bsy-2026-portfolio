import Link from 'next/link'
import { SectionNav } from '@/features/section-nav'
import { ThemeToggle } from '@/features/theme-toggle'
import { HOME_NAV_ITEMS } from '@/shared/config/navigation'
import { Container } from '@/shared/ui'
import { MobileMenu } from './MobileMenu'

/**
 * @alias 사이트 헤더 속성
 * @description 상단 고정 헤더의 속성.
 */
export interface SiteHeaderProps {
  /** 섹션 링크 앞 경로. 홈에서는 빈 문자열, 상세 페이지에서는 "/"로 홈 섹션으로 이동한다 */
  sectionBasePath?: string
}

/**
 * @alias 사이트 헤더
 * @description 워드마크, 섹션 내비게이션, 테마 전환을 담은 상단 고정 헤더. 데스크톱은 가로 메뉴, 모바일은 펼침 메뉴를 쓴다.
 */
export function SiteHeader({ sectionBasePath = '' }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-dashed border-guide bg-canvas/90 backdrop-blur-md">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="백승연 포트폴리오 홈"
          className="display-latin inline-flex min-h-11 cursor-pointer items-center text-xl text-ink"
        >
          BSY
        </Link>

        <div className="hidden md:block">
          <SectionNav items={HOME_NAV_ITEMS} basePath={sectionBasePath} ariaLabel="섹션 이동" />
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileMenu items={HOME_NAV_ITEMS} basePath={sectionBasePath} />
        </div>
      </Container>
    </header>
  )
}
