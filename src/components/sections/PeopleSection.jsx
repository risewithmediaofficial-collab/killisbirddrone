// src/components/sections/PeopleSection.jsx
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

const defaultTeam = [
  { name: 'Co-Founder',   role: 'Chief Executive Officer',         img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop' },
  { name: 'Co-Founder',   role: 'Chief Technology Officer',        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop' },
  { name: 'Co-Founder',   role: 'Chief Operations Officer',        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&auto=format&fit=crop' },
];

const PeopleSection = ({ team = defaultTeam }) => (
  <section
    className="section bg-white divide-top"
    aria-labelledby="team-heading"
  >
    <div className="container">
      <FadeIn direction="up">
        <SectionHeader
          eyebrow="Leadership"
          title="The Team Behind"
          highlight="Killis Bird"
          centered
          className="mb-14"
          id="team-heading"
        />
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 max-w-3xl mx-auto">
        {team.map((member, i) => (
          <FadeIn key={i} delay={i * 0.1} direction="up">
            <div className="bg-white overflow-hidden flex flex-col">
              {/* Photo */}
              <div className="img-zoom aspect-[3/4] overflow-hidden bg-neutral-100">
                <img
                  src={member.img || `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80`}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-6 border-t border-neutral-100">
                <h3 className="font-heading font-bold text-black text-lg leading-tight">
                  {member.name}
                </h3>
                <p className="text-neutral-500 text-xs mt-1">{member.role}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default PeopleSection;
