import { experience } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Experience.css'

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className={`experience-header ${isVisible ? 'animate-in' : ''}`}>
        <h2 className="experience-heading">
          <span className="title-hash">#</span>experience
        </h2>
      </div>
      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <div
            key={index}
            className={`experience-item ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="exp-date">{exp.period}</div>
              <h3 className="exp-title">{exp.title}</h3>
              <h4 className="exp-company">{exp.company}</h4>
              <p className="exp-description">{exp.description}</p>
              {exp.achievements && (
                <ul className="exp-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
