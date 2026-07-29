// src/components/sections/CTABanner.jsx
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FadeIn from '../FadeIn';

const CTABanner = () => (
  <section
    className="section-cta py-20 lg:py-24 overflow-hidden"
    aria-labelledby="cta-heading"
  >
    {/* Subtle grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }}
    />

    {/* Watermark text */}
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 font-heading font-bold text-white/[0.05] select-none pointer-events-none leading-none"
      style={{ fontSize: 'clamp(8rem, 18vw, 20rem)', letterSpacing: '-0.06em' }}
      aria-hidden="true"
    >
      KB
    </div>

    <div className="container relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        {/* Left text */}
        <FadeIn direction="up">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-5" aria-hidden="true">
              <span className="w-5 h-px bg-white/40" />
              <span className="text-white/60 text-[0.625rem] font-semibold uppercase tracking-widest font-label">
                Let's Build Together
              </span>
            </div>
            <h2
              id="cta-heading"
              className="font-heading font-bold text-white leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}
            >
              Ready to Build Your<br />
              <span className="text-white/70">Next UAV System?</span>
            </h2>
            <p className="text-white/65 leading-relaxed max-w-[46ch]"
               style={{ fontSize: 'var(--fs-body-lg)' }}>
              From single components to complete system integration — our engineers are ready to collaborate.
            </p>
          </div>
        </FadeIn>

        {/* Right buttons */}
        <FadeIn direction="up" delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="btn-white"
              aria-label="Request a quote from Killis Bird"
            >
              Request a Quote
              <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
            </Link>
            <Link
              to="/creations"
              className="btn-ghost"
              aria-label="Explore Killis Bird creations"
            >
              Explore Creations
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default CTABanner;
