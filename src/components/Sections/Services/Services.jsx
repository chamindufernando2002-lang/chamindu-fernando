'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from '../../UI/ScrambleText';
import './Services.css';


const expertiseList = [
  { title: 'BRAND STRATEGY' },
  { title: 'CREATIVE DIRECTION' },
  { title: 'GRAPHIC DESIGNING' },
  { title: 'MOTION GRAPHICS' }
];

const ExpertiseItem = ({ item, index }) => {
  return (
    <motion.div 
      className="expertise-row"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="expertise-content">
        <h3 className="heading-font expertise-title">{item.title}</h3>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="expertise-section section" id="services">
      <div className="container expertise-container" style={{ display: 'flex', gap: '5vw', alignItems: 'flex-start' }}>
        
        {/* Left Column: Large Numeral */}
        <motion.div 
          className="section-numeral"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          style={{ 
            fontSize: 'clamp(6rem, 15vw, 12rem)', 
            fontWeight: 900, 
            lineHeight: 0.8, 
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-heading)',
            flexShrink: 0
          }}
        >
          02
        </motion.div>

        {/* Right Column: Content */}
        <div className="section-content-right" style={{ flexGrow: 1, width: '100%' }}>
          <motion.div 
            className="expertise-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          >
            <ScrambleText 
              text="SERVICES." 
              className="heading-font section-title" 
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '2rem' }} 
            />
          </motion.div>

          <div className="expertise-list">
            {expertiseList.map((item, index) => (
              <ExpertiseItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
