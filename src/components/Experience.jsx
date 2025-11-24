import { experience } from '../data/portfolio'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
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
