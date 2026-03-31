import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from 'lucide-react';
import ScrambleText from '../../UI/ScrambleText';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section section" id="contact">
      <div className="container contact-info-only">
        
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="badge-pill" style={{ marginBottom: '2rem', display: 'inline-block' }}>Get in Touch</div>
          
          <div className="heading-font contact-title" style={{ textTransform: 'uppercase', display: 'flex', flexDirection: 'column' }}>
            <div>
              <ScrambleText text="LET'S " as="span" />
              <ScrambleText text="BUILD" as="span" className="text-accent" style={{ fontWeight: 900 }} />
            </div>
            <ScrambleText text="SOMETHING" as="div" />
            <ScrambleText text="AMAZING" as="div" className="text-accent" style={{ fontWeight: 900 }} />
          </div>
          
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

      </div>
    </section>
  );
};

export default Contact;
