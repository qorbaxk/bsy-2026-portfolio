import { SiteFooter } from '@/widgets/site-footer'
import { SiteHeader } from '@/widgets/site-header'
import { ButtonLink, Container } from '@/shared/ui'

/**
 * @alias 404 페이지
 * @description 존재하지 않는 주소로 들어왔을 때 홈으로 돌아가는 길을 안내한다.
 */
export function NotFoundPage() {
  return (
    <>
      <SiteHeader sectionBasePath="/" />
      <main id="main-content">
        <Container className="py-32">
          <p className="label">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">페이지를 찾을 수 없어요</h1>
          <p className="mt-4 text-lg text-ink-muted">주소가 바뀌었거나 존재하지 않는 페이지예요.</p>
          <ButtonLink href="/" className="mt-8">
            홈으로 돌아가기
          </ButtonLink>
        </Container>
      </main>
      <SiteFooter />
    </>
  )
}
