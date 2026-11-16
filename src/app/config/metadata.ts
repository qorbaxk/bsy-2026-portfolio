import type { Metadata, Viewport } from 'next'
import { SITE } from '@/shared/config/site'

/**
 * @alias 루트 메타데이터
 * @description 전 페이지가 상속하는 기본 SEO 메타데이터. 개별 페이지는 title과 description만 덮어쓴다.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: `${SITE.name} 포트폴리오`,
  authors: [{ name: SITE.name, url: SITE.github }],
  keywords: ['프론트엔드 개발자', '포트폴리오', 'React', 'TypeScript', 'Next.js', '백승연'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: '/',
    siteName: `${SITE.name} 포트폴리오`,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
}

/**
 * @alias 루트 뷰포트
 * @description 브라우저 주소창 색상과 기본 색상 스키마 설정.
 */
export const rootViewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0d12' },
  ],
}
