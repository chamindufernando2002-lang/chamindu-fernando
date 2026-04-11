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
          className="hero-video desktop-video"
        ></video>
        <img 
          src="/Web%20banner%20-%20Mobile.jpg"
          alt="Chamindu Fernando"
          className="hero-video mobile-banner"
        />
      </motion.div>
      
      {/* Bottom fade restored for smooth transition, left fade removed for face visibility */}
      <div className="hero-overlay-bottom"></div>

      {/* Content wrapper - Text placed on top of everything */}
      <div className="container hero-content">
        <motion.div 
          className="hero-text-wrapper"
          style={{ y: yText }}
        >
          <motion.div 
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 }
              }
            }}
          >

            <a href="#about" className="cursor-hover" aria-label="Go to About Section" style={{ display: 'block', height: '100%', position: 'relative' }}>
              <h1 style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(1px, 1px, 1px, 1px)' }}>
                Chamindu Fernando
              </h1>
            </a>
            
            <motion.div 
              className="hero-action-group"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: "0%", opacity: 1, transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] } }
              }}
            >
              <a href="/work" className="cta-button cursor-hover">
                <span>View My Work</span>
                <div className="cta-icon">
                  <ArrowDownRight size={24} />
                </div>
              </a>
              <div className="hero-subtitle">
                <p>&quot;Your friendly neighbourhood Designer&quot;</p>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
