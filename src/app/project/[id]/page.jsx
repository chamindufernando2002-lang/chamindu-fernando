'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import CustomCursor from '../../../components/UI/CustomCursor';
import '../../../pages/CaseStudy.css';

// ─── Project Database ─────────────────────────────────────────────────────────
const projectData = {
  'apex': {
    title: 'Apex',
    category: 'Branding',
    year: '2024',
    role: 'Lead Designer',
    client: 'Apex',
    description: 'Complete brand identity and social media design strategy for Apex, focusing on a clean, professional, and impactful digital presence.',
    gallery: [
      "/projects/Apex/070 555 1155.jpg",
      "/projects/Apex/1.jpg",
      "/projects/Apex/4.jpg",
      "/projects/Apex/Apex.jpg"
    ]
  },
  'beauty-bay': {
    title: 'Beauty Bay',
    category: 'Social Media',
    year: '2025',
    role: 'Social Media Designer',
    client: 'Beauty Bay',
    description: 'A vibrant social media and digital campaign designed to highlight skincare and cosmetic products with an elegant, modern aesthetic.',
    gallery: [
      "/projects/Beauty Bay/1.jpg",
      "/projects/Beauty Bay/15.jpg",
      "/projects/Beauty Bay/16.jpg",
      "/projects/Beauty Bay/2.jpg",
      "/projects/Beauty Bay/21.jpg",
      "/projects/Beauty Bay/26.jpg",
      "/projects/Beauty Bay/3.jpg",
      "/projects/Beauty Bay/40.jpg",
      "/projects/Beauty Bay/41.jpg",
      "/projects/Beauty Bay/52.jpg",
      "/projects/Beauty Bay/53.jpg",
      "/projects/Beauty Bay/6.jpg"
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
      "/projects/Beauty Leaf/10.jpg",
      "/projects/Beauty Leaf/11.jpg",
      "/projects/Beauty Leaf/2.jpg",
      "/projects/Beauty Leaf/5.jpg",
      "/projects/Beauty Leaf/7.jpg",
      "/projects/Beauty Leaf/8.jpg",
      "/projects/Beauty Leaf/Teal and White Medical Trifold Brochure.jpg"
    ]
  },
  'food': {
    title: 'Food Menu',
    category: 'Digital Design',
    year: '2024',
    role: 'Designer',
    client: 'Food Menu',
    description: 'A vibrant set of food menu designs outlining weekly specials for a local restaurant, utilizing warm tones to induce appetite and clear hierarchy for readability.',
    gallery: [
      "/projects/Food/friday special.jpg",
      "/projects/Food/monday special.jpg",
      "/projects/Food/saturday special.jpg",
      "/projects/Food/wednesday special.jpg"
    ]
  },
  'mg-sl': {
    title: 'MG SL',
    category: 'Automotive',
    year: '2025',
    role: 'Designer',
    client: 'MG SL',
    description: 'Digital and social media design for MG Sri Lanka focusing on the latest models, prioritizing a sleek, premium, and bold visual language.',
    gallery: [
      "/projects/MG SL/2.jpg",
      "/projects/MG SL/3.jpg",
      "/projects/MG SL/4.jpg",
      "/projects/MG SL/5.jpg",
      "/projects/MG SL/Hello Sri lanka.jpg"
    ]
  },
  'rota-times': {
    title: 'Rota Times',
    category: 'Editorial',
    year: '2024',
    role: 'Editorial Designer',
    client: 'Rotaract',
    description: 'Monthly editorial magazine designs featuring creative typographic covers and vibrant layouts that engage the youthful audience.',
    gallery: [
      "/projects/Rota Times/The Rotaractor-B8yZbZXy.jpg",
      "/projects/Rota Times/January copy-8dsVqzBr.jpg",
      "/projects/Rota Times/February copy-C3CGI1aV.jpg",
      "/projects/Rota Times/March copy-Dy3Xy1t0.jpg",
      "/projects/Rota Times/April copy-Du1clO4e.jpg",
      "/projects/Rota Times/july-BSaOelRz.jpg",
      "/projects/Rota Times/August copy-C68sA8Jv.jpg",
      "/projects/Rota Times/September copy-BgzJ4npz.jpg",
      "/projects/Rota Times/October copy-BlJmdUga.jpg",
      "/projects/Rota Times/November copy-BL1Cnt5x.jpg",
      "/projects/Rota Times/December copy-CZOLP8YD.jpg"
    ]
  },
  'tech-ts': {
    title: 'Tech TS',
    category: 'Branding',
    year: '2023',
    role: 'Brand Designer',
    client: 'Tech TS',
    description: 'A modern identity and marketing graphics design for a tech company, balancing professional trust with innovative visuals.',
    gallery: [
      "/projects/Tech TS/1.jpg",
      "/projects/Tech TS/5.jpg",
      "/projects/Tech TS/8.jpg"
    ]
  },
  'university-projects': {
    title: 'University Projects',
    category: 'Miscellaneous',
    year: '2024',
    role: 'Designer',
    client: 'University',
    description: 'A collection of varied creative works developed for university events, highlighting versatility across print, social media, and event branding.',
    gallery: [
      "/projects/University Projects/Exchange.jpg",
      "/projects/University Projects/1.jpg",
      "/projects/University Projects/1 (4).jpg",
      "/projects/University Projects/2 (2).jpg",
      "/projects/University Projects/2 (4).jpg",
      "/projects/University Projects/5 (2).jpg",
      "/projects/University Projects/6 (2).jpg",
      "/projects/University Projects/6 (3).jpg",
      "/projects/University Projects/6 (5).jpg",
      "/projects/University Projects/8.jpg"
    ]
  },
  'yeh-jawaani-concert': {
    title: 'Yeh Jawaani Concert',
    category: 'Event Design',
    year: '2025',
    role: 'Event Designer',
    client: 'Yeh Jawaani',
    description: 'Dynamic event design and promotional materials including ticketing and dynamic social media artwork for a high-energy concert.',
    gallery: [
      "/projects/Yeh Jawaani Concert/Yeh Jawaani (Ticket).jpg",
      "/projects/Yeh Jawaani Concert/7.jpg",
      "/projects/Yeh Jawaani Concert/8.jpg",
      "/projects/Yeh Jawaani Concert/10.jpg",
      "/projects/Yeh Jawaani Concert/11.jpg",
      "/projects/Yeh Jawaani Concert/13.jpg",
      "/projects/Yeh Jawaani Concert/2 (3).jpg",
      "/projects/Yeh Jawaani Concert/4.jpg"
    ]
  },
  'youtube-thumbnails': {
    title: 'Youtube Thumbnails',
    category: 'Digital Art',
    year: '2025',
    role: 'Thumbnail Designer',
    client: 'Various Creators',
    description: 'High-conversion YouTube thumbnails for trading and finance channels, optimized for click-through rate (CTR) with high contrast visuals and legible typography.',
    gallery: [
      "/projects/Youtube Thumbnails/Binance Trading Bot@2x.jpg",
      "/projects/Youtube Thumbnails/Do this before trading@2x.jpg",
      "/projects/Youtube Thumbnails/Five Forex Brokers for beginners@2x.jpg",
      "/projects/Youtube Thumbnails/Five Secrets to Trade better@2x.jpg",
      "/projects/Youtube Thumbnails/Five incredible Trading Bot@2x.jpg",
      "/projects/Youtube Thumbnails/Forex Trading Courses for beginners@2x.jpg",
      "/projects/Youtube Thumbnails/Forex Trading Risk Management@2x.jpg",
      "/projects/Youtube Thumbnails/Forex Trading Tips for Intermediate Traders@2x.jpg",
      "/projects/Youtube Thumbnails/Forex Trading new method@2x.jpg",
      "/projects/Youtube Thumbnails/How to Copy Trade@2x.jpg",
      "/projects/Youtube Thumbnails/How to buy Crypto@2x.jpg"
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
          loading="lazy"
          decoding="async"
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

  const isCategorized = !Array.isArray(project.gallery) && typeof project.gallery === 'object';
  const flatGallery = isCategorized ? Object.values(project.gallery).flat() : project.gallery;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(6);

  const loadMore = () => setVisibleImages(prev => prev + 6);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % flatGallery.length);
  };

  const goPrev = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? flatGallery.length - 1 : prev - 1));
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
  }, [lightboxOpen, lightboxIndex, flatGallery.length]);

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
      {flatGallery.length > 0 && (
        <section className="cs-gallery-section">
          <div className="container">
            {isCategorized ? (
              <div className="cs-categorized-gallery">
                {(() => {
                  let remaining = visibleImages;
                  let globalIndex = 0;
                  return Object.entries(project.gallery).map(([category, images]) => {
                    if (remaining <= 0) {
                        globalIndex += images.length;
                        return null;
                    }
                    const toShow = images.slice(0, remaining);
                    remaining -= toShow.length;
                    const categoryBaseIndex = globalIndex;
                    globalIndex += images.length;
                    
                    return (
                      <div key={category} className="cs-gallery-category">
                        <h2 className="heading-font cs-category-title" style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', color: 'var(--text-primary)' }}>{category}</h2>
                        <div className="cs-gallery-grid">
                          {toShow.map((src, idx) => (
                            <GalleryItem key={src} src={src} index={idx} alt={`${category} ${idx + 1}`} onClick={() => openLightbox(categoryBaseIndex + idx)} />
                          ))}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            ) : (
              <div className="cs-gallery-grid">
                {flatGallery.slice(0, visibleImages).map((src, index) => (
                  <GalleryItem
                    key={src}
                    src={src}
                    alt={`${project.title} — design ${index + 1}`}
                    index={index}
                    onClick={() => openLightbox(index)}
                  />
                ))}
              </div>
            )}
            
            {visibleImages < flatGallery.length && (
              <div className="cs-load-more" style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                 <button onClick={loadMore} className="load-more-btn cursor-hover" style={{
                   background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', 
                   padding: '12px 30px', borderRadius: '30px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px'
                 }}>Load More Images</button>
              </div>
            )}
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
                {lightboxIndex + 1} <span style={{ opacity: 0.5 }}>/ {flatGallery.length}</span>
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
                  src={flatGallery[lightboxIndex]}
                  alt={`${project.title} preview ${lightboxIndex + 1}`}
                  className="cs-lb-img"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
