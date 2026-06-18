const SplitHeading = ({ as: Tag = 'h2', children, highlight, className = '', ...props }) => (
  <Tag
    className={`max-w-[720px] font-heading text-h1 font-medium leading-[var(--lh-tight)] tracking-[var(--tracking-display)] text-[#111111] ${className}`.trim()}
    {...props}
  >
    {children}
    {highlight ? (
      <>
        {' '}
        <span className="text-[#ff6b00]">{highlight}</span>
      </>
    ) : null}
  </Tag>
);

export default SplitHeading;
