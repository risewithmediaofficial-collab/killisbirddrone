import DecorativeDots from './DecorativeDots';
import SectionLabel from './SectionLabel';
import SplitHeading from './SplitHeading';

const SecondaryHero = ({ eyebrow, title, highlight, description, watermark }) => (
  <section
    className="relative overflow-hidden bg-[radial-gradient(circle_at_0_0,rgba(255,240,229,0.9)_0_13%,transparent_13.2%),radial-gradient(circle_at_100%_72%,rgba(253,242,232,0.72)_0_15%,transparent_15.2%),#fff] pb-[56px] pt-[100px] max-sm:pb-[44px] max-sm:pt-[88px]"
    aria-labelledby="secondary-page-title"
  >
    <DecorativeDots className="absolute left-[7%] top-[18%] opacity-45 max-sm:hidden" />
    <DecorativeDots className="absolute bottom-[14%] right-[7%] opacity-35 max-sm:hidden" />
    {watermark ? (
      <span
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-heading text-[clamp(4.5rem,13vw,14rem)] font-extrabold tracking-[-0.08em] text-[#ff6b00]/[0.06]"
        aria-hidden="true"
      >
        {watermark}
      </span>
    ) : null}
    <div className="relative mx-auto flex w-full max-w-[1380px] flex-col items-center px-[clamp(20px,5vw,80px)] text-center">
      <div className="absolute left-[clamp(20px,5vw,80px)] top-2 h-[48px] w-[48px] border-l-2 border-t-2 border-[#ff6b00] max-sm:h-9 max-sm:w-9" aria-hidden="true" />
      <div className="reveal-group max-w-[820px]">
        <SectionLabel className="justify-center">{eyebrow}</SectionLabel>
        <SplitHeading
          as="h1"
          id="secondary-page-title"
          highlight={highlight}
          className="mx-auto max-w-[820px] text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-[-0.065em] max-sm:text-[clamp(28px,10vw,44px)]"
        >
          {title}
        </SplitHeading>
        <span className="mx-auto my-5 block h-[3px] w-[48px] bg-[#ff6b00]" aria-hidden="true" />
        {description && <p className="mx-auto max-w-[600px] text-[15px] leading-[1.8] text-[#67707d]">{description}</p>}
      </div>
      <span className="absolute bottom-2 right-[clamp(20px,5vw,80px)] h-[48px] w-[48px] border-b-2 border-r-2 border-[#ff6b00] max-sm:h-9 max-sm:w-9" aria-hidden="true" />
    </div>
  </section>
);

export default SecondaryHero;
