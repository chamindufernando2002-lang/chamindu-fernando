import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = ['Graphic Design', 'Branding', 'Social Media Design', 'Motion Graphics'];
  const tools = ['Photoshop', 'Illustrator', 'After Effects', 'Figma'];

  return (
    <section className="about-section section" id="about">
      <div className="container about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-font section-title">About Me</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I am a multidisciplinary visual storyteller focused on crafting compelling digital 
              experiences. With a foundation in traditional graphic design and an eye towards 
              the future of motion aesthetics, I help brands articulate their unique narrative 
              through striking visuals and precise typography.
            </p>
          </motion.div>

          <div className="about-cards">
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="heading-font">Expertise</h3>
              <ul className="pill-list">
                {skills.map(skill => (
                  <li key={skill} className="pill cursor-hover">{skill}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="heading-font">Toolkit</h3>
              <ul className="pill-list">
                {tools.map(tool => (
                  <li key={tool} className="pill cursor-hover">{tool}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
