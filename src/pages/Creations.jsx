// src/pages/Creations.jsx
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import SecondaryHero from '../components/common/SecondaryHero';
import FadeIn from '../components/FadeIn';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import { categories } from '../data/products';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/* Category images */
const categoryImages = {
  'Propulsion System': 'https://images.unsplash.com/photo-1578640671548-7c6e27d8d2e0?w=600&q=80&auto=format&fit=crop',
  'Airframe':          'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80&auto=format&fit=crop',
  'Avionics':          'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=600&q=80&auto=format&fit=crop',
};

const productImages = {
  'bldc-motors':               'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=500&q=80&auto=format&fit=crop',
  'propellers':                'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80&auto=format&fit=crop',
  'propulsion-stack':          'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=500&q=80&auto=format&fit=crop',
  'racing-frame':              'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&q=80&auto=format&fit=crop',
  'freestyle-frame':           'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=500&q=80&auto=format&fit=crop',
  'swarm-frame':               'https://images.unsplash.com/photo-1581092160607-a04b3d6f5d38?w=500&q=80&auto=format&fit=crop',
  'fcc-flight-control-computer': 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=500&q=80&auto=format&fit=crop',
  'esc-electronic-speed-controller': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&q=80&auto=format&fit=crop',
  'communication-system':      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&auto=format&fit=crop',
};

/* Product Card */
const ProductCard = ({ product, index }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    className="bg-white border border-neutral-200 flex flex-col overflow-hidden"
    aria-label={product.name}
  >
    {/* Image */}
    <div className="img-zoom aspect-[4/3] overflow-hidden bg-neutral-50 relative">
      <img
        src={productImages[product.id] || categoryImages['Avionics']}
        alt={product.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      {/* Model tag */}
      <div className="absolute top-3 left-3">
        <span className="tag bg-white/90 border-white/50 text-neutral-700">{product.model}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1 gap-3">
      <div>
        <h3 className="font-heading font-bold text-black text-lg mb-1.5">
          {product.name}
        </h3>
        <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-1.5" aria-label="Key features">
        {product.features.slice(0, 3).map((f, fi) => (
          <li key={fi} className="flex items-center gap-2 text-xs text-neutral-600">
            <span className="w-3.5 h-3.5 border border-orange-200 bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0" aria-hidden="true">
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Firmware tags (avionics only) */}
      {product.firmware && (
        <div className="flex flex-wrap gap-1">
          {product.firmware.map(fw => (
            <span key={fw} className="tag tag-orange text-[0.625rem]">{fw}</span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto pt-3 border-t border-neutral-100 flex items-center justify-between">
        <span className="font-label font-semibold text-orange-500 text-xs uppercase tracking-wide">
          {product.price}
        </span>
        <Link
          to={`/creations/${product.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 hover:text-orange-500 transition-colors"
          aria-label={`View details for ${product.name}`}
        >
          Details
          <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 13 }} />
        </Link>
      </div>
    </div>
  </motion.article>
);

/* Category Tab */
const CategoryTab = ({ cat, active, onClick }) => (
  <button
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className={`relative flex items-center gap-2.5 px-0 py-3.5 font-label font-semibold text-xs uppercase tracking-wide border-b-2 transition-all duration-200 whitespace-nowrap ${
      active
        ? 'text-orange-500 border-orange-500'
        : 'text-neutral-400 border-transparent hover:text-neutral-700'
    }`}
  >
    <span className="text-xs font-bold text-neutral-300" aria-hidden="true">{cat.num}</span>
    {cat.category}
  </button>
);

const Creations = () => {
  const pageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useBookScrollEffects(pageRef);

  const activeCat = categories[activeIndex];

  return (
    <div ref={pageRef} className="bg-white overflow-hidden">
      <SEO
        title="Creations"
        description="Killis Bird — Precision-engineered UAV components: propulsion systems, airframes, and avionics."
      />

      <SecondaryHero
        eyebrow="Our Products"
        title="Precision"
        highlight="Creations."
        description="UAV component ecosystem — designed in India for demanding global missions."
        watermark="CREATE"
      />

      {/* ─ Product catalogue ─ */}
      <section
        className="section bg-white divide-top"
        aria-label="Product catalogue"
      >
        <div className="container">

          {/* Category tabs */}
          <div
            className="flex gap-8 border-b border-neutral-200 mb-10 overflow-x-auto scrollbar-hide"
            role="tablist"
            aria-label="Product categories"
          >
            {categories.map((cat, i) => (
              <CategoryTab
                key={cat.num}
                cat={cat}
                active={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* Active category info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category header */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-8">
                <div>
                  <h2
                    className="font-heading font-bold text-black leading-tight"
                    style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.8rem)', letterSpacing: '-0.02em' }}
                  >
                    {activeCat.category}
                  </h2>
                  <p className="text-neutral-500 text-xs mt-1 italic">{activeCat.tagline}</p>
                </div>
                <div className="flex items-center gap-2" aria-label={`${activeCat.products.length} products in this category`}>
                  <span className="tag">{activeCat.products.length} Products</span>
                </div>
              </div>

              {/* Products grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                layout
              >
                <AnimatePresence mode="popLayout">
                  {activeCat.products.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA */}
          <div className="mt-12 pt-10 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading font-bold text-black text-lg mb-0.5">
                Need a custom component?
              </p>
              <p className="text-neutral-500 text-xs">
                Designing and manufacturing to your exact mission specifications.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Request a Quote
              <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creations;
