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
    year: '19 May 2023',
    title: 'Born',
    body: 'Founded on 19 May 2023, to build indigenous UAV components for the world.',
  },
  {
    year: 'Testbeds',
    title: 'Quadcopter, Hexacopter, Fixed-Wing, and VTOL',
    body: 'Testing platforms were successfully developed and deployed to validate our indigenous UAV components.',
  },
  {
    year: 'SPARROW',
    title: 'Indigenous Flight Control Card',
    body: 'Successfully developed SPARROW, an indigenous Flight Control Card (FCC), with support for Betaflight, INAV, ArduPilot, and Pixhawk firmware platforms.',
  },
  {
    year: 'VELO',
    title: 'High-Speed Racing Drone Frame',
    body: 'VELO, an indigenous high-speed racing drone frame, was successfully designed and developed to meet the demanding performance requirements of competitive drone racing.',
  },
  {
    year: 'What Next',
    title: 'The next engineering frontier',
    body: 'FCC - FALCON and EAGLE. Thrust Stand - ALTAIR. Frame - Free style frame, Swarm Frame. SWARM - Decentralized Algorithm, GCS. ELRS and ESC.',
  },
];

const openings = [
  { role: 'Passionate Engineers', type: 'Shape the future of flight', dept: 'Engineering' },
  { role: 'Innovators', type: 'Build indigenous UAV components', dept: 'R&D' },
  { role: 'Dreamers', type: 'Imagine, Ideate, Innovate', dept: 'Future Team' },
];

const Journey = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef} className="bg-white overflow-hidden">
      <SEO
        title="Journey"
        description="Killis Bird - Imagine, Ideate, Innovate. Shape the Future With Us."
      />

      <SecondaryHero
        title="Killis Bird :: Imagine, Ideate, Innovate"
        highlight=""
        description="Shape the Future With Us"
        watermark="JOURNEY"
      />

      <section
        className="section bg-white divide-top"
        aria-labelledby="timeline-heading"
      >
        <div className="container">
          <FadeIn direction="up">
            <div className="mb-12">
              <SectionHeader
                title="02-07-2026"
                highlight="Journey"
                id="timeline-heading"
              />
              <p className="text-neutral-500 max-w-[58ch] text-sm leading-relaxed mt-4">
                Building advanced UAV solutions for defense, surveillance, industrial operations, and precision agriculture - Killis Bird is your trusted partner in flight.
              </p>
            </div>
          </FadeIn>

          <div className="relative pl-8 lg:pl-12">
            <div
              className="timeline-line"
              aria-hidden="true"
              style={{ left: '16px' }}
            />

            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => (
                <FadeIn key={m.title} delay={i * 0.05} direction="up">
                  <div
                    className={`relative flex flex-col gap-2 pb-10 ${i === milestones.length - 1 ? 'pb-0' : ''}`}
                    role="listitem"
                  >
                    <div
                      className="timeline-dot absolute -left-[24px] top-1.5"
                      aria-hidden="true"
                      style={{ left: '-21px' }}
                    />

                    <div className="eyebrow mb-0">
                      <span className="eyebrow-line" aria-hidden="true" />
                      {m.year}
                    </div>

                    <div className="max-w-2xl">
                      <h3
                        className="font-heading font-bold text-black mb-1"
                        style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
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

      <section
        className="section bg-white divide-top"
        aria-labelledby="careers-heading"
      >
        <div className="container">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <SectionHeader
                title="Join the"
                highlight="Journey"
                id="careers-heading"
              />
              <p className="text-neutral-500 max-w-[44ch] text-sm leading-relaxed">
                Looking for passionate engineers, innovators, and dreamers to shape the future of flight.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-px bg-neutral-200 border border-neutral-200" role="list" aria-label="Join us">
            {openings.map((o, i) => (
              <FadeIn key={o.role} delay={i * 0.05} direction="up">
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
                      className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase text-orange-500 hover:text-orange-600 transition-colors shrink-0"
                      aria-label={`Contact Killis Bird about ${o.role}`}
                    >
                      Connect
                      <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 13 }} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
