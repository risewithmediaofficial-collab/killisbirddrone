// src/components/sections/DnaHero.jsx
import FadeIn from '../FadeIn';

const DnaHero = ({
  eyebrow = '',
  title = '',
  highlight = '',
  description = '',
  watermark = '',
}) => (
  <section
    className="page-hero overflow-hidden"
    aria-label={`Page hero — ${title} ${highlight}`}
  >
    {/* Watermark */}
    {watermark && (
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-heading font-bold text-black/[0.03] select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 22rem)', letterSpacing: '-0.06em' }}
        aria-hidden="true"
      >
        {watermark}
      </div>
    )}

    <div className="container relative z-10">
      <FadeIn direction="up">

        <h1
          className="font-heading font-bold text-black leading-[1.05] mb-5"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', letterSpacing: '-0.035em' }}
        >
          {title}{' '}
          {highlight && <span className="text-orange-500">{highlight}</span>}
        </h1>

        {description && (
          <p className="text-neutral-500 leading-relaxed max-w-[56ch]"
             style={{ fontSize: 'var(--fs-body-lg)' }}>
            {description}
          </p>
        )}
      </FadeIn>
    </div>
  </section>
);

export default DnaHero;
