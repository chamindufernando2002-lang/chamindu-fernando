'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './Portfolio.css';

const projects = [
  {
    id: 'lumina',
    title: 'Lumina',
    description: 'A complete brand identity system.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nexus',
    title: 'Nexus',
    description: 'Dynamic motion graphic sequence.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'aurora',
    title: 'Aurora',
    description: 'Immersive 3D environment design.',
    imageUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'echo',
    title: 'Echo',
    description: 'Minimalist e-commerce interface.',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop'
  }
];

const Portfolio = () => {
  // Multiply the projects to guarantee a seamless infinitely scrolling track
  const marqueeProjects = [
    ...projects,
    ...projects,
    ...projects,
    ...projects,
    ...projects,
    ...projects
  ];

  /* ── Drag-to-scroll logic ───────────────────────────────────────── */
  const viewportRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasDragged = useRef(false); // Distinguish drag from click

  const onPointerDown = useCallback((e) => {
    if (!viewportRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX;
    scrollLeftStart.current = viewportRef.current.scrollLeft;
    viewportRef.current.classList.add('is-dragging');
    viewportRef.current.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!isDragging.current || !viewportRef.current) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 4) hasDragged.current = true;
    viewportRef.current.scrollLeft = scrollLeftStart.current - delta;
  }, []);

  const onPointerUp = useCallback(() => {
    if (!viewportRef.current) return;
    isDragging.current = false;
    viewportRef.current.classList.remove('is-dragging');
  }, []);

  const onClickCapture = useCallback((e) => {
    // Suppress link clicks that resulted from a drag
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  return (
    <section className="portfolio-section section" id="portfolio">
      <div className="container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="heading-font section-title">Recent Work</h2>
        </motion.div>
      </div>

      <motion.div 
        className="portfolio-marquee-viewport"
        ref={viewportRef}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onClickCapture={onClickCapture}
      >
        <div className="portfolio-marquee-track">
          {marqueeProjects.map((item, index) => (
            <div key={`${item.id}-${index}`} className="portfolio-slide">
              <Link href={`/project/${item.id}`} className="portfolio-link cursor-hover">
                <div className="portfolio-image-wrapper">
                  <img src={item.imageUrl} alt={item.title} loading="lazy" draggable="false" />
                  <div className="portfolio-slide-overlay">
                    <div className="portfolio-slide-content">
                      <h3 className="heading-font">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;

