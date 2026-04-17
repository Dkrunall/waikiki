"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AtmosphereGallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-beige">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tighter">
            THE <span className="italic text-brand-magenta">VIBE</span>
          </h2>
          <p className="font-sans text-xs uppercase tracking-[0.4em] max-w-xs text-brand-maroon/60">
            From the high-energy lounge to the island-inspired rooftop, Waikiki is Mumbai's ultimate tropical escape.
          </p>
        </div>

        {/* Main Gallery Grid — stacks on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 relative h-[280px] sm:h-[400px] md:h-[640px] border border-brand-maroon/20 group overflow-hidden rounded-2xl sm:rounded-none"
          >
            <Image 
              src="/gallery/venue-1.jpg" 
              alt="Waikiki Atmosphere - The Sanctuary" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 border-[1px] border-white/20 m-3 sm:m-4 pointer-events-none" />
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-white bg-black/50 px-3 py-1">
                The Sanctuary
              </span>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[200px] sm:h-[280px] md:h-[360px] border border-brand-maroon/20 overflow-hidden rounded-2xl sm:rounded-none"
            >
              <Image 
                src="/gallery/venue-2.jpg" 
                alt="Waikiki Late Night Lounge" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 font-serif text-xl sm:text-2xl text-white italic">Island Soul</div>
            </motion.div>
            
            <div className="p-6 sm:p-8 border border-brand-green bg-brand-green text-brand-beige flex flex-col justify-center items-center text-center space-y-4 sm:space-y-6 rounded-2xl sm:rounded-none">
              <div className="font-serif text-2xl sm:text-3xl italic">Experience <br /> Aloha</div>
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-70">
                Join us for weekend sessions with live DJs and exotic tropical vibes.
              </p>
              <button className="border border-brand-beige px-5 sm:px-6 py-2 font-sans text-[10px] uppercase tracking-widest hover:bg-brand-beige hover:text-brand-green transition-colors">
                Book Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
