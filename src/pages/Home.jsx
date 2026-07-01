// src/pages/Home.jsx
import {  useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import FadeIn from "../components/FadeIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import useParallax from "../hooks/useParallax";
import useTextReveal from "../hooks/useTextReveal";
import ParallaxWatermark from "../components/ParallaxWatermark";
import SectionHeader from "../components/SectionHeader";
import CornerBrackets from "../components/CornerBrackets";
import SmartImage from "../components/SmartImage";

gsap.registerPlugin(ScrollTrigger);

/* ── Stock Images ─────────────────────────── */
const IMG = {
  hero: "/assests/hero.jpg",
  heroDrone: "/assests/herodrone.jpg",
  dna: "/assests/dna.jpg",
  product1: "/assests/product1.jpg",
  product2: "/assests/product2.jpg",
  product3: "/assests/product3.jpg",
  agriculture: "/assests/agriculture.jpg",
  inspection: "/assests/inspection.jpg",
  defence: "/assests/defence.jpg",
  research: "/assests/research.jpg",
  newgen: "/assests/newgen.jpg",
};

/* ── Data ─────────────────────────────────── */
const stats = [
  { value: "500+", label: "Components Delivered" },
  { value: "20+", label: "Industry Partners" },
  { value: "5+", label: "Years Innovating" },
  { value: "100%", label: "Made in India" },
];



const voices = [
  {
    quote:
      "Killis Bird components set a new benchmark for precision and reliability. Their UAV solutions transformed our operations.",
    name: "Rajiv Sharma",
    role: "CTO, AeroVentures Ltd.",
  },
  {
    quote:
      "The attention to engineering detail is extraordinary. We have partnered with Killis Bird for three consecutive projects.",
    name: "Priya Nair",
    role: "Director of Operations, DefenceTech Systems",
  },
  {
    quote:
      "Innovation, quality, and unmatched support — Killis Bird is truly a world-class UAV partner.",
    name: "Arjun Menon",
    role: "Head of Procurement, SkyAgri Corp",
  },
];

const partners = [
  "AeroVentures",
  "DefenceTech",
  "SkyAgri Corp",
  "InspectX",
  "SwarmLabs",
  "AviaNXT",
];

/* ── Sub-Components for Parallax ─────────── */
const HeroBackground = () => {
  const ref = useParallax(35);
  return (
    <div ref={ref} className="absolute inset-0 w-full h-[130%] z-0">
      <SmartImage
        src={IMG.hero}
        alt="UAV drone flying over landscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
};



const NewGenImage = () => {
  const ref = useParallax(20);
  return (
    <div className="relative rounded-none overflow-hidden aspect-[21/9] h-[360px] md:h-[480px] border border-border group">
      <SmartImage
        ref={ref}
        src={IMG.newgen}
        alt="New generation UAV drone fleet"
        className="w-full h-[125%] object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="w-20 h-20 bg-skyroot rounded-none flex items-center justify-center shadow-soft cursor-pointer relative group"
        >
          <span className="text-white text-3xl pl-1">▶</span>
          <CornerBrackets
            color="#ffffff"
            size="8px"
            thickness="1.5px"
            hoverShift
          />
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-6 bottom-6 bg-white rounded-none border border-border p-4 shadow-card z-10"
      >
        <p className="font-heading font-bold text-black text-2xl leading-none">
          4K+
        </p>
        <p className="text-muted text-xs font-medium mt-1">
          Flight Hours Tested
        </p>
      </motion.div>
      <CornerBrackets color="#f97316" size="12px" thickness="2px" hoverShift />
    </div>
  );
};



/* ── Main Component ───────────────────────── */
const Home = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  const heroHeadingRef = useTextReveal();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero elements reveal
      gsap.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power3.out" },
      );
      gsap.fromTo(
        ".hero-body",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: "power3.out" },
      );
      gsap.fromTo(
        ".hero-btns",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.9, ease: "power3.out" },
      );
      gsap.fromTo(
        ".hero-float-badge",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, delay: 1.2, ease: "power3.out" },
      );

      // Stats counter animation
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );


    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="Killis Bird — Precision Engineered UAV components. Built in India. Trusted Worldwide."
      />

      {/* ── HERO (FULL SCREEN IMAGE & CENTERED TEXT) ── */}
      <section
        ref={heroRef}
        className="relative h-screen bg-black overflow-hidden flex items-center justify-center pt-[72px]"
      >
        <HeroBackground />
        <div className="grid-pattern text-white/5 absolute inset-0 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
          <div className="hero-eyebrow eyebrow text-skyroot justify-center">
            Imagine · Ideate · Innovate
          </div>

          <h1
            ref={heroHeadingRef}
            className="hero-heading font-heading font-bold text-white leading-[1.1] mb-6 overflow-hidden text-center"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="reveal-line inline-block">Precision</span>{" "}
            <span className="reveal-line inline-block text-skyroot">
              Engineered.
            </span>
            <br />
            <span className="reveal-line inline-block">Innovation</span>{" "}
            <span className="reveal-line inline-block text-white/70">
              Delivered.
            </span>
          </h1>

          <p className="hero-body text-white/80 text-body-lg max-w-2xl mb-10 leading-relaxed text-center">
            Redefining unmanned aerial systems through innovative, indigenous
            solutions designed to elevate performance and reliability.
          </p>

          <div className="hero-btns flex flex-wrap gap-4 justify-center">
            <Link to="/creations" className="btn-primary">
              Creations <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Link>
            <Link
              to="/our-dna"
              className="btn-secondary !border-white/30 !text-white hover:!border-skyroot hover:!text-skyroot"
            >
              Discover Our DNA
            </Link>
          </div>
        </div>

        <div className="hero-float-badge absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-none px-5 py-2.5 shadow-card z-20 text-center">
          <p className="text-[9px] font-heading font-bold text-white/60 uppercase tracking-widest mb-0.5">
            Built in India
          </p>
          <p className="font-heading font-bold text-skyroot text-xs">
            Trusted Worldwide 
          </p>
        </div>
      </section>

      {/* ── STATS (WHITE BACKGROUND) ── */}
      <section
        ref={statsRef}
        className="section-sm bg-white border-y border-border relative"
      >
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`stat-item text-center py-4 ${i < 3 ? "lg:border-r border-border" : ""}`}
              >
                <div className="stat-number text-h2 mb-2">{s.value}</div>
                <div className="text-eyebrow font-heading font-bold text-muted uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW GEN (NAVY BACKGROUND) ── */}
      <section className="section bg-navy-50 relative overflow-hidden">
        <ParallaxWatermark
          className="left-0 top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,14rem)] text-navy-200/20"
          speed={20}
        >
          A NEW GEN
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <FadeIn className="text-center flex flex-col items-center">
            <SectionHeader
              eyebrow="Next Gen"
              title="A New Gen of"
              orangeTitle="UAV Solutions"
              centered
            />
            <p className="text-muted text-body-lg max-w-xl mx-auto mb-10 text-center"></p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <NewGenImage />
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIALS (NAVY BACKGROUND) ── */}
      <section className="section bg-navy-50 relative overflow-hidden">
        <ParallaxWatermark
          className="left-0 bottom-0 text-[clamp(6rem,14vw,18rem)] text-navy-200/20"
          speed={22}
        >
          TRUST
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <SectionHeader
            eyebrow=""
            title="Voices of"
            orangeTitle="Trust"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {voices.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="bg-white border border-border rounded-none p-6 hover:border-skyroot hover:shadow-card transition-all duration-400 group relative">
                  <FormatQuoteIcon
                    sx={{ fontSize: 32, color: "#f97316", opacity: 0.3 }}
                  />
                  <p className="text-dark text-body leading-relaxed italic mt-3 mb-6">
                    {v.quote}
                  </p>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <div className="w-10 h-10 rounded-none bg-navy-50 flex items-center justify-center font-heading font-bold text-skyroot text-sm shrink-0">
                      {v.name[0]}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-black text-sm">
                        {v.name}
                      </p>
                      <p className="text-skyroot text-xs font-medium">
                        {v.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-3">
                    {[...Array(5)].map((_, si) => (
                      <StarIcon
                        key={si}
                        sx={{ fontSize: 14, color: "#f97316" }}
                      />
                    ))}
                  </div>
                  <CornerBrackets
                    color="#f97316"
                    size="10px"
                    thickness="1.5px"
                    hoverShift
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS (WHITE BACKGROUND) ── */}
      <section className="section-sm bg-white border-y border-border">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <SectionHeader
            eyebrow="Collaborators"
            title="Our"
            orangeTitle="Partners"
            centered
          />
          <div className="flex flex-wrap justify-center mt-8">
            {partners.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="px-8 py-4 text-muted hover:text-black font-heading font-bold text-sm tracking-widest uppercase transition-colors duration-300 cursor-default border-r border-border last:border-0">
                  {p}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
