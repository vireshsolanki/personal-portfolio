import { clientStats } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Clients.css'

const Clients = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="clients" className="clients" ref={ref}>
      <div className="clients-inner">
        <div className={`clients-heading ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            <span className="title-hash">#</span>who-i-helped
          </h2>
        </div>

        <div className="clients-grid">
          <div className={`client-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            <div className="client-card-top">
              <span className="client-number">{clientStats.startups.count}</span>
              <span className="client-label">{clientStats.startups.label}</span>
            </div>
            <p className="client-summary">{clientStats.startups.headline}</p>
            <ul className="client-list">
              {clientStats.startups.highlights.map((item, i) => (
                <li key={i}><span className="list-marker">▸</span>{item}</li>
              ))}
            </ul>
            <div className="client-badge">Cloud Adoption & Scaling</div>
          </div>

          <div className={`client-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="client-card-top">
              <span className="client-number">{clientStats.enterprise.count}</span>
              <span className="client-label">{clientStats.enterprise.label}</span>
            </div>
            <p className="client-summary">{clientStats.enterprise.headline}</p>
            <ul className="client-list">
              {clientStats.enterprise.highlights.map((item, i) => (
                <li key={i}><span className="list-marker">▸</span>{item}</li>
              ))}
            </ul>
            <div className="client-badge">Security & Modernization</div>
          </div>

          <div className={`client-card client-card-wide ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="client-card-top">
              <span className="client-number">10+</span>
              <span className="client-label">Total Clients</span>
            </div>
            <p className="client-summary">Every project built with production-grade standards</p>
            <div className="client-pillars">
              <div className="pillar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Secure by design</span>
              </div>
              <div className="pillar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                <span>Built to scale</span>
              </div>
              <div className="pillar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Always-on reliability</span>
              </div>
              <div className="pillar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <span>Full IaC coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
