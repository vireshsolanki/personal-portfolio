import { about, experience } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.css'

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const job = experience[0]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-inner">

        <h2 className={`about-heading ${isVisible ? 'animate-in' : ''}`}>
          <span className="title-hash">#</span>about-me
        </h2>

        <div className="about-body">

          {/* ── Left: bio ── */}
          <div className={`about-bio ${isVisible ? 'animate-in' : ''}`}>
            <p className="bio-intro">Hello, I'm Viresh.</p>
            <p className="bio-text">{about.lead}</p>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="bio-text">{p}</p>
            ))}
          </div>

          {/* ── Right: current role ── */}
          <div className={`about-role ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.18s' }}>
            <div className="role-live">
              <span className="live-dot" />
              <span className="live-label">Current Role</span>
            </div>

            <h3 className="role-title">{job.title}</h3>
            <p className="role-company">{job.company}</p>
            <p className="role-meta">{job.period} &nbsp;·&nbsp; {job.location}</p>

            <div className="role-divider" />

            <ul className="role-achievements">
              {job.achievements.map((item, i) => (
                <li key={i}>
                  <span className="role-bullet">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
