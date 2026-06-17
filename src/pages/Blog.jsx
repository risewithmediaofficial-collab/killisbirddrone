// src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useGsapReveal from '../hooks/useGsapReveal';
import useParallax from '../hooks/useParallax';
import ParallaxWatermark from '../components/ParallaxWatermark';
import SectionHeader from '../components/SectionHeader';
import CornerBrackets from '../components/CornerBrackets';
import ChromaGrid from '../components/ChromaGrid';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedTitle from '../components/AnimatedTitle';

const posts = [
  {
    tag: 'Innovation',
    date: 'May 2025',
    title: 'The Future of Swarm UAV Technology in Defence Applications',
    excerpt: 'How coordinated multi-UAV systems are transforming modern defence strategies and operational capabilities.',
    img: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80',
  },
  {
    tag: 'Engineering',
    date: 'April 2025',
    title: 'Carbon Fibre vs. Aluminium: Choosing the Right Airframe Material',
    excerpt: 'A deep-dive into material science for UAV frames — performance, weight, cost, and real-world trade-offs.',
    img: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800&q=80',
  },
  {
    tag: 'Agriculture',
    date: 'March 2025',
    title: 'Precision Agriculture: How UAVs Are Feeding the Future',
    excerpt: 'Exploring how drone technology is revolutionising crop monitoring, spraying, and yield prediction across India.',
    img: 'https://images.unsplash.com/photo-1586771107445-b3e7eb9f5a43?w=800&q=80',
  },
  {
    tag: 'Policy',
    date: 'February 2025',
    title: 'Navigating Drone Regulations: What You Need to Know',
    excerpt: 'A comprehensive guide to the DGCA drone framework and how it impacts UAV manufacturers and operators.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    tag: 'Technology',
    date: 'January 2025',
    title: 'AI-Powered Autonomous Navigation: The Next Frontier',
    excerpt: 'How artificial intelligence is enabling real-time obstacle avoidance and dynamic path planning for UAVs.',
    img: 'https://images.unsplash.com/photo-1601524909162-be87252be298?w=800&q=80',
  },
  {
    tag: 'Company',
    date: 'December 2024',
    title: 'Built in India, Trusted Worldwide: Our Global Expansion Story',
    excerpt: 'How Killis Bird grew from a Bangalore startup to a globally recognised UAV component brand.',
    img: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80',
  },
];

const BlogImage = ({ src, alt, aspect = 'aspect-[16/9]' }) => {
  const parallaxRef = useParallax(15);
  return (
    <div className={`img-accent overflow-hidden rounded-none ${aspect} bg-white relative group`}>
      <img
        ref={parallaxRef}
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover"
        loading="lazy"
      />
      <CornerBrackets color="#f97316" size="10px" thickness="1.5px" hoverShift />
    </div>
  );
};

const Blog = () => {
  const gridRevealRef = useGsapReveal({ target: '.reveal-card', y: 40, stagger: 0.12 });
  const journalItems = posts.slice(1).map((post, index) => ({
    id: `${post.tag}-${index}`,
    image: post.img,
    kicker: post.date,
    title: post.title,
    subtitle: post.tag,
    description: post.excerpt,
    borderColor: index % 2 === 0 ? '#f97316' : '#0ea5e9',
    gradient:
      index % 2 === 0
        ? 'linear-gradient(160deg, #0f172a, #1f2937 60%, #ea580c 136%)'
        : 'linear-gradient(160deg, #0f172a, #0c4a6e 58%, #1d4ed8 130%)'
  }));

  return (
    <>
      <SEO title="Blog" description="Killis Bird — Insights, innovation stories, and technical perspectives." />

      {/* ── Page Banner — Center Aligned (WHITE BACKGROUND) ── */}
      <section className="pt-32 pb-16 px-6 bg-white relative overflow-hidden text-center flex flex-col items-center justify-center border-b border-border">
        {/* Background watermark */}
        <ParallaxWatermark className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,18vw,22rem)] text-navy-100/30" speed={15}>
          IDEAS
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center">
          <div className="eyebrow justify-center">Insights & Ideas</div>
          <AnimatedTitle
            as="h1"
            title="The Killis Bird"
            highlight="Journal."
            lineBreakBeforeHighlight
            className="mb-4"
            textClassName="font-heading font-bold text-black leading-[1.08] text-center"
            textStyle={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
            baseOpacity={0.16}
            baseRotation={1.5}
            blurStrength={9}
          />
          <p className="text-muted text-body-lg max-w-xl leading-relaxed text-center">
            Thought leadership, engineering insights, and innovation stories from the frontier of UAV technology.
          </p>
          <div className="divider-bar mt-6 mx-auto" />
        </div>
      </section>

      {/* ── Featured Post (WHITE BACKGROUND) ── */}
      <section data-stack-section className="py-12 px-6 bg-white border-b border-border">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-6">
              {/* Content */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-skyroot bg-navy-50 px-3 py-1 rounded-none border border-navy-100 mb-4 inline-block">
                  {posts[0].tag}
                </span>
                <div className="text-xs text-muted font-semibold uppercase tracking-widest mb-3">{posts[0].date}</div>
                <h2 className="font-heading font-bold text-black leading-tight mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
                  {posts[0].title}
                </h2>
                <div className="divider-bar mb-6" />
                <ScrollReveal containerClassName="mb-8 max-w-lg" textClassName="text-muted text-body-lg leading-relaxed" baseRotation={1.5}>
                  {posts[0].excerpt}
                </ScrollReveal>
                <Link to="#" className="btn-primary">
                  Read Article <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Link>
              </div>
              {/* Image */}
              <div>
                <BlogImage src={posts[0].img} alt={posts[0].title} aspect="aspect-[16/10]" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Remaining Posts (NAVY BACKGROUND) ── */}
      <section data-stack-section className="py-20 px-6 bg-navy-50 relative overflow-hidden" ref={gridRevealRef}>
        <ParallaxWatermark className="left-0 top-1/2 -translate-y-1/2 text-[clamp(6rem,14vw,18rem)] text-navy-200/20" speed={22}>
          BLOG
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <SectionHeader eyebrow="More Articles" title="Latest" orangeTitle="Perspectives" />

          <div className="mt-12 reveal-card">
            <ChromaGrid items={journalItems} className="justify-center" radius={270} />
          </div>
        </div>
      </section>

      {/* ── Newsletter (WHITE BACKGROUND) ── */}
      <section data-stack-section className="py-24 px-6 bg-white border-t border-border relative overflow-hidden">
        {/* Background watermark */}
        <ParallaxWatermark className="right-0 bottom-0 translate-y-1/4 text-[clamp(8rem,16vw,20rem)] text-navy-100/30" speed={18}>
          NEWS
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <FadeIn direction="left">
              <SectionHeader eyebrow="Newsletter" title="Stay Ahead of" orangeTitle="the Curve" className="!mb-0" />
              <p className="text-muted text-body-lg max-w-md leading-relaxed mt-4">
                Subscribe to our newsletter for the latest UAV engineering insights delivered directly to your inbox.
              </p>
            </FadeIn>
            {/* Form */}
            <FadeIn direction="right" delay={0.15}>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-5 py-4 rounded-none bg-white border border-border text-black placeholder-muted outline-none focus:border-skyroot focus:ring-2 focus:ring-skyroot/20 transition-all text-sm shadow-sm"
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </button>
              </form>
              <p className="text-xs text-muted mt-3">No spam, unsubscribe at any time.</p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
