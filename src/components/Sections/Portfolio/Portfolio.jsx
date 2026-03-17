'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './Portfolio.css';

const projects = [
  {
    id: 'lumina',
    title: 'Lumina',
    description: 'A complete brand identity system.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nexus',
    title: 'Nexus',
    description: 'Dynamic motion graphic sequence.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'aurora',
    title: 'Aurora',
    description: 'Immersive 3D environment design.',
    imageUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'echo',
    title: 'Echo',
    description: 'Minimalist e-commerce interface.',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop'
  }
];

const Portfolio = () => {
  const recentProjects = projects.slice(0, 3);

  return (
    <section className="portfolio-section section" id="portfolio">
      <div className="container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portfolio-header-content">
            <h2 className="heading-font section-title">Recent Work</h2>
          </div>
        </motion.div>

        <div className="portfolio-grid">
          {recentProjects.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="portfolio-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/project/${item.id}`} className="portfolio-link cursor-hover">
                <div className="portfolio-image-wrapper">
                  <img src={item.imageUrl} alt={item.title} loading="lazy" />
                  <div className="portfolio-slide-overlay">
                    <div className="portfolio-slide-content">
                      <h3 className="heading-font">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="portfolio-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/work" className="view-more-button cursor-hover">
            <span>View More</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

