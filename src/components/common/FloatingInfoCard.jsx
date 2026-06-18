const FloatingInfoCard = ({ icon: Icon, eyebrow, title, text, className = '' }) => (
  <div className={`inline-flex items-center gap-3.5 rounded-2xl border border-black/10 bg-white/95 px-[18px] py-4 shadow-[0_22px_48px_rgba(17,21,26,0.12)] backdrop-blur-sm ${className}`.trim()}>
    {Icon ? (
      <span className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#ff6b00] to-[#e85f00] text-white">
        <Icon aria-hidden="true" sx={{ fontSize: 25 }} />
      </span>
    ) : null}
    <span>
      {eyebrow ? <small className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#67707d]">{eyebrow}</small> : null}
      <strong className="block text-[17px] leading-tight text-[#111111]">{title}</strong>
      {text ? <em className="mt-1 block text-sm not-italic text-[#67707d]">{text}</em> : null}
    </span>
  </div>
);

export default FloatingInfoCard;
