"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MapPin, Clock, Fish, Martini } from "lucide-react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyActions from "@/components/StickyActions";
import Marquee from "@/components/Marquee";
import PostDate from "@/components/PostDate";

const DINER_CHECKLIST = [
  "Fresh sushi and seafood",
  "Contemporary sushi rolls",
  "Japanese-inspired dishes",
  "Quality ingredients",
  "Balanced sauces and seasonings",
  "Creative presentation",
  "Beverage pairings",
  "Comfortable and sophisticated ambience",
];

const TIKI_COCKTAILS = ["Powhiri Picante", "Island Grog", "Zombie", "Luau Punch", "Hula Haze Negroni"];

const OCCASIONS = [
  { num: "01", title: "Date Nights" },
  { num: "02", title: "Business Dinners" },
  { num: "03", title: "Birthday Celebrations" },
  { num: "04", title: "Group Dinners" },
  { num: "05", title: "Weekend Outings" },
  { num: "06", title: "Pre-Party Meals" },
  { num: "07", title: "Cocktail Evenings" },
  { num: "08", title: "Private Celebrations" },
];

const WAIKIKI_COMBINES = [
  "Tropical sushi",
  "Pan-Asian cuisine",
  "Polynesian influences",
  "Tiki cocktails",
  "Tropical interiors",
  "Rooftop ambience",
  "Music and entertainment",
  "Late-night dining",
];

const FAQS = [
  {
    q: "What should diners look for when choosing a Japanese restaurant in Mumbai?",
    a: "Diners can consider the freshness of ingredients, quality of sushi, preparation techniques, presentation, menu variety, ambience, service, and the overall dining experience.",
  },
  {
    q: "Where can guests enjoy sushi in Andheri East?",
    a: "Guests looking for sushi in Andheri East can explore Waikiki, which incorporates tropical sushi and Pan-Asian flavours into its broader island-inspired dining concept.",
  },
  {
    q: "Is Waikiki a traditional Japanese restaurant?",
    a: "No. Waikiki is not positioned as a traditional Japanese-only restaurant. It is an island-inspired Pan-Asian and Polynesian restaurant that incorporates tropical sushi and Asian culinary influences into its menu.",
  },
  {
    q: "What type of cuisine does Waikiki serve?",
    a: "Waikiki offers Pan-Asian and Polynesian-inspired cuisine, including tropical sushi, seafood, grilled preparations, and other Asian-inspired dishes, complemented by its Tiki cocktail program.",
  },
  {
    q: "Can guests enjoy sushi and cocktails at the same restaurant in Mumbai?",
    a: "Yes. Waikiki brings tropical sushi and Pan-Asian dining together with handcrafted Tiki and signature cocktails, making it possible to enjoy food and drinks as part of one evening experience.",
  },
  {
    q: "Is Waikiki suitable for date nights and group dining?",
    a: "Yes. The combination of tropical interiors, sushi and Pan-Asian dishes, cocktails, music, and different dining spaces makes Waikiki suitable for date nights, group dinners, celebrations, and weekend outings.",
  },
  {
    q: "Where is Waikiki located in Andheri East?",
    a: "Waikiki is located at Hotel Peninsula Grand in Saki Naka, Andheri East, Mumbai. Guests can contact the venue directly for reservations and enquiries.",
  },
];

const INLINE_LINK =
  "underline decoration-brand-maroon/30 underline-offset-4 hover:decoration-brand-maroon transition-colors";

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

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px w-8 bg-brand-maroon/30" />
      <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-maroon/70">{label}</span>
    </div>
  );
}

