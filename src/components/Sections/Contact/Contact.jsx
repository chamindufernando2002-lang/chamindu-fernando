import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="container contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-font contact-title">
            Let's create something <span className="text-accent">amazing</span> together.
          </h2>
          <p className="contact-desc">
            Available for new opportunities and freelance projects. 
            Drop a message and I'll get back to you within 24 hours.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="detail-label">Email</span>
              <a href="mailto:ashrachamindufernando@gmail.com" className="heading-font detail-value cursor-hover">ashrachamindufernando@gmail.com</a>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">Location</span>
              <span className="heading-font detail-value">Kalutara, Sri Lanka</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="form-input"
                value={formState.name}
                onChange={handleChange}
              />
              <label htmlFor="name" className="form-label">Name</label>
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                className="form-input"
                value={formState.email}
                onChange={handleChange}
              />
              <label htmlFor="email" className="form-label">Email</label>
            </div>
            
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tell me about your project" 
                required 
                className="form-input form-textarea"
                rows="4"
                value={formState.message}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="message" className="form-label">Message</label>
            </div>

            <button 
              type="submit" 
              className={`submit-btn cursor-hover ${isSubmitting ? 'submitting' : ''} ${isSubmitted ? 'submitted' : ''}`}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}</span>
              {!isSubmitting && !isSubmitted && <ArrowRight size={20} />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
