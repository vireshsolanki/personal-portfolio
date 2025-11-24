import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'
import './Hero.css'

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(false)
      } else {
        setShowScroll(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-decorations">
        <div className="deco-icon deco-globe">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
        <div className="deco-icon deco-code">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <div className="deco-icon deco-git">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="18" cy="18" r="3"/>
            <circle cx="6" cy="6" r="3"/>
            <path d="M13 6h3a2 2 0 0 1 2 2v7"/>
            <line x1="6" y1="9" x2="6" y2="21"/>
          </svg>
        </div>
        <div className="deco-icon deco-box">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <div className="hero-image-glow"></div>
            <img src={personalInfo.photo} alt={personalInfo.name} />
          </div>
        </div>

        <h1 className="hero-title">
          <span className="hero-text-line">Viresh Solanki</span>
          <span className="hero-text-line">Hello, I'm a {personalInfo.title.toLowerCase()}</span>
          <span className="hero-text-line">based in <span className="text-underline">{personalInfo.location.split(',')[0]}</span>,</span>
          <span className="hero-text-line">specializing in</span>
          <span className="hero-text-line text-underline">cloud infrastructure</span>
        </h1>

        {showScroll && (
          <div className="scroll-indicator" onClick={scrollToNext}>
            <span>Scroll down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
