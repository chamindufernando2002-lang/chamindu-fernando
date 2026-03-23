'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Statement.css';

const Statement = () => {
  // Staggered animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section className="statement-section section" id="statement">
      <div className="container">
        <motion.div 
          className="statement-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          <motion.span variants={childVariants} className="statement-word">IN</motion.span>
          <motion.span variants={childVariants} className="statement-word">A</motion.span>
          <motion.span variants={childVariants} className="statement-word">WORLD</motion.span>
          <motion.span variants={childVariants} className="statement-word">FILLED</motion.span>
          <motion.span variants={childVariants} className="statement-word">WITH</motion.span>
          <motion.span variants={childVariants} className="statement-word">GENERIC</motion.span>
          <motion.span variants={childVariants} className="statement-word">AI</motion.span>
          <motion.span variants={childVariants} className="statement-word">NOISE,</motion.span>
          
          <motion.span variants={childVariants} className="statement-inline-image">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2000&auto=format&fit=crop" alt="AI Generic representation" />
          </motion.span>
          
          <motion.span variants={childVariants} className="statement-word text-accent">I</motion.span>
          <motion.span variants={childVariants} className="statement-word">HELP</motion.span>
          <motion.span variants={childVariants} className="statement-word">BRANDS</motion.span>
          <motion.span variants={childVariants} className="statement-word">UNCOVER</motion.span>
          <motion.span variants={childVariants} className="statement-word">THEIR</motion.span>
          <motion.span variants={childVariants} className="statement-word">WHY</motion.span>
          <motion.span variants={childVariants} className="statement-word">AND</motion.span>
          <motion.span variants={childVariants} className="statement-word">SCALE</motion.span>
          <motion.span variants={childVariants} className="statement-word">IT</motion.span>
          <motion.span variants={childVariants} className="statement-word">WITH</motion.span>
          <motion.span variants={childVariants} className="statement-word">PURPOSE.</motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Statement;
