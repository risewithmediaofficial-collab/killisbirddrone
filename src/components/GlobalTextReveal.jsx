import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GlobalTextReveal = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const targets = Array.from(
      document.querySelectorAll(
        'main section p, main section li, main section blockquote, main section h3, main section h4'
      )
    ).filter(node => {
      if (node.closest('form, nav, footer, button, a, label')) return false;
      if (node.classList.contains('scroll-reveal-text')) return false;
      if (node.dataset.textAnimated === 'true') return false;
      return node.textContent?.trim().length > 18;
    });

    const animations = targets.map(target => {
      target.dataset.textAnimated = 'true';
      return gsap.fromTo(
        target,
        {
          opacity: 0.18,
          y: 28,
          filter: 'blur(8px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 88%',
            once: true
          }
        }
      );
    });

    return () => {
      animations.forEach(animation => animation?.scrollTrigger?.kill());
      animations.forEach(animation => animation?.kill());
      targets.forEach(target => {
        delete target.dataset.textAnimated;
        target.style.opacity = '';
        target.style.transform = '';
        target.style.filter = '';
      });
    };
  });

  return null;
};

export default GlobalTextReveal;
