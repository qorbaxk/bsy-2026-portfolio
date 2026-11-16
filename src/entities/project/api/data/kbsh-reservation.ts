import type { Project } from '../../model/types'

/**
 * @alias 강북삼성병원 웹예약 프로젝트 데이터
 * @description 수진자별 예약·문진 흐름을 만든 모바일 웹 개발 경험.
 */
export const kbshReservation: Project = {
  slug: 'kbsh-reservation',
  order: 4,
  title: '강북삼성병원 웹예약·웹문진',
  shortTitle: '강북삼성병원',
  headline: '수진자별 예약·문진 흐름을 만든 모바일 웹 개발 경험',
  summary:
    '비대면 건강검진 예약과 사전 문진을 위한 모바일 웹 서비스를 개발했습니다. 수진자 유형별 분기, 응답에 따라 달라지는 동적 문진, 예방검진 B2C 예약을 구현했습니다.',
  company: '넥스트이노베이션',
  period: '2024.06 - 2025.03',
  contributions: [
    { title: '수진자 유형별 분기', description: '임직원 B2B와 국가·예방검진 B2C' },
    { title: '동적 웹문진', description: '답변에 따라 달라지는 최대 4단계' },
    { title: '예방검진 B2C 예약', description: '장소·날짜·시간 선택 흐름 단독 구현' },
  ],
  responsibilities: [
    '건강검진 도메인의 수진자 유형별 요구사항을 정리해 임직원·국가검진 화면을 조건별로 구현',
    '사용자 응답에 따라 다음 질문·화면이 달라지는 최대 4단계 문진 UI를 동적으로 구성',
    '내부망 제약 속에서 문진 분기 규칙과 상태 관리 구조를 직접 설계·구현',
    '데이터 정제·API 제공 지연에 대응해 MSW 목 데이터로 예약·문진 화면을 먼저 구축',
    '수진자 정보 보관을 보안 요건에 맞게 재설계하고 TanStack Query Prefetching·SSR로 조회·초기 로딩 개선',
    '예방검진 B2C 예약 영역을 단독 담당해 장소·날짜·시간 선택과 예외·유효성 검증 구현',
    '삼성 SDS 개발자와 병원 OCS의 예약·문진 API 연동을 조율하며 외부 협업 진행',
  ],
  outcome: '전화 예약에 의존하던 건강검진 절차를 수진자가 직접 진행할 수 있도록, 조건별 예약·문진 흐름을 구현했습니다.',
  metrics: [
    { value: '최대 4단계', label: '동적 웹문진', caption: '답변에 따라 다음 질문이 달라짐' },
    { value: 'B2B · B2C', label: '수진자 유형별 분기' },
  ],
  stack: ['Next.js 14', 'React', 'TypeScript', 'TanStack Query', 'Recoil', 'React Hook Form', 'Tailwind CSS', 'MSW'],
  cover: {
    src: '/images/projects/kbsh-reservation/mobile-home.webp',
    alt: '강북삼성병원 모바일 웹 시작 화면. 병원 건물 사진 아래에 건진 예약과 나의 예약 조회·변경 버튼이 있다.',
    width: 1125,
    height: 2436,
  },
  highlights: [
    {
      id: 'secure-target-access',
      category: '보안 · 초기 로딩',
      title: '보안 요건에 맞춘 수진자 정보 접근 방식',
      lead: '인증 뒤 여러 화면에서 필요한 정보를 다루면서, 초기 저장 방식을 보안 심사에 맞게 변경했다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/kbsh-reservation/phone-verification.webp',
          alt: '강북삼성병원 모바일 웹의 휴대폰 인증 화면. 인증하기 버튼이 있다.',
          width: 945,
          height: 890,
          caption: '휴대폰 인증 화면. 인증을 마친 뒤 수진자 정보를 조회해 이후 화면에서 사용한다.',
        },
      ],
      problem:
        '등록번호·미등록번호로 조회한 정보를 처음에는 sessionStorage에 유지했다. 보안 심사와 데이터 신뢰성 요구를 반영해 브라우저 저장 방식을 재검토했다.',
      pointsStyle: 'list',
      points: [
        { title: '조회·초기 로딩', description: 'TanStack Query prefetching·캐시와 SSR을 도입해 화면에 필요한 정보를 준비' },
        { title: '공통 접근 로직', description: 'useTarget 커스텀 훅으로 B2B·B2C의 수진자 정보 공유 로직을 재사용' },
      ],
    },
    {
      id: 'branching-questionnaire',
      category: '예약 · 문진',
      title: '수진자 유형에 따라 달라지는 예약·문진',
      lead: 'B2B·B2C 요구를 나누고, 응답에 따라 다음 문항이 달라지는 모바일 흐름을 구현했다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/kbsh-reservation/mobile-home.webp',
          alt: '강북삼성병원 모바일 웹 시작 화면. 건진 예약과 나의 예약 조회·변경 버튼이 있다.',
          width: 1125,
          height: 2436,
          caption: '모바일 웹 시작 화면. 건진 예약과 나의 예약 조회·변경으로 진입한다.',
        },
        {
          type: 'image',
          src: '/images/projects/kbsh-reservation/portal-home.webp',
          alt: '강북삼성병원 건강의학부 홈페이지. 예약조회, 웹문진, 결과조회, 증명서 발급 안내 메뉴가 보인다.',
          width: 2000,
          height: 1134,
          caption: '건강의학부 홈페이지의 예약조회·웹문진 진입 메뉴.',
        },
      ],
      pointsStyle: 'steps',
      points: [
        { title: '대상별 경로', description: '임직원 B2B와 국가·예방검진 B2C의 화면 조건을 구분' },
        { title: '문진 분기', description: '답변에 따라 다음 질문과 화면을 선택하는 규칙 구성' },
        { title: '최대 4단계', description: '단계별 답변·상태를 유지하며 필요한 문항만 표시' },
        { title: 'B2C 예약', description: '예방검진 장소·날짜·시간 선택 흐름을 단독 구현' },
        { title: '예외·검증', description: '선택 조건을 검증하고 예약 정보를 저장·전송하는 흐름 처리' },
      ],
    },
    {
      id: 'mock-api',
      category: 'Mock API · 협업',
      title: 'OCS API 지연 속에서도 화면 개발을 진행한 방식',
      lead: '삼성SDS·병원 OCS의 API 연동을 기다리는 동안 MSW로 예약·문진 흐름을 먼저 구현했다.',
      pointsStyle: 'steps',
      points: [
        { title: 'MSW Mock API', description: '데이터·API 제공 지연에 맞춰 목 응답으로 화면과 분기 로직을 선행 개발' },
        { title: '실제 연동', description: 'API 제공 후 예약·문진 화면과 실제 응답의 차이, 오류 조건을 확인' },
        { title: '외부 협업', description: '발견한 오류와 필요한 데이터 조건을 백엔드·삼성SDS 개발자에게 공유' },
        { title: '제약 대응', description: '내부망·방화벽·SSO 등 보안 환경에서 설치와 연동을 조율' },
      ],
      note: {
        label: '참여 범위',
        text: '퇴사로 프로젝트 전체의 최종 마무리에는 참여하지 못했다.',
      },
    },
  ],
}
