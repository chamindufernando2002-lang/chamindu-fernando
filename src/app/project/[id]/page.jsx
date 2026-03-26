'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight } from 'lucide-react';
import CustomCursor from '../../../components/UI/CustomCursor';
import '../../../pages/CaseStudy.css';

// Using mock data map for the portfolio deep dive
const projectData = {
  'travelco': {
    title: 'Travelco Holdings',
    category: 'Research & Strategy',
    year: '2026',
    role: 'Research-Driven Designer',
    clientName: 'Travelco',
    projectOverview: 'A comprehensive branding and digital solution aimed at repositioning Travelco in a highly competitive luxury market.',
    problemStatement: 'Travelco lacked a cohesive brand system and a research-backed digital presence, leading to user drop-offs and lower engagement.',
    researchMethodology: 'We conducted extensive user research, market analysis, and A/B testing to uncover friction points in the customer journey and establish a strong foundation.',
    designProcess: 'Based on our findings, we wireframed and prototyped a completely new user flow, backed by a premium design system that communicates luxury and trust.',
    finalOutcome: 'A 45% increase in user retention and a highly successful brand relaunch that solidified Travelco\'s luxury market position.',
    heroImage: '/projects/Travelco/1.jpg',
    gallery: [
      '/projects/Travelco/3.jpg',
      '/projects/Travelco/7.jpg',
      '/projects/Travelco/11.jpg',
      '/projects/Travelco/15.jpg',
      '/projects/Travelco/23.jpg',
      '/projects/Travelco/25.jpg'
    ]
  },
  'lumina': {
    title: 'Lumina Branding',
    category: 'Brand Identity',
    year: '2025',
    role: 'Lead Designer',
    concept: 'Lumina is a next-gen smart lighting system that required a brand identity as adaptive and pure as light itself. The goal was to create a visual language that feels premium, modern, and highly technical while remaining accessible.',
    process: 'We developed a variable logo system that expands and contracts based on the application, mimicking the behavior of a light source. The color palette relies heavily on stark contrasts—deep space blacks paired with sheer electric whites and neon hints.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  'nexus': {
    title: 'Nexus Motion',
    category: 'Motion Graphics',
    year: '2026',
    role: 'Animator / Designer',
    concept: 'A conceptual exploration of interconnected data streams visualized through dynamic 3D typography and fluid motion sequences.',
    process: 'Utilizing Cinema 4D and After Effects, we mapped data points to typographic tracking parameters, creating a living text ecosystem that pulses with neon orange energy on stark black backgrounds.',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
    ]
  }
};

