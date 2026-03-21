'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CustomCursor from '../../components/UI/CustomCursor';
import '../../pages/Work.css'; // Reused styles

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

export default function Work() {
  return (
    <motion.main
      className="work-page vertical"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CustomCursor />
      
      <div className="work-header container">
        <h1 className="heading-font">Selected Work</h1>
      </div>

      <div className="vertical-gallery-container container">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            className="vertical-gallery-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/project/${project.id}`} className="gallery-card cursor-hover">
              <div className="image-container">
                <img src={project.imageUrl} alt={project.title} loading="lazy" />
                <div className="gallery-overlay"></div>
              </div>
              <div className="gallery-info">
                <span className="gallery-category">{project.category}</span>
                <h2 className="heading-font gallery-title">{project.title}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="work-footer-spacer">
        <h2 className="heading-font">More coming soon.</h2>
      </div>

    </motion.main>
  );
}
