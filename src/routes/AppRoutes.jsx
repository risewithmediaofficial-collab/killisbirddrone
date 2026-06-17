// src/routes/AppRoutes.jsx
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import App from '../App';
import SectionLoader from '../components/SectionLoader';

const OurDNA = lazy(() => import('../pages/OurDNA'));
const Creations = lazy(() => import('../pages/Creations'));
const Assistance = lazy(() => import('../pages/Assistance'));
const Blog = lazy(() => import('../pages/Blog'));
const Journey = lazy(() => import('../pages/Journey'));
const Contact = lazy(() => import('../pages/Contact'));

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* Home page is direct, handles its own Navbar/Footer and lazy-loads below fold */}
      <Route path="/" element={<App />} />
      
      {/* Other pages use MainLayout for unified Navbar/Footer wrap */}
      <Route element={<MainLayout />}>
        <Route path="/our-dna" element={<Suspense fallback={<SectionLoader />}><OurDNA /></Suspense>} />
        <Route path="/creations" element={<Suspense fallback={<SectionLoader />}><Creations /></Suspense>} />
        <Route path="/assistance" element={<Suspense fallback={<SectionLoader />}><Assistance /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<SectionLoader />}><Blog /></Suspense>} />
        <Route path="/journey" element={<Suspense fallback={<SectionLoader />}><Journey /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<SectionLoader />}><Contact /></Suspense>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

