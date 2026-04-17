"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EVENTS = [
  { day: "FRI", date: "APR 21", title: "Jungle Rhythms", artist: "DJ KRUNAL", time: "9:00 PM" },
  { day: "SAT", date: "APR 22", title: "Island Echoes", artist: "DJ AMYSA", time: "10:00 PM" },
  { day: "SUN", date: "APR 23", title: "Aloha Sundowner", artist: "AKASH V", time: "5:00 PM" },
  { day: "WED", date: "APR 26", title: "Mid-Week Escape", artist: "RESIDENT DJ", time: "8:00 PM" },
];

export default function WeeklyBeats() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-maroon text-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Side: Header & Authentic Imagery */}
        <div className="lg:col-span-4 space-y-8 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.5em] text-brand-magenta">The Weekly Lineup</span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
              WEEKLY <br />
              <span className="italic text-brand-magenta">BEATS</span>
            </h2>
          </div>
          
          {/* Authentic Nightlife Imagery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-56 sm:h-72 lg:h-80 w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-beige/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          >
             <Image 
               src="/gallery/nightlife-crowd.jpg" 
               alt="Waikiki Nightlife" 
               fill
               className="object-cover transform hover:scale-110 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-brand-maroon/20 mix-blend-multiply" />
          </motion.div>

          <p className="font-sans text-sm uppercase tracking-widest opacity-60 leading-relaxed max-w-xs">
            Experience the heartbeat of Andheri's most exclusive tropical getaway. 
            Curated rhythms from the city's finest.
          </p>
        </div>

        {/* Right Side: Event List */}
        <div className="lg:col-span-8 space-y-0">
          {EVENTS.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group py-6 sm:py-10 border-b border-brand-beige/10 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-white/5 px-3 sm:px-4 transition-colors gap-4 sm:gap-0"
            >
              <div className="flex items-center space-x-6 sm:space-x-8">
                <div className="text-center w-12 sm:w-16">
                  <span className="block font-sans text-xs uppercase tracking-widest opacity-40">{event.day}</span>
                  <span className="block font-serif text-xl sm:text-2xl italic text-brand-magenta">{event.date.split(" ")[1]}</span>
                </div>
                <div className="h-8 sm:h-10 w-[1px] bg-brand-beige/20" />
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-tighter group-hover:text-brand-magenta transition-colors">
                    {event.title}
                  </h3>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-50">{event.artist}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 sm:space-x-12 pl-[72px] sm:pl-0">
                <span className="font-sans text-xs uppercase tracking-[0.2em]">{event.time}</span>
                <button className="border border-brand-beige/20 px-6 sm:px-8 py-2 sm:py-3 font-sans text-[10px] uppercase tracking-[0.4em] hover:bg-brand-magenta hover:border-brand-magenta transition-all">
                  Inquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
