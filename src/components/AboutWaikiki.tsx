"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const STATS = [
  { stat: "2024", label: "Established" },
  { stat: "4", label: "Distinct Spaces" },
  { stat: "Tue–Sun", label: "Open Nightly" },
];

export default function AboutWaikiki() {
  return (
    <section id="about" className="relative bg-brand-maroon text-brand-beige overflow-hidden">

      {/* Decorative background tiki pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image src="/tiki-pattern-light.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-28">

        {/* Top label row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 sm:mb-16"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-magenta">Our Story</span>
          <div className="flex-1 h-px bg-brand-beige/10" />
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/30">Est. 2024 — Peninsula Hospitality Group</span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Image stack */}
          <div className="lg:col-span-5 order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden border border-brand-beige/10">
                <Image
                  src="/new/Waikiki_013.jpg"
                  alt="Waikiki interior — chandelier lounge, best restaurant Andheri East Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 via-transparent to-transparent" />
                {/* Inner frame */}
                <div className="absolute inset-[10px] border border-brand-beige/10 pointer-events-none" />
                {/* Bottom caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-px w-8 bg-brand-magenta mb-3" />
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/50 mb-1">Mumbai, India</p>
                  <p className="font-serif text-xl italic text-white">Hawaii in the heart of the city.</p>
                </div>
              </div>

              {/* Floating accent image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 w-28 h-36 sm:w-36 sm:h-44 overflow-hidden border-2 border-brand-maroon shadow-2xl"
              >
                <Image
                  src="/new/Waikiki_040.jpg"
                  alt="Waikiki tropical interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-brand-maroon/80 px-3 py-2 text-center">
                  <span className="font-serif text-lg italic text-white leading-none">6 PM</span>
                  <span className="block font-sans text-[8px] uppercase tracking-[0.3em] text-white/50">Opens Nightly</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Text content */}
          <div className="lg:col-span-7 order-2 pt-0 lg:pt-4 space-y-8 sm:space-y-10">

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.88] tracking-tighter"
            >
              A Venue Like
              <br />
              <span className="italic text-brand-magenta">No Other</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="space-y-5"
            >
              <p className="font-sans text-sm sm:text-base text-brand-beige/70 leading-relaxed tracking-wide">
                Welcome to Waikiki, a venue like no other among the best restaurants in Andheri. Established in 2024 by Peninsula Hospitality Group, Waikiki offers a truly immersive, island-inspired experience in the heart of Mumbai, blending Hawaii&apos;s stunning landscapes with a vibrant cocktail journey.
              </p>

              {/* Pull-quote accent */}
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-magenta flex-shrink-0" />
                <p className="font-serif text-base sm:text-lg italic text-brand-beige/60 leading-relaxed">
                  Drawing inspiration from Waikiki&apos;s lush jungles and serene vistas, celebrating two distinct ambiances that reflect the beauty and spirit of the Hawaiian islands.
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-beige/70 leading-relaxed tracking-wide">
                Our menu unites the finest elements of Hawaiian and Polynesian cuisine with influences from the diverse Asian and Mediterranean communities that shape Hawaii&apos;s culinary scene.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
              className="grid grid-cols-3 divide-x divide-brand-beige/10 border border-brand-beige/10"
            >
              {STATS.map((item) => (
                <div key={item.label} className="px-5 py-4 sm:px-6 sm:py-5 space-y-1">
                  <span className="block font-serif text-2xl sm:text-3xl italic text-brand-magenta">{item.stat}</span>
                  <span className="block font-sans text-[9px] uppercase tracking-[0.4em] text-brand-beige/35">{item.label}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
