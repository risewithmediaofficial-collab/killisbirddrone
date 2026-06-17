// src/pages/OurDNA.jsx
import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SettingsIcon from '@mui/icons-material/Settings';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import useParallax from '../hooks/useParallax';
import ParallaxWatermark from '../components/ParallaxWatermark';
import SectionHeader from '../components/SectionHeader';
import CornerBrackets from '../components/CornerBrackets';
import ChromaGrid from '../components/ChromaGrid';
import ScrollReveal from '../components/ScrollReveal';
import SmartImage from '../components/SmartImage';
import AnimatedTitle from '../components/AnimatedTitle';

const IMG = {
  dna: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80',
  values: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800&q=80',
  team1: 'https://images.unsplash.com/photo-1581092160607-ee67df30d0ec?w=600&q=80',
  team2: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
  team3: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80',
};

const values = [
  { Icon: LightbulbIcon, title: 'Imagine', desc: 'We dare to envision what the skies can become — pushing the boundaries of conventional aerospace thinking.' },
  { Icon: AutoAwesomeIcon, title: 'IDeate', desc: 'Every great component begins with a great idea. Our teams ideate solutions that are bold, practical, and future-forward.' },
  { Icon: SettingsIcon, title: 'Innovate', desc: 'From concept to creation, we innovate relentlessly — delivering UAV components that redefine performance benchmarks.' },
];

const team = [
  { name: 'Founders & Visionaries', desc: 'Aerospace veterans who believe India can lead the world in UAV innovation.', img: IMG.team1 },
  { name: 'Engineers & Designers', desc: 'World-class talent engineering components with sub-millimetre precision.', img: IMG.team2 },
  { name: 'Partners & Collaborators', desc: 'A growing ecosystem of industry, academic, and defense collaborators.', img: IMG.team3 },
];

const teamGridItems = team.map((member, index) => ({
  id: member.name,
  image: member.img,
  kicker: `Team 0${index + 1}`,
  title: member.name,
  description: member.desc,
  borderColor: index === 1 ? '#0ea5e9' : '#f97316',
  gradient:
    index === 1
      ? 'linear-gradient(160deg, #0f172a, #0c4a6e 58%, #1d4ed8 130%)'
      : 'linear-gradient(160deg, #111827, #1e293b 58%, #ea580c 135%)'
}));

const DnaImage = () => {
  const ref = useParallax(15);
  return (
    <div className="img-accent overflow-hidden rounded-none aspect-[4/3] relative group">
      <SmartImage
        ref={ref}
        src={IMG.dna}
        alt="Killis Bird UAV engineering"
        className="w-full h-[120%] object-cover"
      />
      <CornerBrackets color="#f97316" size="10px" thickness="1.5px" hoverShift />
    </div>
  );
};

const ValuesImage = () => {
  const ref = useParallax(20);
  return (
    <div className="overflow-hidden rounded-none aspect-[4/3] shadow-card bg-white relative group">
      <SmartImage
        ref={ref}
        src={IMG.values}
        alt="UAV component engineering"
        className="w-full h-[125%] object-cover"
      />
      <CornerBrackets color="#f97316" size="10px" thickness="1.5px" hoverShift />
    </div>
  );
};

