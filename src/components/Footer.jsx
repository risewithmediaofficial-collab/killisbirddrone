import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const navLinks = [
  { to: '/', label: 'Space' },
  { to: '/our-dna', label: 'Our DNA' },
  { to: '/creations', label: 'Creations' },
  { to: '/assistance', label: 'Assistance' },
  { to: '/journey', label: 'Journey' },
  { to: '/blog', label: 'Blog' },
];

const Footer = () => (
  <footer className="bg-black text-white relative overflow-hidden border-t border-white/[0.06]">
    <div
      className="absolute right-0 bottom-0 font-heading font-bold leading-none select-none pointer-events-none opacity-[0.02] text-white"
      style={{ fontSize: 'clamp(8rem, 18vw, 22rem)' }}
    >
      KB
    </div>

    <div className="relative z-10 max-w-content mx-auto px-6 md:px-8 pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 mb-14 border-t border-l border-white/[0.06]">

        {/* Brand — col span 4 */}
        <div className="lg:col-span-4 border-r border-b border-white/[0.06] p-8 md:p-10">
          <Link to="/" className="flex items-center mb-5 group">
            <span className="bg-white inline-flex p-1 rounded-sm">
              <img
                src="/assests/KILLIS BIRD - LOGO.png"
                alt="Killis Bird Logo"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </span>
          </Link>
          <p className="text-white/45 text-sm leading-relaxed mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Imagine. Ideate. Innovate.</p>
          <p className="text-skyroot font-semibold text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>🇮🇳 Built in India. Trusted Worldwide.</p>

          <div className="flex gap-2">
            {[
              { Icon: InstagramIcon, href: 'https://www.instagram.com/killisbird?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
              { Icon: FacebookIcon, href: '#', label: 'Facebook' },
              { Icon: TwitterIcon, href: '#', label: 'Twitter' },
              { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
              { Icon: YouTubeIcon, href: '#', label: 'YouTube' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href && href !== '#' ? '_blank' : undefined}
                rel={href && href !== '#' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ y: -2 }}
                className="w-9 h-9 border border-white/[0.12] hover:border-skyroot hover:bg-skyroot flex items-center justify-center transition-colors duration-200"
              >
                <Icon sx={{ fontSize: 15 }} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigate — col span 2 */}
        <div className="lg:col-span-2 border-r border-b border-white/[0.06] p-8 md:p-10">
          <h4
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Navigate
          </h4>
          <ul className="space-y-3">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-white/55 hover:text-skyroot text-sm transition-colors duration-200 flex items-center gap-2 group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="w-0 group-hover:w-4 h-px bg-skyroot transition-all duration-250 shrink-0" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — col span 3 */}
        <div className="lg:col-span-3 border-r border-b border-white/[0.06] p-8 md:p-10">
          <h4
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Connect
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-2.5">
              <LocationOnIcon sx={{ fontSize: 14, color: '#f97316', mt: 0.3, flexShrink: 0 }} />
              <span className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Killis Bird Technologies Pvt. Ltd.<br />
                Plot No.107, Pollupalli SIDCO Industrial Estate,<br />
                Near Govt. Medical College, Gangasandiram,<br />
                Billanakuppam Post, Krishnagiri District – 635115,<br />
                Tamil Nadu, India
              </span>
            </li>
            <li>
              <a
                href="mailto:info@killisbird.com"
                className="flex items-center gap-2.5 text-white/55 hover:text-skyroot text-sm transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <EmailIcon sx={{ fontSize: 13, color: '#f97316', flexShrink: 0 }} />
                info@killisbird.com
              </a>
            </li>
            <li>
              <a
                href="tel:+918015122126"
                className="flex items-center gap-2.5 text-white/55 hover:text-skyroot text-sm transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <PhoneIcon sx={{ fontSize: 13, color: '#f97316', flexShrink: 0 }} />
                +91 80151 22126
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter — col span 3 */}
        <div className="lg:col-span-3 border-r border-b border-white/[0.06] p-8 md:p-10">
          <h4
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-5"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Stay Updated
          </h4>
          <p className="text-white/45 text-sm mb-5 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Latest UAV innovations delivered to your inbox.
          </p>
          <form className="flex flex-col gap-2" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-white/[0.04] border border-white/[0.1] focus:border-skyroot text-white placeholder-white/25 px-4 py-2.5 text-sm outline-none transition-colors"
              style={{ borderRadius: 0, fontFamily: 'Inter, sans-serif' }}
            />
            <button
              type="submit"
              className="bg-skyroot hover:bg-skyroot-dark text-white font-bold py-2.5 text-sm transition-colors duration-200 flex items-center justify-center gap-2"
              style={{ borderRadius: 0, fontFamily: 'Inter, sans-serif' }}
            >
              Subscribe <ArrowForwardIcon sx={{ fontSize: 15 }} />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
          © {new Date().getFullYear()} Killis Bird Technologies Pvt. Ltd. All rights reserved.
        </p>
        <p className="text-white/60 text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
          Precision Engineered. Innovation Delivered.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
