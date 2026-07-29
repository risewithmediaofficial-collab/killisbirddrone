// src/components/sections/VisionMissionSection.jsx
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

const values = [
  {
    title: 'Precision',
    body: 'Highest standards in measurement, material, and tolerances.',
    icon: '⬡',
  },
  {
    title: 'Integrity',
    body: 'Honesty and safety in every component built.',
    icon: '◈',
  },
  {
    title: 'Innovation',
    body: 'Continuous improvement and relentless engineering design.',
    icon: '✦',
  },
  {
    title: 'Partnership',
    body: 'Long-term collaborative success with our clients.',
    icon: '◎',
  },
];

const VisionMissionSection = () => (
  <section
    className="section bg-white divide-top divide-bottom"
    aria-labelledby="vision-mission-heading"
  >
    <div className="container">

      {/* ─ Section label ─ */}
      <FadeIn direction="up">
        <SectionHeader
          eyebrow="Our Purpose"
          title="Mission &"
          highlight="Vision"
          centered
          className="mb-14"
          id="vision-mission-heading"
        />
      </FadeIn>

      {/* ─ Mission / Vision cards ─ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 mb-16">

        {/* Mission */}
        <FadeIn direction="up">
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-between h-full">
            <div>
              <div className="eyebrow mb-4">
                <span className="eyebrow-line" aria-hidden="true" />
                Mission
              </div>
              <h3
                className="font-heading font-bold text-black leading-[1.15] mb-4"
                style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', letterSpacing: '-0.02em' }}
              >
                Engineering precision UAV components empowering operators to achieve more in any environment.
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-[42ch]">
                Leading UAV tech through indigenous Indian engineering — one precision part at a time.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Vision */}
        <FadeIn direction="up" delay={0.1}>
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-between h-full">
            <div>
              <div className="eyebrow mb-4">
                <span className="eyebrow-line" aria-hidden="true" />
                Vision
              </div>
              <h3
                className="font-heading font-bold text-black leading-[1.15] mb-4"
                style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', letterSpacing: '-0.02em' }}
              >
                To be the world's most trusted indigenous source for mission-critical UAV systems.
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-[42ch]">
                Powering defence, commercial, and research UAV programmes globally with Killis Bird core tech.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ─ Core Values ─ */}
      <FadeIn direction="up" delay={0.1}>
        <h3
          className="font-heading font-bold text-black text-center mb-10"
          style={{ fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', letterSpacing: '-0.02em' }}
        >
          Core <span className="text-orange-500">Values</span>
        </h3>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
        {values.map((v, i) => (
          <FadeIn key={i} delay={i * 0.08} direction="up">
            <div className="bg-white p-8 flex flex-col gap-3 h-full">
              <span
                className="text-orange-500 text-2xl leading-none"
                aria-hidden="true"
              >
                {v.icon}
              </span>
              <h4 className="font-heading font-bold text-black text-lg">
                {v.title}
              </h4>
              <p className="text-neutral-500 text-xs leading-relaxed">
                {v.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMissionSection;
