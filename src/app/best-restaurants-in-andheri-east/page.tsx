"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MapPin, Star, Clock, Music, Utensils, Wine } from "lucide-react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyActions from "@/components/StickyActions";
import Marquee from "@/components/Marquee";

const FEATURES = [
  {
    icon: <Utensils className="w-5 h-5" />,
    title: "Unique Ambiance",
    body: "The top restaurants focus on immersive experiences. Tropical interiors, rooftop seating, lounge-style dining and curated lighting transform a simple dinner into a memorable night.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Global Cuisine Options",
    body: "From Pan-Asian to Mediterranean, diners want variety. Sushi, dim sum, grilled meats and fusion dishes are now must-haves.",
  },
  {
    icon: <Wine className="w-5 h-5" />,
    title: "Signature Cocktails",
    body: "Mixology has become central to the dining experience. The top restaurants in Andheri East feature handcrafted cocktails, premium spirits and themed drink menus.",
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: "Nightlife & Entertainment",
    body: "DJ nights, live music and late-night service separate standard restaurants from true nightlife destinations.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Private Event Spaces",
    body: "Many guests look for birthday party venues, corporate dining spaces and celebration restaurants in Andheri East.",
  },
];

const OCCASIONS = [
  { title: "Dinner Dates", body: "Romantic lighting, curated menus and cocktail pairings make Andheri East ideal for date nights." },
  { title: "Corporate Dinners", body: "With proximity to business hubs, restaurants here are perfect for client meetings and team dinners." },
  { title: "Birthday Celebrations", body: "Private dining spaces and DJ nights make Andheri East a popular party destination." },
  { title: "Late Night Dining", body: "Many venues remain open late, making them ideal after-work hangouts." },
  { title: "Weekend Nightlife", body: "The area transforms into one of Mumbai's most energetic nightlife zones." },
];

const TRENDS = [
  "Pan Asian Cuisine",
  "Sushi & Raw Bars",
  "Tropical Cocktails",
  "Fusion Asian Dishes",
  "Sharing Plates",
  "Late Night Bites",
  "Craft Mixology",
  "Rooftop Dining",
];

