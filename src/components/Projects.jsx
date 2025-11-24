import { projects } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Projects.css'

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)
  
  return (
    <section id="projects" className="projects" ref={ref}>
      <div className={`projects-header ${isVisible ? 'animate-in' : ''}`}>
        <h2 className="section-title">Selected projects</h2>
        <p className="section-subtitle">
          Real-world cloud infrastructure and DevOps solutions I've built
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {project.featured && (
              <div className="featured-badge">Featured</div>
            )}
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-content">
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
