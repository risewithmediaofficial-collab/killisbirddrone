const SectionLabel = ({ children, className = '' }) => (
  <p className={`mb-7 inline-flex items-center gap-3.5 font-label text-eyebrow font-bold uppercase leading-none tracking-[var(--tracking-label)] text-[#ff6b00] ${className}`.trim()}>
    <span className="h-0.5 w-10 bg-current" aria-hidden="true" />
    {children}
  </p>
);

export default SectionLabel;
