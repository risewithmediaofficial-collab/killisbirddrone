import DecorativeDots from './DecorativeDots';

const QuoteCard = ({ children }) => (
  <blockquote className="relative my-8 max-w-[520px] overflow-hidden rounded-[14px] border border-[#f1dfd1] border-l-[7px] border-l-[#ff6b00] bg-white/95 px-9 py-7 shadow-[0_18px_44px_rgba(17,21,26,0.07)] max-sm:px-6">
    <DecorativeDots className="absolute -right-6 top-3 opacity-35" />
    <span className="mr-3 font-serif text-[32px] font-bold text-[#ff6b00]" aria-hidden="true">“</span>
    <p className="inline font-heading text-[22px] font-bold italic leading-[1.42] text-[#111111] max-sm:text-xl">{children}</p>
    <span className="absolute bottom-5 right-6 font-serif text-[32px] font-bold text-[#ff6b00]" aria-hidden="true">”</span>
  </blockquote>
);

export default QuoteCard;
