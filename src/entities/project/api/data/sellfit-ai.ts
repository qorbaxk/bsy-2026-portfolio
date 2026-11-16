import type { Project } from '../../model/types'

/**
 * @alias 셀핏 AI 프로젝트 데이터
 * @description AI 생성부터 편집·저장까지 직접 만든 이커머스 상세페이지 솔루션 기능.
 */
export const sellfitAi: Project = {
  slug: 'sellfit-ai',
  order: 2,
  title: '셀핏 AI',
  shortTitle: '셀핏 AI',
  headline: 'AI 생성부터 편집·저장까지, 직접 만든 개발 기록',
  summary:
    'AI로 상품 상세설명을 생성·편집할 수 있는 이커머스 솔루션의 신규 기능을 개발했습니다. 생성 원가를 낮춘 LLM 호출 구조, 이미지 저장, 스킨 생성 자동화, 편집 화면 렌더링을 다뤘습니다.',
  company: '커넥트웨이브',
  period: '2025.05 - 2026.02',
  contributions: [
    { title: 'AI 상세설명', description: '직접 LLM 호출과 프롬프트 캐싱' },
    { title: '이미지 저장', description: '고해상도 캡처 후 5MB 목표 압축' },
    { title: '스킨 생성 자동화', description: 'LangGraph 기반 변환 에이전트' },
  ],
  responsibilities: [
    'AI가 원하는 JSON 구조로 응답하도록 프롬프트·변환 규칙 개선',
    '기존 Bedrock Agent 호출을 LLM 직접 호출로 바꾸고, Knowledge Base 조회 분리와 프롬프트 캐싱으로 토큰·비용 절감',
    '반복 편집 중에도 화면이 매끄럽게 동작하도록 렌더링 개선',
    '상세페이지를 선명한 이미지로 저장하면서 용량을 줄이도록 캡처·압축 방식 개선',
    '기존 플레이오토 2.0 솔루션의 이미지 호스팅과 편집 결과 저장 흐름 연계',
    'LangGraph 기반 스킨 생성 에이전트를 개발해 퍼블리셔가 만든 HTML을 편집 가능한 템플릿 데이터로 변환, 수작업 이관 시간 단축',
  ],
  outcome: 'AI 기반 생성·편집 기능으로 셀러의 상품 상세페이지 제작 부담을 낮추고, 솔루션 유료 가입자 유치에 기여했습니다.',
  metrics: [
    { value: '약 80%', label: '생성 1회 원가 감소', caption: '약 500원 → 약 100원 · 당시 운영 기준의 대략적인 수치', featured: true },
    { value: '1일 → 3분', label: '스킨 1개 제작 시간', caption: '당시 작업 경험 기준', featured: true },
  ],
  stack: ['React', 'TypeScript', 'NestJS', 'Python', 'FastAPI', 'LangGraph', 'AWS Bedrock'],
  cover: {
    src: '/images/projects/sellfit-ai/editor-home.webp',
    alt: '셀핏 AI 에디터 메인 화면. AI로 제작하기, 직접 제작하기, MY 템플릿으로 제작하기 세 가지 시작 방식이 보인다.',
    width: 2000,
    height: 1093,
  },
  highlights: [
    {
      id: 'ai-cost',
      category: 'AI 상세설명',
      title: 'AI 생성 원가를 낮춘 호출 방식 변경',
      lead: 'Bedrock Agent 중심의 생성 과정을 직접 LLM 호출로 바꾸고, 반복되는 지침을 캐시했다.',
      problem: '기존에는 상품 정보와 블록을 Agent에 전달해 상세설명 문구를 생성했다. 호출 단위와 반복 입력을 세밀하게 조정하기 어려웠다.',
      pointsStyle: 'list',
      points: [
        { title: '수정이 필요한 블록만 요청', description: '문구가 바뀌어야 하는 블록만 LLM에 직접 호출한다.' },
        { title: '공통 규칙은 캐시로 재사용', description: '반복되는 지침을 프롬프트 캐시에 올려 매 호출마다 다시 보내지 않는다.' },
        { title: '첫 요청 후 병렬 처리', description: '첫 요청으로 캐시를 준비한 뒤 나머지 블록을 동시에 처리한다.' },
      ],
      comparison: {
        label: '생성 1회 원가',
        before: '약 500원',
        after: '약 100원',
        caption: '약 80% 감소 · 당시 운영 기준으로 제공된 대략적인 수치',
      },
    },
    {
      id: 'ai-pipeline',
      category: 'AI 상세설명',
      title: '블록 구조를 지키는 AI 생성 파이프라인',
      lead: '상세페이지 전체를 통째로 쓰지 않고, 기존 디자인의 텍스트 자리만 채워 다시 편집할 수 있게 했다.',
      media: [
        {
          type: 'video',
          src: '/images/projects/sellfit-ai/ai-generation.mp4',
          poster: '/images/projects/sellfit-ai/ai-generation-poster.webp',
          alt: '상품명, 카테고리, 이미지를 입력하고 생성을 누르면 AI 상세설명 생성 중 진행률이 표시되는 화면 녹화.',
          width: 1468,
          height: 866,
          caption: 'AI 상세설명 생성. 상품명·카테고리·이미지를 입력하면 진행률을 보여주며 블록별 문구를 생성한다.',
        },
      ],
      pointsStyle: 'steps',
      points: [
        { title: '필요한 블록만 고른다', description: '이미 문구가 확정된 블록은 그대로 두고, 상품별 문구가 바뀌어야 하는 블록만 생성 대상으로 선택' },
        { title: '디자인의 제약을 함께 보낸다', description: '제목·설명 등 채울 자리, 각 텍스트의 글자 크기와 상품 정보를 전달해 블록 형식에 맞는 응답을 요청' },
        { title: '첫 블록 후 나머지를 병렬 처리', description: '공통 지침을 첫 호출로 캐시에 올리고, 이후 블록은 동시에 생성하되 결과 순서는 원본과 동일하게 복원' },
        { title: '응답을 화면 데이터로 변환한다', description: '구조화된 응답을 해석해 기존 블록의 변수 자리에 문구를 넣고, 화면에서 다시 수정할 수 있는 상태로 반영' },
      ],
      outcome: '원래 블록의 위치·서식은 유지하면서 상품별 문구만 채워진 편집 화면을 만든다.',
      note: {
        label: '언어별 처리',
        text: '한국어의 고정 문구는 호출 없이 유지하고, 다국어에서는 그 문구도 번역해 같은 블록에 반영했다.',
      },
    },
    {
      id: 'image-export',
      category: '이미지 저장',
      title: '긴 상세페이지를 선명하게, 5MB를 목표로 저장',
      lead: '블록이 늘수록 이미지가 길고 무거워져, 고해상도 캡처 뒤 단계적으로 압축하는 흐름을 만들었다.',
      pointsStyle: 'steps',
      points: [
        { title: '캡처 전에 화면을 준비', description: '외부 이미지를 로드하고, 선택 테두리·조절 핸들 같은 편집 UI는 결과 이미지에 찍히지 않도록 잠시 숨긴다.' },
        { title: '4× 고해상도로 먼저 캡처', description: '작은 글자와 이미지의 윤곽이 압축 후에도 남도록 원본보다 높은 해상도로 캡처한다.' },
        { title: 'JPEG 품질부터 조정', description: '품질 값을 0.92부터 단계적으로 내려 5MB 이하를 탐색한다. 크면 해상도를 줄여 다시 압축한다.' },
        { title: '편집 화면을 원상 복구', description: '캡처용으로 바꾼 이미지와 화면 상태를 되돌려 사용자가 그대로 편집을 이어갈 수 있게 한다.' },
      ],
      tradeoff: {
        gain: '4× 해상도로 캡처해 작은 글자와 윤곽을 보존한다.',
        cost: '5MB를 넘으면 JPEG 품질을 낮추고, 그래도 크면 해상도를 줄인다.',
      },
      note: {
        label: '5MB 기준',
        text: '판매 채널마다 허용 용량이 달라, 파일당 5MB를 압축 목표로 설정했다.',
      },
    },
    {
      id: 'gif-export',
      category: '이미지 저장',
      title: 'GIF가 있어도 움직임을 살리는 저장 방식',
      lead: '전체 상세페이지를 한 장으로 캡처하면 GIF가 정지 화면으로 남을 수 있어, 블록 단위로 결과를 분리했다.',
      pointsStyle: 'steps',
      points: [
        { title: '분리', description: '연속된 일반 블록은 묶고 GIF 블록은 각각 떼어 낸다. 출력 폭은 서로 맞춘다.' },
        { title: '재생성', description: '외부 GIF를 브라우저에서 읽을 수 있게 준비한 뒤, 움직이는 이미지로 다시 만든다.' },
        { title: '다운로드', description: '결과 파일이 하나면 바로 저장, 여러 개면 ZIP으로 묶어 내려받는다.' },
      ],
      flow: [
        { label: '일반 블록 묶음', caption: 'JPEG로 합쳐 저장' },
        { label: 'GIF가 든 블록', caption: '애니메이션 GIF로 저장' },
        { label: '일반 블록 묶음', caption: 'JPEG로 합쳐 저장' },
      ],
    },
    {
      id: 'skin-automation',
      category: '스킨 생성 자동화',
      title: '스킨 한 벌: 수작업 약 하루 → 자동화 후 3분 이내',
      lead: '블록마다 복사·변환·검토·변수화·저장을 반복하던 과정을 파일 업로드 한 번으로 줄였다.',
      problem:
        '블록마다 코드를 붙여넣고 API를 호출한 뒤, 변환 결과를 하나씩 확인했다. 오류가 나면 다시 호출하고, 변수명을 지정해 블록별로 저장했다. 긴 처리 중 중단되면 어느 단계부터 다시 해야 하는지도 직접 확인해야 했다.',
      pointsStyle: 'list',
      points: [
        { title: '파일 하나로 전체 스킨 생성', description: '에이전트가 블록을 찾고 JSON으로 바꾼 뒤, 검증·재시도·변수화·DB 저장까지 이어서 처리한다.' },
        { title: '진행 상태 확인', description: '진행 상태와 완료 결과는 화면에서 확인한다.' },
      ],
      comparison: {
        label: '스킨 1개 제작 시간',
        before: '약 1일',
        after: '3분 이내',
        caption: '당시 작업 경험 기준',
      },
    },
    {
      id: 'langgraph-pipeline',
      category: '스킨 생성 자동화',
      title: 'LangGraph로 파일 입력부터 DB 저장까지 연결',
      lead: '규칙으로 파싱할 부분과 AI가 해석할 부분을 나누고, 블록별 실패는 검증·재시도로 다뤘다.',
      pointsStyle: 'steps',
      points: [
        { title: 'TSX에서 블록 추출', description: '파일 안의 구분 정보로 각 블록의 코드와 순서를 식별' },
        { title: '블록별 JSON 변환', description: 'AI가 시각 요소를 에디터가 읽는 데이터로 변환. 블록 단위 작업은 병렬 진행' },
        { title: '검증하고 다시 시도', description: '형식 검증에 실패한 블록을 재생성. 도형 겹침 사례는 변환 규칙을 별도로 보강' },
        { title: '변수화·중복 제거', description: '나중에 문구를 바꿀 자리를 변수로 만들고, 같은 이름이 겹치지 않게 정리' },
        { title: '스킨·블록 저장', description: '완성된 스킨과 블록을 DB에 저장하고 작업 ID로 진행 상태를 조회' },
      ],
      note: {
        label: '운영 중 보완한 오류',
        text: '도형 겹침은 변환 규칙을 보강하고, 저장 단계의 변수명 충돌은 중복 제거로 해결했다.',
      },
    },
    {
      id: 'lazy-editor',
      category: '프론트엔드 에디터',
      title: 'Froala를 편집할 때만 띄우는 컴포넌트',
      lead: '상세페이지에 텍스트·표가 많아도, 평소에는 가볍게 보여주고 선택한 요소만 리치 에디터로 전환했다.',
      pointsStyle: 'list',
      points: [
        { title: '일반 화면 · HTML로 표시', description: '텍스트·표의 저장된 내용을 그대로 렌더링한다. 편집하지 않는 요소마다 Froala 인스턴스를 띄우지 않는다.' },
        { title: '편집 화면 · 선택한 요소만 Froala로 전환', description: '텍스트 입력·서식 변경·표 편집을 제공하고, 여러 요소가 하나의 툴바 영역을 사용한다.' },
        { title: '입력과 저장을 분리', description: '입력 중에는 현재 HTML을 보관하고, 편집 상태를 벗어날 때 블록 데이터에 반영한다. 매 글자마다 전체 블록을 저장하지 않는다.' },
      ],
      note: {
        label: '상태 전환',
        text: '포커스가 툴바·팝업으로 옮겨질 때 편집이 갑자기 끝나지 않도록 상태 전환도 분리했다.',
      },
    },
    {
      id: 'editor-rendering',
      category: '프론트엔드 에디터',
      title: '텍스트가 바뀌어도 디자인이 무너지지 않도록',
      lead: 'Froala의 입력 결과를 그대로 저장하는 대신, 서식·커서·높이 변화가 블록 배치에 미치는 영향을 처리했다.',
      pointsStyle: 'list',
      points: [
        { title: '서식 유지', description: '전체 선택 후 재입력·Enter·한글 조합 시에도 기존 글꼴·굵기 구조를 복원하고 커서를 유지' },
        { title: '붙여넣기', description: '외부 HTML은 허용된 태그만 남기고 정리해, 다른 사이트의 불필요한 스타일이 블록에 섞이지 않게 처리' },
        { title: '높이 연동', description: '텍스트·표의 실제 높이 차이를 감지해 아래 요소들의 위치와 블록 높이를 함께 이동' },
        { title: '초기 렌더 예외', description: '에디터가 처음 뜰 때 생기는 높이 변화는 무시하고, 사용자가 수정한 뒤의 변화만 레이아웃에 반영' },
      ],
      flow: [
        { label: '입력' },
        { label: '실제 높이 측정' },
        { label: '아래 요소 이동' },
        { label: '블록 높이 갱신' },
      ],
    },
  ],
}
