// src/pages/Creations.jsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useGsapReveal from '../hooks/useGsapReveal';
import useParallax from '../hooks/useParallax';
import ParallaxWatermark from '../components/ParallaxWatermark';
import CornerBrackets from '../components/CornerBrackets';
import SmartImage from '../components/SmartImage';
import AnimatedTitle from '../components/AnimatedTitle';

const categories = [
  {
    num: '01',
    category: 'Propulsion Systems',
    tagline: 'Power that lifts ambitions.',
    watermark: 'PROPULSION',
    img: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&q=80',
    items: [
      { name: 'High-Thrust Brushless Motors', desc: 'Precision-wound motors engineered for maximum torque efficiency and longevity.' },
      { name: 'Variable Pitch Propellers', desc: 'Aerodynamically optimised propellers delivering superior lift-to-drag ratio.' },
      { name: 'ESC Controllers', desc: 'Advanced electronic speed controllers with real-time telemetry and failsafe protocols.' },
    ],
  },
  {
    num: '02',
    category: 'Airframe & Structures',
    tagline: 'Strength engineered into every fibre.',
    watermark: 'AIRFRAME',
    img: 'https://images.unsplash.com/photo-1533929294112-264e8d48e89e?w=800&q=80',
    items: [
      { name: 'Carbon Fibre Frames', desc: 'Lightweight, high-tensile composite airframes for structural integrity under extreme conditions.' },
      { name: 'Folding Arm Assemblies', desc: 'Rapid-deploy folding arm systems enabling seamless transport and field deployment.' },
      { name: 'Landing Gear Systems', desc: 'Vibration-dampening gear engineered for precision sensor stability and harsh terrain.' },
    ],
  },
  {
    num: '03',
    category: 'Avionics & Control',
    tagline: 'Intelligence at the heart of flight.',
    watermark: 'AVIONICS',
    img: 'https://images.unsplash.com/photo-1601524909162-be87252be298?w=800&q=80',
    items: [
      { name: 'Flight Control Units', desc: 'Indigenous flight controllers with multi-redundant IMU arrays for mission-critical stability.' },
      { name: 'Telemetry & Data Links', desc: 'Encrypted long-range data links providing real-time telemetry with minimal latency.' },
      { name: 'Payload Integration Systems', desc: 'Modular payload bays supporting cameras, sensors, and specialised mission equipment.' },
    ],
  },
  {
    num: '04',
    category: 'Swarm & Multi-UAV',
    tagline: 'Coordinated intelligence. Distributed power.',
    watermark: 'SWARM',
    img: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80',
    items: [
      { name: 'Swarm Coordination Modules', desc: 'Advanced mesh-networking modules enabling coordinated multi-UAV swarm operations.' },
      { name: 'Autonomous Navigation Units', desc: 'AI-powered navigation systems for obstacle avoidance and dynamic path planning.' },
      { name: 'Formation Control Software', desc: 'Purpose-built firmware for precision formation flying and distributed mission execution.' },
    ],
  },
];

const CategoryImage = ({ src, alt }) => {
  const parallaxRef = useParallax(20);
  return (
    <div className="img-accent overflow-hidden rounded-none aspect-[4/3] bg-white relative group">
      <SmartImage
        ref={parallaxRef}
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover"
      />
      <CornerBrackets color="#f97316" size="10px" thickness="1.5px" hoverShift />
    </div>
  );
};

const Creations = () => {
  return (
    <>
      <SEO title="Creations" description="Killis Bird — Engineered for Excellence. Precision UAV components and solutions." />

      {/* ── Page Banner — Center Aligned (WHITE BACKGROUND) ── */}
      <section className="pt-32 pb-16 px-6 bg-white relative overflow-hidden text-center flex flex-col items-center justify-center border-b border-border">
        <ParallaxWatermark className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,18vw,22rem)] text-navy-100/30" speed={15}>
          UAV
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center">
          <div className="eyebrow justify-center">Our Portfolio</div>
          <AnimatedTitle
            as="h1"
            title="Precision"
            highlight="UAV Creations."
            lineBreakBeforeHighlight
            className="mb-4"
            textClassName="font-heading font-bold text-black leading-[1.08] text-center"
            textStyle={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
            baseOpacity={0.16}
            baseRotation={1.5}
            blurStrength={9}
          />
          <p className="text-muted text-body-lg max-w-xl leading-relaxed text-center">
            Every component we craft is a testament to our relentless pursuit of excellence.
            From propulsion to avionics, our creations are designed to perform where it matters most.
          </p>
          <div className="divider-bar mt-6 mx-auto" />
        </div>
      </section>

      {/* ── Categories — Alternating Sections ── */}
      {categories.map(({ num, category, tagline, items, img, watermark }, ci) => (
        <section 
          key={ci} 
          data-stack-section
          className={`section relative overflow-hidden ${ci % 2 === 1 ? 'bg-navy-50' : 'bg-white'}`}
        >
          {/* Parallax Watermark for each section */}
          <ParallaxWatermark 
            className={`top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,15rem)] ${
              ci % 2 === 1 ? 'right-0 text-navy-200/20' : 'left-0 text-navy-100/30'
            }`} 
            speed={25}
          >
            {watermark}
          </ParallaxWatermark>

          <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
            <FadeIn direction={ci % 2 === 1 ? 'right' : 'left'}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content Column */}
                <div className={ci % 2 === 1 ? 'lg:order-last' : ''}>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-heading font-bold text-5xl leading-none text-navy-300 select-none">{num}</span>
                    <span className="eyebrow">{category}</span>
                  </div>
                  <h2 className="font-heading font-bold text-black leading-tight mb-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                    {category}
                  </h2>
                  <p className="font-heading font-bold text-skyroot italic mb-4 text-base">{tagline}</p>
                  <div className="divider-bar mb-8" />

                  <div className="space-y-6 mt-2">
                    {items.map((item, ii) => (
                      <div key={ii} className="border-l border-border pl-4 hover:border-skyroot transition-colors duration-300">
                        <h4 className="font-heading font-bold text-black text-sm mb-1">{item.name}</h4>
                        <p className="text-muted text-body mb-2">{item.desc}</p>
                        <Link to="/contact" className="text-skyroot font-bold text-xs flex items-center gap-1 hover:text-skyroot-dark transition-colors inline-flex">
                          Request Quote <ArrowRightAltIcon sx={{ fontSize: 16 }} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Column */}
                <div className={ci % 2 === 1 ? 'lg:order-first' : ''}>
                  <CategoryImage src={img} alt={category} />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* ── CTA Band ── */}
      <section data-stack-section className="section section-orange">
        <div className="grid-pattern text-white" />
        <FadeIn className="relative z-10 max-w-2xl mx-auto text-center">
          <AnimatedTitle
            as="h2"
            title="Need a Custom UAV Solution?"
            className="mb-5"
            textClassName="font-heading font-bold text-white leading-tight text-center"
            textStyle={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            baseOpacity={0.18}
            baseRotation={1.2}
            blurStrength={8}
          />
          <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Our engineering team specialises in bespoke UAV component design and integration.
            Let us build your next breakthrough together.
          </p>
          <Link to="/contact" className="btn-white">
            Talk to Our Engineers <ArrowForwardIcon />
          </Link>
        </FadeIn>
      </section>
    </>
  );
};

export default Creations;
