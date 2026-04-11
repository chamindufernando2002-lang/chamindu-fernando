'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrambleText from '../../UI/ScrambleText';
import './Portfolio.css';
import '../../../app/work/work.css'; // ensure styles are identical

// Hardcoding the first 3 specific projects logic to match Work exactly
const recentProjects = [
  {
    id: 'spa-ceylon',
    title: 'Spa Ceylon',
    category: 'Social Media',
    tags: ['Wellness', 'Digital Design'],
    year: '2025',
    imageUrl: '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.48 (1).jpeg',
  },
  {
    id: 'tech-ts',
    title: 'Tech TS',
    category: 'Branding',
    tags: ['Identity', 'Digital Design'],
    year: '2023',
    imageUrl: '/projects/2.Tech TS/1.jpg',
  },
  {
    id: 'food',
    title: 'Food Menu',
    category: 'Digital Design',
    tags: ['Restaurant', 'Social Media'],
    year: '2024',
    imageUrl: '/projects/3.Food/friday special.jpg',
  }
];

const WorkCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="work-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/project/${project.id}`} className="work-card-link cursor-hover">
        <div className="work-card-img-wrap" style={{ overflow: 'hidden' }}>
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            draggable={false}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <motion.div
            className="work-card-overlay"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="work-card-overlay-inner">
              <div className="work-card-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="work-tag">{tag}</span>
                ))}
              </div>
              <p className="work-card-cta">View Project ↗</p>
            </div>
          </motion.div>
        </div>
        <div className="work-card-footer">
          <div className="work-card-info">
            <h3 className="heading-font work-card-title">{project.title}</h3>
            <span className="work-card-category">{project.category}</span>
          </div>
          <span className="work-card-year">{project.year}</span>
        </div>
      </Link>
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
          className="pf-num-main"
        >
          01
        </motion.div>

        {/* Right: header + list */}
        <div style={{ flexGrow: 1, minWidth: 0, width: '100%' }}>
          <motion.div
            className="portfolio-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="portfolio-header-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <ScrambleText
                text="RECENT WORK."
                className="heading-font section-title"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', fontWeight: 900 }}
              />
              <Link href="/work" className="view-more-button cursor-hover" style={{ display: 'inline-flex', marginBottom: '10px' }}>
                <span>View All Work ↗</span>
              </Link>
            </div>
          </motion.div>

          {/* 3-column Grid precisely matching /work cards */}
          <div className="work-grid recent-work-grid">
            {recentProjects.map((item, index) => (
              <WorkCard key={item.id} project={item} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
