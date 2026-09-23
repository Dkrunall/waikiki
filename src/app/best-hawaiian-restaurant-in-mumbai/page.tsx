"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MapPin, Clock, Fish, Palmtree, Sparkles, Martini, Waves, Sun, Star } from "lucide-react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyActions from "@/components/StickyActions";
import Marquee from "@/components/Marquee";
import PostDate from "@/components/PostDate";

const CUISINE_ELEMENTS = [
  { icon: <Fish className="w-5 h-5" />, title: "Fresh Seafood & Premium Meats", body: "Every dish is built around quality ingredients, prepared to highlight natural flavor rather than mask it." },
  { icon: <Palmtree className="w-5 h-5" />, title: "Tropical Fruits", body: "Pineapple, mango, and coconut bring bright, natural sweetness to island-inspired plates." },
  { icon: <Sun className="w-5 h-5" />, title: "Light, Sweet-Savory Marinades", body: "Balanced marinades let the freshness of every ingredient shine through." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Vibrant, Colorful Presentation", body: "Colorful vegetables and artful plating make every dish as visually striking as it is flavorful." },
  { icon: <Waves className="w-5 h-5" />, title: "Asian & Polynesian Fusion", body: "A fusion of cooking techniques from across the Pacific creates a menu unlike anything else in the city." },
];

const WHY_SEARCHING = [
  { num: "01", title: "A Unique Culinary Adventure", body: "Hawaiian cuisine introduces guests to flavors rarely found elsewhere in Mumbai, making every visit feel new." },
  { num: "02", title: "An Escape from City Life", body: "Island-inspired interiors, warm hospitality, and relaxed surroundings let guests unwind without leaving the city." },
  { num: "03", title: "Perfect for Every Occasion", body: "From birthdays to business meetings, the setting feels both premium and welcoming for any gathering." },
];

const WHAT_DEFINES_BEST = [
  { icon: <Star className="w-5 h-5" />, title: "Authentic Island-Inspired Flavors", body: "Every dish reflects the freshness and vibrant taste Hawaiian cuisine is known for, using premium ingredients." },
  { icon: <Palmtree className="w-5 h-5" />, title: "An Inviting Tropical Atmosphere", body: "Lush greenery, warm lighting, and island-inspired décor instantly transport guests away from the city." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Exceptional Hospitality", body: "Attentive staff, personalized recommendations, and thoughtful presentation create lasting impressions." },
  { icon: <Martini className="w-5 h-5" />, title: "Handcrafted Beverage Selection", body: "Refreshing mocktails and expertly crafted cocktails complete every tropical dining experience." },
];

const OCCASIONS = [
  { num: "01", title: "Romantic Dinners", body: "An intimate, island-inspired setting for date nights and anniversaries." },
  { num: "02", title: "Family Celebrations", body: "A warm, welcoming atmosphere suited to milestones and gatherings of every size." },
  { num: "03", title: "Corporate Gatherings", body: "A premium yet relaxed backdrop for client dinners and team outings." },
  { num: "04", title: "Weekend Outings", body: "A refreshing tropical escape for a laid-back weekend catch-up." },
  { num: "05", title: "Birthday Parties", body: "Vibrant décor and lively energy that make celebrations memorable." },
  { num: "06", title: "Casual Evening Meetups", body: "An easy, unhurried setting for evenings with friends." },
];

const FAQS = [
  {
    q: "Which is the best Hawaiian restaurant in Mumbai?",
    a: "Waikiki is one of the best Hawaiian restaurants in Mumbai, offering authentic island-inspired cuisine, handcrafted cocktails, and a vibrant tropical ambience.",
  },
  {
    q: "What type of food is served at a Hawaiian restaurant?",
    a: "Hawaiian restaurants typically serve island-inspired dishes featuring fresh seafood, grilled specialties, tropical fruits, vibrant salads, and fusion flavors influenced by Polynesian, Japanese, and Asian cuisines.",
  },
  {
    q: "Is Waikiki suitable for celebrations and special occasions?",
    a: "Yes. Waikiki offers a lively tropical atmosphere that's perfect for birthdays, anniversaries, corporate dinners, family gatherings, and weekend celebrations.",
  },
  {
    q: "Does Waikiki serve handcrafted cocktails?",
    a: "Yes. Guests can enjoy a curated selection of handcrafted tropical cocktails and refreshing mocktails that complement the island-inspired menu.",
  },
  {
    q: "What makes Hawaiian cuisine different from other international cuisines?",
    a: "Hawaiian cuisine focuses on fresh ingredients, tropical flavors, balanced seasonings, and a unique blend of Polynesian, Japanese, American, and Asian culinary traditions.",
  },
  {
    q: "Is Waikiki a good place for first-time visitors to Hawaiian cuisine?",
    a: "Absolutely. Waikiki offers a welcoming environment and a thoughtfully curated menu, making it an excellent introduction to Hawaiian dining.",
  },
  {
    q: "Why is Waikiki considered one of the best Hawaiian restaurants in Mumbai?",
    a: "Waikiki stands out for its premium hospitality, tropical ambience, authentic flavors, handcrafted beverages, and memorable dining experience, making it a preferred destination for Hawaiian cuisine in Mumbai.",
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

export default function BestHawaiianRestaurantInMumbaiPage() {
  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/Waikiki_014.jpg"
            alt="Best Hawaiian Restaurant in Mumbai — Waikiki Tropical Dining"
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
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Journal</span>
            <div className="h-px w-8 bg-brand-beige/30" />
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Hawaiian Cuisine · Tropical Dining</span>
            <PostDate slug="/best-hawaiian-restaurant-in-mumbai" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.92] tracking-tighter text-brand-beige uppercase mb-6"
          >
            Best Hawaiian
            <br />
            <span className="italic text-brand-beige/70">Restaurant in Mumbai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-brand-beige/60 max-w-xl leading-relaxed tracking-[0.15em]"
          >
            Where Tropical Flavors Meet an Unforgettable Dining Experience
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Hawaiian Cuisine · Tropical Dining · Handcrafted Cocktails · Island Flavors · Waikiki Mumbai"
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
                Mumbai is home to one of India's most exciting culinary landscapes, offering everything from traditional Indian delicacies to globally inspired dining experiences. Yet, among the city's countless restaurants, Hawaiian cuisine remains a rare and refreshing discovery.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/60 leading-relaxed">
                  For those searching for the best Hawaiian restaurant in Mumbai, finding a place that combines authentic island-inspired flavors, tropical ambience, and exceptional hospitality can transform an ordinary meal into a memorable experience.
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Hawaiian cuisine is much more than seafood and tropical fruits. It represents a vibrant fusion of Polynesian traditions with Japanese, American, and Asian influences, creating dishes that are fresh, colorful, and packed with bold flavors. For diners looking to experience this unique culinary journey, Waikiki brings the spirit of the Hawaiian Islands to Mumbai with thoughtfully curated cuisine, handcrafted beverages, and an atmosphere that feels like a tropical getaway.
              </p>
            </motion.div>

            {/* Section 1: What Makes Hawaiian Cuisine Unique */}
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
                What Makes
                <br />
                <span className="italic text-brand-maroon/60">Hawaiian Cuisine So Unique?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Unlike many international cuisines that focus on rich gravies or heavy spices, Hawaiian food celebrates freshness. Every ingredient is chosen to create balanced flavors while maintaining its natural character.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {CUISINE_ELEMENTS.map((h, i) => (
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
                This balance of freshness and flavor is one of the reasons Hawaiian cuisine continues to grow in popularity among food lovers looking for something different.
              </p>
            </motion.div>

            {/* Section 2: Why More People Are Searching */}
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
                Why More People Search for the
                <br />
                <span className="italic text-brand-maroon/60">Best Hawaiian Restaurant in Mumbai</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Today's diners are looking beyond simply eating out — they're seeking memorable experiences. Restaurants that combine exceptional food with immersive ambience have become the preferred choice for celebrations, social gatherings, and weekend outings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {WHY_SEARCHING.map((o, i) => (
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

            {/* Section 3: What Defines the Best */}
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
                What Defines the Best
                <br />
                <span className="italic text-brand-maroon/60">Hawaiian Restaurant in Mumbai?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Choosing the right restaurant goes beyond the menu. A truly exceptional Hawaiian dining experience should offer the perfect combination of cuisine, ambience, and hospitality.
              </p>

              <div className="relative h-[280px] sm:h-[380px] overflow-hidden border border-brand-maroon/10 my-8">
                <Image
                  src="/new/Waikiki_022.jpg"
                  alt="Tropical dining ambience at Waikiki Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/70 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                  <div className="space-y-2">
                    <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/50">Island-Inspired · Waikiki</p>
                    <p className="font-serif text-2xl sm:text-3xl italic text-brand-beige leading-tight">A short vacation,<br />one dinner at a time.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {WHAT_DEFINES_BEST.map((h, i) => (
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
            </motion.div>

            {/* Section 4: Experience Tropical Dining at Waikiki */}
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
                Experience Tropical
                <br />
                <span className="italic text-brand-maroon/60">Dining at Waikiki</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Located in Mumbai, Waikiki has established itself as a destination for guests looking to enjoy an elevated island-inspired dining experience. Every detail — from the interiors to the carefully curated menu — captures the vibrant energy of Hawaii while offering a premium experience tailored for Mumbai's modern diners.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                Guests visiting Waikiki can expect freshly prepared island-inspired cuisine, premium seafood and signature specialties, beautiful tropical interiors, handcrafted cocktails and refreshing mocktails, friendly hospitality, and an atmosphere ideal for celebrations, casual dinners, and special occasions. This combination makes Waikiki one of the leading destinations for anyone searching for the best Hawaiian restaurant in Mumbai.
              </p>
            </motion.div>

            {/* Section 5: Ambience */}
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
                Why Ambience Is Just as
                <br />
                <span className="italic text-brand-maroon/60">Important as the Food</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Dining is no longer only about taste — it's about the complete experience. Waikiki embraces this philosophy by offering an immersive tropical setting where every corner reflects the relaxed charm of island life, creating the perfect backdrop for unforgettable moments.
              </p>

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

            {/* Section 6: Why Waikiki Stands Out */}
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
                Why Waikiki
                <br />
                <span className="italic text-brand-maroon/60">Stands Out</span>
              </h2>

              <div className="relative h-[260px] sm:h-[360px] overflow-hidden border border-brand-maroon/10 my-6">
                <Image
                  src="/new/Waikiki_028.jpg"
                  alt="Signature cocktails and Hawaiian dining at Waikiki Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                  <p className="font-serif text-xl sm:text-2xl italic text-brand-beige leading-tight">Every visit,<br />a short vacation.</p>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                One of the greatest strengths of Hawaiian cuisine is its versatility. The menu offers something for everyone — seafood enthusiasts, grill lovers, vegetarians, cocktail enthusiasts, and guests who enjoy exploring international cuisines.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Among the many restaurants across Mumbai, Waikiki has built its reputation by delivering more than exceptional food — a premium dining experience, tropical-inspired ambience, high-quality ingredients, an innovative menu, signature cocktails, warm hospitality, and a vibrant atmosphere where every visit feels like a short vacation to the Hawaiian Islands.
              </p>
              <a
                href="https://waikikiexperience.com/book-a-table/"
                className="inline-flex items-center gap-2 group font-sans text-xs uppercase tracking-[0.2em] text-brand-maroon/60 hover:text-brand-maroon transition-colors"
              >
                <span>Reserve your table today</span>
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
                      Mumbai's Tropical
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight">
                      Hawaiian
                      <br />
                      <span className="italic text-brand-beige/70">Escape</span>
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-beige/60 leading-relaxed">
                    Authentic island-inspired cuisine, handcrafted cocktails, and vibrant tropical ambience — all in the heart of Andheri East.
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
                  alt="Tropical cocktails and island-inspired cuisine at Waikiki"
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
                  ["Cuisine", "Hawaiian · Island-Inspired · Fusion"],
                  ["Bar", "Tropical Cocktails · Mocktails"],
                  ["Spaces", "Lounge · Dining · Rooftop"],
                  ["Events", "Celebrations · Private Dining"],
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
                  href="/best-cocktail-bar-in-andheri"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors border-b border-brand-maroon/10"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Best Cocktail Bar in Andheri: Where Every Sip Tells a Story
                  </span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="/restaurants-in-andheri-east-mumbai"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Restaurants in Andheri East Mumbai — Waikiki Experience
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
              Experience the Best
              <br />
              <span className="italic text-brand-beige/70">Hawaiian Restaurant</span>
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
            Authentic island flavors, handcrafted cocktails, and tropical ambience — all at Waikiki, Andheri East.
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
