import type { SVGProps } from 'react'

/** 5x5 격자 위에서 화살표(▸) 모양을 이루는 점의 좌표. */
const DOTS: readonly (readonly [number, number])[] = [
  [0, 0], [0, 2], [0, 4],
  [1, 1], [1, 3],
  [2, 2],
]

/**
 * @alias 픽셀 화살표
 * @description 점으로 만든 오른쪽 화살표. CTA 바와 목록 행의 이동 표시로 쓰이며 장식용이라 스크린리더에서 숨겨진다.
 */
export function PixelArrow({ size = 20, ...props }: { size?: number } & Omit<SVGProps<SVGSVGElement>, 'children'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 5 5"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      shapeRendering="crispEdges"
      {...props}
    >
      {DOTS.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x + 0.1} y={y + 0.1} width="0.8" height="0.8" />
      ))}
    </svg>
  )
}
