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
  { icon: <Utensils className="w-5 h-5" />, title: "Curated Food Experiences", body: "Shareable plates, signature specialties, and indulgent mains crafted with quality ingredients and attention to detail." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Dynamic Social Atmosphere", body: "A lively yet sophisticated environment designed for casual evenings, celebrations, and weekend gatherings." },
  { icon: <Star className="w-5 h-5" />, title: "Elevated Hospitality", body: "Every detail — from service standards to guest interactions — is focused on creating memorable moments." },
  { icon: <Wine className="w-5 h-5" />, title: "Handcrafted Cocktails", body: "Premium ingredients, innovative techniques, and balanced flavor profiles in every expertly crafted beverage." },
  { icon: <Music className="w-5 h-5" />, title: "Immersive Ambiance", body: "Lighting, music, design, and service combine to create an environment that encourages guests to unwind and connect." },
];

const IDEAL_FOR = [
  { num: "01", title: "Dinner Dates", body: "Couples seeking a stylish, ambient dinner experience in the heart of Mumbai." },
  { num: "02", title: "Celebratory Groups", body: "Birthdays, anniversaries, and milestones celebrated in a vibrant, memorable setting." },
  { num: "03", title: "Corporate Gatherings", body: "Team dinners, client events, and professional outings in a sophisticated venue." },
  { num: "04", title: "Weekend Party Lovers", body: "Those exploring vibrant nightlife, premium cocktails, and energetic social evenings." },
  { num: "05", title: "Cocktail Enthusiasts", body: "Guests seeking premium mixology, tiki-inspired creations, and curated beverage experiences." },
];

