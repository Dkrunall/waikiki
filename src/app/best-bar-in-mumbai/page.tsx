"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MapPin, Clock, Utensils, Wine, Star, Music, Users, Sparkles, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyActions from "@/components/StickyActions";
import Marquee from "@/components/Marquee";

const HIGHLIGHTS = [
  { title: "Signature Cocktails", body: "Creative mixes inspired by tropical nightlife and premium cocktail culture." },
  { title: "Vibrant Ambience", body: "Stylish interiors with music and lighting that instantly set the mood." },
  { title: "Social Dining Experience", body: "Perfect combination of food, cocktails, and nightlife under one roof." },
  { title: "Prime Andheri East Location", body: "Easy accessibility for professionals, travelers, and nightlife lovers." },
  { title: "Late-Night Vibes", body: "One of the preferred late night bars in Andheri East Mumbai for energetic evenings and weekend plans." },
];

const TROPICAL_IDEAS = [
  "Weekend hangouts",
  "Date nights",
  "Birthday celebrations",
  "Corporate parties",
  "Friends’ night-outs",
  "Social gatherings",
];

const FAQS = [
  {
    q: "Why is Waikiki considered one of the best bars in Mumbai?",
    a: "Waikiki offers premium cocktails, lively ambiance, tropical-inspired nightlife, music, and a social atmosphere that creates unforgettable experiences.",
  },
  {
    q: "Is Waikiki a good late-night bar in Andheri East Mumbai?",
    a: "Yes, Waikiki is one of the popular late night bars in Andheri East Mumbai for weekend outings, parties, and after-office gatherings.",
  },
  {
    q: "Does Waikiki serve signature cocktails?",
    a: "Absolutely. Waikiki is known as a best cocktail bar in Andheri East Mumbai because of its handcrafted cocktails and creative drink menu.",
  },
  {
    q: "Is Waikiki suitable for parties and celebrations?",
    a: "Yes, Waikiki is ideal for birthdays, corporate events, social gatherings, and weekend celebrations.",
  },
  {
    q: "What makes Waikiki a unique Tiki Cocktails Bar in Andheri East Mumbai?",
    a: "Waikiki combines tropical-inspired décor, vibrant cocktails, music, and stylish nightlife ambience for a refreshing experience.",
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

export default function BlogPage() {
  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/Waikiki_033.jpg"
            alt="Best bar in Mumbai for cocktails and nightlife — Waikiki Lounge"
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
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Journal</span>
            <div className="h-px w-8 bg-brand-beige/30" />
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Mumbai · Cocktails · Lounge</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[10vw] sm:text-[7vw] lg:text-[5.5vw] leading-[0.92] tracking-tighter text-brand-beige uppercase mb-6"
          >
            Best Bar
            <br />
            <span className="italic text-brand-beige/70">in Mumbai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-brand-beige/60 max-w-xl leading-relaxed tracking-[0.15em]"
          >
            Best Bar in Mumbai for Nights You’ll Never Want to End
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Best Bar in Mumbai · Tropical Cocktails · Rooftop Lounge · Nightlife · Andheri East · Late Night Party"
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
              className="space-y-6"
            >
              <p className="font-sans text-base sm:text-lg text-brand-maroon/70 leading-relaxed">
                Some places serve drinks. Some places create nights you keep talking about long after they’re over.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/60 leading-relaxed">
                  In a city that never truly slows down, finding the Best bar in Mumbai is about more than cocktails or music. It’s about discovering a place where the vibe feels effortless, the crowd feels energetic, and every evening turns into an experience.
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                That’s exactly what Waikiki brings to Mumbai’s nightlife scene. Located in the heart of Andheri East, Waikiki has become a favorite for people who love handcrafted cocktails, lively ambiance, rooftop-style energy, and unforgettable late-night experiences. Whether you’re planning after-office drinks, a weekend party, or a casual night with friends, Waikiki delivers the perfect mix of food, music, and nightlife.
              </p>
            </motion.div>

            {/* Section 1 */}
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
                Not Every Night Out
                <br />
                <span className="italic text-brand-maroon/60">Needs a Reason</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Mumbai’s nightlife culture has changed. People no longer wait for birthdays or special occasions to go out. Sometimes, all you need is good music, great cocktails, and the right company.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                That’s why Waikiki has become one of the most talked-about late night bars in Andheri East Mumbai.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                The atmosphere feels alive from the moment you walk in. The lighting, the music, the crowd, and the energy all come together to create a space where people naturally relax, socialize, and stay longer than they planned. Unlike overly formal lounges or crowded pubs, Waikiki balances premium nightlife with comfort, making every visit feel exciting without trying too hard.
              </p>
            </motion.div>

            {/* Section 2 */}
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
                Cocktails That Deserve
                <br />
                <span className="italic text-brand-maroon/60">a Second Round</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A great cocktail bar isn’t just about serving drinks — it’s about creating flavors people remember. At Waikiki, cocktails are crafted to match the mood of the night. Whether you enjoy tropical blends, classic mixes, or bold signature creations, the menu offers something for every kind of guest.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                That’s one reason Waikiki is becoming known as the best cocktail bar in Andheri East Mumbai.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                From visually stunning presentations to perfectly balanced flavors, every drink is designed to elevate the overall experience. The bartenders understand how to combine creativity with quality, giving guests cocktails that feel premium yet approachable. For cocktail lovers exploring the Best cocktail bar in Andheri, Waikiki offers the kind of variety that keeps people coming back to try something new every visit.
              </p>
            </motion.div>

            {/* Section 3 */}
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
                Tropical Vibes in the
                <br />
                <span className="italic text-brand-maroon/60">Middle of Mumbai</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Most bars in Mumbai follow the same formula. Waikiki chose a different direction. Inspired by vibrant island nightlife and tropical aesthetics, the space brings a refreshing energy that instantly stands out. The décor, lighting, music, and cocktail menu all work together to create an escape from the city’s routine nightlife scene.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                This unique identity has helped Waikiki become a preferred Tiki Cocktails Bar in Andheri East Mumbai for guests looking for something stylish and different. The tropical cocktail culture adds personality to the experience, making it ideal for:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                {TROPICAL_IDEAS.map((item) => (
                  <div key={item} className="flex items-center gap-2 border border-brand-maroon/10 px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-maroon/40 flex-shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-brand-maroon/70">{item}</span>
                  </div>
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                It’s the kind of place where people naturally pull out their phones for pictures, order another round, and extend the evening.
              </p>
            </motion.div>

            {/* Section 4 */}
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
                Rooftop Energy
                <br />
                <span className="italic text-brand-maroon/60">Without Leaving the City Buzz</span>
              </h2>

              <div className="relative h-[280px] sm:h-[380px] overflow-hidden border border-brand-maroon/10 my-8">
                <Image
                  src="/new/Waikiki_012.jpg"
                  alt="Elevated tropical bar atmosphere at Waikiki Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/70 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                  <div className="space-y-2">
                    <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/50">Upscale Lounge · Rooftop Vibe</p>
                    <p className="font-serif text-2xl sm:text-3xl italic text-brand-beige leading-tight">Spacious views,<br />unmatched energy.</p>
                  </div>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                There’s something special about bars that combine nightlife energy with an open, social atmosphere. People today love venues that feel spacious, vibrant, and visually appealing. That’s why searches for the Best Rooftop Bar in Andheri East Mumbai continue to grow.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                Waikiki captures that elevated nightlife vibe with stylish interiors, immersive music, and a setting designed for modern social experiences. The ambience creates the perfect balance between upscale lounge culture and relaxed nightlife energy. Whether you’re planning a Friday night outing or simply looking for a place to unwind after work, Waikiki offers the perfect atmosphere to disconnect from routine and enjoy the moment.
              </p>
            </motion.div>

            {/* Section 5 */}
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
                Why Waikiki Is Becoming
                <br />
                <span className="italic text-brand-maroon/60">a Mumbai Favorite</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Mumbai has endless nightlife options, but only a few places manage to leave a lasting impression. Waikiki stands out because it focuses on the complete experience instead of just food or drinks. Guests come here for the energy, stay for the ambience, and return for the memories.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {HIGHLIGHTS.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-brand-beige p-6 sm:p-8 space-y-3 group hover:bg-brand-maroon/[0.03] transition-colors"
                  >
                    <span className="block font-serif text-2xl italic text-brand-maroon/15 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl">{h.title}</h3>
                    <p className="font-sans text-sm text-brand-maroon/60 leading-relaxed">{h.body}</p>
                  </motion.div>
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                These experiences are exactly why many guests now consider Waikiki among the contenders for the Best bar in Mumbai.
              </p>
            </motion.div>

            {/* Section 6 */}
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
                More Than
                <br />
                <span className="italic text-brand-maroon/60">Just Drinks</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                What truly makes a nightlife venue memorable is how it makes people feel. At Waikiki, the atmosphere encourages conversations, celebrations, laughter, and spontaneous moments. Some guests arrive for one drink and end up spending the entire evening enjoying music, food, and cocktails with friends.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                The menu complements the nightlife perfectly, offering flavorful dishes designed to pair beautifully with drinks and social gatherings. For people searching online for the best cocktail bar in Andheri East Mumbai, Waikiki delivers far more than just cocktails — it creates an entire nightlife experience.
              </p>
            </motion.div>

            {/* Section 7 */}
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
                Your Next Night
                <br />
                <span className="italic text-brand-maroon/60">Out Starts Here</span>
              </h2>

              <div className="relative h-[260px] sm:h-[360px] overflow-hidden border border-brand-maroon/10 my-6">
                <Image
                  src="/new/Waikiki_040.jpg"
                  alt="Waikiki cocktail and late night parties Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                  <p className="font-serif text-xl sm:text-2xl italic text-brand-beige leading-tight">Elevating nights,<br />one drink at a time.</p>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                If you’re looking for the Best bar in Mumbai, Waikiki offers the perfect mix of cocktails, ambience, music, and unforgettable nightlife energy. From tropical signature drinks and stylish interiors to vibrant late-night experiences, Waikiki has quickly become one of the city’s most exciting destinations for nightlife lovers.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Whether you’re exploring the Best cocktail bar in Andheri, searching for exciting late night bars in Andheri East Mumbai, or planning a weekend outing with friends, Waikiki gives you every reason to step out and enjoy Mumbai nights differently.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                Visit Waikiki and experience why guests continue to call it one of the most exciting nightlife destinations in the city.
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
                      Bars &amp;<br />
                      <span className="italic text-brand-beige/70">Cocktail Lounges</span>
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-beige/60 leading-relaxed">
                    From custom tiki mixes and Pan Asian food to energetic playlists and late-night DJ sets, Waikiki delivers Mumbai's ultimate bar experience.
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
                  src="/new/Waikiki_005.jpg"
                  alt="Cocktail selection at Waikiki Mumbai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-lg italic text-brand-beige">Signature Mixology</p>
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
                  ["Bar Style", "Tiki Cocktail & Lounge"],
                  ["Location", "Andheri East, Mumbai"],
                  ["Music", "DJ Nights & Curated Beats"],
                  ["Signature Drink", "Polynesian & Tropical Blends"],
                  ["Vibe", "Vibrant, Upscale, Social"],
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
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-beige/40">Plan Your Outing</span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tighter">
              Experience the Best
              <br />
              <span className="italic text-brand-beige/70">Bar &amp; Nightlife</span>
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
            Sip premium cocktails, enjoy ambient music, and immerse yourself in the city's finest tropical lounge.
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
