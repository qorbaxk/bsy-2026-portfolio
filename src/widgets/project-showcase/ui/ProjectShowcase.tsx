import { ProjectCard, type Project } from '@/entities/project'
import { Section, SectionHeading } from '@/shared/ui'

/**
 * @alias 프로젝트 목록 섹션
 * @description 대표 프로젝트를 2열 타일로 보여준다. 각 카드는 케이스 스터디 상세 페이지로 연결된다.
 */
export function ProjectShowcase({ projects }: { projects: readonly Project[] }) {
  return (
    <Section id="projects" guides="halves">
      <SectionHeading
        sectionId="projects"
        index={3}
        label="Featured work"
        title="Projects highlights"
        description="결과물을 나열하는 대신, 각 프로젝트에서 무엇이 문제였고 어떤 선택을 했으며 무엇을 감수했는지 정리했습니다."
      />
      <ul className="mt-16 grid gap-x-5 gap-y-14 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
