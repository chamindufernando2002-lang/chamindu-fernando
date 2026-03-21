'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  // Parallax for the background video
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  // Parallax for the text sliding down slower than the page scroll
  const yText = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="hero-section" id="hero">
      
      {/* Video layer placed functionally behind content */}
      <motion.div 
        className="hero-background"
        style={{ y: yBg }}
      >
        <video 
          src="/Web-banner.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
        ></video>
      </motion.div>
      
      {/* Gradient overlays */}
      <div className="hero-overlay-left"></div>
      <div className="hero-overlay-bottom"></div>

      {/* Content wrapper - Text placed on top of everything */}
      <div className="container hero-content">
        <motion.div 
          className="hero-text-wrapper"
          style={{ y: yText }}
        >
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="heading-font hero-title">
              <span className="text-line">Chamindu</span>
              <span className="text-line">Fernando<span className="text-accent">.</span></span>
            </h1>
            
            <motion.div 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>&quot;Problem Solver & Research-Driven Designer&quot;</p>
            </motion.div>

            <motion.div 
              className="hero-action"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="/work" className="cta-button cursor-hover">
                <span>View My Work</span>
                <div className="cta-icon">
                  <ArrowDownRight size={24} />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
