'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import CustomCursor from '../../components/UI/CustomCursor';
import '../../components/Sections/Portfolio/Portfolio.css'; // Reusing the list styling

const projects = [
  {
    id: 'travelco',
    title: 'Travelco Holdings',
    category: 'Research & Strategy',
    imageUrl: '/projects/Travelco/1.jpg'
  },
  {
    id: 'lumina',
    title: 'Lumina',
    category: 'Brand Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'nexus',
    title: 'Nexus',
    category: 'Motion Solutions',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'aurora',
    title: 'Aurora',
    category: '3D Research',
    imageUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'echo',
    title: 'Echo',
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop'
  }
];

const WorkListItem = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY - 150);
  };

  return (
    <motion.div 
      className="portfolio-row"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Link href={`/project/${project.id}`} className="portfolio-row-link cursor-hover">
        <h3 className="heading-font">{project.title}</h3>
        <span className="portfolio-row-meta">{project.category}</span>
      </Link>

      <motion.div
        className="portfolio-floating-image"
        style={{
          x: floatX,
          y: floatY,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
          pointerEvents: 'none'
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
      >
        <img src={project.imageUrl} alt={project.title} />
      </motion.div>
    </motion.div>
  );
};

export default function Work() {
  return (
    <motion.main
      className="work-page vertical"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ minHeight: '100vh', paddingTop: '15vh', position: 'relative' }}
    >
      <CustomCursor />
      
      <div className="container" style={{ marginBottom: '10vh' }}>
        <motion.h1 
          className="heading-font"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', textTransform: 'uppercase', color: 'var(--text-primary)' }}
        >
          Selected Work
        </motion.h1>
      </div>

      <div className="portfolio-list" style={{ paddingBottom: '15vh' }}>
        {projects.map((project, idx) => (
          <WorkListItem key={idx} project={project} index={idx} />
        ))}
      </div>
      
      <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid var(--border-color)', position: 'relative', zIndex: 10 }}>
        <h2 className="heading-font" style={{ fontSize: '2rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>More coming soon.</h2>
      </div>
    </motion.main>
  );
}
