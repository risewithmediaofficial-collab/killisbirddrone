import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Folder from './Folder';

const quickLinks = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/918000000000?text=Hello%20Killis%20Bird%2C%20I%20want%20to%20know%20more%20about%20your%20UAV%20solutions.',
    Icon: WhatsAppIcon,
    className: 'text-[#25D366]'
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:info@killisbird.com?subject=Killis%20Bird%20Enquiry',
    Icon: EmailIcon,
    className: 'text-skyroot'
  },
  {
    id: 'call',
    label: 'Call',
    href: 'tel:+918000000000',
    Icon: CallIcon,
    className: 'text-black'
  }
];

const QuickContactBar = () => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="fixed bottom-4 right-4 z-[70] origin-bottom-right scale-[0.72] md:bottom-10 md:right-10 md:scale-100"
    >
      <Folder
        color="#f97316"
        size={1}
        className="drop-shadow-[0_22px_55px_rgba(249,115,22,0.28)]"
        items={quickLinks.map(item => (
          <a
            key={item.id}
            href={item.href}
            target={item.id === 'whatsapp' ? '_blank' : undefined}
            rel={item.id === 'whatsapp' ? 'noreferrer' : undefined}
            onClick={event => event.stopPropagation()}
            className="group flex h-full w-full flex-col items-center justify-center gap-1 border border-slate-200/80 bg-white/98 px-2 py-1.5 text-center shadow-[0_12px_28px_rgba(15,23,42,0.14)] md:gap-1.5 md:px-3 md:py-2"
          >
            <span className={`flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${item.className}`}>
              <item.Icon sx={{ fontSize: 18 }} />
            </span>
            <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-black/68 md:text-[8px] md:tracking-[0.22em]">
              {item.label}
            </span>
          </a>
        ))}
      />
      <div className="pointer-events-none mt-2 hidden text-right text-[10px] font-bold uppercase tracking-[0.24em] text-black/45 md:block">
        Quick Contact
      </div>
    </motion.div>
  );
};

export default QuickContactBar;
