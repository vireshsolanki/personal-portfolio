import { projects, personalInfo } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Projects.css'

const typeLabel = {
  product:      'product',
  architecture: 'arch',
  security:     'security',
  devops:       'devops',
}

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className={`projects-header ${isVisible ? 'animate-in' : ''}`}>
        <h2 className="section-title">
          <span className="title-hash">#</span>projects
        </h2>
        <a
          href={personalInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="view-all"
        >
          view all on github
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${isVisible ? 'animate-in' : ''}`}
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            {/* Terminal chrome bar */}
            <div className="card-chrome">
              <div className="chrome-dots">
                <span className="chrome-dot" />
                <span className="chrome-dot" />
                <span className="chrome-dot" />
              </div>
              <span className="chrome-filename">
                {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/-$/, '')}.tf
              </span>
              <span className="chrome-type">{typeLabel[project.type] ?? project.type}</span>
            </div>

            {/* Image with hover overlay */}
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-overlay">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn overlay-btn-primary"
                  >
                    LIVE ↗
                  </a>
                )}
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn overlay-btn-ghost"
                >
                  CODE
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="project-content">
              <div className="project-meta">
                <span className="project-type-tag">{typeLabel[project.type] ?? project.type}</span>
                {project.featured && <span className="featured-marker">featured</span>}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
