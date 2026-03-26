'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="hero-section" id="hero">
      
      {/* 1. Bottom Layer: Video */}
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
      
      {/* 2. Middle Layer: Multiply Mask - The text is pure white, background is almost pure black */}
      <div className="hero-mask-layer">
        <div className="container hero-mask-container">
          <motion.div 
            className="hero-title-wrapper"
            style={{ y: yText }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <h1 className="heading-font hero-title-masked">
              CHAMINDU<br />FERNANDO<span className="text-accent">.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays to smooth intersection with next section */}
      <div className="hero-overlay-bottom"></div>

      {/* 3. Top Layer: Normal Text and Buttons */}
      <div className="container hero-foreground">
        <motion.div 
          className="hero-subtitle-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="hero-subtitle-text">&quot;Your friendly neighbourhood Designer&quot;</p>
          
          <div className="hero-action">
            <a href="/#work" className="cta-button cursor-hover">
              <span>View My Work</span>
              <div className="cta-icon">
                <ArrowDownRight size={24} />
              </div>
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
