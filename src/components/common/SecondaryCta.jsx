import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import DecorativeDots from './DecorativeDots';
import OrangeButton from './OrangeButton';

const SecondaryCta = ({
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryHref,
}) => (
  <section className="relative overflow-hidden bg-[#ff6b00] py-[88px] max-sm:py-[72px]" aria-labelledby="secondary-cta-title">
    <DecorativeDots className="absolute left-[6%] top-[18%] opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.55)_1.5px,transparent_1.5px)] max-sm:hidden" />
    <DecorativeDots className="absolute bottom-[10%] right-[6%] opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.5)_1.5px,transparent_1.5px)] max-sm:hidden" />
    <div className="relative mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)] text-center">
      <div className="mx-auto max-w-[860px]">
        <h2 id="secondary-cta-title" className="font-heading text-[clamp(38px,5vw,72px)] font-normal leading-[1.04] tracking-[-0.055em] text-white">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-lg leading-[1.78] text-white/82 max-sm:text-base">{description}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <OrangeButton to={primaryTo}>{primaryLabel}</OrangeButton>
          {secondaryLabel && secondaryHref
            ? secondaryHref.startsWith('mailto:') || secondaryHref.startsWith('http')
              ? (
                <a
                  href={secondaryHref}
                  className="inline-flex min-h-[54px] items-center gap-3 border border-white/45 px-7 font-heading text-[15px] font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
                >
                  <EmailIcon fontSize="small" />
                  <span>{secondaryLabel}</span>
                </a>
                )
              : (
                <Link
                  to={secondaryHref}
                  className="inline-flex min-h-[54px] items-center gap-3 border border-white/45 px-7 font-heading text-[15px] font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
                >
                  <EmailIcon fontSize="small" />
                  <span>{secondaryLabel}</span>
                </Link>
                )
            : null}
        </div>
      </div>
    </div>
  </section>
);

export default SecondaryCta;
