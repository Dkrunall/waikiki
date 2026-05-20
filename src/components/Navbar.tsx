"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Transform values for scroll-driven animations
  const navPadding = useTransform(scrollY, [0, 50], ["24px", "12px"]);
  const navWidth = useTransform(scrollY, [0, 50], ["100%", "90%"]);
  const navBg = useTransform(scrollY, [0, 50], ["rgba(249, 248, 243, 0)", "rgba(249, 248, 243, 0.8)"]);
  const shadow = useTransform(scrollY, [0, 50], ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 30px rgba(0,0,0,0.1)"]);
  const blur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <motion.nav
        style={{
          width: navWidth,
          paddingLeft: navPadding,
          paddingRight: navPadding,
          backgroundColor: navBg,
          boxShadow: shadow,
          backdropFilter: blur,
        }}
        className="pointer-events-auto rounded-full border border-brand-green/10 flex justify-between items-center max-w-7xl px-8 py-4 transition-all duration-300"
      >
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-brand-green/20">
              <Image
                src="/waikiki.jpg"
                alt="Waikiki Logo"
                fill
                className="object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tighter text-brand-maroon">
              WAIKIKI
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {[
            { name: "Experience", href: "#experience" },
            { name: "Menu", href: "#menu" },
            { name: "Gallery", href: "#gallery" },
            { name: "Location", href: "#location" }
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative font-sans text-xs uppercase tracking-[0.2em] text-brand-maroon/70 hover:text-brand-magenta transition-colors py-2"
              whileHover={{ y: -2 }}
            >
              {item.name}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-magenta origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.a>
          ))}

          <button className="bg-brand-magenta text-white font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-brand-maroon transition-colors">
            Book Now
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-maroon">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-20 left-4 right-4 bg-brand-beige p-8 rounded-3xl border border-brand-maroon/10 shadow-2xl flex flex-col space-y-6 md:hidden"
          >
            {["Experience", "Menu", "Gallery", "Location"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-serif text-3xl text-brand-maroon border-b border-brand-maroon/5 pb-4"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-brand-magenta text-white font-sans text-xs uppercase tracking-[0.3em] py-4 rounded-2xl">
              Book Table
            </button>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
}