function CheckList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="border border-brand-maroon/10 divide-y divide-brand-maroon/10">
      <div className="px-6 py-4">
        <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/70">{heading}</p>
      </div>
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 px-6 py-4">
          <Fish className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-maroon/60" />
          <span className="font-sans text-sm text-brand-maroon/70 leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function BestJapaneseRestaurantInMumbaiPage() {
  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/Waikiki_012.webp"
            alt="Best Japanese Restaurant in Mumbai — Tropical Sushi at Waikiki"
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
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/70">Mumbai · Sushi · Pan-Asian</span>
            <PostDate slug="/best-japanese-restaurant-in-mumbai" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.92] tracking-tighter text-brand-beige uppercase mb-6"
          >
            Best Japanese Restaurant
            <br />
            <span className="italic text-brand-beige/70">in Mumbai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-brand-beige/70 max-w-xl leading-relaxed tracking-[0.15em]"
          >
            Discover Sushi, Pan-Asian Flavours and Island Dining
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Tropical Sushi · Pan-Asian Flavours · Tiki Cocktails · Island Dining · Waikiki Mumbai"
        speed={35}
      />

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main content */}
          <div className="lg:col-span-8 space-y-16 sm:space-y-20">

            {/* Intro */}
            <motion.div {...fadeUp} className="space-y-6">
              <p className="font-sans text-base sm:text-lg text-brand-maroon/70 leading-relaxed">
                Mumbai's dining scene has become increasingly global, and Japanese cuisine has become a major part of that evolution. Sushi, seafood, Japanese-inspired small plates, contemporary rolls, and Asian fusion dishes have found a strong following among Mumbai diners.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/70 leading-relaxed">
                  But choosing the best Japanese restaurant in Mumbai is not always about finding the most traditional menu.
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For many modern diners, the ideal experience combines quality food with stylish interiors, creative drinks, music, attentive service, and an atmosphere that makes the meal feel like an occasion.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                In Andheri East, Waikiki offers a distinctive take on Asian dining by bringing together tropical sushi, Pan-Asian and Polynesian-inspired cuisine, handcrafted Tiki cocktails, and an island-inspired setting.
              </p>
            </motion.div>

            {/* Section 1 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 01" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                What Should Diners Look for
                <br />
                <span className="italic text-brand-maroon/70">in a Japanese Restaurant?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A memorable Japanese dining experience begins with the food.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Fresh ingredients, careful preparation, balanced flavours, quality seafood, presentation, and attention to texture all contribute to a successful meal.
              </p>
              <CheckList heading="Depending on the Restaurant, Diners May Look For" items={DINER_CHECKLIST} />
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                However, modern Mumbai dining has expanded beyond strict culinary categories.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Many guests now prefer restaurants where they can enjoy multiple Asian influences, cocktails, music, and social energy in one destination.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                That is where Waikiki offers a different proposition.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 02" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Is Waikiki a Traditional
                <br />
                <span className="italic text-brand-maroon/70">Japanese Restaurant?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                This distinction matters.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Waikiki is not positioned as a traditional Japanese-only restaurant. Instead, it is an island-inspired Pan-Asian and Polynesian restaurant that incorporates tropical sushi and Asian culinary influences into a broader dining experience.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For someone specifically searching for a traditional Japanese restaurant, that distinction is important.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For diners who want sushi, Pan-Asian flavours, cocktails, tropical ambience, and nightlife in one destination, however, the broader concept can be particularly appealing.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                This makes Waikiki an interesting option for people searching for a Japanese restaurant in Andheri while also looking for a more immersive evening.
              </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 03" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                A Tropical Take
                <br />
                <span className="italic text-brand-maroon/70">on Sushi</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Sushi is one of the world's most recognizable Japanese culinary traditions.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Yet contemporary sushi can be interpreted in many ways, particularly when it becomes part of a broader Pan-Asian dining concept.
              </p>

              <div className="relative h-[280px] sm:h-[380px] overflow-hidden border border-brand-maroon/10 my-8">
                <Image
                  src="/new/Waikiki_028.webp"
                  alt="Tropical sushi and Pan-Asian dishes at Waikiki Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/70 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                  <div className="space-y-2">
                    <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/70">Tropical Sushi · Waikiki</p>
                    <p className="font-serif text-2xl sm:text-3xl italic text-brand-beige leading-tight">Familiar flavours,<br />island spirit.</p>
                  </div>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Waikiki brings a tropical perspective to sushi by incorporating it into its larger Polynesian and island-inspired identity.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The menu combines tropical sushi with seafood, grilled preparations, vibrant spices, and other Pan-Asian flavours.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For guests searching for a{" "}
                <a href="/best-restaurants-in-mumbai-sushi-japanese" className={INLINE_LINK}>sushi restaurant in Mumbai</a>, this creates an opportunity to enjoy familiar Japanese-inspired elements in a setting that feels distinctly different from a conventional sushi restaurant.
              </p>
            </motion.div>

            {/* Section 4 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 04" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Why Andheri East Is Becoming
                <br />
                <span className="italic text-brand-maroon/70">a Dining Hotspot</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Andheri East has developed into one of Mumbai's active commercial and hospitality zones.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Its mix of hotels, offices, residential areas, entertainment destinations, and connectivity makes it a practical location for dining and nightlife.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For people searching for{" "}
                <a href="/restaurants-in-andheri-east-mumbai" className={INLINE_LINK}>restaurants in Andheri East</a> or comparing the{" "}
                <a href="/best-restaurants-in-andheri-east" className={INLINE_LINK}>top restaurants in Andheri East</a>, convenience is often part of the decision.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A restaurant that can accommodate dinner, drinks, celebrations, and late-night plans offers a particularly flexible option.
              </p>

              <div className="flex items-start gap-4 border border-brand-maroon/10 px-6 py-5">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-maroon/70" />
                <div className="space-y-1">
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/70">Opening Hours</p>
                  <p className="font-serif text-xl sm:text-2xl">Tuesday – Sunday · 6 PM – 3 AM</p>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                That makes Waikiki suitable for early dinners, post-work meals, weekend dining, cocktails, and late-night outings.
              </p>
            </motion.div>

            {/* Section 5 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 05" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Sushi, Cocktails and
                <br />
                <span className="italic text-brand-maroon/70">a Complete Night Out</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                One of Waikiki's strongest differentiators is the combination of food and drinks.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Guests do not have to choose between a sushi dinner and a cocktail night.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The venue brings tropical sushi and Pan-Asian dishes together with its Tiki cocktail program, creating an experience that can move naturally from dinner into drinks and nightlife.
              </p>

              <div className="border border-brand-maroon/10 divide-y divide-brand-maroon/10">
                <div className="px-6 py-4">
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/70">From the Tiki Cocktail Menu</p>
                </div>
                {TIKI_COCKTAILS.map((c) => (
                  <div key={c} className="flex items-start gap-3 px-6 py-4">
                    <Martini className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-maroon/60" />
                    <span className="font-sans text-sm text-brand-maroon/70 leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For guests searching for a Pan Asian restaurant in Mumbai, this combination provides an opportunity to explore food and cocktails within the same experience.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 06" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                A More Contemporary
                <br />
                <span className="italic text-brand-maroon/70">Luxury Dining Experience</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Luxury dining in Mumbai is no longer limited to formal restaurants.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Modern diners increasingly value immersive interiors, creative menus, premium hospitality, music, design, and a sense of occasion.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Waikiki takes this contemporary approach through its island-inspired interiors and combination of dining and entertainment.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Its rooftop space adds another layer to the experience, creating an open-air setting for cocktails, conversations, and late-evening dining.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For guests searching for a luxury dining experience in Mumbai, the attraction lies in the combination of culinary variety and atmosphere.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/70 leading-relaxed">
                  The venue feels social and energetic rather than overly formal, making it suitable for both casual premium dining and special occasions.
                </p>
              </div>
            </motion.div>

            {/* Section 7 */}
            <motion.div {...fadeUp} className="space-y-8">
              <SectionLabel label="Section 07" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Japanese-Inspired Dining
                <br />
                <span className="italic text-brand-maroon/70">for Different Occasions</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A versatile restaurant should be able to accommodate more than one type of guest or occasion. Sushi and Pan-Asian cuisine can work particularly well for:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {OCCASIONS.map((o, i) => (
                  <motion.div
                    key={o.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-brand-beige p-5 space-y-2 group hover:bg-brand-maroon/[0.03] transition-colors"
                  >
                    <span className="block font-serif text-2xl italic text-brand-maroon/15 leading-none">{o.num}</span>
                    <h3 className="font-serif text-lg sm:text-xl leading-tight">{o.title}</h3>
                  </motion.div>
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For people researching party places in Andheri Mumbai, a restaurant that transitions naturally into nightlife can simplify the entire evening.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Guests can start with food and continue with cocktails and music rather than moving from one venue to another.
              </p>
            </motion.div>

            {/* Section 8 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 08" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                What Makes Waikiki Different From
                <br />
                <span className="italic text-brand-maroon/70">a Conventional Sushi Restaurant?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The biggest difference is the overall concept.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A conventional sushi restaurant may focus primarily on Japanese cuisine and traditional dining. Waikiki takes a broader approach, combining:
              </p>

              <div className="relative h-[260px] sm:h-[360px] overflow-hidden border border-brand-maroon/10 my-6">
                <Image
                  src="/new/Waikiki_003.webp"
                  alt="Island-inspired dining and interiors at Waikiki Andheri East"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                  <p className="font-serif text-xl sm:text-2xl italic text-brand-beige leading-tight">The flavours of Asia,<br />the spirit of the islands.</p>
                </div>
              </div>

              <CheckList heading="The Waikiki Concept" items={WAIKIKI_COMBINES} />

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                This makes it particularly attractive to guests who want the flavours of Asia within a more experiential nightlife environment.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The restaurant is therefore better understood as a Pan-Asian and Polynesian dining destination with tropical sushi, rather than a traditional Japanese restaurant.
              </p>
            </motion.div>

            {/* FAQs */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="FAQs" />
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
                      Andheri East's
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight">
                      Tropical Sushi
                      <br />
                      <span className="italic text-brand-beige/70">&amp; Pan-Asian</span>
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-beige/70 leading-relaxed">
                    Tropical sushi, Pan-Asian flavours, Tiki cocktails and island-inspired dining — all under one roof.
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
                  src="/new/Waikiki_013.webp"
                  alt="Pan-Asian dining at Waikiki Andheri East"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-lg italic text-brand-beige">Island Dining</p>
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
                  ["Cuisine", "Pan-Asian · Polynesian"],
                  ["Signature", "Tropical Sushi · Seafood"],
                  ["Bar", "Tiki · Signature Cocktails"],
                  ["Spaces", "Lounge · Dining · Rooftop"],
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
                  href="/best-cocktail-bar-in-mumbai"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors border-b border-brand-maroon/10"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Best Cocktail Bar in Mumbai: Tiki Cocktails, Great Food and Late-Night Vibes
                  </span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="/best-restaurants-in-mumbai-sushi-japanese"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Best Restaurants in Mumbai for Dining, Sushi &amp; Japanese Cuisine
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
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-beige/70">Plan Your Next Evening</span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tighter">
              A Different Side of
              <br />
              <span className="italic text-brand-beige/70">Japanese-Inspired</span>
              <br />
              Dining in Mumbai
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-brand-beige/70 max-w-xl mx-auto leading-relaxed"
          >
            The search for the best Japanese restaurant in Mumbai can mean different things to different diners. Explore Waikiki's dining and nightlife experience and plan your next evening.
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
              href="/book-a-table"
              className="group flex items-center gap-2 border border-brand-beige/30 text-brand-beige font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:border-brand-beige/60 transition-colors"
            >
              <span>Book a Table</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
