'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Graphic Designer',
    company: 'Spa Ceylon Ayurveda Wellness',
    type: 'On-site',
    location: 'Sri Lanka',
    period: 'Jul 2025 – Present',
  },
  {
    id: 2,
    role: 'Graphic Designer',
    company: 'iTek Solutions',
    type: 'Part-time',
    location: 'Remote · Australia',
    period: 'Jan 2025 – Apr 2025',
  },
  {
    id: 3,
    role: 'Junior Graphic Designer',
    company: 'Ultimate Digital Solutions',
    type: 'Part-time',
    location: 'Remote',
    period: 'Dec 2023 – Mar 2024',
  },
  {
    id: 4,
    role: 'Co-Editor (2024–2025) · Digital Services Director (2023–2024)',
    company: 'Rotaract Club of KDU',
    type: 'Volunteer',
    location: '',
    period: '',
  },
  {
    id: 5,
    role: 'Web Coordinator',
    company: 'Student Research Forum (SRF)',
    type: 'Position',
    location: '',
    period: '',
  },
];

const Experience = () => {
  return (
    <section className="experience-section section" id="experience">
      <div className="container experience-wrapper">

        {/* ── Left: Section numeral ── */}
        <motion.div
          className="exp-numeral"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        >
          03
        </motion.div>

        {/* ── Right: Header + Timeline ── */}
        <div className="exp-content">

          {/* Header row: badge + title on same line */}
          <motion.div
            className="exp-header-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="badge-pill exp-badge">Career</span>
            <h2 className="heading-font exp-section-title">WORK EXPERIENCES</h2>
          </motion.div>

          {/* Timeline */}
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="timeline-item glass-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="timeline-icon">
                  <Briefcase size={18} className="text-accent" />
                </div>

                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="heading-font exp-role">{exp.role}</h3>
                    {exp.period && <span className="exp-period">{exp.period}</span>}
                  </div>
                  <h4 className="exp-company">{exp.company}</h4>
                  {(exp.type || exp.location) && (
                    <div className="exp-meta">
                      {exp.type && <span className="meta-item">{exp.type}</span>}
                      {exp.type && exp.location && <span className="meta-divider">•</span>}
                      {exp.location && <span className="meta-item">{exp.location}</span>}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
