/** "YYYY-MM" 형식의 연월 문자열. */
export type YearMonth = string

/**
 * @alias 현재 연월 조회
 * @description 한국 시간(Asia/Seoul) 기준의 현재 연월을 "YYYY-MM"으로 반환한다. 서버가 UTC여도 월 경계에서 하루 어긋나지 않는다.
 * @param now 기준 시각. 테스트에서 고정값을 넘길 수 있다
 */
export function getCurrentYearMonth(now: Date = new Date()): YearMonth {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit' }).formatToParts(now)
  const year = parts.find((part) => part.type === 'year')?.value
  const month = parts.find((part) => part.type === 'month')?.value
  return `${year}-${month}`
}

/** "YYYY-MM"을 연·월 숫자로 나눈다. */
function parseYearMonth(value: YearMonth): { year: number; month: number } {
  const [year, month] = value.split('-').map(Number)
  return { year: year ?? 0, month: month ?? 0 }
}

/**
 * @alias 재직 개월 수 계산
 * @description 시작월과 종료월을 모두 포함해 개월 수를 센다(이력서의 2025.05~2026.11 = 19개월 = 1년 7개월 방식).
 */
export function countMonthsInclusive(start: YearMonth, end: YearMonth): number {
  const from = parseYearMonth(start)
  const to = parseYearMonth(end)
  return (to.year - from.year) * 12 + (to.month - from.month) + 1
}

/**
 * @alias 개월 수 표기
 * @description 개월 수를 "1년 7개월", "7개월", "2년"처럼 읽기 쉬운 문구로 바꾼다.
 */
export function formatMonths(months: number): string {
  const years = Math.floor(months / 12)
  const rest = months % 12
  if (years === 0) return `${rest}개월`
  return rest === 0 ? `${years}년` : `${years}년 ${rest}개월`
}

/**
 * @alias 근무 기간 표기
 * @description "2025.05 - 현재", "2023.06 - 2025.03"처럼 시작과 끝을 보여준다. 종료월이 없으면 현재 재직 중이다.
 */
export function formatPeriod(start: YearMonth, end?: YearMonth): string {
  const dotted = (value: YearMonth) => value.replace('-', '.')
  return `${dotted(start)} - ${end ? dotted(end) : '현재'}`
}

/**
 * @alias 근속 기간 표기
 * @description 퇴사한 회사는 총 근속 기간을, 재직 중인 회사는 "1년 7개월 · 2026.11 기준"처럼 오늘까지의 기간과 기준월을 반환한다.
 * @param now 기준 시각. 테스트에서 고정값을 넘길 수 있다
 */
export function formatTenure(start: YearMonth, end?: YearMonth, now: Date = new Date()): string {
  if (end) return formatMonths(countMonthsInclusive(start, end))
  const current = getCurrentYearMonth(now)
  return `${formatMonths(countMonthsInclusive(start, current))} · ${current.replace('-', '.')} 기준`
}
