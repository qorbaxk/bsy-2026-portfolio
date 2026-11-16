# 프로젝트 데이터 템플릿과 문체

파일: `src/entities/project/api/data/<슬러그>.ts`
타입: `Project` (`src/entities/project/model/types.ts`)
참고 구현: `pds.ts`(이미지 + steps/list 혼합), `sellfit-ai.ts`(영상, comparison, metrics featured)

## 템플릿

```ts
import type { Project } from '../../model/types'

/**
 * @alias <프로젝트 한국어 이름> 프로젝트 데이터
 * @description <프로젝트를 한 문장으로 설명>.
 */
export const camelCaseName: Project = {
  slug: 'kebab-case-slug',
  order: 5,
  title: '<제목>',
  shortTitle: '<짧은 표기>',
  headline: '<한 줄 소개>',
  summary: '<메타 설명과 카드 요약에 쓰는 2문장 내외. 무엇을 만들었고 무엇을 다뤘는지>',
  company: '<회사>',
  period: '2026.01 - 2026.03',
  contributions: [
    { title: '<대표 역할 1>', description: '<짧은 설명>' },
    { title: '<대표 역할 2>', description: '<짧은 설명>' },
    { title: '<대표 역할 3>', description: '<짧은 설명>' },
  ],
  responsibilities: [
    '<담당 업무 문장>',
  ],
  outcome: '<이력서 성과 문장>',
  metrics: [
    { value: '<값>', label: '<의미>', caption: '<기준>' },
  ],
  stack: ['React', 'TypeScript'],
  cover: {
    src: '/images/projects/<슬러그>/<이름>.webp',
    alt: '<화면 설명>',
    width: 2000,
    height: 1093,
  },
  highlights: [
    {
      id: 'kebab-case-id',
      category: '<분야>',
      title: '<제목>',
      lead: '<한 줄 맥락>',
      problem: '<문제 상황. 없으면 이 줄 삭제>',
      media: [],
      pointsStyle: 'list',
      points: [
        { title: '<결정>', description: '<설명>' },
      ],
      tradeoff: { gain: '<얻은 것>', cost: '<감수한 것>' },
      outcome: '<결과 한 문장. 없으면 이 줄 삭제>',
    },
  ],
}
```

- 저장소·데모 링크는 현재 모델에 필드가 없으므로 템플릿에 넣지 않는다. 링크가 없는 프로젝트가 대부분이라는 전제로, 모델이 `links`로 확장된 뒤에도 링크가 없으면 필드를 생략한다. (SKILL.md "저장소·데모 링크 처리" 참고)
- 사용하지 않는 선택 필드(`cover`, `media`, `problem`, `flow`, `tradeoff`, `comparison`, `outcome`, `note`, `metrics`의 `caption`/`featured`)는 **빈 값으로 두지 말고 필드 자체를 삭제**한다. (`metrics`와 `highlights`는 필수 배열이다. `metrics`는 없으면 `[]`)
- `media: []`는 쓰지 않는다. 이미지가 없으면 `media` 필드를 지운다.
- 필드 순서는 위 템플릿 순서를 지킨다.
- 따옴표는 작은따옴표, 들여쓰기는 2칸, 세미콜론 없음, 끝 쉼표 사용(기존 파일과 동일).
- 문자열 안에 작은따옴표(`'`)가 들어가면 그 문자열만 큰따옴표로 감싸거나 표현을 바꾼다.

## 선택 필드 형태

```ts
// 처리 흐름 (파이프라인이 있을 때)
flow: [
  { label: '입력', caption: '상품명·카테고리' },
  { label: '생성' },
],

// 전후 비교 (사용자가 준 수치만)
comparison: {
  label: '생성 1회 원가',
  before: '약 500원',
  after: '약 100원',
  caption: '약 80% 감소 · 당시 운영 기준으로 제공된 대략적인 수치',
},

// 보충 메모
note: { label: '설계 원칙', text: '공개 API를 좁히고, 앱별 차이는 정해진 확장 지점에서 처리한다.' },
```

