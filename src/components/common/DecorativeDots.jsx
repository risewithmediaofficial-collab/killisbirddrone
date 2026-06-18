const DecorativeDots = ({ className = '' }) => (
  <span
    className={`pointer-events-none block h-[132px] w-[132px] bg-[radial-gradient(rgba(255,107,0,0.28)_1.5px,transparent_1.5px)] bg-[length:15px_15px] ${className}`.trim()}
    aria-hidden="true"
  />
);

export default DecorativeDots;
