import { ImageResponse } from 'next/og'

export const alt = 'Baek Seungyeon | Frontend Developer Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** 공유 미리보기 이미지. 기본 폰트에는 한글 글리프가 없어 영문으로 구성한다. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0b0d12',
          color: '#e8eaf0',
        }}
      >
        <div style={{ fontSize: 28, color: '#9aa2ff', letterSpacing: 4 }}>PORTFOLIO 2026</div>
        <div style={{ marginTop: 24, fontSize: 96, fontWeight: 700 }}>Baek Seungyeon</div>
        <div style={{ marginTop: 16, fontSize: 40, color: '#9aa3b2' }}>Frontend Developer · React · TypeScript</div>
      </div>
    ),
    size,
  )
}
