import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

const statements = [
  {
    label: 'Vision',
    body: "To be the most trusted and innovative leader in UAV components and solutions, recognized for empowering our partners' success through excellence and distinction.",
  },
  {
    label: 'Mission',
    body: 'We design and deliver robust, adaptable, and high-performance UAV components and solutions through continuous innovation, precision engineering, and uncompromising quality, enabling our partners to operate with confidence and achieve lasting success.',
  },
];

const VisionMissionSection = () => (
  <section
    className="section bg-white divide-top divide-bottom"
    aria-labelledby="vision-mission-heading"
  >
    <div className="container">
      <FadeIn direction="up">
        <SectionHeader
          title="Vision &"
          highlight="Mission"
          centered
          className="mb-14"
          id="vision-mission-heading"
        />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 mb-12">
        {statements.map((item, index) => (
          <FadeIn key={item.label} direction="up" delay={index * 0.1}>
            <article className="bg-white p-8 lg:p-12 h-full">
              <div className="eyebrow mb-4">
                <span className="eyebrow-line" aria-hidden="true" />
                {item.label}
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-[48ch]">
                {item.body}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn direction="up" delay={0.15}>
        <p className="mx-auto max-w-3xl text-center text-neutral-600 text-base leading-relaxed">
          From mission-critical defense and surveillance applications to industrial and agricultural operations, Killis Birds delivers trusted UAV solutions engineered for performance, reliability, and operational excellence.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default VisionMissionSection;
