# Project Structure Rules

AI 에이전트는 파일을 만들거나 옮기기 전에 이 문서를 확인합니다.
이 프로젝트는 **Feature-Sliced Design(FSD)** 을 따르고, Next.js의 `app/`은 라우팅만 맡습니다.

---

## 1. 최상위 폴더

```
app/        Next.js 라우팅(App Router). 얇은 re-export, 메타데이터, sitemap, robots, OG 이미지
pages/      빈 placeholder. 파일을 추가하지 않음
public/     정적 자산 (이미지, 영상)
src/        FSD 레이어
.kiro/      에이전트 설정: steering(규칙), skills(슬래시 명령 작업 절차)
```

- 루트 `app/`에는 비즈니스 로직과 UI를 직접 쓰지 않습니다. `src/pages`의 페이지를 불러와 re-export 합니다.
  ```tsx
  // app/page.tsx
  import { HomePage } from '@/pages/home'
  export default HomePage
  ```
- 루트 `pages/`는 Next.js가 `src/pages`를 Pages Router로 오인하지 않게 하는 빈 폴더입니다. 파일을 넣지 않고, 지우지 않습니다.
- `src/pages`는 FSD의 페이지 레이어이고 Next.js 라우트가 아닙니다. 라우트를 추가하려면 루트 `app/`에 `page.tsx`를 만들고 `src/pages`의 페이지를 연결합니다.

---

## 2. FSD 레이어와 역할

위에서 아래 순서입니다. 각 레이어는 **자기보다 아래 레이어만** import 할 수 있습니다.

| 레이어 | 경로 | 역할 | 현재 슬라이스 |
| --- | --- | --- | --- |
| app | `src/app/` | 전역 설정: 루트 레이아웃, 메타데이터, 전역 스타일(디자인 토큰), 폰트 | (슬라이스 없음) |
| pages | `src/pages/` | 페이지 조합. 위젯과 엔티티를 배치하고 페이지 메타데이터를 만듦 | `home`, `project-detail`, `not-found`, `error` |
| widgets | `src/widgets/` | 독립적인 화면 블록(섹션) | `site-header`, `site-footer`, `hero`, `about`, `skills`, `career`, `project-showcase`, `project-case-study`, `contact` |
| features | `src/features/` | 사용자 상호작용 단위 | `theme-toggle`, `section-nav` |
| entities | `src/entities/` | 도메인 모델, 데이터, 도메인 UI | `project`, `profile`, `career`, `skill` |
| shared | `src/shared/` | 도메인과 무관한 공용 코드 | `ui`, `lib`, `config`, `types` |

### import 규칙

- 허용 방향: `app → pages → widgets → features → entities → shared`
- 같은 레이어의 다른 슬라이스를 import 하지 않습니다. (예: `widgets/hero`가 `widgets/about`을 import 금지)
  - 공유가 필요하면 한 단계 아래 레이어로 내립니다.
- 슬라이스 밖에서는 반드시 슬라이스의 `index.ts`(Public API)로만 import 합니다.
  - Good: `import { ProjectCard } from '@/entities/project'`
  - Bad: `import { ProjectCard } from '@/entities/project/ui/ProjectCard'`
- 슬라이스 안에서는 상대 경로를 씁니다. (예: `import { useTheme } from '../model/useTheme'`)
- 다른 레이어를 import 할 때는 `@/` 별칭을 씁니다.

---

## 3. 슬라이스 내부 구조 (세그먼트)

슬라이스는 `src/<layer>/<slice-name>/` 아래에 아래 세그먼트로 나눕니다. 필요한 세그먼트만 만듭니다.

| 세그먼트 | 담는 것 |
| --- | --- |
| `ui/` | React 컴포넌트 |
| `model/` | 타입, 상수, 상태, 커스텀 훅 |
| `api/` | 데이터 조회 (repository), 정적 데이터 파일 |
| `lib/` | 순수 함수, 유틸, 슬라이스 전용 스크립트 |
| `config/` | 설정 값 |
| `index.ts` | 슬라이스의 Public API. 밖에서 쓸 것만 export |

```
src/entities/project/
  api/
    project.repository.ts
    data/
      sellfit-ai.ts
  lib/
  model/
    types.ts
  ui/
    ProjectCard.tsx
  index.ts
```

---

## 4. 파일 네이밍 규칙

| 대상 | 규칙 | 예시 |
| --- | --- | --- |
| React 컴포넌트 파일 | `PascalCase.tsx`, 파일 하나에 컴포넌트 하나 | `ProjectCard.tsx` |
| 커스텀 훅 | `use` + `PascalCase`, `.ts` (JSX 없으면) | `useTheme.ts` |
| 타입 모음 | `types.ts` | `model/types.ts` |
| 데이터 조회 | `<도메인>.repository.ts` | `career.repository.ts` |
| 정적 데이터 파일 | 프로젝트 슬러그와 같은 `kebab-case.ts` | `api/data/sellfit-ai.ts` |
| 유틸, 설정 파일 | `kebab-case.ts` | `theme-init-script.ts`, `site.ts` |
| 슬라이스 폴더 | `kebab-case` | `project-case-study` |
| Next.js 라우트 폴더 | 소문자 `kebab-case`, 동적 세그먼트는 `[slug]` | `app/projects/[slug]` |
| 컴포넌트, 타입, 인터페이스 이름 | `PascalCase`. Props는 `<컴포넌트>Props` | `BadgeProps` |
| 함수, 변수 | `camelCase` | `getProjectSlugs` |
| 상수 | `UPPER_SNAKE_CASE` | `THEME_INIT_SCRIPT` |

