"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_ROWS = [
  // Row 1: 1 large + 1 portrait
  [
    { src: "/new/Waikiki_001.jpg", alt: "Waikiki main dining room — arched ceiling, best restaurant Andheri East", span: "md:col-span-8", height: "h-[280px] sm:h-[420px] md:h-[580px]", label: "The Dining Room" },
    { src: "/new/Waikiki_013.jpg", alt: "Waikiki chandelier lounge interior Mumbai", span: "md:col-span-4", height: "h-[280px] sm:h-[420px] md:h-[580px]", label: "Island Soul" },
  ],
  // Row 2: 3 equal ambiance columns
  [
    { src: "/new/Waikiki_028.jpg", alt: "Waikiki ground floor lounge bar — best bar Andheri", span: "md:col-span-4", height: "h-[220px] sm:h-[300px]", label: "The Lounge" },
    { src: "/new/Waikiki_038.jpg", alt: "Waikiki bar seating with string lights Mumbai", span: "md:col-span-4", height: "h-[220px] sm:h-[300px]", label: "The Bar" },
    { src: "/new/Waikiki_003.jpg", alt: "Waikiki tiki mask sculpture — island-inspired decor Mumbai", span: "md:col-span-4", height: "h-[220px] sm:h-[300px]", label: "The Spirit" },
  ],
  // Row 3: food & cocktails
  [
    { src: "/food/SSP-32.jpg", alt: "Waikiki shrimp fried rice — Pan-Asian cuisine Mumbai", span: "md:col-span-4", height: "h-[220px] sm:h-[300px]", label: "Pan-Asian Kitchen" },
    { src: "/food/SSP-35.jpg", alt: "Waikiki noodles — best Pan-Asian restaurant Andheri East", span: "md:col-span-4", height: "h-[220px] sm:h-[300px]", label: "Chef Kai's Craft" },
    { src: "/food/SSP-41.jpg", alt: "Waikiki vegetable stir-fry bowl — Polynesian cuisine Mumbai", span: "md:col-span-4", height: "h-[220px] sm:h-[300px]", label: "Seasonal Flavours" },
  ],
];

export default function AtmosphereGallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-beige border-t border-brand-maroon/20">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-brand-magenta" />
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-magenta">The Atmosphere</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tighter leading-[0.85]">
              The <span className="italic text-brand-magenta">Vibe</span>
            </h2>
          </div>
          <div className="space-y-3 max-w-xs">
            <p className="font-sans text-sm tracking-wide text-brand-maroon/55 leading-relaxed">
              From the high-energy lounge to the island-inspired rooftop, Waikiki is Mumbai&apos;s ultimate tropical escape.
            </p>
            <a
              href="tel:+918150000345"
              className="inline-flex items-center gap-3 bg-brand-maroon text-brand-beige px-6 py-3 font-sans text-[10px] uppercase tracking-[0.4em] hover:bg-brand-magenta transition-all duration-500 group"
            >
              Book a Table
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
            </a>
          </div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          {GALLERY_ROWS[0].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: i === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className={`${img.span} relative ${img.height} overflow-hidden border border-brand-maroon/15 group`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/50 via-transparent to-transparent" />
              <div className="absolute inset-[8px] border border-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/50 block mb-1">Waikiki</span>
                <span className="font-serif text-lg sm:text-2xl italic text-white">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rows 2 & 3 */}
        {[GALLERY_ROWS[1], GALLERY_ROWS[2]].map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-12 gap-3 sm:gap-4">
            {row.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className={`${img.span} relative ${img.height} overflow-hidden border border-brand-maroon/15 group`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <span className="font-serif text-base sm:text-xl italic text-white">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ))}

      </div>
    </section>
  );
}
