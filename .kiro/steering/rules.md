# Project Rules

AI 에이전트는 이 프로젝트에서 작업할 때 아래 규칙을 항상 따릅니다.
폴더 구조와 파일 네이밍 규칙은 `structure.md`를 따릅니다.

---

# 1. 기술 스택 및 버전

아래 목록에 없는 라이브러리나 구버전 문법을 임의로 쓰지 않습니다.
새 의존성이 필요하면 설치 전에 사용자에게 이유와 대안을 설명하고 확인을 받습니다.

| 구분 | 사용 | 비고 |
| --- | --- | --- |
| 프레임워크 | Next.js 16 (**App Router** 전용) | Pages Router, `getServerSideProps`, `getStaticProps` 사용 금지 |
| UI | React 19 | 서버 컴포넌트가 기본, 필요한 곳에만 `'use client'` |
| 언어 | TypeScript ~5.9 (`strict: true`) | `any`, `@ts-ignore`, `@ts-expect-error` 사용 금지. 타입을 구체적으로 지정 |
| 스타일링 | Tailwind CSS v4 (`@tailwindcss/postcss`) | `tailwind.config.js` 만들지 않음. 토큰은 `src/app/styles/globals.css`의 CSS 변수 |
| 클래스 병합 | `clsx` + `tailwind-merge` | 반드시 `@/shared/lib`의 `cn()` 사용 |
| 폰트 | Pretendard(본문), Paperlogy(제목), Syne | 새 폰트 추가 금지 |
| 린트 | ESLint 9 (flat config) + `eslint-config-next` | `eslint.config.mjs` |
| 패키지 매니저 | **npm** | `package-lock.json` 기준. `pnpm`, `yarn`, `bun` 사용 금지 |
| 상태 관리 / 테스트 / UI 라이브러리 | 없음 | 도입하지 않음. 필요하면 먼저 제안 |

## 코드 작성 규칙

- import 경로는 `@/*` 별칭(= `src/*`)을 씁니다. 같은 슬라이스 안에서는 상대 경로를 씁니다.
- 아이콘은 SVG(`@/shared/ui`의 `Icon`)를 쓰고, 이모지를 UI 아이콘으로 쓰지 않습니다.
- 클릭 가능한 요소에는 `cursor-pointer`, 포커스 링, `transition-colors duration-200` 정도의 전환을 둡니다.
- 애니메이션은 `prefers-reduced-motion`을 지킵니다.
- 이미지는 `next/image`, 폰트는 `next/font`를 씁니다.
- 컴포넌트, 타입, 함수에는 한국어 JSDoc으로 `@alias`(한국어 이름)와 `@description`(설명)을 답니다.

```ts
/**
 * @alias 배지
 * @description 기술 스택이나 상태를 짧게 표시하는 알약 모양 라벨.
 */
```

- 포트폴리오 콘텐츠(경력, 프로젝트 수치, 소개 문구)는 사용자가 준 내용만 씁니다. 수치나 사실을 지어내거나 추정해서 채우지 않습니다.

---

# 2. 금지 사항 및 안전장치 (Guardrails)

## 임의 수정 금지 파일

사용자가 명시적으로 요청하지 않으면 아래 파일은 수정하지 않습니다.

- `.env*` (`.env.example`은 새 환경 변수를 추가할 때만 설명과 함께 수정)
- `package-lock.json` (의존성 변경을 승인받아 `npm install`을 실행한 결과로만 바뀌어야 함)
- `next-env.d.ts`, `tsconfig.tsbuildinfo`, `.next/`, `node_modules/` (자동 생성물)
- `.git/` 내부, `.gitignore`
- `src/app/fonts/` 폰트 파일과 `LICENSE.md`
- `.kiro/steering/` 규칙 파일 (규칙 변경은 사용자가 요청할 때만)

## 확인 없이 하지 않는 일

- `rm -rf`, `git reset --hard`, `git clean -fd`, `git push --force`, `git checkout -- .` 같은 파괴적 명령 실행
- 파일 삭제, 대량 이름 변경, 기존 테스트 코드 삭제
- 의존성 추가, 제거, 메이저 버전 변경
- `next.config.ts`의 보안 헤더 제거나 완화
- 루트 `pages/` 폴더에 파일 추가 (Pages Router 오인 방지용 빈 폴더. 자세한 내용은 `structure.md`)
- 사용자가 요청하지 않은 리팩토링이나 기능 추가

## 보안

- 비밀 값(키, 토큰)을 코드, 로그, 커밋 메시지에 넣지 않습니다.
- 클라이언트에 노출해도 되는 환경 변수만 `NEXT_PUBLIC_` 접두사를 씁니다.

---

