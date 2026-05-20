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
  { icon: <Wine className="w-5 h-5" />, title: "Signature Cocktails", body: "Handcrafted tropical cocktails and custom tiki recipes created by expert mixologists." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Stylish Interiors", body: "Photogenic indoor and outdoor designs curated for celebrations and social gatherings." },
  { icon: <Music className="w-5 h-5" />, title: "Elevated Music", body: "Curated playlists and DJ nights that keep the energy alive from dinner to late night." },
  { icon: <Utensils className="w-5 h-5" />, title: "Premium Menu", body: "Thoughtfully curated menu featuring fresh sushi, Japanese bites, and Pan-Asian favorites." },
  { icon: <Users className="w-5 h-5" />, title: "Group-Friendly Spaces", body: "Spacious lounges and dining setups ideal for birthdays, corporate meetups, or family dinners." },
];

const IDEAL_FOR = [
  { num: "01", title: "Couples", body: "Couples looking for a stylish, ambient dinner spot in Mumbai." },
  { num: "02", title: "Corporate Teams", body: "Corporate groups planning evening outings, team dinners, or client meetups." },
  { num: "03", title: "Friends Gatherings", body: "Friends meeting up for premium drinks, conversations, and good music." },
  { num: "04", title: "Weekend Party Lovers", body: "Weekend party lovers looking to explore the finest Mumbai nightlife." },
  { num: "05", title: "Foodies", body: "Foodies searching for premium dining and Japanese sushi restaurants in Andheri East." },
];

