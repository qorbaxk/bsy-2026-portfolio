/**
 * @alias 기술 그룹
 * @description 성격이 비슷한 기술 스택 묶음.
 */
export interface SkillGroup {
  id: string
  title: string
  description?: string
  items: readonly string[]
  /** 주력 그룹 여부. 시각적으로 강조된다 */
  primary?: boolean
}
