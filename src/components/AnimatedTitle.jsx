import ScrollReveal from './ScrollReveal';

const AnimatedTitle = ({
  as = 'h2',
  segments,
  title,
  highlight,
  lineBreakBeforeHighlight = false,
  className = '',
  textClassName = '',
  textStyle,
  highlightClassName = 'text-skyroot',
  baseOpacity = 0.14,
  baseRotation = 2,
  blurStrength = 8
}) => {
  const titleSegments =
    segments ||
    [
      { text: title },
      lineBreakBeforeHighlight ? { break: true } : null,
      highlight ? { text: highlight, className: highlightClassName } : null
    ].filter(Boolean);

  return (
    <ScrollReveal
      as={as}
      segments={titleSegments}
      containerClassName={className}
      textClassName={textClassName}
      textStyle={textStyle}
      baseOpacity={baseOpacity}
      baseRotation={baseRotation}
      blurStrength={blurStrength}
    />
  );
};

export default AnimatedTitle;
