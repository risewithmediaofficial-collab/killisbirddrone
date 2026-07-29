import { useRef, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import SecondaryHero from '../components/common/SecondaryHero';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const blog = {
  title: 'Built for Advanced FPV: A High-Performance SPARROW-V1 Flight Control Card',
  category: 'Product Engineering',
  readTime: '7 min read',
  date: 'Technical Blog',
  excerpt:
    'A compact Betaflight-ready flight control card engineered for fast processing, precise sensing, flexible connectivity, reliable power protection, and modern FPV builds.',
  highlights: [
    'STM32H753 MCU for ultra-fast flight-control loop execution',
    'ICM42688 IMU and MS5611 barometer for precise sensing',
    'Up to 8 motor outputs for quad, hex, and octocopter builds',
    'USB Type-C, MicroSD logging, BLE, and analog or digital VTX support',
  ],
  sections: [
    {
      heading: 'Modern FPV Needs More Than Basic Stabilization',
      body: [
        'Modern FPV platforms demand more than basic stabilization. Pilots and builders need a flight controller that delivers fast processing, precise sensing, flexible connectivity, reliable power protection, and seamless compatibility with today\'s FPV ecosystem.',
        'SPARROW-V1 is designed to meet those needs with a powerful STM32H753 processor, high-quality onboard sensors, extensive peripheral support, advanced protection features, and a compact Betaflight-ready layout.',
        'Whether you are building a racing quad, freestyle drone, cinematic platform, hexacopter, or octocopter, this board provides the performance and reliability needed for demanding FPV applications.',
      ],
    },
    {
      heading: 'High-Speed Processing with STM32H753 MCU',
      body: [
        'At the core of the Flight Control Card is the STM32H753 MCU, delivering the processing power required for ultra-fast flight-control loop execution, high-speed signal processing, and responsive FPV performance.',
        'The STM32H753 is based on a high-performance Arm Cortex-M7 architecture running up to 480 MHz, giving the controller headroom for fast gyro processing, filtering, PID loop execution, receiver handling, telemetry, and motor-output updates.',
        'This results in sharper response, smoother control, and improved stability during aggressive maneuvers, high-speed racing, freestyle flying, and precision FPV operations.',
      ],
    },
    {
      heading: 'Precision Motion and Altitude Sensing',
      body: [
        'The board integrates an ICM42688 IMU and MS5611 barometer for accurate flight motion tracking and altitude sensing.',
        'The ICM42688 is a 6-axis MEMS motion sensor that combines a 3-axis gyroscope and 3-axis accelerometer, helping the flight controller detect rotation, acceleration, and vibration with high precision.',
        'The MS5611 barometer provides high-resolution pressure and temperature data, supporting accurate altitude estimation for flight logging, altitude-related functions, and improved situational awareness.',
      ],
    },
    {
      heading: 'Flexible Motor Output Support',
      body: [
        'With support for up to 8 motor outputs, the SPARROW-V1 Flight Control Card enables flexible multirotor configurations including quad, hex, and octocopter setups.',
        'This makes the board suitable for compact performance quads, larger cinematic builds, heavy-lift systems, and experimental multirotor platforms.',
      ],
    },
    {
      heading: 'Built-In OSD for Real-Time FPV Telemetry',
      body: [
        'A built-in OSD provides real-time flight telemetry directly in the pilot\'s FPV goggles.',
        'Pilots can view key data such as battery voltage, flight time, RSSI or link quality, warnings, GPS information, flight mode, and system status overlaid on the FPV video feed.',
        'This improves situational awareness and helps pilots make better decisions while monitoring battery level, signal strength, system warnings, or navigation data.',
      ],
    },
    {
      heading: 'Extensive Peripheral Connectivity',
      body: [
        'SPARROW-V1 includes 5 UARTs and 2 I2C ports, enabling flexible connection of FPV peripherals and expansion modules.',
      ],
      bullets: [
        'ELRS, CRSF, SBUS, or other receivers',
        'GPS modules and telemetry devices',
        'Digital FPV systems',
        'Analog or digital VTX control',
        'Compass modules, external sensors, and expansion accessories',
      ],
    },
    {
      heading: 'MicroSD Logging and USB Type-C Setup',
      body: [
        'Integrated MicroSD card support allows high-speed Blackbox flight logging for detailed performance analysis and tuning. Logs can record gyro measurements, stick inputs, PID controller behavior, motor outputs, and other important flight parameters.',
        'The USB Type-C interface makes setup, firmware flashing, CLI access, port setup, receiver configuration, OSD layout adjustment, PID tuning, motor testing, and diagnostics faster and easier.',
      ],
    },
    {
      heading: 'Compact Standard Mounting Format',
      body: [
        'The SPARROW-V1 Flight Control Card uses a compact 36 x 36 mm form factor with standard 30.5 x 30.5 mm mounting hole spacing, enabling easy installation in common FPV frames and flight-controller stacks.',
        'Its compact footprint supports clean wiring, easier maintenance, and straightforward upgrades across a wide range of FPV platforms.',
      ],
    },
    {
      heading: 'Analog and Digital VTX Compatibility',
      body: [
        'SPARROW-V1 is compatible with both analog and digital VTX setups, giving builders flexibility when choosing their FPV video system.',
        'Pilots can build with traditional analog FPV equipment or modern HD digital FPV systems while still benefiting from telemetry, warnings, and system information in the FPV feed.',
      ],
    },
    {
      heading: 'Advanced Power Reliability and Protection',
      body: [
        'Reliability is critical in FPV and autonomous flight applications. SPARROW-V1 includes a dual-redundant power architecture with isolated critical and non-critical power rails.',
        'The board also features over-voltage, over-current, and over-temperature shutdown protection, plus reverse-polarity and reverse-voltage protection on all power inputs.',
        'This architecture helps protect the electronics from wiring mistakes, damaging electrical faults, and thermal stress.',
      ],
    },
    {
      heading: 'Designed for Clean and Efficient FPV Builds',
      body: [
        'A front-facing camera connector simplifies FPV camera installation, clean wiring, and rapid maintenance.',
        'The Betaflight-compatible connector and solder pad layout makes it easier to connect receivers, ESCs, VTX systems, GPS modules, buzzers, LEDs, sensors, and other peripherals with fewer wiring mistakes.',
      ],
    },
    {
      heading: 'Integrated BLE and Broad Firmware Support',
      body: [
        'Integrated BLE connectivity with intelligent CPU control enables wireless configuration, simplified field tuning, and low-power operation.',
        'SPARROW-V1 is designed to support multiple open-source flight-control firmware ecosystems, including Betaflight, INAV, ArduPilot, and Pixhawk-compatible firmware platforms.',
      ],
    },
    {
      heading: 'Conclusion',
      body: [
        'SPARROW-V1 Flight Control Card is built for pilots and developers who need speed, precision, flexibility, and reliability in one compact platform.',
        'With its STM32H753 processor, high-quality IMU and barometer, advanced logging, rich peripheral connectivity, analog and digital VTX support, and robust power-protection architecture, it provides a strong foundation for modern FPV and multirotor systems.',
      ],
    },
  ],
};

const BlogCard = ({ onOpen }) => (
  <FadeIn direction="up">
    <article className="card group grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] min-h-[360px]">
      <div className="relative overflow-hidden bg-neutral-950 p-8 flex flex-col justify-between">
        <div className="absolute inset-0 grid-pattern text-white/25" aria-hidden="true" />
        <div className="absolute right-6 top-6 text-[clamp(4rem,9vw,8rem)] font-heading font-bold leading-none text-white/[0.06]" aria-hidden="true">
          FC
        </div>
        <div className="relative z-10">
          <span className="tag tag-orange bg-white/10 border-white/15 text-orange-300">
            {blog.category}
          </span>
        </div>
        <div className="relative z-10">
          <p className="font-heading font-bold text-white text-4xl leading-none">SPARROW-V1</p>
          <p className="mt-2 text-white/55 text-xs uppercase tracking-widest">Flight Control Card</p>
        </div>
      </div>

      <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-3 text-[0.6875rem] uppercase tracking-widest font-semibold text-neutral-400 mb-5">
            <span>{blog.date}</span>
            <span className="text-orange-500">/</span>
            <span>{blog.readTime}</span>
          </div>
          <h2 className="font-heading font-bold text-black leading-[1.08] text-[clamp(1.8rem,3vw,2.8rem)] max-w-3xl">
            {blog.title}
          </h2>
          <p className="mt-5 text-neutral-500 leading-relaxed max-w-2xl">
            {blog.excerpt}
          </p>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="btn-primary self-start mt-8"
          aria-label={`Read ${blog.title}`}
        >
          Read Article
          <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
        </button>
      </div>
    </article>
  </FadeIn>
);

const BlogArticle = ({ onBack }) => (
  <section className="section bg-white divide-top">
    <div className="container">
      <button
        type="button"
        onClick={onBack}
        className="btn-secondary btn-sm mb-10"
        aria-label="Back to blog list"
      >
        <ArrowBackIcon aria-hidden="true" sx={{ fontSize: 16 }} />
        Back
      </button>

      <article className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,760px)] gap-10 lg:gap-16 items-start">
        <aside className="lg:sticky lg:top-28 border border-neutral-200 bg-neutral-50 p-6">
          <p className="section-label mb-4">Key Features</p>
          <ul className="space-y-3">
            {blog.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 bg-orange-500 flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            {blog.category}
          </div>
          <h1 className="font-heading font-bold text-black leading-[1.05] text-[clamp(2rem,4.5vw,4rem)]">
            {blog.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-3 text-[0.6875rem] uppercase tracking-widest font-semibold text-neutral-400">
            <span>{blog.date}</span>
            <span className="text-orange-500">/</span>
            <span>{blog.readTime}</span>
          </div>

          <div className="mt-12 space-y-12">
            {blog.sections.map((section) => (
              <section key={section.heading} className="border-t border-neutral-200 pt-8">
                <h2 className="font-heading font-bold text-black text-[clamp(1.35rem,2vw,1.85rem)] leading-tight mb-5">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="grid gap-2 pt-2">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 bg-orange-500 flex-shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </div>
  </section>
);

const Blog = () => {
  const pageRef = useRef(null);
  const [selected, setSelected] = useState(false);
  useBookScrollEffects(pageRef);

  const openArticle = () => {
    setSelected(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeArticle = () => {
    setSelected(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={pageRef} className="overflow-hidden bg-white">
      <SEO
        title={selected ? 'SPARROW-V1 Flight Control Card Blog' : 'Blog'}
        description="Killis Bird technical blogs, product insights, and UAV engineering perspectives."
      />

      {selected && (
        <SecondaryHero
          title="SPARROW-V1"
          highlight="Flight Control Card"
          watermark="BLOG"
        />
      )}

      {selected ? (
        <BlogArticle onBack={closeArticle} />
      ) : (
        <section className="bg-white py-8 lg:py-10">
          <div className="container">
            <BlogCard onOpen={openArticle} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Blog;
