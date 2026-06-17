// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ParallaxWatermark from '../components/ParallaxWatermark';
import SectionHeader from '../components/SectionHeader';
import CornerBrackets from '../components/CornerBrackets';
import AnimatedTitle from '../components/AnimatedTitle';

const contactInfo = [
  {
    Icon: LocationOnIcon,
    label: 'Headquarters',
    lines: ['Killis Bird Technologies Pvt. Ltd.', 'Bengaluru, Karnataka, India'],
  },
  {
    Icon: EmailIcon,
    label: 'Email Us',
    lines: ['info@killisbird.com', 'sales@killisbird.com'],
    href: 'mailto:info@killisbird.com',
  },
  {
    Icon: PhoneIcon,
    label: 'Call Us',
    lines: ['+91 80 0000 0000'],
    href: 'tel:+918000000000',
  },
  {
    Icon: AccessTimeIcon,
    label: 'Business Hours',
    lines: ['Monday – Friday', '9:00 AM – 6:00 PM IST'],
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  const inputCls = 'w-full bg-white border border-border rounded-none px-5 py-4 text-sm text-black outline-none focus:border-skyroot focus:ring-2 focus:ring-skyroot/20 transition-all placeholder-muted/60 shadow-sm';

  return (
    <>
      <SEO title="Contact Us" description="Request a quote or get in touch with the Killis Bird team." />

      {/* ── Page Banner — Center Aligned (WHITE BACKGROUND) ── */}
      <section className="pt-32 pb-16 px-6 bg-white relative overflow-hidden text-center flex flex-col items-center justify-center border-b border-border">
        {/* Background watermark */}
        <ParallaxWatermark className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,18vw,22rem)] text-navy-100/30" speed={15}>
          HELLO
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center">
          <div className="eyebrow justify-center">Get In Touch</div>
          <AnimatedTitle
            as="h1"
            title="Let's Build Something"
            highlight="Extraordinary."
            lineBreakBeforeHighlight
            className="mb-4"
            textClassName="font-heading font-bold text-black leading-[1.08] text-center"
            textStyle={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
            baseOpacity={0.16}
            baseRotation={1.5}
            blurStrength={9}
          />
          <p className="text-muted text-body-lg max-w-xl leading-relaxed text-center">
            Whether you are ready to partner, need a custom component, or simply want to explore
            possibilities — we are here.
          </p>
          <div className="divider-bar mt-6 mx-auto" />
        </div>
      </section>

      {/* ── Main Contact Area (NAVY BACKGROUND) ── */}
      <section data-stack-section className="py-20 px-6 bg-navy-50 relative overflow-hidden">
        <ParallaxWatermark className="left-0 top-1/2 -translate-y-1/2 text-[clamp(8rem,16vw,22rem)] text-navy-200/10" speed={20}>
          CONNECT
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Info Left */}
            <div className="lg:col-span-5">
              <FadeIn direction="left">
                <SectionHeader eyebrow="Contact Details" title="Let's Start a" orangeTitle="Conversation" />

                <div className="space-y-8 mt-10">
                  {contactInfo.map(({ Icon, label, lines, href }, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-none bg-skyroot text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Icon sx={{ fontSize: 20 }} />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-black text-sm mb-1">{label}</div>
                        {lines.map((line, li) =>
                          href && li === 0 ? (
                            <a key={li} href={href} className="block text-muted text-sm hover:text-skyroot transition-colors duration-200">
                              {line}
                            </a>
                          ) : (
                            <p key={li} className="text-muted text-sm">{line}</p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex gap-3 mt-12">
                  {[
                    { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
                    { Icon: TwitterIcon, href: '#', label: 'Twitter' },
                    { Icon: YouTubeIcon, href: '#', label: 'YouTube' },
                  ].map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      whileHover={{ y: -2 }}
                      className="w-11 h-11 rounded-none border border-border flex items-center justify-center text-muted hover:text-skyroot hover:border-skyroot-light transition-all duration-300 bg-white"
                    >
                      <Icon sx={{ fontSize: 20 }} />
                    </motion.a>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 bg-white rounded-none border border-border px-8 relative group"
                  >
                    <CheckCircleIcon sx={{ fontSize: 64, color: '#f97316', mb: 2 }} />
                    <h3 className="font-heading font-bold text-black text-3xl mb-4">Message Received!</h3>
                    <p className="text-muted text-body-lg max-w-sm mx-auto mb-8">
                      Thank you for reaching out. Our team will review your request and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                    <CornerBrackets color="#f97316" size="12px" thickness="2px" hoverShift={false} />
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-none border border-border p-8 md:p-10 relative group">
                    <SectionHeader eyebrow="Send a Message" title="Request a" orangeTitle="Quote" />
                    <CornerBrackets color="#f97316" size="12px" thickness="2px" hoverShift={false} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 mt-6">
                      <div>
                        <label className="block text-[11px] font-bold text-black uppercase tracking-widest mb-2" htmlFor="name">
                          Full Name *
                        </label>
                        <input id="name" name="name" type="text" required
                          value={form.name} onChange={handleChange}
                          className={inputCls} placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-black uppercase tracking-widest mb-2" htmlFor="email">
                          Email Address *
                        </label>
                        <input id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange}
                          className={inputCls} placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-[11px] font-bold text-black uppercase tracking-widest mb-2" htmlFor="phone">
                          Phone Number
                        </label>
                        <input id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange}
                          className={inputCls} placeholder="+91 00000 00000" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-black uppercase tracking-widest mb-2" htmlFor="company">
                          Organisation
                        </label>
                        <input id="company" name="company" type="text"
                          value={form.company} onChange={handleChange}
                          className={inputCls} placeholder="Your company" />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-[11px] font-bold text-black uppercase tracking-widest mb-2" htmlFor="subject">
                        Subject *
                      </label>
                      <div className="relative">
                        <select id="subject" name="subject" required
                          value={form.subject} onChange={handleChange}
                          className={inputCls + ' appearance-none cursor-pointer pr-10'}
                        >
                          <option value="">Select a topic</option>
                          <option value="quote">Request a Quote</option>
                          <option value="customization">Custom Component Enquiry</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="support">Technical Support</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted text-xs">
                          ▼
                        </div>
                      </div>
                    </div>

                    <div className="mb-7">
                      <label className="block text-[11px] font-bold text-black uppercase tracking-widest mb-2" htmlFor="message">
                        Message *
                      </label>
                      <textarea id="message" name="message" rows={5} required
                        value={form.message} onChange={handleChange}
                        className={inputCls + ' resize-y'}
                        placeholder="Tell us about your project or enquiry…"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center py-4">
                      Send Message <ArrowForwardIcon sx={{ fontSize: 18 }} />
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map / Location band (WHITE BACKGROUND) ── */}
      <section data-stack-section className="py-24 px-6 bg-white relative overflow-hidden border-t border-border">
        {/* Background watermark */}
        <ParallaxWatermark className="right-0 bottom-0 translate-y-1/4 text-[clamp(8rem,16vw,20rem)] text-navy-100/30" speed={15}>
          IND
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <FadeIn className="text-center">
            <SectionHeader eyebrow="Where We Are" title="Based in" orangeTitle="Bengaluru, India" centered />
            <p className="text-muted text-body-lg max-w-md mx-auto leading-relaxed mt-4">
              At the heart of India's aerospace and technology corridor — building tomorrow's aerial systems, today.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Contact;
