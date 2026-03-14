'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Apply a spring physics layer to the scroll progress so it feels incredibly smooth and premium, 
  // mirroring the heavy luxurious Lenis scroll.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'var(--accent-color)',
        transformOrigin: '0%',
        scaleX: scaleX,
        zIndex: 9999,
        boxShadow: '0 0 10px rgba(255, 94, 0, 0.5)'
      }}
    />
  );
};

export default ScrollProgress;
