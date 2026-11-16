/** 테마 저장 키(localStorage). */
export const THEME_STORAGE_KEY = 'theme'

/** 테마 변경을 구독자에게 알리는 커스텀 이벤트 이름. */
export const THEME_CHANGE_EVENT = 'themechange'

/**
 * @alias 테마
 * @description 화면 색상 모드. html 요소의 dark 클래스 유무로 표현된다.
 */
export type Theme = 'light' | 'dark'
