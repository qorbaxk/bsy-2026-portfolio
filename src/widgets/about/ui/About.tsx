import type { AboutStatement } from '@/entities/profile'
import { Container, CtaBar, GuideColumns } from '@/shared/ui'
import { getHeadingId } from '@/shared/lib/dom-id'

/**
 * @alias 소개 섹션
 * @description 이력서의 소개 문장을 큰 글씨로 보여준다. 앞 문장은 진하게, 뒤 문장은 흐리게 이어 읽는 순서에 강약을 준다.
 */
export function About({ about }: { about: AboutStatement }) {
  return (
    <section id="about" aria-labelledby={getHeadingId('about')} className="relative isolate scroll-mt-16 border-t border-dashed border-guide py-20 sm:py-28 lg:py-32">
      <GuideColumns variant="edges" />
      <Container>
        <p className="label text-center">
          <span aria-hidden="true" className="mr-2 text-ink-soft">
            {'//'}
          </span>
          <span className="mr-2">1</span>
          About me
        </p>

        <h2
          id={getHeadingId('about')}
          className="mx-auto mt-12 max-w-5xl text-center text-[clamp(1.75rem,4.4vw,3.5rem)] leading-[1.25] font-bold tracking-tight text-balance"
        >
          <span className="text-ink">{about.lead}</span> <span className="text-ink-soft">{about.body}</span>
        </h2>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <CtaBar href="#career" hint="어떤 회사에서 어떤 일을 했는지">
          경력 보기
        </CtaBar>
      </Container>
    </section>
  )
}
