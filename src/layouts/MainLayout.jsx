// src/layouts/MainLayout.jsx
import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import ScrollStack from '../components/ScrollStack';
import GlobalTextReveal from '../components/GlobalTextReveal';
import SectionLoader from '../components/SectionLoader';

const Footer = lazy(() => import('../components/Footer'));

const MainLayout = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <GlobalTextReveal />
    <main style={{ paddingTop: '82px' }}>
      <ScrollStack>
        <Outlet />
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </ScrollStack>
    </main>
  </>
);

export default MainLayout;
