import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'
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

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to consulting engagements
          </div>

          <h1 className="hero-name">{personalInfo.name}</h1>

          <div className="hero-role-line">
            <span className="hero-role-typed">{displayed}</span>
            <span className="hero-cursor">|</span>
          </div>

          <p className="hero-desc">{personalInfo.description}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Let's Connect</a>
            <a href="#projects" className="btn btn-ghost">View Work</a>
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
