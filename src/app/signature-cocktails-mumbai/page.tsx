"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MapPin, Clock, Wine, Music, Sparkles, Star, Utensils, Users } from "lucide-react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyActions from "@/components/StickyActions";
import Marquee from "@/components/Marquee";

const HIGHLIGHTS = [
  { icon: <Wine className="w-5 h-5" />, title: "Creative Flavor Profiles", body: "Every cocktail is designed to surprise and delight guests through unique combinations and perfectly balanced ingredients." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Premium Quality", body: "Only carefully selected spirits and ingredients are used to ensure consistency and excellence in every glass." },
  { icon: <Star className="w-5 h-5" />, title: "Visual Appeal", body: "Artistic presentation transforms each drink into a conversation starter and a memorable part of the experience." },
  { icon: <Music className="w-5 h-5" />, title: "Tiki-Inspired Ambiance", body: "Tropical aesthetics, vibrant interiors, and curated music transport guests to an island escape in the heart of Mumbai." },
  { icon: <Users className="w-5 h-5" />, title: "Social Atmosphere", body: "The energy evolves throughout the evening, creating an engaging environment perfect for every occasion." },
];

const IDEAL_FOR = [
  { num: "01", title: "Cocktail Enthusiasts", body: "Guests exploring premium mixology, creative tiki creations, and innovative beverage experiences." },
  { num: "02", title: "Celebratory Groups", body: "Birthdays, anniversaries, and social occasions elevated by handcrafted cocktails and vibrant ambiance." },
  { num: "03", title: "Date Nights", body: "Romantic evenings enhanced by expertly crafted drinks and a lively yet sophisticated setting." },
  { num: "04", title: "Corporate Events", body: "Team gatherings and client evenings in an energetic, stylish, and memorable environment." },
  { num: "05", title: "Weekend Explorers", body: "Those discovering Mumbai's nightlife and searching for the city's best cocktail experiences." },
];

const FAQS = [
  {
    q: "Where can I find the best signature cocktails in Mumbai?",
    a: "Waikiki offers a curated menu of signature cocktails crafted using premium ingredients, innovative techniques, and tropical inspirations, making it a popular destination for cocktail enthusiasts.",
  },
  {
    q: "What makes Waikiki a unique Tiki Cocktails Bar in Andheri East Mumbai?",
    a: "Waikiki combines tropical-inspired interiors, handcrafted cocktails, vibrant music, and exceptional hospitality to create a distinctive tiki-style experience in Mumbai.",
  },
  {
    q: "Why is Waikiki considered one of the best cocktail bars in Andheri?",
    a: "Guests appreciate Waikiki for its creative cocktail menu, energetic atmosphere, premium beverage selection, and memorable nightlife experience.",
  },
  {
    q: "Does Waikiki serve food along with cocktails?",
    a: "Yes, Waikiki offers a thoughtfully curated food menu designed to complement its signature cocktails and enhance the overall dining experience.",
  },
  {
    q: "Is Waikiki suitable for celebrations and private gatherings?",
    a: "Absolutely. Waikiki is a popular choice for birthdays, anniversaries, corporate gatherings, and social celebrations thanks to its lively ambiance and premium hospitality.",
  },
  {
    q: "What types of cocktails can guests expect at Waikiki?",
    a: "Guests can enjoy tropical creations, modern classics, innovative house specials, and expertly crafted signature cocktails designed for a variety of tastes.",
  },
  {
    q: "Is advance table booking recommended at Waikiki?",
    a: "Yes, reservations are recommended, especially on weekends and special event nights, to ensure the best experience.",
  },
  {
    q: "Why is Waikiki recognized among the best cocktail bars in Mumbai?",
    a: "Waikiki combines exceptional mixology, immersive ambiance, quality service, and memorable guest experiences, making it a preferred destination for cocktail lovers across Mumbai.",
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

export default function SignatureCocktailsMumbaiPage() {
  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/Waikiki_035.jpg"
            alt="Signature Cocktails Mumbai — Waikiki Tiki Cocktail Bar Andheri East"
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
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Cocktails · Mixology · Nightlife</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.92] tracking-tighter text-brand-beige uppercase mb-6"
          >
            Signature
            <br />
            <span className="italic text-brand-beige/70">Cocktails Mumbai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-brand-beige/60 max-w-xl leading-relaxed tracking-[0.15em]"
          >
            Where Mumbai Unwinds — Discover Cocktails That Turn Every Evening Into an Experience
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Signature Cocktails Mumbai · Tiki Cocktails Bar · Best Cocktail Bar Andheri East · Premium Mixology · Waikiki"
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
                Mumbai is a city that knows how to celebrate. From after-work gatherings and weekend catch-ups to special occasions and spontaneous nights out, the city thrives on experiences that bring people together. While great food remains an essential part of any outing, today's guests are increasingly seeking something more — thoughtfully crafted drinks, immersive ambiance, and memorable moments.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/60 leading-relaxed">
                  A truly exceptional cocktail experience combines creativity, premium ingredients, expert craftsmanship, and an atmosphere that keeps guests coming back.
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                At Waikiki, every cocktail is designed to tell a story. Inspired by tropical escapes, vibrant flavors, and contemporary mixology, Waikiki has become a destination for guests seeking an elevated nightlife experience in Mumbai.
              </p>
            </motion.div>

            {/* Section 1: Rise of Cocktails */}
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
                The Rise of Signature
                <br />
                <span className="italic text-brand-maroon/60">Cocktails in Mumbai</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The city's dining and nightlife culture has evolved significantly over the last few years. Guests are no longer satisfied with standard drinks and predictable menus. Instead, they seek unique beverage experiences that reflect creativity and individuality.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Today's cocktail enthusiasts look for premium spirits, fresh ingredients, unique flavor combinations, artistic presentation, and personalized drinking experiences.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                At Waikiki, these expectations are transformed into unforgettable experiences, making every visit feel special and every glass worth remembering.
              </p>
            </motion.div>

            {/* Section 2: Cocktail Journey */}
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
                More Than Drinks:
                <br />
                <span className="italic text-brand-maroon/60">A Cocktail Journey</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A great cocktail isn't simply mixed — it is carefully crafted. Every beverage at Waikiki is designed to create a balance of flavor, aroma, texture, and presentation. The result is a menu that appeals to both cocktail connoisseurs and guests exploring premium cocktails for the first time.
              </p>

              <div className="relative h-[280px] sm:h-[380px] overflow-hidden border border-brand-maroon/10 my-8">
                <Image
                  src="/new/Waikiki_014.jpg"
                  alt="Handcrafted signature cocktails at Waikiki Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/70 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                  <div className="space-y-2">
                    <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/50">Premium Mixology · Tiki Cocktails</p>
                    <p className="font-serif text-2xl sm:text-3xl italic text-brand-beige leading-tight">Crafted with care,<br />served with flair.</p>
                  </div>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                From tropical inspirations to contemporary classics, Waikiki's beverage program reflects innovation and attention to detail — helping position Waikiki among destinations recommended when guests search for the best cocktail bar in Mumbai.
              </p>
            </motion.div>

            {/* Section 3: Tiki Bar Andheri East */}
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
                Why Waikiki Stands Out
                <br />
                <span className="italic text-brand-maroon/60">in Andheri East</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Location matters when choosing the perfect venue for an evening out. Situated in one of Mumbai's most vibrant neighborhoods, Waikiki has established itself as a leading Tiki Cocktails Bar in Andheri East Mumbai, bringing together tropical influences, energetic ambiance, and premium hospitality.
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
                    <div className="text-brand-maroon/40 group-hover:text-brand-maroon transition-colors">
                      {h.icon}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl">{h.title}</h3>
                    <p className="font-sans text-sm text-brand-maroon/60 leading-relaxed">{h.body}</p>
                  </motion.div>
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                These qualities have helped establish Waikiki as a preferred Tiki Cocktails Bar in Andheri East Mumbai for guests seeking something different from the ordinary.
              </p>
            </motion.div>

            {/* Section 4: Ideal For */}
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
                Why Cocktail Lovers
                <br />
                <span className="italic text-brand-maroon/60">Choose Waikiki</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Mumbai offers countless nightlife options, but guests often seek destinations that combine quality, ambiance, and memorable experiences. Waikiki delivers all three — vibrant energy, exceptional hospitality, and curated experiences that go beyond a typical night out.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {IDEAL_FOR.map((o, i) => (
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

            {/* Section 5: Beyond the Cocktail Menu */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/40">Section 05</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Beyond the
                <br />
                <span className="italic text-brand-maroon/60">Cocktail Menu</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                While cocktails remain a major attraction, Waikiki's appeal extends beyond beverages. Guests can enjoy curated food pairings, social dining experiences, live entertainment, celebratory gatherings, weekend outings, and special occasions — all under one roof.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                This combination of dining and nightlife creates an all-in-one experience that continues to attract guests seeking the best cocktail bar in Mumbai.
              </p>
            </motion.div>

            {/* Section 6: Outro */}
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
                Experience
                <br />
                <span className="italic text-brand-maroon/60">Waikiki</span>
              </h2>

              <div className="relative h-[260px] sm:h-[360px] overflow-hidden border border-brand-maroon/10 my-6">
                <Image
                  src="/new/Waikiki_008.jpg"
                  alt="Waikiki cocktail bar nightlife experience Andheri East Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                  <p className="font-serif text-xl sm:text-2xl italic text-brand-beige leading-tight">Sip, celebrate,<br />remember.</p>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The search for exceptional signature cocktails Mumbai guests truly remember often leads to venues that prioritize creativity, hospitality, and atmosphere. Waikiki delivers all three in a setting designed for unforgettable evenings.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Whether you're discovering a new favorite cocktail, celebrating with friends, or exploring Mumbai's nightlife scene, Waikiki offers an experience that goes beyond the ordinary.
              </p>
              <a
                href="https://waikikiexperience.com/book-a-table/"
                className="inline-flex items-center gap-2 group font-sans text-xs uppercase tracking-[0.2em] text-brand-maroon/60 hover:text-brand-maroon transition-colors"
              >
                <span>Book your table today</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
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
                      Mumbai's Premier
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight">
                      Cocktail &amp;<br />
                      <span className="italic text-brand-beige/70">Tiki Bar</span>
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-beige/60 leading-relaxed">
                    Handcrafted signature cocktails, tropical-inspired ambiance, premium spirits, and an unforgettable nightlife experience in Andheri East.
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
                  src="/new/Waikiki_003.jpg"
                  alt="Waikiki tiki cocktail bar ambiance Andheri East"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-lg italic text-brand-beige">Tiki Cocktail Vibes</p>
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
                  ["Cocktails", "Tiki · Signature · Modern Classics"],
                  ["Spirits", "Premium · Curated Selection"],
                  ["Food", "Global Cuisine · Sharing Plates"],
                  ["Events", "DJ Nights · Private Gatherings"],
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
                  href="/best-bar-in-mumbai"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors border-b border-brand-maroon/10"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Best Bar in Mumbai: Why Waikiki Is a Top Nightlife Destination
                  </span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="/restaurants-in-andheri-east-waikiki"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Restaurants in Andheri East: Why Waikiki Is Redefining Mumbai's Dining Scene
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
              Discover Mumbai's
              <br />
              <span className="italic text-brand-beige/70">Best Signature</span>
              <br />
              Cocktails
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-brand-beige/60 max-w-xl mx-auto leading-relaxed"
          >
            Handcrafted cocktails, tropical ambiance, and premium hospitality — every evening at Waikiki is designed to be unforgettable.
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
