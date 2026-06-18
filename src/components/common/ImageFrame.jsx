import SmartImage from '../SmartImage';

const ImageFrame = ({
  variant = 'diagonal',
  src,
  alt,
  floatingContent,
  className = '',
  imageClassName = '',
  loading = 'lazy',
  width,
  height
}) => {
  const variants = {
    hero: '[clip-path:ellipse(50%_44%_at_50%_50%)] rounded-[40px]',
    diagonal: '[clip-path:polygon(18%_0,100%_0,100%_78%,83%_100%,0_100%,0_22%)] rounded-tr-[26px] rounded-bl-[26px]',
    landscape: '[clip-path:polygon(8%_0,100%_0,100%_74%,77%_100%,10%_100%,0_88%,0_13%)] rounded-t-[22px] rounded-bl-[22px]',
    technical: '[clip-path:polygon(0_0,92%_0,100%_13%,100%_100%,8%_100%,0_88%)] rounded-[22px]',
    darkCard: '[clip-path:polygon(0_0,100%_0,100%_82%,88%_100%,0_100%)] rounded-[18px]'
  };
  const variantClass = variants[variant] || variants.diagonal;

  return (
  <figure className={`image-frame group relative m-0 min-h-[520px] max-sm:min-h-[360px] ${className}`.trim()}>
    <div className={`image-frame__outline absolute -inset-[18px] z-[1] border-2 border-[#ff6b00] opacity-90 max-sm:-inset-2.5 ${variantClass}`} aria-hidden="true" />
    <div className={`image-frame__media relative z-[2] h-full min-h-[inherit] overflow-hidden ${variantClass}`}>
      <SmartImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={`h-full min-h-[inherit] w-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageClassName}`.trim()}
      />
    </div>
    {floatingContent ? <div className="absolute right-[-42px] top-[18%] z-[4] before:absolute before:-left-11 before:top-1/2 before:h-0.5 before:w-11 before:bg-[#ff6b00] max-xl:right-4 max-sm:bottom-4 max-sm:left-4 max-sm:right-4 max-sm:top-auto max-sm:before:hidden">{floatingContent}</div> : null}
  </figure>
  );
};

export default ImageFrame;
