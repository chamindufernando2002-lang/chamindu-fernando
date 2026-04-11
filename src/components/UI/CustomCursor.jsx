'use client';
import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const orbRef    = useRef(null);
  const dotRef    = useRef(null);
  const reqRef    = useRef();

  // Raw mouse position
  const mouse  = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });
  // Smoothed orb position
  const orbPos = useRef({ x: mouse.current.x, y: mouse.current.y });

  const [state, setState] = useState('idle'); // 'idle' | 'hover' | 'click' | 'hidden'
  const [text, setText] = useState('');

  useEffect(() => {
    // hide cursor default, avoid showing initially at 0,0 by keeping it transparent until first move
    let hasMoved = false;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        orbPos.current.x = e.clientX;
        orbPos.current.y = e.clientY;
        if (dotRef.current) dotRef.current.style.opacity = 1;
        if (orbRef.current) orbRef.current.style.opacity = 1;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onOver = (e) => {
      const el = e.target;
      const clickable =
        el.tagName === 'A'      || el.tagName === 'BUTTON' ||
        el.closest('a')         || el.closest('button')    ||
        el.classList.contains('cursor-hover') ||
        el.closest('.cursor-hover');
      
      const textEl = el.closest('[data-cursor-text]');
      if (textEl) {
        setText(textEl.getAttribute('data-cursor-text'));
      } else {
        setText(el.closest('.cursor-hover')?.getAttribute('data-cursor-text') || '');
      }

      setState(prev => prev === 'click' ? prev : (clickable ? 'hover' : 'idle'));
    };

    const onDown = () => setState('click');
    const onUp   = () => {
      // Re-evaluate on up
      const el = document.elementFromPoint(mouse.current.x, mouse.current.y);
      const clickable =
        el && (el.tagName === 'A' || el.tagName === 'BUTTON' ||
               el.closest?.('a') || el.closest?.('button') ||
               el.classList?.contains('cursor-hover') ||
               el.closest?.('.cursor-hover'));
      setState(clickable ? 'hover' : 'idle');
    };

    const onLeave = () => {
      setState('hidden');
      hasMoved = false;
      if (dotRef.current) dotRef.current.style.opacity = 0;
      if (orbRef.current) orbRef.current.style.opacity = 0;
    };
    
    const onEnter = () => {
      setState('idle');
    };

    window.addEventListener('mousemove',  onMove,  { passive: true });
    window.addEventListener('mouseover',  onOver,  { passive: true });
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    // Smoother and much faster lerp (0.25) to prevent stuck feeling
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;
    
    const tick = () => {
      orbPos.current.x = lerp(orbPos.current.x, mouse.current.x, 0.25);
      orbPos.current.y = lerp(orbPos.current.y, mouse.current.y, 0.25);

      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${orbPos.current.x}px, ${orbPos.current.y}px, 0)`;
      }
      reqRef.current = requestAnimationFrame(tick);
    };
    reqRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseover',  onOver);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(reqRef.current);
    };
  }, []);

  return (
    <>
      {/* ── Precision dot — zero-lag snap ── */}
      <div 
        ref={dotRef} 
        className={`cc-dot cc-dot--${state}`} 
        style={{ opacity: 0 }} 
      />
      
      {/* ── Magnetic orb — lerps trailing the mouse ── */}
      <div 
        ref={orbRef} 
        className={`cc-orb cc-orb--${state}`}
        style={{ opacity: 0 }} 
      >
        {text && <span className="cc-text">{text}</span>}
      </div>
    </>
  );
};

export default CustomCursor;
