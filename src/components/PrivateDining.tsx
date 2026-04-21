"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const OFFERINGS = [
  {
    label: "01",
    title: "Private Events & Celebrations",
    description:
      "Bespoke private gatherings in our first-floor dining room, complete with air conditioning and lush tropical views. Ideal for corporate dinners, birthdays and milestone celebrations in Mumbai.",
  },
  {
    label: "02",
    title: "Intimate Dining",
    description:
      "A refined formal setting where Chef Kai's finest Pan-Asian and Polynesian creations take centre stage. Serene, personal and unlike any other dining experience in Andheri East.",
  },
  {
    label: "03",
    title: "Cigar & Relaxation",
    description:
      "Whether a casual dinner, a handcrafted tiki cocktail or a fine cigar on the rooftop, Waikiki is the perfect blend of relaxation and sophistication for every occasion.",
  },
];

export default function PrivateDining() {
  return (
    <section id="private-dining" className="py-16 sm:py-28 px-4 sm:px-6 bg-brand-beige border-t border-brand-maroon/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Text content */}
          <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-brand-magenta" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-magenta">
                  Private & Exclusive
                </span>
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.88] tracking-tighter uppercase">
                Every Occasion <br />
                <span className="italic text-brand-magenta">Elevated</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed tracking-wide max-w-md"
            >
              Waikiki is the best restaurant in Andheri for those seeking the perfect blend of relaxation and sophistication. Our spaces are built for every kind of occasion, curated with the spirit of Aloha.
            </motion.p>

            {/* Offerings list */}
            <div className="space-y-0">
              {OFFERINGS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="group flex gap-6 sm:gap-8 py-6 sm:py-7 border-b border-brand-maroon/12 cursor-default"
                >
                  {/* Number */}
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-maroon/25 group-hover:text-brand-magenta transition-colors duration-400 flex-shrink-0 pt-1">
                    {item.label}
                  </span>

                  <div className="space-y-2 flex-1">
                    {/* Expanding accent line */}
                    <div className="h-px w-0 bg-brand-magenta group-hover:w-8 transition-all duration-500 mb-3" />
                    <h3 className="font-serif text-xl sm:text-2xl tracking-tighter text-brand-maroon group-hover:text-brand-maroon transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-maroon/55 leading-relaxed tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="mailto:mumbaiwaikiki@gmail.com"
                className="inline-flex items-center gap-4 bg-brand-maroon text-brand-beige px-8 py-4 font-sans text-[10px] uppercase tracking-[0.45em] hover:bg-brand-magenta transition-all duration-500 group"
              >
                Enquire About Events
                <span className="font-sans text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
              </a>
            </motion.div>

          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 order-1 lg:order-2 relative"
          >
            {/* Main image */}
            <div className="relative h-[380px] sm:h-[520px] lg:h-[680px] overflow-hidden border border-brand-maroon/15 shadow-2xl">
              <Image
                src="/pdr.jpg"
                alt="Waikiki Private Dining and Events Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/65 via-transparent to-transparent" />
              {/* Inner frame */}
              <div className="absolute inset-[10px] border border-white/10 pointer-events-none" />

              {/* Caption */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-px w-6 bg-brand-magenta mb-4" />
                <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/50 mb-1">Available for</p>
                <p className="font-serif text-2xl sm:text-3xl italic text-white leading-snug">
                  Private Events &amp;<br />Intimate Dining
                </p>
              </div>
            </div>

            {/* Floating info chip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-5 -left-4 sm:-left-6 bg-brand-maroon text-brand-beige px-5 py-4 shadow-2xl"
            >
              <span className="block font-sans text-[9px] uppercase tracking-[0.4em] text-brand-beige/40 mb-1">Contact</span>
              <span className="block font-serif text-sm italic text-brand-beige/90">mumbaiwaikiki@gmail.com</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
