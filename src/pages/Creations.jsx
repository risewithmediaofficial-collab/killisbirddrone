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
    category: "Propulsions",
    tagline: "Power that lifts ambitions.",
    watermark: "PROPULSION",
    img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&q=80",
    items: [
      {
        name: "High-Thrust Brushless Motors",
        desc: "Precision-wound motors engineered for maximum torque efficiency and longevity.",
      },
      {
        name: "Variable Pitch Propellers",
        desc: "Aerodynamically optimised propellers delivering superior lift-to-drag ratio.",
      },
      {
        name: "ESC Controllers",
        desc: "Advanced electronic speed controllers with real-time telemetry and failsafe protocols.",
      },
    ],
  },
  {
    num: "02",
    category: "Airframes",
    tagline: "Strength engineered into every fibre.",
    watermark: "AIRFRAME",
    img: "https://images.unsplash.com/photo-1533929294112-264e8d48e89e?w=800&q=80",
    items: [
      {
        name: "Carbon Fibre Frames",
        desc: "Lightweight, high-tensile composite airframes for structural integrity under extreme conditions.",
      },
      {
        name: "Folding Arm Assemblies",
        desc: "Rapid-deploy folding arm systems enabling seamless transport and field deployment.",
      },
      {
        name: "Landing Gear Systems",
        desc: "Vibration-dampening gear engineered for precision sensor stability and harsh terrain.",
      },
    ],
  },
  {
    num: "03",
    category: "Avionics",
    tagline: "Intelligence at the heart of flight.",
    watermark: "AVIONICS",
    img: "https://images.unsplash.com/photo-1601524909162-be87252be298?w=800&q=80",
    items: [
      {
        name: "Flight Control Units",
        desc: "Indigenous flight controllers with multi-redundant IMU arrays for mission-critical stability.",
      },
      {
        name: "Telemetry & Data Links",
        desc: "Encrypted long-range data links providing real-time telemetry with minimal latency.",
      },
      {
        name: "Payload Integration Systems",
        desc: "Modular payload bays supporting cameras, sensors, and specialised mission equipment.",
      },
    ],
  },
  {
    num: "04",
    category: "Swarms",
    tagline: "Coordinated intelligence. Distributed power.",
    watermark: "SWARM",
    img: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80",
    items: [
      {
        name: "Swarm Coordination Modules",
        desc: "Advanced mesh-networking modules enabling coordinated multi-UAV swarm operations.",
      },
      {
        name: "Autonomous Navigation Units",
        desc: "AI-powered navigation systems for obstacle avoidance and dynamic path planning.",
      },
      {
        name: "Formation Control Software",
        desc: "Purpose-built firmware for precision formation flying and distributed mission execution.",
      },
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
      4
      {categories.map(
        ({ num, category, tagline, items, img, watermark }, index) => (
          <section
            key={category}
            data-stack-section
            className={`relative overflow-hidden py-[110px] max-sm:py-[72px] ${index % 2 === 0 ? "bg-white" : "bg-[#fff8f1]"}`}
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
                <div className="mt-10 grid gap-5">
                  {items.map((item) => (
                    <article
                      key={item.name}
                      className="book-reveal-card rounded-[18px] border border-[#f1dfd1] bg-white px-6 py-6 shadow-[0_18px_42px_rgba(17,21,26,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b00]/45"
                    >
                      <h3 className="text-[21px] font-extrabold text-[#111111]">
                        {item.name}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.78] text-[#67707d]">
                        {item.desc}
                      </p>
                      <Link
                        to="/contact"
                        className="mt-4 inline-flex items-center gap-2 text-[14px] font-extrabold text-[#ff6b00] transition-colors duration-300 hover:text-[#e85f00]"
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
