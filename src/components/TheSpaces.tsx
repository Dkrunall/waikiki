"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SPACES = [
  {
    number: "01",
    title: "High-Energy Lounge",
    subtitle: "Best Bar in Andheri East",
    description:
      "Step into Waikiki's vibrant ground-floor lounge, a high-energy tropical sanctuary where island spirit meets Mumbai nightlife. The perfect start to your evening.",
    image: "/thebar.jpg",
    tag: "Lounge",
  },
  {
    number: "02",
    title: "The Restaurant",
    subtitle: "Best Pan-Asian Restaurant Andheri",
    description:
      "First-floor formal dining with air conditioning and lush tropical views. Chef Kai's Pan-Asian and Polynesian menu shines in this serene, beautifully designed setting.",
    image: "/lounge.jpg",
    tag: "Dining",
  },
  {
    number: "03",
    title: "Rooftop Terrace",
    subtitle: "Best Rooftop Bar in Andheri East",
    description:
      "Our expansive rooftop lounge features low island-inspired seating, handcrafted cocktails and fine cigars under the open Mumbai sky. A relaxed escape above the city.",
    image: "/new/Waikiki_005.jpg",
    tag: "Rooftop",
  },
  {
    number: "04",
    title: "Private Events",
    subtitle: "Private Venue Mumbai",
    description:
      "From intimate celebrations to corporate gatherings, our dedicated private spaces offer bespoke menus, personalised service and a tropical ambiance unlike anywhere else in Mumbai.",
    image: "/pdr.jpg",
    tag: "Events",
  },
];

export default function TheSpaces() {
  return (
    <section id="spaces" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-brand-maroon/20 bg-brand-beige">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 lg:gap-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-brand-magenta" />
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-magenta">The Venue</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tighter leading-[0.85] uppercase">
              Four <br />
              <span className="italic text-brand-magenta">Distinct Spaces</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-sm tracking-wide text-brand-maroon/55 leading-relaxed max-w-sm">
              Open from early dinner through late night, each space at Waikiki offers a different facet of the Hawaiian island experience.
            </p>
          </div>
        </div>

        {/* Spaces grid — 2 × 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-l border-t border-brand-maroon/20">
          {SPACES.map((space, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-r border-b border-brand-maroon/20 group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 via-brand-maroon/10 to-transparent" />
                {/* Inner frame */}
                <div className="absolute inset-[8px] border border-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number + tag — overlaid bottom-left */}
                <div className="absolute bottom-5 left-5 flex items-end gap-3">
                  <span className="font-serif text-5xl sm:text-6xl italic text-white/20 leading-none select-none">
                    {space.number}
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/50 pb-1">
                    {space.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-6 sm:p-8 group-hover:bg-brand-maroon transition-colors duration-500 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-magenta group-hover:text-brand-beige/55 block transition-colors duration-500">
                      {space.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl tracking-tighter group-hover:text-brand-beige transition-colors duration-500">
                      {space.title}
                    </h3>
                  </div>
                  {/* Arrow accent */}
                  <span className="font-sans text-brand-maroon/20 group-hover:text-brand-beige/20 transition-colors duration-500 text-lg flex-shrink-0 mt-1">
                    ↗
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm tracking-wide leading-relaxed text-brand-maroon/60 group-hover:text-brand-beige/70 transition-colors duration-500">
                  {space.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
