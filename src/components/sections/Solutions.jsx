// src/components/sections/Solutions.jsx
import { Link } from 'react-router-dom';
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    num: '01',
    category: 'Propulsion System',
    tagline: 'Raw power, precisely engineered for every mission profile.',
    body: 'BLDC motors, carbon-fibre propellers, and integrated propulsion stacks — built for endurance, payload capacity, and long-duration missions.',
    tags: ['BLDC Motors', 'Propellers', 'Propulsion Stack'],
    link: '/creations',
    image: 'https://images.unsplash.com/photo-1578640671548-7c6e27d8d2e0?w=800&q=80&auto=format&fit=crop',
  },
  {
    num: '02',
    category: 'Airframe',
    tagline: 'Strength and precision engineered into every carbon-fibre joint.',
    body: 'Racing, freestyle, and swarm-optimised airframes in carbon-composite materials — built for structural rigidity in the most demanding environments.',
    tags: ['Racing Frame', 'Freestyle Frame', 'Swarm Frame'],
    link: '/creations',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80&auto=format&fit=crop',
  },
  {
    num: '03',
    category: 'Avionics',
    tagline: 'Intelligence at the heart of every flight system.',
    body: 'Flight control computers, ESCs, and communication links supporting Ardupilot, PX4, Betaflight, and more — mission-critical reliability by design.',
    tags: ['FCC', 'ESC', 'Communication'],
    link: '/creations',
    image: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=800&q=80&auto=format&fit=crop',
  },
  {
    num: '04',
    category: 'Custom Integration',
    tagline: 'Your mission. Our engineering. One complete system.',
    body: 'End-to-end custom UAV system design — from bespoke component engineering through full-system integration, testing, and field deployment.',
    tags: ['System Design', 'Custom Parts', 'Field Support'],
    link: '/assistance',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&auto=format&fit=crop',
  },
];

const Solutions = () => (
  <section
    className="section bg-white divide-top"
    aria-labelledby="solutions-heading"
  >
    <div className="container">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow="Our Creations"
            title="What We"
            highlight="Engineer"
            id="solutions-heading"
          />
          <Link
            to="/creations"
            className="inline-flex items-center gap-2 font-label text-[0.6875rem] font-700 uppercase tracking-wide text-orange-500 hover:text-orange-600 transition-colors group self-start lg:self-end"
            aria-label="View all creations"
          >
            View All
            <ArrowForwardIcon sx={{ fontSize: 15 }} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </FadeIn>

      {/* Service grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08} direction="up">
            <article className="group bg-white hover:bg-neutral-50 transition-colors duration-300 overflow-hidden">
              {/* Image */}
              <div className="img-zoom h-52 overflow-hidden" aria-hidden="true">
                <img
                  src={s.image}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-heading font-bold text-neutral-100 group-hover:text-neutral-200 transition-colors leading-none"
                    style={{ fontSize: '3.5rem', letterSpacing: '-0.06em' }}
                    aria-hidden="true"
                  >
                    {s.num}
                  </span>
                  <Link
                    to={s.link}
                    className="w-9 h-9 border border-neutral-200 group-hover:border-orange-500 group-hover:bg-orange-500 flex items-center justify-center transition-all duration-200"
                    aria-label={`Learn more about ${s.category}`}
                    tabIndex={-1}
                  >
                    <ArrowForwardIcon sx={{ fontSize: 15 }} className="text-neutral-400 group-hover:text-white" aria-hidden="true" />
                  </Link>
                </div>

                <h3 className="font-heading font-bold text-black text-2xl mb-2 group-hover:text-orange-500 transition-colors duration-200">
                  {s.category}
                </h3>
                <p className="text-neutral-500 text-[0.8125rem] italic mb-4">{s.tagline}</p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-[44ch]">{s.body}</p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
