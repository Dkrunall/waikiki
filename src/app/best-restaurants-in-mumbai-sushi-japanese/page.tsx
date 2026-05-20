"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MapPin, Clock, Utensils, Wine, Star, Music, Users } from "lucide-react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyActions from "@/components/StickyActions";
import Marquee from "@/components/Marquee";

const WHAT_DEFINES = [
  "Premium ambiance",
  "International cuisine",
  "Signature cocktails",
  "Sushi & Japanese menu",
  "Late-night dining",
  "Rooftop seating",
  "Private event spaces",
  "DJ nightlife",
];

const SUSHI_FEATURES = [
  { icon: <Utensils className="w-5 h-5" />, title: "Fresh Ingredients", body: "Top sushi restaurants source premium, fresh ingredients to craft authentic rolls, nigiri and sashimi." },
  { icon: <Star className="w-5 h-5" />, title: "Creative Rolls", body: "Signature fusion rolls that blend Japanese technique with local and Polynesian flavour profiles." },
  { icon: <Wine className="w-5 h-5" />, title: "Pairing Cocktails", body: "Handcrafted cocktails designed to complement sushi and Japanese small plates." },
  { icon: <Music className="w-5 h-5" />, title: "Music & Nightlife", body: "DJ nights and late-night service elevate sushi dining into a full nightlife experience." },
  { icon: <Users className="w-5 h-5" />, title: "Modern Ambiance", body: "Minimalist or themed interiors that enhance presentation and create immersive environments." },
  { icon: <MapPin className="w-5 h-5" />, title: "Fusion Flavors", body: "Blending Japanese tradition with Pan-Asian and tropical influences for unique taste experiences." },
];

const OCCASIONS = [
  { num: "01", title: "Date Nights", body: "Romantic lighting, curated sushi menus and cocktail pairings make Mumbai's top restaurants perfect for date nights." },
  { num: "02", title: "Corporate Dinners", body: "Premium venues with Japanese cuisine and private spaces are ideal for client meetings and team dinners." },
  { num: "03", title: "Birthday Celebrations", body: "DJ nights and private dining spaces make sushi restaurants a popular party destination." },
  { num: "04", title: "Weekend Nightlife", body: "Combine sushi, cocktails and DJ nights for the perfect Mumbai weekend experience." },
  { num: "05", title: "Private Parties", body: "Exclusive spaces with curated menus and signature drinks for intimate gatherings." },
  { num: "06", title: "Late Night Dining", body: "Many venues remain open late, making them ideal after-work and late-night hangouts." },
];

const TRENDS = [
  "Tropical Themed Restaurants",
  "Cocktail Driven Menus",
  "Pan Asian Cuisine",
  "Rooftop Lounges",
  "Late Night DJ Venues",
  "Private Dining Spaces",
];

const WHY_SUSHI = [
  "Light yet flavorful cuisine",
  "Premium presentation",
  "Healthy options",
  "Pairing with cocktails",
  "Sharing-style dining",
  "Unique flavors",
];

