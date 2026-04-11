'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Awards.css';

const awardsList = [
  { year: '2025', title: 'Best Social Media Branding Flyer (1st Runners Up)', category: 'Brandin Competition' },
  { year: '2026', title: 'Best Branding Toolkit (1st Runners Up)', category: 'Master Designer Competition' },
  { year: '2025', title: 'Editorial Excellence Award', category: 'Pranama Award Ceremony' },
  { year: '2025', title: 'Best Newsletter of the Year (1st Runners Up)', category: 'Rotaract District Assembly' },
  { year: '2025', title: 'Best Annual Report (1st Runners Up)', category: 'Rotaract District Assembly' }
];

const Awards = () => {
  return (
    <section className="awards-section section" id="awards">
      <div className="container awards-container">
        <motion.div 
          className="awards-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 1.0 }}
        >
          <h2 className="heading-font section-title">AWARDS</h2>
        </motion.div>

        <div className="awards-list">
          {awardsList.map((award, index) => (
            <motion.div 
              key={index}
              className="awards-row cursor-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="award-year">{award.year}</div>
              <h3 className="heading-font award-title">{award.title}</h3>
              <div className="award-category">{award.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
