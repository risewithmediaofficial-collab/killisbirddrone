// src/components/FadeIn.jsx
import { useRef, useEffect } from 'react';

/**
 * Scroll-triggered fade-up wrapper.
 * Props:
 *   direction  – 'up' | 'down' | 'left' | 'right' | 'none'
 *   delay      – animation delay in seconds
 *   duration   – animation duration in seconds
 *   distance   – translate distance in px
 *   threshold  – IntersectionObserver threshold
 *   once       – only animate once (default: true)
 *   className  – extra class on wrapper div
 */
const FadeIn = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 28,
  threshold = 0.15,
  once = true,
  className = '',
}) => {
  const ref = useRef(null);

  const getTransform = (dir, dist) => {
    switch (dir) {
      case 'up':    return `translateY(${dist}px)`;
      case 'down':  return `translateY(-${dist}px)`;
      case 'left':  return `translateX(${dist}px)`;
      case 'right': return `translateX(-${dist}px)`;
      default:      return 'none';
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial state
    el.style.opacity = '0';
    el.style.transform = getTransform(direction, distance);
    el.style.transition = `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          if (once) observer.disconnect();
        } else if (!once) {
          el.style.opacity = '0';
          el.style.transform = getTransform(direction, distance);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, duration, distance, threshold, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;
