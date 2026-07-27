import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { stats } from '../data/portfolio'
import { createCountUpTween } from '../utils/countUp'
import './Impact.css'

const Impact = () => {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.impact-stat', {
          autoAlpha: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            once: true,
          },
        })

        sectionRef.current?.querySelectorAll('.impact-value').forEach((el) => {
          const raw = el.dataset.value
          ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            once: true,
            onEnter: () => createCountUpTween(gsap, el, raw),
          })
        })
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        sectionRef.current?.querySelectorAll('.impact-value').forEach((el) => {
          el.textContent = el.dataset.value
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className="impact" ref={sectionRef} aria-label="Impact metrics">
      <div className="impact-inner">
        {stats.map((stat) => (
          <div key={stat.label} className="impact-stat">
            <span className="impact-value" data-value={stat.value}>
              {stat.value}
            </span>
            <span className="impact-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Impact
