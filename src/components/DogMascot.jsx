import { useState, useEffect } from 'react'
import './DogMascot.css'

const CALENDLY_URL = 'https://calendly.com/vireshsolanki58/30min'

/* ─────────────────────────────────────────────────────────────────────────────
   Docker / Shipping-container character
   Front-facing, 52×50 viewBox → rendered at 44×42px inside the navbar.
   Blue container body, orange hazmat stripe, porthole eyes, antenna, wheels.
───────────────────────────────────────────────────────────────────────────── */
const ContainerSVG = ({ happy }) => (
  <svg
    viewBox="0 0 52 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="devbot-svg"
    aria-hidden="true"
  >
    {/* ── Antenna ── */}
    <g className="bot-antenna">
      <rect x="23.5" y="1" width="3" height="7" rx="1.5" fill="#ABB2BF" />
      <circle cx="25" cy="1" r="4.5" fill={happy ? '#50FA7B' : '#EEEEEE'} />
      <circle cx="25" cy="1" r="8"   fill={happy ? '#50FA7B' : '#EEEEEE'} opacity="0.15" />
    </g>

    {/* ── Main container body (Docker blue) ── */}
    <rect x="3" y="8" width="46" height="27" rx="3" fill="#2496ED" />

    {/* Top cap / roof */}
    <rect x="3" y="8" width="46" height="5" rx="2" fill="#1D7DC8" />

    {/* ISO corner castings */}
    <rect x="3"  y="8"  width="5" height="5" rx="1" fill="#0D5FA0" />
    <rect x="44" y="8"  width="5" height="5" rx="1" fill="#0D5FA0" />
    <rect x="3"  y="30" width="5" height="5" rx="1" fill="#0D5FA0" />
    <rect x="44" y="30" width="5" height="5" rx="1" fill="#0D5FA0" />

    {/* Vertical corrugation ribs */}
    <line x1="13" y1="9"  x2="13" y2="34" stroke="#1A78CC" strokeWidth="1.2" />
    <line x1="21" y1="9"  x2="21" y2="34" stroke="#1A78CC" strokeWidth="1.2" />
    <line x1="31" y1="9"  x2="31" y2="34" stroke="#1A78CC" strokeWidth="1.2" />
    <line x1="39" y1="9"  x2="39" y2="34" stroke="#1A78CC" strokeWidth="1.2" />

    {/* ── Orange hazmat stripe (classic shipping container) ── */}
    <rect x="3" y="26" width="46" height="7" fill="#F97316" />
    {/* stripe dividers */}
    <line x1="13" y1="26" x2="13" y2="33" stroke="#D4620A" strokeWidth="1" />
    <line x1="21" y1="26" x2="21" y2="33" stroke="#D4620A" strokeWidth="1" />
    <line x1="31" y1="26" x2="31" y2="33" stroke="#D4620A" strokeWidth="1" />
    <line x1="39" y1="26" x2="39" y2="33" stroke="#D4620A" strokeWidth="1" />

    {/* ── Container door centre seam ── */}
    <line x1="26" y1="9" x2="26" y2="35" stroke="#0D5FA0" strokeWidth="0.7" opacity="0.6" />

    {/* ── Porthole eyes ── */}
    {/* Left eye */}
    <circle cx="16" cy="18" r="5.5" fill="#0A2540" />
    <circle cx="16" cy="18" r="4"   fill="#0D2B5E" />
    <circle cx="16" cy="18" r="2.4" fill="#50FA7B" opacity="0.9" />
    <circle cx="17.2" cy="16.8" r="1" fill="white" opacity="0.6" />
    {/* Left eye ring */}
    <circle cx="16" cy="18" r="5.5" fill="none" stroke="#1A78CC" strokeWidth="0.8" />

    {/* Right eye */}
    <circle cx="36" cy="18" r="5.5" fill="#0A2540" />
    <circle cx="36" cy="18" r="4"   fill="#0D2B5E" />
    <circle cx="36" cy="18" r="2.4" fill="#50FA7B" opacity="0.9" />
    <circle cx="37.2" cy="16.8" r="1" fill="white" opacity="0.6" />
    <circle cx="36" cy="18" r="5.5" fill="none" stroke="#1A78CC" strokeWidth="0.8" />

    {/* ── ID plate on stripe ── */}
    <rect x="19" y="27.5" width="14" height="4" rx="1" fill="#0A2540" opacity="0.7" />
    {/* "01" as two tiny rects */}
    <rect x="22" y="29" width="1.5" height="2" rx="0.4" fill="#C778DD" />
    <rect x="24.5" y="29" width="2.5" height="2" rx="0.4" fill="#C778DD" />
    <rect x="28" y="29" width="2.5" height="2" rx="0.4" fill="#C778DD" />

    {/* ── Status LED ── */}
    <circle cx="45" cy="12" r="2.5" fill={happy ? '#50FA7B' : '#EEEEEE'} className="bot-led" />

    {/* ── Bottom chassis ── */}
    <rect x="1" y="35" width="50" height="5" rx="2" fill="#0A2540" />

    {/* ── Wheels ── */}
    <circle cx="11" cy="44" r="5.5" fill="#111827" />
    <circle cx="11" cy="44" r="3.5" fill="#1F2937" />
    <circle cx="11" cy="44" r="1.5" fill="#111827" />
    <circle cx="11" cy="44" r="0.6" fill="#374151" />

    <circle cx="41" cy="44" r="5.5" fill="#111827" />
    <circle cx="41" cy="44" r="3.5" fill="#1F2937" />
    <circle cx="41" cy="44" r="1.5" fill="#111827" />
    <circle cx="41" cy="44" r="0.6" fill="#374151" />
  </svg>
)

/* ─────────────────────────────────────────────────────────────────────────────
   Static navbar widget — renders inside the navbar slot (left side).
   Managed as a fixed overlay positioned at the navbar's left.
───────────────────────────────────────────────────────────────────────────── */
const DogMascot = () => {
  const [open, setOpen] = useState(false)

  /* Close bubble on outside click */
  useEffect(() => {
    if (!open) return
    const close = (e) => {
      if (!e.target.closest('.devbot-slot')) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [open])

  return (
    <div className="devbot-slot" role="button" aria-label="DevBot — book a meeting" tabIndex={0}
      onClick={() => setOpen(o => !o)}
      onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
    >
      <ContainerSVG happy={open} />

      <span className="devbot-label">DEVBOT&#8209;01</span>

      {open && (
        <div className="devbot-bubble" onClick={e => e.stopPropagation()}>
          <p className="bubble-greeting">Container ready 🐳</p>
          <p className="bubble-cta">Let's ship a meeting!</p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bubble-btn"
          >
            Book 30 min →
          </a>
          <button
            className="bubble-close"
            onClick={e => { e.stopPropagation(); setOpen(false) }}
            aria-label="Close"
          >×</button>
        </div>
      )}
    </div>
  )
}

export default DogMascot
