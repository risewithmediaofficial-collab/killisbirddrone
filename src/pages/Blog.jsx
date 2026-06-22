import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SEO from '../components/SEO';
import ParallaxWatermark from '../components/ParallaxWatermark';
import ScrollReveal from '../components/ScrollReveal';
import ImageFrame from '../components/common/ImageFrame';
import OrangeButton from '../components/common/OrangeButton';
import SecondarySectionIntro from '../components/common/SecondarySectionIntro';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const posts = [
  { tag: 'Innovation', date: 'May 2025', title: 'The Future of Swarm UAV Technology in Defence Applications', excerpt: 'How coordinated multi-UAV systems are transforming modern defence strategies and operational capabilities.', img: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80' },
  { tag: 'Engineering', date: 'April 2025', title: 'Carbon Fibre vs. Aluminium: Choosing the Right Airframe Material', excerpt: 'A deep-dive into material science for UAV frames — performance, weight, cost, and real-world trade-offs.', img: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800&q=80' },
  { tag: 'Agriculture', date: 'March 2025', title: 'Precision Agriculture: How UAVs Are Feeding the Future', excerpt: 'Exploring how drone technology is revolutionising crop monitoring, spraying, and yield prediction across India.', img: 'https://images.unsplash.com/photo-1586771107445-b3e7eb9f5a43?w=800&q=80' },
  { tag: 'Policy', date: 'February 2025', title: 'Navigating Drone Regulations: What You Need to Know', excerpt: 'A comprehensive guide to the DGCA drone framework and how it impacts UAV manufacturers and operators.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80' },
  { tag: 'Technology', date: 'January 2025', title: 'AI-Powered Autonomous Navigation: The Next Frontier', excerpt: 'How artificial intelligence is enabling real-time obstacle avoidance and dynamic path planning for UAVs.', img: 'https://images.unsplash.com/photo-1601524909162-be87252be298?w=800&q=80' },
  { tag: 'Company', date: 'December 2024', title: 'Built in India, Trusted Worldwide: Our Global Expansion Story', excerpt: 'How Killis Bird grew from a Bangalore startup to a globally recognised UAV component brand.', img: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80' },
];

const Blog = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef}>
      <SEO title="Blog" description="Killis Bird — Insights, innovation stories, and technical perspectives." />

      <section data-stack-section className="bg-white py-[110px] max-sm:py-[72px]">
        <div className="mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] items-center gap-[clamp(44px,6vw,84px)] px-[clamp(20px,5vw,80px)] max-xl:grid-cols-1">
          <div>
            <SecondarySectionIntro eyebrow={`${posts[0].tag} • ${posts[0].date}`} title="Featured" highlight="Perspective" className="max-w-[640px]" />
            <h2 className="mt-8 max-w-[700px] text-[clamp(30px,4vw,52px)] font-normal leading-[1.06] tracking-[-0.05em] text-[#111111]">{posts[0].title}</h2>
            <div className="mt-6 max-w-[620px]"><ScrollReveal containerClassName="my-0" textClassName="text-lg leading-[1.8] text-[#67707d] max-sm:text-base" baseRotation={1.2}>{posts[0].excerpt}</ScrollReveal></div>
            <div className="mt-8"><OrangeButton to="/contact">Read Article</OrangeButton></div>
          </div>
          <div><ImageFrame variant="technical" src={posts[0].img} alt={posts[0].title} width="820" height="520" /></div>
        </div>
      </section>

      <section data-stack-section className="relative overflow-hidden bg-[#fff8f1] py-[110px] max-sm:py-[72px]">
        <ParallaxWatermark className="left-0 top-1/2 -translate-y-1/2 text-[clamp(6rem,14vw,18rem)] text-[#ff6b00]/[0.06]" speed={20}>BLOG</ParallaxWatermark>
        <div className="relative mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <SecondarySectionIntro eyebrow="More Articles" title="Latest" highlight="Perspectives" description="A curated stream of engineering viewpoints, policy updates, and innovation stories shaping the future of flight." />
          <div className="mt-12 grid gap-7 lg:grid-cols-2 xl:grid-cols-3">
            {posts.slice(1).map((post) => (
              <article key={post.title} className="book-reveal-card overflow-hidden rounded-[20px] border border-[#f1dfd1] bg-white shadow-[0_18px_42px_rgba(17,21,26,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(17,21,26,0.1)]">
                <ImageFrame variant="landscape" src={post.img} alt={post.title} width="760" height="420" className="min-h-[280px]" />
                <div className="px-6 pb-7 pt-6">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#ff6b00]">
                    <span>{post.tag}</span><span className="h-1 w-1 rounded-full bg-[#ff6b00]" aria-hidden="true" /><span className="text-[#67707d]">{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-[24px] font-extrabold leading-[1.2] text-[#111111]">{post.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.78] text-[#67707d]">{post.excerpt}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-[14px] font-extrabold text-[#ff6b00] transition-colors duration-300 hover:text-[#e85f00]">
                    <span>Read More</span><ArrowForwardIcon sx={{ fontSize: 18 }} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-stack-section className="bg-white py-[110px] max-sm:py-[72px]">
        <div className="mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] items-center gap-[clamp(44px,6vw,84px)] px-[clamp(20px,5vw,80px)] max-xl:grid-cols-1">
          <div><SecondarySectionIntro eyebrow="Newsletter" title="Stay Ahead of" highlight="the Curve" description="Subscribe to our newsletter for the latest UAV engineering insights delivered directly to your inbox." /></div>
          <form className="book-reveal-card rounded-[20px] border border-[#f1dfd1] bg-[#fff8f1] p-7 shadow-[0_18px_42px_rgba(17,21,26,0.06)]" onSubmit={(event) => event.preventDefault()}>
            <label className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#67707d]" htmlFor="newsletter-email">Email Address</label>
            <input id="newsletter-email" type="email" placeholder="Enter your email address" required className="mt-3 w-full border border-[#f1dfd1] bg-white px-5 py-4 text-sm text-[#111111] outline-none transition-all duration-300 placeholder:text-[#9aa3ad] focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/15" />
            <div className="mt-5"><OrangeButton>Subscribe</OrangeButton></div>
            <p className="mt-4 text-sm text-[#67707d]">No spam, unsubscribe at any time.</p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
