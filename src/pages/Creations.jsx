import { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SEO from "../components/SEO";
import ParallaxWatermark from "../components/ParallaxWatermark";
import ImageFrame from "../components/common/ImageFrame";
import SecondarySectionIntro from "../components/common/SecondarySectionIntro";
import useBookScrollEffects from "../hooks/useBookScrollEffects";

gsap.registerPlugin(ScrollTrigger);

/* ── Highlight span ── */
const HText = ({ children, highlight = false }) => (
  highlight
    ? <span className="text-[#ff6b00] font-extrabold">{children}</span>
    : <span>{children}</span>
);

/* ── Word-split animator ── */
const AnimatedWords = ({ children, className = '' }) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll('.aw-word');
    const ctx = gsap.context(() => {
      gsap.fromTo(words,
        { opacity: 0, y: 28, skewY: 3 },
        {
          opacity: 1, y: 0, skewY: 0,
          duration: 0.65,
          ease: 'power3.out',
          stagger: 0.045,
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            once: true,
          }
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);
  return <span ref={ref} className={className}>{children}</span>;
};

/* wrap each top-level word segment in .aw-word */
const W = ({ children, highlight = false }) => (
  <span className={`aw-word inline-block ${highlight ? 'text-[#ff6b00] font-extrabold' : ''}`}>
    {children}
  </span>
);

const CreationsHeroText = () => {
  const bodyRef = useRef(null);
  useLayoutEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.body-line'),
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: 'top 85%', once: true }
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section data-stack-section className="relative overflow-hidden bg-white py-[72px] max-sm:py-[48px]">
      <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
        {/* eyebrow */}
        <div className="inline-flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#ff6b00] mb-8">
          
        </div>

        {/* big animated headline */}
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

        {/* 3-col body */}
        <div ref={bodyRef} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <p className="body-line text-[15px] leading-[1.85] text-[#67707d]">
            Our{" "}<span className="font-bold text-[#111111]">UAV components and solutions</span>{" "}are designed to adapt seamlessly across industries, delivering{" "}
            <span className="text-[#ff6b00] font-bold">accuracy for farming</span>,{" "}
            <span className="text-[#ff6b00] font-bold">efficiency for industries</span>, and{" "}
            <span className="text-[#ff6b00] font-bold">reliability for defense and surveillance missions</span>.
          </p>
          <p className="body-line text-[15px] leading-[1.85] text-[#67707d]">
            With{" "}<span className="font-bold text-[#111111]">innovation at our core</span>, we empower{" "}
            <span className="text-[#ff6b00] font-bold">partners worldwide</span>{" "}to achieve{" "}
            <span className="font-bold text-[#111111]">mission success</span>{" "}through technologies that are{" "}
            <span className="text-[#ff6b00] font-bold">robust</span>,{" "}
            <span className="text-[#ff6b00] font-bold">adaptable</span>, and{" "}
            <span className="text-[#ff6b00] font-bold">future ready</span>.
          </p>
          <p className="body-line text-[15px] leading-[1.85] text-[#67707d] flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ff6b00]" aria-hidden="true" />
            <span>
              <span className="font-extrabold text-[#111111]">“Engineered for Excellence”</span>{" "}— every component, every solution, every mission.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

const categories = [
  {
    num: "01",
    category: "Propulsion System",
    tagline: "Raw power, precisely engineered for every mission profile.",
    watermark: "PROPULSION",
    img: "/assests/propulsion.jpg",
    items: [
      { name: "BLDC Motors", desc: "High-efficiency brushless DC motors built for sustained thrust and extended flight endurance." },
      { name: "Propellers", desc: "Aerodynamically optimised propellers delivering superior lift-to-drag performance." },
      { name: "Propulsion Stack", desc: "Integrated propulsion assemblies combining motor, ESC, and propeller for seamless deployment." },
    ],
  },
  {
    num: "02",
    category: "Airframe",
    tagline: "Strength and precision engineered into every carbon fibre joint.",
    watermark: "AIRFRAME",
    img: "/assests/airframe.jpg",
    items: [
      { name: "Racing Frame", desc: "Ultra-lightweight, high-rigidity frames built for maximum speed and agility in competitive UAV racing." },
      { name: "Freestyle Frame", desc: "Robust and flexible frames designed for dynamic freestyle manoeuvres and aerial acrobatics." },
      { name: "Swarm Frame", desc: "Compact, modular airframes optimised for coordinated multi-UAV swarm formation operations." },
      { name: "Fixed & VTOL", desc: "Fixed-wing and vertical take-off & landing airframes engineered for long-endurance and versatile mission profiles." },
    ],
  },
  {
    num: "03",
    category: "Avionics",
    tagline: "Intelligence at the heart of every flight system.",
    watermark: "AVIONICS",
    img: "/assests/avionics.jpg",
    items: [
      { name: "FCC – Flight Control Computer", desc: "Indigenous flight controllers with multi-redundant IMU arrays for mission-critical stability and autonomous navigation." },
      { name: "ESC – Electronic Speed Controller", desc: "Advanced ESCs with real-time telemetry, precision throttle response, and integrated failsafe protocols." },
      { name: "Communication System", desc: "Encrypted long-range data links providing real-time telemetry and command relay with minimal latency." },
    ],
  },
];

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
      {categories.map(
        ({ num, category, tagline, items, img, watermark }, index) => (
          <section
            key={category}
            data-stack-section
            className={`relative overflow-hidden py-[64px] max-sm:py-[44px] ${index % 2 === 0 ? "bg-white" : "bg-[#fff8f1]"}`}
          >
            <ParallaxWatermark
              className={`top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,15rem)] ${index % 2 === 0 ? "left-0 text-[#ff6b00]/[0.06]" : "right-0 text-[#111111]/[0.05]"}`}
              speed={22}
            >
              {watermark}
            </ParallaxWatermark>
            <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] items-center gap-[clamp(44px,6vw,84px)] px-[clamp(20px,5vw,80px)] max-xl:grid-cols-1">
              <div className={index % 2 === 1 ? "max-xl:order-2" : ""}>
                <SecondarySectionIntro
                  eyebrow={`${num} ${category}`}
                  title={category}
                  description={tagline}
                  className="max-w-[640px]"
                />
                <div className="mt-10 grid gap-8">
                  {items.map((item) => (
                    <article
                      key={item.name}
                      className="book-reveal-text border-b border-[#f1dfd1]/40 pb-6 last:border-0 last:pb-0"
                    >
                      <h3 className="text-[21px] font-extrabold text-[#111111]">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.78] text-[#67707d]">
                        {item.desc}
                      </p>
                      <Link
                        to="/contact"
                        className="mt-3 inline-flex items-center gap-2 text-[14px] font-extrabold text-[#ff6b00] transition-colors duration-300 hover:text-[#e85f00]"
                      >
                        <span>Request Quote</span>
                        <ArrowRightAltIcon sx={{ fontSize: 18 }} />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              <div className={index % 2 === 1 ? "xl:order-first" : ""}>
                <ImageFrame
                  variant="landscape"
                  src={img}
                  alt={category}
                  width="760"
                  height="560"
                />
              </div>
            </div>
          </section>
        ),
      )}
    </div>
  );
};

export default Creations;
