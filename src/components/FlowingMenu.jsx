import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

/* ─── Milestone Detail Popup ───────────────────────────── */
function MilestonePopup({ item, onClose }) {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    // Animate in
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' },
    );
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = useCallback(() => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, onComplete: onClose });
    gsap.to(cardRef.current, { opacity: 0, y: 20, scale: 0.97, duration: 0.25 });
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleClose]);

  return (
    <div
      ref={overlayRef}
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 4vw, 48px)',
        backgroundColor: 'rgba(17,17,17,0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <div
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(17,21,26,0.22)',
        }}
      >
        {/* Image header */}
        {item.image && (
          <div
            style={{
              width: '100%',
              height: 'clamp(160px, 28vw, 260px)',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(17,17,17,0) 30%, rgba(17,17,17,0.6) 100%)',
              }}
            />
            {/* Year badge over image */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '20px',
                backgroundColor: '#ff6b00',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                padding: '6px 14px',
                borderRadius: '100px',
              }}
            >
              {item.eyebrow}
            </div>
          </div>
        )}

        {/* Content */}
        <div style={{ padding: 'clamp(20px, 4vw, 36px)' }}>
          {/* Eyebrow if no image */}
          {!item.image && item.eyebrow && (
            <span
              style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#ff6b00',
                marginBottom: '10px',
              }}
            >
              {item.eyebrow}
            </span>
          )}

          <h3
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#111111',
              lineHeight: 1.1,
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}
          >
            {item.text}
          </h3>

          <div
            style={{ width: '40px', height: '3px', backgroundColor: '#ff6b00', marginBottom: '18px' }}
          />

          <p
            style={{
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              lineHeight: 1.8,
              color: '#67707d',
              marginBottom: '28px',
            }}
          >
            {item.desc}
          </p>

          {/* Close button */}
          <button
            onClick={handleClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: 'none',
              backgroundColor: '#ff6b00',
              color: '#fff',
              fontSize: '13px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '12px 28px',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e85f00')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff6b00')}
          >
            Close ✕
          </button>
        </div>

        {/* X close icon top-right */}
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.9)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: 700,
            color: '#111111',
            zIndex: 2,
            boxShadow: '0 2px 12px rgba(17,21,26,0.12)',
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

/* ─── FlowingMenu ─────────────────────────────────────── */
function FlowingMenu({
  items = [],
  speed = 15,
  textColor = '#111111',
  bgColor = '#ffffff',
  marqueeBgColor = '#ff6b00',
  marqueeTextColor = '#ffffff',
  borderColor = 'rgba(17,21,26,0.1)',
}) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          backgroundColor: bgColor,
        }}
      >
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            margin: 0,
            padding: 0,
          }}
        >
          {items.map((item, idx) => (
            <MenuItem
              key={idx}
              {...item}
              speed={speed}
              textColor={textColor}
              marqueeBgColor={marqueeBgColor}
              marqueeTextColor={marqueeTextColor}
              borderColor={borderColor}
              onOpenPopup={() => setActiveItem(item)}
            />
          ))}
        </nav>
      </div>

      {/* Popup */}
      {activeItem && (
        <MilestonePopup item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
  );
}

/* ─── MenuItem ────────────────────────────────────────── */
function MenuItem({
  link,
  text,
  image,
  eyebrow,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  onOpenPopup,
}) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(5);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('[data-marquee-part]');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(5, needed));
    };
    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [text, image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('[data-marquee-part]');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;
      if (animationRef.current) animationRef.current.kill();
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      });
    };
    const timer = setTimeout(setupMarquee, 50);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) animationRef.current.kill();
    };
  }, [text, image, repetitions, speed]);

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  return (
    <div
      ref={itemRef}
      style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${borderColor}`,
        minHeight: '72px',
      }}
    >
      {/* Clickable row — centered text */}
      <button
        type="button"
        onClick={onOpenPopup}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`Open details for ${text}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '0 clamp(20px, 5vw, 80px)',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          textAlign: 'center',
          color: textColor,
          position: 'relative',
          gap: '16px',
        }}
        className="group"
      >
        {/* Eyebrow year — left */}
        {eyebrow && (
          <span
            style={{
              position: 'absolute',
              left: 'clamp(20px, 5vw, 80px)',
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: '#ff6b00',
              whiteSpace: 'nowrap',
            }}
          >
            {eyebrow}
          </span>
        )}

        {/* Centered title */}
        <span
          style={{
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            fontSize: 'clamp(22px, 3.2vw, 52px)',
            color: 'inherit',
            transition: 'color 0.3s',
          }}
        >
          {text}
        </span>

        {/* Arrow — right */}
        <span
          style={{
            position: 'absolute',
            right: 'clamp(20px, 5vw, 80px)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: `1px solid ${borderColor}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: 'inherit',
            flexShrink: 0,
            transition: 'all 0.3s',
          }}
          aria-hidden="true"
          className="sm-arrow"
        >
          →
        </span>
      </button>

      {/* Marquee overlay */}
      <div
        ref={marqueeRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          transform: 'translate3d(0, 101%, 0)',
          backgroundColor: marqueeBgColor,
        }}
      >
        <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
          <div
            ref={marqueeInnerRef}
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              height: '100%',
              width: 'fit-content',
              willChange: 'transform',
            }}
          >
            {[...Array(repetitions)].map((_, idx) => (
              <div
                key={idx}
                data-marquee-part="true"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                  color: marqueeTextColor,
                }}
              >
                <span
                  style={{
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                    fontWeight: 800,
                    fontSize: 'clamp(18px, 3.2vh, 44px)',
                    lineHeight: 1,
                    padding: '0 1vw',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {text}
                </span>
                {image && (
                  <div
                    style={{
                      width: 'clamp(100px, 12vw, 180px)',
                      height: '7vh',
                      minHeight: '40px',
                      margin: '1.5em clamp(8px, 2vw, 2vw)',
                      borderRadius: '50px',
                      backgroundSize: 'cover',
                      backgroundPosition: '50% 50%',
                      backgroundImage: `url(${image})`,
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
