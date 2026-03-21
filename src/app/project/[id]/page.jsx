'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
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
  // Read params for dynamic slug using React.use() unwrapping implicitly handled by layout
  // Note: in Nextjs 15+ we should awai the params, but doing it simply here.
  const resolvedParams = React.use(params);
  const id = resolvedParams.id;
  
  // Default to a fallback if project data not found
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
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <CustomCursor />
      
      <div className="case-study-hero">
        <div className="cs-hero-image">
          <motion.img 
            src={project.heroImage} 
            alt={project.title}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="cs-hero-overlay"></div>
        </div>
        
        <div className="container cs-hero-content">
          <Link href="/" className="back-link cursor-hover">
            <ArrowLeft size={20} />
            <span>Back to Work</span>
          </Link>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="cs-category">{project.category}</span>
            <h1 className="heading-font cs-title">{project.title}</h1>
          </motion.div>
        </div>
      </div>

      <div className="container cs-details section">
        <div className="cs-meta">
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">{project.role}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Year</span>
            <span className="meta-value">{project.year}</span>
          </div>
          {project.clientName && (
            <div className="meta-item">
              <span className="meta-label">Client</span>
              <span className="meta-value">{project.clientName}</span>
            </div>
          )}
        </div>

        <div className="cs-content-grid">
          {project.projectOverview && (
            <motion.div 
              className="cs-text-block cs-full-width"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-font">Project Overview</h2>
              <p>{project.projectOverview}</p>
            </motion.div>
          )}

          {project.problemStatement && (
            <motion.div 
              className="cs-text-block"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-font">Problem Statement</h2>
              <p>{project.problemStatement}</p>
            </motion.div>
          )}

          {project.researchMethodology && (
            <motion.div 
              className="cs-text-block"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="heading-font">Research & Methodology</h2>
              <p>{project.researchMethodology}</p>
            </motion.div>
          )}

          {project.designProcess && (
            <motion.div 
              className="cs-text-block"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="heading-font">Design Process</h2>
              <p>{project.designProcess}</p>
            </motion.div>
          )}

          {project.finalOutcome && (
            <motion.div 
              className="cs-text-block"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="heading-font">Final Outcome</h2>
              <p>{project.finalOutcome}</p>
            </motion.div>
          )}

          {project.concept && (
            <motion.div 
              className="cs-text-block"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-font">The Concept</h2>
              <p>{project.concept}</p>
            </motion.div>
          )}

          {project.process && (
            <motion.div 
              className="cs-text-block"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-font">The Process</h2>
              <p>{project.process}</p>
            </motion.div>
          )}
        </div>

        {project.gallery.length > 0 && (
          <div className="cs-gallery">
            {project.gallery.map((img, index) => (
              <motion.div 
                key={index} 
                className="cs-gallery-item"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.8 }}
              >
                <img src={img} alt={`${project.title} detailed shot ${index + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      <div className="next-project section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Link href="/" className="heading-font next-link cursor-hover">
            Discover More Work
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
