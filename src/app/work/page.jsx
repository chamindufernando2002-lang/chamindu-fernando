'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CustomCursor from '../../components/UI/CustomCursor';
import './work.css';

const projects = [
  {
    id: 'motions-videos',
    title: 'Motions & Videos',
    category: 'Motion Design',
    tags: ['Motion', 'Video'],
    year: '2025',
    imageUrl: null,
    videoUrl: '/projects/12.Motions & Videos/1.mp4',
    index: 1,
  },
  {
    id: 'spa-ceylon',
    title: 'Spa Ceylon',
    category: 'Social Media',
    tags: ['Wellness', 'Digital Design'],
    year: '2025',
    imageUrl: '/projects/1.Spa Ceylon/1.png',
    index: 2,
  },
  {
    id: 'tech-ts',
    title: 'Tech TS',
    category: 'Branding',
    tags: ['Identity', 'Digital Design'],
    year: '2023',
    imageUrl: '/projects/2.Tech TS/1.jpg',
    index: 3,
  },
  {
    id: 'wassane',
    title: 'Wassane',
    category: 'Event Design',
    tags: ['Social Media', 'Events'],
    year: '2025',
    imageUrl: '/projects/3.Wassane/1.jpg',
    index: 4,
  },
  {
    id: 'food',
    title: 'Food Menu',
    category: 'Digital Design',
    tags: ['Restaurant', 'Social Media'],
    year: '2024',
    imageUrl: '/projects/3.Food/friday special.jpg',
    index: 5,
  },
  {
    id: 'beauty-leaf',
    title: 'Beauty Leaf',
    category: 'Print Design',
    tags: ['Brochure', 'Medical'],
    year: '2023',
    imageUrl: '/projects/4.Beauty Leaf/10.jpg',
    index: 6,
  },
  {
    id: 'youtube-thumbnails',
    title: 'Youtube Thumbnails',
    category: 'Digital Art',
    tags: ['Social Media', 'Youtube'],
    year: '2025',
    imageUrl: '/projects/5.Youtube Thumbnails/Binance Trading Bot@2x.jpg',
    index: 7,
  },
  {
    id: 'rota-times',
    title: 'Rota Times',
    category: 'Editorial',
    tags: ['Magazine', 'Print'],
    year: '2024',
    imageUrl: '/projects/6.Rota Times Newsletters/1.july.jpg',
    index: 8,
  },
  {
    id: 'yeh-jawaani-concert',
    title: 'Yeh Jawaani Concert',
    category: 'Event Design',
    tags: ['Concert', 'Ticketing'],
    year: '2025',
    imageUrl: '/projects/7.Yeh Jawaani Concert/10.jpg',
    index: 9,
  },
  {
    id: 'university-projects',
    title: 'University Projects',
    category: 'Miscellaneous',
    tags: ['Digital Design', 'Events'],
    year: '2024',
    imageUrl: '/projects/8.University Projects/1.jpg',
    index: 10,
  },
  {
    id: 'mg-sl',
    title: 'MG SL',
    category: 'Automotive',
    tags: ['Automotive', 'Digital Design'],
    year: '2025',
    imageUrl: '/projects/9.MG SL/2.jpg',
    index: 11,
  },
  {
    id: 'beauty-bay',
    title: 'Beauty Bay',
    category: 'Social Media',
    tags: ['Skin Care', 'Digital Design'],
    year: '2025',
    imageUrl: '/projects/10.Beauty Bay/1.jpg',
    index: 12,
  },
  {
    id: 'apex',
    title: 'Apex',
    category: 'Branding',
    tags: ['Identity', 'Social Media'],
    year: '2024',
    imageUrl: '/projects/11.Apex/1.jpg',
    index: 13,
  },
];

const allCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

// ─── Floating cursor image on row hover ───────────────────────────────────────
const FollowImage = ({ src, videoUrl, visible }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 30 });
  const springY = useSpring(y, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX + 24);
      y.set(e.clientY - 100);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className="work-follow-img"
      style={{ left: springX, top: springY }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.85 }}
      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
    >
      {videoUrl ? (
        <video src={videoUrl} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : src ? (
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : null}
    </motion.div>
  );
};

