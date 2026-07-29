// src/components/common/SecondaryHero.jsx
import FadeIn from '../FadeIn';

/**
 * Inner-page hero banner.
 * Used by: Creations, Assistance, Journey, Contact pages
 */
const SecondaryHero = ({
  eyebrow = '',
  title = '',
  highlight = '',
  description = '',
  watermark = '',
}) => (
  <section
    className="page-hero overflow-hidden relative bg-white"
    aria-label={`Page — ${title} ${highlight}`}
  >
    {/* Background watermark */}
    {watermark && (
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-heading font-bold text-black/[0.03] select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(6rem, 16vw, 22rem)', letterSpacing: '-0.06em' }}
        aria-hidden="true"
      >
        {watermark}
      </div>
    )}

    <div className="container relative z-10">
      <FadeIn direction="up">

        <h1
          className="font-heading font-bold text-black leading-[1.05] mb-5"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', letterSpacing: '-0.03em' }}
        >
          {title}{' '}
          {highlight && (
            <span className="text-orange-500">{highlight}</span>
          )}
        </h1>

        {description && (
          <p className="text-neutral-500 leading-relaxed max-w-[54ch]"
             style={{ fontSize: 'var(--fs-body-lg)' }}>
            {description}
          </p>
        )}
      </FadeIn>
    </div>
  </section>
);

export default SecondaryHero;
