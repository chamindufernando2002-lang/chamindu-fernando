'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CustomCursor from '../../components/UI/CustomCursor';
import './work.css';

const projects = [
  {
    id: 'apex',
    title: 'Apex',
    category: 'Branding',
    tags: ['Identity', 'Social Media'],
    year: '2024',
    imageUrl: '/projects/Apex/1.jpg',
  },
  {
    id: 'beauty-bay',
    title: 'Beauty Bay',
    category: 'Social Media',
    tags: ['Skin Care', 'Digital Design'],
    year: '2025',
    imageUrl: '/projects/Beauty Bay/1.jpg',
  },
  {
    id: 'beauty-leaf',
    title: 'Beauty Leaf',
    category: 'Print Design',
    tags: ['Brochure', 'Medical'],
    year: '2023',
    imageUrl: '/projects/Beauty Leaf/2.jpg',
  }
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
  const [visibleProjects, setVisibleProjects] = useState(9);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 9);
  };

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
        {projects.slice(0, visibleProjects).map((project, index) => (
          <WorkCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Bottom strip */}
      <div className="work-bottom container" style={{ flexDirection: 'column', gap: '2rem' }}>
        {visibleProjects < projects.length ? (
          <button onClick={loadMore} className="load-more-btn cursor-hover" style={{
            background: 'transparent',
            border: '1px solid var(--text-primary)',
            color: 'var(--text-primary)',
            padding: '12px 30px',
            borderRadius: '30px',
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: 'pointer'
          }}>
            Load More Projects
          </button>
        ) : (
          <p className="work-bottom-text">More projects coming soon.</p>
        )}
      </div>
    </motion.main>
  );
}
