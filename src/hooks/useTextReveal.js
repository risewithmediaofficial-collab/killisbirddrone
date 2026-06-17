// src/hooks/useTextReveal.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate heading lines one-by-one from below.
 * Wrap each line in a <span> with class "reveal-line" and overflow-hidden parent.
 */
export function useTextReveal({
  duration = 1,
  stagger = 0.08,
  ease = 'power4.out',
  start = 'top 80%',
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const lines = ref.current.querySelectorAll('.reveal-line');
      if (!lines.length) return;

      gsap.fromTo(lines,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
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
  }, [duration, stagger, ease, start]);

  return ref;
}

export default useTextReveal;
