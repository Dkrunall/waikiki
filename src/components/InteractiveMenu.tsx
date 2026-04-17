"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MENU_DATA = {
  Culinary: {
    tag: "Pan-Asian & Polynesian",
    description: "A journey through tropical flavors and Mediterranean craft.",
    image: "/illustration-sushi.png",
    items: [
      { name: "Chef's Signature Sushi", price: "₹1250", desc: "Hand-crafted with the finest catches of the day.", image: "/illustration-sushi.png" },
      { name: "Tropical Poke Bowl", price: "₹850", desc: "Fresh tuna, avocado, and house-made ponzu.", image: "/illustration-culinary.png" },
      { name: "Miso Glazed Black Cod", price: "₹1850", desc: "Slow-cooked to perfection over robata coals.", image: "/illustration-sushi.png" }
    ],
  },
  Cocktails: {
    tag: "Tiki Mixology",
    description: "Hand-crafted adventures designed to transport you to an island paradise.",
    image: "/cocktail-primary.png",
    items: [
      { name: "Shark Attack", price: "₹950", desc: "A high-energy blend in our signature shark vessel.", image: "/gallery/shark-mug.png" },
      { name: "Tiki Skully", price: "₹850", desc: "Deep jungle flavors served in an iconic skull mug.", image: "/gallery/skull-mug.png" },
      { name: "Tropical Owl", price: "₹1100", desc: "Wise flavors and exotic botanicals in handcrafted ceramic.", image: "/gallery/owl-mug.png" }
    ],
  },
  Nightlife: {
    tag: "The Jungle Vibe",
    description: "Late-night rhythms, lush jungle escapism, and the spirit of Aloha.",
    image: "/beach-captain-alt.png",
    items: [
      { name: "VIP Tables", price: "Enquire", desc: "Premium bottle service in the heart of the jungle.", image: "/beach-captain-alt.png" },
      { name: "Late Night Bites", price: "₹650+", desc: "A curated selection of midnight snacks.", image: "/brand-poster.png" }
    ],
  },
};

export default function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState<keyof typeof MENU_DATA>("Culinary");

  return (
    <section id="menu" className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-beige border-t border-brand-maroon/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 mb-12 sm:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <span className="font-sans text-xs uppercase tracking-[0.5em] text-brand-magenta">The Menu</span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tighter uppercase leading-[0.8]">
              Taste <br />
              <span className="italic text-brand-magenta">Paradise</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm uppercase tracking-widest text-brand-maroon/60 leading-relaxed max-w-md">
              A curated selection of Pan-Asian signatures and craft Tiki cocktails. 
              Designed for the adventurous palate.
            </p>
          </div>
          
          {/* Tropical Detail Image - desktop only */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative w-72 h-44 rounded-2xl overflow-hidden border border-brand-maroon/10 shadow-lg transition-all duration-700 flex-shrink-0"
          >
             <Image 
               src="/gallery/tropical-detail.jpg" 
               alt="Tropical Detail" 
               fill
               className="object-cover transform hover:scale-110 transition-transform duration-1000"
             />
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-6 sm:gap-8 mb-10 sm:mb-16 border-b border-brand-maroon/10 overflow-x-auto pb-0 scrollbar-none">
          {(Object.keys(MENU_DATA) as Array<keyof typeof MENU_DATA>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-xs uppercase tracking-[0.4em] transition-all relative py-3 sm:py-4 whitespace-nowrap flex-shrink-0 ${
                activeTab === tab ? "text-brand-magenta" : "text-brand-maroon/40"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-magenta"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Menu Items List */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="space-y-2">
                  <span className="font-sans text-xs uppercase tracking-[0.5em] text-brand-magenta">
                    {MENU_DATA[activeTab].tag}
                  </span>
                  <p className="font-sans text-sm text-brand-maroon/70 uppercase tracking-widest max-w-sm">
                    {MENU_DATA[activeTab].description}
                  </p>
                </div>

                <div className="space-y-0">
                  {MENU_DATA[activeTab].items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group border-b border-brand-maroon/10 py-4 sm:py-5 flex justify-between items-center cursor-pointer hover:border-brand-magenta transition-colors"
                    >
                      <span className="font-serif text-xl sm:text-2xl italic group-hover:text-brand-magenta transition-colors">
                        {item.name}
                      </span>
                      <span className="font-sans text-[10px] tracking-widest opacity-40 flex-shrink-0 ml-4">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Large Image Showcase */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative aspect-[4/3] w-full border border-brand-maroon/10 p-2 sm:p-4"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={MENU_DATA[activeTab].image}
                    alt={activeTab}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute top-0 right-0 p-4 sm:p-8">
                   <div className="w-8 h-8 sm:w-12 sm:h-12 border-t border-r border-brand-magenta" />
                </div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-8">
                   <div className="w-8 h-8 sm:w-12 sm:h-12 border-b border-l border-brand-magenta" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
