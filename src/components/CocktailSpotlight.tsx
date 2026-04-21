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
              src="/picanate.jpg"
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

          {/* Right Column: Text & Drink Images */}
          <div className="flex flex-col justify-between space-y-10">
            <p className="font-sans text-sm md:text-base tracking-wide leading-relaxed opacity-90 text-brand-beige">
              Pull up a stool at Waikiki&apos;s breathtaking Tiki bar, a striking focal point combining captivating architecture with the artistry of our professional bartenders. The best cocktail bar in Andheri East, where signature tropical cocktails pair perfectly with bites from Chef Kai&apos;s kitchen.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Island Grog", src: "/drinks/Island Grog.jpg" },
                { name: "Zombie", src: "/drinks/Zombie.jpg" },
                { name: "Luau Punch", src: "/drinks/Luau Punch.jpg" },
                { name: "Hula Haze Negroni", src: "/drinks/Hula Haze Negroni.jpg" },
              ].map((drink, i) => (
                <motion.div
                  key={drink.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-square overflow-hidden border border-brand-beige/15 group"
                >
                  <Image
                    src={drink.src}
                    alt={drink.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="font-serif text-base italic text-white leading-tight block">{drink.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
