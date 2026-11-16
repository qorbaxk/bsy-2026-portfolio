import type { CareerHistory } from '../model/types'

/** 이력서 기준 경력·학력·자격증 데이터. */
const CAREER: CareerHistory = {
  experiences: [
    {
      company: '커넥트웨이브',
      role: 'Frontend Developer',
      startedAt: '2025-05',
      bullets: [
        '이커머스 솔루션의 상품 영역 신규 기능 개발',
        'React·TypeScript 기반 사용자 화면 및 백오피스 프론트엔드 개발',
        'API·데이터 연계·배치까지 맡는 풀스택 개발',
        'AWS 서버 배포 및 GitHub Actions 기반 CI/CD 파이프라인 구축',
        'AI 기능 개발 및 반복 작업 자동화',
        '사내 공통 컴포넌트 패키지 구축·배포',
      ],
    },
    {
      company: '넥스트이노베이션',
      role: 'Frontend Developer',
      startedAt: '2023-06',
      endedAt: '2025-03',
      bullets: [
        '다양한 도메인의 SI 프로젝트에서 고객사별 기능 개발',
        '모바일·PC 웹 서비스 및 백오피스 프론트엔드 구현',
        'ERD 설계 및 TypeORM·Next.js API를 활용한 풀스택 개발',
      ],
    },
  ],
  education: [
    { school: '한국교통대학교', major: '소프트웨어학과', period: '2016.03 - 2022.02', status: '졸업' },
  ],
  certifications: [
    { name: '정보처리기사', acquiredAt: '2021.08' },
    { name: '컴퓨터활용능력 1급', acquiredAt: '2025.04' },
    { name: 'SQLD', acquiredAt: '2025.06' },
  ],
}

/**
 * @alias 경력 이력 조회
 * @description 경력, 학력, 자격증을 반환한다.
 */
export async function getCareerHistory(): Promise<CareerHistory> {
  return CAREER
}
