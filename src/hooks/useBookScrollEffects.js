import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useBookScrollEffects = (rootRef) => {
  useLayoutEffect(() => {
    const root = rootRef?.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (!root || prefersReducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      // ── Reveal groups (headings / text blocks) ──────────────────
      gsap.utils.toArray('.reveal-group').forEach((group) => {
        const children = Array.from(group.children);
        if (!children.length) return;

        gsap.fromTo(
          children,
          { y: 28, opacity: 0, filter: 'blur(6px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: isMobile ? 0.55 : 0.85,
            ease: 'power2.out',
            stagger: isMobile ? 0.05 : 0.09,
            scrollTrigger: {
              trigger: group,
              start: isMobile ? 'top 96%' : 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        );
      });

      // ── Cards ───────────────────────────────────────────────────
      gsap.utils.toArray('.book-reveal-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 0.5 : 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: isMobile ? 'top 97%' : 'top 92%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        );
      });

      // ── Image frames ────────────────────────────────────────────
      gsap.utils.toArray('.image-frame').forEach((frame) => {
        const media = frame.querySelector('.image-frame__media');
        const outline = frame.querySelector('.image-frame__outline');

        if (media) {
          gsap.fromTo(
            media,
            { scale: 1.06, filter: 'blur(8px)', opacity: 0 },
            {
              scale: 1,
              filter: 'blur(0px)',
              opacity: 1,
              duration: isMobile ? 0.6 : 0.9,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: frame,
                start: isMobile ? 'top 97%' : 'top 92%',
                toggleActions: 'play none none none',
                once: true,
              },
            },
          );
        }

        if (outline) {
          gsap.fromTo(
            outline,
            { scale: 0.97, opacity: 0 },
            {
              scale: 1,
              opacity: 0.8,
              duration: isMobile ? 0.55 : 0.8,
              ease: 'power2.out',
              delay: 0.1,
              scrollTrigger: {
                trigger: frame,
                start: isMobile ? 'top 97%' : 'top 92%',
                toggleActions: 'play none none none',
                once: true,
              },
            },
          );
        }
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, [rootRef]);
};

export default useBookScrollEffects;

