import { useState, useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { personalInfo, certifications } from '../data/portfolio'
import { gsap } from '../lib/gsap'
import CredlyBadge from './CredlyBadge'
import './Hero.css'

const ROLES = [
  'Solutions Architect',
  'AWS Cloud Engineer',
  'DevOps Automation Engineer',
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [showScroll, setShowScroll] = useState(true)
  const containerRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2400)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY < 100)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.65 } })
        tl.from('.hero-name', { autoAlpha: 0, y: 28 })
          .from('.hero-role-line', { autoAlpha: 0, y: 28 }, '-=0.35')
          .from('.hero-desc', { autoAlpha: 0, y: 28 }, '-=0.35')
          .from('.hero-actions', { autoAlpha: 0, y: 28 }, '-=0.35')
          .from('.hero-photo-side', { autoAlpha: 0, y: 28 }, '-=0.35')
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          ['.hero-name', '.hero-role-line', '.hero-desc', '.hero-actions', '.hero-photo-side'],
          { autoAlpha: 1, y: 0 }
        )
      })
    },
    { scope: containerRef }
  )

  useGSAP(
    () => {
      const cta = ctaRef.current
      if (!cta) return undefined

      const mm = gsap.matchMedia()
      let xTo
      let yTo

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        xTo = gsap.quickTo(cta, 'x', { duration: 0.4, ease: 'power3.out' })
        yTo = gsap.quickTo(cta, 'y', { duration: 0.4, ease: 'power3.out' })

        const onMove = (e) => {
          const rect = cta.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2
          xTo(x * 0.25)
          yTo(y * 0.25)
        }

        const onLeave = () => {
          gsap.to(cta, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' })
        }

        cta.addEventListener('mousemove', onMove)
        cta.addEventListener('mouseleave', onLeave)

        return () => {
          cta.removeEventListener('mousemove', onMove)
          cta.removeEventListener('mouseleave', onLeave)
        }
      })

      return () => mm.revert()
    },
    { scope: ctaRef }
  )

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">{personalInfo.name}</h1>

          <div className="hero-role-line">
            <span className="hero-role-typed">{displayed}</span>
            <span className="hero-cursor">|</span>
          </div>

          <p className="hero-desc">{personalInfo.description}</p>

          <div className="hero-actions">
            <a ref={ctaRef} href="#contact" className="btn btn-primary hero-cta">
              Let's Connect
            </a>
            <a
              href={personalInfo.resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hero-resume-cta"
            >
              Download Resume
            </a>
            <a href="#projects" className="btn btn-ghost">
              View Work
            </a>
          </div>

          <div className="hero-company">
            <span className="company-at">@</span>
            <span className="company-name">Electromech Cloudtech Pvt. Ltd.</span>
          </div>
        </div>

        <div className="hero-photo-side">
          <div className="hero-photo-frame">
            <img src={personalInfo.photo} alt={personalInfo.name} />
          </div>

          <a
            href={certifications[0].credlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cert-card"
            aria-label={`${certifications[0].name} ${certifications[0].level}, verify on Credly`}
          >
            <CredlyBadge
              badgeImage={certifications[0].badgeImage}
              size={72}
              alt={certifications[0].name}
              linked={false}
            />
            <span className="hero-cert-copy">
              <span className="hero-cert-name">{certifications[0].name}</span>
              <span className="hero-cert-level">{certifications[0].level}</span>
              <span className="hero-cert-verify">Verify on Credly ↗</span>
            </span>
          </a>

          <div className="hero-status-pill">
            <span className="status-dot" />
            {personalInfo.tagline}
          </div>
        </div>
      </div>

      {showScroll && (
        <button
          className="scroll-hint"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      )}
    </section>
  )
}

export default Hero
