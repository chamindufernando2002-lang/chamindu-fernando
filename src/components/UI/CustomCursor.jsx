import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);
  const requestRef = useRef();
  const [isHovering, setIsHovering] = useState(false);

  // Target positions
  const mouse = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });
  // Current positions for lerping
  const dot = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });
  const outline = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Linear interpolation function
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      // Fast lerp for the dot
      dot.current.x = lerp(dot.current.x, mouse.current.x, 0.5);
      dot.current.y = lerp(dot.current.y, mouse.current.y, 0.5);

      // Slower lerp for the outline, giving that smooth dragging feel
      outline.current.x = lerp(outline.current.x, mouse.current.x, 0.15);
      outline.current.y = lerp(outline.current.y, mouse.current.y, 0.15);

      if (cursorDot.current && cursorOutline.current) {
        cursorDot.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`;
        cursorOutline.current.style.transform = `translate3d(${outline.current.x}px, ${outline.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorOutline} 
        className={`cursor-outline ${isHovering ? 'hovering' : ''}`} 
      />
      <div 
        ref={cursorDot} 
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`} 
      />
    </>
  );
};

export default CustomCursor;