# 3. 작업 완료 전 자가 검증 루틴

코드를 수정한 뒤에는 "완료"라고 보고하기 전에 아래 명령을 직접 실행하고, 에러가 있으면 고친 뒤 다시 실행합니다.

```bash
npm run lint
npm run typecheck
```

| 변경 내용 | 추가로 실행 |
| --- | --- |
| `app/` 라우팅, 메타데이터, `sitemap`, `robots`, OG 이미지, `next.config.ts`, 정적 생성(`generateStaticParams`) | `npm run build` |
| 의존성 변경 | `npm run build` |
| UI 변경 | `npm run dev`로 확인 가능한 범위에서 375px, 768px, 1024px, 1440px 반응형과 라이트/다크 모드 점검 |

- 검증 명령이 실패하면 실패한 상태 그대로 완료 보고를 하지 않습니다. 원인을 설명하거나 고칩니다.
- 린트 에러를 `eslint-disable`로 덮지 않습니다. 불가피하면 이유를 사용자에게 알립니다.
- 현재 테스트 러너는 없습니다. 테스트 도구 도입은 사용자 확인 후 진행합니다.
- 완료 보고에는 실행한 명령과 결과를 짧게 적습니다. 실행하지 못한 검증이 있으면 이유와 함께 적습니다.

---

# 4. Git 브랜치 및 PR 규칙 (Git Workflow)

커밋 메시지 규칙은 이 문서 아래쪽 "Git Commit Convention Rules"를 따릅니다.

## 브랜치

- `main` 브랜치에 직접 커밋하거나 푸시하지 않습니다. 코드를 수정하기 전에 현재 브랜치가 `main`이면 새 브랜치를 먼저 만듭니다.
- 브랜치 이름은 `<type>/<짧은-설명>` 형식입니다. `type`은 커밋 type(`feat`, `fix`, `refactor`, `docs`, `style`, `chore` 등)과 같은 값을 씁니다.
  - 이슈 번호가 있으면 `<type>/<이슈번호>-<짧은-설명>` (예: `feat/12-project-filter`)
  - 이슈 번호가 없으면 `<type>/<짧은-설명>` (예: `fix/mobile-menu-focus`)
- 설명은 영문 소문자와 하이픈(`-`)만 씁니다.
- 한 브랜치에는 하나의 작업만 담습니다.

## 커밋과 푸시

- **커밋은 사용자가 명시적으로 "커밋해줘"라고 요청할 때만 합니다.** 작업이 끝났다고 스스로 `git commit`을 실행하지 않습니다.
- **푸시도 사용자가 요청할 때만 합니다.** 커밋을 요청받았다고 해서 푸시까지 하지 않습니다.
- 커밋을 요청받으면 아래 "Git Commit Convention Rules"를 따르고, 하나의 논리적 변경만 한 커밋에 담습니다. 여러 변경이 섞여 있으면 나누어 커밋합니다.
- 커밋하기 전에 `git status`와 `git diff`로 포함될 파일을 확인하고, 사용자가 요청한 변경만 스테이징합니다. (`git add -A`, `git add .`를 무심코 쓰지 않습니다.)
- 커밋하기 전에 "3. 작업 완료 전 자가 검증 루틴"을 통과해야 합니다.
- 커밋을 요청하지 않았다면 변경 사항은 커밋하지 않은 채 작업 트리에 남겨 두고, 변경한 파일 목록을 보고합니다.

## PR (Pull Request)

- **PR은 사용자가 명시적으로 "PR 만들어줘"라고 요청할 때만 만듭니다.** 작업이 끝났다고 스스로 PR을 만들지 않습니다.
- 사용자가 요청하면 저장소에 PR 템플릿(`.github/pull_request_template.md`)이 있을 때 그 형식을 따릅니다. 템플릿이 없으면 변경 요약, 변경 이유, 검증 결과를 적습니다.
- PR 제목은 커밋 컨벤션의 Header 형식(`<type>(<scope>): <subject>`)을 따릅니다.
- `main`으로의 병합은 사용자가 직접 합니다. 에이전트가 병합하지 않습니다.

---

# Git Commit Convention Rules

AI 에이전트는 Git 커밋 메시지를 생성하거나 커밋을 실행할 때, 반드시 아래의 규칙을 엄격하게 준수해야 합니다.

---

## 1. 기본 구조 (Commit Message Format)

커밋 메시지는 **Header(제목)**, **Body(본문)**, **Footer(꼬리말)** 세 부분으로 구성하며, 각 파트는 빈 줄(Empty Line)로 구분합니다.

```text
<type>(<scope>): <subject>

<body>

<footer>
```

---

## 2. Type (커밋 유형) - 필수

