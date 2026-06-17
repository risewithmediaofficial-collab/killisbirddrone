// src/hooks/useParallax.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Apply subtle parallax movement to an image on scroll.
 * @param {number} speed - parallax intensity (default 30 = yPercent range)
 */
export function useParallax(speed = 30) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { yPercent: -speed / 2 },
        {
          yPercent: speed / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

export default useParallax;
