import { useState } from 'react'
import { personalInfo } from '../data/portfolio'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Create mailto link with form data
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    // Open default email client
    window.location.href = mailtoLink
    
    // Show success message
    alert('Opening your email client... Please send the email to complete your message.')
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setErrors({})
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title"><span className="title-hash">#</span>contacts</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm interested in freelance opportunities for AWS Cloud & DevOps projects. However, if you have other requests or questions, don't hesitate to contact me.
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
