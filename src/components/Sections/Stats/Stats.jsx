'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const statsData = [
  { number: '20', label: 'Brands Directed' },
  { number: '10', label: 'Different Sectors\nServed.' },
  { number: '100', label: 'Creative\nCampaigns' }
];

const Stats = () => {
  return (
    <section className="stats-section section" id="stats">
      <div className="container stats-container">
        {statsData.map((stat, index) => (
          <motion.div 
            key={index}
            className="stat-row"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="stat-number">
              {stat.number}<span className="stat-plus">+</span>
            </div>
            <div className="stat-label">
              {stat.label.split('\n').map((line, i) => <span key={i} className="stat-label-line">{line}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
