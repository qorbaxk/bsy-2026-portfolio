import type { SkillGroup } from '../model/types'

/** 이력서 기술 항목을 그대로 그룹화한 데이터. */
const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: 'core',
    title: '주력',
    description: 'React 기반 화면 설계와 상태·렌더링 개선, 공통 UI 구축을 맡습니다.',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    primary: true,
  },
  {
    id: 'frontend',
    title: '프론트엔드 실무',
    items: ['Next.js', 'TanStack Query', 'Zustand', 'Recoil', 'React Hook Form', 'Storybook', 'Vitest', 'Tailwind CSS', 'Styled Components'],
  },
  {
    id: 'server',
    title: '서버 · 데이터 구현',
    description: 'API·데이터 매칭·배치·재처리 로직을 직접 구현했습니다.',
    items: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'Python', 'FastAPI', 'TypeORM', 'MySQL', 'ClickHouse'],
  },
  {
    id: 'ops',
    title: '배포 · 협업 활용',
    items: ['AWS', 'GitHub Actions', 'Nexus', 'GitHub', 'Slack', 'Notion', 'Jira'],
  },
]

/**
 * @alias 기술 그룹 조회
 * @description 기술 스택 그룹 목록을 반환한다.
 */
export async function getSkillGroups(): Promise<readonly SkillGroup[]> {
  return SKILL_GROUPS
}
