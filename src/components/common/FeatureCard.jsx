const FeatureCard = ({ icon: Icon, title, children, className = '' }) => (
  <article className={`feature-card group relative grid grid-cols-[90px_1fr] items-center gap-7 overflow-hidden rounded-[18px] border border-[#f1dfd1] bg-white/95 px-9 py-8 shadow-[0_18px_44px_rgba(17,21,26,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff6b00]/45 hover:shadow-[0_24px_54px_rgba(17,21,26,0.1)] max-sm:grid-cols-1 max-sm:px-6 ${className}`.trim()}>
    <div className="flex h-[82px] w-[82px] items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#e85f00] text-white transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 max-sm:h-[68px] max-sm:w-[68px]">
      <Icon aria-hidden="true" sx={{ fontSize: 34 }} />
    </div>
    <div>
      <h3 className="mb-3 text-[26px] font-extrabold text-[#111111]">{title}</h3>
      <span className="mb-4 block h-0.5 w-12 bg-[#ff6b00]" aria-hidden="true" />
    </div>
  </article>
);

export default FeatureCard;
