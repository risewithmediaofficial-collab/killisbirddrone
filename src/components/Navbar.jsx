// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const links = [
  { to: '/',          label: 'SPACE',       end: true },
  { to: '/our-dna',   label: 'OUR DNA' },
  { to: '/creations', label: 'CREATIONS' },
  { to: '/blog',      label: 'BLOGS' },
  { to: '/assistance',label: 'ASSISTANCE' },
  { to: '/journey',   label: 'JOURNEY' },
];

const Navbar = () => {
  const [open, setOpen]         = useState(false);
  const navRef                  = useRef(null);

  const isLight = true;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    gsap.fromTo(nav,
      { y: -8, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`site-navbar ${isLight ? 'site-navbar--light' : ''}`}
      >
        <div className="site-navbar__inner">
          {/* Logo */}
          <Link
            to="/"
            className="site-navbar__logo"
            onClick={() => setOpen(false)}
            aria-label="Killis Bird — Home"
          >
            <img
              src="/assests/KILLIS BIRD - LOGO.png"
              alt="Killis Bird"
              className="site-navbar__logo-img"
            />
          </Link>

          {/* Desktop links */}
          <ul className="site-navbar__links" role="list">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `site-navbar__link ${isLight ? 'site-navbar__link--light' : ''} ${isActive ? 'site-navbar__link--active' : ''}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="site-navbar__active-underline"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="site-navbar__cta-wrap">
            <Link to="/contact" className="site-navbar__cta" aria-label="Request a quote">
              <span>Request Quote</span>
              <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 16 }} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`site-navbar__menu ${open ? 'site-navbar__menu--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-white flex flex-col lg:hidden"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-neutral-100">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
                <img
                  src="/assests/KILLIS BIRD - LOGO.png"
                  alt="Killis Bird"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 flex items-center justify-center text-neutral-600 hover:text-black transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 1l16 16M17 1L1 17"/>
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-6 pt-6" aria-label="Mobile navigation">
              <ul className="space-y-1" role="list">
                {links.map(({ to, label, end }, i) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.05, ease: [0.16, 1, 0.3, 1], duration: 0.36 }}
                  >
                    <NavLink
                      to={to}
                      end={end}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-4 font-heading font-bold text-2xl tracking-tight border-b border-neutral-100 transition-colors ${
                          isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom CTA */}
            <motion.div
              className="p-6 border-t border-neutral-100"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="site-navbar__mobile-cta"
                aria-label="Request a quote"
              >
                <span>Request Quote</span>
                <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 18 }} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
