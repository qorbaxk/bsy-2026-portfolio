# 백승연 | 프론트엔드 개발자 포트폴리오

이력서와 PPT 포트폴리오를 웹으로 옮긴 개인 포트폴리오 사이트입니다.
프로젝트마다 **배경 → 접근 → 흐름 → 트레이드오프 → 결과** 구조의 케이스 스터디를 제공합니다.

## 기술 스택

- Next.js 16 (App Router, React Server Components) / React 19 / TypeScript
- Tailwind CSS v4 (CSS 변수 토큰 기반 라이트·다크 테마)
- Pretendard(동적 서브셋, 본문) + Paperlogy(제목, 서브셋·셀프 호스팅), `next/font`·`next/image`

## 시작하기

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
npm run lint && npm run typecheck
```

배포 시 `NEXT_PUBLIC_SITE_URL`에 실제 도메인을 지정합니다(`.env.example` 참고).
사이트맵, canonical, Open Graph, JSON-LD의 기준 주소로 쓰입니다.

## GitHub Pages 배포

`main`에 push하면 `.github/workflows/deploy.yml`이 린트와 타입 검사 후 정적 파일(`out/`)로 빌드해 GitHub Pages에 배포합니다.

- 저장소 **Settings → Pages → Source**를 **GitHub Actions**로 한 번 지정해야 합니다.
- 사이트 주소와 경로는 Pages 설정에서 읽습니다. 저장소 이름 경로(`/bsy-2026-portfolio`)와 커스텀 도메인 모두 별도 수정 없이 동작합니다.
- 정적 호스팅이라 `next.config.ts`의 보안 헤더(`X-Frame-Options` 등)는 Pages에서 적용되지 않습니다. 일반 빌드(`npm run build && npm run start`)에서는 그대로 적용됩니다.
- 로컬에서 같은 결과를 보려면 `STATIC_EXPORT=true npm run build` 후 `out/`을 정적 서버로 열면 됩니다. 저장소 이름 경로로 확인하려면 `NEXT_PUBLIC_BASE_PATH=/bsy-2026-portfolio`도 함께 지정합니다.

## 폴더 구조 (Feature-Sliced Design)

Next.js의 `app/`은 라우팅만 담당하고, FSD 레이어는 `src/` 아래에 둡니다.
루트 `pages/`는 Next가 `src/pages`를 Pages Router로 오인하지 않게 하는 빈 폴더입니다.

```
app/                 Next.js 라우팅 (얇은 re-export, 메타데이터, sitemap, robots, OG 이미지)
pages/               (placeholder)
src/
  app/               전역 설정: 루트 레이아웃, 메타데이터, 전역 스타일(디자인 토큰)
  pages/             페이지 조합: home, project-detail, not-found, error
  widgets/           화면 블록: site-header, hero, about, skills, project-showcase, career, contact, project-case-study ...
  features/          사용자 상호작용: theme-toggle, section-nav
  entities/          도메인: project, profile, career, skill (model / api / ui)
  shared/            공용: ui(프리미티브), lib(cn, hooks), config, types
```

import는 위 레이어에서 아래 레이어 방향으로만 허용됩니다. 각 슬라이스는 `index.ts`로만 공개합니다.

## 이미지 추가

원본 PNG/GIF는 `public/`에 두지 말고 WebP(스크린샷)·MP4(움직이는 화면)로 변환해 `public/images/projects/<슬러그>/`에 넣습니다. 그다음 `src/entities/project/api/data/<슬러그>.ts`의 `cover`(대표 화면) 또는 하이라이트의 `media`에 경로와 원본 크기를 적습니다.

## 콘텐츠 수정

콘텐츠는 모두 `src/entities/*/api/` 아래 타입이 지정된 데이터 파일에 있습니다.

| 수정할 내용 | 파일 |
| --- | --- |
| 프로젝트 케이스 스터디 | `src/entities/project/api/data/*.ts` |
| 소개 문구, 연락처 | `src/entities/profile/api/profile.repository.ts`, `src/shared/config/site.ts` |
| 경력·학력·자격증 | `src/entities/career/api/career.repository.ts` |
| 기술 스택 | `src/entities/skill/api/skill.repository.ts` |

저장소 함수가 비동기로 선언돼 있어, 나중에 CMS나 API로 바꿔도 화면 코드는 그대로 둘 수 있습니다.

## 설계 메모

- **렌더링**: 전 페이지가 빌드 시 정적 HTML로 생성됩니다. 클라이언트 JS는 테마 전환, 모바일 메뉴, 스크롤 위치 추적, ErrorBoundary에만 사용합니다.
- **디자인**: 흑백 단색, 점선 격자 가이드, 광폭 헤비 제목, 검은 반전 섹션(`.inverse`)이 핵심입니다. 반전 영역은 CSS 변수를 지역적으로 덮어써서 자식 컴포넌트가 그대로 따라옵니다.
- **테마**: `<html class="dark">` 기준입니다. `<head>`의 인라인 스크립트가 첫 페인트 전에 테마를 적용해 깜빡임을 막습니다.
- **에러·로딩 경계**: 각 섹션은 `SectionBoundary`(ErrorBoundary)로 격리됩니다. `fallback`을 넘기면 Suspense가 적용됩니다. Suspense 경계의 내용은 스트리밍 방식으로 HTML에 들어가므로, SEO가 중요한 본문에는 쓰지 않았습니다.
- **접근성**: 본문 바로가기, 전 요소 키보드 접근, 가시적 포커스 링, `prefers-reduced-motion` 대응, WCAG AA 대비를 지킵니다.
- **주석 규칙**: 컴포넌트·타입·함수에는 `@alias`(한국어 이름)와 `@description`(설명)을 JSDoc으로 답니다.
