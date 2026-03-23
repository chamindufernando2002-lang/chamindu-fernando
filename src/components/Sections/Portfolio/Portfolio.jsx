'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import './Portfolio.css';

const projects = [
  {
    id: 'travelco',
    title: 'Travelco Holdings',
    description: 'Branding & Digital Solution',
    imageUrl: '/projects/Travelco/1.jpg'
  },
  {
    id: 'lumina',
    title: 'Lumina',
    description: 'Strategic Brand Identity',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nexus',
    title: 'Nexus',
    description: 'Motion Graphics Sequence',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'aurora',
    title: 'Aurora',
    description: '3D Interactive Environment',
    imageUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'echo',
    title: 'Echo',
    description: 'E-commerce UI/UX',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop'
  }
];

const PortfolioItem = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement using a spring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    // Offset the image so the cursor is somewhat centered but not covering the exact center
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY - 150);
  };

  return (
    <motion.div 
      className="portfolio-row"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Link href={`/project/${item.id}`} className="portfolio-row-link cursor-hover">
        <h3 className="heading-font">{item.title}</h3>
        <span className="portfolio-row-meta">{item.description}</span>
      </Link>

      {/* Floating Image mapped to client window coordinates */}
      <motion.div
        className="portfolio-floating-image"
        style={{
          x: floatX,
          y: floatY,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
          pointerEvents: 'none'
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
      >
        <img src={item.imageUrl} alt={item.title} />
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const recentProjects = projects.slice(0, 4); // Display 4 to fill the list better than 3

  return (
    <section className="portfolio-section section" id="portfolio">
      <div className="container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portfolio-header-content">
            <h2 className="heading-font section-title">Recent Work</h2>
          </div>
        </motion.div>

        <div className="portfolio-list">
          {recentProjects.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.div 
          className="portfolio-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/work" className="view-more-button cursor-hover">
            <span>View All Work</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

