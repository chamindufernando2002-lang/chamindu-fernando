'use client';

import React from 'react';
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
  // Multiply the projects to guarantee a seamless infinitely scrolling track
  const marqueeProjects = [
    ...projects,
    ...projects,
    ...projects,
    ...projects,
    ...projects,
    ...projects
  ];

  return (
    <section className="portfolio-section section" id="portfolio">
      <div className="container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-font section-title">Recent Work</h2>
        </motion.div>
      </div>

      <div className="portfolio-marquee-viewport">
        <div className="portfolio-marquee-track">
          {marqueeProjects.map((item, index) => (
            <div key={`${item.id}-${index}`} className="portfolio-slide">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
