"use client";

import { motion } from "framer-motion";

export default function FloatingSocials() {
  const actions = [
    {
      id: "whatsapp",
      icon: <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://wa.me/918150000345",
      label: "WhatsApp",
      highlight: false,
    },
    {
      id: "instagram",
      icon: <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://www.instagram.com/waikiki.mumbai/",
      label: "Instagram",
      highlight: false,
    },
    {
      id: "reservation",
      icon: <ClocheIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "/book-a-table",
      label: "Book Table",
      highlight: true,
    },
  ];

  return (
    <div className="fixed right-4 sm:right-6 bottom-36 sm:bottom-40 z-[100] flex flex-col gap-4 pointer-events-none">
      {actions.map((action, index) => (
        <motion.a
          key={action.id}
          href={action.href}
          target={action.id !== "reservation" ? "_blank" : undefined}
          rel={action.id !== "reservation" ? "noopener noreferrer" : undefined}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            delay: 1 + index * 0.15, 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="pointer-events-auto group relative"
        >
          {/* Floating Label / Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none">
            <div className="bg-brand-maroon/95 backdrop-blur-xl border border-brand-beige/20 px-4 py-2 rounded-sm transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-2xl">
              <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-beige whitespace-nowrap block">
                {action.label}
              </span>
            </div>
          </div>

          {/* Icon Container - Premium Brand Design */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-700 relative overflow-hidden bg-brand-maroon text-brand-beige shadow-[0_15px_45px_rgba(81,9,9,0.35)] group-hover:shadow-[0_20px_55px_rgba(81,9,9,0.5)] group-hover:scale-110 border border-brand-beige/20">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-40" />
            
            {/* Shimmer Effect on Hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-beige/10 to-transparent -translate-x-full"
              whileHover={{ x: '200%' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Icon */}
            <div className="relative z-10 transition-all duration-700 group-hover:scale-110">
              {action.icon}
            </div>

            {/* Inner Ring Glow */}
            <div className="absolute inset-0 rounded-full border border-brand-beige/5 group-hover:border-brand-beige/20 transition-colors duration-700" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}

function WhatsAppIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function ClocheIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 18h18" />
      <path d="M5 18a7 7 0 0 1 14 0" />
      <path d="M12 8v2" />
      <circle cx="12" cy="7" r="1" />
      <circle cx="18" cy="13" r="4" fill="currentColor" fillOpacity="0.2" />
      <path d="M18 11v4M16 13h4" strokeWidth="2" />
    </svg>
  );
}
