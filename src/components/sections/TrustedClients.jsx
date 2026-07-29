// src/components/sections/TrustedClients.jsx
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

/* Gallery images — Unsplash drone/UAV themed */
const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80&auto=format&fit=crop',
    label: 'Agricultural UAV',
    category: 'Agri-Tech',
  },
  {
    src: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=800&q=80&auto=format&fit=crop',
    label: 'Defence Surveillance',
    category: 'Defence',
  },
  {
    src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&auto=format&fit=crop',
    label: 'Aerial Inspection',
    category: 'Inspection',
  },
  {
    src: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800&q=80&auto=format&fit=crop',
    label: 'Research Platform',
    category: 'Research',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160607-a04b3d6f5d38?w=800&q=80&auto=format&fit=crop',
    label: 'Swarm Operations',
    category: 'Swarm Tech',
  },
  {
    src: 'https://images.unsplash.com/photo-1578640671548-7c6e27d8d2e0?w=800&q=80&auto=format&fit=crop',
    label: 'Industrial UAV',
    category: 'Industrial',
  },
];

/* Partner names */
const partners = [
  'AeroVentures', 'DefenceTech Systems', 'SkyAgri Corp',
  'InspectX', 'SwarmLabs', 'AviaNXT', 'SkyDrones India', 'UAV Nexus',
];

const TrustedClients = () => (
  <section
    className="section bg-white divide-top"
    aria-labelledby="gallery-heading"
  >
    <div className="container">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Field Applications"
            title="Deployed Across"
            highlight="Sectors"
            id="gallery-heading"
          />
          <p className="text-neutral-500 max-w-[40ch] leading-relaxed text-sm">
            Killis Bird components power operations across agriculture, defence, inspection, and research.
          </p>
        </div>
      </FadeIn>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 mb-16">
        {gallery.map((item, i) => (
          <FadeIn key={i} delay={i * 0.07} direction="up">
            <div className="group relative img-zoom bg-neutral-100 aspect-[4/3] overflow-hidden">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="tag tag-orange mb-2 inline-flex">{item.category}</span>
                <p className="font-heading font-bold text-white text-lg leading-tight">{item.label}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Partners strip */}
      <FadeIn direction="up">
        <div className="border-t border-neutral-100 pt-10">
          <p className="text-neutral-400 text-[0.625rem] font-semibold uppercase tracking-widest text-center mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-0 divide-x divide-neutral-200">
            {partners.map((p, i) => (
              <div key={i} className="partner-logo" role="listitem" aria-label={p}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default TrustedClients;
