// src/App.jsx
import { Suspense, lazy } from 'react';
import Navbar         from './components/Navbar';
import Hero           from './components/sections/Hero';
import SmoothScroll   from './components/SmoothScroll';
import SectionLoader  from './components/SectionLoader';
import ScrollToTop    from './components/ScrollToTop';
import SEO            from './components/SEO';
import ScrollStack    from './components/ScrollStack';

const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const FAQ         = lazy(() => import('./components/sections/FAQ'));
const CTABanner   = lazy(() => import('./components/sections/CTABanner'));
const Footer      = lazy(() => import('./components/Footer'));

const App = () => (
  <>
    <SEO
      title="Home"
      description="Killis Bird — Precision Engineered UAV components. Indigenous engineering. Built in India. Trusted Worldwide."
    />
    <ScrollToTop />
    <Navbar />

    <ScrollStack>
      {/* ─ Above-the-fold ─ */}
      <Hero />

      {/* ─ Below-the-fold (smooth scroll + lazy) ─ */}
      <SmoothScroll>
        <Suspense fallback={<SectionLoader />}>
          {/* Client testimonials */}
          <Testimonials />

          {/* FAQ accordion */}
          <FAQ />

          {/* Orange CTA banner */}
          <CTABanner />

          {/* Footer */}
          <Footer />
        </Suspense>
      </SmoothScroll>
    </ScrollStack>
  </>
);

export default App;
