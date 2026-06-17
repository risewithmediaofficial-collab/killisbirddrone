// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CornerBrackets from './CornerBrackets';

gsap.registerPlugin(ScrollTrigger);

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
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // GSAP: hide on scroll-down, show on scroll-up
    const showAnim = gsap.fromTo(nav,
      { yPercent: 0 },
      {
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: 'power2.inOut',
      }
    );

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        const scrollY = window.scrollY;

        if (self.direction === -1) {
          showAnim.reverse();
        } else if (scrollY > 200) {
          showAnim.play();
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
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
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-white/95 shadow-soft backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300"
      >
        <div className="max-w-content mx-auto px-6 md:px-8 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={() => setOpen(false)}>
            <img
              src="/assests/KILLIS BIRD - LOGO.png"
              alt="Killis Bird Logo"
              className="h-9 md:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${isActive
                      ? 'text-skyroot'
                      : 'text-dark hover:text-skyroot'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-2 right-2 h-[2px] bg-skyroot rounded-full"
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
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="relative group inline-flex"
            >
              <span className="btn-primary !rounded-none !py-2 !px-6 !text-sm relative z-10 bg-skyroot text-white font-heading font-bold transition-all duration-300">
                Request Quote
              </span>
              <CornerBrackets color="#f97316" size="6px" thickness="1.5px" hoverShift />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-navy-50 transition-colors"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
          {open
              ? <CloseIcon className="text-black" />
              : <MenuIcon className="text-black" />
            }
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
            <div className="h-[72px]" /> {/* spacer for nav */}
            <ul className="flex flex-col px-8 py-6 gap-1 flex-1">
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
                      `block py-4 px-2 font-heading font-bold text-2xl transition-colors border-b border-border/50 ${isActive
                        ? 'text-skyroot'
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
                  className="relative group flex justify-center w-full"
                >
                  <span className="btn-primary w-full justify-center !text-base !py-3.5 !rounded-none text-center relative z-10 bg-skyroot text-white font-heading font-bold">
                    Request Quote
                  </span>
                  <CornerBrackets color="#f97316" size="8px" thickness="1.5px" hoverShift />
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

