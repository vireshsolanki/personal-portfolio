import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skills, techStack } from '../data/portfolio'
import './Skills.css'

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.08)

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-inner">

        <h2 className={`skills-heading ${isVisible ? 'animate-in' : ''}`}>
          <span className="title-hash">#</span>skills
        </h2>

        {/* Tech stack strip */}
        <div className={`stack-strip ${isVisible ? 'animate-in' : ''}`}>
          <span className="stack-label">Stack</span>
          <div className="stack-tags">
            {techStack.map((t, i) => (
              <span key={i} className="stack-tag">{t.name}</span>
            ))}
          </div>
        </div>

        {/* Category rows */}
        <div className="skill-rows">
          {skills.map((cat, ci) => (
            <div
              key={ci}
              className={`skill-row ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${0.1 + ci * 0.08}s` }}
            >
              <span className="row-category">{cat.category}</span>
              <div className="row-items">
                {cat.items.map((item, ii) => (
                  <span key={ii} className="row-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
