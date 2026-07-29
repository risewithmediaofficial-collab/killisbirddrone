// src/components/sections/FoundationSection.jsx
import { Link } from 'react-router-dom';
import FadeIn from '../FadeIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const IMG = 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=900&q=85&auto=format&fit=crop';

const highlights = [
  'Indigenous design and manufacturing',
  'Mission-critical quality protocols',
  'Defence and commercial certification',
  'Export operations to 10+ countries',
];

const FoundationSection = ({ image }) => (
  <section
    className="section bg-white divide-bottom"
    aria-labelledby="foundation-heading"
  >
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ─ Image ─ */}
        <FadeIn direction="left" duration={0.8}>
          <div className="relative">
            <div className="img-zoom aspect-[4/3] overflow-hidden bg-neutral-100">
              <img
                src={image || IMG}
                alt="Killis Bird UAV engineering facility"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent block */}
            <div
              className="absolute -bottom-4 -right-4 bg-orange-500 px-6 py-4 z-10"
              aria-hidden="true"
            >
              <div className="font-heading font-bold text-white text-2xl leading-none">2018</div>
              <div className="text-white/75 text-[0.5625rem] uppercase tracking-widest mt-1">Founded</div>
            </div>
            {/* Thin border frame */}
            <div
              className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-orange-500 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </FadeIn>

        {/* ─ Content ─ */}
        <FadeIn direction="right" duration={0.8} delay={0.1}>
          <div className="flex flex-col gap-5">
            <div className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Our Foundation
            </div>

            <h2
              id="foundation-heading"
              className="font-heading font-bold text-black leading-[1.1]"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.025em' }}
            >
              Indigenous Engineering.<br />
              <span className="text-orange-500">Built to Last.</span>
            </h2>

            <p className="text-neutral-600 text-sm leading-relaxed max-w-[46ch]">
              Founded in 2018 in Krishnagiri, Tamil Nadu, Killis Bird Technologies manufactures full-stack precision UAV components engineered for agriculture, defence, and inspection worldwide.
            </p>

            {/* Highlights */}
            <ul className="flex flex-col gap-2.5 my-1" aria-label="Company highlights">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-neutral-700 font-medium">
                  <span
                    className="w-4 h-4 border border-orange-200 bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <Link to="/contact" className="btn-primary">
                Partner with Us
                <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default FoundationSection;
