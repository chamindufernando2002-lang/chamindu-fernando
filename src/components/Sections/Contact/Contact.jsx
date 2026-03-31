import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="contact-footer" id="contact">
      
      {/* ─── Top section: dark background ─────────────────── */}
      <div className="contact-top">
        <div className="container contact-top-inner">
          
          {/* LEFT: Heading + description */}
          <div className="contact-left">
            <span className="badge-pill">Get in Touch</span>
            <h2 className="heading-font contact-title">
              LET'S <span className="text-accent">BUILD</span><br />
              SOMETHING<br />
              <span className="text-accent">AMAZING</span>
            </h2>
            <p className="contact-desc">
              Ready to transform your digital presence? Let's discuss your project 
              and bring your vision to life.
            </p>
          </div>

          {/* RIGHT: Contact details */}
          <div className="contact-right">
            <div className="contact-details">
              <a href="mailto:ashrachamindufernando@gmail.com" className="contact-detail-item cursor-hover">
                <div className="detail-icon-box">
                  <Mail size={18} className="text-accent" />
                </div>
                <div className="detail-text-col">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">ashrachamindufernando@gmail.com</span>
                </div>
              </a>

              <a href="tel:+94769912948" className="contact-detail-item cursor-hover">
                <div className="detail-icon-box">
                  <Phone size={18} className="text-accent" />
                </div>
                <div className="detail-text-col">
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">(+94) 76 991 2948</span>
                </div>
              </a>

              <div className="contact-detail-item">
                <div className="detail-icon-box">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div className="detail-text-col">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/chamindu-fernandez/" target="_blank" rel="noopener noreferrer" className="social-box cursor-hover" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/ludolabsco/" target="_blank" rel="noopener noreferrer" className="social-box cursor-hover" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.behance.net/chaminduashara" target="_blank" rel="noopener noreferrer" className="social-box cursor-hover" aria-label="Behance">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 4h4c1.1 0 2 .9 2 2s-.9 2-2 2H6z" /><path d="M6 10h4.5c1.4 0 2.5 1.1 2.5 2.5S11.9 15 10.5 15H6z" /><path d="M6 4v11" />
                  <path d="M15 13.5v-1c0-1.4 1.1-2.5 2.5-2.5S20 11.1 20 12.5v1h-5" /><path d="M15 13.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" /><path d="M16 7h3" />
                </svg>
              </a>
              <a href="https://github.com/ChaminduFernando" target="_blank" rel="noopener noreferrer" className="social-box cursor-hover" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Orange footer bar ─────────────────────────────── */}
      <div className="contact-footer-bar">
        <div className="container footer-bar-inner">
          <p className="footer-copyright">
            © {currentYear} Chamindu Fernando. All rights reserved.
          </p>
          <span className="footer-logo heading-font">CF.</span>
          <button
            className="footer-back-top cursor-hover"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            BACK TO TOP ↑
          </button>
        </div>

        {/* Giant name */}
        <motion.div
          className="footer-giant-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <h1 className="heading-font footer-giant-name">CHAMINDU</h1>
        </motion.div>
      </div>

    </footer>
  );
};

export default Contact;
