import './Quote.css'

const Quote = () => {
  return (
    <section className="quote-section">
      <div className="quote-container">
        <div className="quote-mark">"</div>
        <blockquote className="quote-text">
              The cloud is not just about technology, it's about transforming the way we work
        </blockquote>
        <cite className="quote-author">- Cloud Philosophy</cite>
      </div>
    </section>
  )
}

export default Quote
