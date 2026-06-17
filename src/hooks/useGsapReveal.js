// src/hooks/useGsapReveal.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveal elements on scroll with fade + translate.
 * @param {object} opts
 * @param {string} opts.target - CSS selector for children to animate
 * @param {number} opts.y - initial Y offset (default 60)
 * @param {number} opts.x - initial X offset (default 0)
 * @param {number} opts.duration - animation duration (default 0.9)
 * @param {number} opts.stagger - stagger between items (default 0.1)
 * @param {string} opts.ease - GSAP ease (default 'power3.out')
 * @param {string} opts.start - ScrollTrigger start (default 'top 85%')
 */
export function useGsapReveal({
  target = '.reveal-item',
  y = 60,
  x = 0,
  duration = 0.9,
  stagger = 0.1,
  ease = 'power3.out',
  start = 'top 85%',
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const els = ref.current.querySelectorAll(target);
      if (!els.length) return;

      gsap.fromTo(els,
        { opacity: 0, y, x },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [target, y, x, duration, stagger, ease, start]);

  return ref;
}

export default useGsapReveal;
