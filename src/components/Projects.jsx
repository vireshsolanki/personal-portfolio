import { useRef, useState, useMemo, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { projects, personalInfo } from '../data/portfolio'
import { gsap, ScrollTrigger } from '../lib/gsap'
import './Projects.css'

const FILTER_OPTIONS = [
  { key: 'all', label: 'All' },
  { key: 'product', label: 'Product' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'ai', label: 'AI / Agents' },
  { key: 'data', label: 'Data' },
  { key: 'security', label: 'Security' },
  { key: 'devops', label: 'DevOps' },
]

const Projects = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((p) => p.type === activeFilter)
  }, [activeFilter])

  useGSAP(
    () => {
      const header = headerRef.current
      const grid = gridRef.current
      if (!header || !grid) return

      const mm = gsap.matchMedia()
      const cards = gsap.utils.toArray('.project-card', grid)

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(header, {
          autoAlpha: 0,
          y: 20,
          duration: 0.5,
          immediateRender: false,
          scrollTrigger: {
            trigger: header,
            start: 'top 90%',
            once: true,
          },
        })

        gsap.from(cards, {
          autoAlpha: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.06,
          immediateRender: false,
          scrollTrigger: {
            trigger: grid,
            start: 'top 92%',
            once: true,
          },
        })
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([header, ...cards], { autoAlpha: 1, y: 0 })
      })

      return () => mm.revert()
    },
    { scope: sectionRef, dependencies: [filteredProjects.length] }
  )

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [filteredProjects.length])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-header" ref={headerRef}>
        <h2 className="section-title">Selected Work</h2>
        <a
          href={personalInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="view-all"
        >
          GitHub
        </a>
      </div>

      <div className="projects-filters">
        {FILTER_OPTIONS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className={`filter-pill ${activeFilter === key ? 'active' : ''}`}
            onClick={() => setActiveFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="projects-grid" ref={gridRef}>
        {filteredProjects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-content">
              <div className="project-meta">
                <span className="project-type-tag">{project.type}</span>
                {project.featured && <span className="featured-marker">Featured</span>}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <div className="project-actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View live
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
