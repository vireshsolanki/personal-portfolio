import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { skills, techStack, certifications } from '../data/portfolio'
import { gsap } from '../lib/gsap'
import CredlyBadge from './CredlyBadge'
import './Skills.css'

const Skills = () => {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.skills-heading, .skills-marquee, .skill-row, .certs-row', {
          autoAlpha: 0,
          y: 16,
          duration: 0.5,
          stagger: 0.06,
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
            once: true,
          },
        })
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.skills-heading, .skills-marquee, .skill-row, .certs-row', {
          autoAlpha: 1,
          y: 0,
        })
      })
    },
    { scope: sectionRef }
  )

  const marqueeItems = [...techStack, ...techStack]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-inner">
        <h2 className="skills-heading">
          Skills
        </h2>

        <div className="skills-marquee" aria-hidden="true">
          <div className="marquee-track">
            {marqueeItems.map((item, index) => (
              <span key={`${item.name}-${index}`} className="marquee-item">
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-rows">
          {skills.map((cat) => (
            <div key={cat.category} className="skill-row">
              <span className="row-category">{cat.category}</span>
              <div className="row-items">
                {cat.items.map((item) => (
                  <span key={item} className="row-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certs-row">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-inline"
              aria-label={`${cert.name} ${cert.level}, verify on Credly`}
            >
              <CredlyBadge
                badgeImage={cert.badgeImage}
                size={56}
                alt={cert.name}
                linked={false}
              />
              <span className="cert-inline-copy">
                <span className="cert-inline-name">{cert.name}</span>
                <span className="cert-inline-level">{cert.level}</span>
                <span className="cert-inline-verify">Verify on Credly ↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
