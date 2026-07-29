// src/routes/AppRoutes.jsx
import { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import App from '../App';
import LazySection from '../components/LazySection';

const OurDNA      = lazy(() => import('../pages/OurDNA'));
const Creations   = lazy(() => import('../pages/Creations'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Assistance  = lazy(() => import('../pages/Assistance'));
const Blog        = lazy(() => import('../pages/Blog'));
const Journey     = lazy(() => import('../pages/Journey'));
const Contact     = lazy(() => import('../pages/Contact'));

// Thin wrapper: mounts immediately (no intersection needed for route top)
const Page = ({ children }) => (
  <LazySection rootMargin="0px" minHeight="100vh">
    {children}
  </LazySection>
);

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* Home page — direct, handles its own Navbar/Footer and lazy-loads below fold */}
      <Route path="/" element={<App />} />

      {/* Other pages use MainLayout for unified Navbar/Footer wrap */}
      <Route element={<MainLayout />}>
        <Route path="/our-dna"          element={<Page><OurDNA /></Page>} />
        <Route path="/creations"        element={<Page><Creations /></Page>} />
        <Route path="/creations/:productId" element={<Page><ProductDetail /></Page>} />
        <Route path="/assistance"       element={<Page><Assistance /></Page>} />
        <Route path="/blog"             element={<Page><Blog /></Page>} />
        <Route path="/journey"          element={<Page><Journey /></Page>} />
        <Route path="/contact"          element={<Page><Contact /></Page>} />
        <Route path="*"                 element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

