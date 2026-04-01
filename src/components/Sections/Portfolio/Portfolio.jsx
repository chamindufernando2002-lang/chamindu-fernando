'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import ScrambleText from '../../UI/ScrambleText';
import './Portfolio.css';

const projects = [
  {
    id: 'travelco',
    title: 'Travelco Holdings',
    description: 'Branding & Digital',
    imageUrl: '/projects/Travelco/1.jpg'
  },
  {
    id: '13th-installation',
    title: '13th Installation',
    description: 'Photography',
    imageUrl: '/projects/13th Installation/1.jpg'
  },
  {
    id: 'rotaract',
    title: 'Rotaract Projects',
    description: 'Community & Event',
    imageUrl: '/projects/Rotaract Projects/Special Days/1 (4).jpg'
  },
  {
    id: 'food',
    title: 'Food Campaigns',
    description: 'Social Media',
    imageUrl: '/projects/Food/1.jpg'
  },
];

const PortfolioRow = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const floatX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const floatY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY - 150);
  };

  const numStr = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      className="pf-row"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Link href={`/project/${item.id}`} className="pf-row-link cursor-hover">
        <span className="pf-num">{numStr}</span>
        <span className="pf-title">{item.title}</span>
        <span className="pf-meta">{item.description}</span>
        <span className="pf-arrow">↗</span>
      </Link>

      {/* Floating image on hover */}
      <motion.div
        className="pf-floating-img"
        style={{
          x: floatX,
          y: floatY,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.85,
          pointerEvents: 'none',
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.3 } }}
      >
        <img src={item.imageUrl} alt={item.title} />
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section className="portfolio-section section" id="portfolio">
      <div className="container" style={{ display: 'flex', gap: '4vw', alignItems: 'flex-start' }}>

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
          01
        </motion.div>

        {/* Right: header + list */}
        <div style={{ flexGrow: 1, minWidth: 0 }}>
          <motion.div
            className="portfolio-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="portfolio-header-content">
              <ScrambleText
                text="RECENT WORK."
                className="heading-font section-title"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', fontWeight: 900 }}
              />
            </div>
          </motion.div>

          <div className="pf-list">
            {projects.map((item, index) => (
              <PortfolioRow key={item.id} item={item} index={index} />
            ))}
          </div>

          <motion.div
            className="portfolio-footer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link href="/work" className="view-more-button cursor-hover">
              <span>View All Work</span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
