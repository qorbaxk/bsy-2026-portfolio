/**
 * @alias 내비게이션 항목
 * @description 페이지 내 섹션 앵커로 이동하는 메뉴 항목. id는 대상 요소의 DOM id와 같다.
 */
export interface NavItem {
  /** 이동할 섹션의 DOM id */
  id: string
  /** 화면에 표시할 이름 */
  label: string
}
