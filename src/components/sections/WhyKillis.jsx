// src/components/sections/WhyKillis.jsx
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

const reasons = [
  {
    number: '01',
    title: 'Indigenous at Core',
    body: 'Designed and manufactured in India with zero external dependency.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Engineered to Endure',
    body: 'Rigorous mission testing across temperature, vibration, and endurance.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Sector-Proven',
    body: 'Deployed in agriculture, defence surveillance, and inspection.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Engineering Partner',
    body: 'Scoping, integration, and lifetime after-sales technical support.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Rapid Iteration',
    body: 'In-house prototyping delivering custom solutions in weeks.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="23,4 23,10 17,10"/>
        <polyline points="1,20 1,14 7,14"/>
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Globally Certified',
    body: 'Exported to 10+ countries meeting international aviation standards.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
];

const WhyKillis = () => (
  <section
    className="section bg-white divide-top"
    aria-labelledby="why-killis-heading"
  >
    <div className="container">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Why Killis Bird"
            title="Built Different."
            highlight="On Purpose."
            id="why-killis-heading"
          />
          <p className="text-neutral-500 max-w-[36ch] leading-relaxed text-sm lg:text-right">
            Six principles defining Killis Bird UAV engineering.
          </p>
        </div>
      </FadeIn>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-200 divide-y md:divide-y-0 divide-neutral-200">
        {reasons.map((r, i) => (
          <FadeIn key={i} delay={i * 0.06} direction="up">
            <article
              className={`bg-white flex flex-col gap-4 p-8 h-full border-neutral-200
                ${i % 3 !== 2 ? 'lg:border-r' : ''}
                ${i % 2 === 0 ? 'md:border-r lg:border-r-0' : ''}
                ${i < 3 ? 'lg:border-b' : ''}
              `}
            >
              <div className="flex items-start justify-between">
                <div className="icon-box" aria-hidden="true">{r.icon}</div>
                <span
                  className="font-heading font-bold leading-none text-neutral-200"
                  style={{ fontSize: '2.5rem', letterSpacing: '-0.06em' }}
                  aria-hidden="true"
                >
                  {r.number}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-black text-lg mb-2">
                  {r.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {r.body}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default WhyKillis;
