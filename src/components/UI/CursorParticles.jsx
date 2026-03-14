'use client';

import React, { useEffect, useRef } from 'react';

const CursorParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let particles = [];
    let animationFrameId;

    let mouse = {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
      y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      // Create new particles only when mouse moves
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Spawn particles proportional to the distance moved to avoid clustering
      const particlesToSpawn = Math.min(Math.floor(distance / 5) + 1, 5);
      
      for (let i = 0; i < particlesToSpawn; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    class Particle {
      constructor(x, y) {
        // Add slight scatter to spawn position
        this.x = x + (Math.random() - 0.5) * 10;
        this.y = y + (Math.random() - 0.5) * 10;
        
        // Small size
        this.size = Math.random() * 2 + 1;
        
        // Slow chaotic velocity
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        
        // Fade out properties
        this.life = 1;
        // Randomize decay for varied trail lengths
        this.decay = Math.random() * 0.02 + 0.015;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.size -= 0.03; // Shrink as it decays
      }

      draw(context) {
        if (this.size <= 0 || this.life <= 0) return;
        
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 94, 0, ${this.life})`;
        // Optional glow effect (can impact performance slightly, but fine for few particles)
        context.shadowBlur = 8;
        context.shadowColor = '#ff5e00';
        context.fill();
        context.shadowBlur = 0; // Reset
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
        
        // Remove dead particles
        if (particles[i].life <= 0 || particles[i].size <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 10000 // Below the custom cursor (10001) but above background
      }}
    />
  );
};

export default CursorParticles;
