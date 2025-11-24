import { about } from '../data/portfolio'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-lead">{about.lead}</p>
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-paragraph">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
