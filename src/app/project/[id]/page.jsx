'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import CustomCursor from '../../../components/UI/CustomCursor';
import '../../../pages/CaseStudy.css';

// ─── Project Database ─────────────────────────────────────────────────────────
const projectData = {
  'spa-ceylon': {
    title: 'Spa Ceylon',
    category: 'Social Media',
    year: '2025',
    role: 'Designer',
    client: 'Spa Ceylon',
    description: 'Wellness and social media interactive digital design focusing on natural beauty.',
    gallery: [
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.48 (1).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.48.jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.49 (1).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.49 (2).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.49 (3).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.49.jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.50 (1).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.50.jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.51 (1).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.51 (2).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.51 (3).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.51.jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.52 (1).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.52 (2).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.52.jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.53 (1).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.53.jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.54 (1).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.54.jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.55 (1).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.55 (2).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.55.jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.56 (1).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.56 (2).jpeg',
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.56.jpeg'
    ]
  },
  'tech-ts': {
    title: 'Tech TS',
    category: 'Branding',
    year: '2023',
    role: 'Brand Designer',
    client: 'Tech TS',
    description: 'Modern identity and marketing graphics design for a tech company, balancing professional trust with innovative visuals.',
    gallery: [
      '/projects/2.Tech TS/1.jpg',
      '/projects/2.Tech TS/5.jpg',
      '/projects/2.Tech TS/8.jpg'
    ]
  },
  'food': {
    title: 'Food Menu',
    category: 'Digital Design',
    year: '2024',
    role: 'Designer',
    client: 'Food Menu',
    description: 'Vibrant set of food menu designs outlining weekly specials for a local restaurant, utilizing warm tones to induce appetite.',
    gallery: [
      '/projects/3.Food/friday special.jpg',
      '/projects/3.Food/monday special.jpg',
      '/projects/3.Food/saturday special.jpg',
      '/projects/3.Food/wednesday special.jpg'
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
      '/projects/4.Beauty Leaf/10.jpg',
      '/projects/4.Beauty Leaf/11.jpg',
      '/projects/4.Beauty Leaf/2.jpg',
      '/projects/4.Beauty Leaf/5.jpg',
      '/projects/4.Beauty Leaf/7.jpg',
      '/projects/4.Beauty Leaf/8.jpg',
      '/projects/4.Beauty Leaf/Teal and White Medical Trifold Brochure.jpg'
    ]
  },
  'youtube-thumbnails': {
    title: 'Youtube Thumbnails',
    category: 'Digital Art',
    year: '2025',
    role: 'Thumbnail Designer',
    client: 'Various Creators',
    description: 'High-conversion YouTube thumbnails for trading and finance channels, optimized for click-through rate (CTR) with high contrast visuals.',
    gallery: [
      '/projects/5.Youtube Thumbnails/Binance Trading Bot@2x.jpg',
      '/projects/5.Youtube Thumbnails/Do this before trading@2x.jpg',
      '/projects/5.Youtube Thumbnails/Five Forex Brokers for beginners@2x.jpg',
      '/projects/5.Youtube Thumbnails/Five incredible Trading Bot@2x.jpg',
      '/projects/5.Youtube Thumbnails/Five Secrets to Trade better@2x.jpg',
      '/projects/5.Youtube Thumbnails/Forex Trading Courses for beginners@2x.jpg',
      '/projects/5.Youtube Thumbnails/Forex Trading new method@2x.jpg',
      '/projects/5.Youtube Thumbnails/Forex Trading Risk Management@2x.jpg',
      '/projects/5.Youtube Thumbnails/Forex Trading Tips for Intermediate Traders@2x.jpg',
      '/projects/5.Youtube Thumbnails/Forex tutorial for beginners@2x.jpg',
      '/projects/5.Youtube Thumbnails/Good Forex Brokers for Intermediate traders@2x.jpg',
      '/projects/5.Youtube Thumbnails/How to buy Crypto@2x.jpg',
      '/projects/5.Youtube Thumbnails/How to choose a good broker@2x.jpg',
      '/projects/5.Youtube Thumbnails/How to Copy Trade@2x.jpg',
      '/projects/5.Youtube Thumbnails/How to get free Signals@2x.jpg',
      '/projects/5.Youtube Thumbnails/How to Trade Forex@2x.jpg',
      '/projects/5.Youtube Thumbnails/How to use signals@2x.jpg',
      '/projects/5.Youtube Thumbnails/How to use Trading Bot@2x.jpg',
      '/projects/5.Youtube Thumbnails/Intermediate traders tutorial@2x.jpg',
      '/projects/5.Youtube Thumbnails/Meta force Tutorial@2x.jpg',
      '/projects/5.Youtube Thumbnails/Mistake beginner traders do@2x.jpg',
      '/projects/5.Youtube Thumbnails/Royal Q Bot@2x.jpg',
      '/projects/5.Youtube Thumbnails/The right Trading Broker@2x.jpg',
      '/projects/5.Youtube Thumbnails/Why you are not making profit@2x.jpg',
      '/projects/5.Youtube Thumbnails/Worst Forex Brokers@2x.jpg'
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
      { url: '/projects/6.Rota Times Newsletters/1.july.jpg', link: 'https://online.fliphtml5.com/zhboa/fdhg/#p=1' },
      { url: '/projects/6.Rota Times Newsletters/10.Final Magazine.jpg', link: 'https://jeethent.my.canva.site/the-rotaractor-4th-edition' },
      { url: '/projects/6.Rota Times Newsletters/2.August.jpg', link: 'https://online.fliphtml5.com/zhboa/qnyt/#p=1' },
      { url: '/projects/6.Rota Times Newsletters/3.September.jpg', link: 'https://online.fliphtml5.com/zhboa/uzrk/#p=1' },
      { url: '/projects/6.Rota Times Newsletters/4.October.jpg', link: 'https://online.fliphtml5.com/zhboa/plvx/#p=1' },
      { url: '/projects/6.Rota Times Newsletters/5.November.jpg', link: 'https://online.fliphtml5.com/zhboa/vefa/#p=1' },
      { url: '/projects/6.Rota Times Newsletters/6.December.jpg', link: 'https://online.fliphtml5.com/zhboa/wifm/#p=1' },
      { url: '/projects/6.Rota Times Newsletters/7.January.jpg', link: 'https://online.fliphtml5.com/zhboa/frgl/#p=1' },
      { url: '/projects/6.Rota Times Newsletters/8.February.jpg', link: 'https://online.fliphtml5.com/zhboa/vxem/#p=1' },
      { url: '/projects/6.Rota Times Newsletters/8.March.jpg', link: 'https://online.fliphtml5.com/zhboa/wvve/#p=1' },
      { url: '/projects/6.Rota Times Newsletters/9.April.jpg', link: 'https://online.fliphtml5.com/zhboa/wmps/#p=1' }
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
      '/projects/7.Yeh Jawaani Concert/10.jpg',
      '/projects/7.Yeh Jawaani Concert/11.jpg',
      '/projects/7.Yeh Jawaani Concert/13.jpg',
      '/projects/7.Yeh Jawaani Concert/2 (3).jpg',
      '/projects/7.Yeh Jawaani Concert/4.jpg',
      '/projects/7.Yeh Jawaani Concert/7.jpg',
      '/projects/7.Yeh Jawaani Concert/Yeh Jawaani (Ticket).jpg'
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
      '/projects/8.University Projects/1 (4).jpg',
      '/projects/8.University Projects/1.jpg',
      '/projects/8.University Projects/2 (2).jpg',
      '/projects/8.University Projects/2 (4).jpg',
      '/projects/8.University Projects/8.jpg',
      '/projects/8.University Projects/Coming Soon.jpg',
      '/projects/8.University Projects/Copy of Charity Day.jpg',
      '/projects/8.University Projects/Exchange.jpg',
      '/projects/8.University Projects/Green Illustrative Eid-Al-Adha Mubarak Instagram Post.jpg',
      '/projects/8.University Projects/Happy Halloween.jpg',
      '/projects/8.University Projects/Subtitle.jpg',
      '/projects/8.University Projects/Waisak Instagram Post.jpg'
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
      '/projects/9.MG SL/2.jpg',
      '/projects/9.MG SL/3.jpg',
      '/projects/9.MG SL/4.jpg',
      '/projects/9.MG SL/5.jpg',
      '/projects/9.MG SL/Hello Sri lanka.jpg'
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
      '/projects/10.Beauty Bay/1.jpg',
      '/projects/10.Beauty Bay/15.jpg',
      '/projects/10.Beauty Bay/16.jpg',
      '/projects/10.Beauty Bay/2.jpg',
      '/projects/10.Beauty Bay/21.jpg',
      '/projects/10.Beauty Bay/26.jpg',
      '/projects/10.Beauty Bay/3.jpg',
      '/projects/10.Beauty Bay/40.jpg',
      '/projects/10.Beauty Bay/41.jpg',
      '/projects/10.Beauty Bay/52.jpg',
      '/projects/10.Beauty Bay/53.jpg',
      '/projects/10.Beauty Bay/6.jpg'
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
      '/projects/11.Apex/070 555 1155.jpg',
      '/projects/11.Apex/1.jpg',
      '/projects/11.Apex/4.jpg',
      '/projects/11.Apex/Apex.jpg'
    ]
  },
};


