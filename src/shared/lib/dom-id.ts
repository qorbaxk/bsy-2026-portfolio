/**
 * @alias 섹션 제목 ID 생성
 * @description 섹션 id로부터 aria-labelledby 연결용 제목 id를 만든다.
 */
export function getHeadingId(sectionId: string): string {
  return `${sectionId}-heading`
}
