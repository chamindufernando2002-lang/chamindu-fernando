'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer-inner">
        
        {/* Top bar: Logo left, Social icons right */}
        <div className="footer-top">
          <h2 className="heading-font footer-logo">CF.</h2>
          <div className="social-links">
            <a href="https://www.behance.net/chaminduashara" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="cursor-hover social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4h4c1.1 0 2 .9 2 2s-.9 2-2 2H6z" />
                <path d="M6 10h4.5c1.4 0 2.5 1.1 2.5 2.5S11.9 15 10.5 15H6z" />
                <path d="M6 4v11" />
                <path d="M15 13.5v-1c0-1.4 1.1-2.5 2.5-2.5S20 11.1 20 12.5v1h-5" />
                <path d="M15 13.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" />
                <path d="M16 7h3" />
              </svg>
            </a>
            <a href="https://www.instagram.com/ludolabsco/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cursor-hover social-icon-link">
              <Instagram size={22} />
            </a>
            <a href="https://www.linkedin.com/in/chamindu-fernandez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cursor-hover social-icon-link">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com/ChaminduFernando" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-hover social-icon-link">
              <Github size={22} />
            </a>
            <a href="mailto:ashrachamindufernando@gmail.com" aria-label="Email" className="cursor-hover social-icon-link">
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Middle bar: Copyright left, Back to top right */}
        <div className="footer-mid">
          <p className="copyright">
            &copy; {currentYear} Chamindu Fernando. All rights reserved.
          </p>
          <button
            className="back-to-top cursor-hover"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            BACK TO TOP ↑
          </button>
        </div>

      </div>

      {/* Giant background name - spans full width at bottom */}
      <div className="footer-giant-wrapper">
        <motion.h1
          className="heading-font footer-giant-text"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          CHAMINDU
        </motion.h1>
      </div>
    </footer>
  );
};

export default Footer;
