import SectionLabel from '../common/SectionLabel';
import SplitHeading from '../common/SplitHeading';
import SmartImage from '../SmartImage';

const PeopleSection = ({ team }) => (
  <section id="people" className="bg-[#fff8f1] py-[120px] max-sm:py-[72px]" aria-labelledby="people-title">
    <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
      <div className="reveal-group mb-14 max-w-[760px]">
        <SectionLabel>Our People</SectionLabel>
        <SplitHeading id="people-title" highlight="Behind the Mission">
          The Minds
        </SplitHeading>
      </div>
      <div className="people-grid grid grid-cols-3 gap-7 max-lg:grid-cols-1">
        {team.map((member, index) => {
          return (
            <article key={member.name} className="people-card group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border-2 border-[#ff6b00] bg-white shadow-[0_22px_54px_rgba(17,21,26,0.08)]">
                <SmartImage
                  src={member.img}
                  alt={`${member.name} at Killis Bird`}
                  width="520"
                  height="650"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#11151a]/35" />
              </div>
              <div className="mt-5 text-center">
                <small className="mb-2 block text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#ff6b00]">Founder 0{index + 1}</small>
                <h3 className="font-heading text-[clamp(26px,3vw,38px)] font-medium leading-[1.04] tracking-[-0.04em] text-[#111111]">{member.name}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default PeopleSection;
