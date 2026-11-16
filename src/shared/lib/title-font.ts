/** 영문 글자와 기본 문장부호만으로 이루어진 문자열(숫자·한글 제외). */
const LATIN_LETTERS_ONLY = /^[A-Za-z\s&'’()·.,:\-/]+$/

/**
 * @alias 제목 서체 클래스 선택
 * @description 영문 글자만 있는 제목은 Syne(font-latin), 한글이나 숫자가 섞인 제목은 Paperlogy(font-display)를 고른다. 두 서체를 한 제목 안에서 섞지 않고 제목 단위로 통일한다.
 * @param text 제목 문자열
 * @returns 적용할 Tailwind 서체 클래스
 */
export function getTitleFontClass(text: string): 'font-latin' | 'font-display' {
  return LATIN_LETTERS_ONLY.test(text) ? 'font-latin' : 'font-display'
}
