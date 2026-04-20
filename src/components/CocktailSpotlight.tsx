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
              src="/new/Waikiki_035.jpg"
              alt="Waikiki butterfly mosaic bar — best cocktail bar Andheri East Mumbai"
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
              <p className="font-sans text-sm md:text-lg tracking-wide leading-relaxed opacity-90 text-brand-beige">
                Pull up a stool at Waikiki&apos;s breathtaking Tiki bar, a striking focal point combining captivating architecture with the artistry of our professional bartenders. The best cocktail bar in Andheri East, where signature tropical cocktails pair perfectly with bites from Chef Kai&apos;s kitchen. Guest DJs set the tone each evening, making Waikiki the best bar in Mumbai for an elevated night out.
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
                src="/new/Waikiki_012.jpg"
                alt="Waikiki tiki bar interior — signature cocktails Mumbai"
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
