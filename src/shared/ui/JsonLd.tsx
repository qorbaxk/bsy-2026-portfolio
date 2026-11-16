/**
 * @alias JSON-LD 구조화 데이터
 * @description 검색엔진용 구조화 데이터를 script 태그로 출력한다. "<" 문자를 이스케이프해 스크립트 주입을 막는다.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
