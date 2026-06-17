// src/components/sections/Hero.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useParallax from '../../hooks/useParallax';
import AnimatedTitle from '../AnimatedTitle';
import SmartImage from '../SmartImage';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=80',
};

const HeroBackground = () => {
  const ref = useParallax(35);
  return (
    <div ref={ref} className="absolute inset-0 w-full h-[130%] z-0">
      <SmartImage
        src={IMG.hero}
        alt="UAV drone flying over landscape"
        loading="eager"
        fetchPriority="high"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-eyebrow', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.hero-body', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' });
      gsap.fromTo('.hero-btns', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.9, ease: 'power3.out' });
      gsap.fromTo('.hero-float-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, delay: 1.2, ease: 'power3.out' });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen bg-black overflow-hidden flex items-center justify-center pt-[72px]">
      <HeroBackground />
      <div className="grid-pattern text-white/5 absolute inset-0 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
        <div className="hero-eyebrow eyebrow text-skyroot justify-center">
          Imagine · Ideate · Innovate
        </div>

        <AnimatedTitle
          as="h1"
          segments={[
            { text: 'Precision' },
            { text: 'Engineered.', className: 'text-skyroot' },
            { break: true },
            { text: 'Innovation' },
            { text: 'Delivered.', className: 'text-white/70' }
          ]}
          className="hero-heading mb-6"
          textClassName="font-heading font-bold text-white leading-[1.1] text-center"
          textStyle={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', letterSpacing: '-0.02em' }}
          baseOpacity={0.16}
          baseRotation={1.5}
          blurStrength={9}
        />

        <p className="hero-body text-white/80 text-body-lg max-w-2xl mb-10 leading-relaxed text-center">
          Redefining unmanned aerial systems through innovative, indigenous solutions
          designed to elevate performance and reliability.
        </p>

        <div className="hero-btns flex flex-wrap gap-4 justify-center">
          <Link to="/creations" className="btn-primary">
            Explore Creations <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Link>
          <Link to="/our-dna" className="btn-secondary !border-white/30 !text-white hover:!border-skyroot hover:!text-skyroot">
            Discover Our DNA
          </Link>
        </div>
      </div>

      <div className="hero-float-badge absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-none px-5 py-2.5 shadow-card z-20 text-center">
        <p className="text-[9px] font-heading font-bold text-white/60 uppercase tracking-widest mb-0.5">Built in India</p>
        <p className="font-heading font-bold text-skyroot text-xs">Trusted Worldwide 🇮🇳</p>
      </div>
    </section>
  );
};

export default Hero;
