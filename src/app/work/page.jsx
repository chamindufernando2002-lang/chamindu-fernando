'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CustomCursor from '../../components/UI/CustomCursor';
import './work.css';

const projects = [
  {
    id: 'spa-ceylon',
    title: 'Spa Ceylon',
    category: 'Social Media',
    tags: ['Wellness', 'Digital Design'],
    year: '2025',
    imageUrl: '/projects/1.Spa Ceylon/1.jpeg',
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
    imageUrl: '/projects/3.Food/1.jpg',
  },
  {
    id: 'beauty-leaf',
    title: 'Beauty Leaf',
    category: 'Print Design',
    tags: ['Brochure', 'Medical'],
    year: '2023',
    imageUrl: '/projects/4.Beauty Leaf/1.jpg',
  },
  {
    id: 'youtube-thumbnails',
    title: 'Youtube Thumbnails',
    category: 'Digital Art',
    tags: ['Social Media', 'Youtube'],
    year: '2025',
    imageUrl: '/projects/5.Youtube Thumbnails/1.jpg',
  },
  {
    id: 'rota-times',
    title: 'Rota Times',
    category: 'Editorial',
    tags: ['Magazine', 'Print'],
    year: '2024',
    imageUrl: '/projects/6.Rota Times Newsletters/1.jpg',
  },
  {
    id: 'yeh-jawaani-concert',
    title: 'Yeh Jawaani Concert',
    category: 'Event Design',
    tags: ['Concert', 'Ticketing'],
    year: '2025',
    imageUrl: '/projects/7.Yeh Jawaani Concert/1.jpg',
  },
  {
    id: 'university-projects',
    title: 'University Projects',
    category: 'Miscellaneous',
    tags: ['Digital Design', 'Events'],
    year: '2024',
    imageUrl: '/projects/8.University Projects/1.jpg',
  },
  {
    id: 'mg-sl',
    title: 'MG SL',
    category: 'Automotive',
    tags: ['Automotive', 'Digital Design'],
    year: '2025',
    imageUrl: '/projects/9.MG SL/1.jpg',
  },
  {
    id: 'beauty-bay',
    title: 'Beauty Bay',
    category: 'Social Media',
    tags: ['Skin Care', 'Digital Design'],
    year: '2025',
    imageUrl: '/projects/10.Beauty Bay/1.jpg',
  },
  {
    id: 'apex',
    title: 'Apex',
    category: 'Branding',
    tags: ['Identity', 'Social Media'],
    year: '2024',
    imageUrl: '/projects/11.Apex/1.jpg',
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
        <div className="work-card-img-wrap" style={{ overflow: 'hidden' }}>
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            draggable={false}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
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
