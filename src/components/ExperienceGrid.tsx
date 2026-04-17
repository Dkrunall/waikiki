"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EXPERIENCES = [
  {
    title: "Culinary Mastery",
    subtitle: "Pan-Asian Excellence",
    image: "/gallery/sushi-platter.jpg",
    description: "An artful journey through the finest flavors of Asia, reimagined for the Mumbai palate."
  },
  {
    title: "The Vibe",
    subtitle: "Nightlife & Energy",
    image: "/gallery/nightlife-crowd.jpg",
    description: "The jungle comes alive as the sun goes down, featuring world-class DJs and tribal beats."
  },
  {
    title: "The Grill",
    subtitle: "Flame & Flavor",
    image: "/gallery/lamb-chops.jpg",
    description: "Mediterranean-inspired grills prepared over open flame for deep, smoky satisfaction."
  }
];

export default function ExperienceGrid() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-brand-maroon/20">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tighter leading-[0.8] uppercase">
              OUR <br /> <span className="italic text-brand-magenta">ESSENCE</span>
            </h2>
            <div className="max-w-xs font-sans text-xs uppercase tracking-[0.4em] leading-relaxed text-brand-maroon/60">
              Crafted for the bold. Designed for the curious. Waikiki is more than a bar; it's an escape.
            </div>
          </div>
          
          {/* Header Image Anchor - desktop only */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden lg:block w-80 xl:w-96 h-48 sm:h-56 rounded-3xl overflow-hidden border border-brand-maroon/10 shadow-2xl relative flex-shrink-0"
          >
             <Image 
               src="/gallery/tropical-detail.jpg" 
               alt="Waikiki Essence" 
               fill
               className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-brand-maroon/5 mix-blend-multiply" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-brand-maroon/20">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 sm:p-8 lg:p-10 border-r border-b border-brand-maroon/20 group hover:bg-brand-maroon transition-colors duration-500 overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-magenta mb-6 sm:mb-8 block group-hover:text-brand-beige">
                  {exp.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:text-brand-beige uppercase tracking-tighter">
                  {exp.title}
                </h3>
                <p className="font-sans text-xs text-brand-maroon/70 group-hover:text-brand-beige/80 leading-relaxed uppercase tracking-widest mb-8 sm:mb-10">
                  {exp.description}
                </p>
                
                {/* Authentic Imagery */}
                <div className="mt-auto relative h-48 sm:h-56 lg:h-64 w-full rounded-2xl overflow-hidden border border-brand-maroon/10 group-hover:border-white/20 shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                   <img 
                     src={exp.image} 
                     alt={exp.title} 
                     className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-brand-maroon/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
