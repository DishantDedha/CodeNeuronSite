import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.name} — production-grade web, mobile and AI software`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Shared social card for every route (link previews on LinkedIn, X, Slack, WhatsApp, etc.)
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0A0A0A',
          backgroundImage:
            'radial-gradient(circle at 85% 30%, rgba(79,70,229,0.28) 0%, rgba(10,10,10,0) 55%)',
          color: '#F8FAFC',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 80 80">
            <path d="M 28 20 L 14 40 L 28 60" stroke="#4F46E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 52 20 L 66 40 L 52 60" stroke="#4F46E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="40" cy="40" r="5.5" fill="#4F46E5" />
          </svg>
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em' }}>codeneuron</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.04em' }}>
            Software built by people
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.04em' }}>
            who give a damn.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: '#94A3B8' }}>
            Web · Mobile · AI · Backend & APIs
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
