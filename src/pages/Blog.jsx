import { useRef, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import sparrowTopView from '../assets/DJS02373.png';

const blog = {
  title: 'Built for Advanced FPV: A High-Performance SPARROW-V1 Flight Control Card',
  category: 'Product Engineering',
  readTime: '7 min read',
  date: 'Technical Blog',
  image: sparrowTopView,
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

const BlogCarousel = ({ onOpen }) => (
  <section className="bg-white py-10 lg:py-14">
    <div className="container">
      <FadeIn direction="up">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <div className="section-label mb-3">Blogs</div>
            <h1 className="font-heading font-bold text-black leading-tight text-[clamp(2rem,4vw,3.5rem)]">
            </h1>
          </div>
          <div className="hidden sm:flex gap-2" aria-label="Blog carousel controls">
            <button type="button" className="w-11 h-11 border border-neutral-200 flex items-center justify-center text-neutral-400" aria-label="Previous blog">
              <ArrowBackIcon aria-hidden="true" sx={{ fontSize: 18 }} />
            </button>
            <button type="button" className="w-11 h-11 border border-neutral-200 flex items-center justify-center text-neutral-400" aria-label="Next blog">
              <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 18 }} />
            </button>
          </div>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.08}>
        <div className="overflow-hidden border border-neutral-200 bg-neutral-100">
          <article className="group grid grid-cols-1 lg:grid-cols-[0.9fr_1.25fr] bg-white">
            <div className="relative min-h-[300px] bg-neutral-50 p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-neutral-200">
              <div className="absolute left-6 top-6 tag tag-orange">{blog.category}</div>
              <img
                src={blog.image}
                alt="SPARROW-V1 Flight Control Card"
                className="h-56 sm:h-72 max-w-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-3 text-[0.6875rem] uppercase tracking-widest font-semibold text-neutral-400 mb-5">
                <span>{blog.date}</span>
                <span className="text-orange-500">/</span>
                <span>{blog.readTime}</span>
              </div>
              <h2 className="font-heading font-bold text-black leading-[1.08] text-[clamp(1.8rem,3.4vw,3.6rem)] max-w-4xl">
                {blog.title}
              </h2>
              <p className="mt-5 text-neutral-500 leading-relaxed max-w-2xl">
                {blog.excerpt}
              </p>
              <button
                type="button"
                onClick={onOpen}
                className="btn-primary self-start mt-8"
                aria-label={`Read more about ${blog.title}`}
              >
                Read More
                <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
              </button>
            </div>
          </article>
        </div>
      </FadeIn>
    </div>
  </section>
);

const BlogArticle = ({ onBack }) => {
  const pages = [
    {
      heading: blog.title,
      body: [blog.excerpt],
      cover: true,
    },
    ...blog.sections.flatMap((section) => {
      const bodyPages = section.body.map((paragraph) => ({
        heading: section.heading,
        body: [paragraph],
      }));

      if (!section.bullets) {
        return bodyPages;
      }

      return [
        ...bodyPages,
        {
          heading: section.heading,
          body: [],
          bullets: section.bullets,
        },
      ];
    }),
  ];
  const [page, setPage] = useState(0);
  const activePage = pages[page];
  const isFirst = page === 0;
  const isLast = page === pages.length - 1;

  const goPrev = () => setPage((current) => Math.max(0, current - 1));
  const goNext = () => setPage((current) => Math.min(pages.length - 1, current + 1));

  return (
    <section className="h-screen overflow-hidden bg-white pt-[84px] pb-5">
      <div className="container h-full flex flex-col">
        <div className="flex items-center justify-between gap-4 mb-4 shrink-0">
          <button
            type="button"
            onClick={onBack}
            className="btn-secondary btn-sm"
            aria-label="Back to blog list"
          >
            <ArrowBackIcon aria-hidden="true" sx={{ fontSize: 16 }} />
            Back
          </button>
          <div className="text-[0.6875rem] uppercase tracking-widest font-semibold text-neutral-400">
            {page + 1} / {pages.length}
          </div>
        </div>

        <article className="min-h-0 flex-1 border border-neutral-200 bg-white grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="hidden lg:flex bg-neutral-50 border-r border-neutral-200 p-8 items-center justify-center overflow-hidden">
            <img
              src={blog.image}
              alt="SPARROW-V1 Flight Control Card"
              className="max-h-[54vh] max-w-full w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
            />
          </div>

          <div className="min-h-0 p-6 sm:p-8 lg:p-9 flex flex-col">
            <div className="flex flex-wrap gap-3 text-[0.6875rem] uppercase tracking-widest font-semibold text-neutral-400 mb-4 shrink-0">
              <span>{blog.date}</span>
              <span className="text-orange-500">/</span>
              <span>{blog.readTime}</span>
            </div>

            <div className="min-h-0 flex-1 flex flex-col justify-center overflow-hidden">
              {activePage.cover && (
                <div className="section-label mb-3">
                  {blog.category}
                </div>
              )}
              <h1 className="font-heading font-bold text-black leading-[1.08] text-[clamp(1.55rem,2.45vw,2.8rem)] max-w-4xl">
                {activePage.heading}
              </h1>
              <div className="mt-5 space-y-3 text-neutral-600 leading-[1.55] text-[clamp(0.92rem,1.05vw,1.05rem)] max-w-3xl">
                {activePage.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {activePage.bullets && (
                  <ul className="grid gap-2 pt-1">
                    {activePage.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 bg-orange-500 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 pt-5 shrink-0">
              <button
                type="button"
                onClick={goPrev}
                disabled={isFirst}
                className="w-12 h-12 border border-neutral-200 flex items-center justify-center text-neutral-500 disabled:opacity-30 disabled:cursor-not-allowed hover:border-orange-500 hover:text-orange-500 transition-colors"
                aria-label="Previous article section"
              >
                <ArrowBackIcon aria-hidden="true" sx={{ fontSize: 18 }} />
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={isLast}
                className="group relative w-14 h-14 bg-orange-500 text-white flex items-center justify-center overflow-hidden disabled:bg-neutral-300 disabled:cursor-not-allowed"
                aria-label={isLast ? 'Article complete' : 'Next article section'}
              >
                <span className="absolute inset-0 bg-orange-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" aria-hidden="true" />
                <KeyboardDoubleArrowRightIcon
                  aria-hidden="true"
                  className={`relative z-10 ${isLast ? '' : 'animate-[articleArrowPulse_1.2s_ease-in-out_infinite]'}`}
                  sx={{ fontSize: 25 }}
                />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

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

      {selected ? (
        <BlogArticle onBack={closeArticle} />
      ) : (
        <BlogCarousel onOpen={openArticle} />
      )}
    </div>
  );
};

export default Blog;
