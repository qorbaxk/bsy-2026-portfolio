import type { ProjectBackground } from '../model/types'
import { FlowDiagram } from './FlowDiagram'

/**
 * @alias 프로젝트 배경 패널
 * @description 서비스 목적, 참여 주체(선택), 데이터 흐름, 내 역할 범위를 한 블록으로 보여준다. 도메인을 모르는 독자가 이후 내용을 이해하기 위한 전제 설명이다.
 */
export function BackgroundPanel({ background }: { background: ProjectBackground }) {
  const { about, parties, flow, role } = background

  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-6">
      <h3 className="label">프로젝트 배경</h3>
      <p className="mt-3 leading-relaxed text-pretty text-ink">{about}</p>

      {parties ? (
        <dl className="mt-6 grid gap-5 sm:grid-cols-3">
          {parties.map((party) => (
            <div key={party.title}>
              <dt className="font-semibold text-ink">{party.title}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-muted">{party.description}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="mt-6">
        <FlowDiagram nodes={flow} />
      </div>

      <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-ink-muted">
        <span className="mb-1 block label">내 역할</span>
        {role}
      </p>
    </div>
  )
}
