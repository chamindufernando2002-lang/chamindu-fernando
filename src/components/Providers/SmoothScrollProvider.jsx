'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Initialize Lenis with heavier, luxurious smoothing settings
    const lenis = new Lenis({
      duration: 2.2,  // Slower, heavily smoothed scroll for Awwwards feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease out
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.6, // More resistant mouse wheel for premium heaviness
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
