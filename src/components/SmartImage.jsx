// src/components/SmartImage.jsx
import { forwardRef, useState, useEffect } from 'react';

/**
 * SmartImage
 * ─────────────────────────────────────────────────────────────────
 * Wraps <img> with:
 *  - Error fallback placeholder (no broken image icons)
 *  - Lazy loading + async decoding by default
 *  - width/height props → avoids CLS (Cumulative Layout Shift)
 *  - fetchpriority → pass "high" for above-fold LCP images
 *  - sizes → responsive image hints for srcset support
 *  - blur-up loading effect while the image loads
 */
const SmartImage = forwardRef(({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fetchpriority,
  width,
  height,
  sizes,
  srcSet,
  blurUp = false,   // enable subtle blur-fade effect on load
  ...props
}, ref) => {
  const [hasError, setHasError] = useState(!src);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset state when src changes
  useEffect(() => {
    setHasError(!src);
    setIsLoaded(false);
  }, [src]);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#fcfcfc] border border-dashed border-[#ff6b00]/25 min-h-[inherit] select-none text-center ${className}`}
        style={{ minHeight: 'inherit' }}
        role="img"
        aria-label={alt || 'Image unavailable'}
      >
        <svg
          className="w-10 h-10 text-[#ff6b00]/35 mb-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6b00]/45">
          Image Slot
        </span>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchpriority}
      width={width}
      height={height}
      sizes={sizes}
      srcSet={srcSet}
      className={`${className}${blurUp ? ` transition-[filter,opacity] duration-500 ${isLoaded ? 'blur-0 opacity-100' : 'blur-sm opacity-80'}` : ''}`}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      {...props}
    />
  );
});

SmartImage.displayName = 'SmartImage';

export default SmartImage;

