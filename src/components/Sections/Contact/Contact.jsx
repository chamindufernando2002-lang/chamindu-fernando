import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Instagram, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', projectType: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct the message body
    const textBody = `Name: ${formState.name}%0AEmail: ${formState.email}%0AProject Type: ${formState.projectType}%0A%0A${formState.message}`;
    
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/94769912948?text=${textBody}`;
    
    // Email mailto URL
    const mailtoUrl = `mailto:ashrachamindufernando@gmail.com?subject=New Portfolio Inquiry from ${formState.name}&body=${textBody}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Open default email client in the current window
    window.location.href = mailtoUrl;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', projectType: '', message: '' });
      
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
        
        {/* LEFT COLUMN: Info */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge-pill">Get in Touch</div>
          
          <h2 className="heading-font contact-title" style={{ textTransform: 'uppercase' }}>
            LET'S <span className="text-accent" style={{ fontWeight: 900 }}>BUILD</span><br/> SOMETHING<br/> <span className="text-accent" style={{ fontWeight: 900 }}>AMAZING</span>
          </h2>
          
          <p className="contact-desc">
            Ready to transform your digital presence? Let's discuss your project and bring your vision to life. We're just a message away.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
               <div className="detail-icon-box">
                 <Mail size={20} className="text-accent" />
               </div>
               <div className="detail-text-col">
                 <span className="detail-label">Email us</span>
                 <a href="mailto:ashrachamindufernando@gmail.com" className="detail-value cursor-hover font-bold">ashrachamindufernando@gmail.com</a>
               </div>
            </div>
            
            <div className="contact-detail-item">
               <div className="detail-icon-box">
                 <Phone size={20} className="text-accent" />
               </div>
               <div className="detail-text-col">
                 <span className="detail-label">Call us</span>
                 <a href="tel:+94769912948" className="detail-value cursor-hover font-bold">(+94) 76 991 2948</a>
               </div>
            </div>
            
            <div className="contact-detail-item">
               <div className="detail-icon-box">
                 <MapPin size={20} className="text-accent" />
               </div>
               <div className="detail-text-col">
                 <span className="detail-label">Location</span>
                 <span className="detail-value font-bold">Colombo, Sri Lanka</span>
               </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/chamindu-fernandez/" target="_blank" rel="noopener noreferrer" className="social-box cursor-hover" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/ludolabsco/" target="_blank" rel="noopener noreferrer" className="social-box cursor-hover" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.behance.net/chaminduashara" target="_blank" rel="noopener noreferrer" className="social-box cursor-hover" aria-label="Behance">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4h4c1.1 0 2 .9 2 2s-.9 2-2 2H6z" />
                <path d="M6 10h4.5c1.4 0 2.5 1.1 2.5 2.5S11.9 15 10.5 15H6z" />
                <path d="M6 4v11" />
                <path d="M15 13.5v-1c0-1.4 1.1-2.5 2.5-2.5S20 11.1 20 12.5v1h-5" />
                <path d="M15 13.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" />
                <path d="M16 7h3" />
              </svg>
            </a>
            <a href="https://github.com/ChaminduFernando" target="_blank" rel="noopener noreferrer" className="social-box cursor-hover" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Form with Neon Tracker */}
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Premium Glass Container */}
          <div className="glass-card contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label-top">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  required 
                  className="form-input"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label-top">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="john@company.com" 
                  required 
                  className="form-input"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectType" className="form-label-top">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType" 
                  required 
                  className="form-input form-select"
                  value={formState.projectType}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>Select project type</option>
                  <option value="branding">Brand Identity</option>
                  <option value="webdesign">Digital Design</option>
                  <option value="motion">Motion Graphics</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label-top">Tell Us About Your Project</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Describe your vision, goals, and timeline..." 
                  required 
                  className="form-input form-textarea"
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn cursor-hover ${isSubmitting ? 'submitting' : ''} ${isSubmitted ? 'submitted' : ''}`}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}</span>
                {!isSubmitting && !isSubmitted && <Send size={18} className="send-icon" />}
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
