'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CustomCursor from '../../components/UI/CustomCursor';
import './work.css';

const projects = [
  {
    id: 'travelco',
    title: 'Travelco Holdings',
    category: 'Branding & Digital',
    tags: ['Research', 'Brand Strategy', 'UI/UX'],
    year: '2026',
    imageUrl: '/projects/Travelco/1.jpg',
    size: 'large', // spans 2 cols on desktop
  },
  {
    id: 'lumina',
    title: 'Lumina',
    category: 'Brand Identity',
    tags: ['Logo Design', 'Visual Identity'],
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    size: 'normal',
  },
  {
    id: 'nexus',
    title: 'Nexus Motion',
    category: 'Motion Graphics',
    tags: ['Animation', 'After Effects'],
    year: '2026',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    size: 'normal',
  },
  {
    id: 'aurora',
    title: 'Aurora',
    category: 'Brand Identity',
    tags: ['3D Design', 'Typography'],
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1000&auto=format&fit=crop',
    size: 'normal',
  },
  {
    id: 'echo',
    title: 'Echo',
    category: 'Graphic Design',
    tags: ['Social Media', 'Campaign'],
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop',
    size: 'large',
  },
];

const WorkCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`work-card ${project.size === 'large' ? 'work-card--large' : ''}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.12, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/project/${project.id}`} className="work-card-link cursor-hover">
        
        {/* Image */}
        <div className="work-card-img-wrap">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            draggable={false}
          />

          {/* Hover Overlay with description */}
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

        {/* Card Footer */}
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

export default function Work() {
  return (
    <motion.main
      className="work-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CustomCursor />

      {/* Header */}
      <div className="work-header container">
        <motion.div
          className="work-header-left"  
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="work-label">Selected Work</span>
          <h1 className="heading-font work-main-title">ALL<br />PROJECTS</h1>
        </motion.div>
        <motion.p
          className="work-header-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A curated collection of brand identities, graphic design campaigns, 
          and creative direction work from 2023 to present.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="work-grid container">
        {projects.map((project, index) => (
          <WorkCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Bottom strip */}
      <div className="work-bottom container">
        <p className="work-bottom-text">More projects coming soon.</p>
      </div>
    </motion.main>
  );
}
