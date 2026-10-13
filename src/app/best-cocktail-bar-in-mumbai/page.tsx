"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, MapPin, Clock, Martini } from "lucide-react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import StickyActions from "@/components/StickyActions";
import Marquee from "@/components/Marquee";
import PostDate from "@/components/PostDate";

const STANDOUT_FACTORS = [
  "Creative and well-balanced cocktails",
  "Quality spirits and fresh ingredients",
  "Signature drinks with a distinct identity",
  "Food that complements the drinks",
  "Comfortable and visually appealing interiors",
  "Knowledgeable bartenders",
  "Good music and entertainment",
  "Convenient location",
  "A lively atmosphere without compromising hospitality",
];

const TIKI_COCKTAILS = [
  { num: "01", title: "Powhiri Picante" },
  { num: "02", title: "Island Grog" },
  { num: "03", title: "Zombie" },
  { num: "04", title: "Luau Punch" },
  { num: "05", title: "Hula Haze Negroni" },
];

const VENUE_HIGHLIGHTS = [
  "Tiki cocktails",
  "Pan-Asian and Polynesian-inspired cuisine",
  "Tropical interiors",
  "Rooftop ambience",
  "Lounge spaces",
  "Music and entertainment",
  "Late-night dining and drinks",
  "Spaces suitable for celebrations and private gatherings",
];

