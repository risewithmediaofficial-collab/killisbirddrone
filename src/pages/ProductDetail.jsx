import { useState, useRef, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SEO from "../components/SEO";
import { getProductById, getAllProducts } from "../data/products";
import useBookScrollEffects from "../hooks/useBookScrollEffects";

const LOGO = "/assests/KILLIS BIRD - LOGO.png";

/* ── Technical Image Holder Frame (no image available) ── */
const ImageHolderFrame = ({ title = "Image Holder", className = "", height = "h-80 sm:h-96" }) => {
  return (
    <div className={`relative w-full ${height} bg-gradient-to-b from-[#fafafa] to-[#f2f3f5] flex flex-col items-center justify-center overflow-hidden group ${className}`}>
      {/* Grid overlay pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2.5">
        <div className="w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-xs p-2.5 group-hover:scale-105 transition-transform duration-300">
          <img src={LOGO} alt="Killis Bird" className="w-9 opacity-80 object-contain" />
        </div>

        <span className="text-[13px] font-extrabold uppercase tracking-widest text-[#111111]">
          {title}
        </span>

        <span className="text-[9.5px] font-extrabold uppercase tracking-[0.2em] bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/30 px-3.5 py-0.5 rounded-full mt-1">
          Coming Soon
        </span>
      </div>
    </div>
  );
};

const ProductImageFrame = ({
  image,
  title,
  className = "",
  height = "h-80 sm:h-96",
  objectFit = "contain",
  priority = false,
}) => {
  const imageSrc = typeof image === "string" ? image : image?.src;
  const imageAlt = typeof image === "string" ? title : image?.alt || title;

  if (!imageSrc) {
    return <ImageHolderFrame title={title} className={className} height={height} />;
  }

  return (
    <figure className={`relative w-full ${height} overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`h-full w-full object-${objectFit}`}
        loading={priority ? "eager" : "lazy"}
      />
    </figure>
  );
};


const ProductDetail = () => {
  const { productId } = useParams();
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [productId]);

  // Retrieve product details or default to Flight Control Computer if not matched
  const product = getProductById(productId) || getAllProducts().find(p => p.id === "sparrow") || {
    name: "FCC – Flight Control Computer",
    model: "MicoAir743v2-AIO-35A",
    description: "A high-performance H743 FC and Bluejay ESC All-In-One, supports multiple firmware: Ardupilot/Skybrush/PX4/INAV/Betaflight/",
    features: [
      "Multi-redundant IMU arrays",
      "Autonomous navigation ready",
      "Mission-critical stability control",
      "H743 High-Performance Processor & Bluejay ESC",
    ],
    firmware: ["Ardupilot", "Skybrush", "PX4", "INAV", "Betaflight"],
    images: [],
  };

  const [activeTab, setActiveTab] = useState("Gallery");

  // Explicitly excluded "Pinout" and "Buy Now" as requested by user
  const tabs = ["Gallery", "Specifications", "Ports", "Diagram", "Pinout", "Firmware", "Buy Now"];

  return (
    <div ref={pageRef} className="min-h-screen bg-white pt-24 pb-20 text-[#111111]">
      <SEO
        title={`${product.model || product.name} — Product Details`}
        description={product.description}
      />

      <div className="mx-auto w-full max-w-[1240px] px-[clamp(20px,5vw,80px)]">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/creations"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#67707d] hover:text-[#ff6b00] transition-colors"
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
            Back to Creations
          </Link>
        </div>

        {/* Top Product Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          {/* Main Top Image Frame */}
          <div className="w-full max-w-xl mb-8">
            {product.images && product.images.length > 0 ? (
              <ProductImageFrame
                image={product.images[0]}
                title={product.images[0]?.title || product.model || product.name}
                height="h-[400px] sm:h-[480px]"
                objectFit="contain"
                priority
              />
            ) : (
              <ImageHolderFrame title={product.model || product.name} height="h-[400px] sm:h-[480px]" />
            )}
          </div>

          {/* Model Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-3">
            {product.model || product.name}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-[15px] sm:text-[16px] text-[#67707d] max-w-2xl leading-relaxed font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            {product.description}
          </p>
        </motion.div>

        {/* Tab Navigation (Gallery, Specifications, Ports, Diagram, Firmware) */}
        <div className="w-full max-w-4xl mx-auto border-b border-black/10 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 sm:px-6 py-2.5 text-[13px] sm:text-[14px] font-bold tracking-wide rounded-xl transition-all duration-200 ${isActive
                      ? "bg-[#111111] text-white shadow-sm scale-105"
                      : "text-[#67707d] hover:text-[#111111] hover:bg-black/5"
                    }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Body Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "power2.out" }}
          className="w-full max-w-4xl mx-auto min-h-[320px] flex flex-col items-center justify-center"
        >
          {activeTab === "Gallery" && (
            <div className="w-full">
              {product.images?.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.images.map((image, index) => {
                    // Finger image (last one) spans full width at taller portrait height
                    const isFingerImage = index === product.images.length - 1 && product.images.length === 5;
                    return (
                      <ProductImageFrame
                        key={typeof image === "string" ? image : image.src}
                        image={image}
                        title={image.title || `SPARROW-V1 View ${index + 1}`}
                        height={isFingerImage ? "h-[520px] sm:h-[600px]" : "h-[320px] sm:h-[380px]"}
                        objectFit={isFingerImage ? "cover" : "contain"}
                        className={isFingerImage ? "col-span-1 sm:col-span-2" : ""}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <ImageHolderFrame title="Top View - Components" height="h-[320px] sm:h-[380px]" />
                  <ImageHolderFrame title="Bottom View - ESC Circuitry" height="h-[320px] sm:h-[380px]" />
                  <ImageHolderFrame title="Pinout & Connector Layout" height="h-[320px] sm:h-[380px]" />
                  <ImageHolderFrame title="Mounted Stack Assembly" height="h-[320px] sm:h-[380px]" />
                </div>
              )}
            </div>
          )}

          {activeTab === "Specifications" && (
            <div className="w-full bg-[#fafafa] border border-black/10 rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="flex items-center justify-between mb-6 border-b border-black/10 pb-4">
                <h3 className="text-[16px] font-extrabold uppercase tracking-wide text-[#111111]">
                  Technical Specifications
                </h3>
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/30 px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#4a5568]">
                    <span className="w-2 h-2 rounded-full bg-[#ff6b00] mt-2 shrink-0" />
                    <span className="font-medium">{feat}</span>
                  </li>
                ))}
              </ul>

              {product.specifications ? (
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 border border-black/10 overflow-hidden rounded-xl">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="bg-white p-4 text-left">
                      <dt className="text-[10px] font-extrabold uppercase tracking-widest text-[#ff6b00] mb-1">
                        {spec.label}
                      </dt>
                      <dd className="text-[13px] font-bold text-[#111111]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <div className="bg-white border border-black/10 rounded-xl p-5 text-center shadow-2xs">
                  <p className="text-[13px] text-[#67707d] italic">
                    Detailed component datasheets, power benchmarks, and thermal performance logs coming soon.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "Ports" && (
            <div className="w-full">
              <ImageHolderFrame title="Ports & Interface Diagram" height="h-80" />
              {product.ports ? (
                <dl className="mt-5 grid grid-cols-3 gap-px bg-black/10 border border-black/10 rounded-xl overflow-hidden">
                  {product.ports.map((port) => (
                    <div key={port.label} className="bg-white p-5 text-center">
                      <dt className="text-[10px] font-extrabold uppercase tracking-widest text-[#ff6b00] mb-1">
                        {port.label}
                      </dt>
                      <dd className="text-[20px] font-extrabold text-[#111111]">
                        {port.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="text-center text-[13px] text-[#67707d] mt-4 italic">
                  Port assignment, UART allocations, and connector wiring diagrams coming soon.
                </p>
              )}
            </div>
          )}

          {activeTab === "Diagram" && (
            <div className="w-full">
              <ImageHolderFrame title="Hardware System Architecture & Wiring Diagram" height="h-80" />
              <p className="text-center text-[13px] text-[#67707d] mt-4 italic">
                Schematic diagrams and electrical installation guide coming soon.
              </p>
            </div>
          )}

          {activeTab === "Firmware" && (
            <div className="w-full bg-[#fafafa] border border-black/10 rounded-2xl p-6 sm:p-10 text-center shadow-xs">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/30 px-3 py-1 rounded-full">
                  Supported Firmware
                </span>
              </div>

              <h3 className="text-[18px] font-extrabold text-[#111111] mb-6">
                Firmware Compatibility & Configurator Targets
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                {(product.firmware || ["Ardupilot", "Skybrush", "PX4", "INAV", "Betaflight"]).map((fw) => (
                  <span
                    key={fw}
                    className="px-4 py-2 bg-white border border-black/10 rounded-xl text-[13px] font-bold text-[#111111] shadow-2xs"
                  >
                    {fw}
                  </span>
                ))}
              </div>

              <p className="text-[13px] text-[#67707d] italic">
                Official target hex files, custom firmware builds, and flashing guides coming soon.
              </p>
            </div>
          )}

          {activeTab === "Pinout" && (
            <div className="w-full">
              <ImageHolderFrame title="Pinout & Connector Layout" height="h-80" />
              <p className="text-center text-[13px] text-[#67707d] mt-4 italic">
                Pinout diagrams and connector layouts coming soon.
              </p>
            </div>
          )}

          {activeTab === "Buy Now" && (
            <div className="w-full bg-[#fafafa] border border-black/10 rounded-2xl p-6 sm:p-10 text-center shadow-xs">
              <h3 className="text-[18px] font-extrabold text-[#111111] mb-3">
                Request supply or integration support
              </h3>
              <p className="text-[13px] text-[#67707d] mb-6">
                Contact Killis Bird for availability, customization, and fleet supply.
              </p>
              <Link
                to="/contact"
                className="btn-primary !bg-[#ff6b00] hover:!bg-[#e05e00] !text-white !py-3.5 !px-8 !text-[12px]"
              >
                Contact Us
                <ArrowRightAltIcon sx={{ fontSize: 18 }} />
              </Link>
            </div>
          )}
        </motion.div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 max-w-4xl mx-auto bg-[#111111] text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-[18px] font-extrabold mb-1">
            </h4>
            <p className="text-[13px] text-white/70">
              Get in touch with our team for technical consultations and customized drone solutions.
            </p>
          </div>

          <Link
            to="/contact"
            className="btn-primary shrink-0 !bg-[#ff6b00] hover:!bg-[#e05e00] !text-white !py-3.5 !px-8 !text-[12px] !tracking-[0.12em]"
          >
            Get Quote
            <ArrowRightAltIcon sx={{ fontSize: 18 }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
