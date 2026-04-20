"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PILLARS = [
  {
    number: "I",
    title: "Hawaii in Mumbai",
    subtitle: "Island-Inspired Experience",
    description:
      "An enchanting tropical sanctuary that transports you from Andheri East to the shores of the Hawaiian islands. Two distinct ambiances, one unforgettable escape.",
  },
  {
    number: "II",
    title: "Art & Craft",
    subtitle: "Best Pan-Asian Restaurant Mumbai",
    description:
      "Chef Kai's seasonal ingredients and vibrant spices meet the artistry of our Tiki mixologists. Every plate and every glass is a handcrafted expression of the North Pacific.",
  },
  {
    number: "III",
    title: "The Night Awakens",
    subtitle: "Best Nightlife in Andheri East",
    description:
      "As the sun sets over Mumbai, Waikiki transforms. Guest DJs, tribal beats and late-night energy make this the best bar and nightlife destination in Andheri.",
  },
];

export default function ExperienceGrid() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-brand-maroon/20 bg-brand-beige">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-brand-magenta" />
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-magenta">Why Waikiki</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tighter leading-[0.85] uppercase">
              Our <br />
              <span className="italic text-brand-magenta">Essence</span>
            </h2>
          </div>

          <div className="lg:col-span-3 hidden lg:block">
            <p className="font-sans text-sm tracking-wide leading-relaxed text-brand-maroon/55">
              Crafted for the bold. Designed for the curious. Waikiki is more than a bar; it is a complete island world built inside the heart of Mumbai.
            </p>
          </div>

          {/* Header image — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 hidden lg:block relative h-40 overflow-hidden border border-brand-maroon/15 shadow-lg"
          >
            <Image
              src="/new/Waikiki_003.jpg"
              alt="Waikiki tiki mask — island-inspired decor, Andheri East Mumbai"
              fill
              className="object-cover hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-[6px] border border-brand-maroon/10 pointer-events-none" />
          </motion.div>

          {/* Mobile description */}
          <p className="lg:hidden font-sans text-sm tracking-wide leading-relaxed text-brand-maroon/55">
            Crafted for the bold. Designed for the curious. Waikiki is more than a bar; it is a complete island world built inside the heart of Mumbai.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-l border-t border-brand-maroon/20">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border-r border-b border-brand-maroon/20 group hover:bg-brand-maroon transition-colors duration-500 overflow-hidden relative"
            >
              {/* Top accent bar */}
              <div className="h-[2px] w-0 bg-brand-magenta group-hover:w-full transition-all duration-700" />

              <div className="p-8 sm:p-10 flex flex-col gap-5">
                {/* Roman numeral watermark */}
                <span className="font-serif text-[80px] sm:text-[96px] leading-none text-brand-maroon/[0.07] group-hover:text-brand-beige/[0.07] transition-colors duration-500 select-none -mb-4">
                  {pillar.number}
                </span>

                <div className="space-y-3">
                  <span className="font-sans text-[10px] uppercase tracking-[0.45em] text-brand-magenta group-hover:text-brand-beige/55 block transition-colors duration-500">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl tracking-tighter group-hover:text-brand-beige transition-colors duration-500">
                    {pillar.title}
                  </h3>
                  <div className="h-px w-8 bg-brand-maroon/20 group-hover:bg-brand-beige/20 transition-colors duration-500" />
                  <p className="font-sans text-xs sm:text-sm text-brand-maroon/58 group-hover:text-brand-beige/68 leading-relaxed tracking-wide transition-colors duration-500">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
