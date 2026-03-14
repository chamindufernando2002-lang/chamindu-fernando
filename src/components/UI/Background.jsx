'use client';

import React, { useEffect, useRef } from 'react';
import './Background.css';
import CursorParticles from './CursorParticles';

const Background = () => {
  const interactiveGlow = useRef(null);
  const requestRef = useRef();

  // Store target and current coords for lerping. Use safe window checking for SSR.
  const mouse = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });
  const pos = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      // Extremely smooth, slow lerp to give a satisfying heavy "fluid/magnetic" feel
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.02);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.02);

      if (interactiveGlow.current) {
        interactiveGlow.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="global-background">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Static ambient blobs */}
      <div className="ambient-blob form-1" />
      <div className="ambient-blob form-2" />
      
      {/* Mouse interactive glow */}
      <div ref={interactiveGlow} className="interactive-glow" />

      {/* Custom Particle Trail */}
      <CursorParticles />
    </div>
  );
};

export default Background;
