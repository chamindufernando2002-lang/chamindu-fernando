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
      "/projects/13th Installation/1.jpg",
      "/projects/13th Installation/Amasha .jpg",
      "/projects/13th Installation/Anuja.jpg",
      "/projects/13th Installation/Ayathma .jpg",
      "/projects/13th Installation/Bimsara.jpg",
      "/projects/13th Installation/Charitha.jpg",
      "/projects/13th Installation/Deveen .jpg",
      "/projects/13th Installation/Dihini .jpg",
      "/projects/13th Installation/Dulaneth .jpg",
      "/projects/13th Installation/Gehan.jpg",
      "/projects/13th Installation/Hashini.jpg",
      "/projects/13th Installation/Maneesha .jpg",
      "/projects/13th Installation/Manvidu .jpg",
      "/projects/13th Installation/Menuja.jpg",
      "/projects/13th Installation/Mihika .jpg",
      "/projects/13th Installation/Minuka .jpg",
      "/projects/13th Installation/Pasindi.jpg",
      "/projects/13th Installation/Ryan.jpg",
      "/projects/13th Installation/Shehara .jpg",
      "/projects/13th Installation/Shufra .jpg",
      "/projects/13th Installation/Tihasha.jpg",
      "/projects/13th Installation/Yasath .jpg"
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
      "/projects/Apex/070 555 1155.jpg",
      "/projects/Apex/1.jpg",
      "/projects/Apex/2.jpg",
      "/projects/Apex/3.jpg",
      "/projects/Apex/4.jpg",
      "/projects/Apex/5.jpg"
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
      "/projects/Beauty Leaf/1.jpg",
      "/projects/Beauty Leaf/10.jpg",
      "/projects/Beauty Leaf/11.jpg",
      "/projects/Beauty Leaf/12.jpg",
      "/projects/Beauty Leaf/13.jpg",
      "/projects/Beauty Leaf/14.jpg",
      "/projects/Beauty Leaf/15.jpg",
      "/projects/Beauty Leaf/2.jpg",
      "/projects/Beauty Leaf/4.jpg",
      "/projects/Beauty Leaf/5.jpg",
      "/projects/Beauty Leaf/6.jpg",
      "/projects/Beauty Leaf/7.jpg",
      "/projects/Beauty Leaf/8.jpg",
      "/projects/Beauty Leaf/9.jpg",
      "/projects/Beauty Leaf/Teal and White Medical Trifold Brochure.jpg"
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
      "/projects/Edfoci/1.jpg",
      "/projects/Edfoci/10.jpg",
      "/projects/Edfoci/11.jpg",
      "/projects/Edfoci/12.jpg",
      "/projects/Edfoci/2.jpg",
      "/projects/Edfoci/3.jpg",
      "/projects/Edfoci/4.jpg",
      "/projects/Edfoci/5.jpg",
      "/projects/Edfoci/6.jpg",
      "/projects/Edfoci/7.jpg",
      "/projects/Edfoci/8.jpg",
      "/projects/Edfoci/9.jpg"
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
      "/projects/Ezy Sim/1.jpg",
      "/projects/Ezy Sim/6.jpg",
      "/projects/Ezy Sim/BEAUTY 360.jpg",
      "/projects/Ezy Sim/Legend 12.jpg",
      "/projects/Ezy Sim/Sweet Plan.jpg",
      "/projects/Ezy Sim/Ultimate 12.jpg"
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
      "/projects/Food/1.jpg",
      "/projects/Food/friday special.jpg",
      "/projects/Food/monday special.jpg",
      "/projects/Food/sunday special.jpg",
      "/projects/Food/Thursday special.jpg",
      "/projects/Food/tuesday special.jpg",
      "/projects/Food/wednesday special.jpg"
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
      "/projects/Mansion/1.jpg",
      "/projects/Mansion/37.jpg",
      "/projects/Mansion/38.jpg",
      "/projects/Mansion/39.jpg",
      "/projects/Mansion/40.jpg",
      "/projects/Mansion/41.jpg",
      "/projects/Mansion/42.jpg",
      "/projects/Mansion/43.jpg",
      "/projects/Mansion/44.jpg"
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
      "/projects/MG SL/1.jpg",
      "/projects/MG SL/2.jpg",
      "/projects/MG SL/3.jpg",
      "/projects/MG SL/4.jpg",
      "/projects/MG SL/5.jpg"
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
      "/projects/Tech TS/1.jpg",
      "/projects/Tech TS/2.jpg",
      "/projects/Tech TS/3.jpg",
      "/projects/Tech TS/4.jpg",
      "/projects/Tech TS/5.jpg",
      "/projects/Tech TS/6.jpg",
      "/projects/Tech TS/8.jpg"
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
      "/projects/Travelco/1 (2).jpg",
      "/projects/Travelco/1.jpg",
      "/projects/Travelco/10 (2).jpg",
      "/projects/Travelco/11 (2).jpg",
      "/projects/Travelco/11.jpg",
      "/projects/Travelco/15.jpg",
      "/projects/Travelco/16.jpg",
      "/projects/Travelco/19.jpg",
      "/projects/Travelco/2 (2).jpg",
      "/projects/Travelco/20.jpg",
      "/projects/Travelco/21.jpg",
      "/projects/Travelco/23.jpg",
      "/projects/Travelco/25.jpg",
      "/projects/Travelco/26.jpg",
      "/projects/Travelco/29.jpg",
      "/projects/Travelco/3 (2).jpg",
      "/projects/Travelco/3.jpg",
      "/projects/Travelco/30.jpg",
      "/projects/Travelco/34.jpg",
      "/projects/Travelco/4 (2).jpg",
      "/projects/Travelco/5 (2).jpg",
      "/projects/Travelco/5.jpg",
      "/projects/Travelco/6 (2).jpg",
      "/projects/Travelco/7 (2).jpg",
      "/projects/Travelco/7.jpg",
      "/projects/Travelco/8 (2).jpg",
      "/projects/Travelco/9 (2).jpg",
      "/projects/Travelco/9.jpg"
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
      "/projects/Youtube Thumbnails/1.png",
      "/projects/Youtube Thumbnails/Binance Trading Bot2x.png",
      "/projects/Youtube Thumbnails/Do this before trading2x.png",
      "/projects/Youtube Thumbnails/Five Forex Brokers for beginners2x.png",
      "/projects/Youtube Thumbnails/Five incredible Trading Bot2x.png",
      "/projects/Youtube Thumbnails/Five Secrets to Trade better2x.png",
      "/projects/Youtube Thumbnails/Forex Trading Courses for beginners2x.png",
      "/projects/Youtube Thumbnails/Forex Trading new method2x.png",
      "/projects/Youtube Thumbnails/Forex Trading Risk Management2x.png",
      "/projects/Youtube Thumbnails/Forex Trading Tips for Intermediate Traders2x.png",
      "/projects/Youtube Thumbnails/Forex tutorial for beginners2x.png",
      "/projects/Youtube Thumbnails/Good Forex Brokers for Intermediate traders2x.png",
      "/projects/Youtube Thumbnails/How to buy Crypto2x.png",
      "/projects/Youtube Thumbnails/How to choose a good broker2x.png",
      "/projects/Youtube Thumbnails/How to Copy Trade2x.png",
      "/projects/Youtube Thumbnails/How to get free Signals2x.png",
      "/projects/Youtube Thumbnails/How to Trade Forex2x.png",
      "/projects/Youtube Thumbnails/How to use signals2x.png",
      "/projects/Youtube Thumbnails/How to use Trading Bot2x.png",
      "/projects/Youtube Thumbnails/Intermediate traders tutorial2x.png",
      "/projects/Youtube Thumbnails/Meta force Tutorial2x.png",
      "/projects/Youtube Thumbnails/Royal Q Bot2x.png",
      "/projects/Youtube Thumbnails/The right Trading Broker2x.png",
      "/projects/Youtube Thumbnails/Why you are not making profit2x.png",
      "/projects/Youtube Thumbnails/Worst Forex Brokers2x.png"
]
  },
  'rotaract': {
    title: 'Rotaract Projects',
    category: 'Community & Event',
    year: '2024-2025',
    role: 'Design Partner',
    client: 'Rotaract Clubs',
    description: 'A diverse collection of community and event-driven projects spanning different sub-categories.',
    gallery: {
      "Burn": [
            "/projects/Rotaract Projects/Burn/1 (5).jpg",
            "/projects/Rotaract Projects/Burn/5 (4).jpg",
            "/projects/Rotaract Projects/Burn/6 (5).jpg",
            "/projects/Rotaract Projects/Burn/7 (4).jpg",
            "/projects/Rotaract Projects/Burn/BURN COMING SOON (1056 x 816 px) (794 x 1123 px).jpg"
      ],
      "Other": [
            "/projects/Rotaract Projects/Other/1 (3).jpg",
            "/projects/Rotaract Projects/Other/1.jpg",
            "/projects/Rotaract Projects/Other/2 (2).jpg",
            "/projects/Rotaract Projects/Other/2 (4).jpg",
            "/projects/Rotaract Projects/Other/2.jpg",
            "/projects/Rotaract Projects/Other/2025 (2).jpg",
            "/projects/Rotaract Projects/Other/3 (3).jpg",
            "/projects/Rotaract Projects/Other/3.jpg",
            "/projects/Rotaract Projects/Other/4 (3).jpg",
            "/projects/Rotaract Projects/Other/5 (2).jpg",
            "/projects/Rotaract Projects/Other/5 (3).jpg",
            "/projects/Rotaract Projects/Other/6 (3).jpg",
            "/projects/Rotaract Projects/Other/6 (4).jpg",
            "/projects/Rotaract Projects/Other/7 (3).jpg",
            "/projects/Rotaract Projects/Other/8 (3).jpg",
            "/projects/Rotaract Projects/Other/Black White Brutalist New Team Member Your Story.jpg",
            "/projects/Rotaract Projects/Other/Exchange.jpg",
            "/projects/Rotaract Projects/Other/Siripa Sathkara register Now 2.jpg"
      ],
      "Rota Times — 2024": [
            "/projects/Rotaract Projects/Rota Times/2024/1 (2).jpg",
            "/projects/Rotaract Projects/Rota Times/2024/2 (5).jpg",
            "/projects/Rotaract Projects/Rota Times/2024/3 (2).jpg",
            "/projects/Rotaract Projects/Rota Times/2024/4 (2).jpg",
            "/projects/Rotaract Projects/Rota Times/2024/5.jpg",
            "/projects/Rotaract Projects/Rota Times/2024/6.jpg",
            "/projects/Rotaract Projects/Rota Times/2024/7 (2).jpg",
            "/projects/Rotaract Projects/Rota Times/2024/8 (2).jpg",
            "/projects/Rotaract Projects/Rota Times/2024/9.jpg"
      ],
      "Rota Times — 2025": [
            "/projects/Rotaract Projects/Rota Times/2025/January copy-8dsVqzBr.jpg",
            "/projects/Rotaract Projects/Rota Times/2025/February copy-C3CGI1aV.jpg",
            "/projects/Rotaract Projects/Rota Times/2025/March copy-Dy3Xy1t0.jpg",
            "/projects/Rotaract Projects/Rota Times/2025/April copy-Du1clO4e.jpg",
            "/projects/Rotaract Projects/Rota Times/2025/july-BSaOelRz.jpg",
            "/projects/Rotaract Projects/Rota Times/2025/August copy-C68sA8Jv.jpg",
            "/projects/Rotaract Projects/Rota Times/2025/September copy-BgzJ4npz.jpg",
            "/projects/Rotaract Projects/Rota Times/2025/October copy-BlJmdUga.jpg",
            "/projects/Rotaract Projects/Rota Times/2025/November copy-BL1Cnt5x.jpg",
            "/projects/Rotaract Projects/Rota Times/2025/December copy-CZOLP8YD.jpg",
            "/projects/Rotaract Projects/Rota Times/2025/The Rotaractor-B8yZbZXy.jpg"
      ],
      "Special Days": [
            "/projects/Rotaract Projects/Special Days/1 (4).jpg",
            "/projects/Rotaract Projects/Special Days/6 (2).jpg",
            "/projects/Rotaract Projects/Special Days/Copy of Charity Day.jpg",
            "/projects/Rotaract Projects/Special Days/Cute Colorful Happy World Teacher's Day Illustration Poster.jpg",
            "/projects/Rotaract Projects/Special Days/Green Illustrative Eid-Al-Adha Mubarak Instagram Post.jpg",
            "/projects/Rotaract Projects/Special Days/Happy Halloween.jpg",
            "/projects/Rotaract Projects/Special Days/HUMAN.png",
            "/projects/Rotaract Projects/Special Days/Subtitle.jpg",
            "/projects/Rotaract Projects/Special Days/Waisak Instagram Post.jpg",
            "/projects/Rotaract Projects/Special Days/Yellow Green Diwali Festival Light It Up Greetings Instagram Story (Instagram Post).jpg"
      ],
      "Yeh Jawaani Concert": [
            "/projects/Rotaract Projects/Yeh Jawaani Concert/10.jpg",
            "/projects/Rotaract Projects/Yeh Jawaani Concert/11.jpg",
            "/projects/Rotaract Projects/Yeh Jawaani Concert/13.jpg",
            "/projects/Rotaract Projects/Yeh Jawaani Concert/2 (3).jpg",
            "/projects/Rotaract Projects/Yeh Jawaani Concert/4.jpg",
            "/projects/Rotaract Projects/Yeh Jawaani Concert/7.jpg",
            "/projects/Rotaract Projects/Yeh Jawaani Concert/8.jpg",
            "/projects/Rotaract Projects/Yeh Jawaani Concert/Yeh Jawaani (Ticket).jpg"
      ]
}
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
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
