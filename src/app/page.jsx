'use client';

import React from 'react';
import { motion } from 'framer-motion';

import CustomCursor from '../components/UI/CustomCursor';
import Hero from '../components/Sections/Hero/Hero';
import Portfolio from '../components/Sections/Portfolio/Portfolio';
import Services from '../components/Sections/Services/Services';
import Experience from '../components/Sections/Experience/Experience';
import About from '../components/Sections/About/About';
import Stats from '../components/Sections/Stats/Stats';
import Awards from '../components/Sections/Awards/Awards';
import Contact from '../components/Sections/Contact/Contact';

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
      
      <Hero />
      <Portfolio />   {/* 01 */}
      <Services />    {/* 02 */}
      <Experience />  {/* 03 */}
      <About />       {/* 04 */}
      <Stats />
      <Awards />
      <Contact />
      
    </motion.main>
  );
}
