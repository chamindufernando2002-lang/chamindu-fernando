import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', projectType: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Neon glow tracking ref
  const formRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    formRef.current.style.setProperty('--mouse-x', `${x}px`);
    formRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
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
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge-pill">Get in Touch</div>
          
          <h2 className="heading-font contact-title" style={{ textTransform: 'uppercase' }}>
            LET'S <span className="text-accent">BUILD</span><br/> SOMETHING<br/> <span className="text-accent">AMAZING</span>
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
            <a href="#" className="social-box cursor-hover" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" className="social-box cursor-hover" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="social-box cursor-hover" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" className="social-box cursor-hover" aria-label="GitHub"><Github size={20} /></a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Form with Neon Tracker */}
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Neon Border Container */}
          <div 
            className="neon-form-container" 
            ref={formRef} 
            onMouseMove={handleMouseMove}
          >
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
