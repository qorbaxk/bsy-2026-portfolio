import { THEME_STORAGE_KEY } from '../model/theme'

/**
 * @alias 테마 초기화 스크립트
 * @description 첫 페인트 전에 실행되어 저장된 테마(없으면 시스템 설정)를 html에 적용한다. 흰 화면 깜빡임(FOUC)과 CLS를 막는다.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`
