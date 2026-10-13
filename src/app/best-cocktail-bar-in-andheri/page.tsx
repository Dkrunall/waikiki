"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MapPin, Clock, Martini, Sparkles, Star, Music, Wine } from "lucide-react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyActions from "@/components/StickyActions";
import Marquee from "@/components/Marquee";
import PostDate from "@/components/PostDate";

const GREAT_BAR_ELEMENTS = [
  { icon: <Martini className="w-5 h-5" />, title: "Signature Handcrafted Cocktails", body: "Drinks built on premium spirits, fresh ingredients, and creative recipes rather than shortcuts." },
  { icon: <Star className="w-5 h-5" />, title: "Experienced Mixologists", body: "Skilled bartenders who bring precision, balance, and craftsmanship to every pour." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Fresh Fruits, Herbs & Infusions", body: "House-made infusions and fresh garnishes that elevate every glass." },
  { icon: <Music className="w-5 h-5" />, title: "Curated Music & Interiors", body: "Stylish interiors and carefully curated music that set the tone for the evening." },
];

const CULTURE_TRENDS = [
  { num: "01", title: "Craft Mixology", body: "Guests appreciate cocktails made with fresh ingredients, balanced flavors, and innovative techniques that highlight the bartender's creativity." },
  { num: "02", title: "Premium Experiences", body: "Consumers today value ambience, presentation, and personalized service just as much as the drinks themselves." },
  { num: "03", title: "Food & Cocktail Pairings", body: "A well-crafted cocktail becomes even more enjoyable when paired with thoughtfully prepared cuisine." },
];

const CELEBRATIONS = [
  { num: "01", title: "Date Nights", body: "An intimate setting for couples looking for something stylish and memorable." },
  { num: "02", title: "Birthday Celebrations", body: "Vibrant energy and signature cocktails that make milestones feel special." },
  { num: "03", title: "Corporate Parties", body: "A sophisticated backdrop for client dinners and team celebrations." },
  { num: "04", title: "Weekend Gatherings", body: "The perfect spot to unwind with friends after a long week." },
  { num: "05", title: "Friends' Reunions", body: "Comfortable seating and lively energy for catching up in style." },
  { num: "06", title: "Anniversary Dinners", body: "Tropical-inspired interiors that create an energetic yet relaxed atmosphere for milestones." },
];

const PAIRINGS = [
  "Grilled appetizers with citrus-forward cocktails",
  "Seafood dishes paired with refreshing tropical beverages",
  "Small sharing plates alongside signature house specials",
  "Desserts paired with fruit-infused cocktails",
];

const FAQS = [
  {
    q: "Which is the best cocktail bar in Andheri?",
    a: "Waikiki is one of the best cocktail bars in Andheri, known for its handcrafted cocktails, tropical ambience, premium hospitality, and vibrant nightlife.",
  },
  {
    q: "What makes a cocktail bar different from a regular bar?",
    a: "A cocktail bar focuses on expertly crafted drinks made with premium spirits, fresh ingredients, creative recipes, and professional mixology techniques.",
  },
  {
    q: "Does Waikiki offer handcrafted cocktails?",
    a: "Yes. Waikiki serves a curated selection of handcrafted cocktails prepared using premium ingredients, fresh fruits, herbs, and innovative flavor combinations.",
  },
  {
    q: "Is Waikiki suitable for parties and celebrations?",
    a: "Absolutely. Waikiki is an ideal venue for birthdays, anniversaries, corporate gatherings, weekend outings, and casual celebrations with friends.",
  },
  {
    q: "Does Waikiki serve food along with cocktails?",
    a: "Yes. Guests can enjoy globally inspired cuisine that pairs perfectly with the restaurant's handcrafted cocktail menu.",
  },
  {
    q: "Why is Andheri popular for nightlife?",
    a: "Andheri is one of Mumbai's leading entertainment hubs, offering premium restaurants, bars, lounges, and live entertainment, making it a favorite destination for nightlife enthusiasts.",
  },
  {
    q: "Why choose Waikiki for cocktails in Andheri?",
    a: "Waikiki combines signature cocktails, tropical-inspired interiors, premium service, delicious cuisine, and a lively atmosphere, creating a complete nightlife experience.",
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
          className="flex-shrink-0 mt-1 text-brand-maroon/70"
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
            <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed pb-6">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BestCocktailBarInAndheriPage() {
  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/Waikiki_035.webp"
            alt="Best Cocktail Bar in Andheri — Waikiki Handcrafted Cocktails"
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
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/70">Journal</span>
            <div className="h-px w-8 bg-brand-beige/30" />
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/70">Andheri · Cocktails · Nightlife</span>
            <PostDate slug="/best-cocktail-bar-in-andheri" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.92] tracking-tighter text-brand-beige uppercase mb-6"
          >
            Best Cocktail
            <br />
            <span className="italic text-brand-beige/70">Bar in Andheri</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-brand-beige/70 max-w-xl leading-relaxed tracking-[0.15em]"
          >
            Where Every Sip Tells a Story
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Handcrafted Cocktails · Mixology · Tropical Nightlife · Andheri · Waikiki Mumbai"
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
                Andheri has evolved into one of Mumbai's most exciting nightlife destinations, offering an eclectic mix of restaurants, lounges, and bars that cater to every kind of social gathering. Whether it's an after-work unwind, a weekend celebration, or a spontaneous evening with friends, the neighborhood has become synonymous with memorable nights out.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/70 leading-relaxed">
                  Finding the best cocktail bar in Andheri is about discovering a venue that combines expertly crafted drinks, exceptional hospitality, and an atmosphere that keeps guests coming back.
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Today's cocktail culture goes beyond simply mixing spirits — it's about creativity, premium ingredients, presentation, and storytelling. For those seeking elevated nightlife with tropical flair, Waikiki offers an immersive experience where handcrafted cocktails, vibrant ambience, and globally inspired cuisine come together to create unforgettable evenings.
              </p>
            </motion.div>

            {/* Section 1: What Makes a Great Cocktail Bar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/70">Section 01</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                What Makes a
                <br />
                <span className="italic text-brand-maroon/70">Great Cocktail Bar?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A truly exceptional cocktail bar isn't measured by the number of drinks on its menu — it is defined by the quality of its experience. When craftsmanship, ambience, and hospitality come together, every visit becomes more than just another night out.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {GREAT_BAR_ELEMENTS.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-brand-beige p-6 sm:p-8 space-y-3 group hover:bg-brand-maroon/[0.03] transition-colors"
                  >
                    <div className="text-brand-maroon/70 group-hover:text-brand-maroon transition-colors">
                      {h.icon}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl">{h.title}</h3>
                    <p className="font-sans text-sm text-brand-maroon/70 leading-relaxed">{h.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Section 2: The Growing Cocktail Culture */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/70">Section 02</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                The Growing Cocktail
                <br />
                <span className="italic text-brand-maroon/70">Culture in Andheri</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Mumbai's cocktail scene has witnessed remarkable growth over the last few years. Guests are increasingly looking for unique beverage experiences rather than conventional drinks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {CULTURE_TRENDS.map((o, i) => (
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
                    <p className="font-sans text-sm text-brand-maroon/70 leading-relaxed">{o.body}</p>
                  </motion.div>
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                These evolving preferences have made cocktail bars in Andheri increasingly popular among professionals, food enthusiasts, and nightlife lovers.
              </p>
            </motion.div>

            {/* Section 3: Why Waikiki is Becoming the Best */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/70">Section 03</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Why Waikiki Is Becoming the
                <br />
                <span className="italic text-brand-maroon/70">Best Cocktail Bar in Andheri</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Every memorable evening begins with the right atmosphere. Waikiki brings together tropical aesthetics, lively energy, and world-class hospitality to create a destination unlike any other. Inspired by island living, the venue offers guests a refreshing escape from the city's fast-paced lifestyle while delivering a premium nightlife experience.
              </p>

              <div className="relative h-[280px] sm:h-[380px] overflow-hidden border border-brand-maroon/10 my-8">
                <Image
                  src="/new/Waikiki_033.webp"
                  alt="Signature cocktails and nightlife at Waikiki Andheri"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/70 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                  <div className="space-y-2">
                    <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/70">Handcrafted · Waikiki</p>
                    <p className="font-serif text-2xl sm:text-3xl italic text-brand-beige leading-tight">Every sip,<br />tells a story.</p>
                  </div>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Visitors can expect signature handcrafted cocktails, creative seasonal beverage menus, premium spirits, fresh ingredients and tropical flavors, stylish interiors, vibrant music, comfortable seating, and warm and attentive service — every detail curated to ensure an elevated experience from the first sip to the last.
              </p>
            </motion.div>

            {/* Section 4: Handcrafted Cocktails Special */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/70">Section 04</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                What Makes Handcrafted
                <br />
                <span className="italic text-brand-maroon/70">Cocktails Special?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Unlike standard mixed drinks, handcrafted cocktails focus on precision and balance. Professional mixologists carefully select fresh citrus, seasonal fruits, premium spirits, house-made syrups, fresh herbs, and unique garnishes.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The result is a cocktail that delivers complexity, freshness, and a memorable drinking experience — a commitment to quality that keeps cocktail enthusiasts searching for the best cocktail bar in Andheri.
              </p>
            </motion.div>

            {/* Section 5: Perfect Place for Every Celebration */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/70">Section 05</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                The Perfect Place for
                <br />
                <span className="italic text-brand-maroon/70">Every Celebration</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Great cocktails are best enjoyed in great company. Waikiki's tropical-inspired interiors create an energetic yet relaxed environment where every occasion feels special.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {CELEBRATIONS.map((o, i) => (
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
                    <p className="font-sans text-sm text-brand-maroon/70 leading-relaxed">{o.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Section 6: Cocktails and Cuisine Pairing */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/70">Section 06</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Cocktails and Cuisine:
                <br />
                <span className="italic text-brand-maroon/70">The Perfect Pairing</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A premium cocktail experience is incomplete without exceptional food. Waikiki complements its handcrafted beverage program with a carefully curated menu featuring globally inspired flavors and tropical influences.
              </p>

              <div className="border border-brand-maroon/10 divide-y divide-brand-maroon/10">
                <div className="px-6 py-4">
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/70">Popular Pairings</p>
                </div>
                {PAIRINGS.map((p) => (
                  <div key={p} className="flex items-start gap-3 px-6 py-4">
                    <Wine className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-maroon/60" />
                    <span className="font-sans text-sm text-brand-maroon/70 leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The harmony between food and drinks enhances every aspect of the dining experience.
              </p>
            </motion.div>

            {/* Section 7: More Than Just a Bar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-brand-maroon/30" />
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/70">Section 07</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                More Than
                <br />
                <span className="italic text-brand-maroon/70">Just a Bar</span>
              </h2>

              <div className="relative h-[260px] sm:h-[360px] overflow-hidden border border-brand-maroon/10 my-6">
                <Image
                  src="/new/Waikiki_038.webp"
                  alt="Nightlife and handcrafted cocktails at Waikiki Andheri"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                  <p className="font-serif text-xl sm:text-2xl italic text-brand-beige leading-tight">Sophisticated,<br />never intimidating.</p>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Modern guests don't simply visit bars — they seek destinations that create lasting memories. Guests appreciate Waikiki's stylish ambience, premium hospitality, Instagram-worthy interiors, curated music, comfortable seating, vibrant nightlife, exceptional food, and friendly service.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For anyone searching online for the best cocktail bar in Andheri, Waikiki brings together expertly crafted cocktails, tropical-inspired interiors, premium cuisine, and warm hospitality to redefine nightlife in Andheri — continuing to set the benchmark for premium cocktail experiences in the neighborhood.
              </p>
              <a
                href="https://waikikiexperience.com/book-a-table/"
                className="inline-flex items-center gap-2 group font-sans text-xs uppercase tracking-[0.2em] text-brand-maroon/70 hover:text-brand-maroon transition-colors"
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
                <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/70">FAQs</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Frequently Asked
                <br />
                <span className="italic text-brand-maroon/70">Questions</span>
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
                  <Image src="/tiki-pattern-light.webp" alt="" fill className="object-cover" />
                </div>
                <div className="relative p-7 sm:p-8 space-y-6">
                  <div className="relative w-28 h-12">
                    <Image
                      src="/waikiki.webp"
                      alt="Waikiki logo"
                      fill
                      className="object-contain object-left brightness-0 invert"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/70">
                      Andheri's Premium
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight">
                      Cocktail
                      <br />
                      <span className="italic text-brand-beige/70">Destination</span>
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-beige/70 leading-relaxed">
                    Handcrafted cocktails, tropical-inspired interiors, and premium cuisine — all in the heart of Andheri East.
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
                    <div className="flex items-center gap-2 text-brand-beige/70">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-sans text-[10px] uppercase tracking-widest">Tue–Sun · 6 PM – 3 AM</span>
                    </div>
                    <div className="flex items-start gap-2 text-brand-beige/70">
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
                  src="/new/Waikiki_040.webp"
                  alt="Handcrafted cocktails and mixology at Waikiki Andheri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-lg italic text-brand-beige">Craft Mixology</p>
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
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/70">Quick Facts</p>
                </div>
                {[
                  ["Bar", "Handcrafted Cocktails · Premium Spirits"],
                  ["Cuisine", "Global · Sharing Plates"],
                  ["Spaces", "Lounge · Dining · Rooftop"],
                  ["Events", "DJ Nights · Private Parties"],
                  ["Hours", "Tue–Sun, 6 PM – 3 AM"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between px-5 py-3 gap-4">
                    <span className="font-sans text-[11px] uppercase tracking-widest text-brand-maroon/70 flex-shrink-0">{label}</span>
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
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/70">Also Read</p>
                </div>
                <a
                  href="/best-hawaiian-restaurant-in-mumbai"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors border-b border-brand-maroon/10"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Best Hawaiian Restaurant in Mumbai: Tropical Flavors at Waikiki
                  </span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="/best-bar-in-mumbai"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Best Bar in Mumbai: Why Waikiki Is a Top Nightlife Destination
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
          <Image src="/tiki-pattern-light.webp" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-beige/70">Your Next Great Night Out</span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tighter">
              Experience the Best
              <br />
              <span className="italic text-brand-beige/70">Cocktail Bar</span>
              <br />
              in Andheri
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-brand-beige/70 max-w-xl mx-auto leading-relaxed"
          >
            Innovative mixology, delicious food, and an energetic atmosphere — all at Waikiki, Andheri East.
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
