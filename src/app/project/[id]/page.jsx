'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import CustomCursor from '../../../components/UI/CustomCursor';
import '../../../pages/CaseStudy.css';

// ─── Project Database ─────────────────────────────────────────────────────────
const projectData = {
  '13th-installation': {
    title: '13th Installation',
    category: 'Photography',
    year: '2024',
    role: 'Event Photographer',
    client: 'Leo Club',
    description: 'A comprehensive collection of event photography and portraiture for the 13th Installation ceremony, capturing the essence and emotion of the transition of leadership.',
    gallery: [
      '/projects/13th Installation/Amasha .jpg',
      '/projects/13th Installation/Anuja.jpg',
      '/projects/13th Installation/Ayathma .jpg',
      '/projects/13th Installation/Bimsara.jpg',
      '/projects/13th Installation/Charitha.jpg',
      '/projects/13th Installation/Deveen .jpg',
      '/projects/13th Installation/Dihini .jpg',
      '/projects/13th Installation/Dulaneth .jpg',
      '/projects/13th Installation/Gehan.jpg',
      '/projects/13th Installation/Hashini.jpg',
      '/projects/13th Installation/Maneesha .jpg',
      '/projects/13th Installation/Manvidu .jpg',
      '/projects/13th Installation/Menuja.jpg',
      '/projects/13th Installation/Mihika .jpg',
      '/projects/13th Installation/Minuka .jpg',
      '/projects/13th Installation/Pasindi.jpg',
      '/projects/13th Installation/Ryan.jpg',
      '/projects/13th Installation/Shehara .jpg',
      '/projects/13th Installation/Shufra .jpg',
      '/projects/13th Installation/Tihasha.jpg',
      '/projects/13th Installation/Yasath .jpg',
    ]
  },
  'apex': {
    title: 'Apex',
    category: 'Branding',
    year: '2024',
    role: 'Lead Designer',
    client: 'Apex',
    description: 'Complete brand identity and social media design strategy for Apex, focusing on a clean, professional, and impactful digital presence.',
    gallery: [
      '/projects/Apex/Apex.jpg',
      '/projects/Apex/1.jpg',
      '/projects/Apex/2.jpg',
      '/projects/Apex/3.jpg',
      '/projects/Apex/4.jpg',
      '/projects/Apex/070 555 1155.jpg',
    ]
  },
  'beauty-leaf': {
    title: 'Beauty Leaf',
    category: 'Print Design',
    year: '2023',
    role: 'Print Designer',
    client: 'Beauty Leaf',
    description: 'Medical and healthcare brochure designs that prioritize clear communication, professional typography, and a calming visual aesthetic.',
    gallery: [
      '/projects/Beauty Leaf/Teal and White Medical Trifold Brochure.jpg',
      '/projects/Beauty Leaf/1.jpg',
      '/projects/Beauty Leaf/2.jpg',
      '/projects/Beauty Leaf/4.jpg',
      '/projects/Beauty Leaf/5.jpg',
      '/projects/Beauty Leaf/6.jpg',
      '/projects/Beauty Leaf/7.jpg',
      '/projects/Beauty Leaf/8.jpg',
      '/projects/Beauty Leaf/9.jpg',
      '/projects/Beauty Leaf/10.jpg',
      '/projects/Beauty Leaf/11.jpg',
      '/projects/Beauty Leaf/12.jpg',
      '/projects/Beauty Leaf/13.jpg',
      '/projects/Beauty Leaf/14.jpg',
      '/projects/Beauty Leaf/15.jpg',
    ]
  },
  'edfoci': {
    title: 'Edfoci',
    category: 'Digital Design',
    year: '2024',
    role: 'Campaign Designer',
    client: 'Edfoci',
    description: 'A series of vibrant social media assets designed to drive engagement and communicate key marketing messages effectively.',
    gallery: [
      '/projects/Edfoci/1.jpg',
      '/projects/Edfoci/2.jpg',
      '/projects/Edfoci/3.jpg',
      '/projects/Edfoci/4.jpg',
      '/projects/Edfoci/5.jpg',
      '/projects/Edfoci/6.jpg',
      '/projects/Edfoci/7.jpg',
      '/projects/Edfoci/8.jpg',
      '/projects/Edfoci/9.jpg',
      '/projects/Edfoci/10.jpg',
      '/projects/Edfoci/11.jpg',
      '/projects/Edfoci/12.jpg',
    ]
  },
  'ezy-sim': {
    title: 'Ezy Sim',
    category: 'Marketing Design',
    year: '2024',
    role: 'Visual Designer',
    client: 'Ezy Sim',
    description: 'Promotional graphics and plan highlight creatives aimed at simplifying mobile connection plans and driving conversions.',
    gallery: [
      '/projects/Ezy Sim/1.jpg',
      '/projects/Ezy Sim/6.jpg',
      '/projects/Ezy Sim/BEAUTY 360.jpg',
      '/projects/Ezy Sim/Legend 12.jpg',
      '/projects/Ezy Sim/Sweet Plan.jpg',
      '/projects/Ezy Sim/Ultimate 12.jpg',
    ]
  },
  'food': {
    title: 'Food Campaigns',
    category: 'Social Media',
    year: '2024',
    role: 'Content Creator',
    client: 'Various',
    description: 'Mouth-watering daily special social media graphics designed to stimulate appetite and boost daily sales for local restaurants.',
    gallery: [
      '/projects/Food/monday special.jpg',
      '/projects/Food/tuesday special.jpg',
      '/projects/Food/wednesday special.jpg',
      '/projects/Food/Thursday special.jpg',
      '/projects/Food/friday special.jpg',
      '/projects/Food/saturday special.jpg',
      '/projects/Food/sunday special.jpg',
    ]
  },
  'mansion': {
    title: 'Mansion',
    category: 'Photography',
    year: '2024',
    role: 'Photographer',
    client: 'Mansion',
    description: 'High-end event photography capturing the opulent atmosphere and key moments of exclusive gatherings.',
    gallery: [
      '/projects/Mansion/34.jpg',
      '/projects/Mansion/37.jpg',
      '/projects/Mansion/38.jpg',
      '/projects/Mansion/39.jpg',
      '/projects/Mansion/40.jpg',
      '/projects/Mansion/41.jpg',
      '/projects/Mansion/42.jpg',
      '/projects/Mansion/43.jpg',
      '/projects/Mansion/44.jpg',
    ]
  },
  'mg-sl': {
    title: 'MG Sri Lanka',
    category: 'Digital Campaign',
    year: '2024',
    role: 'Digital Designer',
    client: 'MG Motors SL',
    description: 'Automotive social media campaigns focusing on the sleek design and modern features of MG vehicles for the Sri Lankan market.',
    gallery: [
      '/projects/MG SL/Hello Sri lanka.jpg',
      '/projects/MG SL/2.jpg',
      '/projects/MG SL/3.jpg',
      '/projects/MG SL/4.jpg',
      '/projects/MG SL/5.jpg',
    ]
  },
  'tech-ts': {
    title: 'Tech TS',
    category: 'UI/UX & Web',
    year: '2024',
    role: 'UI Designer',
    client: 'Tech TS',
    description: 'Clean, modern user interface designs focusing on usability, clear hierarchy, and a tech-forward aesthetic.',
    gallery: [
      '/projects/Tech TS/1.jpg',
      '/projects/Tech TS/2.jpg',
      '/projects/Tech TS/3.jpg',
      '/projects/Tech TS/4.jpg',
      '/projects/Tech TS/5.jpg',
      '/projects/Tech TS/6.jpg',
      '/projects/Tech TS/8.jpg',
    ]
  },
  'travelco': {
    title: 'Travelco',
    category: 'Branding & Digital',
    year: '2026',
    role: 'Research-Driven Designer',
    client: 'Travelco',
    description: 'A comprehensive branding and digital solution repositioning Travelco in the luxury travel market through research-backed design.',
    gallery: [
      '/projects/Travelco/1.jpg',
      '/projects/Travelco/2 (2).jpg',
      '/projects/Travelco/3.jpg',
      '/projects/Travelco/3 (2).jpg',
      '/projects/Travelco/4 (2).jpg',
      '/projects/Travelco/5.jpg',
      '/projects/Travelco/5 (2).jpg',
      '/projects/Travelco/6 (2).jpg',
      '/projects/Travelco/7.jpg',
      '/projects/Travelco/7 (2).jpg',
      '/projects/Travelco/8 (2).jpg',
      '/projects/Travelco/9.jpg',
      '/projects/Travelco/9 (2).jpg',
      '/projects/Travelco/10 (2).jpg',
      '/projects/Travelco/11.jpg',
      '/projects/Travelco/11 (2).jpg',
      '/projects/Travelco/13.jpg',
      '/projects/Travelco/15.jpg',
      '/projects/Travelco/16.jpg',
      '/projects/Travelco/19.jpg',
      '/projects/Travelco/20.jpg',
      '/projects/Travelco/21.jpg',
      '/projects/Travelco/23.jpg',
      '/projects/Travelco/25.jpg',
      '/projects/Travelco/26.jpg',
      '/projects/Travelco/29.jpg',
      '/projects/Travelco/30.jpg',
    ]
  },
  'youtube': {
    title: 'YouTube Thumbnails',
    category: 'Digital Content',
    year: '2024',
    role: 'Thumbnail Designer',
    client: 'Various Creators',
    description: 'High CTR YouTube thumbnails designed for the crypto and forex trading niches. Strong typography, high contrast, and compelling visual hooks.',
    gallery: [
      '/projects/Youtube Thumbnails/Binance Trading Bot@2x.png',
      '/projects/Youtube Thumbnails/Do this before trading@2x.png',
      '/projects/Youtube Thumbnails/Five Forex Brokers for beginners@2x.png',
      '/projects/Youtube Thumbnails/Five incredible Trading Bot@2x.png',
      '/projects/Youtube Thumbnails/Five Secrets to Trade better@2x.png',
      '/projects/Youtube Thumbnails/Forex Trading Courses for beginners@2x.png',
      '/projects/Youtube Thumbnails/Forex Trading Risk Management@2x.png',
      '/projects/Youtube Thumbnails/Forex Trading Tips for Intermediate Traders@2x.png',
      '/projects/Youtube Thumbnails/Forex tutorial for beginners@2x.png',
      '/projects/Youtube Thumbnails/Forex Trading new method@2x.png',
      '/projects/Youtube Thumbnails/Good Forex Brokers for Intermediate traders@2x.png',
      '/projects/Youtube Thumbnails/How to Copy Trade@2x.png',
      '/projects/Youtube Thumbnails/How to Trade Forex@2x.png',
      '/projects/Youtube Thumbnails/How to buy Crypto@2x.png',
      '/projects/Youtube Thumbnails/How to choose a good broker@2x.png',
      '/projects/Youtube Thumbnails/How to get free Signals@2x.png',
      '/projects/Youtube Thumbnails/How to use Trading Bot@2x.png',
      '/projects/Youtube Thumbnails/How to use signals@2x.png',
      '/projects/Youtube Thumbnails/Intermediate traders tutorial@2x.png',
      '/projects/Youtube Thumbnails/Meta force Tutorial@2x.png',
      '/projects/Youtube Thumbnails/Mistake beginner traders do@2x.png',
      '/projects/Youtube Thumbnails/Royal Q Bot@2x.png',
      '/projects/Youtube Thumbnails/The right Trading Broker@2x.png',
      '/projects/Youtube Thumbnails/Why you are not making profit@2x.png',
      '/projects/Youtube Thumbnails/Worst Forex Brokers@2x.png',
    ]
  }
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
