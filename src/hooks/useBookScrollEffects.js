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
      gsap.utils.toArray('.reveal-group').forEach((group) => {
        const children = Array.from(group.children);
        if (!children.length) return;

        gsap.fromTo(
          children,
          { y: 48, opacity: 0, filter: 'blur(12px)', scale: 0.985 },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            duration: isMobile ? 0.7 : 1.1,
            ease: 'power3.out',
            stagger: isMobile ? 0.06 : 0.12,
            scrollTrigger: {
              trigger: group,
              start: isMobile ? 'top 94%' : 'top 88%',
              end: isMobile ? 'top 72%' : 'top 42%',
              scrub: !isMobile,
              once: isMobile,
            },
          },
        );
      });

      gsap.utils.toArray('.book-reveal-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 42, opacity: 0, filter: 'blur(10px)', scale: 0.975 },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            duration: isMobile ? 0.65 : 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: isMobile ? 'top 95%' : 'top 90%',
              end: isMobile ? 'top 74%' : 'top 48%',
              scrub: !isMobile,
              once: isMobile,
            },
          },
        );
      });

      gsap.utils.toArray('.image-frame').forEach((frame) => {
        const media = frame.querySelector('.image-frame__media');
        const outline = frame.querySelector('.image-frame__outline');
        const image = frame.querySelector('img, canvas');

        if (media) {
          gsap.fromTo(
            media,
            { scale: 1.14, filter: 'blur(18px)' },
            {
              scale: 1,
              filter: 'blur(0px)',
              ease: 'power3.out',
              scrollTrigger: {
                trigger: frame,
                start: isMobile ? 'top 96%' : 'top 92%',
                end: isMobile ? 'top 78%' : 'top 38%',
                scrub: !isMobile,
                once: isMobile,
              },
            },
          );
        }

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.18 },
            {
              scale: 1.03,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: frame,
                start: isMobile ? 'top 96%' : 'top 92%',
                end: isMobile ? 'top 78%' : 'top 38%',
                scrub: !isMobile,
                once: isMobile,
              },
            },
          );
        }

        if (outline) {
          gsap.fromTo(
            outline,
            { scale: 0.94, opacity: 0, filter: 'blur(8px)' },
            {
              scale: 1,
              opacity: 0.9,
              filter: 'blur(0px)',
              ease: 'power3.out',
              scrollTrigger: {
                trigger: frame,
                start: isMobile ? 'top 96%' : 'top 92%',
                end: isMobile ? 'top 80%' : 'top 44%',
                scrub: !isMobile,
                once: isMobile,
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
