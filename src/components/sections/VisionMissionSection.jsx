import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SectionLabel from '../common/SectionLabel';
import SplitHeading from '../common/SplitHeading';
import DecorativeDots from '../common/DecorativeDots';

const cards = [
  {
    Icon: GpsFixedIcon,
    title: 'Our Vision',
    text: 'We deliver the most trusted, innovative, and distinctive UAV components and solutions to our partners — setting the global standard for aerial excellence.'
  },
  {
    Icon: RocketLaunchIcon,
    title: 'Our Mission',
    text: 'To engineer robust, adaptable, and forward-thinking UAV technologies that empower our partners with reliability and excellence through continuous innovation, precision design, and uncompromising quality.'
  }
];

const VisionMissionSection = () => (
  <section id="purpose" className="bg-white py-[120px] max-sm:py-[72px]" aria-labelledby="purpose-title">
    <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
      <div className="reveal-group mb-14 max-w-[760px]">
        <SectionLabel>Our Purpose</SectionLabel>
        <SplitHeading id="purpose-title" highlight="Mission">
          Vision &
        </SplitHeading>
        <span className="my-7 block h-[3px] w-[52px] bg-[#ff6b00]" aria-hidden="true" />
      </div>
      <div className="dna-purpose__grid grid grid-cols-2 items-stretch gap-8 max-lg:grid-cols-1">
        {cards.map(({ Icon, title, text }) => (
          <article key={title} className="purpose-card group relative min-h-[390px] overflow-hidden rounded-[20px] border border-[#f1dfd1] bg-white p-[clamp(34px,5vw,58px)] shadow-[0_22px_54px_rgba(17,21,26,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b00] max-sm:min-h-0 max-sm:px-6">
            <DecorativeDots className="absolute -bottom-8 right-5 opacity-30" />
            <span className="absolute left-5 top-5 h-[54px] w-[54px] border-l-2 border-t-2 border-[#ff6b00]" aria-hidden="true" />
            <span className="absolute bottom-5 right-5 h-[54px] w-[54px] border-b-2 border-r-2 border-[#ff6b00]" aria-hidden="true" />
            <div className="mb-8 flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#fff0e5] text-[#ff6b00] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#ff6b00] group-hover:text-white">
              <Icon aria-hidden="true" sx={{ fontSize: 36 }} />
            </div>
            <h3 className="text-[30px] font-extrabold text-[#111111]">{title}</h3>
            <span className="my-7 block h-[3px] w-[52px] bg-[#ff6b00]" aria-hidden="true" />
            <p className="max-w-[640px] text-lg leading-[1.78] text-[#67707d] max-sm:text-base">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMissionSection;