const FAQS = [
  {
    q: "Is Waikiki one of the popular Restaurants in Andheri East?",
    a: "Yes, Waikiki is known for its lively ambiance, premium dining experience, and vibrant nightlife scene in Andheri East.",
  },
  {
    q: "Does Waikiki serve Japanese cuisine?",
    a: "Waikiki offers Asian-inspired dishes and is a great option for people looking for a modern japanese restaurant in mumbai.",
  },
  {
    q: "What makes Waikiki different from other restaurants?",
    a: "Waikiki combines food, music, cocktails, ambience, and hospitality to create a complete social dining experience.",
  },
  {
    q: "Is Waikiki good for celebrations and parties?",
    a: "Absolutely. Waikiki is a popular venue for birthdays, corporate gatherings, weekend outings, and special occasions.",
  },
  {
    q: "Why do people consider Waikiki among the best restaurants in Mumbai?",
    a: "Guests love Waikiki for its energetic atmosphere, stylish interiors, quality food, and memorable nightlife experience.",
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
            src="/new/Waikiki_013.jpg"
            alt="Best restaurants in Andheri East Mumbai — Waikiki Dining"
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
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Andheri East · Dining · Nightlife</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.92] tracking-tighter text-brand-beige uppercase mb-6"
          >
            Restaurants
            <br />
            <span className="italic text-brand-beige/70">in Andheri East</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-brand-beige/60 max-w-xl leading-relaxed tracking-[0.15em]"
          >
            Your Next Favorite Dining Spot in Mumbai Might Be in Andheri East
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Restaurants in Andheri East · Japanese Cuisine · Pan Asian · Tiki Cocktails · Rooftop Lounge · Nightlife"
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
                Mumbai never runs out of places to eat, but every once in a while, you discover a place that instantly becomes your go-to for dinners, celebrations, and spontaneous night-outs. That’s exactly the kind of experience people are searching for when they look for the best Restaurants in Andheri East.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/60 leading-relaxed">
                  Some want great food. Others want music, cocktails, ambience, and a place that feels alive. Waikiki brings all of it together in one unforgettable setting.
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Whether you're planning a dinner with friends, a date night, a corporate meetup, or simply looking to unwind after work, Waikiki offers a refreshing mix of dining and nightlife that keeps guests coming back.
              </p>
            </motion.div>

            {/* Section 1: Experience */}
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
                Not Every Restaurant
                <br />
                <span className="italic text-brand-maroon/60">Feels Like an Experience</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                There’s a difference between eating out and truly enjoying an evening. The best places in Mumbai understand that people don’t just visit restaurants for food anymore — they come for the atmosphere, the energy, and the memories.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                That’s where Waikiki stands apart from many other Restaurants in Andheri East.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                The moment you step in, the mood changes. Warm lighting, stylish interiors, upbeat music, and a buzzing crowd instantly set the tone for a great evening. It’s the kind of place where dinner casually turns into a long conversation, another round of drinks, and one more reason to stay a little longer.
              </p>
            </motion.div>

            {/* Section 2: Japanese Cuisine */}
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
                A Hidden Gem for
                <br />
                <span className="italic text-brand-maroon/60">Japanese Food Lovers</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Mumbai’s food scene has evolved rapidly, and Japanese cuisine is now one of the most loved dining experiences across the city. From sushi platters to Asian-inspired small plates, diners today expect authenticity with presentation.
              </p>
              
              <div className="relative h-[280px] sm:h-[380px] overflow-hidden border border-brand-maroon/10 my-8">
                <Image
                  src="/new/Waikiki_038.jpg"
                  alt="Fresh sushi and Japanese menu options at Waikiki Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/70 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                  <div className="space-y-2">
                    <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/50">Modern Japanese · Pan Asian</p>
                    <p className="font-serif text-2xl sm:text-3xl italic text-brand-beige leading-tight">Authentic flavors,<br />contemporary vibe.</p>
                  </div>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                If you’re searching for a modern japanese restaurant in mumbai, Waikiki deserves your attention.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The menu is thoughtfully curated for people who enjoy bold flavors and beautifully plated dishes. Every item is prepared to complement the overall experience — whether paired with cocktails, shared with friends, or enjoyed during a relaxed dinner evening.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                Unlike traditional fine dining spaces that feel overly formal, Waikiki keeps things energetic and approachable while still delivering premium quality.
              </p>
            </motion.div>

            {/* Section 3: Dining Destination */}
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
                Why Andheri East Has
                <br />
                <span className="italic text-brand-maroon/60">Become a Dining Destination</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Over the last few years, Andheri East has transformed into one of Mumbai’s busiest lifestyle hubs. Professionals, travelers, and food enthusiasts are constantly exploring the area for new cafes, lounges, and nightlife experiences.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                That’s one reason searches for top restaurants in Andheri East continue to grow.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                The area offers convenience, accessibility, and a vibrant crowd. With business centers, hotels, and entertainment zones nearby, people are always looking for restaurants that offer more than just good food. Waikiki fits perfectly into this culture, blending premium dining with nightlife energy to create a space where every occasion feels special.
              </p>
            </motion.div>

            {/* Section 4: Highlights Checklist */}
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
                More Than
                <br />
                <span className="italic text-brand-maroon/60">a Dinner Plan</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Some places are made for quick meals. Others are built for moments. Waikiki is where birthdays become unforgettable, weekend plans feel exciting, and after-office gatherings turn into memorable nights. Here’s what makes the experience stand out:
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
                That balance of food, music, and hospitality is exactly why many locals consider Waikiki among the best restaurants in Mumbai.
              </p>
            </motion.div>

            {/* Section 5: Ideal For */}
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
                The Kind of Place You
                <br />
                <span className="italic text-brand-maroon/60">Recommend to Friends</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Everyone has that one restaurant they confidently recommend whenever someone asks: <span className="italic">“Where should we go tonight?”</span> Waikiki has become that answer for many people in Mumbai. The combination of excellent service, flavorful cuisine, and a lively vibe creates an experience that feels effortless yet premium. It’s ideal for:
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

              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                And because the experience feels social and energetic, guests naturally return with more friends and family.
              </p>
            </motion.div>

            {/* Section 6: Fresh Take */}
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
                A Fresh Take on
                <br />
                <span className="italic text-brand-maroon/60">Mumbai Dining</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The city is filled with dining options, but only a handful manage to create a complete atmosphere where food, drinks, music, and people come together naturally.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Waikiki understands modern dining culture. Guests today want restaurants that feel visually appealing, socially engaging, and exciting from the moment they walk in.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                That’s what makes Waikiki more than just another japanese restaurant in mumbai or lounge in the city. It’s a place designed for experiences, from casual evenings to planned celebrations, every visit offers something memorable.
              </p>
            </motion.div>

            {/* Section 7: Outro */}
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
                Ready for Your
                <br />
                <span className="italic text-brand-maroon/60">Next Night Out?</span>
              </h2>

              <div className="relative h-[260px] sm:h-[360px] overflow-hidden border border-brand-maroon/10 my-6">
                <Image
                  src="/new/Waikiki_040.jpg"
                  alt="Waikiki Dining Table and Lounge Setup Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                  <p className="font-serif text-xl sm:text-2xl italic text-brand-beige leading-tight">Great food,<br />nightlife vibes.</p>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                If you’re exploring the best Restaurants in Andheri East, Waikiki deserves to be on your list. Great food, handcrafted cocktails, stylish ambience, and unforgettable nightlife come together to create one of the most exciting dining experiences in Mumbai.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Whether you’re discovering new places with friends or planning your next celebration, Waikiki gives you the perfect reason to step out and enjoy the city.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                Visit Waikiki and experience why it continues to be counted among the top restaurants in Andheri East and one of the growing favorites among the best restaurants in Mumbai.
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
                      Dining &amp;<br />
                      <span className="italic text-brand-beige/70">Nightlife Hubs</span>
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
