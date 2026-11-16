import Image from 'next/image'
import Link from 'next/link'
import type { Profile } from '@/entities/profile'
import { ProjectCover, type FeaturedMetric, type Project } from '@/entities/project'
import { Container, CtaBar, GuideBand } from '@/shared/ui'

/**
 * @alias 히어로 속성
 * @description 히어로 영역이 받는 데이터.
 */
export interface HeroProps {
  profile: Profile
  metrics: readonly FeaturedMetric[]
  projects: readonly Project[]
}

/**
 * @alias 히어로
 * @description 첫 화면. 좌측에 소개, 우측에 대표 프로젝트와 연락 바, 아래에 풀폭 워드마크와 수치 카드를 둔다. LCP 요소인 텍스트에는 애니메이션을 걸지 않아 즉시 페인트된다.
 */
export function Hero({ profile, metrics, projects }: HeroProps) {
  const featured = projects.filter((project) => project.cover).slice(0, 2)
  const stats = [{ label: '대표 프로젝트', value: String(projects.length) }, ...metrics.slice(0, 3)]

  return (
    <section id="top" aria-labelledby="hero-heading" className="scroll-mt-16">
      {/* 윗부분과 워드마크: 양끝 + 가운데 3줄 (레퍼런스와 동일) */}
      <GuideBand guides="halves">
      <Container className="grid gap-y-12 pt-10 pb-4 lg:grid-cols-2 lg:gap-x-5 lg:pt-14">
        <div>
          <div className="flex gap-5">
            <div className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-md border border-line bg-surface sm:w-30">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                sizes="120px"
                preload
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-between py-0.5">
              <p className="flex items-center gap-2 text-sm text-ink-muted">
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-ink" />
                {profile.availability}
              </p>
              <h1 id="hero-heading">
                <span className="block font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{profile.name}</span>
                <span className="mt-0.5 block text-ink-muted">{profile.role}</span>
              </h1>
            </div>
          </div>

          <p className="mt-10 max-w-xl text-[clamp(1.375rem,2.3vw,1.875rem)] leading-snug font-medium text-pretty text-ink-muted">
            {profile.statement}
          </p>

          <ul className="mt-10 space-y-1 text-lg text-ink">
            <li>
              <a href={`mailto:${profile.email}`} className="cursor-pointer underline-offset-4 hover:underline">
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer underline-offset-4 hover:underline"
              >
                github.com/qorbaxk<span className="sr-only"> (새 창에서 열림)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-10">
          <div className="grid items-start gap-6 min-[460px]:grid-cols-[1fr_auto]">
            <div>
              <p className="label">
                <span aria-hidden="true" className="mr-2 text-ink-soft">
                  {'//'}
                </span>
                Featured projects
              </p>
              <p className="mt-12 hidden text-lg leading-snug text-ink-muted sm:block">
                문제의 원인을 끝까지 따라간
                <br />
                프로젝트 기록입니다.
              </p>
            </div>
            <ul aria-label="대표 프로젝트 바로가기" className="flex gap-3 min-[460px]:justify-end">
              {featured.map((project) => (
                <li key={project.slug} className="w-[calc(50%-0.375rem)] min-[460px]:w-28 sm:w-36">
                  <Link
                    href={`/projects/${project.slug}`}
                    aria-label={`${project.title} 케이스 스터디 보기`}
                    className="group block cursor-pointer"
                  >
                    <ProjectCover
                      project={project}
                      sizes="(min-width: 640px) 144px, (min-width: 460px) 112px, 45vw"
                      preload
                      className="aspect-square"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <CtaBar href={`mailto:${profile.email}`} hint="채용·협업 제안은 이메일로 보내주세요">
            함께 일하기
          </CtaBar>
        </div>
      </Container>

      {/* 장식용 워드마크. 실제 제목은 위의 h1이다 */}
      <div aria-hidden="true" className="select-none">
        <Container>
          <p className="display-latin py-8 text-center text-[min(8.3vw,6.85rem)] leading-[0.85] whitespace-nowrap text-ink sm:py-12 lg:py-16">
            Seungyeon
          </p>
        </Container>
      </div>

      </GuideBand>

      {/* 통계 카드 행: 4칸을 나누는 5줄. 카드는 선에서 10px 안쪽에 놓이고 선은 카드 사이 틈의 중앙을 지난다 */}
      <GuideBand guides="quarters" className="border-t border-dashed border-guide">
      <Container className="py-14 sm:py-20">
        <dl className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex min-h-40 flex-col justify-between rounded-md bg-surface p-5 sm:min-h-48 sm:p-8">
              <dt className="label">{stat.label}</dt>
              <dd className="display text-[clamp(1.5rem,3.4vw,2.75rem)] normal-case">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-ink-muted">※ 셀핏 AI의 수치는 당시 운영·작업 경험 기준의 대략적인 값입니다.</p>
      </Container>
      </GuideBand>
    </section>
  )
}
