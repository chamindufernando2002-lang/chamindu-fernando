'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Services.css';

const expertiseList = [
  { title: 'BRAND STRATEGY', image: '/projects/Travelco/1.jpg' },
  { title: 'CREATIVE DIRECTION', image: '/projects/Travelco/3.jpg' },
  { title: 'UI/UX DESIGN', image: '/projects/Travelco/7.jpg' },
  { title: 'MOTION GRAPHICS', image: '/projects/Travelco/11.jpg' }
];

const ExpertiseItem = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <motion.div 
      className="expertise-row"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="expertise-content">
        <h3 className="heading-font expertise-title">{item.title}</h3>
      </div>
      
      {/* Hover Floating Banner Image */}
      <motion.div 
        className="expertise-floating-banner"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.8,
          x: "-50%",
          y: "-50%"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          left: floatX,
          top: floatY,
        }}
      >
        <img src={item.image} alt={item.title} />
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  // Disabling the floating image effect on mobile for better UX
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="expertise-section section" id="services">
      <div className="container expertise-container">
        <motion.div 
          className="expertise-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="heading-font section-title" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 900, marginBottom: '2rem' }}>SERVICES.</h2>
        </motion.div>

        <div className="expertise-list">
          {expertiseList.map((item, index) => (
            <ExpertiseItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
