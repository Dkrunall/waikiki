"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CocktailSpotlight() {
  return (
    <section className="py-24 px-6 bg-brand-maroon text-brand-beige">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-[0.5em] text-brand-magenta">The Tiki Bar</span>
          <h2 className="font-serif text-5xl md:text-8xl tracking-tighter uppercase">
            Signature <br />
            <span className="italic text-brand-magenta">Creations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] border border-brand-beige/20 overflow-hidden"
          >
            <Image 
              src="/images/cocktail.jpg" 
              alt="Signature Tiki Cocktail" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8 space-y-2">
              <h3 className="font-serif text-4xl italic text-brand-beige">Powhiri Picante</h3>
              <p className="font-sans text-xs uppercase tracking-widest opacity-80 text-brand-beige">Chili Infused Tequila • Hibiscus • Lime</p>
            </div>
          </motion.div>

          {/* Right Column: Text & Secondary Image */}
          <div className="flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <p className="font-sans text-sm md:text-lg uppercase tracking-widest leading-relaxed opacity-90 text-brand-beige">
                Pull up a stool at our breathtaking Tiki bar. Designed to transport you to an island paradise, 
                our cocktails are hand-crafted adventures in a glass.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Island Grog", "Zombie", "Luau Punch", "Hula Haze"].map((drink) => (
                  <div key={drink} className="border-b border-brand-beige/20 py-4 flex justify-between items-center group">
                    <span className="font-serif text-xl italic group-hover:text-brand-magenta transition-colors text-brand-beige">{drink}</span>
                    <span className="font-sans text-[10px] tracking-widest opacity-50 text-brand-beige">01</span>
                  </div>
                ))}
              </div>
            </div>


            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-64 border border-brand-beige/20 overflow-hidden"
            >
              <Image 
                src="/images/tiki-bar.png" 
                alt="Waikiki Tiki Bar" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
