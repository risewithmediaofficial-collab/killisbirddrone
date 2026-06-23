import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SectionLabel from '../common/SectionLabel';
import SplitHeading from '../common/SplitHeading';

const cards = [
  {
    Icon: GpsFixedIcon,
    title: 'Our Vision',
    text: 'We deliver the most trusted, innovative, and distinctive UAV components and solutions to our partners.'
  },
  {
    Icon: RocketLaunchIcon,
    title: 'Our Mission',
    text: 'To engineer robust, adaptable, and forward thinking UAV technologies that empower our partners with reliability and excellence, through continuous innovation, precision design, and uncompromising quality.'
  }
];

const VisionMissionSection = () => (
  <section id="purpose" className="bg-white py-[64px] max-sm:py-[44px]" aria-labelledby="purpose-title">
    <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
      <div className="reveal-group mb-14 max-w-[760px]">
        <SectionLabel>Our Purpose</SectionLabel>
        <SplitHeading id="purpose-title" highlight="Mission">
          Vision &
        </SplitHeading>
      </div>
      <div className="grid grid-cols-2 gap-x-[clamp(48px,8vw,120px)] gap-y-12 max-lg:grid-cols-1">
        {cards.map(({ Icon, title, text }) => (
          <div key={title} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Icon aria-hidden="true" sx={{ fontSize: 28 }} className="text-[#ff6b00] shrink-0" />
              <h3 className="text-[26px] font-extrabold text-[#111111] leading-tight">{title}</h3>
            </div>
            <div className="h-px w-12 bg-[#ff6b00]" aria-hidden="true" />
            <p className="text-[16px] leading-[1.82] text-[#67707d]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMissionSection;
