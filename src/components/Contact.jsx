import { personalInfo } from '../data/portfolio'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-description">
            Open to a brief call to exchange ideas on cloud architecture and DevOps, reach out and we can find a time that works.
          </p>
          <div className="contact-box">
            <h3 className="contact-box-title">Message me here</h3>
            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                {personalInfo.email}
              </a>
              {personalInfo.phone && (
                <a href={`tel:${personalInfo.phone}`} className="contact-link">
                  {personalInfo.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
