import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

const partners = [
  'Defense',
  'Surveillance',
  'Industrial Operations',
  'Precision Agriculture',
  'Aerospace',
  'UAV Integrators',
];

const FAQ = () => (
  <section
    className="section bg-white divide-top"
    aria-labelledby="partners-heading"
  >
    <div className="container">
      <FadeIn direction="up">
        <SectionHeader
          title="Partners"
          highlight=""
          centered
          className="mb-10"
          id="partners-heading"
        />
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-200 border border-neutral-200">
        {partners.map((partner, i) => (
          <FadeIn key={partner} delay={i * 0.05} direction="up">
            <div className="bg-white min-h-[112px] px-5 py-5 text-neutral-500 hover:text-orange-500 font-heading font-bold text-sm uppercase transition-colors duration-300 flex items-center justify-center text-center">
              {partner}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
