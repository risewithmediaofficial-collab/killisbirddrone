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
    hero: '[clip-path:ellipse(50%_46%_at_50%_50%)] rounded-[24px]',
    diagonal: '[clip-path:polygon(8%_0,100%_0,100%_92%,92%_100%,0_100%,0_8%)] rounded-tr-[16px] rounded-bl-[16px]',
    landscape: '[clip-path:polygon(4%_0,100%_0,100%_90%,90%_100%,4%_100%,0_96%,0_4%)] rounded-t-[14px] rounded-bl-[14px]',
    technical: '[clip-path:polygon(0_0,96%_0,100%_4%,100%_100%,4%_100%,0_96%)] rounded-[14px]',
    darkCard: '[clip-path:polygon(0_0,100%_0,100%_92%,92%_100%,0_100%)] rounded-[12px]'
  };
  const variantClass = variants[variant] || variants.diagonal;

  return (
    <figure className={`image-frame group relative m-0 max-w-[480px] mx-auto w-full min-h-[280px] max-sm:min-h-[180px] ${className}`.trim()}>
      <div className={`image-frame__outline absolute -inset-[6px] z-[1] border-[1.5px] border-[#ff6b00] opacity-80 max-sm:-inset-[4px] ${variantClass}`} aria-hidden="true" />
      <div className={`image-frame__media relative z-[2] h-full min-h-[inherit] overflow-hidden ${variantClass}`}>
        <SmartImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={`h-full min-h-[inherit] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${imageClassName}`.trim()}
        />
      </div>
      {floatingContent ? <div className="absolute right-[-32px] top-[16%] z-[4] before:absolute before:-left-8 before:top-1/2 before:h-px before:w-8 before:bg-[#ff6b00] max-xl:right-3 max-sm:bottom-3 max-sm:left-3 max-sm:right-3 max-sm:top-auto max-sm:before:hidden">{floatingContent}</div> : null}
    </figure>
  );
};

export default ImageFrame;

