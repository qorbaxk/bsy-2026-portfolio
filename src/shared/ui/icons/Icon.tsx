import type { ReactNode, SVGProps } from 'react'

/** 아이콘 이름 → SVG 경로 매핑 (Lucide, ISC License). 24x24 viewBox 기준. */
const ICON_PATHS = {
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </>
  ),
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  arrowRight: <path d="M5 12h14m-7-7 7 7-7 7" />,
  arrowLeft: <path d="M19 12H5m7 7-7-7 7-7" />,
  arrowUpRight: <path d="M7 7h10v10M7 17 17 7" />,
  arrowDown: <path d="M12 5v14m7-7-7 7-7-7" />,
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  alert: (
    <>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  play: <path d="M6 3l14 9-14 9V3z" />,
  pause: (
    <>
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="6" y="4" width="4" height="16" rx="1" />
    </>
  ),
} satisfies Record<string, ReactNode>

/** 사용 가능한 아이콘 이름. */
export type IconName = keyof typeof ICON_PATHS

/**
 * @alias 아이콘 속성
 * @description Icon 컴포넌트가 받는 속성. 접근성을 위해 기본은 장식용(aria-hidden)이다.
 */
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  /** 표시할 아이콘 이름 */
  name: IconName
  /** 한 변 길이(px). 기본 20 */
  size?: number
}

/**
 * @alias 아이콘
 * @description 이름으로 SVG 아이콘을 렌더링한다. 모든 아이콘이 같은 viewBox·선 두께를 공유한다.
 */
export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {ICON_PATHS[name]}
    </svg>
  )
}
