/**
 * @alias 본문 바로가기 링크
 * @description 키보드 사용자가 반복되는 헤더를 건너뛰고 본문으로 이동하게 한다. 평소에는 숨겨져 있다가 포커스를 받으면 나타난다.
 */
export function SkipLink({ targetId = 'main-content' }: { targetId?: string }) {
  return (
    <a
      href={`#${targetId}`}
      className="fixed top-3 left-3 z-50 -translate-y-20 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast transition-transform duration-200 focus:translate-y-0"
    >
      본문 바로가기
    </a>
  )
}
