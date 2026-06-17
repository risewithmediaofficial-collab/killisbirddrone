// src/pages/Assistance.jsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TuneIcon from '@mui/icons-material/Tune';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import useGsapReveal from '../hooks/useGsapReveal';
import useParallax from '../hooks/useParallax';
import ParallaxWatermark from '../components/ParallaxWatermark';
import SectionHeader from '../components/SectionHeader';
import CornerBrackets from '../components/CornerBrackets';
import AnimatedTitle from '../components/AnimatedTitle';

const services = [
  {
    Icon: TuneIcon,
    title: 'Component Customization',
    desc: 'Bespoke UAV components engineered to your exact specifications — from material selection to performance tuning.',
  },
  {
    Icon: EngineeringIcon,
    title: 'Technical Consultation',
    desc: 'Expert guidance from our aerospace engineers to help you design, integrate, and optimise your UAV platform.',
  },
  {
    Icon: LocalShippingIcon,
    title: 'Supply Chain Support',
    desc: 'Reliable, on-time delivery of components backed by our robust supply chain and quality assurance protocols.',
  },
  {
    Icon: SupportAgentIcon,
    title: 'After-Sales Service',
    desc: 'Comprehensive post-deployment support including maintenance, calibration, and component replacement.',
  },
  {
    Icon: SchoolIcon,
    title: 'Training & Knowledge Transfer',
    desc: 'Structured training programmes equipping your team to maximise UAV platform performance.',
  },
  {
    Icon: VerifiedIcon,
    title: 'Warranty & Quality Assurance',
    desc: 'Industry-leading warranty coverage backed by our uncompromising quality standards and certification.',
  },
];

const steps = [
  { num: '01', label: 'Consultation', desc: 'We understand your requirements and define the scope.' },
  { num: '02', label: 'Solution Design', desc: 'Our engineers design a tailored approach for your mission.' },
  { num: '03', label: 'Engineering', desc: 'Components are precision-built and quality-verified.' },
  { num: '04', label: 'Delivery', desc: 'On-time, quality-assured delivery to your location.' },
  { num: '05', label: 'Support', desc: 'Ongoing post-deployment assistance and service.' },
];

const ServiceImage = ({ src, alt }) => {
  const parallaxRef = useParallax(15);
  return (
    <div className="img-accent overflow-hidden rounded-none aspect-[4/3] bg-white relative group">
      <img
        ref={parallaxRef}
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover"
        loading="lazy"
      />
      <CornerBrackets color="#f97316" size="10px" thickness="1.5px" hoverShift />
    </div>
  );
};

const Assistance = () => {
  return (
    <>
      <SEO title="Assistance" description="Killis Bird support and consultancy services for UAV integration and after-sales." />

      {/* ── Page Banner — Center Aligned (WHITE BACKGROUND) ── */}
      <section className="pt-32 pb-16 px-6 bg-white relative overflow-hidden text-center flex flex-col items-center justify-center border-b border-border">
        <ParallaxWatermark className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,18vw,22rem)] text-navy-100/30" speed={15}>
          HELP
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center">
          <div className="eyebrow justify-center">How We Support You</div>
          <AnimatedTitle
            as="h1"
            title="End-to-End"
            highlight="Assistance."
            lineBreakBeforeHighlight
            className="mb-4"
            textClassName="font-heading font-bold text-black leading-[1.08] text-center"
            textStyle={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
            baseOpacity={0.16}
            baseRotation={1.5}
            blurStrength={9}
          />
          <p className="text-muted text-body-lg max-w-xl leading-relaxed text-center">
            From concept to deployment and beyond — we stand beside our partners at every stage of their journey.
          </p>
          <div className="divider-bar mt-6 mx-auto" />
        </div>
      </section>

      {/* ── Section Title (WHITE BACKGROUND) ── */}
      <section data-stack-section className="pt-16 pb-2 px-6 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <SectionHeader eyebrow="What We Offer" title="Our Support" orangeTitle="Services" className="!mb-0" />
        </div>
      </section>

      {/* ── Services — Alternating Sections ── */}
      {[
        { 
          s: services[0], 
          s2: services[1], 
          img: 'https://images.unsplash.com/photo-1581092160607-ee67df30d0ec?w=800&q=80',
          watermark: 'CUSTOMIZE',
          label: 'Customization & Consultation', 
          reverse: false 
        },
        { 
          s: services[2], 
          s2: services[3], 
          img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
          watermark: 'LOGISTICS',
          label: 'Logistics & After-Sales', 
          reverse: true 
        },
        { 
          s: services[4], 
          s2: services[5], 
          img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
          watermark: 'TRAINING',
          label: 'Training & Quality', 
          reverse: false 
        },
      ].map(({ s, s2, img, watermark, label, reverse }, ri) => (
        <section 
          key={ri} 
          data-stack-section
          className={`section relative overflow-hidden ${ri % 2 === 1 ? 'bg-navy-50' : 'bg-white'}`}
        >
          <ParallaxWatermark 
            className={`top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,15rem)] ${
              ri % 2 === 1 ? 'right-0 text-navy-200/20' : 'left-0 text-navy-100/30'
            }`} 
            speed={25}
          >
            {watermark}
          </ParallaxWatermark>

          <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
            <FadeIn direction={reverse ? 'right' : 'left'}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Two services stacked */}
                <div className={`space-y-10 ${reverse ? 'lg:order-last' : ''}`}>
                  {[s, s2].map(({ Icon, title, desc }, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-none bg-skyroot text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Icon sx={{ fontSize: 24 }} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-black mb-1.5 text-lg">{title}</h3>
                        <p className="text-muted text-body leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link to="/contact" className="btn-primary inline-flex">
                      Get in Touch <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Link>
                  </div>
                </div>
                {/* Image */}
                <div className={reverse ? 'lg:order-first' : ''}>
                  <ServiceImage src={img} alt={label} />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* ── Process — (WHITE BACKGROUND) ── */}
      <section data-stack-section className="py-24 px-6 bg-white border-t border-border relative overflow-hidden">
        <ParallaxWatermark className="right-0 bottom-0 translate-y-1/4 text-[clamp(8rem,16vw,20rem)] text-navy-100/30" speed={18}>
          HOW
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <SectionHeader eyebrow="How It Works" title="Our" orangeTitle="Process" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="relative group bg-white border border-border p-6 rounded-none min-h-[200px]">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-8 h-[1px] bg-border group-hover:bg-skyroot transition-colors duration-300 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="font-heading font-bold text-skyroot text-4xl mb-3 leading-none transition-transform group-hover:scale-105 duration-300">
                      {step.num}
                    </div>
                    <h4 className="font-heading font-bold text-black text-base mb-2">{step.label}</h4>
                    <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <CornerBrackets color="#f97316" size="8px" thickness="1px" hoverShift />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section data-stack-section className="section section-orange">
        <div className="grid-pattern text-white" />
        <FadeIn className="relative z-10 max-w-2xl mx-auto text-center">
          <AnimatedTitle
            as="h2"
            title="Let Us Assist Your Next Mission"
            className="mb-5"
            textClassName="font-heading font-bold text-white leading-tight text-center"
            textStyle={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            baseOpacity={0.18}
            baseRotation={1.2}
            blurStrength={8}
          />
          <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Reach out today and let our team craft a tailored support plan for your UAV programme.
          </p>
          <Link to="/contact" className="btn-white">
            Get in Touch <ArrowForwardIcon />
          </Link>
        </FadeIn>
      </section>
    </>
  );
};

export default Assistance;
