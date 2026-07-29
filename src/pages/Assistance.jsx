// src/pages/Assistance.jsx
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SecondaryHero from '../components/common/SecondaryHero';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';

const services = [
  {
    num: '01',
    title: 'UAV Integration Support',
    tagline: 'Full-system integration from components to mission-ready.',
    body: 'Assisting your team in component selection, assembly, commissioning, and field validation.',
    benefits: [
      'On-site integration assistance',
      'System architecture review',
      'Performance testing & validation',
      'Documentation & compliance support',
    ],
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&auto=format&fit=crop',
    reverse: false,
  },
  {
    num: '02',
    title: 'After-Sales & Maintenance',
    tagline: 'Long-term reliability starts with dedicated support.',
    body: 'Scheduled maintenance visits, spare parts supply, and emergency field support.',
    benefits: [
      'Scheduled maintenance contracts',
      'Emergency field service response',
      'Spare parts supply — same-day dispatch',
      'Component upgrade pathways',
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-a04b3d6f5d38?w=800&q=80&auto=format&fit=crop',
    reverse: true,
  },
  {
    num: '03',
    title: 'Custom Engineering',
    tagline: 'Your requirements. Our precision. One complete solution.',
    body: 'Bespoke design and manufacturing tailored to exact mission specs from prototype to production.',
    benefits: [
      'Bespoke component design & prototyping',
      'Material and process engineering',
      'Rapid iteration: concept to delivery',
      'Full lifecycle technical partnership',
    ],
    image: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=800&q=80&auto=format&fit=crop',
    reverse: false,
  },
];

const ServiceBlock = ({ service }) => (
  <div
    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-neutral-200 overflow-hidden bg-white ${service.reverse ? 'lg:flex lg:flex-row-reverse' : ''}`}
  >
    {/* Image */}
    <div className="img-zoom aspect-video lg:aspect-auto overflow-hidden bg-neutral-100">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="p-8 lg:p-10 flex flex-col justify-center gap-5">
      <div className="flex items-center gap-3">
        <span className="tag">{service.num}</span>
      </div>

      <div>
        <h3
          className="font-heading font-bold text-black mb-1.5 leading-tight"
          style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', letterSpacing: '-0.02em' }}
        >
          {service.title}
        </h3>
        <p className="text-orange-500 text-xs italic mb-3">{service.tagline}</p>
        <p className="text-neutral-600 text-xs leading-relaxed max-w-[42ch]">
          {service.body}
        </p>
      </div>

      {/* Benefits */}
      <ul className="flex flex-col gap-2" aria-label={`${service.title} benefits`}>
        {service.benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-2.5 text-xs text-neutral-700 font-medium">
            <span
              className="w-4 h-4 border border-orange-200 bg-orange-50 flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <CheckIcon sx={{ fontSize: 10, color: '#ff6b00' }} />
            </span>
            {b}
          </li>
        ))}
      </ul>

      <Link to="/contact" className="btn-primary self-start mt-1" aria-label={`Request ${service.title}`}>
        Get Started
        <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 16 }} />
      </Link>
    </div>
  </div>
);

const Assistance = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef} className="bg-white overflow-hidden">
      <SEO
        title="Services"
        description="Killis Bird — UAV integration support, after-sales maintenance, and custom engineering services."
      />

      <SecondaryHero
        eyebrow="Our Services"
        title="Engineering"
        highlight="Assistance."
        description="Full spectrum engineering services ensuring peak UAV system performance."
        watermark="ASSIST"
      />

      {/* ─ Services ─ */}
      <section className="section bg-white divide-top" aria-labelledby="services-heading">
        <div className="container">
          <FadeIn direction="up">
            <SectionHeader
              eyebrow="What We Offer"
              title="Our Service"
              highlight="Capabilities"
              centered
              className="mb-12"
              id="services-heading"
            />
          </FadeIn>

          <div className="flex flex-col gap-6">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.08} direction="up">
                <ServiceBlock service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─ Why choose our services ─ */}
      <section className="section bg-white divide-top" aria-labelledby="service-why-heading">
        <div className="container">
          <FadeIn direction="up">
            <SectionHeader
              eyebrow="Our Commitment"
              title="What Makes Our Support"
              highlight="Different"
              centered
              className="mb-10"
              id="service-why-heading"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                title: 'Mission-First Mindset',
                body: 'Treating every support request as mission-critical.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                ),
                title: 'Rapid Response',
                body: '24-hour response SLA for emergency field support across India.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                  </svg>
                ),
                title: 'Data-Driven',
                body: 'Tracking performance metrics to prevent failures proactively.',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08} direction="up">
                <div className="bg-white p-8 flex flex-col gap-3 h-full">
                  <div className="icon-box" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-heading font-bold text-black text-lg">{item.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed max-w-[32ch]">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─ Bottom CTA ─ */}
      <section className="section-cta py-14 lg:py-16" aria-labelledby="assist-cta-heading">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-6">
          <FadeIn direction="up">
            <div>
              <h2
                id="assist-cta-heading"
                className="font-heading font-bold text-white leading-tight mb-1"
                style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)', letterSpacing: '-0.02em' }}
              >
                Ready to discuss your requirements?
              </h2>
              <p className="text-white/70 text-xs max-w-[42ch]">
                Our engineering team will respond within one business day.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <Link to="/contact" className="btn-white shrink-0">
              Contact Our Team
              <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 16 }} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Assistance;
