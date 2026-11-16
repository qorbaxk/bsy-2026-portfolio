import type { NavItem } from '../types/navigation'

/**
 * @alias 홈 섹션 내비게이션 목록
 * @description 헤더와 모바일 메뉴에서 공통으로 사용하는 홈 화면 섹션 앵커 목록.
 */
export const HOME_NAV_ITEMS: readonly NavItem[] = [
  { id: 'about', label: '소개' },
  { id: 'skills', label: '기술' },
  { id: 'projects', label: '프로젝트' },
  { id: 'career', label: '경력' },
  { id: 'contact', label: '연락' },
]
