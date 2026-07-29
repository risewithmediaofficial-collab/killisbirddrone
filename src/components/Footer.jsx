// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LinkedInIcon   from '@mui/icons-material/LinkedIn';
import TwitterIcon    from '@mui/icons-material/Twitter';
import YouTubeIcon    from '@mui/icons-material/YouTube';
import InstagramIcon  from '@mui/icons-material/Instagram';
import FacebookIcon   from '@mui/icons-material/Facebook';
import EmailIcon      from '@mui/icons-material/Email';
import PhoneIcon      from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/our-dna',   label: 'Our DNA' },
  { to: '/creations', label: 'Creations' },
  { to: '/assistance',label: 'Services' },
  { to: '/journey',   label: 'Journey' },
  { to: '/blog',      label: 'Blog' },
  { to: '/contact',   label: 'Contact' },
];

const productLinks = [
  { label: 'Propulsion Systems', href: '/creations' },
  { label: 'Airframe Solutions', href: '/creations' },
  { label: 'Avionics & FCC',     href: '/creations' },
  { label: 'Custom Integration', href: '/assistance' },
  { label: 'Request a Quote',    href: '/contact' },
];

const socials = [
  { Icon: InstagramIcon, href: 'https://www.instagram.com/killisbird?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  { Icon: FacebookIcon,  href: '#', label: 'Facebook' },
  { Icon: TwitterIcon,   href: '#', label: 'Twitter / X' },
  { Icon: LinkedInIcon,  href: '#', label: 'LinkedIn' },
  { Icon: YouTubeIcon,   href: '#', label: 'YouTube' },
];

const Footer = () => (
  <footer
    className="bg-neutral-900 text-white relative overflow-hidden"
    role="contentinfo"
    aria-label="Site footer"
  >
    {/* Background watermark */}
    <div
      className="absolute right-0 bottom-0 font-heading font-bold leading-none select-none pointer-events-none text-white/[0.025]"
      style={{ fontSize: 'clamp(6rem,16vw,20rem)', letterSpacing: '-0.05em' }}
      aria-hidden="true"
    >
      KB
    </div>

    <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">

      {/* ─ Main grid ─ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border-t border-white/[0.07] pt-14 pb-10 gap-0">

        {/* Brand — col 4 */}
        <div className="lg:col-span-4 lg:pr-12 lg:border-r border-white/[0.07] pb-10 lg:pb-0">
          <Link to="/" className="inline-flex mb-6 group" aria-label="Killis Bird — Home">
            <span className="bg-white/90 group-hover:bg-white inline-flex p-2 transition-colors duration-200">
              <img
                src="/assests/KILLIS BIRD - LOGO.png"
                alt="Killis Bird"
                className="h-10 w-auto object-contain"
              />
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-1 max-w-[32ch]">
            Imagine. Ideate. Innovate.
          </p>
          <p className="text-orange-400 font-semibold text-sm mb-8">
            🇮🇳 Built in India. Trusted Worldwide.
          </p>

          {/* Social links */}
          <div className="flex gap-2" role="list" aria-label="Social media links">
            {socials.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href !== '#' ? '_blank' : undefined}
                rel={href !== '#' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ y: -2 }}
                className="w-9 h-9 border border-white/[0.1] hover:border-orange-500 hover:bg-orange-500 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                role="listitem"
              >
                <Icon aria-hidden="true" sx={{ fontSize: 14 }} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigate — col 2 */}
        <div className="lg:col-span-2 lg:px-10 lg:border-r border-white/[0.07] pb-8 lg:pb-0 mt-10 lg:mt-0">
          <h4 className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
            Navigate
          </h4>
          <ul className="space-y-3" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to} role="listitem">
                <Link
                  to={to}
                  className="text-white/55 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-200 shrink-0" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products — col 2 */}
        <div className="lg:col-span-2 lg:px-10 lg:border-r border-white/[0.07] pb-8 lg:pb-0 mt-0">
          <h4 className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
            Products
          </h4>
          <ul className="space-y-3" role="list">
            {productLinks.map(({ label, href }) => (
              <li key={label} role="listitem">
                <Link
                  to={href}
                  className="text-white/55 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-200 shrink-0" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — col 4 */}
        <div className="lg:col-span-4 lg:pl-10 mt-0">
          <h4 className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
            Get in Touch
          </h4>
          <ul className="space-y-4 mb-8" role="list">
            <li role="listitem">
              <div className="flex items-start gap-3">
                <LocationOnIcon aria-hidden="true" sx={{ fontSize: 13, color: '#ff6b00', mt: 0.4, flexShrink: 0 }} />
                <address className="text-white/50 text-xs leading-relaxed not-italic">
                  Killis Bird Technologies Pvt. Ltd.<br />
                  Plot No.107, Pollupalli SIDCO Industrial Estate,<br />
                  Billanakuppam Post, Krishnagiri – 635115,<br />
                  Tamil Nadu, India
                </address>
              </div>
            </li>
            <li role="listitem">
              <a href="mailto:info@killisbird.com"
                 className="flex items-center gap-3 text-white/55 hover:text-orange-400 text-sm transition-colors"
                 aria-label="Email us at info@killisbird.com">
                <EmailIcon aria-hidden="true" sx={{ fontSize: 13, color: '#ff6b00', flexShrink: 0 }} />
                info@killisbird.com
              </a>
            </li>
            <li role="listitem">
              <a href="tel:+918015122126"
                 className="flex items-center gap-3 text-white/55 hover:text-orange-400 text-sm transition-colors"
                 aria-label="Call us at +91 80151 22126">
                <PhoneIcon aria-hidden="true" sx={{ fontSize: 13, color: '#ff6b00', flexShrink: 0 }} />
                +91 80151 22126
              </a>
            </li>
          </ul>

          {/* Newsletter */}
          <h4 className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">
            Stay Updated
          </h4>
          <form
            className="flex gap-0"
            onSubmit={e => e.preventDefault()}
            aria-label="Newsletter subscription"
          >
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address for newsletter"
              required
              className="flex-1 bg-white/[0.05] border border-white/[0.1] focus:border-orange-500 text-white placeholder-white/25 px-3 py-2.5 text-sm outline-none transition-colors min-w-0"
              style={{ borderRadius: 0, fontFamily: 'var(--font-body)' }}
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 flex items-center justify-center transition-colors duration-200 shrink-0"
              style={{ borderRadius: 0 }}
            >
              <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 16 }} />
            </button>
          </form>
        </div>
      </div>

      {/* ─ Bottom bar ─ */}
      <div className="border-t border-white/[0.07] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} Killis Bird Technologies Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
            Precision Engineered · Innovation Delivered
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
