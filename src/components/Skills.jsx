import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skills } from '../data/portfolio'
import './Skills.css'

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className={`skills-header ${isVisible ? 'animate-in' : ''}`}>
        <h2 className="section-title">
          <span className="title-hash">#</span>skills
        </h2>
      </div>
      <div className="skills-grid">
        {skills.map((category, catIndex) => (
          <div 
            key={catIndex} 
            className={`skill-category ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: `${catIndex * 0.1}s` }}
          >
            <h3 className="category-title">{category.category}</h3>
            <div className="category-skills">
              {category.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
