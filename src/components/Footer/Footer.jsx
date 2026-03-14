'use client';

import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-top">
          <h2 className="heading-font">CF.</h2>
          <div className="social-links">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:ashrachamindufernando@gmail.com">Email</a>
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
    </footer>
  );
};

export default Footer;
