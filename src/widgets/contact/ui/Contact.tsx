import type { Profile } from '@/entities/profile'
import { CtaBar, Section, SectionHeading } from '@/shared/ui'

/**
 * @alias 연락 섹션
 * @description 검은(반전) 배경에서 이메일과 GitHub로 이어지는 큰 링크 행을 보여주는 마지막 행동 유도 영역.
 */
export function Contact({ profile }: { profile: Profile }) {
  return (
    <div className="inverse relative isolate">
      <Section id="contact">
        <SectionHeading
          sectionId="contact"
          index={5}
          label="Contact"
          title="Let's talk"
          description="채용이나 협업 제안은 이메일로 보내주세요."
        />
        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          <CtaBar href={`mailto:${profile.email}`} hint="이메일">
            {profile.email}
          </CtaBar>
          <CtaBar href={profile.github} hint="GitHub">
            github.com/qorbaxk
          </CtaBar>
        </div>
      </Section>
    </div>
  )
}
