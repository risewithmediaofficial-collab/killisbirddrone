// src/components/sections/DnaCtaSection.jsx
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FadeIn from '../FadeIn';

const DnaCtaSection = () => (
  <section
    className="section bg-neutral-900 overflow-hidden relative"
    aria-labelledby="dna-cta-heading"
  >
    {/* Watermark */}
    <div
      className="absolute right-0 bottom-0 font-heading font-bold text-white/[0.03] select-none pointer-events-none leading-none"
      style={{ fontSize: 'clamp(6rem, 16vw, 18rem)', letterSpacing: '-0.06em' }}
      aria-hidden="true"
    >
      JOIN
    </div>

    <div className="container relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        <FadeIn direction="up">
          <div>
            <div className="eyebrow text-orange-400 mb-4">
              <span className="eyebrow-line bg-orange-400" aria-hidden="true" />
              Work With Us
            </div>
            <h2
              id="dna-cta-heading"
              className="font-heading font-bold text-white leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', letterSpacing: '-0.025em' }}
            >
              Shape the future of<br />
              <span className="text-orange-400">Indian aviation.</span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed max-w-[44ch]">
              We are always looking for engineers, researchers, and innovators who share our passion for precision and purpose.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary">
              Get in Touch
              <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
            </Link>
            <Link to="/journey" className="btn-ghost">
              View Openings
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default DnaCtaSection;