const FAQS = [
  {
    q: "What are the best restaurants in Andheri East for dinner?",
    a: "Andheri East offers several premium dining options featuring Pan Asian cuisine, sushi, cocktails and rooftop seating. Waikiki is one of the top choices for dining and nightlife.",
  },
  {
    q: "Which are the top restaurants in Andheri East for parties?",
    a: "Restaurants with DJ nights, private spaces and cocktail menus are ideal for parties. Waikiki offers multiple spaces perfect for celebrations.",
  },
  {
    q: "Are there late night restaurants in Andheri East?",
    a: "Yes, many restaurants in Andheri East offer late-night dining, cocktails and music, making it a popular nightlife destination.",
  },
  {
    q: "Which restaurants in Andheri East serve sushi?",
    a: "Several Pan Asian restaurants serve sushi, poke bowls and raw seafood, including Waikiki.",
  },
  {
    q: "What makes Andheri East a popular dining destination?",
    a: "Its proximity to the airport, premium venues, nightlife and global cuisine options make it one of Mumbai's best dining hubs.",
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
        <span className="font-serif text-lg sm:text-xl text-brand-maroon group-hover:text-brand-magenta transition-colors">
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

export default function BlogPage() {
  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/Waikiki_022.jpg"
            alt="Best restaurants in Andheri East Mumbai — Waikiki rooftop lounge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon via-brand-maroon/60 to-brand-maroon/20" />
        </div>

        {/* Grain overlay */}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Guide</span>
            <div className="h-px w-8 bg-brand-beige/30" />
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Andheri East · Mumbai</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[11vw] sm:text-[7vw] lg:text-[5.5vw] leading-[0.88] tracking-tighter text-brand-beige uppercase mb-6"
          >
            Best Restaurants
            <br />
            <span className="italic text-brand-beige/70">in Andheri East</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-brand-beige/60 max-w-xl leading-relaxed tracking-[0.15em]"
          >
            Where to Dine, Drink &amp; Experience the Best of Mumbai
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Dining · Nightlife · Sushi · Cocktails · Rooftop · Pan Asian · Tiki Bar · Andheri East"
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
                Andheri East has quickly become one of Mumbai's most exciting dining and nightlife destinations. With a growing mix of luxury dining venues, cocktail bars, rooftop lounges and Pan-Asian restaurants, the area offers something for every kind of diner.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/60 leading-relaxed">
                  From sushi and handcrafted cocktails to DJ nights and rooftop dining, the top restaurants in Andheri East combine food, ambiance and entertainment into unforgettable evenings.
                </p>
              </div>
            </motion.div>

            {/* Why Andheri East */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 01</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Why Andheri East is Mumbai's
                <br />
                <span className="italic text-brand-maroon/60">Fastest Growing Dining Hub</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Andheri East is strategically located near Mumbai airport, corporate hubs and premium hotels, making it a preferred dining destination. Over the past few years, the restaurant scene has evolved from casual eateries to immersive experiences featuring international cuisines, mixology-driven bars and nightlife venues.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                Today, visitors search for:
              </p>
              <ul className="space-y-3">
                {[
                  "Best restaurants in Andheri East for dinner",
                  "Cocktail bars in Andheri East",
                  "Late night restaurants in Andheri East",
                  "Sushi restaurants in Andheri East",
                  "Party places in Andheri East Mumbai",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-maroon/40" />
                    <span className="font-sans text-sm sm:text-base text-brand-maroon/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The area now offers all of these in one vibrant location.
              </p>
            </motion.div>

            {/* What Makes the Best */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 02</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                What Makes the Best Restaurants
                <br />
                <span className="italic text-brand-maroon/60">in Andheri East Stand Out</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {FEATURES.map((f, i) => (
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
                {/* Last cell filler with pull quote */}
                <div className="bg-brand-maroon p-6 sm:p-8 flex items-end">
                  <p className="font-serif text-lg italic text-brand-beige/60 leading-relaxed">
                    "The finest venues combine cuisine, atmosphere, cocktails and nightlife into one complete experience."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Standout Experience */}
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
                A Standout Dining
                <br />
                <span className="italic text-brand-maroon/60">Experience in Andheri East</span>
              </h2>

              <div className="relative h-[300px] sm:h-[420px] overflow-hidden border border-brand-maroon/10">
                <Image
                  src="/new/Waikiki_033.jpg"
                  alt="Waikiki — standout dining experience Andheri East Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/70 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 sm:p-12">
                  <div className="space-y-2">
                    <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/50">Mumbai's Tropical Escape</p>
                    <p className="font-serif text-2xl sm:text-3xl italic text-brand-beige leading-tight">Island-inspired dining,<br />cocktails & DJ nights.</p>
                  </div>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Designed as a tropical escape, Waikiki blends Hawaiian inspiration with Pan-Asian cuisine, sushi selections and handcrafted tiki cocktails. With multiple spaces including a high-energy lounge, formal dining area and rooftop terrace, it caters to both relaxed dinners and late-night celebrations.
              </p>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                Guests looking for the best restaurants in Andheri East often prioritize:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Pan Asian cuisine", "Sushi & poke bowls", "Signature cocktails", "DJ nights", "Rooftop seating", "Private event spaces"].map((item) => (
                  <div key={item} className="flex items-center gap-2 border border-brand-maroon/10 px-4 py-3">
                    <span className="w-1 h-1 rounded-full bg-brand-maroon/40 flex-shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-brand-maroon/70">{item}</span>
                  </div>
                ))}
              </div>
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
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 04</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Best Occasions to Visit
                <br />
                <span className="italic text-brand-maroon/60">Restaurants in Andheri East</span>
              </h2>
              <div className="space-y-0 border border-brand-maroon/10 divide-y divide-brand-maroon/10">
                {OCCASIONS.map((o, i) => (
                  <motion.div
                    key={o.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-6 px-6 py-5 group hover:bg-brand-maroon/[0.02] transition-colors"
                  >
                    <span className="font-serif text-3xl text-brand-maroon/20 flex-shrink-0 leading-none pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl sm:text-2xl">{o.title}</h3>
                      <p className="font-sans text-sm text-brand-maroon/60 leading-relaxed">{o.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Food Trends */}
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
                Popular Food Trends
                <br />
                <span className="italic text-brand-maroon/60">in Andheri East Restaurants</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The top restaurants in Andheri East are known for:
              </p>
              <div className="flex flex-wrap gap-3">
                {TRENDS.map((t) => (
                  <span key={t} className="font-sans text-xs uppercase tracking-[0.2em] border border-brand-maroon/20 px-4 py-2 text-brand-maroon/70 hover:bg-brand-maroon hover:text-brand-beige transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* How to Choose */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 06</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                How to Choose the Best
                <br />
                <span className="italic text-brand-maroon/60">Restaurant in Andheri East</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                When selecting among the best restaurants in Andheri East, consider:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Cuisine preference", "Ambiance (rooftop, lounge, dining)", "Cocktail menu", "Music & nightlife", "Location & accessibility", "Private event availability", "Reviews & ratings"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-maroon/40" />
                    <span className="font-sans text-sm sm:text-base text-brand-maroon/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                Restaurants that combine all these factors tend to rank among the most popular choices.
              </p>
            </motion.div>

            {/* Why AE is Perfect */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 07</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Why Andheri East is Perfect
                <br />
                <span className="italic text-brand-maroon/60">for Nightlife &amp; Dining</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Unlike other parts of Mumbai, Andheri East offers:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {["Easy airport access", "Premium dining venues", "Late night bars", "Rooftop lounges", "DJ nightlife", "Corporate-friendly spaces"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-brand-beige px-5 py-4 space-y-1"
                  >
                    <span className="block font-serif text-2xl italic text-brand-maroon/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="block font-sans text-xs sm:text-sm text-brand-maroon/70">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                This combination makes it one of Mumbai's most versatile dining destinations.
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
                      Dine at<br />
                      <span className="italic text-brand-beige/70">Waikiki</span>
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-beige/60 leading-relaxed">
                    From sushi and Pan Asian cuisine to handcrafted cocktails and DJ nights, Waikiki delivers a complete experience in Andheri East.
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
                  src="/new/Waikiki_035.jpg"
                  alt="Waikiki cocktails — best cocktail bar Andheri East"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-lg italic text-brand-beige">Handcrafted Tiki Cocktails</p>
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
                  ["Cuisine", "Pan-Asian · Hawaiian · Sushi"],
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
              in Andheri East
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-brand-beige/60 max-w-xl mx-auto leading-relaxed"
          >
            If you're planning dinner, drinks or a celebration, explore Waikiki — an island-inspired dining and nightlife destination in Andheri East.
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
