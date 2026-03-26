import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

const ScrambleText = ({ text, className, as: Component = 'h2', style }) => {
  const [displayText, setDisplayText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) {
      setDisplayText(text.replace(/./g, ' '));
      return;
    }

    let iteration = 0;
    let interval = null;

    clearInterval(interval);
    
    interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3; // roughly 3 ticks (90ms) per character
    }, 30);

    return () => clearInterval(interval);
  }, [text, isInView]);

  return (
    <Component ref={ref} className={className} style={style}>
      {displayText}
    </Component>
  );
};

export default ScrambleText;
