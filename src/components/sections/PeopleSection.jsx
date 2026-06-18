import GroupsIcon from '@mui/icons-material/Groups';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SectionLabel from '../common/SectionLabel';
import SplitHeading from '../common/SplitHeading';
import SmartImage from '../SmartImage';

const icons = [GroupsIcon, EngineeringIcon, HandshakeIcon];

const PeopleSection = ({ team }) => (
  <section id="people" className="bg-[#fff8f1] py-[120px] max-sm:py-[72px]" aria-labelledby="people-title">
    <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
      <div className="reveal-group mb-14 max-w-[760px]">
        <SectionLabel>Our People</SectionLabel>
        <SplitHeading id="people-title" highlight="Behind the Mission">
          The Minds
        </SplitHeading>
      </div>
      <div className="people-grid grid grid-cols-2 gap-7 max-lg:grid-cols-1">
        {team.map((member, index) => {
          const Icon = icons[index] || GroupsIcon;
          return (
            <article key={member.name} className={`people-card group relative min-h-[440px] overflow-hidden rounded-[22px] [clip-path:polygon(0_0,94%_0,100%_11%,100%_100%,8%_100%,0_89%)] ${index === 2 ? 'col-span-2 min-h-[470px] max-lg:col-span-1' : ''} max-sm:min-h-[390px]`}>
              <div className="absolute inset-3 z-[3] border-2 border-[#ff6b00] opacity-80 [clip-path:polygon(0_0,94%_0,100%_11%,100%_100%,8%_100%,0_89%)]" aria-hidden="true" />
              <SmartImage
                src={member.img}
                alt={`${member.name} at Killis Bird`}
                width="780"
                height="460"
                className="absolute h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#11151a]/20 to-[#11151a]/90 transition-colors duration-300 group-hover:from-[#11151a]/30 group-hover:to-[#11151a]/95" />
              <div className="absolute bottom-0 z-[2] max-w-[600px] p-11 text-white max-sm:p-7">
                <span className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#ff6b00] text-white">
                  <Icon aria-hidden="true" sx={{ fontSize: 22 }} />
                </span>
                <small className="mb-3 block text-[12px] font-extrabold uppercase tracking-[0.16em] text-white/75">Team 0{index + 1}</small>
                <h3 className="font-heading text-[clamp(30px,4vw,48px)] font-medium leading-[1.04] tracking-[-0.04em] text-white">{member.name}</h3>
                <p className="mt-4 text-[17px] leading-[1.7] text-white/80">{member.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default PeopleSection;
