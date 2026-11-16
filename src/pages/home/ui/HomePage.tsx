import { getCareerHistory } from '@/entities/career'
import { getProfile } from '@/entities/profile'
import { getFeaturedMetrics, getProjects } from '@/entities/project'
import { getSkillGroups } from '@/entities/skill'
import { About } from '@/widgets/about'
import { Career } from '@/widgets/career'
import { Contact } from '@/widgets/contact'
import { Hero } from '@/widgets/hero'
import { ProjectShowcase } from '@/widgets/project-showcase'
import { SiteFooter } from '@/widgets/site-footer'
import { SiteHeader } from '@/widgets/site-header'
import { Skills } from '@/widgets/skills'
import { JsonLd, SectionBoundary } from '@/shared/ui'
import { buildPersonJsonLd } from '../lib/person-json-ld'

/**
 * @alias 홈 페이지
 * @description 히어로부터 연락처까지 이어지는 단일 페이지. 데이터는 서버에서 한 번에 받아 위젯에 내려주고, 각 섹션은 독립된 에러 경계로 감싸 한 곳의 실패가 전체로 번지지 않는다. 본문은 Suspense 없이 순수 HTML로 렌더링해 SEO와 첫 페인트를 지킨다.
 */
export async function HomePage() {
  const [profile, metrics, skillGroups, projects, careerHistory] = await Promise.all([
    getProfile(),
    getFeaturedMetrics(),
    getSkillGroups(),
    getProjects(),
    getCareerHistory(),
  ])

  return (
    <>
      <JsonLd data={buildPersonJsonLd(profile)} />
      <SiteHeader />
      <main id="main-content">
        <Hero profile={profile} metrics={metrics} projects={projects} />
        <SectionBoundary id="about" label="소개">
          <About about={profile.about} />
        </SectionBoundary>
        <SectionBoundary id="skills" label="기술 스택">
          <Skills groups={skillGroups} />
        </SectionBoundary>
        <SectionBoundary id="projects" label="프로젝트">
          <ProjectShowcase projects={projects} />
        </SectionBoundary>
        <SectionBoundary id="career" label="경력">
          <Career history={careerHistory} />
        </SectionBoundary>
        <SectionBoundary id="contact" label="연락처">
          <Contact profile={profile} />
        </SectionBoundary>
      </main>
      <SiteFooter />
    </>
  )
}
