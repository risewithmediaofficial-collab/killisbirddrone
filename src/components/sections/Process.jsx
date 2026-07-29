// src/components/sections/Process.jsx
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Consult',
    body: 'Scoping operational environment, payload demands, and mission targets.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design',
    body: 'Translating requirements into structural analysis and system architecture.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Engineer',
    body: 'In-house manufacturing and testing across thermal and vibration profiles.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Deliver',
    body: 'Deployment assistance, field testing, and long-term technical support.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
      </svg>
    ),
  },
];

const Process = () => (
  <section
    className="section bg-white divide-top"
    aria-labelledby="process-heading"
  >
    <div className="container">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="How We Work"
            title="Our"
            highlight="Process"
            id="process-heading"
          />
          <p className="text-neutral-500 max-w-[36ch] leading-relaxed text-sm">
            Disciplined engineering ensuring every deliverable meets mission specs.
          </p>
        </div>
      </FadeIn>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 0.08} direction="up">
            <div className="bg-white p-8 group flex flex-col gap-6 h-full">
              {/* Number */}
              <div className="flex items-center justify-between">
                <span
                  className="font-heading font-bold text-neutral-200 leading-none"
                  style={{ fontSize: '3rem', letterSpacing: '-0.06em' }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div className="w-10 h-10 border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-600">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
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
