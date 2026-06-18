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
    className="relative overflow-hidden bg-[radial-gradient(circle_at_0_0,rgba(255,240,229,0.9)_0_13%,transparent_13.2%),radial-gradient(circle_at_100%_65%,rgba(253,242,232,0.72)_0_15%,transparent_15.2%),#fff] py-[120px] max-sm:py-[72px]"
    aria-labelledby="foundation-title"
  >
    <DecorativeDots className="absolute bottom-[9%] right-[5%] opacity-50 max-sm:hidden" />
    <div className="mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] items-center gap-[clamp(52px,7vw,104px)] px-[clamp(20px,5vw,80px)] max-xl:grid-cols-1">
      <div className="reveal-group max-w-[650px]">
        <SectionLabel>Our Foundation</SectionLabel>
        <SplitHeading id="foundation-title" highlight="Killis Bird">
          The DNA of
        </SplitHeading>
        <span className="my-7 block h-[3px] w-[52px] bg-[#ff6b00]" aria-hidden="true" />
        <div className="grid gap-5 [&_p]:text-lg [&_p]:leading-[1.78] [&_p]:text-[#67707d] max-sm:[&_p]:text-base">
          <p>At Killis Bird, our core is precision engineered with imagination, ideation, and innovation.</p>
          <p>This DNA powers the design and delivery of next-generation UAV components and solutions that expand the possibilities of aerospace and defence.</p>
          <p>Each creation embodies visionary thinking, rigorous engineering, and uncompromising excellence — we shape the future of flight.</p>
        </div>
        <QuoteCard>The sky is not the limit — it is merely where we begin.</QuoteCard>
        <p className="flex items-center gap-3 text-lg font-bold leading-[1.78] text-[#67707d] max-sm:text-base">
          <PublicIcon aria-hidden="true" sx={{ fontSize: 24, color: '#ff6b00' }} />
          <span className="text-[#ff6b00]">Built in India.</span> Trusted Worldwide.
        </p>
      </div>
      <ImageFrame
        variant="diagonal"
        src={image}
        alt="Killis Bird UAV in a precision technical frame"
        width="780"
        height="620"
        floatingContent={
          <FloatingInfoCard icon={GpsFixedIcon} title="Precision by Design." text="Engineered for what’s next." />
        }
      />
    </div>
  </section>
);

export default FoundationSection;
