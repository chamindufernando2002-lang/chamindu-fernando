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
            <h1 className="heading-font hero-title" style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-2px' }}>
              <span className="text-mask">
                <motion.span 
                  className="text-line"
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    visible: { y: "0%", opacity: 1, transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] } }
                  }}
                >
                  CHAMINDU
                </motion.span>
              </span>
              <span className="text-mask">
                <motion.span 
                  className="text-line"
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    visible: { y: "0%", opacity: 1, transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] } }
                  }}
                >
                  FERNANDO<span className="text-accent">.</span>
                </motion.span>
              </span>
            </h1>
            
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
