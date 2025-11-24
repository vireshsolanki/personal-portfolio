import { reviews } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Reviews.css'

const Reviews = () => {
  const [ref, isVisible] = useScrollAnimation(0.1)
  
  return (
    <section id="reviews" className="reviews" ref={ref}>
      <div className={`reviews-header ${isVisible ? 'animate-in' : ''}`}>
        <h2 className="section-title">Customer testimonials</h2>
        <p className="section-subtitle">
          What clients say about working with me
        </p>
      </div>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div 
            key={index} 
            className={`review-card ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="review-header">
              <div className="reviewer-avatar">{review.avatar}</div>
              <div className="reviewer-info">
                <h4 className="reviewer-name">{review.name}</h4>
                <p className="reviewer-role">{review.role}</p>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
            <div className="review-rating">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
