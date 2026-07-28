import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                onClick={() => scrollToSection(item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-mobile-resume">
            <a
              href={personalInfo.resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            href={personalInfo.resume}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            Resume
          </a>
          <a onClick={() => scrollToSection('contact')} className="nav-cta">
            Let's Talk
          </a>
        </div>

        <div
          className={`mobile-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
