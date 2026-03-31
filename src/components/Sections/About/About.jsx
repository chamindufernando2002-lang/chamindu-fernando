'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from '../../UI/ScrambleText';
import './About.css';

const About = () => {
  return (
    <section className="about-section section" id="about">
      <div className="container about-container" style={{ display: 'flex', gap: '4vw', alignItems: 'flex-start' }}>
        
        {/* Left: numeral */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          style={{ 
            fontSize: 'clamp(7rem, 16vw, 13rem)', 
            fontWeight: 900, 
            lineHeight: 0.85, 
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-heading)',
            flexShrink: 0,
            paddingTop: '0.1em'
          }}
        >
          04
        </motion.div>

        {/* Right: content */}
        <div style={{ flexGrow: 1, minWidth: 0 }}>
          <motion.div 
            className="about-huge-title-wrapper"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="heading-font about-huge-title" style={{ display: 'flex', flexDirection: 'column' }}>
              <ScrambleText text="ABOUT" as="span" />
              <ScrambleText text="ME." as="span" className="text-accent" />
            </div>
          </motion.div>

          <motion.div 
            className="about-text-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <h3 className="heading-font about-lead-text">
              I am a Problem Solver & Research-Driven Designer focused on crafting compelling digital experiences.
            </h3>
            <p className="about-description">
              With a deep foundation in strategy, user research, and comprehensive problem-solving, 
              I help brands bridge the gap between complex challenges and elegant, solution-based outcomes.
              We build high-end digital authority that reflects prestige and drives engagement.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
