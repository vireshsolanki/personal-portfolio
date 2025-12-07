import { about } from '../data/portfolio'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">
          <span className="title-hash">#</span>about-me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Hello, I'm {about.personalInfo?.name || 'Viresh'}!
            </p>
            <p className="about-paragraph">
              {about.lead}
            </p>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="about-image">
            <img src="/photo.jpeg" alt="About" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
