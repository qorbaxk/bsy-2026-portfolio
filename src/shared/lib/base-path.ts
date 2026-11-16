/**
 * @alias 배포 기본 경로
 * @description 저장소 이름 경로로 서비스되는 GitHub Pages(예: /bsy-2026-portfolio)에서만 값이 있고, 그 밖의 환경에서는 빈 문자열이다. 빌드 시점에 NEXT_PUBLIC_BASE_PATH 값으로 고정된다.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/**
 * @alias 기본 경로 붙이기
 * @description public 폴더의 정적 자산 경로(/images/...) 앞에 배포 기본 경로를 붙인다. 이미지 최적화를 끈 정적 내보내기에서는 next/image와 video가 기본 경로를 붙이지 않기 때문에 직접 붙여야 한다. 기본 경로가 없으면 그대로 돌려준다.
 */
export function withBasePath(path: string): string {
  return path.startsWith('/') ? `${BASE_PATH}${path}` : path
}
