// src/App.jsx
import { lazy } from 'react';
import Navbar         from './components/Navbar';
import Hero           from './components/sections/Hero';
import SmoothScroll   from './components/SmoothScroll';
import ScrollToTop    from './components/ScrollToTop';
import SEO            from './components/SEO';
import ScrollStack    from './components/ScrollStack';
import LazySection    from './components/LazySection';

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
      {/* ─ Above-the-fold — renders immediately ─ */}
      <Hero />

      {/* ─ Below-the-fold — each section lazy-mounts when near viewport ─ */}
      <SmoothScroll>
        <LazySection rootMargin="300px 0px" minHeight="400px">
          <Testimonials />
        </LazySection>

        <LazySection rootMargin="300px 0px" minHeight="300px">
          <FAQ />
        </LazySection>

        <LazySection rootMargin="200px 0px" minHeight="200px">
          <CTABanner />
        </LazySection>

        <LazySection rootMargin="200px 0px" minHeight="300px">
          <Footer />
        </LazySection>
      </SmoothScroll>
    </ScrollStack>
  </>
);

export default App;

