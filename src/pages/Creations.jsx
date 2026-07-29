import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SecondaryHero from '../components/common/SecondaryHero';
import FadeIn from '../components/FadeIn';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import { categories } from '../data/products';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FrameArt = () => (
  <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
    <rect width="320" height="240" fill="#fff" />
    <g transform="translate(160 120)" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="-32" y="-32" width="64" height="64" rx="10" fill="#111" stroke="#ff6b00" strokeWidth="4" />
      {[
        [-92, -72], [92, -72], [-92, 72], [92, 72],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <line x1={x > 0 ? 32 : -32} y1={y > 0 ? 32 : -32} x2={x} y2={y} stroke="#1f2937" strokeWidth="14" />
          <circle cx={x} cy={y} r="28" fill="#fff7ed" stroke="#111" strokeWidth="8" />
          <circle cx={x} cy={y} r="13" fill="#ff6b00" />
        </g>
      ))}
      <circle r="10" fill="#fff" />
    </g>
  </svg>
);

const FccArt = () => (
  <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
    <rect width="320" height="240" fill="#fff" />
    <g transform="translate(160 120)">
      <rect x="-70" y="-70" width="140" height="140" rx="14" fill="#141414" stroke="#ff6b00" strokeWidth="5" />
      <rect x="-32" y="-32" width="64" height="64" rx="8" fill="#2b2b2b" stroke="#94a3b8" strokeWidth="3" />
      {[-48, -16, 16, 48].map((x) => (
        <g key={x}>
          <rect x={x - 7} y="-88" width="14" height="18" rx="3" fill="#f8e7c6" />
          <rect x={x - 7} y="70" width="14" height="18" rx="3" fill="#f8e7c6" />
          <rect x="-88" y={x - 7} width="18" height="14" rx="3" fill="#f8e7c6" />
          <rect x="70" y={x - 7} width="18" height="14" rx="3" fill="#f8e7c6" />
        </g>
      ))}
      {[
        [-58, -58], [58, -58], [-58, 58], [58, 58],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="13" fill="#fff" stroke="#facc15" strokeWidth="5" />
      ))}
      <text x="0" y="7" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff">FCC</text>
    </g>
  </svg>
);

const EscArt = () => (
  <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
    <rect width="320" height="240" fill="#fff" />
    <g transform="translate(160 120)">
      <rect x="-98" y="-54" width="196" height="108" rx="12" fill="#151515" stroke="#ff6b00" strokeWidth="5" />
      {[-60, 0, 60].map((x) => (
        <rect key={x} x={x - 22} y="-28" width="44" height="56" rx="8" fill="#2f2f2f" stroke="#f8e7c6" strokeWidth="4" />
      ))}
      {[-72, -24, 24, 72].map((x) => (
        <g key={x}>
          <line x1={x} y1="-54" x2={x} y2="-82" stroke="#94a3b8" strokeWidth="7" />
          <line x1={x} y1="54" x2={x} y2="82" stroke="#94a3b8" strokeWidth="7" />
        </g>
      ))}
      <text x="0" y="8" textAnchor="middle" fontSize="20" fontWeight="800" fill="#ff6b00">ESC</text>
    </g>
  </svg>
);

const PropellerArt = () => (
  <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
    <rect width="320" height="240" fill="#fff" />
    <g transform="translate(160 120)">
      <path d="M0 -15 C-18 -92 -98 -98 -112 -70 C-126 -42 -42 -22 0 -15Z" fill="#111" />
      <path d="M0 15 C18 92 98 98 112 70 C126 42 42 22 0 15Z" fill="#111" />
      <path d="M-15 0 C-92 18 -98 98 -70 112 C-42 126 -22 42 -15 0Z" fill="#334155" />
      <path d="M15 0 C92 -18 98 -98 70 -112 C42 -126 22 -42 15 0Z" fill="#334155" />
      <circle r="25" fill="#ff6b00" stroke="#111" strokeWidth="6" />
      <circle r="8" fill="#fff" />
    </g>
  </svg>
);

const artByCategory = {
  Airframe: <FrameArt />,
  'Flight Controller': <FccArt />,
  ESC: <EscArt />,
  Propeller: <PropellerArt />,
};

const ProductTile = ({ category, index }) => {
  const product = category.products[0];

  return (
    <FadeIn delay={index * 0.08} direction="up">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-4"
      >
        <h2 className="font-heading font-bold text-black text-center text-[clamp(1.35rem,2vw,1.9rem)] leading-tight">
          {category.category}
        </h2>

        <Link
          to={`/creations/${product.id}`}
          className="group w-full bg-white border border-neutral-200 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label={`View ${product.name}`}
        >
          <div className="aspect-square bg-white p-4 flex items-center justify-center">
            {artByCategory[category.category]}
          </div>
        </Link>

        <div className="text-center max-w-[28ch]">
          <h3 className="font-heading font-bold text-black text-xl leading-tight">
            {product.name}
          </h3>
          <p className="text-neutral-500 text-xs leading-relaxed mt-2">
            {product.model}
          </p>
          <Link
            to={`/creations/${product.id}`}
            className="inline-flex items-center gap-1.5 mt-3 text-[0.75rem] font-bold text-orange-500 hover:text-orange-600"
          >
            Details
            <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 14 }} />
          </Link>
        </div>
      </motion.article>
    </FadeIn>
  );
};

const Creations = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef} className="bg-white overflow-hidden">
      <SEO
        title="Creations"
        description="Killis Bird - Imagine, Ideate, Innovate. Engineered for Excellence."
      />

      <SecondaryHero
        title="Killis Bird :: Imagine, Ideate, Innovate"
        highlight=""
        description="Engineered for Excellence"
        watermark="CREATIONS"
      />

      <section className="section bg-white divide-top" aria-label="Killis Bird creations">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
            {categories.map((category, index) => (
              <ProductTile key={category.num} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creations;