const FAQS = [
  {
    q: "Which are the best restaurants in Mumbai for sushi?",
    a: "Several Pan Asian restaurants serve sushi, sashimi and Japanese dishes. Waikiki offers sushi along with cocktails and nightlife.",
  },
  {
    q: "Where can I find a Japanese restaurant in Mumbai?",
    a: "Japanese cuisine is available across Mumbai, especially in premium dining venues offering sushi and Pan Asian menus.",
  },
  {
    q: "What makes a sushi restaurant in Mumbai stand out?",
    a: "Fresh ingredients, creative rolls, ambiance, cocktails and service define the best sushi restaurants.",
  },
  {
    q: "Are there luxury dining restaurants in Mumbai?",
    a: "Yes, many restaurants offer premium ambiance, curated menus and signature cocktails for luxury dining experiences.",
  },
  {
    q: "Which restaurants in Mumbai offer sushi and nightlife?",
    a: "Restaurants that combine Pan Asian cuisine, sushi and DJ nights provide a complete experience. Waikiki is one such destination.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-maroon/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-serif text-lg sm:text-xl text-brand-maroon group-hover:text-brand-maroon/70 transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1 text-brand-maroon/40"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed pb-6">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BlogPage2() {
  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/Waikiki_028.jpg"
            alt="Best restaurants in Mumbai for sushi and Japanese cuisine — Waikiki"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon via-brand-maroon/60 to-brand-maroon/20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Guide</span>
            <div className="h-px w-8 bg-brand-beige/30" />
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Mumbai · Sushi · Japanese</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[11vw] sm:text-[7vw] lg:text-[5.5vw] leading-[0.88] tracking-tighter text-brand-beige uppercase mb-6"
          >
            Best Restaurants
            <br />
            <span className="italic text-brand-beige/70">in Mumbai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-brand-beige/60 max-w-xl leading-relaxed tracking-[0.15em]"
          >
            For Dining, Sushi &amp; Japanese Cuisine Experiences
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Sushi · Japanese Cuisine · Pan Asian · Tiki Cocktails · Rooftop Dining · Mumbai · Nightlife"
        speed={35}
      />

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main content */}
          <div className="lg:col-span-8 space-y-16 sm:space-y-20">

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="font-sans text-base sm:text-lg text-brand-maroon/70 leading-relaxed">
                Mumbai is one of India's most vibrant culinary capitals, offering everything from street food to world-class luxury dining. Among the countless options, diners are increasingly searching for the best restaurants in Mumbai that combine cuisine, ambiance and nightlife in one destination.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/60 leading-relaxed">
                  Today, guests want more than just food — they want immersive experiences, handcrafted cocktails and unforgettable nights.
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                From rooftop lounges to Japanese restaurant in Mumbai experiences and premium sushi bars, the city's dining landscape continues to evolve.
              </p>
            </motion.div>

            {/* What Defines */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 01</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                What Defines the Best
                <br />
                <span className="italic text-brand-maroon/60">Restaurants in Mumbai</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The best restaurants in Mumbai typically offer:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {WHAT_DEFINES.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-brand-beige px-5 py-5 space-y-2 group hover:bg-brand-maroon/[0.03] transition-colors"
                  >
                    <span className="block font-serif text-2xl italic text-brand-maroon/15 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="block font-sans text-xs sm:text-sm text-brand-maroon/70 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                Restaurants that combine these elements stand out in Mumbai's competitive dining scene.
              </p>
            </motion.div>

            {/* Japanese & Sushi Demand */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 02</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Growing Demand for Japanese
                <br />
                <span className="italic text-brand-maroon/60">&amp; Sushi Restaurants in Mumbai</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Japanese cuisine has become one of the fastest-growing dining trends in Mumbai. Diners now actively search for:
              </p>
              <ul className="space-y-3">
                {["Japanese restaurant in Mumbai", "Sushi restaurant Mumbai", "Pan Asian restaurant Mumbai", "Best sushi in Mumbai", "Luxury Japanese dining Mumbai"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-maroon/40" />
                    <span className="font-sans text-sm sm:text-base text-brand-maroon/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                This demand has led to restaurants offering curated sushi menus, raw bars and fusion Japanese dishes.
              </p>
            </motion.div>

            {/* Sushi Culture */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 03</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Sushi Culture
                <br />
                <span className="italic text-brand-maroon/60">in Mumbai</span>
              </h2>

              <div className="relative h-[280px] sm:h-[380px] overflow-hidden border border-brand-maroon/10">
                <Image
                  src="/new/Waikiki_038.jpg"
                  alt="Sushi experience at Waikiki Mumbai — best sushi restaurant Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/70 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                  <div className="space-y-2">
                    <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/50">Pan-Asian · Japanese</p>
                    <p className="font-serif text-2xl sm:text-3xl italic text-brand-beige leading-tight">Fresh rolls,<br />curated pairings.</p>
                  </div>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A modern sushi restaurant Mumbai experience typically includes:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Signature sushi rolls", "Nigiri & sashimi", "Poke bowls", "Asian small plates", "Craft cocktails", "Themed ambiance"].map((item) => (
                  <div key={item} className="flex items-center gap-2 border border-brand-maroon/10 px-4 py-3">
                    <span className="w-1 h-1 rounded-full bg-brand-maroon/40 flex-shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-brand-maroon/70">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                These features are now expected at the best restaurants in Mumbai.
              </p>
            </motion.div>

            {/* Unique Dining Experience */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 04</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                A Unique Dining &amp; Sushi
                <br />
                <span className="italic text-brand-maroon/60">Experience in Mumbai</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For those seeking a blend of sushi, Pan Asian cuisine and cocktails, Waikiki offers a distinctive island-inspired experience. Combining Polynesian inspiration with Japanese influences, Waikiki offers sushi, tropical cocktails and an immersive dining atmosphere.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/60 leading-relaxed">
                  Designed with multiple spaces including a lounge, restaurant and rooftop, it delivers one of Mumbai's most memorable nights.
                </p>
              </div>
            </motion.div>

            {/* What Makes Sushi Popular */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 05</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                What Makes Sushi Restaurants
                <br />
                <span className="italic text-brand-maroon/60">in Mumbai Popular</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {SUSHI_FEATURES.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-brand-beige p-6 sm:p-8 space-y-3 group hover:bg-brand-maroon/[0.03] transition-colors"
                  >
                    <div className="text-brand-maroon/40 group-hover:text-brand-maroon transition-colors">
                      {f.icon}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl">{f.title}</h3>
                    <p className="font-sans text-sm text-brand-maroon/60 leading-relaxed">{f.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Luxury Dining Trends */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 06</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Luxury Dining Trends
                <br />
                <span className="italic text-brand-maroon/60">in Mumbai</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The best restaurants in Mumbai now focus on experiential dining including:
              </p>
              <div className="flex flex-wrap gap-3">
                {TRENDS.map((t) => (
                  <span key={t} className="font-sans text-xs uppercase tracking-[0.2em] border border-brand-maroon/20 px-4 py-2 text-brand-maroon/70 hover:bg-brand-maroon hover:text-brand-beige transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                This trend reflects the city's shift toward lifestyle dining.
              </p>
            </motion.div>

            {/* Best Occasions */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 07</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Best Occasions to Visit
                <br />
                <span className="italic text-brand-maroon/60">Restaurants in Mumbai</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {OCCASIONS.map((o, i) => (
                  <motion.div
                    key={o.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-brand-beige p-6 space-y-2 group hover:bg-brand-maroon/[0.03] transition-colors"
                  >
                    <span className="block font-serif text-3xl italic text-brand-maroon/15 leading-none">{o.num}</span>
                    <h3 className="font-serif text-xl sm:text-2xl">{o.title}</h3>
                    <p className="font-sans text-sm text-brand-maroon/60 leading-relaxed">{o.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why Sushi is Trending */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 08</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Why Sushi &amp; Japanese Restaurants
                <br />
                <span className="italic text-brand-maroon/60">Are Trending</span>
              </h2>

              <div className="relative h-[260px] sm:h-[360px] overflow-hidden border border-brand-maroon/10">
                <Image
                  src="/new/Waikiki_040.jpg"
                  alt="Japanese dining trends Mumbai — Waikiki sushi restaurant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                  <p className="font-serif text-xl sm:text-2xl italic text-brand-beige leading-tight">Flavour meets<br />culture.</p>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHY_SUSHI.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-maroon/40" />
                    <span className="font-sans text-sm sm:text-base text-brand-maroon/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                These factors make Japanese cuisine highly popular among Mumbai diners.
              </p>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">FAQs</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Frequently Asked
                <br />
                <span className="italic text-brand-maroon/60">Questions</span>
              </h2>
              <div className="border-t border-brand-maroon/10">
                {FAQS.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-brand-maroon text-brand-beige overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <Image src="/tiki-pattern-light.png" alt="" fill className="object-cover" />
                </div>
                <div className="relative p-7 sm:p-8 space-y-6">
                  <div className="relative w-28 h-12">
                    <Image
                      src="/waikiki.png"
                      alt="Waikiki logo"
                      fill
                      className="object-contain object-left brightness-0 invert"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/50">
                      Experience One of the Best
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight">
                      Sushi &amp;<br />
                      <span className="italic text-brand-beige/70">Pan Asian</span>
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-beige/60 leading-relaxed">
                    From sushi and Pan Asian cuisine to signature cocktails and DJ nights, Waikiki delivers a complete dining and nightlife experience in Mumbai.
                  </p>
                  <div className="h-px bg-brand-beige/10" />
                  <div className="space-y-3">
                    <a
                      href="tel:+918150000345"
                      className="flex items-center justify-between group w-full bg-brand-beige text-brand-maroon px-5 py-3.5 hover:bg-white transition-colors"
                    >
                      <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold">Book a Table</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a
                      href="https://share.google/e3c0MaDRDKot85D9s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group w-full border border-brand-beige/20 text-brand-beige px-5 py-3.5 hover:border-brand-beige/40 transition-colors"
                    >
                      <span className="font-sans text-xs uppercase tracking-[0.2em]">View Reviews</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="flex items-center gap-2 text-brand-beige/40">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-sans text-[10px] uppercase tracking-widest">Tue–Sun · 6 PM – 3 AM</span>
                    </div>
                    <div className="flex items-start gap-2 text-brand-beige/40">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-[10px] uppercase tracking-widest leading-relaxed">Hotel Peninsula Grand, Saki Naka, Andheri East</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative h-60 overflow-hidden border border-brand-maroon/10 group"
              >
                <Image
                  src="/new/Waikiki_012.jpg"
                  alt="Waikiki dining — best Japanese sushi restaurant Mumbai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-lg italic text-brand-beige">Island-Inspired Dining</p>
                </div>
              </motion.div>

              {/* Quick facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="border border-brand-maroon/10 divide-y divide-brand-maroon/10"
              >
                <div className="px-5 py-3">
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/40">Quick Facts</p>
                </div>
                {[
                  ["Cuisine", "Sushi · Japanese · Pan-Asian"],
                  ["Bar", "Tiki Cocktails · Craft Mixology"],
                  ["Spaces", "Lounge · Dining · Rooftop"],
                  ["Events", "DJ Nights · Private Dining"],
                  ["Hours", "Tue–Sun, 6 PM – 3 AM"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between px-5 py-3 gap-4">
                    <span className="font-sans text-[11px] uppercase tracking-widest text-brand-maroon/40 flex-shrink-0">{label}</span>
                    <span className="font-sans text-xs text-brand-maroon/70 text-right">{value}</span>
                  </div>
                ))}
              </motion.div>

              {/* Also read */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border border-brand-maroon/10"
              >
                <div className="px-5 py-3 border-b border-brand-maroon/10">
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/40">Also Read</p>
                </div>
                <a
                  href="/best-restaurants-in-andheri-east"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Best Restaurants in Andheri East: Where to Dine, Drink &amp; Experience Mumbai
                  </span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            </div>
          </aside>
        </div>
      </article>

      {/* ── CTA FULL-WIDTH BANNER ── */}
      <section className="relative bg-brand-maroon text-brand-beige overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
          <Image src="/tiki-pattern-light.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-beige/40">Plan Your Visit</span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tighter">
              Experience One of the
              <br />
              <span className="italic text-brand-beige/70">Best Restaurants</span>
              <br />
              in Mumbai
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-brand-beige/60 max-w-xl mx-auto leading-relaxed"
          >
            From sushi and Pan Asian cuisine to signature cocktails and DJ nights, Waikiki delivers a complete dining and nightlife experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+918150000345"
              className="group flex items-center gap-2 bg-brand-beige text-brand-maroon font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-white transition-colors"
            >
              <span>Call Now</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://share.google/e3c0MaDRDKot85D9s"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-brand-beige/30 text-brand-beige font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:border-brand-beige/60 transition-colors"
            >
              <span>View Reviews</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
