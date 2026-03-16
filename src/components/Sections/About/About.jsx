import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {


  return (
    <section className="about-section section" id="about">
      <div className="container about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="heading-font section-title">About Me</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}
          >
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: 0 }}>
              I am a multidisciplinary visual storyteller focused on crafting compelling digital 
              experiences. With a foundation in traditional graphic design and an eye towards 
              the future of motion aesthetics, I help brands articulate their unique narrative 
              through striking visuals and precise typography.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
