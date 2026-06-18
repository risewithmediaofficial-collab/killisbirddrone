import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  segments,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  textStyle,
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  as: Tag = 'div'
}) => {
  const containerRef = useRef(null);

  const splitSegment = (text, className = '', keyPrefix = 'segment') =>
    text.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) {
        return word;
      }

      return (
        <span className={`inline-block word ${className}`.trim()} key={`${keyPrefix}-${word}-${index}`}>
          {word}
        </span>
      );
    });

  const splitText = useMemo(() => {
    if (Array.isArray(segments) && segments.length) {
      return segments.flatMap((segment, index) => {
        if (!segment) return [];
        if (segment.break) {
          return <br key={`break-${index}`} />;
        }

        return splitSegment(segment.text ?? '', segment.className ?? '', `segment-${index}`);
      });
    }

    if (typeof children === 'string') {
      return splitSegment(children);
    }

    return children;
  }, [children, segments]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const scroller =
      scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: element,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true
          }
        }
      );

      const wordElements = element.querySelectorAll('.word');
      if (!wordElements.length) return;

      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: 'opacity, filter' },
        {
          ease: 'none',
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: element,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: 'none',
            filter: 'blur(0px)',
            stagger: 0.05,
            scrollTrigger: {
              trigger: element,
              scroller,
              start: 'top bottom-=20%',
              end: wordAnimationEnd,
              scrub: true
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [
    baseOpacity,
    baseRotation,
    blurStrength,
    enableBlur,
    rotationEnd,
    scrollContainerRef,
    wordAnimationEnd
  ]);

  return (
    <Tag ref={containerRef} className={`my-5 ${containerClassName}`.trim()}>
      <span
        style={textStyle}
        className={`scroll-reveal-text block font-sans text-body-lg leading-[var(--lh-body)] font-medium ${textClassName}`.trim()}
      >
        {splitText}
      </span>
    </Tag>
  );
};

export default ScrollReveal;
