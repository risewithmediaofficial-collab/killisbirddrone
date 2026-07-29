// src/data/products.js

export const categories = [
  {
    num: "01",
    category: "Airframe",
    tagline: "Strength and precision engineered into every joint.",
    watermark: "FRAME",
    products: [
      {
        id: "velo",
        name: "VELO",
        model: "Racing Drone Frame",
        description: "An indigenous high-speed racing drone frame, successfully designed and developed to meet the demanding performance requirements of competitive drone racing.",
        features: [
          "High-speed racing performance",
          "Indigenously designed & manufactured",
          "Lightweight yet rigid construction",
          "Competition-grade materials",
        ],
        price: "Coming Soon",
        images: [],
        status: "coming_soon",
      },
    ],
  },
  {
    num: "02",
    category: "Flight Controller",
    tagline: "Intelligence at the heart of every flight.",
    watermark: "FCC",
    products: [
      {
        id: "sparrow",
        name: "SPARROW-V1",
        model: "Flight Control Card",
        description: "Successfully developed SPARROW, an indigenous Flight Control Card (FCC), with support for Betaflight, INAV, ArduPilot, and Pixhawk firmware platforms.",
        features: [
          "STM32H753 32-bit Arm Cortex-M7 MCU",
          "Clock 480 MHz",
          "IMU: ICM42688",
          "Barometer: MS5611",
          "Firmware Flash: USB Type C & BLE",
          "VTX Systems: Both Analog and Digital",
          "Form Factor: 36mm x 36mm",
          "Betaflight firmware support",
          "INAV firmware support",
          "ArduPilot & Pixhawk support",
          "Indigenously designed",
        ],
        specHighlights: [
          "STM32H753 Cortex-M7",
          "Clock 480 MHz",
          "IMU: ICM42688",
          "Barometer: MS5611",
          "UART: 5, I2C: 2, SPI: ?",
          "USB Type C & BLE flash",
          "Analog + Digital VTX",
          "36mm x 36mm",
        ],
        specifications: [
          { label: "Microcontroller", value: "STM32H753 32-bit Arm Cortex-M7 MCU" },
          { label: "Clock", value: "480 MHz" },
          { label: "IMU", value: "ICM42688" },
          { label: "Barometer", value: "MS5611" },
          { label: "Magnetometer", value: "-" },
          { label: "Firmware Flash", value: "USB Type C & BLE" },
          { label: "VTX Systems", value: "Both Analog and Digital" },
          { label: "Form Factor", value: "36mm x 36mm" },
        ],
        ports: [
          { label: "UART", value: "5" },
          { label: "I2C", value: "2" },
          { label: "SPI", value: "?" },
        ],
        firmware: ["Betaflight", "INAV", "ArduPilot", "Pixhawk"],
        price: "Get Quote",
        images: [],
        status: "available",
      },
    ],
  },
  {
    num: "03",
    category: "ESC",
    tagline: "Precision speed control for every mission.",
    watermark: "ESC",
    products: [
      {
        id: "killis-esc",
        name: "KILLIS ESC",
        model: "Electronic Speed Controller",
        description: "An indigenous high-precision Electronic Speed Controller engineered for reliability, performance, and seamless integration across all Killis Bird UAV platforms.",
        features: [
          "Precision throttle response",
          "Integrated failsafe protocols",
          "Multi-rotor compatible",
          "Indigenous design",
        ],
        price: "Coming Soon",
        images: [],
        status: "coming_soon",
      },
    ],
  },
  {
    num: "04",
    category: "Propeller",
    tagline: "Aerodynamic precision, every revolution.",
    watermark: "PROP",
    products: [
      {
        id: "killis-propeller",
        name: "KILLIS Propeller",
        model: "High-Performance Propeller",
        description: "Aerodynamically optimized propellers designed for maximum thrust and minimal vibration across diverse Killis Bird UAV configurations.",
        features: [
          "Aerodynamically optimised blades",
          "Superior lift-to-drag ratio",
          "Low vibration profile",
          "Multi-UAV compatible",
        ],
        price: "Coming Soon",
        images: [],
        status: "coming_soon",
      },
    ],
  },
];

export const getAllProducts = () => {
  const all = [];
  categories.forEach((cat) => {
    cat.products.forEach((prod) => {
      all.push({ ...prod, category: cat.category, categoryNum: cat.num });
    });
  });
  return all;
};

export const getProductById = (id) => {
  return getAllProducts().find((p) => p.id === id);
};
