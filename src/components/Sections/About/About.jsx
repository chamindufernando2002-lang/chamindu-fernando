'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section section" id="about">
      <div className="container about-container">
        <motion.div 
          className="about-huge-title-wrapper"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="heading-font about-huge-title">ABOUT<br/><span className="text-accent">ME.</span></h2>
        </motion.div>

        <div className="about-content-grid">
          <motion.div className="about-spacer" />
          
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
