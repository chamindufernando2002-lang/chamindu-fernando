'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import CustomCursor from '../../../components/UI/CustomCursor';
import '../../../pages/CaseStudy.css';

// ─── Project Database ─────────────────────────────────────────────────────────
const projectData = {
  'travelco': {
    title: 'Travelco Holdings',
    category: 'Branding & Digital',
    year: '2026',
    role: 'Research-Driven Designer',
    client: 'Travelco',
    description: 'A comprehensive branding and digital solution repositioning Travelco in the luxury travel market through research-backed design.',
    gallery: [
      '/projects/Travelco/1.jpg',
      '/projects/Travelco/3.jpg',
      '/projects/Travelco/7.jpg',
      '/projects/Travelco/11.jpg',
      '/projects/Travelco/15.jpg',
      '/projects/Travelco/23.jpg',
      '/projects/Travelco/25.jpg',
    ]
  },
  'lumina': {
    title: 'Lumina',
    category: 'Brand Identity',
    year: '2025',
    role: 'Lead Designer',
    client: 'Lumina',
    description: 'A next-gen smart lighting system that required a brand identity as adaptive and pure as light itself — premium, modern, and highly technical.',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop',
    ]
  },
  'nexus': {
    title: 'Nexus Motion',
    category: 'Motion Graphics',
    year: '2026',
    role: 'Animator & Designer',
    client: 'Nexus',
    description: 'A conceptual exploration of interconnected data streams visualized through dynamic 3D typography and fluid motion sequences.',
    gallery: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    ]
  },
  'aurora': {
    title: 'Aurora',
    category: 'Brand Identity',
    year: '2025',
    role: 'Lead Designer',
    client: 'Aurora',
    description: 'A bold and futuristic brand identity exploring the intersection of nature, technology, and premium design.',
    gallery: [
      'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop',
    ]
  },
};

// ─── Gallery Item ─────────────────────────────────────────────────────────────
const GalleryItem = ({ src, alt, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="cs-gallery-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(index)}
    >
      <div className="cs-gallery-img-wrap">
        <motion.img
          src={src}
          alt={alt}
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          draggable={false}
        />
        <motion.div
          className="cs-gallery-overlay"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ZoomIn size={32} color="#fff" strokeWidth={1.5} />
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Page Component ────────────────────────────────────────────────────────────
export default function ProjectPage({ params }) {
  const resolvedParams = React.use(params);
  const id = resolvedParams.id;

  const project = projectData[id] || {
    title: `Project ${id}`,
    category: 'Graphic Design',
    year: '2025',
    role: 'Designer',
    client: id,
    description: 'Detailed case study documentation is currently being compiled for this project.',
    gallery: [],
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const goPrev = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, lightboxIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  return (
    <motion.main
      className="cs-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <CustomCursor />

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="cs-hero">
        <div className="container cs-hero-inner">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/#portfolio" className="cs-back cursor-hover">
              <ArrowLeft size={18} />
              <span>Back to Work</span>
            </Link>
          </motion.div>

          <motion.div
            className="cs-hero-content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="cs-category-badge">{project.category}</span>
            <h1 className="heading-font cs-title">{project.title}</h1>
          </motion.div>

          {/* Meta strip */}
          <motion.div
            className="cs-meta-strip"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="cs-meta-item">
              <span className="cs-meta-label">Client</span>
              <span className="cs-meta-value">{project.client}</span>
            </div>
            <div className="cs-meta-divider" />
            <div className="cs-meta-item">
              <span className="cs-meta-label">Year</span>
              <span className="cs-meta-value">{project.year}</span>
            </div>
            <div className="cs-meta-divider" />
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">{project.role}</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="cs-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* ─── GALLERY GRID ───────────────────────────────────────────── */}
      {project.gallery.length > 0 && (
        <section className="cs-gallery-section">
          <div className="container">
            <div className="cs-gallery-grid">
              {project.gallery.map((src, index) => (
                <GalleryItem
                  key={index}
                  src={src}
                  alt={`${project.title} — design ${index + 1}`}
                  index={index}
                  onClick={openLightbox}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── OTHER WORK LIST ────────────────────────────────────────── */}
      <section className="cs-other-work">
        <div className="container">
          <div className="cs-ow-header">
            <span className="cs-ow-label">OTHER WORK</span>
            <Link href="/work" className="cs-ow-view-all cursor-hover">VIEW ALL</Link>
          </div>
          
          <div className="cs-ow-list">
            {Object.entries(projectData)
              .filter(([key]) => key !== id) // exclude current project
              .slice(0, 3) // show max 3
              .map(([key, p], idx) => (
                <Link key={key} href={`/project/${key}`} className="cs-ow-item cursor-hover">
                  <h3 className="heading-font cs-ow-title">{p.title}</h3>
                  <span className="cs-ow-arrow">↗</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─────────────────────────────────────────────── */}
      <section className="cs-bottom">
        <div className="container cs-bottom-inner">
          <Link href="/work" className="cs-bottom-link cursor-hover">
            <span className="heading-font">Discover More Work</span>
            <span className="cs-bottom-arrow">↗</span>
          </Link>
        </div>
      </section>

      {/* ─── LIGHTBOX ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="cs-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Toolbar */}
            <div className="cs-lb-toolbar" onClick={(e) => e.stopPropagation()}>
              <span className="cs-lb-counter">
                {lightboxIndex + 1} <span style={{ opacity: 0.5 }}>/ {project.gallery.length}</span>
              </span>
              <button className="cs-lb-close cursor-hover" onClick={closeLightbox}>
                <X size={24} />
              </button>
            </div>

            {/* Prev / Next */}
            <button
              className="cs-lb-nav cs-lb-prev cursor-hover"
              onClick={goPrev}
            >
              <ChevronLeft size={36} />
            </button>
            <button
              className="cs-lb-nav cs-lb-next cursor-hover"
              onClick={goNext}
            >
              <ChevronRight size={36} />
            </button>

            {/* Image */}
            <motion.div
              className="cs-lb-img-wrap"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -80) goNext();
                else if (swipe > 80) goPrev();
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  src={project.gallery[lightboxIndex]}
                  alt={`${project.title} preview ${lightboxIndex + 1}`}
                  className="cs-lb-img"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                  draggable={false}
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
