import { Link } from 'react-router-dom';
import FadeIn from '../FadeIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FoundationSection = () => (
  <section
    className="section bg-white divide-bottom"
    aria-labelledby="foundation-heading"
  >
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn direction="left" duration={0.8}>
          <div className="relative">
            <div
              className="img-zoom aspect-[4/3] overflow-hidden bg-neutral-100 rounded-lg"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -right-4 bg-orange-500 px-6 py-4 z-10"
              aria-hidden="true"
            >
              <div className="font-heading font-bold text-white text-2xl leading-none">19 May</div>
              <div className="text-white/75 text-[0.5625rem] uppercase mt-1">Founded 2023</div>
            </div>
            <div
              className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-orange-500 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </FadeIn>

        <FadeIn direction="right" duration={0.8} delay={0.1}>
          <div className="flex flex-col gap-5">
            <div className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              The DNA of Killis Bird
            </div>

            <h2
              id="foundation-heading"
              className="font-heading font-bold text-black leading-[1.1]"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              The DNA of<br />
              <span className="text-orange-500">Killis Bird.</span>
            </h2>

            <div className="text-neutral-600 text-sm leading-relaxed max-w-[54ch] space-y-4">
              <p>
                At Killis Birds, our core is precision engineered with imagination, ideation, and innovation.
              </p>
              <p>
                This DNA powers the design and delivery of next generation UAV components and solutions that expand the possibilities of aerospace and defense.
              </p>
              <p>
                Each creation embodies visionary thinking, rigorous engineering, and uncompromising excellence — we shape the future of flight.
              </p>
              <p className="font-bold text-black">Built in India. Trusted worldwide.</p>
            </div>

            <div className="mt-2">
              <Link to="/creations" className="btn-primary">
                Explore Creations
                <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default FoundationSection;