const FAQS = [
  {
    q: "What makes a cocktail bar one of the best in Mumbai?",
    a: "A standout cocktail bar combines creative mixology, quality ingredients, distinctive ambience, attentive hospitality, good food, and an atmosphere that makes the overall evening memorable.",
  },
  {
    q: "Where can guests enjoy Tiki cocktails in Mumbai?",
    a: "Guests looking for Tiki cocktails in Mumbai can explore Waikiki in Andheri East. Its island-inspired Tiki bar features tropical and signature cocktails designed around bold, layered flavours.",
  },
  {
    q: "Which are the best cocktail bars in Andheri East for a night out?",
    a: "The best cocktail bars in Andheri East typically combine quality drinks with food, music, ambience, and an engaging nightlife experience. Waikiki offers this combination through its Tiki cocktails, Pan-Asian cuisine, lounge atmosphere, rooftop setting, and late-night experience.",
  },
  {
    q: "What are Tiki cocktails?",
    a: "Tiki cocktails are tropical-style drinks traditionally associated with Polynesian-inspired bar culture. They often use rum or other spirits alongside citrus, tropical fruits, spices, syrups, bitters, and creative presentation.",
  },
  {
    q: "Can guests enjoy dinner and cocktails at the same place in Mumbai?",
    a: "Yes. Waikiki combines Pan-Asian and Polynesian-inspired dining with a dedicated Tiki cocktail experience, allowing guests to enjoy dinner, drinks, music, and nightlife in one destination.",
  },
  {
    q: "Is Waikiki suitable for dates, celebrations and group outings?",
    a: "Yes. Its combination of dining, cocktails, music, tropical interiors, rooftop space, and late-night atmosphere makes it suitable for date nights, birthdays, group gatherings, celebrations, and casual evenings out.",
  },
  {
    q: "Where is Waikiki located in Mumbai?",
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
          <Martini className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-maroon/60" />
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

export default function BestCocktailBarInMumbaiPage() {
  return (
    <main className="relative bg-brand-beige text-brand-maroon min-h-screen">
      <CustomCursor />
      <StickyActions />

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/new/Waikiki_038.webp"
            alt="Best Cocktail Bar in Mumbai — Tiki Cocktails at Waikiki"
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
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-brand-beige/70">Mumbai · Tiki Cocktails · Nightlife</span>
            <PostDate slug="/best-cocktail-bar-in-mumbai" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-[10vw] sm:text-[7vw] lg:text-[5.2vw] leading-[0.92] tracking-tighter text-brand-beige uppercase mb-6"
          >
            Best Cocktail
            <br />
            <span className="italic text-brand-beige/70">Bar in Mumbai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-brand-beige/70 max-w-xl leading-relaxed tracking-[0.15em]"
          >
            A Guide to Tiki Cocktails, Great Food and Late-Night Vibes
          </motion.p>
        </div>
      </section>

      <Marquee
        text="Tiki Cocktails · Pan-Asian Cuisine · Rooftop Vibes · Late Nights · Waikiki Mumbai"
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
                Mumbai's cocktail scene has come a long way. From sophisticated hotel lounges to high-energy nightlife destinations, the city offers plenty of places for people who want a well-crafted drink and a memorable night out.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/70 leading-relaxed">
                  Finding the best cocktail bar in Mumbai is not simply about finding a place with an extensive drinks menu.
                </p>
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Today's diners and nightlife enthusiasts are looking for the complete package—creative cocktails, elevated food, stylish interiors, great music, attentive hospitality, and an atmosphere that feels worth leaving home for.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For those exploring this side of Mumbai nightlife, Waikiki in Andheri East offers a distinctive island-inspired experience where Tiki cocktails, Pan-Asian cuisine, tropical interiors, music, and late-night energy come together.
              </p>
            </motion.div>

            {/* Section 1 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 01" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                What Makes a Cocktail Bar
                <br />
                <span className="italic text-brand-maroon/70">Stand Out in Mumbai?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A great cocktail bar needs more than a polished counter and a long drinks list. The strongest venues understand that cocktails are part of a broader hospitality experience.
              </p>
              <CheckList heading="What Guests Look For" items={STANDOUT_FACTORS} />
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                When these elements work together, a regular night out becomes a memorable experience.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                That is particularly relevant in Mumbai, where guests often move seamlessly from dinner to cocktails, music, and late-night socializing.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 02" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Why Waikiki Offers a Different
                <br />
                <span className="italic text-brand-maroon/70">Cocktail Experience</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Waikiki takes a more immersive approach to nightlife.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Located at Hotel Peninsula Grand in Saki Naka, Andheri East, Waikiki brings an island-inspired concept to Mumbai through tropical interiors, Pan-Asian and Polynesian-inspired cuisine, Tiki cocktails, music, and a vibrant late-night setting.
              </p>

              <div className="relative h-[280px] sm:h-[380px] overflow-hidden border border-brand-maroon/10 my-8">
                <Image
                  src="/new/Waikiki_033.webp"
                  alt="Tiki cocktails and tropical interiors at Waikiki Mumbai"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-maroon/70 to-transparent" />
                <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                  <div className="space-y-2">
                    <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-beige/70">Island-Inspired · Waikiki</p>
                    <p className="font-serif text-2xl sm:text-3xl italic text-brand-beige leading-tight">Dinner, drinks,<br />and a late night.</p>
                  </div>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Rather than positioning itself as another conventional lounge, Waikiki creates an environment inspired by the spirit of Hawaii and Polynesian island culture.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For guests comparing bars in Andheri East, this gives the venue a distinctive personality.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The experience can begin with dinner, transition into cocktails, and continue into the late evening without requiring guests to change locations.
              </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div {...fadeUp} className="space-y-8">
              <SectionLabel label="Section 03" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                The Tiki
                <br />
                <span className="italic text-brand-maroon/70">Cocktail Experience</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                One of Waikiki's defining features is its Tiki cocktail program.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Tiki cocktails are known for tropical ingredients, layered flavours, citrus notes, spices, creative garnishes, and theatrical presentation. They can range from refreshing and fruit-forward to bold, spirit-led creations.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For anyone searching for a Tiki Cocktails Bar in Andheri East Mumbai, Waikiki offers a dedicated setting for exploring this style of mixology. Its cocktail menu includes distinctive creations such as:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-brand-maroon/10 border border-brand-maroon/10">
                {TIKI_COCKTAILS.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-brand-beige p-6 space-y-2 group hover:bg-brand-maroon/[0.03] transition-colors"
                  >
                    <span className="block font-serif text-3xl italic text-brand-maroon/15 leading-none">{c.num}</span>
                    <h3 className="font-serif text-xl sm:text-2xl">{c.title}</h3>
                  </motion.div>
                ))}
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                This variety gives guests the opportunity to move beyond conventional cocktails and discover combinations with a more tropical personality.
              </p>
            </motion.div>

            {/* Section 4 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 04" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Signature Cocktails in Mumbai
                <br />
                <span className="italic text-brand-maroon/70">With a Tropical Twist</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The growing popularity of craft cocktails has changed what Mumbai diners expect from a night out. Guests increasingly want drinks that have a story, personality, and sense of place.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                At Waikiki, cocktails are designed to complement the island-inspired identity of the venue. Tropical ingredients, bold flavours, creative combinations, and presentation all contribute to the experience.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For guests searching for{" "}
                <a href="/signature-cocktails-mumbai" className={INLINE_LINK}>signature cocktails in Mumbai</a>, this approach offers an alternative to the standard cocktail menu found at many conventional bars.
              </p>
              <div className="flex gap-4 py-2">
                <div className="w-px bg-brand-maroon/20 flex-shrink-0" />
                <p className="font-serif text-xl sm:text-2xl italic text-brand-maroon/70 leading-relaxed">
                  The focus is not simply on making a strong drink. It is about creating something distinctive enough to become part of the memory of the evening.
                </p>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 05" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Pairing Cocktails With
                <br />
                <span className="italic text-brand-maroon/70">Pan-Asian Cuisine</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A strong cocktail program becomes even more compelling when the food menu is designed to complement it.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Waikiki combines its drinks program with Pan-Asian and Polynesian-inspired cuisine, creating plenty of opportunities for guests to pair cocktails with sushi, seafood, grilled dishes, and bold Asian flavours.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                This makes the venue relevant not only to people searching for the best cocktail bar in Mumbai, but also to guests looking for a Pan Asian restaurant in Mumbai where dinner can naturally evolve into drinks and nightlife.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For a group, this flexibility can be particularly useful. Some guests may want sushi, others may prefer grilled dishes, while the cocktail menu provides something for everyone to explore.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 06" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                A Late-Night Destination
                <br />
                <span className="italic text-brand-maroon/70">in Andheri East</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Andheri East has become a popular destination for dining, business entertainment, celebrations, and nightlife.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For people comparing late night bars in Andheri East Mumbai, operating hours can be an important consideration.
              </p>

              <div className="flex items-start gap-4 border border-brand-maroon/10 px-6 py-5">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-maroon/70" />
                <div className="space-y-1">
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-maroon/70">Opening Hours</p>
                  <p className="font-serif text-xl sm:text-2xl">Tuesday – Sunday · 6 PM – 3 AM</p>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                That gives guests the flexibility to plan an early dinner, post-work drinks, weekend celebrations, or a late-night outing.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Its combination of dining, cocktails, music, and different spaces also makes it a natural choice for people exploring nightlife in Mumbai without wanting to visit multiple venues during the same evening.
              </p>
            </motion.div>

            {/* Section 7 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 07" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                More Than Just
                <br />
                <span className="italic text-brand-maroon/70">a Cocktail Bar</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                One of the biggest advantages of a destination such as Waikiki is that the evening does not have to follow a fixed format.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A guest might arrive for dinner, order sushi or another Pan-Asian dish, move into cocktails, enjoy music with friends, and stay late into the night.
              </p>

              <div className="relative h-[260px] sm:h-[360px] overflow-hidden border border-brand-maroon/10 my-6">
                <Image
                  src="/new/Waikiki_005.webp"
                  alt="Lounge and rooftop nightlife at Waikiki Andheri East"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/70 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <div className="h-px w-8 bg-brand-beige/40 mb-4" />
                  <p className="font-serif text-xl sm:text-2xl italic text-brand-beige leading-tight">No fixed format,<br />just a great night.</p>
                </div>
              </div>

              <CheckList heading="The Venue Brings Together" items={VENUE_HIGHLIGHTS} />

              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                That makes Waikiki relevant for more than casual drinks. It can work for date nights, birthdays, group dinners, celebrations, corporate gatherings, and weekend plans.
              </p>
            </motion.div>

            {/* Section 8 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 08" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Why Location Matters When
                <br />
                <span className="italic text-brand-maroon/70">Choosing a Cocktail Bar</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For Mumbai diners, location can be just as important as the menu.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                A destination in Andheri East provides convenient access for people living or working around Andheri, Saki Naka, Powai, Chakala, and nearby commercial areas.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For visitors comparing party places in Andheri Mumbai, having food, drinks, music, and entertainment in one destination can make planning considerably easier.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                The right location also allows an evening to continue naturally rather than ending because the group needs to relocate.
              </p>
            </motion.div>

            {/* Section 9 */}
            <motion.div {...fadeUp} className="space-y-6">
              <SectionLabel label="Section 09" />
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight tracking-tight">
                Is Waikiki One of the Best
                <br />
                <span className="italic text-brand-maroon/70">Cocktail Bars in Mumbai?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                There is no single cocktail bar that will suit every Mumbai diner.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Some guests prefer intimate speakeasies. Others want rooftop settings, live music, sophisticated hotel bars, or energetic nightlife.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Waikiki is particularly suited to guests who want something more experiential—a tropical setting, handcrafted Tiki cocktails, Pan-Asian food, music, and a late-night atmosphere.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                For someone searching for the{" "}
                <a href="/best-cocktail-bar-in-andheri" className={INLINE_LINK}>best cocktail bar in Andheri East Mumbai</a>, Waikiki provides a distinctive alternative to traditional cocktail lounges.
              </p>
              <p className="font-sans text-sm sm:text-base text-brand-maroon/70 leading-relaxed">
                Its combination of food, drinks, ambience, and entertainment makes the experience less about simply having a cocktail and more about enjoying an entire night out.
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
                      Mumbai's Island-Inspired
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight">
                      Tiki
                      <br />
                      <span className="italic text-brand-beige/70">Cocktail Bar</span>
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-beige/70 leading-relaxed">
                    Tiki cocktails, Pan-Asian cuisine, rooftop vibes and late-night energy — in the heart of Andheri East.
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
                  src="/new/Waikiki_035.webp"
                  alt="Signature Tiki cocktails at Waikiki Mumbai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-lg italic text-brand-beige">Tiki Mixology</p>
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
                  ["Bar", "Tiki · Signature Cocktails"],
                  ["Cuisine", "Pan-Asian · Polynesian"],
                  ["Spaces", "Lounge · Dining · Rooftop"],
                  ["Area", "Saki Naka, Andheri East"],
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
                  href="/best-japanese-restaurant-in-mumbai"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors border-b border-brand-maroon/10"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Best Japanese Restaurant in Mumbai: Sushi, Pan-Asian Flavours and Island Dining
                  </span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="/signature-cocktails-mumbai"
                  className="group flex items-start justify-between gap-3 px-5 py-4 hover:bg-brand-maroon/[0.03] transition-colors"
                >
                  <span className="font-serif text-base leading-snug group-hover:text-brand-maroon transition-colors">
                    Signature Cocktails in Mumbai: Where Every Evening Becomes an Experience
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
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-brand-beige/70">Your Next Mumbai Night Out</span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tighter">
              Experience Waikiki
              <br />
              <span className="italic text-brand-beige/70">After Dark</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4 max-w-2xl mx-auto"
          >
            <p className="font-sans text-sm sm:text-base text-brand-beige/70 leading-relaxed">
              The search for the best cocktail bar in Mumbai is ultimately about finding a place that delivers on the entire evening—not just the drink.
            </p>
            <p className="font-sans text-sm sm:text-base text-brand-beige/70 leading-relaxed">
              With its Tiki cocktail program, Pan-Asian and Polynesian-inspired cuisine, tropical ambience, rooftop setting, music, and late-night energy, Waikiki offers a distinctive island-inspired experience in Andheri East. For guests planning a date night, dinner with friends, celebration, or late-night outing, Waikiki brings food, cocktails, and nightlife together under one roof.
            </p>
          </motion.div>
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
              <span>Plan Your Night</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
