// src/layouts/MainLayout.jsx
import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import ScrollStack from '../components/ScrollStack';
import GlobalTextReveal from '../components/GlobalTextReveal';

const Footer = lazy(() => import('../components/Footer'));

const MainLayout = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <GlobalTextReveal />
    <main style={{ paddingTop: '82px' }}>
      <ScrollStack>
        <Outlet />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </ScrollStack>
    </main>
  </>
);

export default MainLayout;
