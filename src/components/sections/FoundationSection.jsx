import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import PublicIcon from '@mui/icons-material/Public';
import SectionLabel from '../common/SectionLabel';
import SplitHeading from '../common/SplitHeading';
import ImageFrame from '../common/ImageFrame';
import FloatingInfoCard from '../common/FloatingInfoCard';
import QuoteCard from '../common/QuoteCard';
import DecorativeDots from '../common/DecorativeDots';

const FoundationSection = ({ image }) => (
  <section
    id="foundation"
    className="relative overflow-hidden bg-[radial-gradient(circle_at_0_0,rgba(255,240,229,0.9)_0_13%,transparent_13.2%),radial-gradient(circle_at_100%_65%,rgba(253,242,232,0.72)_0_15%,transparent_15.2%),#fff] py-[56px] max-sm:py-[40px]"
    aria-labelledby="foundation-title"
  >
    <DecorativeDots className="absolute bottom-[9%] right-[5%] opacity-50 max-sm:hidden" />
    <div className="mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] items-center gap-[clamp(28px,4vw,64px)] px-[clamp(20px,5vw,80px)] max-xl:grid-cols-1">
      <div className="reveal-group max-w-[650px]">
        <SectionLabel>Our Foundation</SectionLabel>
        <SplitHeading id="foundation-title" highlight="Killis Bird">
          The DNA of
        </SplitHeading>
        <span className="my-4 block h-[3px] w-[44px] bg-[#ff6b00]" aria-hidden="true" />
        <QuoteCard>— we shape the future of flight.</QuoteCard>
        <p className="flex items-center gap-3 text-base font-bold leading-[1.78] text-[#67707d]">
          <PublicIcon aria-hidden="true" sx={{ fontSize: 20, color: '#ff6b00' }} />
          <span className="text-[#ff6b00]">Built in India.</span> Trusted Worldwide.
        </p>
      </div>
      <ImageFrame
        variant="diagonal"
        src={image}
        alt="Killis Bird UAV in a precision technical frame"
        width="680"
        height="480"
        floatingContent={
          <FloatingInfoCard icon={GpsFixedIcon} title="Precision by Design." text="Engineered for what's next." />
        }
      />
    </div>
  </section>
);

export default FoundationSection;

