import React from 'react';
import { motion } from 'framer-motion';
import { Palette, MonitorSmartphone, PenTool, Video } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    title: 'Brand Identity',
    description: 'Crafting unique visual systems that tell your brand’s story across all touchpoints.',
    icon: <Palette size={32} />
  },
  {
    title: 'Digital Design',
    description: 'Creating high-end web designs and user interfaces with a focus on experience.',
    icon: <MonitorSmartphone size={32} />
  },
  {
    title: 'Print & Poster',
    description: 'Combining strong typography and layout for impactful physical media.',
    icon: <PenTool size={32} />
  },
  {
    title: 'Motion Graphics',
    description: 'Bringing static designs to life with smooth, purposeful animations.',
    icon: <Video size={32} />
  }
];

const Services = () => {
  return (
    <section className="services-section section" id="services">
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="heading-font section-title">What I Do</h2>
        </motion.div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card cursor-hover"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="heading-font">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
