import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useGSAP } from '@gsap/react'
import { personalInfo } from '../data/portfolio'
import { gsap } from '../lib/gsap'
import './ResumeButton.css'

const { resume } = personalInfo

// A nav button that opens the resume as an instant preview modal, no
// scrolling to a dedicated section. Pages are pre-rendered images (see
// personalInfo.resume in portfolio.js), so the modal has nothing to wait on.
const ResumeButton = ({ className = '', label = 'Resume' }) => {
  const overlayRef = useRef(null)
  const closeRef = useRef(null)
  const triggerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [preloaded, setPreloaded] = useState(false)

  const preload = useCallback(() => {
    if (preloaded) return
    setPreloaded(true)
    resume.pages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [preloaded])

  // Lock the page behind the modal without the scrollbar-width layout jump.
  useEffect(() => {
    if (!open) return undefined

    const { body, documentElement } = document
    const gap = window.innerWidth - documentElement.clientWidth
    const prevOverflow = body.style.overflow
    const prevPadding = body.style.paddingRight

    body.style.overflow = 'hidden'
    if (gap > 0) body.style.paddingRight = `${gap}px`

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPadding
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  // Move focus into the dialog, and back to the trigger when it closes.
  useEffect(() => {
    if (open) closeRef.current?.focus()
    else triggerRef.current?.focus({ preventScroll: true })
  }, [open])

  useGSAP(
    () => {
      if (!open || !overlayRef.current) return
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(overlayRef.current, { autoAlpha: 0, duration: 0.25 })
        gsap.from('.resume-dialog', { y: 18, scale: 0.985, duration: 0.35, ease: 'power3.out' })
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([overlayRef.current, '.resume-dialog'], { autoAlpha: 1, y: 0, scale: 1 })
      })
    },
    { dependencies: [open] }
  )

  return (
    <>
      <button
        type="button"
        className={`resume-trigger ${className}`}
        ref={triggerRef}
        onClick={() => setOpen(true)}
        onMouseEnter={preload}
        onFocus={preload}
        onTouchStart={preload}
      >
        {label}
      </button>

      {open && createPortal(
        <div
          className="resume-overlay"
          ref={overlayRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div className="resume-dialog" role="dialog" aria-modal="true" aria-label="Resume preview">
            <header className="resume-dialog-bar">
              <span className="resume-dialog-name">{resume.downloadName}</span>
              <div className="resume-dialog-actions">
                <a
                  href={resume.file}
                  download={resume.downloadName}
                  className="resume-chip resume-chip-solid"
                >
                  Download
                </a>
                <a
                  href={resume.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-chip"
                >
                  Open PDF
                </a>
                <button
                  type="button"
                  className="resume-close"
                  ref={closeRef}
                  onClick={() => setOpen(false)}
                  aria-label="Close resume preview"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </header>

            <div className="resume-pages">
              {resume.pages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Resume page ${i + 1} of ${resume.pages.length}`}
                  width="1275"
                  height="1650"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="resume-page"
                />
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default ResumeButton
