'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section section" id="about">
      <div className="about-bg-text-wrapper">
        <h2 className="about-bg-text">
          CREATIVE<br/>DIRECTOR
        </h2>
      </div>

      <div className="container about-container">
        <div className="about-grid">
          <motion.div 
            className="about-image-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.0 }}
          >
            {/* Empty portrait with icon */}
            <div className="about-portrait empty-portrait">
              <User size={80} strokeWidth={1} color="rgba(255,255,255,0.2)" />
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.0, delay: 0.2 }}
          >
            <p className="about-description">
              I am a Problem Solver & Research-Driven Designer focused on crafting compelling digital 
              experiences. With a deep foundation in strategy, user research, and comprehensive problem-solving, 
              I help brands bridge the gap between complex challenges and elegant, solution-based outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