## 필드별 작성 규칙

| 필드 | 규칙 |
| --- | --- |
| `slug` | 영문 소문자+하이픈. `ProjectSlug` 유니온에 같은 값 추가 |
| `order` | 1부터. 다른 프로젝트와 겹치지 않게 |
| `headline` | 한 줄. 문장형 또는 "~한 개발 기록" 형태. 마침표 없음 |
| `summary` | 2문장 내외, 합니다체. 무엇을 만들었는지, 어떤 주제를 다뤘는지 |
| `period` | `YYYY.MM - YYYY.MM` 또는 `YYYY.MM - 진행 중`. 하이픈 앞뒤 공백 한 칸 |
| `contributions` | 3개 이내. `title`은 짧은 명사구, `description`은 한 구절 |
| `responsibilities` | 3~6개. 동사로 끝나는 업무 문장(예: "~를 개선", "~를 구성"). 이력서 경력기술서 문체 |
| `outcome` | 합니다체 한 문장. 정량 근거가 없는 효과를 단정하지 않는다 |
| `metrics` | 사용자가 준 수치만. `value`는 짧게. 출처가 불분명하면 `caption`에 기준을 적는다 |
| `stack` | 표시 순서 = 중요도 순. 표기는 공식 표기(예: `Next.js`, `TypeScript`) |
| `highlights[].id` | 프로젝트 안에서 유일한 kebab-case. 페이지 앵커와 목차에 쓰인다 |
| `highlights[].pointsStyle` | 순서가 있는 절차는 `steps`, 병렬 항목은 `list` |
| `points[].title` | 짧은 명사구(약 10자 내외) |
| `points[].description` | 한 문장. 명사형 종결 또는 "~한다" 평서형. 기존 파일의 해당 하이라이트 문체와 통일 |

## 문체

- 카드/요약(`headline`, `summary`, `outcome`): 합니다체. 예: "~를 구축했습니다."
- 하이라이트 본문(`lead`, `points`, `tradeoff`, `note`): 평서형 "~한다" 또는 명사형. 같은 프로젝트 안에서 통일한다.
- 과장 표현("획기적", "압도적", "혁신적")과 근거 없는 최상급을 쓰지 않는다.
- 행동과 결과를 구체적으로 쓴다. "성능을 개선했다"가 아니라 "무엇을 어떻게 바꿔 무엇이 달라졌다".
- 사실이 아닌 것을 채우지 않는다. 사용자가 준 자료에 없는 수치, 기술 이름, 기간은 쓰지 않는다.
- 이모지를 쓰지 않는다.

## 등록 코드

`src/entities/project/model/types.ts`

```ts
export type ProjectSlug = 'market-insight' | 'sellfit-ai' | 'pds' | 'hospital-reservation' | 'kebab-case-slug'
```

`src/entities/project/api/project.repository.ts`

```ts
import { camelCaseName } from './data/kebab-case-slug'
// ...
const PROJECTS: readonly Project[] = [marketInsight, sellfitAi, pds, hospitalReservation, camelCaseName].toSorted((a, b) => a.order - b.order)
```

import 줄은 기존처럼 파일명 알파벳 순서로 끼워 넣는다.

## 자주 나는 오류

| 증상 | 원인 |
| --- | --- |
| `Type '"x"' is not assignable to type 'ProjectSlug'` | `types.ts`의 유니온에 슬러그를 추가하지 않음 |
| `/projects/x`가 404 | 레포지토리의 `PROJECTS`에 등록하지 않음 |
| 이미지가 깨짐 | 경로 앞의 `/`나 `public`을 잘못 씀. `/images/projects/...` 형태여야 함 |
| 카드 순서가 이상함 | 다른 프로젝트와 `order`가 겹치거나 건너뜀 |
| 빌드 시 `Image` 크기 경고 | `width`, `height`가 실제 파일과 다름. `sips`로 다시 측정 |