변경 사항의 성격을 가장 잘 나타내는 아래의 소문자 키워드 중 하나만 선택하여 사용합니다.

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정 (README, 주석 등)
- `style`: 코드 포맷팅, 세미콜론 누락 등 (비즈니스 로직 변경 없음)
- `refactor`: 코드 리팩토링 (기능 추가나 버그 수정 없이 코드 구조 개선)
- `perf`: 성능 개선
- `test`: 테스트 코드 추가, 수정 또는 리팩토링
- `build`: 빌드 시스템 또는 외부 의존성(npm, gradle 등) 수정
- `ci`: CI/CD 설정 파일 및 스크립트 수정
- `chore`: 기타 작업 (패키지 매니저 설정, `.gitignore` 수정 등 프로덕션 코드 변경 없음)
- `revert`: 이전 커밋 되돌리기

---

## 3. Scope (변경 범위) - 선택

- 변경 사항이 영향을 미치는 모듈, 컴포넌트, 파일명 또는 도메인 영역을 소문자로 명시합니다.
- 예: `feat(auth): ...`, `fix(api): ...`, `refactor(ui): ...`
- 변경 범위가 프로젝트 전반에 걸치거나 특정하기 어려운 경우 괄호와 함께 생략할 수 있습니다. (예: `chore: 의존성 패키지 업데이트`)

---

## 4. Subject (제목) 작성 규칙 - 필수

1. **언어:** 한국어로 작성합니다. (단, 고유 명사나 기술 용어는 영문 표기 허용)
2. **길이:** 50자 이내로 간결하게 핵심만 요약합니다.
3. **문체:** 명사형 종결 또는 명령조로 작성하며, 과거형(`~했음`, `~수정함`)을 사용하지 않습니다.
   - Good: `소셜 로그인 토큰 갱신 로직 추가`
   - Bad: `소셜 로그인 토큰 갱신 로직을 추가했습니다.`
4. **구두점:** 제목 끝에 마침표(`.`), 느낌표(`!`) 등 문장 부호를 절대 붙이지 않습니다.
5. **띄어쓰기:** 콜론(`:`) 뒤에는 반드시 공백 한 칸을 둡니다.

---

## 5. Body (본문) 작성 규칙 - 선택

- 제목만으로 변경 내용을 충분히 이해하기 어려운 경우 작성합니다.
- **무엇을(What)** 변경했는지보다 **왜(Why)** 변경했는지, 어떤 문제가 있었는지를 중심으로 설명합니다.
- 한 줄당 최대 72자를 넘지 않도록 줄바꿈합니다.
- 여러 항목을 나열할 때는 불릿 기호(`-`)를 사용합니다.

---

## 6. Footer (꼬리말) 작성 규칙 - 선택

- 이슈 트래커(Jira, GitHub Issues 등)의 이슈 번호를 참조할 때 사용합니다.
- 키워드: `Fixes`, `Resolves`, `Refs`, `Related to`
  - 예: `Resolves: #123`
- **Breaking Changes(하위 호환성이 깨지는 중대한 변경):**
  - 제목의 타입 뒤에 `!`를 붙이거나 (예: `feat(api)!: ...`), Footer 최상단에 `BREAKING CHANGE:`로 시작하여 변경 내용과 마이그레이션 방법을 명시합니다.

---

## 7. 원자적 커밋 (Atomic Commit) 원칙

- 에이전트는 **한 번의 커밋에 하나의 논리적 변경 사항만** 포함해야 합니다.
- 기능 구현(`feat`)과 코드 스타일 정리(`style`), 버그 수정(`fix`)이 섞여 있다면 반드시 커밋을 분리하여 진행합니다.

---

## 8. 올바른 작성 예시 (Examples)

### 예시 1: 단순 기능 추가 (Header만 작성)
```text
feat(user): 이메일 중복 확인 API 엔드포인트 추가
```

### 예시 2: 버그 수정 및 상세 이유 설명 (Header + Body + Footer)
```text
fix(payment): 결제 승인 요청 시 타임아웃 예외 처리 누락 수정

PG사 응답 지연 시 서버가 무한 대기 상태에 빠지는 문제를 방지하기 위해
RestTemplate의 Read Timeout을 5초로 설정하고 예외 핸들러를 추가함.

Resolves: #42
```

### 예시 3: 하위 호환성이 깨지는 변경 (Breaking Change)
```text
feat(auth)!: JWT 토큰 페이로드에서 사용자 이메일 필드 제거

보안 강화를 위해 토큰 내 민감 정보를 제외하고 userId만 포함하도록 변경함.
클라이언트 측에서는 별도의 프로필 조회 API를 호출해야 함.

BREAKING CHANGE: JWT payload no longer includes 'email' field.
```