"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const leafY1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const leafY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col px-4 sm:px-6 pt-8 pb-32 overflow-hidden hero-vignette">






      {/* Top Brand Header Frame */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 flex flex-col items-center mb-8 md:mb-12"
      >
        <div className="relative w-[220px] h-24 sm:w-[320px] sm:h-32 md:w-[480px] md:h-40 lg:w-[600px] lg:h-48">
          <Image 
            src="/primary-tiki-logo.png" 
            alt="Waikiki Logo" 
            fill 
            className="object-contain" 
            priority
          />
        </div>
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="mt-2 flex items-center space-x-4"
        >
          <div className="h-[1px] w-8 sm:w-12 bg-brand-maroon/20" />
          <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-brand-maroon/60">
            Est. 2024, Mumbai
          </span>
          <div className="h-[1px] w-8 sm:w-12 bg-brand-maroon/20" />
        </motion.div>
      </motion.div>

      {/* Main Editorial Grid */}
      <motion.div 
        style={{ y: contentY }}
        className="max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
      >
        
        {/* Left Wing - Poster & Captain Anchor - desktop only */}
        <div className="hidden lg:block lg:col-span-3 h-[500px] relative group">
          <div className="absolute inset-0 border border-brand-maroon/10 rounded-3xl overflow-hidden transition-all duration-700 shadow-2xl">
             <Image 
               src="/brand-poster.png" 
               alt="Waikiki Brand" 
               fill 
               className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-brand-maroon/10" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -right-8 -bottom-8 w-48 h-48 z-20 pointer-events-none"
          >
            <Image 
              src="/beach-captain-illustration.png" 
              alt="Beach Captain" 
              fill 
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            />
          </motion.div>
        </div>

        {/* Center Content */}
        <div className="lg:col-span-6 text-center px-2 sm:px-4 lg:px-6 space-y-6 sm:space-y-10">
          <div className="relative inline-block">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-5 sm:px-8 py-2 sm:py-3 bg-brand-maroon/5 border border-brand-maroon/10 rounded-full"
              >
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-brand-maroon font-medium">
                  Mumbai's Tropical Sanctuary
                </span>
              </motion.div>
          </div>
          
          <h1 className="font-serif text-[18vw] sm:text-[15vw] lg:text-[7.5vw] leading-[0.85] tracking-tighter uppercase text-brand-maroon flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Aloha
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="italic text-brand-magenta mt-1"
            >
              Mumbai
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-sans text-[10px] sm:text-xs md:text-sm max-w-xs sm:max-w-sm mx-auto text-brand-maroon/60 leading-relaxed tracking-[0.15em] sm:tracking-[0.2em] font-light"
          >
            Where Hawaii meets Mumbai. An island-inspired escape in Andheri East, celebrating Polynesian flavours, hand-crafted tiki cocktails, and late-night rhythms under a lush jungle canopy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-2"
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-brand-maroon/40">
              Tue – Sun &nbsp;·&nbsp; 6 PM – 3 AM
            </span>
            <span className="hidden sm:block h-3 w-px bg-brand-maroon/20" />
            <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-brand-maroon/40">
              Hotel Peninsula Grand, Andheri East
            </span>
          </motion.div>
        </div>

        {/* Right Wing - Cocktail Photography - desktop only */}
        <div className="hidden lg:block lg:col-span-3 h-[500px] relative group">
          <div className="absolute inset-0 border border-brand-maroon/10 rounded-3xl overflow-hidden flex flex-col bg-brand-maroon/[0.02] shadow-2xl transition-all duration-700 group-hover:bg-brand-maroon/[0.04]">
             <div className="relative flex-1">
                <Image 
                  src="/cocktail-primary.png" 
                  alt="Signature Cocktail" 
                  fill 
                  className="object-contain p-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-1000"
                />
             </div>
             
             <div className="p-8 pt-0 space-y-6">
                <div className="h-[1px] w-full bg-brand-maroon/10" />
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                     <p className="font-sans text-[9px] uppercase tracking-widest text-brand-maroon/40">The Jungle</p>
                     <p className="font-sans text-[10px] uppercase tracking-widest text-brand-maroon">19°07'13.7"N</p>
                  </div>
                  <div className="space-y-1 text-right">
                     <p className="font-sans text-[9px] uppercase tracking-widest text-brand-maroon/40">Spirit</p>
                     <p className="font-sans text-[10px] uppercase tracking-widest text-brand-maroon">ALOHA</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Background Decorative Margin Details */}
      <div className="absolute left-10 bottom-12 hidden xl:block opacity-30">
         <span className="vertical-text font-sans text-[9px] uppercase tracking-[1em] text-brand-maroon transform rotate-180">
            Jungle Escapism
         </span>
      </div>
      <div className="absolute right-10 bottom-12 hidden xl:block opacity-30">
         <span className="vertical-text font-sans text-[9px] uppercase tracking-[1em] text-brand-maroon">
            Tiki Culture
         </span>
      </div>
    </section>
  );
}
