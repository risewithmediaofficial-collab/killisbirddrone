// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const links = [
  { to: '/', label: 'Space', end: true },
  { to: '/our-dna', label: 'Our DNA' },
  { to: '/creations', label: 'Creations' },
  { to: '/assistance', label: 'Assistance' },
  { to: '/blog', label: 'Blog' },
  { to: '/journey', label: 'Journey' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.fromTo(nav, {
      y: -20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        ref={navRef}
        className={`site-navbar ${scrolled ? 'site-navbar--scrolled' : ''}`}
      >
        <div className="site-navbar__inner">
          {/* Logo */}
          <Link to="/" className="site-navbar__logo" onClick={() => setOpen(false)}>
            <img
              src="/assests/KILLIS BIRD - LOGO.png"
              alt="Killis Bird Logo"
              className="site-navbar__logo-img"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="site-navbar__links">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `site-navbar__link ${isActive ? 'site-navbar__link--active' : ''}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="site-navbar__active-underline"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
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
            <Link
              to="/contact"
              className="site-navbar__cta"
            >
              <span>Request Quote</span>
              <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 22 }} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`site-navbar__menu ${open ? 'site-navbar__menu--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu — full screen */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col"
          >
            <div className="h-[82px]" /> {/* spacer for nav */}
            <ul className="flex flex-col px-8 py-6 gap-1 flex-1 bg-[var(--background-soft)]">
              {links.map(({ to, label, end }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, ease: 'easeOut' }}
                >
                  <NavLink
                    to={to}
                    end={end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-4 px-2 font-heading font-bold text-2xl transition-colors border-b border-[#f1dfd1] ${isActive
                        ? 'text-[#ff6b00]'
                        : 'text-black hover:text-skyroot'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                className="pt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="site-navbar__mobile-cta"
                >
                  <span>Request Quote</span>
                  <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 22 }} />
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
