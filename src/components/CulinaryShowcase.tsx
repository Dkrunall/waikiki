"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CulinaryShowcase() {
  return (
    <section id="menu" className="py-24 px-6 bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="md:col-span-5 space-y-8 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-xs uppercase tracking-[0.4em] text-brand-magenta mb-4 block">
                The Culinary Journey
              </span>
              <h2 className="font-serif text-5xl md:text-7xl leading-tight tracking-tighter text-brand-maroon">
                PAN-ASIAN <br />
                <span className="italic text-brand-magenta">& POLYNESIAN</span>
              </h2>
            </motion.div>
            
            <p className="font-sans text-sm md:text-base text-brand-maroon/70 leading-relaxed uppercase tracking-wider max-w-sm">
              Our menu blends Hawaiian traditions with Asian and Mediterranean influences. 
              From freshly grilled meats to exotic sushi and raw seafood masterpieces.
            </p>

            <div className="pt-8 border-t border-brand-maroon/20">
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="font-serif text-2xl group-hover:text-brand-magenta transition-colors italic">Explore Menu</span>
                <span className="text-brand-maroon">→</span>
              </div>
            </div>
          </div>


          {/* Image Content */}
          <div className="md:col-span-7 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] md:aspect-square border-[12px] border-white shadow-2xl overflow-hidden"
            >
              <Image 
                src="/images/sushi.jpg" 
                alt="Waikiki Sushi Platter" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-brand-red text-white py-2 px-6 font-sans text-[10px] uppercase tracking-widest">
                Signature Platter
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
