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
            
            <p className="font-sans text-sm md:text-base text-brand-maroon/70 leading-relaxed tracking-wide max-w-sm">
              Chef Kai&apos;s creations capture the essence of his Hawaiian homeland. Each dish is crafted with seasonal ingredients and vibrant spices, from freshly grilled meats and tropical sushi to raw seafood. A dining journey for those seeking the best restaurant in Andheri for an unforgettable taste of the North Pacific Ocean.
            </p>

            <div className="pt-8 border-t border-brand-maroon/20">
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="font-serif text-2xl group-hover:text-brand-magenta transition-colors italic">Explore Menu</span>
                <span className="text-brand-maroon">→</span>
              </div>
            </div>
          </div>


          {/* Image Content */}
          <div className="md:col-span-7 order-1 md:order-2 space-y-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] border border-brand-maroon/15 shadow-2xl overflow-hidden group"
            >
              <Image
                src="/food/SSP-01.jpg"
                alt="Waikiki Pan-Asian spread — sushi, poke and tiki cocktails, best restaurant Andheri East"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-[8px] border border-white/10 pointer-events-none" />
              <div className="absolute bottom-5 left-5 space-y-1">
                <span className="block font-sans text-[9px] uppercase tracking-[0.4em] text-white/50">Chef Kai</span>
                <span className="block font-serif text-xl italic text-white">The Signature Spread</span>
              </div>
            </motion.div>

            {/* Two small food shots */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: "/food/SSP-08.jpg", label: "Signature Sushi" },
                { src: "/food/SSP-41.jpg", label: "Pan-Asian Bowl" },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative h-36 sm:h-44 overflow-hidden border border-brand-maroon/15 group"
                >
                  <Image
                    src={img.src}
                    alt={`Waikiki ${img.label} — best Pan-Asian food Mumbai`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 font-serif text-sm italic text-white">{img.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
