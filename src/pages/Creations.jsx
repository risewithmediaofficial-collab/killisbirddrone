import { useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SEO from "../components/SEO";
import ParallaxWatermark from "../components/ParallaxWatermark";
import SecondarySectionIntro from "../components/common/SecondarySectionIntro";
import useBookScrollEffects from "../hooks/useBookScrollEffects";

gsap.registerPlugin(ScrollTrigger);

const LOGO = "/assests/KILLIS BIRD - LOGO.png";

/* ── Word-split animator ── */
const AnimatedWords = ({ children, className = "" }) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll(".aw-word");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0, y: 28, skewY: 3 },
        {
          opacity: 1, y: 0, skewY: 0,
          duration: 0.65, ease: "power3.out", stagger: 0.045,
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);
  return <span ref={ref} className={className}>{children}</span>;
};

const W = ({ children, highlight = false }) => (
  <span className={`aw-word inline-block ${highlight ? "text-[#ff6b00] font-extrabold" : ""}`}>
    {children}
  </span>
);

/* ── Multi-image viewer ── */
const ProductImageViewer = ({ images, name }) => {
  const [current, setCurrent] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); };

  return (
    <div className="relative w-full aspect-square bg-[#f7f7f7] border border-black/[0.06] flex items-center justify-center overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center p-6"
        >
          {images[current] ? (
            <img
              src={images[current]}
              alt={`${name} view ${current + 1}`}
              className="max-w-full max-h-full object-contain"
              style={{ imageRendering: "crisp-edges" }}
            />
          ) : (
            /* Logo placeholder when no image is provided */
            <div className="flex flex-col items-center justify-center gap-3 opacity-25">
              <img
                src={LOGO}
                alt="Killis Bird"
                className="w-28 object-contain"
              />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black" style={{ fontFamily: "Inter, sans-serif" }}>
                Image Coming Soon
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Image counter badge */}
      {hasMultiple && (
        <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest text-black/40 bg-white border border-black/[0.07] px-2 py-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
          {current + 1} / {images.length}
        </span>
      )}

      {/* Navigation arrows */}
      {hasMultiple && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white border border-black/[0.08] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:border-[#ff6b00] hover:text-[#ff6b00]"
            aria-label="Previous image"
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 11 }} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white border border-black/[0.08] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:border-[#ff6b00] hover:text-[#ff6b00]"
            aria-label="Next image"
          >
            <ArrowForwardIosIcon sx={{ fontSize: 11 }} />
          </button>
          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-1.5 h-1.5 transition-all duration-200 ${i === current ? "bg-[#ff6b00] scale-125" : "bg-black/20 hover:bg-black/40"}`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/* ── Product Card ── */
const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0, y: 16 }}
    whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col border border-black/[0.09] bg-white group hover:border-[#ff6b00]/40 transition-colors duration-200"
  >
    {/* Image viewer */}
    <ProductImageViewer images={product.images} name={product.name} />

    {/* Content */}
    <div className="flex flex-col flex-1 p-6">
      {/* Product name */}
      <h3
        className="text-[18px] font-extrabold text-[#111111] text-center mb-4 leading-tight tracking-tight"
        style={{ letterSpacing: "-0.02em" }}
      >
        {product.name}
      </h3>

      {/* Thin divider */}
      <div className="w-full h-px bg-black/[0.06] mb-4" />

      {/* Feature bullets */}
      <ul className="flex flex-col gap-2 mb-5 flex-1">
        {product.features.map((feat, i) => (
          <li
            key={i}
            className="text-[13px] text-[#67707d] text-center leading-snug"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {feat}
          </li>
        ))}
      </ul>

      {/* Thin divider */}
      <div className="w-full h-px bg-black/[0.06] mb-4" />

      {/* Price */}
      <p
        className="text-[22px] font-extrabold text-[#111111] text-center mb-5 tracking-tight"
        style={{ letterSpacing: "-0.03em" }}
      >
        {product.price}
      </p>

      {/* CTA */}
      <Link
        to="/contact"
        className="btn-primary w-full justify-center !py-3 !text-[11px] !tracking-[0.12em] group/btn"
      >
        Get Quote
        <ArrowRightAltIcon sx={{ fontSize: 18 }} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
      </Link>
    </div>
  </motion.div>
);

/* ── Category Section ── */
const CategorySection = ({ num, category, tagline, watermark, products, index }) => (
  <section
    data-stack-section
    className={`relative overflow-hidden py-[72px] max-sm:py-[48px] ${index % 2 === 0 ? "bg-white" : "bg-[#fff8f1]"}`}
  >
    <ParallaxWatermark
      className={`top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,15rem)] ${index % 2 === 0 ? "left-0 text-[#ff6b00]/[0.06]" : "right-0 text-[#111111]/[0.05]"}`}
      speed={22}
    >
      {watermark}
    </ParallaxWatermark>

    <div className="relative mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
      {/* Section intro */}
      <div className="mb-12">
        <SecondarySectionIntro
          eyebrow={`${num} ${category}`}
          title={category}
          description={tagline}
          className="max-w-[640px]"
        />
      </div>

      {/* Product cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.name} product={product} index={i} />
        ))}
      </div>
    </div>
  </section>
);

/* ── Hero Text ── */
const CreationsHeroText = () => {
  const bodyRef = useRef(null);
  useLayoutEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".body-line"),
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section data-stack-section className="relative overflow-hidden bg-white py-[72px] max-sm:py-[48px]">
      <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
        <h2 className="font-heading text-[clamp(22px,3.2vw,40px)] font-extrabold leading-[1.6] tracking-[-0.02em] text-[#111111] max-w-[1080px]">
          <AnimatedWords className="flex flex-wrap gap-x-[0.32em] gap-y-1">
            <W>Whether</W><W>you</W><W>are</W><W>building</W><W>for</W>
            <W highlight>precision</W><W highlight>agriculture</W><W>,</W>
            <W highlight>industrial</W><W highlight>applications</W><W>,</W>
            <W highlight>advanced</W><W highlight>surveillance</W>
            <W>or</W>
            <W highlight>defense</W><W highlight>applications</W>
            <W>—</W><W>Killis</W><W>Birds</W><W>is</W><W>your</W>
            <W highlight>trusted</W><W highlight>collaborator</W><W highlight>in</W><W highlight>flight</W><W>.</W>
          </AnimatedWords>
        </h2>

        <div ref={bodyRef} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <p className="body-line text-[15px] leading-[1.85] text-[#67707d]">
            Our <span className="font-bold text-[#111111]">UAV components and solutions</span> are designed to adapt seamlessly across industries, delivering{" "}
            <span className="text-[#ff6b00] font-bold">accuracy for farming</span>,{" "}
            <span className="text-[#ff6b00] font-bold">efficiency for industries</span>, and{" "}
            <span className="text-[#ff6b00] font-bold">reliability for defense and surveillance missions</span>.
          </p>
          <p className="body-line text-[15px] leading-[1.85] text-[#67707d]">
            With <span className="font-bold text-[#111111]">innovation at our core</span>, we empower{" "}
            <span className="text-[#ff6b00] font-bold">partners worldwide</span> to achieve{" "}
            <span className="font-bold text-[#111111]">mission success</span> through technologies that are{" "}
            <span className="text-[#ff6b00] font-bold">robust</span>,{" "}
            <span className="text-[#ff6b00] font-bold">adaptable</span>, and{" "}
            <span className="text-[#ff6b00] font-bold">future ready</span>.
          </p>
          <p className="body-line text-[15px] leading-[1.85] text-[#67707d] flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ff6b00]" aria-hidden="true" />
            <span>
              <span className="font-extrabold text-[#111111]">"Engineered for Excellence"</span>{" "}— every component, every solution, every mission.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════
   PRODUCT DATA
   Add image paths to each product's `images` array.
   Each product supports multiple images (gallery/carousel).
   Leave array empty [] to show the logo placeholder.
════════════════════════════════════════════ */
const categories = [
  {
    num: "01",
    category: "Propulsion System",
    tagline: "Raw power, precisely engineered for every mission profile.",
    watermark: "PROPULSION",
    products: [
      {
        name: "BLDC Motors",
        features: [
          "High-efficiency brushless design",
          "Sustained thrust for extended endurance",
          "Multi-rotor & fixed-wing compatible",
        ],
        price: "Get Quote",
        images: [], // Add image paths here e.g. ["/assests/bldc-1.jpg", "/assests/bldc-2.jpg"]
      },
      {
        name: "Propellers",
        features: [
          "Aerodynamically optimised blades",
          "Superior lift-to-drag ratio",
          "Carbon fibre & composite options",
        ],
        price: "Get Quote",
        images: [], // Add image paths here
      },
      {
        name: "Propulsion Stack",
        features: [
          "Integrated motor + ESC + propeller",
          "Seamless plug-and-fly deployment",
          "Mission-tuned performance profiles",
        ],
        price: "Get Quote",
        images: [], // Add image paths here
      },
    ],
  },
  {
    num: "02",
    category: "Airframe",
    tagline: "Strength and precision engineered into every carbon fibre joint.",
    watermark: "AIRFRAME",
    products: [
      {
        name: "Racing Frame",
        features: [
          "Ultra-lightweight high-rigidity build",
          "Maximum speed & agility",
          "Competition-grade materials",
        ],
        price: "Get Quote",
        images: [], // Add image paths here
      },
      {
        name: "Freestyle Frame",
        features: [
          "Robust flexible construction",
          "Dynamic freestyle manoeuvres",
          "Aerial acrobatics optimised",
        ],
        price: "Get Quote",
        images: [], // Add image paths here
      },
      {
        name: "Swarm Frame",
        features: [
          "Compact modular design",
          "Multi-UAV formation optimised",
          "Rapid field reconfiguration",
        ],
        price: "Get Quote",
        images: [], // Add image paths here
      },
    ],
  },
  {
    num: "03",
    category: "Avionics",
    tagline: "Intelligence at the heart of every flight system.",
    watermark: "AVIONICS",
    products: [
      {
        name: "FCC – Flight Control Computer",
        features: [
          "Multi-redundant IMU arrays",
          "Autonomous navigation ready",
          "Mission-critical stability control",
        ],
        price: "Get Quote",
        images: [], // Add image paths here
      },
      {
        name: "ESC – Electronic Speed Controller",
        features: [
          "Real-time telemetry feedback",
          "Precision throttle response",
          "Integrated failsafe protocols",
        ],
        price: "Get Quote",
        images: [], // Add image paths here
      },
      {
        name: "Communication System",
        features: [
          "Encrypted long-range data links",
          "Real-time telemetry & command relay",
          "Minimal latency transmission",
        ],
        price: "Get Quote",
        images: [], // Add image paths here
      },
    ],
  },
];

/* ── Main Page ── */
const Creations = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef}>
      <SEO
        title="Creations"
        description="Killis Bird :: Imagine, IDeate, Innovate — Engineered for Excellence. Precision UAV components and solutions."
      />
      <CreationsHeroText />
      {categories.map(({ num, category, tagline, watermark, products }, index) => (
        <CategorySection
          key={category}
          num={num}
          category={category}
          tagline={tagline}
          watermark={watermark}
          products={products}
          index={index}
        />
      ))}
    </div>
  );
};

export default Creations;
