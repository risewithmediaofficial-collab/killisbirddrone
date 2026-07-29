export const categories = [
  {
    num: "01",
    category: "Propulsion System",
    tagline: "Raw power, precisely engineered for every mission profile.",
    watermark: "PROPULSION",
    products: [
      {
        id: "bldc-motors",
        name: "BLDC Motors",
        model: "KM-4215-KV320",
        description: "High-efficiency brushless motor engineered for extreme endurance and heavy payload UAVs.",
        features: [
          "High-efficiency brushless design",
          "Sustained thrust for extended endurance",
          "Multi-rotor & fixed-wing compatible",
        ],
        price: "Get Quote",
        images: [],
      },
      {
        id: "propellers",
        name: "Propellers",
        model: "KP-1550-CF",
        description: "Aerodynamically optimized carbon composite propellers for maximum thrust and minimal vibration.",
        features: [
          "Aerodynamically optimised blades",
          "Superior lift-to-drag ratio",
          "Carbon fibre & composite options",
        ],
        price: "Get Quote",
        images: [],
      },
      {
        id: "propulsion-stack",
        name: "Propulsion Stack",
        model: "KPS-80A-QUAD",
        description: "Integrated motor, ESC, and propeller propulsion assembly engineered for plug-and-fly field deployment.",
        features: [
          "Integrated motor + ESC + propeller",
          "Seamless plug-and-fly deployment",
          "Mission-tuned performance profiles",
        ],
        price: "Get Quote",
        images: [],
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
        id: "racing-frame",
        name: "Racing Frame",
        model: "KRF-250-PRO",
        description: "Ultra-lightweight high-rigidity carbon fiber structure designed for high-speed dynamic drone racing.",
        features: [
          "Ultra-lightweight high-rigidity build",
          "Maximum speed & agility",
          "Competition-grade materials",
        ],
        price: "Get Quote",
        images: [],
      },
      {
        id: "freestyle-frame",
        name: "Freestyle Frame",
        model: "KFF-5-HD",
        description: "Robust flexible airframe designed to absorb high impacts while delivering dynamic aerial freestyle maneuvers.",
        features: [
          "Robust flexible construction",
          "Dynamic freestyle manoeuvres",
          "Aerial acrobatics optimised",
        ],
        price: "Get Quote",
        images: [],
      },
      {
        id: "swarm-frame",
        name: "Swarm Frame",
        model: "KSF-300-MOD",
        description: "Compact modular multi-UAV frame system optimized for coordinated swarm operations and rapid reconfigurations.",
        features: [
          "Compact modular design",
          "Multi-UAV formation optimised",
          "Rapid field reconfiguration",
        ],
        price: "Get Quote",
        images: [],
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
        id: "fcc-flight-control-computer",
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
        price: "Get Quote",
        images: [],
      },
      {
        id: "esc-electronic-speed-controller",
        name: "ESC – Electronic Speed Controller",
        model: "KESC-60A-4IN1",
        description: "High-precision 4-in-1 speed controller with real-time telemetry feedback and ultrafast throttle response.",
        features: [
          "Real-time telemetry feedback",
          "Precision throttle response",
          "Integrated failsafe protocols",
        ],
        price: "Get Quote",
        images: [],
      },
      {
        id: "communication-system",
        name: "Communication System",
        model: "KCS-868-LINK",
        description: "Encrypted long-range data and control transmission link ensuring low-latency command relay for autonomous systems.",
        features: [
          "Encrypted long-range data links",
          "Real-time telemetry & command relay",
          "Minimal latency transmission",
        ],
        price: "Get Quote",
        images: [],
      },
    ],
  },
];

export const getAllProducts = () => {
  const all = [];
  categories.forEach((cat) => {
    cat.products.forEach((prod) => {
      all.push({ ...prod, category: cat.category });
    });
  });
  return all;
};

export const getProductById = (id) => {
  return getAllProducts().find((p) => p.id === id);
};
