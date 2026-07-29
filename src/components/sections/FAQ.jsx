// src/components/sections/FAQ.jsx
import { useState } from 'react';
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

const faqs = [
  {
    q: 'What types of UAV components do you manufacture?',
    a: 'BLDC motors, propellers, propulsion stacks, carbon airframes, flight control computers, ESCs, and communication systems.',
  },
  {
    q: 'Do you supply to the defence sector?',
    a: 'Yes. We partner with defence integrators supplying defence-grade components that meet strict reliability standards.',
  },
  {
    q: 'Can you develop custom components?',
    a: 'Yes. Our team provides custom scoping, prototyping, testing, and production in 6–12 weeks.',
  },
  {
    q: 'What firmware platforms do your flight controllers support?',
    a: 'Ardupilot, Skybrush, PX4, INAV, and Betaflight.',
  },
  {
    q: 'Do you export internationally?',
    a: 'Yes, we export to 10+ countries with full documentation for customs and compliance.',
  },
  {
    q: 'What after-sales support do you provide?',
    a: 'Dedicated technical support, field service visits, spare parts dispatch, and operator training.',
  },
];

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item" role="listitem">
      <button
        className="accordion-trigger"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={`faq-body-${index}`}
        id={`faq-trigger-${index}`}
      >
        <span className="pr-6 font-label font-semibold text-black text-sm">{item.q}</span>
        <div className={`accordion-icon ${open ? 'open' : ''}`} aria-hidden="true">
          {open ? '−' : '+'}
        </div>
      </button>

      <div
        id={`faq-body-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        className="accordion-body"
        style={{ maxHeight: open ? '200px' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="accordion-content text-xs text-neutral-500 pb-4">
          {item.a}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section
    className="section bg-white divide-top"
    aria-labelledby="faq-heading"
  >
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left — header */}
        <div className="lg:col-span-4">
          <FadeIn direction="up">
            <SectionHeader
              eyebrow="FAQ"
              title="Questions"
              highlight="Answered"
              id="faq-heading"
            />
            <p className="text-neutral-500 text-xs leading-relaxed mt-3 max-w-[32ch]">
              Key details about our products and capabilities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-5 text-orange-500 hover:text-orange-600 font-label text-[0.6875rem] font-700 uppercase tracking-wide transition-colors"
              aria-label="Contact us for more information"
            >
              Ask us directly
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </FadeIn>
        </div>

        {/* Right — accordion */}
        <div className="lg:col-span-8" role="list" aria-label="Frequently asked questions">
          {faqs.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05} direction="up">
              <FAQItem item={item} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