export default function CaseStudy({ params }) {
  const resolvedParams = React.use(params);
  const id = resolvedParams.id;
  const carouselRef = useRef(null);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setZoom(1);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => setLightboxOpen(false);

  const zoomIn = (e) => { e.stopPropagation(); setZoom(prev => Math.min(prev + 0.5, 3)); };
  const zoomOut = (e) => { e.stopPropagation(); setZoom(prev => Math.max(prev - 0.5, 1)); };

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex(prev => (prev + 1) % project.gallery.length);
    setZoom(1);
  };
  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex(prev => (prev === 0 ? project.gallery.length - 1 : prev - 1));
    setZoom(1);
  };

  // Handle Drag gesture in Lightbox
  const handleDragEnd = (e, { offset, velocity }) => {
    e.stopPropagation();
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -100) {
      nextSlide();
    } else if (swipe > 100) {
      prevSlide();
    }
  };
  
  const project = projectData[id] || {
    title: `Project ${id}`,
    category: 'Concept Design',
    year: '2026',
    role: 'Designer',
    concept: 'Detailed case study documentation is currently being compiled for this project.',
    process: 'Design process mapping and visual assets will be available here soon.',
    heroImage: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2000&auto=format&fit=crop',
    gallery: []
  };

  return (
    <motion.main
      className="case-study-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <CustomCursor />
      
      <div className="case-study-hero">
        <div className="cs-hero-image">
          <motion.img 
            src={project.heroImage} 
            alt={project.title}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          />
          <div className="cs-hero-overlay"></div>
        </div>
        
        <div className="container cs-hero-content">
          <Link href="/#portfolio" className="back-link cursor-hover">
            <ArrowLeft size={20} />
            <span>Back to Work</span>
          </Link>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="cs-category">{project.category}</span>
            <h1 className="heading-font cs-title" style={{ fontWeight: 900 }}>{project.title}</h1>
          </motion.div>
        </div>
      </div>

      <div className="cs-details-section section">
        <div className="container">
          {/* OVERVIEW SECTION - Matching Image 2 */}
          <motion.div 
            className="cs-overview-layout glass-effect"
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '100px' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="cs-overview-label-col">
              <span className="cs-overview-label">OVERVIEW</span>
            </div>
            <div className="cs-overview-content-col">
              <h2 className="cs-overview-text">
                {project.projectOverview || project.concept}
              </h2>
              <div className="cs-overview-subtext-group">
                {project.problemStatement && <p>{project.problemStatement}</p>}
                {project.researchMethodology && <p>{project.researchMethodology}</p>}
                {project.designProcess && <p>{project.designProcess}</p>}
                {project.process && <p>{project.process}</p>}
                {project.finalOutcome && <p>{project.finalOutcome}</p>}
              </div>
            </div>
          </motion.div>

          {/* META SECTION - Matching Image 2 */}
          <motion.div 
            className="cs-modern-meta glass-effect"
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            {(project.clientName || project.title) && (
              <div className="modern-meta-row">
                <span className="modern-meta-label">CLIENT</span>
                <span className="modern-meta-value">{project.clientName || project.title}</span>
              </div>
            )}
            <div className="modern-meta-row">
              <span className="modern-meta-label">DATE</span>
              <span className="modern-meta-value">{project.year}</span>
            </div>
            <div className="modern-meta-row">
              <span className="modern-meta-label">SERVICE</span>
              <span className="modern-meta-value">{project.category}</span>
            </div>
          </motion.div>
        </div>

        {/* DRAGGABLE GALLERY - Matching Image 1 */}
        {project.gallery.length > 0 && (
          <motion.div 
            className="cs-gallery-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '100px' }}
            transition={{ duration: 1 }}
          >
            <div className="cs-gallery-wrapper" ref={carouselRef}>
              <motion.div 
                className="cs-draggable-track cursor-hover"
                drag="x"
                dragConstraints={carouselRef}
                whileTap={{ cursor: "grabbing" }}
              >
                {project.gallery.map((img, index) => (
                  <motion.div 
                    key={index} 
                    className="cs-draggable-item"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '200px' }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                    onClick={() => openLightbox(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={img} alt={`${project.title} detail ${index + 1}`} draggable="false" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
      
      <div className="next-project section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Link href="/#portfolio" className="heading-font next-link cursor-hover">
            Discover More Work
          </Link>
        </div>
      </div>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            className="cs-lightbox-overlay"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(15px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            onClick={closeLightbox}
          >
            <div className="cs-lightbox-toolbar" onClick={e => e.stopPropagation()}>
              <div className="cs-lightbox-controls">
                <button onClick={zoomOut} className="cs-lightbox-btn"><ZoomOut size={24} /></button>
                <span className="cs-lightbox-zoom-text">{Math.round(zoom * 100)}%</span>
                <button onClick={zoomIn} className="cs-lightbox-btn"><ZoomIn size={24} /></button>
              </div>
              <button onClick={closeLightbox} className="cs-lightbox-btn cs-lightbox-close"><X size={28} /></button>
            </div>

            <button onClick={prevSlide} className="cs-lightbox-nav cs-lightbox-prev" onClickCapture={e => e.stopPropagation()}>
              <ChevronLeft size={40} />
            </button>
            <button onClick={nextSlide} className="cs-lightbox-nav cs-lightbox-next" onClickCapture={e => e.stopPropagation()}>
              <ChevronRight size={40} />
            </button>

            <motion.div 
              className="cs-lightbox-content"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={handleDragEnd}
              onClick={e => e.stopPropagation()}
            >
              <motion.img 
                key={lightboxIndex}
                src={project.gallery[lightboxIndex]}
                alt={`Lightbox image ${lightboxIndex + 1}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: zoom, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                style={{ cursor: zoom > 1 ? 'grab' : 'auto' }}
                drag={zoom > 1 ? true : false}
              />
            </motion.div>
            
            <div className="cs-lightbox-counter" onClick={e => e.stopPropagation()}>
              {lightboxIndex + 1} / {project.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
