import { forwardRef, useState } from 'react';
import fallbackImage from '../assets/hero.png';

const SmartImage = forwardRef(({
  src,
  alt,
  className = '',
  fallbackSrc = fallbackImage,
  loading = 'lazy',
  decoding = 'async',
  ...props
}, ref) => {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);

  return (
    <img
      ref={ref}
      {...props}
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      className={className}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
});

export default SmartImage;
