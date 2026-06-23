import { useRef } from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SEO from "../components/SEO";
import ParallaxWatermark from "../components/ParallaxWatermark";
import ImageFrame from "../components/common/ImageFrame";
import SecondarySectionIntro from "../components/common/SecondarySectionIntro";
import useBookScrollEffects from "../hooks/useBookScrollEffects";

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
        description="Killis Bird — Engineered for Excellence. Precision UAV components and solutions."
      />
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
