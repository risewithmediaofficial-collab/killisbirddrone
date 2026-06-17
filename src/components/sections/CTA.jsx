// src/components/sections/CTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FadeIn from '../FadeIn';
import CornerBrackets from '../CornerBrackets';
import AnimatedTitle from '../AnimatedTitle';
import ScrollReveal from '../ScrollReveal';

const CTA = () => {
  return (
    <section data-stack-section className="section section-orange relative overflow-hidden">
      <div className="grid-pattern text-white" />
      <FadeIn className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10">
        <AnimatedTitle
          as="h2"
          title="Ready to Shape the Future of Flight?"
          className="mb-5"
          textClassName="font-heading font-bold text-white leading-tight text-center"
          textStyle={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}
          baseOpacity={0.18}
          baseRotation={1.2}
          blurStrength={8}
        />
        <ScrollReveal
          containerClassName="mx-auto mb-10 max-w-xl"
          textClassName="text-body-lg text-white/80 leading-relaxed text-center"
          baseOpacity={0.2}
          baseRotation={1.5}
          blurStrength={7}
        >
          With innovation at our core, we empower partners worldwide to achieve mission success
          through technologies that are robust, adaptable, and future-ready.
        </ScrollReveal>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link to="/contact" className="relative group inline-flex">
            <span className="btn-white !rounded-none !py-3 !px-8 relative z-10 font-heading font-bold text-skyroot bg-white transition-all duration-300">
              Request a Quote <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
            </span>
            <CornerBrackets color="#ffffff" size="6px" thickness="1.5px" hoverShift />
          </Link>
          <Link to="/creations" className="relative group inline-flex">
            <span className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-heading font-bold px-8 py-3 rounded-none transition-all duration-300 text-sm relative z-10 bg-transparent">
              Explore Creations
            </span>
            <CornerBrackets color="#ffffff" size="6px" thickness="1.5px" hoverShift />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
};

export default CTA;
