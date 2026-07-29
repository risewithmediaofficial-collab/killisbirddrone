// src/components/LazySection.jsx
/**
 * LazySection
 * ─────────────────────────────────────────────────────────────────
 * Uses IntersectionObserver to defer rendering of below-fold
 * sections until they are near the viewport.
 *
 * This prevents React from spending budget on sections the user
 * hasn't scrolled to yet, improving TTI and initial load time.
 *
 * Props:
 *   rootMargin   – how far before viewport to start rendering (default: 400px)
 *   fallback     – element shown before section mounts (default: null)
 *   minHeight    – reserves space so the page doesn't reflow on reveal
 *   className    – wrapper class
 */
import { useRef, useState, useEffect, Suspense } from 'react';
import SectionLoader from './SectionLoader';

const LazySection = ({
  children,
  rootMargin = '400px 0px',
  fallback = null,
  minHeight,
  className = '',
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already scrolled into view on mount, render immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 400) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={!isVisible && minHeight ? { minHeight } : undefined}
    >
      {isVisible ? (
        <Suspense fallback={fallback ?? <SectionLoader />}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