// ─── Gallery Item ─────────────────────────────────────────────────────────────
const GalleryItem = ({ src, alt, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const isObj = typeof src === 'object' && src !== null;
  const imageSrc = isObj ? src.url : src;
  const outboundLink = isObj ? src.link : null;

  const handleClick = (e) => {
    if (outboundLink) {
      window.open(outboundLink, '_blank', 'noopener,noreferrer');
    } else {
      onClick(index);
    }
  };

  return (
    <motion.div
      className="cs-gallery-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <div className="cs-gallery-img-wrap">
        <motion.img
          src={imageSrc}
          alt={alt}
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
        <motion.div
          className="cs-gallery-overlay"
          animate={{ opacity: outboundLink ? 1 : (hovered ? 1 : 0) }}
          transition={{ duration: 0.3 }}
          style={outboundLink ? { background: 'transparent' } : {}}
        >
          {outboundLink ? (
             <div style={{ background: 'var(--accent-color)', color: '#fff', padding: '12px 28px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '0.5px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>Read Now &gt;</div>
          ) : (
             <ZoomIn size={32} color="#fff" strokeWidth={1.5} />
          )}
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

  useEffect(() => {
    // Force scroll to top on page mount
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

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
            <Link href="/work" className="cs-back cursor-hover">
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
                  src={typeof flatGallery[lightboxIndex] === 'object' ? flatGallery[lightboxIndex].url : flatGallery[lightboxIndex]}
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