- 컴포넌트는 named export 합니다. `default export`는 Next.js가 요구하는 파일(`page.tsx`, `layout.tsx`, `error.tsx` 등)에서만 씁니다.
- 슬라이스 `index.ts`는 `export { X } from './ui/X'` 형태로 필요한 것만 다시 내보냅니다. 타입은 `export type`을 씁니다.
- 컴포넌트에는 한국어 JSDoc `@alias`, `@description`을 답니다. (`rules.md` 참고)

---

## 5. 새 파일을 만들 위치 결정표

| 만들 것 | 위치 |
| --- | --- |
| 도메인과 무관한 작은 UI (버튼, 배지, 컨테이너) | `src/shared/ui/` 에 만들고 `src/shared/ui/index.ts`에 export |
| 공용 유틸, 공용 훅 | `src/shared/lib/` (훅은 `src/shared/lib/hooks/`) 에 만들고 `index.ts`에 export |
| 사이트 전역 상수, 네비게이션 | `src/shared/config/` |
| 공용 타입 | `src/shared/types/` |
| 프로젝트, 경력, 스킬, 프로필 도메인 타입, 데이터, 도메인 UI | `src/entities/<도메인>/` (`model`, `api`, `ui`) |
| 프로젝트 케이스 스터디 내용 추가 | `/add-project` 스킬(`.kiro/skills/add-project`)을 사용. 수동으로 할 때는 `src/entities/project/api/data/<슬러그>.ts` 를 만들고 `project.repository.ts`에 등록, `ProjectSlug` 타입에도 슬러그 추가 |
| 경력, 학력, 자격증 수정 | `src/entities/career/api/career.repository.ts` |
| 기술 스택 목록 수정 | `src/entities/skill/api/skill.repository.ts` |
| 소개 문구, 연락처 수정 | `src/entities/profile/api/profile.repository.ts`, `src/shared/config/site.ts` |
| 클릭, 토글처럼 사용자 동작이 있는 기능 | `src/features/<기능-이름>/` |
| 페이지의 한 섹션(화면 블록) | `src/widgets/<위젯-이름>/ui/` |
| 새 페이지 | `src/pages/<페이지-이름>/` 에 만들고, 루트 `app/<경로>/page.tsx`에서 re-export |
| 전역 CSS, 디자인 토큰 | `src/app/styles/globals.css` |
| 슬라이스 하나에서만 쓰는 함수나 상수 | 그 슬라이스의 `lib/` 또는 `model/` |

### 판단 순서

1. 도메인(프로젝트, 경력 등)을 알아야 하는가? 그렇다면 `entities`. 아니면 `shared`.
2. 사용자 동작(클릭, 토글, 입력)을 처리하는가? 그렇다면 `features`.
3. 여러 요소를 묶은 화면 한 덩어리인가? 그렇다면 `widgets`.
4. 라우트 하나를 완성하는 조합인가? 그렇다면 `pages`.
5. 판단이 서지 않으면 만들기 전에 사용자에게 위치를 묻습니다.

---

## 6. 컴포넌트 작성 규칙

- 서버 컴포넌트가 기본입니다. 상태, 이벤트 핸들러, 브라우저 API, `useEffect`가 필요할 때만 파일 맨 위에 `'use client'`를 씁니다.
- `'use client'`는 가능한 한 작은 컴포넌트로 좁혀서 씁니다. 정적 HTML을 유지하는 것이 이 사이트의 설계 원칙입니다.
- 비즈니스 로직과 상태 처리는 커스텀 훅(`use*.ts`)으로 분리하고, 컴포넌트는 렌더링에 집중합니다.
  - 슬라이스 전용 훅은 해당 슬라이스의 `model/`에, 여러 곳에서 쓰는 훅은 `src/shared/lib/hooks/`에 둡니다.
- 색상, 간격은 `globals.css`의 디자인 토큰(`bg-canvas`, `text-ink`, `border-line` 등)을 씁니다. 임의의 HEX 값을 직접 쓰지 않습니다.
- 클래스 병합은 `cn()`을 씁니다.
- Props는 `interface <이름>Props`로 선언하고, DOM 요소를 감싸는 컴포넌트는 `ComponentPropsWithoutRef<'태그'>`를 확장합니다.

---

## 7. 정적 자산 규칙

- 원본 PNG, GIF를 `public/`에 두지 않습니다. 스크린샷은 WebP, 움직이는 화면은 MP4로 변환합니다.
- 프로젝트 이미지는 `public/images/projects/<슬러그>/`, 프로필 이미지는 `public/images/profile/`에 둡니다.
- 이미지를 추가하면 `src/entities/project/api/data/<슬러그>.ts`의 `cover` 또는 하이라이트 `media`에 경로와 원본 크기를 적습니다.
