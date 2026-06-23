// src/components/SectionHeader.jsx
import AnimatedTitle from './AnimatedTitle';

/**
 * Reusable section header with scroll-triggered line-by-line text reveal animation.
 */
const SectionHeader = ({ eyebrow, title, orangeTitle, centered = true, className = '' }) => {
  return (
    <div className={`mb-10 overflow-hidden ${centered ? 'text-center flex flex-col items-center' : ''} ${className}`}>
      {eyebrow && <div className={`eyebrow ${centered ? 'justify-center' : ''}`}>{eyebrow}</div>}
      <AnimatedTitle
        as="h2"
        title={title}
        highlight={orangeTitle}
        className="mb-4 py-1"
        textClassName="font-heading text-h2 font-bold leading-[1.15] text-black"
        baseOpacity={0.16}
        baseRotation={2}
        blurStrength={8}
      />
    </div>
  );
};

export default SectionHeader;
