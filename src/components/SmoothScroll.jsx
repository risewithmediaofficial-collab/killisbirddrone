// src/components/SmoothScroll.jsx
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Reusable wrapper to ensure ScrollTrigger compatibility.
 */
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Perform a refresh on layout mount
    ScrollTrigger.refresh();

    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div className="smooth-scroll-wrapper w-full relative">
      {children}
    </div>
  );
};

export default SmoothScroll;
