import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SettingsIcon from '@mui/icons-material/Settings';
import SectionLabel from '../common/SectionLabel';
import SplitHeading from '../common/SplitHeading';
import ImageFrame from '../common/ImageFrame';
import FeatureCard from '../common/FeatureCard';
import DecorativeDots from '../common/DecorativeDots';

const values = [
  {
    Icon: LightbulbIcon,
    title: 'Imagine',
    text: 'We dare to envision what the skies can become beyond conventional aerospace thinking.'
  },
  {
    Icon: AutoAwesomeIcon,
    title: 'Ideate',
    text: 'Every breakthrough component begins with ideas that are bold, practical, and future-forward.'
  },
  {
    Icon: SettingsIcon,
    title: 'Innovate',
    text: 'From concept to creation, we innovate relentlessly to redefine performance and reliability.'
  }
];

const CoreValuesSection = ({ image }) => (
  <section
    id="values"
    className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.95)_0_18%,transparent_18.2%),radial-gradient(circle_at_88%_42%,rgba(255,107,0,0.08)_0_18%,transparent_18.2%),linear-gradient(135deg,#fff8f1,#fdf2e8)] py-[120px] after:absolute after:right-[-120px] after:top-[120px] after:h-[360px] after:w-[360px] after:rounded-full after:border after:border-[#ff6b00]/10 max-sm:py-[72px]"
    aria-labelledby="values-title"
  >
    <DecorativeDots className="absolute right-[18%] top-[8%] opacity-35 max-sm:hidden" />
    <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
      <div className="reveal-group mb-14 max-w-[760px]">
        <SectionLabel>Core Values</SectionLabel>
        <SplitHeading id="values-title" highlight="Everything">
          What Drives
        </SplitHeading>
        <span className="my-7 block h-[3px] w-[52px] bg-[#ff6b00]" aria-hidden="true" />
      </div>
      <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] items-center gap-[clamp(44px,6vw,84px)] max-xl:grid-cols-1">
        <ImageFrame
          variant="landscape"
          src={image}
          alt="Drone flying above mountains representing Killis Bird values"
          width="760"
          height="560"
        />
        <div className="dna-values__cards grid gap-6">
          {values.map(({ Icon, title, text }) => (
            <FeatureCard key={title} icon={Icon} title={title}>
              {text}
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CoreValuesSection;

