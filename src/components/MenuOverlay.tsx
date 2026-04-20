"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const menuItems = [
    { name: "Experience", href: "#experience" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-brand-maroon text-brand-beige flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 sm:px-10 md:px-12 py-6 sm:py-8 border-b border-brand-beige/10 flex-shrink-0">
            <div className="relative w-36 h-14 sm:w-52 sm:h-20 md:w-64 md:h-28">
              <Image 
                src="/waikiki.png" 
                alt="Waikiki Logo" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-brand-beige/20 hover:bg-brand-magenta transition-colors flex-shrink-0"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav Links — scrollable if too tall */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-12 py-6 sm:py-8 overflow-y-auto space-y-2 sm:space-y-4">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.08 }}
                className="font-serif text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] leading-[1.05] tracking-tighter uppercase group flex items-center gap-3"
              >
                <span className="text-brand-magenta/40 font-sans text-xs sm:text-sm tabular-nums">0{i + 1}</span>
                <span className="group-hover:text-brand-magenta transition-colors duration-300">
                  {item.name}
                </span>
                <span className="italic text-brand-magenta ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[8vw] sm:text-[6vw] md:text-[5vw]">→</span>
              </motion.a>
            ))}
          </div>

          {/* Footer Info */}
          <div className="px-6 sm:px-10 md:px-12 py-5 sm:py-8 border-t border-brand-beige/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 flex-shrink-0">
             <div className="space-y-2">
               <span className="font-sans text-[9px] uppercase tracking-widest opacity-40">Location</span>
               <p className="font-sans text-[10px] sm:text-xs uppercase tracking-widest">Andheri East, Mumbai</p>
             </div>
             <div className="space-y-2">
               <span className="font-sans text-[9px] uppercase tracking-widest opacity-40">Contact</span>
               <a href="tel:+918150000345" className="font-sans text-[10px] sm:text-xs uppercase tracking-widest hover:text-brand-magenta transition-colors">+91 81500 00345</a>
             </div>
             <div className="hidden sm:block col-span-2 text-right">
               <span className="font-sans text-[9px] uppercase tracking-widest opacity-40">© 2026 Waikiki Experience</span>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
