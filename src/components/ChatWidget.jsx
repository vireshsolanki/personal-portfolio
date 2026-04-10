import { useState, useEffect, useRef } from 'react'
import './ChatWidget.css'

const CALENDLY_URL = 'https://calendly.com/vireshsolanki58/30min'

const ChatWidget = () => {
  const [open, setOpen] = useState(false)
  const widgetRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div className="chat-widget" ref={widgetRef}>
      {open && (
        <div className="chat-card" role="dialog" aria-label="Book a call">
          <div className="chat-card-header">
            <div className="chat-avatar">
              <span>VS</span>
              <span className="chat-avatar-dot" />
            </div>
            <div className="chat-header-info">
              <span className="chat-name">Viresh Solanki</span>
              <span className="chat-role">Solutions Architect</span>
            </div>
            <button
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="chat-body">
            <div className="chat-bubble">
              <p>Hey there 👋</p>
              <p>Need help with your AWS infrastructure, cloud architecture, or startup cloud setup?</p>
              <p>Book a free 30-min call — let's figure out what you need.</p>
            </div>
          </div>

          <div className="chat-footer">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-cta"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a 30-min call
            </a>
          </div>
        </div>
      )}

      <button
        className={`chat-toggle ${open ? 'chat-toggle--open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with Viresh"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default ChatWidget
