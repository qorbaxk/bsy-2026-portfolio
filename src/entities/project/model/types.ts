/**
 * @alias 프로젝트 슬러그
 * @description 프로젝트 상세 페이지 URL(/projects/[slug])에 쓰이는 고유 식별자.
 */
export type ProjectSlug = 'market-insight' | 'sellfit-ai' | 'pds' | 'hospital-reservation'

/**
 * @alias 핵심 수치
 * @description 프로젝트 카드와 히어로에서 강조하는 정량 지표.
 */
export interface ProjectMetric {
  /** 강조할 값 (예: "약 80%") */
  value: string
  /** 값의 의미 (예: "생성 1회 원가 감소") */
  label: string
  /** 수치의 기준이나 출처를 밝히는 보충 설명 */
  caption?: string
  /** 사이트 대표 수치로 노출할지 여부 */
  featured?: boolean
}

/**
 * @alias 대표 수치
 * @description 출처 프로젝트 이름이 붙은 핵심 수치. 히어로처럼 프로젝트 밖에서 수치를 보여줄 때 쓴다.
 */
export interface FeaturedMetric extends ProjectMetric {
  projectTitle: string
}

/**
 * @alias 핵심 기여
 * @description 프로젝트에서 맡은 대표 역할 한 줄 요약.
 */
export interface ProjectContribution {
  title: string
  description?: string
}

/**
 * @alias 설명 항목
 * @description 제목과 설명으로 구성된 기술적 결정 단위. 목록 또는 번호 단계로 표시된다.
 */
export interface CasePoint {
  title: string
  description: string
}

/**
 * @alias 흐름 노드
 * @description 처리 흐름(파이프라인)의 한 단계. caption으로 입출력이나 형식을 덧붙인다.
 */
export interface FlowNode {
  label: string
  caption?: string
}

/**
 * @alias 트레이드오프
 * @description 선택으로 얻은 것과 감수한 것을 함께 기록한다.
 */
export interface CaseTradeoff {
  /** 얻은 것 */
  gain: string
  /** 감수한 것 */
  cost: string
}

/**
 * @alias 전후 비교
 * @description 개선 전후의 값을 대비해 보여주는 성과 지표.
 */
export interface CaseComparison {
  label: string
  before: string
  after: string
  /** 수치의 기준을 밝히는 문구 */
  caption?: string
}

/**
 * @alias 보충 메모
 * @description 구현 중 보완한 점이나 참여 범위처럼 본문 흐름 밖의 사실을 짧게 덧붙인다.
 */
export interface CaseNote {
  label: string
  text: string
}

/**
 * @alias 화면 이미지
 * @description 실제 서비스 화면 캡처. 원본 크기를 함께 둬 next/image가 레이아웃 이동 없이 렌더링한다.
 */
export interface CaseImage {
  type: 'image'
  src: string
  /** 스크린리더용 화면 설명 */
  alt: string
  width: number
  height: number
  /** 화면 아래에 표시하는 설명 */
  caption: string
}

/**
 * @alias 화면 영상
 * @description 동작을 보여주는 짧은 반복 영상. 자동 재생되지만 사용자가 멈출 수 있다.
 */
export interface CaseVideo {
  type: 'video'
  src: string
  /** 로딩 전과 모션 감소 설정에서 보여줄 대표 이미지 */
  poster: string
  alt: string
  width: number
  height: number
  caption: string
}

/**
 * @alias 화면 자료
 * @description 케이스 스터디에 첨부하는 이미지 또는 영상.
 */
export type CaseMedia = CaseImage | CaseVideo

/**
 * @alias 케이스 스터디 항목
 * @description 한 가지 기술적 문제를 맥락, 해결, 트레이드오프, 성과 순으로 설명하는 단위.
 */
export interface CaseHighlight {
  /** 페이지 내 앵커 id */
  id: string
  /** 상단 라벨로 쓰이는 분야 (예: "AI 상세설명") */
  category: string
  title: string
  /** 한 줄 맥락 요약 */
  lead: string
  /** 실제 서비스 화면 자료 */
  media?: readonly CaseMedia[]
  /** 기존 방식의 한계 등 문제 상황 */
  problem?: string
  points: readonly CasePoint[]
  /** points를 번호 단계(steps) 또는 일반 목록(list)으로 보여줄지 결정 */
  pointsStyle: 'list' | 'steps'
  flow?: readonly FlowNode[]
  tradeoff?: CaseTradeoff
  comparison?: CaseComparison
  /** 최종 결과 한 문장 */
  outcome?: string
  note?: CaseNote
}

/**
 * @alias 프로젝트 링크
 * @description 프로젝트의 서비스나 저장소로 가는 외부 링크 한 개. 상세 페이지 상단에 버튼으로 표시한다.
 */
export interface ProjectLink {
  /** 버튼 문구 (예: "서비스 바로가기") */
  label: string
  /** https로 시작하는 공개 주소 */
  href: string
}

/**
 * @alias 프로젝트 커버 이미지
 * @description 프로젝트 대표 화면 이미지. next/image가 레이아웃 이동 없이 렌더링하도록 원본 크기를 함께 둔다.
 */
export interface ProjectCover {
  src: string
  alt: string
  width: number
  height: number
  /** 타일에서 잘릴 때 기준 위치. 기본은 왼쪽 위(사이드바와 제목이 보임), 가운데에 화면이 있는 이미지는 center */
  position?: 'left-top' | 'center'
}

/**
 * @alias 프로젝트 배경
 * @description 프로젝트를 처음 보는 사람이 이해할 수 있도록 서비스 목적, 참여 주체, 데이터 흐름, 내 역할 범위를 설명한다.
 */
export interface ProjectBackground {
  /** 서비스가 무엇이고 누가 어떻게 쓰는지 */
  about: string
  /** 참여 주체와 각자의 역할. 설명이 꼭 필요한 프로젝트에만 둔다. */
  parties?: readonly CasePoint[]
  /** 데이터가 오가는 순서 */
  flow: readonly FlowNode[]
  /** 내가 맡은 범위와 맡지 않은 범위 */
  role: string
}

/**
 * @alias 프로젝트
 * @description 포트폴리오 한 프로젝트의 전체 정보. 목록 카드와 상세 케이스 스터디가 같은 모델을 쓴다.
 */
export interface Project {
  slug: ProjectSlug
  /** 표시 순서 (01부터) */
  order: number
  title: string
  /** 짧은 표기 (내비게이션, 이전/다음 링크 등) */
  shortTitle: string
  /** 목록 카드와 상세 상단에 쓰이는 한 줄 소개 */
  headline: string
  /** 메타 설명과 카드 요약에 쓰이는 문장 */
  summary: string
  /** 서비스 맥락 설명. 도메인 지식이 필요한 프로젝트에만 둔다. */
  background?: ProjectBackground
  company: string
  /** 표시용 기간 (예: "2026.02 - 진행 중") */
  period: string
  contributions: readonly ProjectContribution[]
  /** 이력서 경력기술서 기반 담당 업무 */
  responsibilities: readonly string[]
  /** 이력서 성과 문장 */
  outcome: string
  metrics: readonly ProjectMetric[]
  stack: readonly string[]
  /** 서비스·저장소 링크. 공개된 주소가 있는 프로젝트에만 두고, 없으면 필드를 생략한다. */
  links?: readonly ProjectLink[]
  /** 목록 카드와 상세 상단에 쓰는 대표 화면 */
  cover?: ProjectCover
  highlights: readonly CaseHighlight[]
}
