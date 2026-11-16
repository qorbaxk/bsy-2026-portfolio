import type { Project } from '../../model/types'

/**
 * @alias S병원 웹예약 프로젝트 데이터
 * @description 건강검진 수진자의 예약·문진 모바일 웹과 관리도구를 만든 프로젝트. 한 페이지 한 질문 문진, 일정 선택, Mock API 선행 개발이 중심이다.
 */
export const hospitalReservation: Project = {
  slug: 'hospital-reservation',
  order: 4,
  title: 'S병원 웹예약·웹문진',
  shortTitle: 'S병원',
  headline: '건강검진 수진자가 직접 예약하고 문진하는 모바일 웹을 만든 경험',
  summary:
    '국내 대형 종합병원 S병원의 비대면 건강검진 예약과 사전 문진을 위한 모바일 웹 서비스를 개발했습니다. 한 페이지 한 질문 문진, 수진자 유형별 분기, 일정 선택, 예방검진 B2C 예약을 구현했습니다.',
  background: {
    about:
      '건강검진 수진자가 병원에 전화하지 않고 웹에서 직접 예약하는 서비스입니다. 기존에는 유선 전화와 포털 사이트로 받던 예약을 웹으로 옮겨 병원 직원의 부담을 줄이는 것이 목적이었습니다. 계열사 임직원(B2B)과 국가·예방검진 수진자(B2C)가 모두 사용합니다.',
    flow: [
      { label: '본인인증', caption: '휴대폰 인증 1회' },
      { label: '기본문진', caption: '수진자 유형에 맞는 질문에 답변' },
      { label: '일정 선택', caption: '검사와 소속에 따라 가능한 날짜 표시' },
      { label: '예약', caption: '예약 정보 저장·전송' },
    ],
    role: '프론트엔드 2명, 백엔드 7명 팀에서 프론트엔드 업무의 절반(기여도 50%)을 맡았습니다. 수진자가 쓰는 모바일 웹과 병원 직원이 쓰는 PC 관리도구를 모두 개발했습니다.',
  },
  company: '넥스트이노베이션',
  period: '2024.06 - 2025.03',
  contributions: [
    { title: '한 페이지 한 질문 문진', description: '최대 4단계 질문, 전체 질문을 한 번에 불러오는 구조' },
    { title: '일정 선택·B2C 예약', description: '장소·날짜·시간 선택 흐름 단독 구현' },
    { title: 'Mock 선행 개발과 배포', description: 'API 지연 속 MSW로 먼저 개발, 주 단위 배포' },
  ],
  responsibilities: [
    'Next.js·TanStack Query·Recoil·React Hook Form·MSW로 프로젝트 초기 구성(폴더 구조, 공용 HTTP 클라이언트, Mock 환경)을 직접 세팅',
    '건강검진 도메인의 수진자 유형별 요구사항을 정리해 임직원·국가검진 화면을 조건별로 구현',
    '답변에 따라 다음 질문·화면이 달라지는 최대 4단계 문진 UI를 한 페이지 한 질문 방식으로 구성',
    '데이터 정제·API 제공 지연에 대응해 MSW 목 데이터로 예약·문진 화면을 먼저 구축',
    '수진자 정보 보관을 보안 요건에 맞게 재설계하고 TanStack Query Prefetching·SSR로 조회·초기 로딩 개선',
    '예방검진 B2C 예약 영역을 단독 담당해 장소·날짜·시간 선택과 예외·유효성 검증 구현',
    'PC 웹 관리도구에서 수진자 화면에 노출할 데이터를 등록·관리하는 화면 개발',
    'SI 협력사 개발자와 병원 내부 시스템(OCS)의 예약·문진 API 연동을 조율하며 외부 협업 진행',
    '인수받을 개발자를 고려해 상세 주석, 커밋 컨벤션, 디렉토리 구조를 다른 프론트엔드 개발자와 합의',
  ],
  outcome: '유선 전화와 포털로 받던 검진 예약을 웹으로 옮겨, 수진자가 직접 예약과 문진을 진행하는 흐름을 만들었습니다.',
  metrics: [
    { value: 'FE 2 · BE 7', label: '프로젝트 인력', caption: '프론트엔드 기여도 50%' },
    { value: '최대 4단계', label: '동적 웹문진', caption: '답변에 따라 다음 질문이 달라짐' },
  ],
  stack: ['Next.js 14', 'React', 'TypeScript', 'TanStack Query', 'Recoil', 'React Hook Form', 'Tailwind CSS', 'MSW'],
  cover: {
    src: '/images/projects/hospital-reservation/mobile-home.webp',
    alt: '병원 모바일 웹 시작 화면. 병원 건물 사진 아래에 건진 예약과 나의 예약 조회·변경 버튼이 있다.',
    width: 1125,
    height: 2436,
  },
  highlights: [
    {
      id: 'single-question-flow',
      category: '문진 · 라우팅',
      title: '한 페이지에 한 질문, 전체 질문은 한 번에',
      lead: '질문이 많고 중간에 나가면 처음부터 다시 해야 하던 기존 문진 방식을, 질문 하나당 한 페이지로 바꿨다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/hospital-reservation/questionnaire.webp',
          alt: '기본문진 화면. 치료 중인 질환이 있는지 묻는 질문에 예와 아니오 버튼이 있고, 예를 고르면 하위 질문과 약물 선택 목록이 이어지며, 아래에 이전으로·다음으로 버튼이 있다.',
          width: 952,
          height: 1996,
          caption: '기본문진 화면. 질문 위의 단계 표시와 하단의 이전·다음 버튼으로 한 번에 하나씩 진행한다.',
        },
      ],
      problem:
        '기존 웹문진은 질문이 너무 많고 한 번 나가면 처음부터 다시 해야 해서 항의가 많았다. 수진자의 이탈을 막으려고 새 예약 서비스에서는 한 페이지에 한 질문만 보이게 바꿨다.',
      pointsStyle: 'steps',
      points: [
        { title: '질문 ID로 라우팅', description: '질문마다 고유 ID를 주고 그 ID로 페이지를 이동' },
        { title: '이전·다음 질문 찾기', description: '진입할 때 1번부터 마지막 질문까지 전체 데이터를 한 번에 불러온 뒤, 현재 ID로 이전과 다음 질문을 계산' },
        { title: '백엔드와 합의', description: '페이지마다 서버에 이전·다음 질문을 묻는 방식 대신 전체를 한 번에 내려주는 방식으로 합의' },
      ],
      tradeoff: {
        gain: '페이지를 옮길 때마다 통신하지 않고, 같은 시점의 질문 데이터로 정합성을 유지한다.',
        cost: '처음 진입할 때 전체 질문 데이터를 한 번에 받아야 한다.',
      },
      note: {
        label: '선행 개발',
        text: '백엔드 개발자 투입이 늦어져 Mock API로 이 데이터 조회 방식을 백엔드보다 먼저 만들고, 그 구조를 백엔드에 제안했다.',
      },
    },
    {
      id: 'nested-answers',
      category: '문진 · 폼 구조',
      title: '4단계로 이어지는 답변을 최상단까지 모으기',
      lead: '답변에 따라 하위 질문이 계속 이어지는 재귀 구조에서, 가장 깊은 단계의 값을 prop 전달 없이 위로 올렸다.',
      problem:
        '문진은 답변하면 하위 질문과 답변이 이어지는 구조다. 질문, 답변, 도움말을 재귀 컴포넌트로 만들면 최대 4단계 깊이의 선택 값을 페이지까지 올리기 위해 state와 prop을 계속 내려보내야 한다.',
      pointsStyle: 'list',
      points: [
        { title: '같은 name 공유', description: 'React Hook Form을 쓰고 모든 단계가 같은 name 값을 공유하게 해, 값이 하나의 폼 상태로 모이게 함' },
        { title: '부모 ID로 추가·제거', description: '선택하거나 해제할 때 부모 질문의 ID만 알면 하위 답변을 추가하고 제거' },
        { title: '재귀 컴포넌트 재사용', description: '질문·답변·도움말을 같은 공통 컴포넌트로 반복해 코드 중복을 줄임' },
      ],
    },
    {
      id: 'schedule-select',
      category: '예약 · 일정',
      title: '가능한 날짜와 시간만 고르게 하는 일정 선택',
      lead: '수진자가 받을 검사와 소속에 따라 검진이 가능한 날짜를 캘린더에 보여주고, 시간대까지 고르면 예약한다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/hospital-reservation/schedule-select.webp',
          alt: '일정 선택 화면. 최근 건진일과 안내 문구, 장소 선택 아래에 월별 캘린더가 있고, 날짜마다 마감·휴무 표시와 오전·오후 가능 여부가 보인다. 아래에 시간대 선택과 예약하기 버튼이 있다.',
          width: 828,
          height: 1796,
          caption: '일정 선택 화면. 날짜별 마감·휴무·오전·오후 가능 여부를 캘린더에 표시한다.',
        },
      ],
      pointsStyle: 'list',
      points: [
        { title: '가능한 날짜 표시', description: '날짜마다 마감, 휴무, 오전·오후 가능 여부를 구분해 보여주고, 선택할 수 없는 날은 고르지 못하게 함' },
        { title: '안내와 조건', description: '대상 조건에 따라 희망일 선택 기준을 안내하는 문구를 보여줌' },
        { title: '단계별 선택', description: '장소, 날짜, 시간대를 순서대로 고르고 모두 고른 뒤에만 예약' },
        { title: '예외·검증', description: '선택 조건을 검증하고 예약 정보를 저장·전송하는 흐름을 처리. 예방검진 B2C 예약은 단독으로 구현' },
      ],
    },
    {
      id: 'secure-target-access',
      category: '보안 · 초기 로딩',
      title: '보안 요건에 맞춘 수진자 정보 접근 방식',
      lead: '인증 뒤 여러 화면에서 필요한 정보를 다루면서, 초기 저장 방식을 보안 심사에 맞게 변경했다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/hospital-reservation/phone-verification.webp',
          alt: '병원 모바일 웹의 휴대폰 인증 화면. 인증하기 버튼이 있다.',
          width: 945,
          height: 890,
          caption: '휴대폰 인증 화면. 인증을 마친 뒤 수진자 정보를 조회해 이후 화면에서 사용한다.',
        },
        {
          type: 'image',
          src: '/images/projects/hospital-reservation/portal-home.webp',
          alt: '병원 건강의학부 홈페이지. 예약조회, 웹문진, 결과조회, 증명서 발급 안내 메뉴가 보인다.',
          width: 2000,
          height: 1134,
          caption: '건강의학부 홈페이지의 예약조회·웹문진 진입 메뉴.',
        },
      ],
      problem:
        '인증 뒤 조회한 수진자 정보를 처음에는 브라우저에 유지했다. 보안 심사와 데이터 신뢰성 요구를 반영해 저장 방식을 재검토했다.',
      pointsStyle: 'list',
      points: [
        { title: '조회·초기 로딩', description: 'TanStack Query prefetching·캐시와 SSR을 도입해 화면에 필요한 정보를 준비' },
        { title: '공통 접근 로직', description: 'useTarget 커스텀 훅으로 B2B·B2C의 수진자 정보 공유 로직을 재사용' },
      ],
    },
    {
      id: 'mock-api',
      category: 'Mock API · 협업',
      title: 'API가 없는 상태에서 화면 개발을 진행한 방식',
      lead: '인터페이스 정의서조차 없던 시기에 MSW로 예약·문진 흐름을 먼저 구현했다.',
      problem:
        '프론트엔드는 6월 초에 투입됐는데 API는 6월 말에 완성될 예정이었고, 막상 시작하니 인터페이스 정의서도 없었다. 그래도 오픈 일정은 지켜야 했다. 화면만 만들어 두고 기다리면 분기 로직을 검증할 수 없었다.',
      pointsStyle: 'steps',
      points: [
        { title: '후보 비교', description: 'Next.js API Routes, MSW, JSON Server, Express를 놓고 비교' },
        { title: 'MSW 선택', description: '실제 네트워크 요청을 그대로 모방해 서버 없이도 개발·테스트할 수 있고, 핸들러로 여러 시나리오를 쉽게 만들 수 있으며 TypeScript와 잘 맞아 선택' },
        { title: '요청 단위 전환', description: '공용 HTTP 클라이언트의 인터셉터가 요청 헤더의 isMock 값을 보고 기본 주소를 Mock 서버로 바꿈. 화면 코드는 그대로 두고 API별로 Mock과 실제 서버를 같은 환경에서 함께 쓸 수 있음' },
        { title: '실제 연동', description: 'API 제공 후 예약·문진 화면과 실제 응답의 차이, 오류 조건을 확인' },
        { title: '외부 협업', description: '발견한 오류와 필요한 데이터 조건을 백엔드·SI 협력사 개발자에게 공유' },
      ],
      flow: [
        { label: '화면 요청' },
        { label: 'HTTP 클라이언트', caption: 'isMock 헤더로 분기' },
        { label: 'Mock 서버 또는 실제 API' },
      ],
      note: {
        label: '참여 기간',
        text: '2025년 3월까지 참여했다. 이후 운영은 다른 개발자가 이어받았고, 인수를 고려해 처음부터 상세 주석과 커밋 컨벤션, 디렉토리 구조를 맞춰 개발했다.',
      },
    },
    {
      id: 'deployment',
      category: '배포 · 환경 제약',
      title: '자동 배포를 시도했지만 구축하지 못한 경험',
      lead: '매주 회의 전에 배포해 의료진이 직접 테스트하는 방식이라 배포가 잦았고, 자동화를 시도했지만 환경 제약에 막혔다.',
      pointsStyle: 'steps',
      points: [
        { title: '배경', description: '매주 회의 전까지 진행한 부분을 배포하면 의료진이 배포 환경에서 테스트하고 피드백하는 방식으로 진행' },
        { title: '시도', description: 'GitLab Runner로 파이프라인을 만들려고 퇴근 후 개인 장비로 구축 방법을 먼저 공부' },
        { title: '제약', description: '고객사 내부 개발망의 방화벽 때문에 설치가 제한되고, 형상관리 용도로만 쓰는 GitLab을 클라우드 플랫폼과 직접 연결하는 데 따른 부작용 우려로 구축하지 못함' },
        { title: '대안', description: '빌드 결과물을 SFTP로 전송하고 PM2로 수동 배포를 관리' },
      ],
      note: {
        label: '이후',
        text: '이 경험으로 Docker와 Jenkins를 공부하며 다른 프로젝트에서 자동 배포를 구축할 준비를 했다.',
      },
    },
  ],
}
