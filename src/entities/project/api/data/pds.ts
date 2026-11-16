import type { Project } from '../../model/types'

/**
 * @alias PDS 프로젝트 데이터
 * @description 사내 공통 UI 패키지의 확장 방식, 스타일 공급, 패키지 경계, 배포 경로를 다듬은 디자인 시스템 프로젝트.
 */
export const pds: Project = {
  slug: 'pds',
  order: 3,
  title: 'PDS (사내 디자인 시스템)',
  shortTitle: 'PDS',
  headline: '서비스가 설치해 쓰는 공통 UI 패키지의 확장·스타일·배포 방식을 정리한 기록',
  summary:
    '여러 사내 서비스가 설치해 쓰는 공통 React 컴포넌트 패키지를 개선했습니다. 컴포넌트 API와 확장 지점, 스타일 공급 방식, 패키지 진입점, Storybook 문서와 Nexus 배포 경로를 정리했습니다.',
  background: {
    about:
      'PDS는 사내에서 부르는 디자인 시스템 이름으로, 여러 사내 서비스가 같은 버튼, 입력, 표, 차트를 쓰도록 만든 React 컴포넌트 패키지입니다. 컴포넌트와 디자인 토큰(색상, 타이포그래피)을 함께 제공하고, 사내 npm 레지스트리(Nexus)로 배포해 각 서비스가 설치해서 씁니다. 기존 서비스에서 쓰던 공용 컴포넌트를 별도 저장소의 패키지로 옮기면서 시작했고, 서비스는 직접 만든 UI를 PDS 컴포넌트로 하나씩 바꿔 갑니다.',
    flow: [
      { label: '컴포넌트 개발', caption: '타입·스타일·훅·스토리를 한 폴더에 구성' },
      { label: '문서·검증', caption: 'Storybook 미리보기, CI 검사, Vitest' },
      { label: '배포', caption: '버전 태그를 push하면 Nexus에 publish' },
      { label: '서비스 적용', caption: '패키지를 설치하고 기존 UI를 교체' },
    ],
    role: 'Nexus 배포 구성과 이후의 개선을 맡았습니다. 컴포넌트 확장(차트, 다크 모드, 아이콘 등록), 구조와 공개 API 정리, CI와 테스트, 기능별 진입점 분리, 이전 가이드를 개발했고, 서비스 쪽에서는 PDS를 설치해 직접 만든 UI를 교체했습니다.',
  },
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
  outcome:
    '여러 서비스가 같은 컴포넌트를 설치해 쓰고, 필요한 기능만 골라 가져오며, 서비스별 차이는 정해진 확장 지점에서 처리하는 공통 UI 패키지로 정리했습니다.',
  metrics: [
    { value: '4개', label: '기능별 진입점', caption: '차트·에디터·날짜 선택·알림' },
  ],
  stack: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Vitest', 'Nexus'],
  cover: {
    src: '/images/projects/pds/stat-card.webp',
    alt: 'Storybook의 StatCard 컴포넌트 문서 화면. 왼쪽에 컴포넌트 목록이 있고, 오른쪽에 설명과 동작하는 카드 예시, 속성 표가 보인다.',
    width: 2000,
    height: 1093,
  },
  highlights: [
    {
      id: 'component-api',
      category: '컴포넌트 API',
      title: '서비스마다 다른 요구를 받는 공통 컴포넌트 API',
      lead: '공통 구조는 유지하고, 서비스가 필요한 부분만 바꿔 쓸 수 있게 확장 지점을 정리했다.',
      problem:
        '이관한 컴포넌트는 특정 서비스의 도메인 상수가 섞여 있고, 같은 역할의 컴포넌트가 중복되어 있었다. 공용 폴더에 기대는 구조라 컴포넌트를 따로 떼어 쓰기 어려웠다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/pds/chart-multi-series.webp',
          alt: 'Storybook의 BarChart Multi Series 스토리. 9.9, 9.10, 9.11 세 날짜마다 파란색 요청 막대와 초록색 처리 막대가 나란히 그려져 있다.',
          width: 2000,
          height: 700,
          caption: '막대 차트의 여러 시리즈 표시. 날짜별로 요청과 처리 두 값을 나란히 비교한다.',
        },
      ],
      pointsStyle: 'list',
      points: [
        { title: '구조 정리', description: '컴포넌트별 타입·스타일·훅·스토리를 한 폴더에 두고, 폴더마다 index.ts로 공개 범위를 정함. 새 컴포넌트는 생성 스크립트로 같은 구조를 만듦' },
        { title: '중복과 도메인 제거', description: '기능이 겹치던 Tag를 Chip에 합치고, 특정 도메인 상수와 중복된 표 컴포넌트를 제거해 표를 Table 하나로 통합' },
        { title: '화면별 확장', description: '컴포넌트 안쪽 요소의 스타일(classNames), HTML 속성(slotProps), 내부 구조(렌더 함수)를 서비스가 바꿀 수 있게 열고 규칙을 문서화. 앱 전용 아이콘은 등록 API로 패키지를 다시 배포하지 않고 추가' },
        { title: '차트 요구', description: '막대·영역 차트에 여러 시리즈를 표시하고 요약 수치 컴포넌트를 추가' },
      ],
      note: {
        label: '설계 원칙',
        text: '내부 구조는 닫고(index.ts로 공개 범위를 제한), 서비스가 바꿔도 되는 곳만 이름을 붙여 연다. 앱별 차이는 그 확장 지점에서 처리한다.',
      },
    },
    {
      id: 'styling-theme',
      category: '스타일 · 테마',
      title: '소비 앱과 충돌하지 않게 스타일 공급',
      lead: '패키지 CSS가 서비스의 기존 화면을 깨지 않도록 스타일 공급 방식을 정리하고, 테마와 다크 모드로 확장했다.',
      media: [
        {
          type: 'image',
          src: '/images/projects/pds/button-default-theme.webp',
          alt: 'Storybook의 Button Variants 스토리. 파란색 기본 색상으로 채움, 선, 텍스트 형태의 primary·secondary·disable 버튼과 XS부터 LG까지 크기별 버튼이 보인다.',
          width: 2000,
          height: 720,
          caption: '기본 테마의 Button. 형태(채움·선·텍스트)와 색상, 크기를 한 화면에서 확인한다.',
        },
        {
          type: 'image',
          src: '/images/projects/pds/button-violet-theme.webp',
          alt: '같은 Button Variants 스토리에 보라색 브랜드 테마를 적용한 화면. 모든 primary 버튼과 강조색이 파란색에서 보라색으로 바뀌었다.',
          width: 2000,
          height: 720,
          caption: '브랜드 색 교체. 런타임에 테마를 주입하면 컴포넌트 코드를 건드리지 않고 강조색이 일괄 바뀐다.',
        },
      ],
      pointsStyle: 'steps',
      points: [
        { title: '전역 리셋 제외', description: '패키지 CSS가 소비 앱의 기본 버튼·목록 스타일을 덮지 않도록 Preflight를 제외' },
        { title: '두 가지 공급 방식', description: 'Tailwind 앱은 자기 빌드에서 패키지 클래스를 스캔하고 토큰을 공유해 CSS 중복을 피함. 그렇지 않은 앱은 Preflight가 빠진 패키지 스타일 파일을 별도로 가져와 사용' },
        { title: '폰트 공급', description: '외부 폰트 CDN 의존을 제거하고 폰트 제공 책임을 소비 앱에 명시' },
        { title: '다크 모드', description: '.dark 클래스 기반 변형을 추가하고 Storybook 툴바에서 전환해 확인. canvas로 그리는 차트는 dark 클래스 변화를 구독해 팔레트를 다시 그림' },
        { title: '브랜드 테마', description: '컴포넌트에 남아 있던 토큰 밖 색상을 토큰으로 교체해, 테마 주입 한 번으로 모든 강조색이 바뀌게 함' },
      ],
      tradeoff: {
        gain: '전역 스타일 충돌과 외부 CDN 의존을 줄인다.',
        cost: '앱이 폰트와 토큰을 맞춰야 한다. CSS를 따로 가져오는 앱에서도 다크 모드가 적용되도록 dark 클래스에 중요도(!)를 붙였기 때문에, 앱이 같은 속성을 덮어쓰려면 더 높은 우선순위가 필요하다.',
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
        { title: '타입 선언 수정', description: '배포된 타입 선언에 내부 경로 별칭이 남아, 소비 앱에서 여러 컴포넌트의 타입이 조용히 any가 되어 오타도 잡히지 않았다. 빌드 마지막 단계에서 별칭을 상대 경로로 치환' },
        { title: '달력 CSS 분리', description: 'Tailwind 앱이 전체 스타일 파일 없이 달력 CSS만 가져오도록 제공' },
      ],
      tradeoff: {
        gain: '앱이 쓰는 기능의 의존성만 설치하고, 패키지는 하나로 유지해 버전과 배포 경로를 늘리지 않는다.',
        cost: '앱은 사용한 진입점의 peer 패키지와 별도 CSS를 직접 설치·연결해야 한다. 기존 사용처는 import를 고쳐야 해서 메이저 버전(1.0.0)으로 올리고 이전 가이드를 함께 냈다.',
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
        { title: '문서 사이트', description: 'Storybook을 정적 사이트로 배포해 개발자뿐 아니라 디자이너·기획·QA도 컴포넌트와 디자인 규칙을 볼 수 있게 함' },
        { title: 'CI 검사', description: '형식·린트·타입·테스트·패키지 빌드·Storybook 빌드를 변경마다 실행' },
        { title: '상태 테스트', description: '상태 로직이 있는 핵심 컴포넌트(버튼·입력·선택·모달·표)의 주요 조작을 Vitest로 검증' },
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
        { title: '사내 배포', description: 'Nexus로 배포 대상을 전환. 서비스가 이미 쓰던 사내 인증을 그대로 재사용해 새 계정이나 온보딩 없이 설치할 수 있게 하고, 설치·인증 방법을 문서화' },
        { title: '버전 게이트', description: '태그와 패키지 버전 일치를 확인한 뒤 빌드·배포' },
        { title: '이전 가이드', description: '서브패스 import와 삭제·개편된 export, 변경된 표 API의 대체 방법과 호출부 수정 절차를 기록' },
        { title: '서비스 적용', description: '서비스 화면에서 직접 만든 UI를 PDS 컴포넌트로 교체' },
      ],
    },
  ],
}
