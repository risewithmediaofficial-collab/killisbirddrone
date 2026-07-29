import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

const steps = [
  {
    number: '01',
    title: 'FCC - FALCON and EAGLE',
    body: 'Next generation indigenous flight control cards.',
  },
  {
    number: '02',
    title: 'Thrust Stand - ALTAIR',
    body: 'Precision testing infrastructure for propulsion validation.',
  },
  {
    number: '03',
    title: 'Frames',
    body: 'Free style frame and swarm frame platforms.',
  },
  {
    number: '04',
    title: 'SWARM, ELRS and ESC',
    body: 'Decentralized algorithm, GCS, communication, and speed control systems.',
  },
];

const Process = () => (
  <section
    className="section bg-white divide-top"
    aria-labelledby="process-heading"
  >
    <div className="container">
      <FadeIn direction="up">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeader
            title="What's"
            highlight="Next"
            id="process-heading"
          />
          <p className="text-neutral-500 max-w-[40ch] leading-relaxed text-sm">
            Building advanced UAV solutions for defense, surveillance, industrial operations, and precision agriculture.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.08} direction="up">
            <div className="bg-white border border-neutral-200 p-8 group flex flex-col gap-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-card">
              <div className="aspect-[4/3] bg-neutral-50 border border-neutral-100 flex items-center justify-center">
                <span
                  className="font-heading font-bold text-neutral-200 leading-none"
                  style={{ fontSize: 'clamp(4rem,7vw,6rem)' }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-orange-500">KB</div>
                <h3 className="font-heading font-bold text-black text-xl">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
