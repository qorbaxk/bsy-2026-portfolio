/**
 * @alias 사이트 기본 설정
 * @description 메타데이터, 구조화 데이터, 사이트맵에서 공통으로 쓰는 사이트 정보.
 */
export const SITE = {
  name: '백승연',
  nameEn: 'Baek Seungyeon',
  title: '백승연 | 프론트엔드 개발자 포트폴리오',
  description:
    'React·TypeScript 기반 프론트엔드 개발자 백승연의 기술 포트폴리오. Market Insight, 셀핏 AI, PDS(사내 디자인 시스템), S병원 웹예약 프로젝트의 기술적 고민과 트레이드오프, 성과를 정리했습니다.',
  locale: 'ko_KR',
  /** 배포 도메인. 배포 환경에서는 NEXT_PUBLIC_SITE_URL로 지정한다. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  email: 'qorbaxk97@gmail.com',
  github: 'https://github.com/qorbaxk',
} as const
