// src/components/sections/Testimonials.jsx
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    quote: 'Killis Bird components set a new benchmark for precision and reliability across our fleet.',
    name: 'Rajiv Sharma',
    initial: 'R',
    sector: 'Agriculture',
  },
  {
    quote: 'Extraordinary attention to detail. Consistent quality across mission-critical programmes.',
    name: 'Priya Nair',
    initial: 'P',
    sector: 'Defence',
  },
  {
    quote: 'Innovation, quality, and unmatched technical support. A genuine engineering partner.',
    name: 'Arjun Menon',
    initial: 'A',
    sector: 'Agri-Tech',
  },
];

const Testimonials = () => (
  <section
    className="section bg-white divide-top"
    aria-labelledby="testimonials-heading"
  >
    <div className="container">
      {/* Header */}
      <FadeIn direction="up">
        <SectionHeader
          eyebrow="Client Voices"
          title="Trusted by"
          highlight="Industry Leaders"
          centered
          className="mb-12"
          id="testimonials-heading"
        />
      </FadeIn>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.08} direction="up">
            <article className="bg-white border border-neutral-200 p-8 flex flex-col gap-4 h-full" aria-label={`Testimonial from ${t.name}`}>
              {/* Stars */}
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, si) => (
                  <StarIcon key={si} aria-hidden="true" sx={{ fontSize: 14, color: '#ff6b00' }} />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-neutral-700 text-xs leading-relaxed italic flex-1">
                "{t.quote}"
              </blockquote>

              {/* Divider */}
              <div className="border-t border-neutral-100 my-1" role="separator" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 bg-orange-50 border border-orange-100 flex items-center justify-center font-heading font-bold text-orange-500 text-xs flex-shrink-0"
                  aria-hidden="true"
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-heading font-bold text-black text-xs leading-tight">{t.name}</p>
                </div>
                <div className="ml-auto">
                  <span className="tag tag-orange text-[0.625rem]">{t.sector}</span>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