const OurDNA = () => {
  return (
    <>
      <SEO title="Our DNA" description="Killis Bird — Imagine, IDeate, Innovate. Where Precision Meets Innovation." />

      {/* Banner (Centered) */}
      <section className="pt-[120px] pb-16 px-6 md:px-8 bg-white relative overflow-hidden text-center flex flex-col items-center justify-center">
        <ParallaxWatermark className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,18vw,24rem)] text-navy-100/30" speed={15}>
          DNA
        </ParallaxWatermark>
        <div className="max-w-content mx-auto relative z-10 flex flex-col items-center">
          <AnimatedTitle
            as="h1"
            title="Imagine. IDeate."
            highlight="Innovate."
            lineBreakBeforeHighlight
            className="mb-4"
            textClassName="font-heading font-bold text-black leading-tight text-center"
            textStyle={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
            baseOpacity={0.16}
            baseRotation={1.5}
            blurStrength={9}
          />
          <p className="font-heading font-bold text-skyroot text-xl italic text-center">
            "Where Precision Meets Innovation"
          </p>
          <div className="divider-bar mt-6 mx-auto" />
        </div>
      </section>

      {/* Core Philosophy (WHITE BACKGROUND) */}
      <section data-stack-section className="section bg-white">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <SectionHeader eyebrow="Our Foundation" title="The DNA of" orangeTitle="Killis Bird" />
              <ScrollReveal containerClassName="mb-4 my-0" textClassName="text-muted text-body-lg leading-relaxed">
                At Killis Birds, our core is precision engineered with imagination, ideation, and innovation. This DNA powers the design and delivery of next-generation UAV components and solutions that expand the possibilities of aerospace and defense.
              </ScrollReveal>
              <p className="text-muted text-body-lg leading-relaxed mb-6">
                Each creation embodies visionary thinking, rigorous engineering, and uncompromising excellence — we shape the future of flight.
              </p>
              <blockquote className="accent-left mb-6">
                <p className="font-heading font-bold text-black text-lg italic">"The sky is not the limit — it is merely where we begin."</p>
              </blockquote>
              <p className="font-heading font-bold text-skyroot">🇮🇳 Built in India. Trusted Worldwide.</p>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <DnaImage />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values (NAVY BACKGROUND) */}
      <section data-stack-section className="section bg-navy-50">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <ValuesImage />
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <SectionHeader eyebrow="Core Values" title="What Drives" orangeTitle="Everything" />
              <div className="space-y-8 mt-6">
                {values.map(({ Icon, title, desc }, i) => (
                  <FadeIn key={i} delay={i * 0.1} direction="right">
                    <div className="flex items-start gap-4 group">
                      <div className="w-11 h-11 bg-skyroot rounded-none flex items-center justify-center shrink-0 shadow-soft group-hover:scale-110 transition-transform">
                        <Icon sx={{ color: '#fff', fontSize: 20 }} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-black text-h4 mb-1">{title}</h4>
                        <p className="text-muted text-body">{desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission (WHITE BACKGROUND) */}
      <section data-stack-section className="section bg-white relative overflow-hidden">
        <ParallaxWatermark className="right-0 bottom-0 translate-y-1/4 text-[clamp(8rem,16vw,20rem)] text-navy-100/30" speed={15}>
          AIM
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <FadeIn className="mb-14">
            <SectionHeader eyebrow="Our Purpose" title="Vision &" orangeTitle="Mission" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { Icon: GpsFixedIcon, title: 'Our Vision', body: 'We deliver the most trusted, innovative, and distinctive UAV components and solutions to our partners — setting the global standard for aerial excellence.' },
              { Icon: RocketLaunchIcon, title: 'Our Mission', body: 'To engineer robust, adaptable, and forward-thinking UAV technologies that empower our partners with reliability and excellence, through continuous innovation, precision design, and uncompromising quality.' },
            ].map(({ Icon, title, body }, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="up">
                <div className="flex items-center gap-3 mb-4">
                  <Icon sx={{ color: '#f97316', fontSize: 28 }} />
                  <h3 className="font-heading font-bold text-skyroot text-h3">{title}</h3>
                </div>
                <div className="divider-bar mb-5" />
                <p className="text-muted text-body-lg leading-relaxed">{body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team (NAVY BACKGROUND) */}
      <section data-stack-section className="section bg-navy-50 relative overflow-hidden">
        <ParallaxWatermark className="left-0 top-0 text-[clamp(6rem,14vw,16rem)] text-navy-200/20" speed={20}>
          TEAM
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <FadeIn className="mb-14">
            <SectionHeader eyebrow="Our People" title="The Minds" orangeTitle="Behind the Mission" />
          </FadeIn>
          <div className="mt-8">
            <ChromaGrid items={teamGridItems} className="justify-center" radius={260} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-stack-section className="section section-orange">
        <div className="grid-pattern text-white" />
        <FadeIn className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10">
          <AnimatedTitle
            as="h2"
            title="Ready to Build the Future With Us?"
            className="mb-5"
            textClassName="font-heading font-bold text-white text-center"
            textStyle={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
            baseOpacity={0.18}
            baseRotation={1.2}
            blurStrength={8}
          />
          <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Whether you are an industry pioneer or an emerging innovator, Killis Bird is your trusted partner in flight.
          </p>
          <Link to="/contact" className="btn-white">Partner With Us <ArrowForwardIcon sx={{ fontSize: 18 }} /></Link>
        </FadeIn>
      </section>
    </>
  );
};

export default OurDNA;
