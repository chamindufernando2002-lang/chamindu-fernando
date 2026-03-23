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
      <Statement />
      <Portfolio />
      <Stats />
      <About />
      <Services /> {/* This holds the new Expertise Component logic */}
      <Experience />
      <Awards />
      <Contact />
    </motion.main>
  );
}
