'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ContactModal from '../UI/ContactModal';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <>
      <motion.header
        className={`navigation ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container nav-container">
          <Link 
            href="/" 
            className="logo heading-font cursor-hover"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            CF.
          </Link>
          
          <nav className="nav-links">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className={pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            className="nav-cta cursor-hover"
            onClick={() => setModalOpen(true)}
            aria-label="Let's Talk – open contact options"
          >
            Let's Talk
          </button>
        </div>
      </motion.header>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navigation;
