'use client';

import React from 'react';
import { motion } from 'framer-motion';

import CustomCursor from '../components/UI/CustomCursor';
import Hero from '../components/Sections/Hero/Hero';
import Statement from '../components/Sections/Statement/Statement';
import Portfolio from '../components/Sections/Portfolio/Portfolio';
import Stats from '../components/Sections/Stats/Stats';
import About from '../components/Sections/About/About';
import Experience from '../components/Sections/Experience/Experience';
import Services from '../components/Sections/Services/Services';
import Awards from '../components/Sections/Awards/Awards';
import Contact from '../components/Sections/Contact/Contact';

const StickyWrapper = ({ children, zIndex }) => (
  <div 
    className="sticky-parallax-wrapper"
    style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex,
      backgroundColor: 'var(--bg-color)',
      boxShadow: '0 -20px 50px rgba(0,0,0,0.5)',
      width: '100%'
    }}
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <CustomCursor />
      
      <div style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'var(--bg-color)' }}>
        <Hero />
      </div>
      
      <StickyWrapper zIndex={2}>
        <Statement />
      </StickyWrapper>
      
      <StickyWrapper zIndex={3}>
        <Portfolio />
      </StickyWrapper>
      
      <StickyWrapper zIndex={4}>
        <Stats />
      </StickyWrapper>
      
      <StickyWrapper zIndex={5}>
        <About />
      </StickyWrapper>

      <StickyWrapper zIndex={6}>
        <Services />
      </StickyWrapper>
      
      <StickyWrapper zIndex={7}>
        <Experience />
      </StickyWrapper>
      
      <StickyWrapper zIndex={8}>
        <Awards />
      </StickyWrapper>
      
      <StickyWrapper zIndex={9}>
        <Contact />
      </StickyWrapper>
    </motion.main>
  );
}