// ─── List Row Item ────────────────────────────────────────────────────────────
const ProjectRow = ({ project, isActive, onHover }) => {
  return (
    <motion.div
      className={`work-row ${isActive ? 'work-row--active' : ''}`}
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
    >
      <Link href={`/project/${project.id}`} className="work-row-link cursor-hover">
        <span className="work-row-num">
          {String(project.index).padStart(2, '0')}
        </span>

        <div className="work-row-title-wrap">
          <h2 className="heading-font work-row-title">{project.title}</h2>
          <motion.div
            className="work-row-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isActive ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>

        <span className="work-row-cat">{project.category}</span>
        <span className="work-row-year">{project.year}</span>
        <span className="work-row-arrow">↗</span>
      </Link>
    </motion.div>
  );
};

// ─── Grid Card ────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (hovered && videoRef.current) videoRef.current.play().catch(() => {});
    else if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  }, [hovered]);

  return (
    <motion.div
      className="work-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/project/${project.id}`} className="work-card-link cursor-hover">
        <div className="work-card-img-wrap">
          {project.videoUrl ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              muted
              loop
              playsInline
              preload="metadata"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : project.imageUrl ? (
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              draggable={false}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : null}

          {/* Hover overlay */}
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

          {/* Project number */}
          <span className="work-card-num">{String(project.index).padStart(2, '0')}</span>
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

// ─── Main Work Page ───────────────────────────────────────────────────────────
export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'
  const [hoveredProject, setHoveredProject] = useState(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <motion.main
      className="work-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CustomCursor />

      {/* Floating follow image (list view only) */}
      {viewMode === 'list' && (
        <FollowImage
          src={hoveredProject?.imageUrl}
          videoUrl={hoveredProject?.videoUrl}
          visible={!!hoveredProject}
        />
      )}

      {/* ─── PAGE HEADER ─────────────────────────────────── */}
      <div className="work-page-header container">
        <motion.div
          className="work-header-top"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="work-header-left">
            <span className="work-label">Selected Work</span>
            <h1 className="heading-font work-main-title">
              ALL<br />PROJECTS
            </h1>
          </div>
          <motion.p
            className="work-header-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A curated collection of brand identities, graphic design campaigns,
            motion design, and creative direction work from 2023 to present.
          </motion.p>
        </motion.div>

        {/* Controls row */}
        <motion.div
          className="work-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Category filters */}
          <div className="work-filters">
            {allCategories.map(cat => (
              <button
                key={cat}
                className={`work-filter-btn cursor-hover ${activeCategory === cat ? 'work-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="work-filter-count">
                    {projects.filter(p => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* View toggle */}
          <div className="work-view-toggle">
            <button
              className={`work-toggle-btn cursor-hover ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List view"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
            <button
              className={`work-toggle-btn cursor-hover ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid view"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* ─── PROJECT COUNT ─────────────────────────────── */}
      <div className="container">
        <div className="work-count-bar">
          <span className="work-count">
            <span className="work-count-num">{filtered.length}</span> Projects
          </span>
          <div className="work-count-line" />
        </div>
      </div>

      {/* ─── LIST VIEW ───────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {viewMode === 'list' && (
          <motion.div
            key="list"
            className="work-list container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((project) => (
              <ProjectRow
                key={project.id}
                project={project}
                isActive={hoveredProject?.id === project.id}
                onHover={setHoveredProject}
              />
            ))}
          </motion.div>
        )}

        {/* ─── GRID VIEW ─────────────────────────────────── */}
        {viewMode === 'grid' && (
          <motion.div
            key="grid"
            className="work-grid container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── FOOTER STRIP ─────────────────────────────────── */}
      <div className="work-footer-strip container">
        <div className="work-footer-inner">
          <p className="work-footer-text">
            More projects coming soon · <span style={{ color: 'var(--accent-color)' }}>{projects.length} works</span> total
          </p>
          <Link href="/" className="work-footer-link cursor-hover">
            ← Back to home
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
