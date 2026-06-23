import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SecondaryHero from '../components/common/SecondaryHero';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import SmartImage from '../components/SmartImage';

const Contact = () => {
  const pageRef = useRef(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    applicationType: '',
    projectStage: '',
    message: ''
  });
  const [sent, setSent] = useState(false);
  useBookScrollEffects(pageRef);

  const handleChange = (event) =>
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div ref={pageRef} className="bg-white">
      <SEO title="Contact Us" description="Request a quote or get in touch with the Killis Bird team." />
      
      <SecondaryHero
        eyebrow="Get In Touch"
        title="Let's Build Something"
        highlight="Extraordinary."
        description="Whether you are ready to partner, need a custom component, or simply want to explore possibilities — we are here."
        watermark="HELLO"
      />

      <section data-stack-section className="relative overflow-hidden bg-white py-[64px] max-sm:py-[44px]">
        <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-1 lg:grid-cols-12 gap-12 px-[clamp(20px,5vw,80px)] items-stretch">
          
          {/* Left Column: Full height clean image */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative w-full h-full min-h-[460px] max-lg:min-h-[300px] overflow-hidden rounded-[24px] border border-[#f1dfd1] shadow-sm group">
              <SmartImage
                src="/assests/contact.jpg"
                alt="Killis Bird UAV engineering office"
                width="760"
                height="980"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ff6b00] block mb-1">HQ LABORATORY</span>
                <p className="text-sm text-white/80">Precision engineering for mission-critical flight.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {sent ? (
              <div className="relative rounded-[22px] border border-[#f1dfd1] bg-white px-8 py-16 text-center shadow-[0_22px_48px_rgba(17,21,26,0.06)]">
                <CheckCircleIcon sx={{ fontSize: 60, color: '#ff6b00' }} />
                <h2 className="mt-5 text-[30px] font-extrabold text-[#111111]">Message Received!</h2>
                <p className="mx-auto mt-4 max-w-[430px] text-[15px] leading-[1.7] text-[#67707d]">
                  Thank you for reaching out. Our engineering team will review your request and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 inline-flex items-center justify-center bg-[#ff6b00] px-7 py-3 text-[14px] font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e85f00] rounded-[8px]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col w-full bg-white">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#ff6b00] block mb-2">
                  LET'S START WITH INTRODUCTIONS
                </span>
                <h2 className="text-[38px] font-extrabold text-[#111111] leading-tight tracking-tight mb-8">
                  Contact us
                </h2>

                <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
                  {/* First Name */}
                  <div className="relative w-full border-b border-[#d1d5db] focus-within:border-[#ff6b00] transition-colors py-2">
                    <input
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full bg-transparent text-[16px] text-[#111111] placeholder:text-[#9aa3ad] outline-none border-none py-1.5"
                    />
                    <div className="absolute right-0 bottom-2.5 w-1.5 h-1.5 bg-[#ff6b00] rounded-none" />
                  </div>

                  {/* Last Name */}
                  <div className="relative w-full border-b border-[#d1d5db] focus-within:border-[#ff6b00] transition-colors py-2">
                    <input
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full bg-transparent text-[16px] text-[#111111] placeholder:text-[#9aa3ad] outline-none border-none py-1.5"
                    />
                    <div className="absolute right-0 bottom-2.5 w-1.5 h-1.5 bg-[#ff6b00] rounded-none" />
                  </div>

                  {/* Phone Number with custom flag block */}
                  <div className="relative w-full border-b border-[#d1d5db] focus-within:border-[#ff6b00] transition-colors py-2 flex items-center">
                    <div className="flex items-center gap-1 text-[15px] font-bold text-[#111111] pr-3 select-none">
                      <span>🇮🇳</span>
                      <span>+91</span>
                      <svg className="w-2.5 h-2.5 text-[#67707d] ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone No."
                      className="flex-1 bg-transparent text-[16px] text-[#111111] placeholder:text-[#9aa3ad] outline-none border-none py-1.5"
                    />
                    <div className="absolute right-0 bottom-2.5 w-1.5 h-1.5 bg-[#ff6b00] rounded-none" />
                  </div>

                  {/* Work Email */}
                  <div className="relative w-full border-b border-[#d1d5db] focus-within:border-[#ff6b00] transition-colors py-2">
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Work Email"
                      className="w-full bg-transparent text-[16px] text-[#111111] placeholder:text-[#9aa3ad] outline-none border-none py-1.5"
                    />
                    <div className="absolute right-0 bottom-2.5 w-1.5 h-1.5 bg-[#ff6b00] rounded-none" />
                  </div>
                </div>

                {/* Company Name */}
                <div className="relative w-full border-b border-[#d1d5db] focus-within:border-[#ff6b00] transition-colors py-2 mt-4">
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full bg-transparent text-[16px] text-[#111111] placeholder:text-[#9aa3ad] outline-none border-none py-1.5"
                  />
                  <div className="absolute right-0 bottom-2.5 w-1.5 h-1.5 bg-[#ff6b00] rounded-none" />
                </div>

                <div className="grid gap-x-6 gap-y-4 md:grid-cols-2 mt-4">
                  {/* Select Application Type */}
                  <div className="relative w-full border-b border-[#d1d5db] focus-within:border-[#ff6b00] transition-colors py-2">
                    <select
                      name="applicationType"
                      required
                      value={form.applicationType}
                      onChange={handleChange}
                      className="w-full bg-transparent text-[16px] text-[#111111] placeholder:text-[#9aa3ad] outline-none border-none py-1.5 appearance-none pr-8 cursor-pointer"
                    >
                      <option value="" disabled hidden>Select Application Type</option>
                      <option value="Propulsion System">Propulsion System</option>
                      <option value="Airframe">Airframe</option>
                      <option value="Avionics">Avionics</option>
                      <option value="Custom UAV Development">Custom UAV Development</option>
                      <option value="Other">Other Enquiry</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#67707d] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    <div className="absolute right-0 bottom-2.5 w-1.5 h-1.5 bg-[#ff6b00] rounded-none" />
                  </div>

                  {/* Select Project Stage */}
                  <div className="relative w-full border-b border-[#d1d5db] focus-within:border-[#ff6b00] transition-colors py-2">
                    <select
                      name="projectStage"
                      required
                      value={form.projectStage}
                      onChange={handleChange}
                      className="w-full bg-transparent text-[16px] text-[#111111] placeholder:text-[#9aa3ad] outline-none border-none py-1.5 appearance-none pr-8 cursor-pointer"
                    >
                      <option value="" disabled hidden>Select Project Stage</option>
                      <option value="Concept / Research">Concept / Research</option>
                      <option value="Prototyping">Prototyping</option>
                      <option value="Production Scaling">Production Scaling</option>
                      <option value="Active Mission Operations">Active Mission Operations</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#67707d] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    <div className="absolute right-0 bottom-2.5 w-1.5 h-1.5 bg-[#ff6b00] rounded-none" />
                  </div>
                </div>

                {/* Message / Tell us about your project */}
                <div className="relative w-full border-b border-[#d1d5db] focus-within:border-[#ff6b00] transition-colors py-2 mt-4">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or enquiry..."
                    className="w-full bg-transparent text-[16px] text-[#111111] placeholder:text-[#9aa3ad] outline-none border-none py-1.5 resize-none"
                  />
                  <div className="absolute right-0 bottom-3 w-1.5 h-1.5 bg-[#ff6b00] rounded-none" />
                </div>

                {/* Submit button */}
                <div className="mt-8 flex justify-start">
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#ff6b00] px-10 py-4 text-[14px] font-extrabold text-white tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e85f00] rounded-[8px] shadow-sm shadow-[#ff6b00]/10"
                  >
                    Send Message <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Office & HQ contact detail cards below split form */}
      <section className="bg-white border-t border-[#f1dfd1] py-[64px] max-sm:py-[44px]">
        <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Headquarters details */}
            <article className="border-r border-[#f1dfd1] last:border-r-0 pr-6 max-md:border-r-0 max-md:border-b max-md:pb-8 max-md:pr-0">
              <div className="flex items-center gap-3 text-[#ff6b00] mb-4">
                <LocationOnIcon sx={{ fontSize: 24 }} />
                <h3 className="text-[18px] font-extrabold text-[#111111]">Headquarters</h3>
              </div>
              <div className="text-[15px] leading-[1.75] text-[#67707d] space-y-1">
                <p className="font-extrabold text-[#111111]">Killis Bird Technologies Pvt. Ltd.</p>
                <p>Plot No.107, Pollupalli SIDCO Industrial Estate,</p>
                <p>Near Government Medical College, Gangasandiram,</p>
                <p>Billanakuppam Post, Krishnagiri District – 635115</p>
                <p>Tamil Nadu, India</p>
              </div>
            </article>

            {/* Email & Phone details */}
            <article className="border-r border-[#f1dfd1] last:border-r-0 px-6 max-md:border-r-0 max-md:border-b max-md:px-0 max-md:py-8">
              <div className="flex items-center gap-3 text-[#ff6b00] mb-4">
                <PhoneIcon sx={{ fontSize: 22 }} />
                <h3 className="text-[18px] font-extrabold text-[#111111]">Direct Contact</h3>
              </div>
              <div className="text-[15px] leading-[1.75] text-[#67707d] space-y-3">
                <div>
                  <small className="block text-[10px] uppercase tracking-wider text-[#9aa3ad]">CALL US</small>
                  <a href="tel:+918015122126" className="block text-[16px] font-bold text-[#111111] hover:text-[#ff6b00] transition-colors mt-0.5">
                    +91 80151 22126
                  </a>
                </div>
                <div>
                  <small className="block text-[10px] uppercase tracking-wider text-[#9aa3ad]">EMAIL US</small>
                  <a href="mailto:info@killisbird.com" className="block font-medium hover:text-[#ff6b00] transition-colors mt-0.5">
                    info@killisbird.com
                  </a>
                  <a href="mailto:sales@killisbird.com" className="block font-medium hover:text-[#ff6b00] transition-colors">
                    sales@killisbird.com
                  </a>
                </div>
              </div>
            </article>

            {/* Hours & Socials details */}
            <article className="pl-6 max-md:pl-0 max-md:pt-8">
              <div className="flex items-center gap-3 text-[#ff6b00] mb-4">
                <AccessTimeIcon sx={{ fontSize: 22 }} />
                <h3 className="text-[18px] font-extrabold text-[#111111]">Business Hours</h3>
              </div>
              <div className="text-[15px] leading-[1.75] text-[#67707d] space-y-4">
                <div>
                  <p className="font-semibold text-[#111111]">Monday – Friday</p>
                  <p className="mt-0.5">9:00 AM – 6:00 PM IST</p>
                </div>
                <div className="flex gap-3 pt-2">
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
                      className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-[#f1dfd1] bg-white text-[#67707d] transition-all duration-300 hover:border-[#ff6b00] hover:text-[#ff6b00] shadow-sm"
                    >
                      <Icon sx={{ fontSize: 20 }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
