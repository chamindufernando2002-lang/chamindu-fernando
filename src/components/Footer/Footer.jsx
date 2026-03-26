'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0.8, 1], [150, 0]);

  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-top">
          <h2 className="heading-font">CF.</h2>
          <div className="social-links">
            <a href="https://www.behance.net/chaminduashara" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="cursor-hover social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4h4c1.1 0 2 .9 2 2s-.9 2-2 2H6z" />
                <path d="M6 10h4.5c1.4 0 2.5 1.1 2.5 2.5S11.9 15 10.5 15H6z" />
                <path d="M6 4v11" />
                <path d="M15 13.5v-1c0-1.4 1.1-2.5 2.5-2.5S20 11.1 20 12.5v1h-5" />
                <path d="M15 13.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" />
                <path d="M16 7h3" />
              </svg>
            </a>
            <a href="https://www.instagram.com/ludolabsco/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cursor-hover social-icon-link">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/chamindu-fernandez/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cursor-hover social-icon-link">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/ChaminduFernando" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="cursor-hover social-icon-link">
              <Github size={24} />
            </a>
            <a href="mailto:ashrachamindufernando@gmail.com" aria-label="Email" className="cursor-hover social-icon-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Chamindu Fernando. All rights reserved.
          </p>
          <a href="#" className="back-to-top" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            Back to Top ↑
          </a>
        </div>
      </div>

      <div className="footer-giant-wrapper">
        <motion.h1 
          className="heading-font footer-giant-text"
          style={{ y: yParallax }}
        >
          CHAMINDU
        </motion.h1>
      </div>
    </footer>
  );
};

export default Footer;
