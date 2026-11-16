import { SITE } from '@/shared/config/site'
import type { Profile } from '../model/types'

/** 이력서 소개 문단을 기반으로 한 프로필 데이터. */
const PROFILE: Profile = {
  name: '백승연',
  nameEn: 'Baek Seungyeon',
  role: '프론트엔드 개발자',
  roleDetail: '프론트엔드 중심 풀스택 개발',
  statement: '기능이 한 번 작동하는 것과, 사람들이 스스로 계속 쓸 수 있는 것은 다른 문제입니다.',
  about: {
    lead: '화면 구현으로 마무리하지 않습니다.',
    body: '실제 사용에서 반복되는 불편과 작은 예외를 꼼꼼히 살피고, 원인이 데이터 처리나 운영 방식에 있다면 서버 로직과 운영 도구까지 직접 만들어 해결합니다. 맡은 기능이 안정적으로 쓰일 때까지 책임집니다.',
  },
  availability: '새로운 기회에 열려 있습니다',
  photo: { src: '/images/profile/seungyeon.webp', alt: '백승연 프로필 사진' },
  email: SITE.email,
  github: SITE.github,
  companies: ['커넥트웨이브', '넥스트이노베이션'],
}

/**
 * @alias 프로필 조회
 * @description 개인 프로필을 반환한다.
 */
export async function getProfile(): Promise<Profile> {
  return PROFILE
}
