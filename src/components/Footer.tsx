"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-maroon text-brand-beige pt-24 pb-12 overflow-hidden">
      {/* Subtle Background Pattern - Bleeding over the top edge for immersive flow */}
      <div className="absolute -top-32 right-0 w-[60%] h-full opacity-[0.015] pointer-events-none grayscale invert">
        <Image src="/tiki-pattern-light.png" alt="" fill className="object-contain object-right-top" />
      </div>






      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 mb-16 sm:mb-24">

          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            <div className="relative w-54 sm:w-52 h-24 sm:h-20">
              <Image
                src="/waikiki.png"
                alt="Waikiki Logo"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>

            <p className="font-sans text-sm sm:text-base text-brand-beige/60 max-w-sm">
              Mumbai&apos;s best Hawaiian tiki bar &amp; restaurant — exotic sushi, Pan-Asian cuisine, Polynesian cocktails, and electrifying late-night DJ vibes in Andheri East.
            </p>

            <div className="space-y-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/50">Join the Experience</p>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 px-4 sm:px-6 py-3 sm:py-4 font-sans text-xs tracking-widest focus:outline-none focus:border-white/20 transition-colors"
                />
                <button className="bg-brand-beige text-brand-maroon px-5 sm:px-8 py-3 sm:py-4 hover:bg-white transition-all duration-500 flex items-center flex-shrink-0 gap-1 sm:gap-2">
                  <span className="font-sans text-xs tracking-widest font-bold">JOIN</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/40">Explore</p>
              <ul className="space-y-4">
                {["Experience", "Menu", "Gallery", "Events"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="font-serif text-xl hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/40">Contact</p>
              <div className="space-y-6">
                <a href="tel:+918150000345" className="group block space-y-2">
                  <div className="flex items-center text-brand-beige/60 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-sans text-[10px] uppercase tracking-widest">Call Us</span>
                  </div>
                  <p className="font-sans text-sm tracking-wide">+91 81500 00345</p>
                </a>
                <a href="mailto:mumbaiwaikiki@gmail.com" className="group block space-y-2">
                  <div className="flex items-center text-brand-beige/60 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="font-sans text-[10px] uppercase tracking-widest">Email</span>
                  </div>
                  <p className="font-sans text-sm tracking-wide">mumbaiwaikiki@gmail.com</p>
                </a>
              </div>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/40">Find Us</p>
              <div className="space-y-2">
                <div className="flex items-center text-brand-beige/60">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-sans text-[10px] uppercase tracking-widest">Location</span>
                </div>
                <p className="font-sans text-sm tracking-wide leading-relaxed">
                  Hotel Peninsula Grand,<br />
                  Saki Naka, Andheri East,<br />
                  Mumbai 400072
                </p>
                <p className="font-sans text-[10px] text-brand-beige/30 pt-2 tracking-widest">
                  TUE–SUN · 6 PM – 3 AM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Massive Brand Anchor */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex space-x-8">
            {["Instagram", "Facebook", "Twitter"].map((social) => (
              <a key={social} href="#" className="flex items-center space-x-2 text-brand-beige/40 hover:text-white transition-colors group">
                <span className="font-sans text-[10px] uppercase tracking-widest">{social}</span>
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
          <div className="text-center md:text-right">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/40">
              © {currentYear} Waikiki Experience. All Rights Reserved.
            </p>
            <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-beige/20 mt-2">
              Crafted with Aloha in Mumbai
            </p>
          </div>
        </div>


        {/* Massive Backdrop Branding - Responsive size, no cropping */}
        <div className="relative mt-12 sm:mt-20 flex justify-center pointer-events-none overflow-hidden w-full">
          <h2 className="font-serif text-[18vw] sm:text-[16vw] md:text-[14vw] leading-none text-white/[0.015] uppercase tracking-tight select-none whitespace-nowrap">
            WAIKIKI
          </h2>
        </div>


      </div>
    </footer>
  );
}

