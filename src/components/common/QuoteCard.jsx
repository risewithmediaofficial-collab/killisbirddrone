import DecorativeDots from './DecorativeDots';

const QuoteCard = ({ children }) => (
  <blockquote className="relative my-8 inline-block w-fit overflow-hidden rounded-[14px] border border-[#f1dfd1] border-l-[7px] border-l-[#ff6b00] bg-white/95 px-6 py-4 shadow-[0_18px_44px_rgba(17,21,26,0.07)] max-sm:px-4">
    <DecorativeDots className="absolute -right-4 top-3 opacity-35" />
    <span className="absolute left-3 top-1/2 -translate-y-1/2 font-serif text-[28px] font-bold text-[#ff6b00]" aria-hidden="true">“</span>
    <p className="block font-heading text-[20px] font-bold italic leading-[1.36] text-[#111111] max-sm:text-lg pl-2 pr-2">{children}</p>
    <span className="absolute right-2 top-1/2 -translate-y-1/2 font-serif text-[28px] font-bold text-[#ff6b00]" aria-hidden="true">”</span>
  </blockquote>
);

export default QuoteCard;
