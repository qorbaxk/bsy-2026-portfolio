import localFont from 'next/font/local'
import type { ReactNode } from 'react'
// Pretendard 동적 서브셋(본문): 페이지에 쓰인 한글 조각만 받아 폰트 용량을 줄인다(unicode-range, font-display: swap).
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
// 영문 전용 제목 서체(Syne): 라틴 문자 조각만 받는다.
import '@fontsource-variable/syne/wght.css'
import '../styles/globals.css'
import { THEME_INIT_SCRIPT } from '@/features/theme-toggle'
import { SkipLink } from '@/shared/ui'

/**
 * Paperlogy(제목용, SIL OFL 1.1). 사이트에서 쓰는 글자와 KS X 1001 한글만 남긴 서브셋이다.
 * next/font가 preload와 대체 폰트 크기 보정을 처리해 글자 교체 시 레이아웃 이동(CLS)을 줄인다.
 */
const paperlogy = localFont({
  src: [
    { path: '../fonts/Paperlogy-7Bold.subset.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/Paperlogy-8ExtraBold.subset.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-paperlogy',
  display: 'swap',
  fallback: ['Pretendard Variable', 'system-ui', 'sans-serif'],
})

/**
 * @alias 루트 레이아웃
 * @description html·body 골격. 첫 페인트 전에 테마를 적용하는 스크립트와 본문 바로가기 링크를 포함한다.
 */
export function RootLayout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning은 해당 요소의 속성 차이에만 적용된다(자식으로 전파되지 않음).
    // 테마 스크립트가 html 클래스를 바꾸고, 일부 브라우저 확장 프로그램(LocatorJS 등)이 head에 속성을 붙이므로 둘 다 지정한다.
    // data-scroll-behavior: CSS의 smooth 스크롤을 페이지 안 앵커 이동에만 쓰고, 라우트 전환 때는 Next.js가 즉시 맨 위로 보내게 한다.
    <html lang="ko" suppressHydrationWarning data-scroll-behavior="smooth" className={paperlogy.variable}>
      <head suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  )
}
