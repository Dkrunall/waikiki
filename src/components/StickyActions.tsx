"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";


export default function StickyActions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[40] w-[calc(100%-2rem)] sm:w-auto pointer-events-none"
      >
        <div className="bg-brand-maroon/90 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-2 pointer-events-auto w-full">

          {/* Left icon group */}
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-brand-beige hover:bg-brand-magenta transition-colors flex-shrink-0"
            >
              <Menu size={18} />
            </button>

            <a 
              href="tel:+918828822222"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-brand-beige hover:bg-brand-magenta transition-colors flex-shrink-0"
            >
              <Phone size={16} />
            </a>
          </div>
          
          {/* Book A Table — grows to fill remaining space on mobile */}
          <button className="flex-1 sm:flex-none bg-brand-magenta text-white font-sans text-[10px] uppercase tracking-[0.2em] px-6 sm:px-10 py-4 rounded-full hover:bg-white hover:text-brand-maroon transition-all flex items-center justify-center gap-2">
            <Calendar size={13} />
            <span>Book A Table</span>
          </button>
          
          {/* Status Indicator - desktop only */}
          <div className="hidden md:flex items-center px-6 border-l border-white/10 flex-shrink-0">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-3" />
             <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-brand-beige opacity-60 whitespace-nowrap">
               The Jungle is Open
             </span>
          </div>
        </div>

      </motion.div>
    </>
  );
}

