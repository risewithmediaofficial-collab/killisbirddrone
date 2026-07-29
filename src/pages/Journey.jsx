// src/pages/Journey.jsx
import { useRef } from 'react';
import SEO from '../components/SEO';
import SecondaryHero from '../components/common/SecondaryHero';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';

const milestones = [
  {
    year: '2018',
    title: 'The Spark',
    body: 'Founded in Krishnagiri to pioneer indigenous UAV component manufacturing.',
  },
  {
    year: '2019',
    title: 'First Prototype',
    body: 'Developed and field-tested our first agricultural brushless motor series.',
  },
  {
    year: '2020',
    title: 'Industry Recognition',
    body: 'Awarded Most Innovative UAV Startup at National Aerospace Summit.',
  },
  {
    year: '2021',
    title: 'Defence Partnerships',
    body: 'Secured strategic partnerships with leading defence integrators.',
  },
  {
    year: '2022',
    title: 'Swarm Technology',
    body: 'Demonstrated swarm modules across 20-UAV formation flight trials.',
  },
  {
    year: '2023',
    title: 'Global Reach',
    body: 'Expanded exports to 10+ countries across Asia, Europe, and Middle East.',
  },
  {
    year: '2024',
    title: 'Next-Gen Avionics',
    body: 'Launched MicoAir743v2 AIO avionics platform for commercial UAVs.',
  },
  {
    year: '2025+',
    title: 'The Future',
    body: 'Pioneering autonomous multi-domain aerial systems.',
  },
];

const openings = [
  { role: 'Aerospace Systems Engineer',  type: 'Full Time · Bangalore',  dept: 'Engineering' },
  { role: 'Embedded Software Developer', type: 'Full Time · Remote',     dept: 'Avionics' },
  { role: 'UAV Test Pilot & Analyst',    type: 'Contract · Hyderabad',   dept: 'Operations' },
  { role: 'Supply Chain Manager',        type: 'Full Time · Chennai',    dept: 'Logistics' },
  { role: 'Composite Materials Engineer',type: 'Full Time · Krishnagiri',dept: 'Manufacturing' },
];

const Journey = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef} className="bg-white overflow-hidden">
      <SEO
        title="Our Journey"
        description="Killis Bird — From a small team in Tamil Nadu to a globally trusted UAV component manufacturer."
      />

      <SecondaryHero
        eyebrow="Our Timeline"
        title="The Killis Bird"
        highlight="Journey."
        description="Every milestone shaping our mission since 2018."
        watermark="JOURNEY"
      />

      {/* ─ Timeline ─ */}
      <section
        className="section bg-white divide-top"
        aria-labelledby="timeline-heading"
      >
        <div className="container">
          <FadeIn direction="up">
            <SectionHeader
              eyebrow="Milestones"
              title="Our"
              highlight="Story"
              className="mb-12"
              id="timeline-heading"
            />
          </FadeIn>

          {/* Timeline items */}
          <div className="relative pl-8 lg:pl-12">
            {/* Vertical line */}
            <div
              className="timeline-line"
              aria-hidden="true"
              style={{ left: '16px' }}
            />

            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => (
                <FadeIn key={i} delay={i * 0.05} direction="up">
                  <div
                    className={`relative flex flex-col gap-2 pb-10 ${i === milestones.length - 1 ? 'pb-0' : ''}`}
                    role="listitem"
                  >
                    {/* Dot */}
                    <div
                      className="timeline-dot absolute -left-[24px] top-1.5"
                      aria-hidden="true"
                      style={{ left: '-21px' }}
                    />

                    {/* Year eyebrow */}
                    <div className="eyebrow mb-0">
                      <span className="eyebrow-line" aria-hidden="true" />
                      {m.year}
                    </div>

                    {/* Content */}
                    <div className="max-w-xl">
                      <h3
                        className="font-heading font-bold text-black mb-1"
                        style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', letterSpacing: '-0.02em' }}
                      >
                        {m.title}
                      </h3>
                      <p className="text-neutral-500 text-xs leading-relaxed">
                        {m.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─ Careers ─ */}
      <section
        className="section bg-white divide-top"
        aria-labelledby="careers-heading"
      >
        <div className="container">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <SectionHeader
                eyebrow="Join the Team"
                title="Open"
                highlight="Positions"
                id="careers-heading"
              />
              <p className="text-neutral-500 max-w-[36ch] text-xs leading-relaxed">
                Looking for talented engineers who share our passion for precision.
              </p>
            </div>
          </FadeIn>

          {/* Job listings */}
          <div className="flex flex-col gap-px bg-neutral-200 border border-neutral-200" role="list" aria-label="Open positions">
            {openings.map((o, i) => (
              <FadeIn key={i} delay={i * 0.05} direction="up">
                <div
                  className="bg-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  role="listitem"
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-box shrink-0" aria-hidden="true">
                      <WorkIcon sx={{ fontSize: 16 }} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-black text-base">
                        {o.role}
                      </h3>
                      <p className="text-neutral-500 text-xs mt-0.5">{o.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="tag">{o.dept}</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-orange-500 hover:text-orange-600 transition-colors shrink-0"
                      aria-label={`Apply for ${o.role}`}
                    >
                      Apply
                      <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 13 }} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* No fit / general */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-8 p-6 border border-neutral-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-heading font-bold text-black text-base mb-0.5">
                  Don't see a matching role?
                </p>
                <p className="text-neutral-500 text-xs">
                  Send us your CV — we are always interested in exceptional candidates.
                </p>
              </div>
              <Link to="/contact" className="btn-primary shrink-0">
                Send Your CV
                <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Journey;
