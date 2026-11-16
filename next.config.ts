import type { NextConfig } from 'next'

/** GitHub Pages 배포 빌드 여부. 배포 워크플로(`.github/workflows/deploy.yml`)가 STATIC_EXPORT=true로 설정한다. */
const isStaticExport = process.env.STATIC_EXPORT === 'true'

/** Next.js 설정: 이미지 포맷 최적화와 기본 보안 헤더를 적용한다. 정적 내보내기에서는 헤더를 서버가 보낼 수 없어 제외한다. */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /** 저장소 이름 경로로 서비스되는 프로젝트 페이지(예: /bsy-2026-portfolio)일 때만 값이 있다. */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  images: {
    formats: ['image/avif', 'image/webp'],
    // 정적 내보내기에는 이미지 최적화 서버가 없다.
    unoptimized: isStaticExport,
  },
  ...(isStaticExport
    ? { output: 'export' }
    : {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'X-Frame-Options', value: 'DENY' },
              ],
            },
          ]
        },
      }),
}

export default nextConfig
