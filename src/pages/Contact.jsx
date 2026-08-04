// src/pages/Contact.jsx
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SecondaryHero from '../components/common/SecondaryHero';
import FadeIn from '../components/FadeIn';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import LocationOnIcon  from '@mui/icons-material/LocationOn';
import EmailIcon       from '@mui/icons-material/Email';
import PhoneIcon       from '@mui/icons-material/Phone';
import AccessTimeIcon  from '@mui/icons-material/AccessTime';
import LinkedInIcon    from '@mui/icons-material/LinkedIn';
import TwitterIcon     from '@mui/icons-material/Twitter';
import YouTubeIcon     from '@mui/icons-material/YouTube';
import InstagramIcon   from '@mui/icons-material/Instagram';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon        from '@mui/icons-material/Send';

const contactInfo = [
  {
    Icon: LocationOnIcon,
    label: 'Address',
    value: 'Plot No.107, Pollupalli SIDCO Industrial Estate\nNear Government Medical College\nGangasandiram, Billanakuppam Post\nKrishnagiri District-635115\nTamil Nadu, India',
    isAddress: true,
  },
  {
    Icon: EmailIcon,
    label: 'Email',
    value: 'info@killisbird.com',
    href: 'mailto:info@killisbird.com',
  },
  {
    Icon: PhoneIcon,
    label: 'Phone',
    value: '+91 80151 22126',
    href: 'tel:+918015122126',
  },
  {
    Icon: AccessTimeIcon,
    label: 'Office Hours',
    value: 'Monday – Saturday: 9:00 AM – 6:00 PM IST',
  },
];

const inquiryTypes = [
  'Product Enquiry',
  'Custom Engineering',
  'Defence Partnership',
  'After-Sales Support',
  'Research Collaboration',
  'General Enquiry',
];

const Contact = () => {
  const pageRef = useRef(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  useBookScrollEffects(pageRef);

  const handleChange = e =>
    setForm(cur => ({ ...cur, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <div ref={pageRef} className="bg-white overflow-hidden">
      <SEO
        title="Contact Us"
        description="Get in touch with Killis Bird — request a quote, explore partnerships, or enquire about our UAV components and services."
      />

      <SecondaryHero
        eyebrow="Get In Touch"
        title="Let's Build Something"
        highlight="Extraordinary."
        description="Where Precision Meets Innovation"
        watermark="CONTACT"
      />

      {/* ─ Main contact section ─ */}
      <section
        className="section bg-white divide-top"
        aria-labelledby="contact-form-heading"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* ─ Left: Contact info ─ */}
            <div className="lg:col-span-4">
              <FadeIn direction="up">
                {/* Info blocks */}
                <div className="flex flex-col gap-6 mb-10">
                  {contactInfo.map(({ Icon, label, value, href, isAddress }, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="icon-box shrink-0" aria-label={label}>
                        <Icon sx={{ fontSize: 18 }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[0.625rem] font-bold uppercase tracking-widest text-neutral-400 mb-1"
                           style={{ fontFamily: 'var(--font-label)' }}>
                          {label}
                        </p>
                        {href ? (
                          <a href={href}
                             className="text-sm text-neutral-700 hover:text-orange-500 transition-colors"
                             aria-label={`${label}: ${value}`}>
                            {value}
                          </a>
                        ) : isAddress ? (
                          <address className="text-sm text-neutral-700 not-italic leading-relaxed whitespace-pre-line">
                            {value}
                          </address>
                        ) : (
                          <p className="text-sm text-neutral-700">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-100 pt-8 mb-8">
                  <p className="text-[0.625rem] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-2" role="list" aria-label="Social media">
                    {[
                      { Icon: InstagramIcon, href: 'https://www.instagram.com/killisbird?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
                      { Icon: LinkedInIcon,  href: '#', label: 'LinkedIn' },
                      { Icon: TwitterIcon,   href: '#', label: 'Twitter' },
                      { Icon: YouTubeIcon,   href: '#', label: 'YouTube' },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target={href !== '#' ? '_blank' : undefined}
                        rel={href !== '#' ? 'noopener noreferrer' : undefined}
                        aria-label={label}
                        className="w-9 h-9 border border-neutral-200 hover:border-orange-500 hover:bg-orange-50 flex items-center justify-center text-neutral-500 hover:text-orange-500 transition-all duration-200"
                        role="listitem"
                      >
                        <Icon aria-hidden="true" sx={{ fontSize: 15 }} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div
                  className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden border border-neutral-200"
                  aria-label="Location map placeholder"
                >
                  <iframe
                    title="Killis Bird location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4!2d78.21!3d12.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMwJzM2LjAiTiA3OMKwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </FadeIn>
            </div>

            {/* ─ Right: Form ─ */}
            <div className="lg:col-span-8">
              <FadeIn direction="up" delay={0.1}>
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20 border border-neutral-200 bg-neutral-50"
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircleIcon sx={{ fontSize: 56, color: '#ff6b00' }} aria-hidden="true" />
                    <h2 className="font-heading font-bold text-black text-2xl mt-5 mb-3">
                      Message Received
                    </h2>
                    <p className="text-neutral-500 text-sm max-w-[38ch] leading-relaxed">
                      Thank you for reaching out. Our team will review your enquiry and respond within one business day.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="btn-secondary mt-8"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    aria-label="Contact enquiry form"
                    id="contact-form"
                    noValidate
                  >
                    <div>
                      <h2
                        id="contact-form-heading"
                        className="font-heading font-bold text-black mb-2"
                        style={{ fontSize: 'clamp(1.3rem, 2vw, 1.75rem)', letterSpacing: '-0.02em' }}
                      >
                        Send an Enquiry
                      </h2>
                      <p className="text-neutral-500 text-sm">All fields marked * are required.</p>
                    </div>

                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="form-label">
                          First Name *
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          autoComplete="given-name"
                          className="form-input"
                          placeholder="Arjun"
                          value={form.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="form-label">
                          Last Name *
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          autoComplete="family-name"
                          className="form-input"
                          placeholder="Menon"
                          value={form.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Email + Phone row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="form-input"
                          placeholder="arjun@company.com"
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          className="form-input"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Company + Inquiry type row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="form-label">
                          Company / Organisation
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          className="form-input"
                          placeholder="SkyAgri Corp"
                          value={form.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiryType" className="form-label">
                          Enquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          className="form-select"
                          value={form.inquiryType}
                          onChange={handleChange}
                          aria-required="true"
                        >
                          <option value="">Select enquiry type</option>
                          {inquiryTypes.map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="form-input resize-none"
                        placeholder="Please describe your requirements, project scope, or any questions you have..."
                        value={form.message}
                        onChange={handleChange}
                        aria-required="true"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-neutral-400 text-xs max-w-[36ch] leading-relaxed">
                        By submitting, you agree to our Privacy Policy. We will never share your information.
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary shrink-0"
                        aria-label="Submit enquiry form"
                      >
                        {loading ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Enquiry
                            <SendIcon aria-hidden="true" sx={{ fontSize: 16 }} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
