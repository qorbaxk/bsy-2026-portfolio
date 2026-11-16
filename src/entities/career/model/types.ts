/**
 * @alias 경력
 * @description 재직한 회사 한 곳의 경력 정보.
 */
export interface Experience {
  company: string
  role: string
  /** 입사 연월 ("YYYY-MM") */
  startedAt: string
  /** 퇴사 연월 ("YYYY-MM"). 비어 있으면 현재 재직 중이며, 기간은 오늘 날짜로 계산된다 */
  endedAt?: string
  bullets: readonly string[]
}

/**
 * @alias 학력
 * @description 학교, 전공, 기간, 졸업 상태.
 */
export interface Education {
  school: string
  major: string
  period: string
  status: string
}

/**
 * @alias 자격증
 * @description 자격증 이름과 취득 연월.
 */
export interface Certification {
  name: string
  acquiredAt: string
}

/**
 * @alias 경력 이력 묶음
 * @description 경력, 학력, 자격증을 한 번에 담는 조회 결과.
 */
export interface CareerHistory {
  experiences: readonly Experience[]
  education: readonly Education[]
  certifications: readonly Certification[]
}
