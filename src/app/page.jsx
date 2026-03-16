'use client';

import React from 'react';
import { motion } from 'framer-motion';

import CustomCursor from '../components/UI/CustomCursor';
import Hero from '../components/Sections/Hero/Hero';
import About from '../components/Sections/About/About';
import Experience from '../components/Sections/Experience/Experience';
import Portfolio from '../components/Sections/Portfolio/Portfolio';
import Services from '../components/Sections/Services/Services';
import Contact from '../components/Sections/Contact/Contact';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      <Hero />
      <Portfolio />
      <About />
      <Experience />
      <Services />
      <Contact />
    </motion.main>
  );
}
