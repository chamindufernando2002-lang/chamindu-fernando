'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Play, Volume2, VolumeX, ExternalLink } from 'lucide-react';
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
    color: '#c8a97e',
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
      '/projects/1.Spa Ceylon/WhatsApp Image 2026-04-11 at 20.23.56.jpeg',
    ],
  },
  'tech-ts': {
    title: 'Tech TS',
    category: 'Branding',
    year: '2023',
    role: 'Brand Designer',
    client: 'Tech TS',
    color: '#4a90d9',
    description: 'Modern identity and marketing graphics design for a tech company, balancing professional trust with innovative visuals.',
    gallery: [
      '/projects/2.Tech TS/1.jpg',
      '/projects/2.Tech TS/5.jpg',
      '/projects/2.Tech TS/8.jpg',
    ],
  },
  'wassane': {
    title: 'Wassane',
    category: 'Event Design',
    year: '2025',
    role: 'Designer',
    client: 'Wassane',
    color: '#e8a0c8',
    description: 'Digital promotional design and branding collateral for the Wassane event, prioritizing engaging social media assets.',
    gallery: [
      '/projects/3.Wassane/WhatsApp Image 2026-04-11 at 23.47.42 (1).jpeg',
      '/projects/3.Wassane/WhatsApp Image 2026-04-11 at 23.47.42 (2).jpeg',
    ],
  },
  'food': {
    title: 'Food Menu',
    category: 'Digital Design',
    year: '2024',
    role: 'Designer',
    client: 'Food Menu',
    color: '#e8943a',
    description: 'Vibrant set of food menu designs outlining weekly specials for a local restaurant, utilizing warm tones to induce appetite.',
    gallery: [
      '/projects/3.Food/friday special.jpg',
      '/projects/3.Food/monday special.jpg',
      '/projects/3.Food/saturday special.jpg',
      '/projects/3.Food/wednesday special.jpg',
    ],
  },
  'beauty-leaf': {
    title: 'Beauty Leaf',
    category: 'Print Design',
    year: '2023',
    role: 'Print Designer',
    client: 'Beauty Leaf',
    color: '#7ec8a0',
    description: 'Medical and healthcare brochure designs that prioritize clear communication, professional typography, and a calming visual aesthetic.',
    gallery: [
      '/projects/4.Beauty Leaf/10.jpg',
      '/projects/4.Beauty Leaf/11.jpg',
      '/projects/4.Beauty Leaf/2.jpg',
      '/projects/4.Beauty Leaf/5.jpg',
      '/projects/4.Beauty Leaf/7.jpg',
      '/projects/4.Beauty Leaf/8.jpg',
      '/projects/4.Beauty Leaf/Teal and White Medical Trifold Brochure.jpg',
    ],
  },
  'youtube-thumbnails': {
    title: 'Youtube Thumbnails',
    category: 'Digital Art',
    year: '2025',
    role: 'Thumbnail Designer',
    client: 'Various Creators',
    color: '#ff4500',
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
      '/projects/5.Youtube Thumbnails/Worst Forex Brokers@2x.jpg',
    ],
  },
  'rota-times': {
    title: 'Rota Times',
    category: 'Editorial',
    year: '2024',
    role: 'Editorial Designer',
    client: 'Rotaract',
    color: '#9b59b6',
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
      { url: '/projects/6.Rota Times Newsletters/9.April.jpg', link: 'https://online.fliphtml5.com/zhboa/wmps/#p=1' },
    ],
  },
  'yeh-jawaani-concert': {
    title: 'Yeh Jawaani Concert',
    category: 'Event Design',
    year: '2025',
    role: 'Event Designer',
    client: 'Yeh Jawaani',
    color: '#e74c3c',
    description: 'Dynamic event design and promotional materials including ticketing and dynamic social media artwork for a high-energy concert.',
    gallery: [
      '/projects/7.Yeh Jawaani Concert/10.jpg',
      '/projects/7.Yeh Jawaani Concert/11.jpg',
      '/projects/7.Yeh Jawaani Concert/13.jpg',
      '/projects/7.Yeh Jawaani Concert/2 (3).jpg',
      '/projects/7.Yeh Jawaani Concert/4.jpg',
      '/projects/7.Yeh Jawaani Concert/7.jpg',
      '/projects/7.Yeh Jawaani Concert/Yeh Jawaani (Ticket).jpg',
    ],
  },
  'university-projects': {
    title: 'University Projects',
    category: 'Miscellaneous',
    year: '2024',
    role: 'Designer',
    client: 'University',
    color: '#3498db',
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
      '/projects/8.University Projects/Waisak Instagram Post.jpg',
    ],
  },
  'mg-sl': {
    title: 'MG SL',
    category: 'Automotive',
    year: '2025',
    role: 'Designer',
    client: 'MG SL',
    color: '#e74c3c',
    description: 'Digital and social media design for MG Sri Lanka focusing on the latest models, prioritizing a sleek, premium, and bold visual language.',
    gallery: [
      '/projects/9.MG SL/2.jpg',
      '/projects/9.MG SL/3.jpg',
      '/projects/9.MG SL/4.jpg',
      '/projects/9.MG SL/5.jpg',
      '/projects/9.MG SL/Hello Sri lanka.jpg',
    ],
  },
  'beauty-bay': {
    title: 'Beauty Bay',
    category: 'Social Media',
    year: '2025',
    role: 'Social Media Designer',
    client: 'Beauty Bay',
    color: '#e91e8c',
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
      '/projects/10.Beauty Bay/6.jpg',
    ],
  },
  'apex': {
    title: 'Apex',
    category: 'Branding',
    year: '2024',
    role: 'Lead Designer',
    client: 'Apex',
    color: '#f39c12',
    description: 'Complete brand identity and social media design strategy for Apex, focusing on a clean, professional, and impactful digital presence.',
    gallery: [
      '/projects/11.Apex/070 555 1155.jpg',
      '/projects/11.Apex/1.jpg',
      '/projects/11.Apex/4.jpg',
      '/projects/11.Apex/Apex.jpg',
    ],
  },
  'motions-videos': {
    title: 'Motions & Videos',
    category: 'Motion Design',
    year: '2025',
    role: 'Motion Designer',
    client: 'Various',
    color: '#ff4500',
    description: 'A collection of motion graphics, animated content, and video productions crafted to elevate brand storytelling through dynamic visual movement.',
    isVideoProject: true,
    gallery: [
      { type: 'video', url: '/projects/12.Motions & Videos/1.mp4' },
      { type: 'video', url: '/projects/12.Motions & Videos/2.mp4' },
      { type: 'video', url: '/projects/12.Motions & Videos/3.mp4' },
      { type: 'video', url: '/projects/12.Motions & Videos/4.mp4' },
      { type: 'video', url: '/projects/12.Motions & Videos/1.25.mp4' },
    ],
  },
};