const FAQS = [
  {
    q: "What makes Waikiki one of the top restaurants in Andheri East?",
    a: "Waikiki offers a unique combination of exceptional cuisine, handcrafted cocktails, vibrant ambiance, and premium hospitality. Its immersive dining experience makes it a preferred choice among guests looking for top restaurants in Andheri East.",
  },
  {
    q: "Does Waikiki offer vegetarian and non-vegetarian menu options?",
    a: "Yes, Waikiki features a diverse menu with both vegetarian and non-vegetarian dishes, ensuring a memorable dining experience for every guest.",
  },
  {
    q: "Why is Waikiki considered one of the best cocktail bars in Mumbai?",
    a: "Waikiki is known for its expertly crafted cocktails, premium spirits, innovative mixology, and lively atmosphere. These elements have helped establish its reputation as one of the best cocktail bars in Mumbai.",
  },
  {
    q: "Is Waikiki suitable for celebrations and special occasions?",
    a: "Absolutely. Whether it's a birthday celebration, anniversary, corporate gathering, or a night out with friends, Waikiki provides the perfect setting for memorable occasions.",
  },
  {
    q: "Are reservations recommended at Waikiki?",
    a: "Yes, reservations are highly recommended, especially on weekends and during special events, to ensure availability and a seamless dining experience.",
  },
  {
    q: "What type of cuisine can guests expect at Waikiki?",
    a: "Waikiki offers a carefully curated menu featuring a variety of global flavors, signature dishes, sharing platters, and innovative culinary creations designed to suit diverse tastes.",
  },
  {
    q: "Is Waikiki among the popular bars in Andheri East?",
    a: "Yes, Waikiki has become a popular destination among guests looking for premium bars in Andheri East, offering a sophisticated nightlife experience with great music, cocktails, and ambiance.",
  },
  {
    q: "Has Waikiki been featured in any reputed publications?",
    a: "Yes, Waikiki has been featured by leading lifestyle and food publications including Femina, highlighting its growing recognition in Mumbai's hospitality and dining scene.",
  },
  {
    q: "Can Waikiki host private events and corporate gatherings?",
    a: "Yes, Waikiki is an excellent venue for private celebrations, social gatherings, corporate events, and special occasions, offering customized experiences based on guest requirements.",
  },
  {
    q: "How can I book a table at Waikiki?",
    a: "Guests can reserve a table through the Waikiki website, contact the reservations team directly, or reach out via the restaurant's social media channels for booking assistance.",
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

export default function RestaurantsInAndheriEastWaikikiPage() {
  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/Waikiki_001.jpg"
            alt="Restaurants in Andheri East — Waikiki Dining & Cocktails Mumbai"
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
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/50">Andheri East · Dining · Cocktails</span>
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
            Why Waikiki Is Redefining Mumbai's Dining and Cocktail Scene
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Restaurants in Andheri East · Cocktail Bar · Premium Dining · Tiki Cocktails · Nightlife · Waikiki Mumbai"
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
                Mumbai's dining landscape is constantly evolving, but few neighborhoods have transformed as dramatically as Andheri East. Once known primarily as a business district and transit hub, the area has emerged as one of the city's most exciting destinations for food lovers, cocktail enthusiasts, and social gatherings.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/60 leading-relaxed">
                  Guests searching for the best restaurants in Andheri East are looking for more than just good food — they want immersive experiences, expertly crafted beverages, and memorable moments.
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                This shift has given rise to a new generation of hospitality destinations, and Waikiki stands at the forefront of this movement. Combining innovative cuisine, handcrafted cocktails, energetic nightlife, and elevated guest experiences, Waikiki has become a preferred destination for those seeking a premium dining experience in Mumbai.
              </p>
            </motion.div>

            {/* Section 1: Evolution */}
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
                The Evolution of
                <br />
                <span className="italic text-brand-maroon/60">Dining in Andheri East</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Over the last few years, Andheri East has become one of Mumbai's fastest-growing lifestyle destinations. Its strategic location near major business hubs, residential neighborhoods, and the international airport has created demand for high-quality dining and entertainment venues.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                As a result, the area now features some of the most exciting culinary concepts in the city. However, among the many top restaurants in Andheri East, only a select few successfully combine exceptional cuisine, innovative beverages, and immersive hospitality under one roof.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                Modern diners expect curated food experiences, creative cocktail programs, stylish interiors, live entertainment, exceptional service, and memorable social experiences. These evolving expectations have transformed what it means to be one of the leading restaurants in Andheri East.
              </p>
            </motion.div>

            {/* Section 2: Why Guests Choose Waikiki */}
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
                Why Guests
                <br />
                <span className="italic text-brand-maroon/60">Choose Waikiki</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                At Waikiki, dining is designed to be an experience rather than simply a meal. Inspired by the energy of tropical destinations and contemporary urban culture, Waikiki blends vibrant aesthetics, exceptional culinary craftsmanship, and world-class hospitality to create an environment where every visit feels special.
              </p>

              <div className="relative h-[280px] sm:h-[380px] overflow-hidden border border-brand-maroon/10 my-8">
                <Image
                  src="/new/Waikiki_022.jpg"
                  alt="Premium dining experience at Waikiki Andheri East Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/70 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                  <div className="space-y-2">
                    <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/50">Premium Dining · Cocktails</p>
                    <p className="font-serif text-2xl sm:text-3xl italic text-brand-beige leading-tight">Every visit<br />feels special.</p>
                  </div>
                </div>
              </div>

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
                These elements have helped Waikiki earn recognition among the most talked-about top restaurants in Andheri East.
              </p>
            </motion.div>

            {/* Section 3: Cocktail Lovers */}
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
                A Destination for
                <br />
                <span className="italic text-brand-maroon/60">Cocktail Lovers</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Mumbai's cocktail culture has matured significantly, with guests increasingly seeking venues that offer creativity, craftsmanship, and premium beverage experiences. For those searching for the best cocktail bar in Mumbai, Waikiki delivers a beverage program designed to elevate every visit.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Every cocktail is prepared using premium ingredients, innovative techniques, and balanced flavor profiles. From tropical-inspired creations to modern classics, Waikiki's cocktail selection appeals to both seasoned enthusiasts and casual guests looking to explore new flavors.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                The perfect cocktail experience extends beyond the glass. Lighting, music, design, and service all contribute to creating an environment that encourages guests to unwind, celebrate, and connect — positioning Waikiki among conversations surrounding the best cocktail bar in Mumbai.
              </p>
            </motion.div>

            {/* Section 4: Featured In */}
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
                Recognized by
                <br />
                <span className="italic text-brand-maroon/60">Leading Publications</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A strong hospitality brand is built on guest experiences, consistency, and industry recognition. Waikiki has earned attention from reputed lifestyle and food publications that regularly highlight noteworthy dining destinations across Mumbai.
              </p>

              <div className="border border-brand-maroon/10 divide-y divide-brand-maroon/10">
                <div className="px-6 py-4">
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/40">Featured In</p>
                </div>
                <a
                  href="https://www.femina.in/food/instant-fix/options-for-relishing-a-delicious-spread-in-mumbai-284318.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-6 py-4 hover:bg-brand-maroon/[0.03] transition-colors"
                >
                  <div className="space-y-0.5">
                    <p className="font-serif text-lg group-hover:text-brand-maroon/70 transition-colors">Femina</p>
                    <p className="font-sans text-xs text-brand-maroon/40">Leading lifestyle &amp; food publication</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-brand-maroon/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-maroon" />
                </a>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/60 leading-relaxed">
                For diners researching the best restaurants in Andheri East, third-party recognition from established media outlets serves as an additional signal of trust and credibility.
              </p>
            </motion.div>

            {/* Section 5: Bars in Andheri East */}
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
                A Standout Among
                <br />
                <span className="italic text-brand-maroon/60">Bars in Andheri East</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The nightlife scene in Mumbai continues to evolve, and guests now seek venues that combine food, drinks, music, and ambiance into a seamless experience. Among the many bars in Andheri East, Waikiki stands out by offering more than just beverages.
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
                These qualities continue to position Waikiki among the preferred bars in Andheri East for those seeking a premium nightlife destination.
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
                  src="/new/Waikiki_028.jpg"
                  alt="Waikiki nightlife and dining experience Andheri East Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                  <p className="font-serif text-xl sm:text-2xl italic text-brand-beige leading-tight">Premium dining,<br />vibrant nightlife.</p>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Finding exceptional restaurants in Andheri East is no longer just about discovering great food. Guests want memorable experiences, expertly crafted cocktails, vibrant ambiance, and hospitality that leaves a lasting impression.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Waikiki delivers all of these elements in one destination. Whether you're visiting for dinner, cocktails, celebrations, or a night out with friends, Waikiki invites you to experience a new standard of dining and nightlife in Mumbai.
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
                      Redefining Mumbai's
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight">
                      Dining &amp;<br />
                      <span className="italic text-brand-beige/70">Cocktail Scene</span>
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-beige/60 leading-relaxed">
                    Premium cuisine, handcrafted cocktails, vibrant nightlife, and exceptional hospitality — all in the heart of Andheri East.
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
                  alt="Waikiki cocktails and dining ambiance Andheri East"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-lg italic text-brand-beige">Tropical Dining Vibes</p>
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
                  ["Cuisine", "Global · Signature Dishes · Sharing Plates"],
                  ["Bar", "Tiki Cocktails · Premium Mixology"],
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
                  href="/best-bar-in-mumbai"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors border-b border-brand-maroon/10"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Best Bar in Mumbai: Why Waikiki Is a Top Nightlife Destination
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
              Experience One of the
              <br />
              <span className="italic text-brand-beige/70">Top Restaurants</span>
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
            Premium dining, handcrafted cocktails, vibrant nightlife, and exceptional hospitality — all at Waikiki, Andheri East.
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
