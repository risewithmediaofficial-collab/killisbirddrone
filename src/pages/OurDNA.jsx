import { useRef } from 'react';
import SEO from '../components/SEO';
import DnaHero from '../components/sections/DnaHero';
import FoundationSection from '../components/sections/FoundationSection';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import DnaCtaSection from '../components/sections/DnaCtaSection';
import FadeIn from '../components/FadeIn';
import SectionHeader from '../components/SectionHeader';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const milestones = [
  {
    label: 'Born',
    title: 'Founded on 19 May 2023',
    body: 'Founded on 19 May 2023, to build indigenous UAV components for the world.',
  },
  {
    label: 'Testbeds',
    title: 'Quadcopter, Hexacopter, Fixed-Wing, and VTOL',
    body: 'Quadcopter, Hexacopter, Fixed-Wing, and VTOL testing platforms were successfully developed and deployed to validate our indigenous UAV components.',
  },
  {
    label: 'SPARROW',
    title: 'Indigenous Flight Control Card',
    body: 'Successfully developed SPARROW, an indigenous Flight Control Card (FCC), with support for Betaflight, INAV, ArduPilot, and Pixhawk firmware platforms.',
  },
  {
    label: 'VELO',
    title: 'High-Speed Racing Drone Frame',
    body: 'VELO, an indigenous high-speed racing drone frame, was successfully designed and developed to meet the demanding performance requirements of competitive drone racing.',
  },
];

const nextItems = [
  'FCC - FALCON and EAGLE',
  'Thrust Stand - ALTAIR',
  'Frame - Free style frame, Swarm Frame',
  'SWARM - Decentralized Algorithm, GCS',
  'ELRS and ESC',
];

const DnaJourneySection = () => (
  <section className="section bg-white divide-bottom" aria-labelledby="dna-journey-heading">
    <div className="container">
      <FadeIn direction="up">
        <div className="mb-12">
          <SectionHeader
            title="Building Advanced"
            highlight="UAV Solutions"
            id="dna-journey-heading"
            body="Building advanced UAV solutions for defense, surveillance, industrial operations, and precision agriculture — Killis Bird is your trusted partner in flight."
          />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
        {milestones.map((item, index) => (
          <FadeIn key={item.label} direction="up" delay={index * 0.06}>
            <article className="bg-white p-7 lg:p-9 h-full">
              <div className="section-label mb-4">{item.label}</div>
              <h3 className="font-heading font-bold text-black text-xl leading-tight mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {item.body}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn direction="up" delay={0.12}>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 border border-neutral-200 bg-neutral-50 p-7 lg:p-10">
          <div>
            <div className="eyebrow mb-4">
              <span className="eyebrow-line" aria-hidden="true" />
              What's Next
            </div>
            <h3 className="font-heading font-bold text-black text-[clamp(1.5rem,2.4vw,2.2rem)] leading-tight">
              The next engineering frontier.
            </h3>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nextItems.map((item) => (
              <li key={item} className="flex gap-3 bg-white border border-neutral-200 p-4 text-sm text-neutral-600 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 bg-orange-500 flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
  </section>
);

const OurDNA = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef} className="overflow-hidden bg-white">
      <SEO
        title="Our DNA"
        description="Killis Bird - Imagine, Ideate, Innovate. Where Precision Meets Innovation."
      />

      <DnaHero
        title="Killis Bird :: Imagine, Ideate, Innovate"
        highlight=""
        description="Where Precision Meets Innovation"
        watermark="DNA"
      />

      <FoundationSection />

      <VisionMissionSection />

      <DnaJourneySection />

      <DnaCtaSection />
    </div>
  );
};

export default OurDNA;