// ─── Video Gallery Item ───────────────────────────────────────────────────────
const VideoItem = ({ src, index, onClick }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered]);

  return (
    <motion.div
      className="cs-gallery-item cs-video-item"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="cs-gallery-img-wrap" style={{ aspectRatio: '16/9', cursor: 'pointer' }} onClick={() => onClick(index)}>
        <video
          ref={videoRef}
          src={src}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <motion.div
          className="cs-gallery-overlay"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Play size={22} color="#fff" fill="#fff" />
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setMuted(m => !m); }}
              style={{
                background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '20px', color: '#fff', padding: '4px 12px',
                fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px',
                cursor: 'pointer'
              }}
            >
              {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
              {muted ? 'Unmute' : 'Mute'}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Gallery Item ─────────────────────────────────────────────────────────────
const GalleryItem = ({ src, alt, index, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const isObj = typeof src === 'object' && src !== null;
  const isVideo = isObj && src.type === 'video';
  if (isVideo) return <VideoItem src={src.url} index={index} onClick={onClick} />;

  const imageSrc = isObj ? src.url : src;
  const outboundLink = isObj ? src.link : null;

  const handleClick = () => {
    if (outboundLink) window.open(outboundLink, '_blank', 'noopener,noreferrer');
    else onClick(index);
  };

  return (
    <motion.div
      className="cs-gallery-item"
      initial={{ opacity: 0, y: 40 }}
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
          style={outboundLink ? {
            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 80%)',
            alignItems: 'flex-end',
            paddingBottom: '2rem',
          } : {}}
        >
          {outboundLink ? (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'var(--accent-color)', color: '#fff',
              padding: '10px 24px', borderRadius: '30px',
              fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.5px',
            }}>
              <ExternalLink size={14} /> Read Now
            </div>
          ) : (
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Lightbox Video Player ────────────────────────────────────────────────────
const LightboxVideo = ({ src }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, [src]);

  return (
    <div style={{ position: 'relative', display: 'inline-block', maxWidth: '100%', maxHeight: 'calc(100vh - 10rem)' }}>
      <video
        ref={videoRef}
        src={src}
        controls
        muted={muted}
        loop
        playsInline
        style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 10rem)', borderRadius: 8, boxShadow: '0 30px 80px rgba(0,0,0,0.7)' }}
      />
      <button
        onClick={() => setMuted(m => !m)}
        style={{
          position: 'absolute', top: 12, right: 12,
          background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%', width: 36, height: 36,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', cursor: 'pointer',
        }}
      >
        {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </button>
    </div>
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
    color: '#ff4500',
    description: 'Detailed case study documentation is currently being compiled for this project.',
    gallery: [],
  };

  const flatGallery = Array.isArray(project.gallery) ? project.gallery : [];
  const accentColor = project.color || 'var(--accent-color)';

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(9);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const loadMore = () => setVisibleImages(prev => prev + 9);
  const openLightbox = (index) => { setLightboxIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }, []);

  const goNext = (e) => { if (e) e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % flatGallery.length); };
  const goPrev = (e) => { if (e) e.stopPropagation(); setLightboxIndex((prev) => (prev === 0 ? flatGallery.length - 1 : prev - 1)); };

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

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  const heroIsVideo = false;
  const heroSrc = "/Web banner - Mobile.jpg";

  return (
    <motion.main
      className="cs-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <CustomCursor />

      {/* ─── CINEMATIC HERO ─────────────────────────────────── */}
      <section ref={heroRef} className="cs-cinematic-hero">
        {/* Parallax background */}
        <motion.div className="cs-hero-bg" style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}>
          {heroSrc && (
            heroIsVideo ? (
              <motion.video 
                src={heroSrc} 
                autoPlay 
                muted 
                loop 
                playsInline 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
            ) : (
              <motion.img 
                src={heroSrc} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
            )
          )}
          <div className="cs-hero-bg-overlay" style={{ background: `linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.98) 100%)` }} />
        </motion.div>

        {/* Hero content */}
        <div className="cs-hero-inner container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/work" className="cs-back cursor-hover">
              <ArrowLeft size={16} />
              <span>Back to Work</span>
            </Link>
          </motion.div>

          <div className="cs-hero-bottom">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            >
              <motion.span
                className="cs-category-badge"
                style={{ background: `${accentColor}22`, color: accentColor, borderColor: `${accentColor}44` }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {project.category}
              </motion.span>
              <h1 className="heading-font cs-title">{project.title}</h1>
            </motion.div>

            {/* Meta strip */}
            <motion.div
              className="cs-meta-strip"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
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
              <div className="cs-meta-divider" />
              <div className="cs-meta-item">
                <span className="cs-meta-label">Works</span>
                <span className="cs-meta-value">{flatGallery.length}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="cs-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="cs-scroll-line" />
          <span>Scroll to explore</span>
        </motion.div>
      </section>

      {/* ─── DESCRIPTION BAND ───────────────────────────────── */}
      <section className="cs-desc-band">
        <div className="container cs-desc-inner">
          <motion.p
            className="cs-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            {project.description}
          </motion.p>
          <motion.div
            className="cs-desc-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            style={{ background: accentColor }}
          />
        </div>
      </section>

      {/* ─── GALLERY ────────────────────────────────────────── */}
      {flatGallery.length > 0 && (
        <section className="cs-gallery-section">
          <div className="container">
            <div className="cs-gallery-masonry">
              {flatGallery.slice(0, visibleImages).map((src, index) => (
                <GalleryItem
                  key={index}
                  src={src}
                  alt={`${project.title} — ${index + 1}`}
                  index={index}
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>

            {visibleImages < flatGallery.length && (
              <motion.div
                className="cs-load-more"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <button onClick={loadMore} className="cs-load-btn cursor-hover">
                  <span>Load More</span>
                  <span style={{ opacity: 0.5, fontSize: '0.8rem' }}>
                    {flatGallery.length - visibleImages} remaining
                  </span>
                </button>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* ─── OTHER WORK ─────────────────────────────────────── */}
      <section className="cs-other-work">
        <div className="container">
          <div className="cs-ow-header">
            <span className="cs-ow-label">Other Work</span>
            <Link href="/work" className="cs-ow-view-all cursor-hover">View All ↗</Link>
          </div>
          <div className="cs-ow-list">
            {Object.entries(projectData)
              .filter(([key]) => key !== id)
              .slice(0, 4)
              .map(([key, p], idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                >
                  <Link href={`/project/${key}`} className="cs-ow-item cursor-hover">
                    <div className="cs-ow-item-left">
                      <span className="cs-ow-num">0{idx + 1}</span>
                      <h3 className="heading-font cs-ow-title">{p.title}</h3>
                    </div>
                    <div className="cs-ow-item-right">
                      <span className="cs-ow-cat">{p.category}</span>
                      <span className="cs-ow-arrow">↗</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─────────────────────────────────────── */}
      <section className="cs-bottom">
        <div className="container cs-bottom-inner">
          <Link href="/work" className="cs-bottom-link cursor-hover">
            <span className="heading-font">Discover More Work</span>
            <span className="cs-bottom-arrow">↗</span>
          </Link>
        </div>
      </section>

      {/* ─── LIGHTBOX ───────────────────────────────────────── */}
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
            <div className="cs-lb-toolbar" onClick={(e) => e.stopPropagation()}>
              <span className="cs-lb-counter">
                {lightboxIndex + 1} <span style={{ opacity: 0.4 }}>/ {flatGallery.length}</span>
              </span>
              <button className="cs-lb-close cursor-hover" onClick={closeLightbox}>
                <X size={22} />
              </button>
            </div>

            <button className="cs-lb-nav cs-lb-prev cursor-hover" onClick={goPrev}>
              <ChevronLeft size={32} />
            </button>
            <button className="cs-lb-nav cs-lb-next cursor-hover" onClick={goNext}>
              <ChevronRight size={32} />
            </button>

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
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {(() => {
                    const item = flatGallery[lightboxIndex];
                    const isVid = item && typeof item === 'object' && item.type === 'video';
                    if (isVid) return <LightboxVideo src={item.url} />;
                    const imgSrc = typeof item === 'object' ? item.url : item;
                    return (
                      <img
                        src={imgSrc}
                        alt={`${project.title} preview ${lightboxIndex + 1}`}
                        className="cs-lb-img"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
