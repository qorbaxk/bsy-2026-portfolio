import type { Project } from '../../model/types'

/**
 * @alias PDS 프로젝트 데이터
 * @description 공통 UI 패키지의 사용·배포 경계를 다듬은 디자인 시스템 프로젝트.
 */
export const pds: Project = {
  slug: 'pds',
  order: 3,
  title: 'Playauto Design System (PDS)',
  shortTitle: 'PDS',
  headline: '공통 UI 패키지의 사용·배포 경계를 다듬은 개발 기록',
  summary:
    '여러 프로젝트에서 설치·재사용할 수 있는 사내 공통 컴포넌트 패키지를 구축했습니다. 컴포넌트 API, 스타일 공급 방식, 패키지 진입점, Storybook 문서와 Nexus 배포 경로를 정리했습니다.',
  company: '커넥트웨이브',
  period: '2026.09 - 2026.10',
  contributions: [
    { title: '확장 API', description: '공개 API를 좁히고 확장 지점을 문서화' },
    { title: '패키지 배포', description: '기능별 진입점과 Nexus 사내 배포' },
    { title: '품질과 이전', description: 'Storybook·CI·Vitest와 이전 가이드' },
  ],
  responsibilities: [
    '차트 등 공통 컴포넌트 확장 및 Storybook 미리보기·사용 예시 제공',
    'Nexus 사내 레지스트리 배포로 프로젝트별 설치·업데이트 경로 구성',
    '기존 솔루션 컴포넌트를 PDS 패키지로 교체하는 작업 진행',
  ],
  outcome: '공통 컴포넌트로 반복적인 UI 구현을 줄이고, 유지보수와 신규 프로젝트의 화면 구축 효율을 높였습니다.',
  metrics: [
    { value: '4개', label: '기능별 진입점', caption: '차트·에디터·날짜 선택·알림' },
  ],
  stack: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Vitest', 'Nexus'],
  cover: {
    src: '/images/projects/pds/storybook-intro.webp',
    alt: 'PlayAuto Design System의 Storybook 소개 화면. 왼쪽에 Foundations와 UI 메뉴가 있고 오른쪽에 설치 방법이 보인다.',
    width: 2000,
    height: 1093,
  },
  highlights: [
    {
      id: 'component-api',
      category: '컴포넌트 API',
      title: '앱마다 다른 요구를 받는 공통 컴포넌트 API',
      lead: '공통 구조는 유지하고, 소비 앱이 필요한 부분만 바꿔 쓸 수 있게 확장 지점을 정리했다.',
      pointsStyle: 'list',
      points: [
        { title: '구조 정리', description: '컴포넌트별 타입·스타일·훅·스토리를 가까이 두고 공개 진입점을 정리' },
        { title: '화면별 확장', description: '스타일·HTML 속성·내부 표시를 바꾸는 규칙을 문서화' },
        { title: '차트 요구', description: '막대·영역 차트에 여러 시리즈를 표시하고 요약 수치 컴포넌트를 추가' },
        { title: '앱 전용 아이콘', description: '아이콘 등록 API를 열어 패키지를 다시 배포하지 않고 앱별 아이콘을 추가' },
      ],
      note: {
        label: '설계 원칙',
        text: '공개 API를 좁히고, 앱별 차이는 정해진 확장 지점에서 처리한다.',
      },
    },
    {
      id: 'styling-theme',
      category: '스타일 · 테마',
      title: '소비 앱과 충돌하지 않게 스타일 공급',
      lead: '팀이 전역 리셋을 제외한 CSS를 만든 뒤, 앱 환경에 맞춘 사용법과 테마·다크 모드를 확장했다.',
      pointsStyle: 'steps',
      points: [
        { title: '전역 리셋 제외', description: '패키지 CSS가 소비 앱의 기본 버튼·목록 스타일을 덮지 않도록 Preflight를 제외' },
        { title: 'Tailwind 앱', description: '앱의 빌드에서 패키지 클래스를 스캔하고 토큰을 공유해 CSS 중복을 피함' },
        { title: '비 Tailwind 앱', description: 'Preflight가 빠진 패키지 스타일 파일을 별도로 가져와 사용' },
        { title: '브랜드와 다크 모드', description: '색상은 토큰으로 연결하고 .dark 기반 변형을 추가해 앱별 테마를 지원' },
        { title: '폰트 공급', description: '외부 폰트 CDN 의존을 제거하고 폰트 제공 책임을 소비 앱에 명시' },
      ],
      tradeoff: {
        gain: '전역 스타일 충돌과 외부 CDN 의존을 줄인다.',
        cost: '앱이 폰트와 토큰을 맞춰야 한다.',
      },
    },
    {
      id: 'package-boundary',
      category: '패키지 경계',
      title: '필요한 기능만 가져오는 패키지 경계',
      lead: '기본 진입점에 몰려 있던 무거운 기능을 나눠, 앱이 쓰는 기능의 의존성만 선택하게 했다.',
      problem: '기존 기본 진입점은 버튼만 써도 차트·에디터·달력·알림 의존성을 함께 설치해야 했다.',
      pointsStyle: 'steps',
      points: [
        { title: '기능별 진입점', description: '차트·에디터·날짜 선택·알림을 각각 별도 import 경로로 분리' },
        { title: '선택 설치', description: '무거운 라이브러리는 선택적 peer 의존성으로 이동' },
        { title: '타입 선언 수정', description: '배포된 타입의 내부 경로 별칭을 상대 경로로 바꿔 소비 앱의 타입 해석 문제 해결' },
        { title: '달력 CSS 분리', description: 'Tailwind 앱이 전체 스타일 파일 없이 달력 CSS만 가져오도록 제공' },
      ],
      tradeoff: {
        gain: '앱이 쓰는 기능의 의존성만 설치한다.',
        cost: '앱은 사용한 진입점의 peer 패키지와 별도 CSS를 직접 설치·연결해야 한다.',
      },
    },
    {
      id: 'docs-quality',
      category: '문서 · 품질',
      title: '예제로 확인하고, 변경은 자동으로 검증',
      lead: '기존 Storybook을 사용 가이드로 확장하고, 패키지 변경에 필요한 검사와 상태 테스트를 추가했다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/pds/storybook-intro.webp',
          alt: 'PlayAuto Design System의 Storybook 소개 화면. 설치 방법과 문서 구성이 안내되어 있다.',
          width: 2000,
          height: 1093,
          caption: 'Storybook 소개. Foundations(색상·타이포그래피·아이콘)와 UI(Atoms·Molecules·Layouts)로 나눈 사용 가이드와 설치 방법.',
        },
        {
          type: 'image',
          src: '/images/projects/pds/storybook-table.webp',
          alt: 'Storybook의 Table 컴포넌트 문서 화면. 설명 아래에 실제로 동작하는 표 예시가 있다.',
          width: 2000,
          height: 1093,
          caption: 'Table 컴포넌트 문서. 설명과 속성, 동작하는 예시, 선택·페이지네이션·컬럼 크기 조절 등 상태별 스토리를 함께 제공한다.',
        },
      ],
      pointsStyle: 'list',
      points: [
        { title: '미리보기', description: '컴포넌트의 상태·크기·변형을 스토리로 확인하고 사용 예시를 문서에서 탐색' },
        { title: '테마 확인', description: '미리보기에서 밝은·어두운 화면과 브랜드 색 변형을 확인' },
        { title: 'CI 검사', description: '형식·린트·타입·테스트·패키지 빌드·Storybook 빌드를 변경마다 실행' },
        { title: '상태 테스트', description: '버튼·입력·선택·모달·표의 주요 조작을 Vitest로 검증' },
      ],
      note: {
        label: '검증 방식',
        text: '시각적 사용 예시와 자동 검사로 소비 앱이 보는 공개 동작을 확인한다.',
      },
    },
    {
      id: 'release-migration',
      category: '배포 · 이전',
      title: '배포 경로와 이전 절차를 함께 정리',
      lead: '패키지를 사내 레지스트리로 옮기고, 버전 변경으로 달라지는 import·호출 방식을 안내했다.',
      pointsStyle: 'steps',
      points: [
        { title: '기존 배포', description: '초기 버전은 GitHub Packages를 대상으로 구성' },
        { title: '사내 배포', description: 'Nexus로 배포 대상을 전환하고 설치·인증 방법을 문서화' },
        { title: '버전 게이트', description: '태그와 패키지 버전 일치를 확인한 뒤 빌드·배포' },
        { title: '이전 가이드', description: '서브패스 import와 변경된 표 API 등 호출부 수정 절차를 기록' },
      ],
    },
  ],
}
