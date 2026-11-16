/**
 * @alias 소개 문장
 * @description 소개 섹션의 큰 문장. lead는 진하게, body는 흐리게 이어 붙여 읽는 순서에 강약을 준다.
 */
export interface AboutStatement {
  lead: string
  body: string
}

/**
 * @alias 프로필
 * @description 히어로·소개·연락 섹션이 공유하는 개인 정보.
 */
export interface Profile {
  name: string
  nameEn: string
  /** 직무명 */
  role: string
  /** 직무 보충 설명 (예: 프론트엔드 중심 풀스택) */
  roleDetail: string
  /** 히어로에 크게 보여주는 한 문장 */
  statement: string
  about: AboutStatement
  /** 히어로에 보여줄 3:4 세로형 프로필 사진(어깨까지 포함) */
  photo: { src: string; alt: string }
  email: string
  github: string
  /** 구직 상태 문구. 히어로의 상태 표시에 쓰인다 */
  availability: string
  /** 근무했던 회사 이름 목록 */
  companies: readonly string[]
}
