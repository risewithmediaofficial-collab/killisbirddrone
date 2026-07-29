// src/components/SectionHeader.jsx
/**
 * Reusable section header without eyebrow labels.
 */
const SectionHeader = ({
  title,
  highlight,
  body,
  centered = false,
  light = false,
  as: Tag = 'h2',
  className = '',
}) => {
  const align = centered ? 'text-center items-center' : 'text-left items-start';
  const textColor = light ? 'text-white' : 'text-black';
  const mutedColor = light ? 'text-white/60' : 'text-neutral-500';

  return (
    <div className={`flex flex-col ${align} ${className}`}>
      <Tag
        className={`font-heading font-bold ${textColor} leading-[1.1]`}
        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', letterSpacing: '-0.025em' }}
      >
        {title}{' '}
        {highlight && (
          <span className="text-orange-500">{highlight}</span>
        )}
      </Tag>

      {body && (
        <p className={`mt-4 ${mutedColor} leading-relaxed max-w-[58ch] ${centered ? 'mx-auto' : ''}`}
           style={{ fontSize: 'var(--fs-body-lg)' }}>
          {body}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
